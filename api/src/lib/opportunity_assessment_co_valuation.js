var MySQL = require('mysql');
var DB = require('../lib/mysql_conn').Connection;

module.exports = function(company, callback){
    var query = [
        "Select",
        "tbl_client_segment_ytd.Name,",
        "tbl_market_merge.Cost_of_Capital,",
        "(tbl_balance_sheet_ltm.Asset_Total_EA / tbl_balance_sheet_ltm1.Asset_Total_EA)",
        "- 1 As EA_Growth_Rate,",
        "tbl_market_merge.Risk_Free_Rate,",
        "tbl_market_merge.Beta,",
        "tbl_market_merge.Equity_Risk_Premium,",
        "tbl_roe_analysis_ltm_all.Dividend_Payout,",
        "tbl_roe_analysis_ltm_all.ROAA,",
        "tbl_roe_analysis_ltm_all.Leverage,",
        "tbl_balance_sheet_ltm.ID,",
        "tbl_balance_sheet_ltm.Asset_Total_EA,",
        "tbl_roe_analysis_ltm_all.Total_Asset_Growth_Rate,",
        "tbl_balance_sheet_ltm.Assets_Total_Assets as Assets_Total_Assets,",
        "(((tbl_balance_sheet_ltm1.Equity_Total_BHC_Equity -",
        "tbl_balance_sheet_ltm1.Equity_Preferred_Stock) -",
        "(tbl_balance_sheet_ltm.Equity_Total_BHC_Equity -",
        "tbl_balance_sheet_ltm.Equity_Preferred_Stock) +",
        "(tbl_balance_sheet_ltm.Assets_Total_Assets * tbl_roe_analysis_ltm_all.ROAA) -",
        "((tbl_balance_sheet_ltm.Assets_Total_Assets * tbl_roe_analysis_ltm_all.ROAA) *",
        "tbl_roe_analysis_ltm_all.Dividend_Payout)) /",
        "(tbl_balance_sheet_ltm1.Equity_Total_BHC_Equity -",
        "tbl_balance_sheet_ltm1.Equity_Preferred_Stock)) As Non_Equity_Growth_Rate,",
        "(tbl_balance_sheet_ltm.Equity_Total_BHC_Equity-tbl_balance_sheet_ltm.equity_preferred_stock) as Equity_Total_BHC_Equity,",
        "(tbl_balance_sheet_ltm1.Equity_Total_BHC_Equity-tbl_balance_sheet_ltm1.equity_preferred_stock) as Prev_Equity_Total_BHC_Equity,",
        "((tbl_balance_sheet_ltm.Equity_Total_BHC_Equity-tbl_balance_sheet_ltm.equity_preferred_stock) / (tbl_balance_sheet_ltm1.Equity_Total_BHC_Equity-tbl_balance_sheet_ltm1.equity_preferred_stock)) -1 as Equity_Growth,",
        "(tbl_market_merge.Closing *",
        "tbl_balance_sheet_ltm.Misc_Common_Shares_Outstanding) As Mkt_cap,",
        "tbl_balance_sheet_ltm.Misc_Common_Shares_Outstanding As Shares,",
        "(tbl_balance_sheet_ltm.Misc_Common_Shares_Outstanding/tbl_balance_sheet_ltm1.Misc_Common_Shares_Outstanding)-1 As Share_Growth_Rate,",
        "tbl_market_merge.Actual_Closing as Closing,",
        "tbl_balance_sheet_ltm.assets_total_assets_period_end as assets_total_ending,",
        "tbl_balance_sheet_ltm1.assets_total_assets_period_end as assets_total_prev_ending,",
        "tbl_balance_sheet_ltm.equity_total_bhc_equity_period_end as equity_total_ending,",
        "tbl_balance_sheet_ltm1.equity_total_bhc_equity_period_end as equity_total_prev_ending,",
        "cast(Right(tbl_period.Current_Period_Name,4) as UNSIGNED) as Year",
        "From",
        "tbl_period Inner Join",
        "tbl_roe_analysis_ltm_all On tbl_period.Current_Period =",
        "tbl_roe_analysis_ltm_all.Period Inner Join",
        "tbl_market_merge On tbl_market_merge.Period = tbl_period.Current_Period",
        "Inner Join",
        "tbl_segment On tbl_market_merge.segment = tbl_segment.ID And",
        "tbl_roe_analysis_ltm_all.Segment = tbl_segment.ID Inner Join",
        "tbl_client_segment_ytd On tbl_roe_analysis_ltm_all.ID =",
        "tbl_client_segment_ytd.ID And tbl_client_segment_ytd.Period =",
        "tbl_period.Current_Period And",
        "tbl_market_merge.ID = tbl_client_segment_ytd.ID Inner Join",
        "tbl_balance_sheet_ltm On tbl_balance_sheet_ltm.ID = tbl_client_segment_ytd.ID",
        "And tbl_balance_sheet_ltm.Period = tbl_period.Current_Period Inner Join",
        "tbl_balance_sheet_ltm tbl_balance_sheet_ltm1 On tbl_balance_sheet_ltm1.Period",
        "= tbl_period.Previous_Period_4 And tbl_balance_sheet_ltm1.ID =",
        "tbl_client_segment_ytd.ID",
        "Where",
        "tbl_period.Most_Recent_Period = 1 And",
        "tbl_client_segment_ytd.ID = " + company
    ].join(' ');
		
    var target_mkt = [
        "Select",
        "round(tbl_roe_analysis_ltm_all.ROAA, 2) As ROAA,",
        "tbl_market_merge.Risk_Free_Rate,",
        "(tbl_balance_sheet_ltm.Asset_Total_EA / tbl_balance_sheet_ltm1.Asset_Total_EA)",
        "- 1 As EA_Growth_Rate,",
        "(((tbl_balance_sheet_ltm1.Equity_Total_BHC_Equity -",
        "tbl_balance_sheet_ltm1.Equity_Preferred_Stock) -",
        "(tbl_balance_sheet_ltm.Equity_Total_BHC_Equity -",
        "tbl_balance_sheet_ltm.Equity_Preferred_Stock) +",
        "(tbl_balance_sheet_ltm.Assets_Total_Assets * tbl_roe_analysis_ltm_all.ROAA) -",
        "((tbl_balance_sheet_ltm.Assets_Total_Assets * tbl_roe_analysis_ltm_all.ROAA) *",
        "tbl_roe_analysis_ltm_all.Dividend_Payout)) /",
        "(tbl_balance_sheet_ltm1.Equity_Total_BHC_Equity -",
        "tbl_balance_sheet_ltm1.Equity_Preferred_Stock)) As Non_Equity_Growth_Rate,",
        "(tbl_balance_sheet_ltm.Misc_Common_Shares_Outstanding/tbl_balance_sheet_ltm1.Misc_Common_Shares_Outstanding)-1 As Share_Growth_Rate,",
        "tbl_market_merge.Beta,",
        "tbl_roe_analysis_ltm_all.Dividend_Payout,",
        "tbl_period.Current_Period",
        "From",
        "tbl_period Inner Join",
        "tbl_roe_analysis_ltm_all On tbl_period.Current_Period =",
        "tbl_roe_analysis_ltm_all.Period Inner Join",
        "tbl_trs_required_for_top_quartile On tbl_trs_required_for_top_quartile.Period",
        "= tbl_period.Current_Period Inner Join",
        "tbl_market_merge On tbl_market_merge.Period = tbl_period.Current_Period",
        "Inner Join",
        "tbl_segment On tbl_market_merge.segment = tbl_segment.ID And",
        "tbl_trs_required_for_top_quartile.Segment = tbl_segment.ID And",
        "tbl_roe_analysis_ltm_all.Segment = tbl_segment.ID Inner Join",
        "tbl_client_segment_ytd On tbl_roe_analysis_ltm_all.ID =",
        "tbl_client_segment_ytd.ID And tbl_client_segment_ytd.Period =",
        "tbl_period.Current_Period And",
        "tbl_market_merge.ID = tbl_client_segment_ytd.ID Inner Join",
        "tbl_balance_sheet_ltm On tbl_balance_sheet_ltm.ID = tbl_client_segment_ytd.ID",
        "And tbl_balance_sheet_ltm.Period = tbl_period.Current_Period Inner Join",
        "tbl_balance_sheet_ltm tbl_balance_sheet_ltm1 On tbl_balance_sheet_ltm1.Period",
        "= tbl_period.Previous_Period_4 And tbl_balance_sheet_ltm1.ID =",
        "tbl_client_segment_ytd.ID",
        "Where",
        "tbl_period.Last_10_Years < 20 And",
        "tbl_client_segment_ytd.ID = " + company
    ].join(' ');

    var rows = {};
    var arr = {};
    DB.query(query, function(err1, result){
        DB.query(target_mkt, function(err2, result2){
            try{
                result.forEach(function(row){
                    Object.keys(row).forEach(function(key){
                        if(!rows[key]){
                            rows[key] = [];
                        }
                        rows[key].push(row[key]);
                    });
                });

                result2.forEach(function(row){
                    Object.keys(row).forEach(function(key){
                        if(!arr[key]){
                            arr[key] = [];
                        }
                        arr[key].push(row[key]);
                    });
                });

                var target = [];
                var k = 0;
                var out = {};
                out["Field"] = [];
                Object.keys(arr).forEach(function(header){
                    out["Field"].push(header);
                    k++;
                })

                var l=0;
                var j = 0;
                while(l<k){
                    j=0;

                    arr[out["Field"][l]].forEach(function(item){
                        j++;
                    })

                    arr[out["Field"][l]] = arr[out["Field"][l]].sort();

                    j = Math.floor(j/2);

                    if(!target[out["Field"][l]]){
                        target[out["Field"][l]] = [];
                    }
                    target[out["Field"][l]].push(arr[out["Field"][l]][j]);

                    l++;
                }



                var target_risk_free_increment = 0;// (target["Risk_Free_Rate"][0] - rows["Risk_Free_Rate"][0])/5;
                var target_beta_increment = 0; //(target["Beta"][0] - rows["Beta"][0])/5;
                var target_roaa_increment = 0; //(target["ROAA"][0] - rows["ROAA"][0])/5;
                var target_dividend_increment = 0; //(target["Dividend_Payout"][0] - rows["Dividend_Payout"][0])/5;
                var target_growth_increment = 0;  //(target["EA_Growth_Rate"][0] - rows["EA_Growth_Rate"][0])/5;
                var target_equity_growth_increment = 0; //(target["Non_Equity_Growth_Rate"][0] - rows["Non_Equity_Growth_Rate"][0])/5;
                var target_shares_growth_increment = 0; //(target["Share_Growth_Rate"][0] - rows["Share_Growth_Rate"][0])/5;
				//var target_asset_growth_increment = 0;
                
                // calculate the value

                var rowsAdd = {
                    Name: [],
                    Cost_of_Capital:[],
                    EA_Growth_Rate:[],
                    Risk_Free_Rate:[],
                    Beta:[],
                    Equity_Risk_Premium:[],
                    Dividend_Payout: [],
                    ROAA: [],
                    Leverage:[],
                    ID: [],
                    Asset_Total_EA:[],
                    Assets_Total_Assets:[],
                    Total_Asset_Growth_Rate: [],
                    Non_Equity_Growth_Rate: [],
                    Equity_Total_BHC_Equity:[],
                    Prev_Equity_Total_BHC_Equity: [],
                    Equity_Growth:[],
                    Mkt_cap: [],
                    Shares:[],
                    Share_Growth_Rate:[],
                    Closing: [],
                    Year: [],
                    NI:[],
                    Dividends:[],
                    Dividends_Per_Share:[],
                    Equity_Change: [],
                    Non_Op_Equity_Change:[],
                    Non_Op_Equity_Change_Rate:[],
                    Non_Op_Equity_Change_Rate2:[],
                    Spread:[],
                    EVA:[],
                    NI_Growth:[],
                    NI_Ann_Growth:[],
                    EA_ASSET_RATIO:[],
                    Leverage_2:[],
                    EA_Growth_Rate_100:[],
                    ROAE:[],
                    ROAE2:[],
                    ROAA2:[],
                    VCO:[],
                    FGV:[],
                    Mkt_cap2:[],
                    share_price:[],
                    TRS:[],
                    Total_TRS: [],
                    Avg_TRS: [],
                    ID_temp: [],
                    assets_total_ending:[],
                    assets_total_prev_ending:[],
                    equity_total_ending: [],
                    equity_total_prev_ending:[],
                    assets_total_ending_growth:[],
                    leverage_ending:[],
                    average_total_assets:[],
                    average_total_equity:[],
                    ni2:[],
                    roae3:[]
                };

                Object.keys(rowsAdd).forEach(function(key){
                    if(!rows[key]){
                        rows[key] = [];
                    }
                });

                var i=0;
                j=5;
                //console.log("test");
                rows["Year"].push(rows["Year"][i]+1);
                rows["NI"].push(rows["Assets_Total_Assets"][i]*rows["ROAA"][i]);
                rows["Dividends"].push(rows["NI"][i]*rows["Dividend_Payout"][i]);
                rows["Dividends_Per_Share"].push((rows["Dividends"][i]*1000)/rows["Shares"][i]);
                rows["Equity_Change"].push(rows["Equity_Total_BHC_Equity"][i]-rows["Prev_Equity_Total_BHC_Equity"][i]);
                rows["Non_Op_Equity_Change"].push(-(rows["NI"][i]-rows["Dividends"][i]-rows["Equity_Change"][i]));
                rows["Non_Op_Equity_Change_Rate"].push(rows["Non_Op_Equity_Change"][i] /rows["Prev_Equity_Total_BHC_Equity"][i]);
                rows["Non_Op_Equity_Change_Rate2"].push((rows["Non_Op_Equity_Change"][i] /rows["Prev_Equity_Total_BHC_Equity"][i]*100).toFixed(2));
                rows["Spread"].push(((rows["ROAA"][i]*rows["Leverage"][i])-rows["Cost_of_Capital"][i]));
                rows["EVA"].push(rows["Equity_Total_BHC_Equity"][i] * rows["Spread"][i]);
                rows["NI_Growth"].push(0);
                rows["NI_Ann_Growth"].push(0);
                rows["EA_ASSET_RATIO"].push((rows["Assets_Total_Assets"][i]/rows["Asset_Total_EA"][i]));
                rows["Leverage_2"].push(rows["Assets_Total_Assets"][i]/rows["Equity_Total_BHC_Equity"][i]);
                rows["EA_Growth_Rate_100"].push(rows["EA_Growth_Rate"][i]*100);
                rows["ROAE"].push(rows["NI"][i] / rows["Equity_Total_BHC_Equity"][i]);
                rows["ROAE2"].push(rows["ROAA"][i] * rows["Leverage_2"][i]);
                rows["ROAA2"].push(rows["ROAA"][i]*100);
                rows["assets_total_ending_growth"].push(((rows["assets_total_ending"][i]/rows["assets_total_prev_ending"][i])-1));
                rows["leverage_ending"].push(rows["assets_total_ending"][i]/rows["equity_total_ending"][i]);
                rows["average_total_assets"].push(rows["Assets_Total_Assets"][i]);
                rows["average_total_equity"].push(rows["Equity_Total_BHC_Equity"][i]);
                rows["ni2"].push(rows["Assets_Total_Assets"][i]*rows["ROAA"][i]);
                rows["roae3"].push(rows["ROAE"][i]);
                //console.log("test1");
                

                while(i<j){
                    rows["Share_Growth_Rate"].push(0) // assume a zero share growth rate for convenience
                    //rows["Share_Growth_Rate"][i]+target_shares_growth_increment);
                    rows["Shares"].push(rows["Shares"][i]*(1+(rows["Share_Growth_Rate"][i+1])));
                    rows["Leverage"].push(rows["Leverage"][i]);
                    rows["Equity_Risk_Premium"].push(rows["Equity_Risk_Premium"][i]);
                    rows["Dividend_Payout"].push(rows["Dividend_Payout"][i]+target_dividend_increment);
                    rows["ROAA"].push(rows["ROAA"][i]+target_roaa_increment);
                    rows["Risk_Free_Rate"].push(rows["Risk_Free_Rate"][i]+target_risk_free_increment);
                    rows["Non_Op_Equity_Change_Rate"].push(rows["Non_Op_Equity_Change_Rate"][i]+target_equity_growth_increment);
                    rows["Non_Op_Equity_Change_Rate2"].push(rows["Non_Op_Equity_Change_Rate"][i+1]*100);
                    rows["ROAA2"].push(rows["ROAA"][i]*100);
                    rows["Beta"].push(rows["Beta"][i]+target_beta_increment);
                    rows["Cost_of_Capital"].push(rows["Risk_Free_Rate"][i+1]+ (rows["Beta"][i+1]*rows["Equity_Risk_Premium"][i]));
                    rows["EA_Growth_Rate"].push(rows["EA_Growth_Rate"][i]+target_growth_increment);
					rows["Total_Asset_Growth_Rate"].push(rows["Total_Asset_Growth_Rate"][i]);
                    rows["Asset_Total_EA"].push((rows["Asset_Total_EA"][i] * (1+(rows["EA_Growth_Rate"][i]))));
                    rows["EA_ASSET_RATIO"].push((rows["Assets_Total_Assets"][i]/rows["Asset_Total_EA"][i]));
                    rows["Assets_Total_Assets"].push(rows["Assets_Total_Assets"][i]*(1+rows["Total_Asset_Growth_Rate"][i+1]));
                    rows["NI"].push(rows["Assets_Total_Assets"][i+1]*rows["ROAA"][i+1]);
                    rows["NI_Growth"].push(rows["NI"][i+1]/rows["NI"][i]-1);
                    rows["NI_Ann_Growth"].push(Math.pow(rows["NI"][i+1]/rows["NI"][0],1/(i+1))-1);
                    rows["Dividends"].push(rows["NI"][i+1]*rows["Dividend_Payout"][i+1]);
                    rows["Dividends_Per_Share"].push((rows["Dividends"][i+1]*1000)/rows["Shares"][i+1]);
					rows["Equity_Total_BHC_Equity"].push((rows["Assets_Total_Assets"][i+1]/rows["Leverage"][i+1]));
                    //rows["Equity_Total_BHC_Equity"].push(rows["Equity_Total_BHC_Equity"][i]+ rows["NI"][i+1]-rows["Dividends"][i+1]+(rows["Non_Op_Equity_Change_Rate"][i+1]*rows["Equity_Total_BHC_Equity"][i]));
                    rows["Non_Op_Equity_Change"].push((rows["Equity_Total_BHC_Equity"][i]*rows["Non_Op_Equity_Change_Rate"][i+1]));
                    rows["Equity_Growth"].push((rows["Equity_Total_BHC_Equity"][i+1]/rows["Equity_Total_BHC_Equity"][i])-1);
                    
                    //rows["Spread"].push(((rows["ROAA"][i+1]*rows["Leverage"][i+1])-rows["Cost_of_Capital"][i+1]));
                    //rows["EVA"].push(rows["Equity_Total_BHC_Equity"][i+1] * rows["Spread"][i+1]);
                    rows["Leverage_2"].push(rows["Assets_Total_Assets"][i+1]/rows["Equity_Total_BHC_Equity"][i+1]);
                    rows["EA_Growth_Rate_100"].push(rows["EA_Growth_Rate"][i+1]*100);

                    rows["ROAE"].push((rows["ROAA"][i+1]*rows["Leverage"][i+1]));
                    rows["ROAE2"].push(rows["ROAA"][i+1] * rows["Leverage_2"][i+1]);
                    
                     // ending assets and equity
                    rows["assets_total_ending_growth"].push(rows["assets_total_ending_growth"][i]);
                    rows["leverage_ending"].push(rows["leverage_ending"][i]);
                    rows["assets_total_ending"].push((1+rows["assets_total_ending_growth"][i+1])*rows["assets_total_ending"][i]);
                    rows["assets_total_prev_ending"].push(rows["assets_total_ending"][i]);
                    rows["equity_total_ending"].push(rows["assets_total_ending"][i+1]/rows["leverage_ending"][i+1]);
                    rows["equity_total_prev_ending"].push(rows["equity_total_ending"][i]);
                    rows["average_total_assets"].push((rows["assets_total_ending"][i+1]+rows["assets_total_prev_ending"][i+1])/2);
                    rows["average_total_equity"].push((rows["equity_total_ending"][i+1]+rows["equity_total_prev_ending"][i+1])/2);
                    rows["ni2"].push(rows["average_total_assets"][i+1]*rows["ROAA"][i+1]);
                    rows["roae3"].push(rows["ni2"][i+1]/rows["average_total_equity"][i+1]);
                    
            		rows["Spread"].push(rows["roae3"][i+1]-rows["Cost_of_Capital"][i+1]);
                    rows["EVA"].push(rows["average_total_equity"][i+1] * rows["Spread"][i+1]);
                    
                    
                    i=i+1;
                    rows["Year"].push(rows["Year"][i]+1);
                   
                }
				

/*
                rows["VCO"] = [];
                rows["VCO"].push((rows["Equity_Total_BHC_Equity"][0] + rows["EVA"][0] + (rows["EVA"][0]/(1+rows["Cost_of_Capital"][1]))+(rows["EVA"][0]/Math.pow(1+rows["Cost_of_Capital"][2],2))+(rows["EVA"][0]/Math.pow(1+rows["Cost_of_Capital"][3],3))+(rows["EVA"][0]/Math.pow(1+rows["Cost_of_Capital"][4],4))+(rows["EVA"][0]/rows["Cost_of_Capital"][5]))*1000);
                rows["VCO"].push((rows["Equity_Total_BHC_Equity"][1] + rows["EVA"][1] + (rows["EVA"][1]/(1+rows["Cost_of_Capital"][2]))+(rows["EVA"][1]/Math.pow(1+rows["Cost_of_Capital"][3],2))+(rows["EVA"][1]/Math.pow(1+rows["Cost_of_Capital"][4],3))+(rows["EVA"][1]/rows["Cost_of_Capital"][5]))*1000);
                rows["VCO"].push((rows["Equity_Total_BHC_Equity"][2] + rows["EVA"][2] + (rows["EVA"][2]/(1+rows["Cost_of_Capital"][3]))+(rows["EVA"][2]/Math.pow(1+rows["Cost_of_Capital"][4],2))+(rows["EVA"][2]/rows["Cost_of_Capital"][5]))*1000);
                rows["VCO"].push((rows["Equity_Total_BHC_Equity"][3] + rows["EVA"][3] + (rows["EVA"][3]/Math.pow(1+rows["Cost_of_Capital"][4],1))+(rows["EVA"][3]/rows["Cost_of_Capital"][5]) )*1000);
                rows["VCO"].push((rows["Equity_Total_BHC_Equity"][4] + rows["EVA"][4] + (rows["EVA"][4]/rows["Cost_of_Capital"][5]))*1000);
                rows["VCO"].push((rows["Equity_Total_BHC_Equity"][5] + (rows["EVA"][5]/rows["Cost_of_Capital"][5]))*1000);
*/

                rows["VCO"] = [];
                rows["VCO"].push((rows["equity_total_ending"][0] + rows["EVA"][0] + (rows["EVA"][0]/(1+rows["Cost_of_Capital"][1]))+(rows["EVA"][0]/Math.pow(1+rows["Cost_of_Capital"][2],2))+(rows["EVA"][0]/Math.pow(1+rows["Cost_of_Capital"][3],3))+(rows["EVA"][0]/Math.pow(1+rows["Cost_of_Capital"][4],4))+(rows["EVA"][0]/rows["Cost_of_Capital"][5]))*1000);
                rows["VCO"].push((rows["equity_total_ending"][1] + rows["EVA"][1] + (rows["EVA"][1]/(1+rows["Cost_of_Capital"][2]))+(rows["EVA"][1]/Math.pow(1+rows["Cost_of_Capital"][3],2))+(rows["EVA"][1]/Math.pow(1+rows["Cost_of_Capital"][4],3))+(rows["EVA"][1]/rows["Cost_of_Capital"][5]))*1000);
                rows["VCO"].push((rows["equity_total_ending"][2] + rows["EVA"][2] + (rows["EVA"][2]/(1+rows["Cost_of_Capital"][3]))+(rows["EVA"][2]/Math.pow(1+rows["Cost_of_Capital"][4],2))+(rows["EVA"][2]/rows["Cost_of_Capital"][5]))*1000);
                rows["VCO"].push((rows["equity_total_ending"][3] + rows["EVA"][3] + (rows["EVA"][3]/Math.pow(1+rows["Cost_of_Capital"][4],1))+(rows["EVA"][3]/rows["Cost_of_Capital"][5]) )*1000);
                rows["VCO"].push((rows["equity_total_ending"][4] + rows["EVA"][4] + (rows["EVA"][4]/rows["Cost_of_Capital"][5]))*1000);
                rows["VCO"].push((rows["equity_total_ending"][5] + (rows["EVA"][5]/rows["Cost_of_Capital"][5]))*1000);


                rows["FGV"] = []
                rows["FGV"].push(rows["Mkt_cap"][0]-rows["VCO"][0]);


                rows["FGV"].push((((rows["ROAA"][1]*(rows["Assets_Total_Assets"][1]-rows["Assets_Total_Assets"][0]))/Math.pow(1+rows["Cost_of_Capital"][1],1)) + ((rows["ROAA"][2]*(rows["Assets_Total_Assets"][2]-rows["Assets_Total_Assets"][1]))/Math.pow(1+rows["Cost_of_Capital"][2],2)) + ((rows["ROAA"][3]*(rows["Assets_Total_Assets"][3]-rows["Assets_Total_Assets"][2]))/Math.pow(1+rows["Cost_of_Capital"][3],3)) + ((rows["ROAA"][4]*(rows["Assets_Total_Assets"][4]-rows["Assets_Total_Assets"][3]))/Math.pow(1+rows["Cost_of_Capital"][4],4)) + ((rows["ROAA"][5]*(rows["Assets_Total_Assets"][5]-rows["Assets_Total_Assets"][4]))/rows["Cost_of_Capital"][5]))*1000);
                rows["FGV"].push((((rows["ROAA"][2]*(rows["Assets_Total_Assets"][2]-rows["Assets_Total_Assets"][1]))/Math.pow(1+rows["Cost_of_Capital"][2],1)) + ((rows["ROAA"][3]*(rows["Assets_Total_Assets"][3]-rows["Assets_Total_Assets"][2]))/Math.pow(1+rows["Cost_of_Capital"][3],2)) + ((rows["ROAA"][4]*(rows["Assets_Total_Assets"][4]-rows["Assets_Total_Assets"][3]))/Math.pow(1+rows["Cost_of_Capital"][4],3)) + ((rows["ROAA"][5]*(rows["Assets_Total_Assets"][5]-rows["Assets_Total_Assets"][4]))/rows["Cost_of_Capital"][5]))*1000);
                rows["FGV"].push((((rows["ROAA"][3]*(rows["Assets_Total_Assets"][3]-rows["Assets_Total_Assets"][2]))/Math.pow(1+rows["Cost_of_Capital"][3],1)) + ((rows["ROAA"][4]*(rows["Assets_Total_Assets"][4]-rows["Assets_Total_Assets"][3]))/Math.pow(1+rows["Cost_of_Capital"][4],2)) + ((rows["ROAA"][5]*(rows["Assets_Total_Assets"][5]-rows["Assets_Total_Assets"][4]))/rows["Cost_of_Capital"][5]))*1000);
                rows["FGV"].push((((rows["ROAA"][4]*(rows["Assets_Total_Assets"][4]-rows["Assets_Total_Assets"][3]))/Math.pow(1+rows["Cost_of_Capital"][4],1)) + ((rows["ROAA"][5]*(rows["Assets_Total_Assets"][5]-rows["Assets_Total_Assets"][4]))/rows["Cost_of_Capital"][5]))*1000);
                rows["FGV"].push((((rows["ROAA"][5]*(rows["Assets_Total_Assets"][5]-rows["Assets_Total_Assets"][4]))/rows["Cost_of_Capital"][5]))*1000);
                rows["Mkt_cap2"] = [];
                rows["Mkt_cap2"].push(rows["Mkt_cap"][0]);
                rows["share_price"] = [];
                rows["share_price"].push(rows["Closing"][0]);
                rows["TRS"] = [];
                rows["TRS"].push(0);

                i=1;
                j=5;


                while(i<=j){
					rows["Mkt_cap2"].push((rows["equity_total_ending"][i] + (rows["EVA"][i]/rows["Cost_of_Capital"][i]))*1000);
                    //rows["Mkt_cap2"].push((rows["Equity_Total_BHC_Equity"][i] + (rows["EVA"][i]/rows["Cost_of_Capital"][i]))*1000);
                    rows["share_price"].push(rows["Mkt_cap2"][i]/rows["Shares"][i-1]);
                    rows["TRS"].push((((rows["share_price"][i]-rows["share_price"][i-1])+rows["Dividends_Per_Share"][i])/rows["share_price"][i-1]));

                    i++;
                }
				
                rows["Total_TRS"] = [];
                rows["Total_TRS"].push((100*(1+rows["TRS"][1]/100)*(1+rows["TRS"][2]/100)*(1+rows["TRS"][3]/100)*(1+rows["TRS"][4]/100)*(1+rows["TRS"][5]/100)-100));
                rows["Avg_TRS"] = [];
                rows["Avg_TRS"].push(((100*(1+rows["TRS"][1])*(1+rows["TRS"][2])*(1+rows["TRS"][3])*(1+rows["TRS"][4])*(1+rows["TRS"][5]))-100)/100);
                //rows["Avg_TRS"].push((Math.pow(((rows["share_price"][0]+(rows["TRS"][1]+rows["TRS"][2]+rows["TRS"][3]+rows["TRS"][4]+rows["TRS"][5]))/rows["share_price"][0]),.2)-1));
				//console.log(rows);
                if(callback){
                    callback.call(this, rows);
                }
            }catch(e){
                if(callback){
                    callback.call(this, rowsAdd);
                }
            }

        });
    });
}
