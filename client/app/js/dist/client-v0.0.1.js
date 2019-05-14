this["views"] = this["views"] || {};

this["views"]["./app/js/views/about.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"hero\">\n	<div class=\"text\">\n		<h1 class=\"title\">ABOUT GODOLPHIN METRICS LLC</h1>\n		<p class=\"sub-title\">Godolphin Metrics LLC is pleased to provide the Bank Performance Analyzer as its first product.</p>	\n	</div>	\n</section>		\n\n<section id=\"main\" class=\"posts\">\n		<br>\n		<p><b>A MESSAGE FROM OUR FOUNDER</b><p>\n		<div class=\"aboutCircle\"> <span><img class=\"aboutImg\" src=\"/app/assets/avatars/fergus.jpg\"></span></div>\n		<div class=\"aboutText\">\n		<p>Fergus Gordon is a management consultant who founded Godolphin Metrics LLC because he was frustrated by his and similar professions continually abusing Microsoft Excel and PowerPoint. &nbsp&nbspHis ambition was simple...to provide our clients meaningful insights into the underlying drivers of company and industry performance using industrialized solutions.  &nbsp&nbspGodolphin Metrics LLC is pleased to provide the Bank Performance Analyzer as our first product in line with achieving this mission.\n		<p>Our target users are Bankers, Mangement Consultants, Equity Analysts, Industry Researchers and members of the public with an interest in better understanding the drivers of financial performance.</p>\n		<p>We welcome all input and feedback. &nbsp&nbspPlease do not hestiate to contact us at <a color=\"#0000EE\" href=\"mailto:enquiries@godolphinmetrics.com\">enquiries@godolphinmetrics.com</a> or +1 9177167672.</p>\n		</div>	\n</section>";
},"useData":true});

this["views"]["./app/js/views/admin/edit_perspective.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.segment || (depth0 != null ? depth0.segment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"segment","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Screen_description || (depth0 != null ? depth0.Screen_description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Screen_description","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\"data\">\n    <h2>Perspectives</h2>\n    <form blklab-submit=\"save\" id=\"form\">\n\n        <div class=\"row\">\n            <h3>Title</h3>\n            <input type=\"text\" name=\"title\" style=\"background:#e6e6e6; border:none; border-radius:0; width:50%;\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"row\">\n            <h3>Sub Title</h3>\n            <input type=\"text\" name=\"sub_title\" style=\"background:#e6e6e6; border:none; border-radius:0; width:50%;\" value=\""
    + alias4(((helper = (helper = helpers.sub_title || (depth0 != null ? depth0.sub_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sub_title","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"row\">\n            <h3>Author</h3>\n            <input type=\"text\" name=\"author\" style=\"background:#e6e6e6; border:none; border-radius:0; width:50%;\" value=\""
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n\n        <section id=\"filters\">\n            <div class=\"col\">\n                <h3>SELECT INDUSTRY SEGMENT</h3>\n                <select blklab-change=\"changeSegment\" name=\"segment\" id=\"segment-list\">\n                    <option>All</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.segments : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\n            </div>\n\n            <div class=\"col\">\n                <h3>SELECT RESULTS</h3>\n                <select blklab-change=\"changeScreen\" name=\"screen\" id=\"screen-list\">\n                    <option>All</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.screens : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\n            </div>\n\n            <div class=\"col\">\n                <h3>SELECT COMPANY</h3>\n                <select blklab-change=\"changeCompany\" name=\"company\" id=\"company-list\">\n                    <option>All</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\n            </div>\n        </section>\n\n        <div class=\"clear\"></div>\n\n        <div class=\"row\">\n            <h3>Title Image</h3>\n            <input type=\"file\" style=\"background:#e6e6e6; border:none; border-radius:0; width:50%;\" blklab-change=\"loadFiles\">\n            <input type=\"hidden\" name=\"title_image\" id=\"title_image\" value=\""
    + alias4(((helper = (helper = helpers.title_image || (depth0 != null ? depth0.title_image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title_image","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n\n\n        <div class=\"row\">\n            <input type=\"hidden\" name=\"id\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <input type=\"submit\" value=\"Save\">\n        </div>\n\n    </form>\n\n</section>\n\n";
},"useData":true});

this["views"]["./app/js/views/admin/edit_perspectivebackup.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.segment || (depth0 != null ? depth0.segment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"segment","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Screen_description || (depth0 != null ? depth0.Screen_description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Screen_description","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\"data\">\n    <h2>Perspectives</h2>\n    <form blklab-submit=\"save\" id=\"form\">\n\n        <div class=\"row\">\n            <h3>Title</h3>\n            <input type=\"text\" name=\"title\" style=\"background:#e6e6e6; border:none; border-radius:0; width:50%;\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"row\">\n            <h3>Sub Title</h3>\n            <input type=\"text\" name=\"sub_title\" style=\"background:#e6e6e6; border:none; border-radius:0; width:50%;\" value=\""
    + alias4(((helper = (helper = helpers.sub_title || (depth0 != null ? depth0.sub_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sub_title","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"row\">\n            <h3>Author</h3>\n            <input type=\"text\" name=\"author\" style=\"background:#e6e6e6; border:none; border-radius:0; width:50%;\" value=\""
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n\n        <section id=\"filters\">\n            <div class=\"col\">\n                <h3>SELECT INDUSTRY SEGMENT</h3>\n                <select blklab-change=\"changeSegment\" name=\"segment\" id=\"segment-list\">\n                    <option>All</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.segments : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\n            </div>\n\n            <div class=\"col\">\n                <h3>SELECT RESULTS</h3>\n                <select blklab-change=\"changeScreen\" name=\"screen\" id=\"screen-list\">\n                    <option>All</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.screens : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\n            </div>\n\n            <div class=\"col\">\n                <h3>SELECT COMPANY</h3>\n                <select blklab-change=\"changeCompany\" name=\"company\" id=\"company-list\">\n                    <option>All</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\n            </div>\n        </section>\n\n        <div class=\"clear\"></div>\n\n        <div class=\"row\">\n            <h3>Title Image</h3>\n            <input type=\"file\" style=\"background:#e6e6e6; border:none; border-radius:0; width:50%;\" blklab-change=\"loadFiles\">\n            <input type=\"hidden\" name=\"title_image\" id=\"title_image\" value=\""
    + alias4(((helper = (helper = helpers.title_image || (depth0 != null ? depth0.title_image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title_image","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"row\">\n            <h3>Text</h3>\n            <div class=\"editor\" id=\"editor\" style=\"background:#e6e6e6; height:400px; overflow: auto; padding:5px;\" blklab-change=\"updateForm\">"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n            <input type=\"hidden\" id=\"text-content\" name=\"content\">\n        </div>\n\n        <div class=\"row\">\n            <input type=\"hidden\" name=\"id\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <input type=\"submit\" value=\"Save\">\n        </div>\n\n    </form>\n\n</section>\n\n";
},"useData":true});

this["views"]["./app/js/views/admin/index.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Admin</h2>\n";
},"useData":true});

this["views"]["./app/js/views/admin/perspectives.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <tr>\n                <td><a href=\"/admin/perspectives/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></td>\n                <td>"
    + alias4(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timestamp","hash":{},"data":data}) : helper)))
    + "</td>\n                <td class=\"center\"><a href=\"/admin/perspectives/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Edit</a></td>\n                <td class=\"center\" blklab-click=\"remove\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">DELETE</td>\n            </tr>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.segment || (depth0 != null ? depth0.segment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"segment","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Screen_description || (depth0 != null ? depth0.Screen_description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Screen_description","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"data\">\n    <h2>Perspectives</h2>\n    <table>\n        <tr>\n            <th>Title</th>\n            <th>Created</th>\n            <th></th>\n            <th></th>\n        </tr>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </table>\n\n    <hr>\n\n    <h2 style=\"margin-top:30px;\">New Perspective</h2>\n    <form blklab-submit=\"save\" id=\"form\">\n\n        <div class=\"row\">\n            <h3>Title</h3>\n            <input type=\"text\" name=\"title\" style=\"background:#e6e6e6; border:none; border-radius:0; width:50%;\">\n        </div>\n\n        <div class=\"row\">\n            <h3>Sub Title</h3>\n            <input type=\"text\" name=\"sub_title\" style=\"background:#e6e6e6; border:none; border-radius:0; width:50%;\">\n        </div>\n\n        <div class=\"row\">\n            <h3>Author</h3>\n            <input type=\"text\" name=\"author\" style=\"background:#e6e6e6; border:none; border-radius:0; width:50%;\">\n        </div>\n\n\n        <section id=\"filters\">\n            <div class=\"col\">\n                <h3>SELECT INDUSTRY SEGMENT</h3>\n                <select blklab-change=\"changeSegment\" name=\"segment\" id=\"segment-list\">\n                    <option>All</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.segments : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\n            </div>\n\n            <div class=\"col\">\n                <h3>SELECT RESULTS</h3>\n                <select blklab-change=\"changeScreen\" name=\"screen\" id=\"screen-list\">\n                    <option>All</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.screens : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\n            </div>\n\n            <div class=\"col\">\n                <h3>SELECT COMPANY</h3>\n                <select blklab-change=\"changeCompany\" name=\"company\" id=\"company-list\">\n                    <option>All</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\n            </div>\n        </section>\n\n        <div class=\"clear\"></div>\n\n        <div class=\"row\">\n            <h3>Title Image</h3>\n            <input type=\"file\" style=\"background:#e6e6e6; border:none; border-radius:0; width:50%;\" blklab-change=\"loadFiles\">\n            <input type=\"hidden\" name=\"title_image\" id=\"title_image\">\n        </div>\n\n        <div class=\"row\">\n            <h3>Text</h3>\n            <div class=\"editor\" id=\"editor\" style=\"background:#e6e6e6; height:400px; overflow: auto; padding:5px;\" blklab-change=\"updateForm\"></div>\n            <input type=\"hidden\" id=\"text-content\" name=\"content\">\n        </div>\n\n        <div class=\"row\">\n            <input type=\"submit\" value=\"Save\">\n        </div>\n\n    </form>\n\n</section>\n\n";
},"useData":true});

this["views"]["./app/js/views/admin/security.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <tr>\n                <td>"
    + alias4(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"path","hash":{},"data":data}) : helper)))
    + "</td>\n                <td>\n                    <select blklab-change=\"changeLevel\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = (helpers.select || (depth0 && depth0.select) || alias2).call(alias1,(depth0 != null ? depth0.level : depth0),{"name":"select","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </select>\n                </td>\n            </tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                            <option value=\"1\">Unregistered</option>\n                            <option value=\"2\">Registered</option>\n                            <option value=\"3\">Premium</option>\n                            <option value=\"4\">Admin</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"data\">\n    <h2>API Security</h2>\n    <table>\n        <tr>\n            <th>Path</th>\n            <th>User Level</th>\n        </tr>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </table>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/admin/users.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <tr>\n                <td>"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\n                <td>"
    + alias4(((helper = (helper = helpers.level || (depth0 != null ? depth0.level : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"level","hash":{},"data":data}) : helper)))
    + "</td>\n                <td>"
    + alias4(((helper = (helper = helpers.created || (depth0 != null ? depth0.created : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"created","hash":{},"data":data}) : helper)))
    + "</td>\n                <td>"
    + alias4(((helper = (helper = helpers.active || (depth0 != null ? depth0.active : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"active","hash":{},"data":data}) : helper)))
    + "</td>\n            </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"data\">\n    <h2>Users</h2>\n    <table>\n        <tr>\n            <th>Email</th>\n            <th>User Level</th>\n            <th>Created</th>\n            <th>Active</th>\n        </tr>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </table>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/home-backup.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"hero\" class=\"home\">\n	<div class=\"text\">\n		<h1 class=\"title\">BANK PERFORMANCE ANALYZER</h1>\n		<p class=\"sub-title\">A powerful tool that allows you to quickly gain insights into the performance and potential of US Bank Holding Companies.</p>\n	</div>\n\n</section>\n\n<section id=\"whatwedo\" class=\"home\">\n\n\n	<div id=\"whatwedo_1\" class=\"whatwedo\">\n		<h2 class=\"title\">Overview</h2>\n		<div></div>\n		<div class=\"whatwedoimage\">\n			<img src=\"/app/assets/images/money.png\">\n		</div>\n		<div class=\"whatwedotext\">	\n		\n		<p class=\"sub-title\">		\nWe believe banks should be managed primarily to <b>create value</b> for shareholders and this requires detailed understanding, planning and managing of performance relative to peers. <br><br>\n		\nWe assist process by combining quarterly Bank Holding Company financial filings with the latest market data and analyst estimates to provide users instant access to generate 200+ performance metrics and make it easy for users to visualize trends, understand historical performance, assess a bank's performance outlook and simulate \"what-if\" outcomes.<br><br>\n\nClick the blue buttons below to get started or hover over a button for an overview of that section's functionality.\n		\n		</div>\n	</div>\n	\n	\n	<div class=\"galleryholder\">\n	</div>\n</section>\n\n<section id=\"main\" class=\"home\">\n    <div class=\"rowcellbank\">\n	<h2><!-- <img src=\"/app/assets/images/premium-icon.png\"> --!> INDIVIDUAL BANK ANALYZER</h2>\n	<p>Insights and analysis at the individual bank level.</p>\n<!--\n	<div class=\"divider\">\n		<img src=\"/app/assets/images/divider.jpg\">\n	</div>\n--!>\n\n	<div class=\"row\">\n		<div class=\"cell\">\n			<a href=\"/individual\"><div class=\"circle light\"><img title=\"Provides an overview of a selected bank's recent performance relative to peers across the 10 key metrics that we believe drive shareholder returns.\" src=\"/app/assets/images/pie-icon.png\"></div></a>\n			<h3><a href=\"/individual\">Performance<br>Snapshot</a></h3>\n		</div>\n\n		<div class=\"cell\">\n			<a href=\"/individual/detailed-metrics\"><div class=\"circle light\"><img title=\"Provides access to more than 200 performance metrics sourced from stock market and regulatory filings for a selected bank.  All metrics display with relative performance to peers and additional charts and analysis for each metric is also available.\" src=\"/app/assets/images/bar-icon.png\"></div></a>\n			<h3><a href=\"/individual/detailed-metrics\">Ratios &<br>Analysis</a></h3>\n		</div>\n\n\n		<div class=\"cell\">\n			<a href=\"/individual/outlook\"><div class=\"circle light\"><img title=\"Provides a snapshot of current expectations and outlook for future performance relative to peers for each listed US Bank Holding Company\"  src=\"/app/assets/images/umbrella-icon.png\"></div></a>\n			<h3><a href=\"/individual/outlook\">Estimates &<br> Outlook</a></h3>\n		</div>\n\n		<div class=\"cell\">\n			<a href=\"/individual/simulation\"><div class=\"circle light\"><img title=\"Provides the ability to simulate what would happen to shareholder returns given changes in underlying performance metrics.\"  src=\"/app/assets/images/graph-icon.png\"></div></a>\n			<h3><a href=\"/individual/simulation\">What-if<br>simulator</a></h3>\n		</div>\n		\n		<div class=\"cell\">\n			<a href=\"/perspectives\"><div class=\"circle light\"><img title=\"Access our latest thinking on a range of topics affecting the banking industry today\" src=\"/app/assets/images/list-icon.png\"></div></a>\n			<h3><a href=\"/perspectives\">Discussion &<br>Perspectives</a></h3>\n		</div>\n		\n	</div>\n	</div>\n	\n	<div class=\"rowcell\">\n	<h2>INDUSTRY ANALYZER</h2>\n	<p>Insights and analysis at the industry segment level.</p>\n<!--\n	<div class=\"divider\">\n		<img src=\"/app/assets/images/divider.jpg\">\n	</div>\n--!>	\n	\n\n	<div class=\"row\">\n		<div class=\"cell\">\n			<a href=\"/industry\"><div class=\"circle\"><img title=\"Provides an overview of a selected industry segment recent performance relative across the 10 key metrics that we believe drive shareholder returns.\" src=\"/app/assets/images/pie-icon.png\"></div></a>\n			<h3><a href=\"/industry\">Performance<br>Snapshot</a></h3>\n		</div>\n\n		<div class=\"cell\">\n			<a href=\"/industry/detailed-metrics\"><div class=\"circle\"><img title=\"Provides access to more than 200 performance metrics sourced from stock market and regulatory filings for a selected industry segment.  All metrics display with relative performance to peers and additional charts and analysis for each metric is also available.\" src=\"/app/assets/images/bar-icon.png\"></div></a>\n			<h3><a href=\"/industry/detailed-metrics\">Ratios &<br>Analysis</a></h3>\n		</div>\n\n		<div class=\"cell\">\n			<a href=\"/perspectives\"><div class=\"circle\"><img title=\"Access our latest thinking on a range of topics affecting the banking industry today\" src=\"/app/assets/images/list-icon.png\"></div></a>\n			<h3><a href=\"/perspectives\">Discussion &<br>Perspectives</a></h3>\n		</div>\n	</div>\n	</div>\n\n\n\n\n</section>\n\n<section id=\"more\">\n	<section class=\"left\" id=\"perspective-overview\">\n		<div class=\"content\"></div>\n	</section>\n	<section class=\"right\" id=\"signup-box\">\n		<div class=\"content\"></div>\n	</section>\n</section>";
},"useData":true});

this["views"]["./app/js/views/home-with scrolling.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"hero\" class=\"home\">\n	<div class=\"text\">\n		<h1 class=\"title\">BANK PERFORMANCE ANALYZER</h1>\n		<p class=\"sub-title\">A powerful tool that allows you to quickly gain insights into the performance and potential of US Bank Holding Companies.</p>\n	</div>\n\n</section>\n\n\n<section id=\"main\" class=\"home\">\n    <div class=\"rowcellbank\">\n	<h2><!-- <img src=\"/app/assets/images/premium-icon.png\"> --!> INDIVIDUAL BANK ANALYZER</h2>\n	<p>Insights and analysis at the individual bank level.</p>\n<!--\n	<div class=\"divider\">\n		<img src=\"/app/assets/images/divider.jpg\">\n	</div>\n--!>\n\n	<div class=\"row\">\n		<div class=\"cell\">\n			<a href=\"/individual\"><div class=\"circle light\"><img title=\"Provides an overview of a selected bank's recent performance relative to peers across the 10 key metrics that we believe drive shareholder returns.\" src=\"/app/assets/images/pie-icon.png\"></div></a>\n			<h3><a href=\"/individual\">Performance<br>Snapshot</a></h3>\n		</div>\n\n		<div class=\"cell\">\n			<a href=\"/individual/detailed-metrics\"><div class=\"circle light\"><img title=\"Provides access to more than 200 performance metrics sourced from stock market and regulatory filings for a selected bank.  All metrics display with relative performance to peers and additional charts and analysis for each metric is also available.\" src=\"/app/assets/images/bar-icon.png\"></div></a>\n			<h3><a href=\"/individual/detailed-metrics\">Ratios &<br>Analysis</a></h3>\n		</div>\n\n\n		<div class=\"cell\">\n			<a href=\"/individual/outlook\"><div class=\"circle light\"><img title=\"Provides a snapshot of current expectations and outlook for future performance relative to peers for each listed US Bank Holding Company\"  src=\"/app/assets/images/umbrella-icon.png\"></div></a>\n			<h3><a href=\"/individual/outlook\">Estimates &<br> Outlook</a></h3>\n		</div>\n\n		<div class=\"cell\">\n			<a href=\"/individual/simulation\"><div class=\"circle light\"><img title=\"Provides the ability to simulate what would happen to shareholder returns given changes in underlying performance metrics.\"  src=\"/app/assets/images/graph-icon.png\"></div></a>\n			<h3><a href=\"/individual/simulation\">What-if<br>simulator</a></h3>\n		</div>\n		\n		<div class=\"cell\">\n			<a href=\"/perspectives\"><div class=\"circle light\"><img title=\"Access our latest thinking on a range of topics affecting the banking industry today\" src=\"/app/assets/images/list-icon.png\"></div></a>\n			<h3><a href=\"/perspectives\">Discussion &<br>Perspectives</a></h3>\n		</div>\n		\n	</div>\n	</div>\n	\n	<div class=\"rowcell\">\n	<h2>INDUSTRY ANALYZER</h2>\n	<p>Insights and analysis at the industry segment level.</p>\n<!--\n	<div class=\"divider\">\n		<img src=\"/app/assets/images/divider.jpg\">\n	</div>\n--!>	\n	\n\n	<div class=\"row\">\n		<div class=\"cell\">\n			<a href=\"/industry\"><div class=\"circle\"><img title=\"Provides an overview of a selected industry segment recent performance relative across the 10 key metrics that we believe drive shareholder returns.\" src=\"/app/assets/images/pie-icon.png\"></div></a>\n			<h3><a href=\"/industry\">Performance<br>Snapshot</a></h3>\n		</div>\n\n		<div class=\"cell\">\n			<a href=\"/industry/detailed-metrics\"><div class=\"circle\"><img title=\"Provides access to more than 200 performance metrics sourced from stock market and regulatory filings for a selected industry segment.  All metrics display with relative performance to peers and additional charts and analysis for each metric is also available.\" src=\"/app/assets/images/bar-icon.png\"></div></a>\n			<h3><a href=\"/industry/detailed-metrics\">Ratios &<br>Analysis</a></h3>\n		</div>\n\n		<div class=\"cell\">\n			<a href=\"/perspectives\"><div class=\"circle\"><img title=\"Access our latest thinking on a range of topics affecting the banking industry today\" src=\"/app/assets/images/list-icon.png\"></div></a>\n			<h3><a href=\"/perspectives\">Discussion &<br>Perspectives</a></h3>\n		</div>\n	</div>\n	</div>\n\n\n\n\n</section>\n\n\n<section id=\"whatwedo\" class=\"home\">\n\n\n	<div id=\"whatwedo_1\" class=\"whatwedo\">\n		<h2 class=\"title\">Overview</h2>\n		<div></div>\n		<div class=\"whatwedoimage\">\n			<img src=\"/app/assets/images/money.png\">\n		</div>\n		<div class=\"whatwedotext\">	\n		\n		<p class=\"sub-title\">We take quarterly Bank Holding Company financial filings and combine them with the latest market data and analyst estimates to make it easy to visualize trends, understand historical performance, assess a bank's performance outlook and simulate \"what-if\" shareholder returns.<br><br>\n\nOur 200+ metrics and accompanying drill-down charts and analysis are comprehensive and allow you to quickly identify a bank's strengths and opportunities relative to pre-defined peer sets.\n			</p>\n		</div>\n	</div>\n\n	\n	<div id=\"whatwedo_2\" class=\"whatwedo\">\n		<h2 class=\"title\">Our Philosophy</h2>\n		<div></div>\n		<div class=\"whatwedoimage\">\n			<img src=\"/app/assets/images/connection.png\">\n		</div>\n		<div class=\"whatwedotext\">	\n			<p class=\"sub-title\">Our philosophy is banks should be managed primarily to <b>create value</b> for shareholders and that shareholders only care about <b>relative returns</b> for a given level of investment risk. \n			<br><br>  \nWe believe a proven path to success is to carefully understand, plan and manage the creation of shareholder value by targeting a small number of forward-looking performance metrics.  And this requires detailed understanding, planning and managing of those performance metrics relative to peers. \n</p>\n		</div>\n	</div>\n	\n	<div id=\"whatwedo_3\" class=\"whatwedo\">\n		<h2 class=\"title\">Our Site</h2>\n		<div></div>\n		<div class=\"whatwedoimage\">\n			<img src=\"/app/assets/images/route.png\">\n		</div>\n		<div class=\"whatwedotext\">	\n			<p class=\"sub-title\">Our site consists of the following sections which can be accessed by clicking the icons below.<br>\n			• <b>Performance Snapshot</b> – An overview of bank and industry segment performance across the 10 key metrics that drive shareholder returns. <br> \n			• <b>Ratios and Analysis</b> – Access more than 200 performance metrics sourced from stock market and regulatory filings for individual banks and <br>&nbsp&nbsp industry segments.  All metrics display with relative performance to peers and additional charts and analysis for each metric is also available.<br>\n			•	<b>Outlook and Estimates</b> – A snapshot of current expectations and outlook for future performance relative to peers for each listed US Bank Holding Company.<br>\n			•	<b>What-if Simulator</b> - Provides the ability to simulate what would happen to shareholder returns given changes in underlying performance metrics.<br>\n			•	<b>Discussion & Perspectives</b> – Our latest thinking on a range of topics affecting the banking industry today.\n</p>			\n		</div>\n	</div>	\n	\n	\n	<div class=\"galleryholder\">\n		<div id=\"circlegallery1\" class=\"circlegallery\"></div>\n		<div id=\"circlegallery2\" class=\"circlegallery\"></div>\n		<div id=\"circlegallery3\" class=\"circlegallery\"></div>\n	</div>\n</section>\n\n\n<section id=\"more\">\n	<section class=\"left\" id=\"perspective-overview\">\n		<div class=\"content\"></div>\n	</section>\n	<section class=\"right\" id=\"signup-box\">\n		<div class=\"content\"></div>\n	</section>\n</section>";
},"useData":true});

this["views"]["./app/js/views/home.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.segment || (depth0 != null ? depth0.segment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"segment","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"hero\" class=\"home\">\n	<div class=\"text\">\n		<h1 class=\"title\">BANK PERFORMANCE ANALYZER</h1>\n		<p class=\"sub-title\">A powerful tool that allows you to quickly gain insights into the performance and potential of US Bank Holding Companies.</p>\n	</div>\n\n</section>\n\n<section id=\"whatwedo\" class=\"home\">\n\n\n	<div id=\"whatwedo_1\" class=\"whatwedo\">\n		<h2 class=\"title\">Overview</h2>\n		<div></div>\n		<div class=\"whatwedoimage\">\n			<img src=\"/app/assets/images/money.png\">\n		</div>\n		<div class=\"whatwedotext\">	\n		\n		<p class=\"sub-title\">		\nOur philosophy is banks should be managed primarily to <b>create value</b> for shareholders.  We believe a proven path to success is to carefully <b>understand, plan and manage</b> the creation of this value by targeting a small number of forward-looking performance metrics.  And this requires detailed understanding, planning and managing of those metrics <b>relative to peers</b>.<br><br>\n		\nOur <b>Bank Performance Analyzer</b> combines quarterly Bank Holding Company financial filings with the latest market data and analyst estimates to make it easy for <b>analysts, consultants and bank executives</b> to visualize trends, understand historical performance, assess the performance outlook and simulate \"what-if\" returns.<br><br>\n</p>		\n		</div>\n	</div>\n	\n	\n	<div class=\"galleryholder\">\n	</div>\n</section>\n\n<section id=\"main\" class=\"home\">\n    <div class=\"rowcellbank\">\n	<div class=\"analyzericon\"><img src=\"/app/assets/images/user.png\"></div>\n	<div class=\"analyzerheader\">\n		<h2> INDIVIDUAL BANK ANALYZER</h2>\n		<p>Insights and analysis at the individual bank level.</p>\n		<h3>Select a bank and click Analyze to view results</h3>\n	</div>\n\n    <section id=\"filters\">\n\n		<div class=\"col_1\">\n          \n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n      	</div>\n		<div class=\"buttondiv\">\n			<a href=\"/individual\">\n				<button type=\"button\">Analyze</button>\n			</a>\n    	</div>\n		\n    </section>\n	 <h3>Features:</h3>\n		 <div>\n		 	<img style=\"vertical-align: middle\" HR WIDTH=\"20px\" HR HEIGHT=\"20px\" src=\"/app/assets/images/premium-icon-red.png\">&nbspPremium content\n		 </div>\n	 <div class=\"row\">\n	 \n		<div class=\"cell\">\n			<a href=\"/individual\"><div class=\"circle light\"><img src=\"/app/assets/images/pie-icon.png\"></div></a>\n			<h3><a href=\"/individual\">Performance<br>Snapshot</a></h3>\n		</div>\n		<div class=\"explanation\">\n		<p> Provides an overview of a selected bank's recent performance relative to peers across the 10 key metrics that drive shareholder returns.</p>\n		</div>	\n	</div>\n	\n	<div class=\"row\">\n		<div class=\"cell\">\n			<a href=\"/individual/detailed-metrics\"><div class=\"circle light\"><img src=\"/app/assets/images/bar-icon.png\"></div></a>\n			<h3><a href=\"/individual/detailed-metrics\">Ratios &<br>Analysis</a></h3>\n		</div>\n		<div class=\"explanation\">\n		<p> Provides access to more than 200 performance metrics sourced from stock market and regulatory filings for a selected bank.  All metrics display relative performance to peer group and additional charts and analysis are available for each metric.</p>\n		</div>	\n	</div>\n\n	 <div class=\"row\">\n		<div class=\"cell\">\n			<div class=\"premium\"><img HR WIDTH=\"20px\" HR HEIGHT=\"20px\" src=\"/app/assets/images/premium-icon-red.png\"></div>\n			<a href=\"/individual/outlook\"><div class=\"circle light\"><img src=\"/app/assets/images/umbrella-icon.png\"></div></a>\n			<h3><a href=\"/individual/outlook\">Estimates &<br> Outlook</a></h3>\n		</div>\n		<div class=\"explanation\">\n		<p> Provides a snapshot of current expectations and outlook for future performance relative to peers for each listed US Bank Holding Company.</p>\n		</div>	\n	\n</div>\n\n	 <div class=\"row\">\n		<div class=\"cell\">\n			<div class=\"premium\"><img HR WIDTH=\"20px\" HR HEIGHT=\"20px\" src=\"/app/assets/images/premium-icon-red.png\"></div>\n			<a href=\"/individual/simulation\"><div class=\"circle light\"><img title=\"Provides the ability to simulate what would happen to shareholder returns given changes in underlying performance metrics.\"  src=\"/app/assets/images/graph-icon.png\"></div></a>\n			<h3><a href=\"/individual/simulation\">What-if<br>simulator</a></h3>\n		</div>\n		<div class=\"explanation\">\n		<p> Provides the ability to simulate what would happen to shareholder returns given changes in underlying performance metrics.</p>\n		</div>	\n	</div>\n\n	 <div class=\"row\">				\n		<div class=\"cell\">\n			<a href=\"/perspectives\"><div class=\"circle light\"><img title=\"Access our latest thinking on a range of topics affecting the banking industry today\" src=\"/app/assets/images/list-icon.png\"></div></a>\n			<h3><a href=\"/perspectives\">Discussion &<br>Perspectives</a></h3>\n		</div>\n		<div class=\"explanation\">\n		<p>Access our latest thinking on a range of topics affecting the banking industry today.</p>\n		</div>	\n		</div>\n		\n	</div>\n	</div>\n	\n	<div class=\"rowcell\">\n	<div class=\"analyzericon\"><img src=\"/app/assets/images/group.png\"></div>\n	<div class=\"analyzerheader\">\n	<h2>INDUSTRY ANALYZER</h2>\n	<p>Insights and analysis at the industry segment level.</p>\n	<h3>Select a segment and click Analyze to view results</h3>\n	</div>\n    <section id=\"filters\">\n        <div class=\"col_1\">      \n            <select blklab-change=\"changeSegment\" id=\"segment-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.indSegments : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n      	</div>\n		<div class=\"buttondiv\">\n			<a href=\"/industry\">\n				<button type=\"button\">Analyze</button>\n			</a>\n    	</div>\n		\n    </section>\n	 <h3>Features:</h3>\n	 <div class=\"break\"></div>\n<!--\n	<div class=\"divider\">\n		<img src=\"/app/assets/images/divider.jpg\">\n	</div>\n--!>	\n	\n\n	<div class=\"row\">\n		<div class=\"cell\">\n			<a href=\"/industry\"><div class=\"circle\"><img src=\"/app/assets/images/pie-icon.png\"></div></a>\n			<h3><a href=\"/industry\">Performance<br>Snapshot</a></h3>\n		</div>\n		<div class=\"explanation\">\n		<p>Provides an overview of a selected industry segment recent performance across the 10 key metrics that drive shareholder returns.</p>\n		</div>	\n		</div>\n\n	<div class=\"row\">\n		<div class=\"cell\">\n			<a href=\"/industry/detailed-metrics\"><div class=\"circle\"><img src=\"/app/assets/images/bar-icon.png\"></div></a>\n			<h3><a href=\"/industry/detailed-metrics\">Ratios &<br>Analysis</a></h3>\n		</div>\n		<div class=\"explanation\">\n		<p>Provides access to more than 200 performance metrics sourced from stock market and regulatory filings for a selected industry segment.  Additional charts and analysis are available for each metric.</p>\n		</div>	\n		</div>\n		\n	<div class=\"row\">\n		<div class=\"cell\">\n			<a href=\"/perspectives\"><div class=\"circle\"><img title=\"Access our latest thinking on a range of topics affecting the industry today\" src=\"/app/assets/images/list-icon.png\"></div></a>\n			<h3><a href=\"/perspectives\">Discussion &<br>Perspectives</a></h3>\n		</div>\n		<div class=\"explanation\">\n		<p>Access our latest thinking on a range of topics affecting the industry today.</p>\n		</div>	\n		</div>\n	</div>\n	</div>\n\n\n\n\n</section>\n\n<section id=\"more\">\n	<section class=\"left\" id=\"perspective-overview\">\n		<div class=\"content\"></div>\n	</section>\n	<section class=\"right\" id=\"signup-box\">\n		<div class=\"content\"></div>\n	</section>\n</section>";
},"useData":true});

this["views"]["./app/js/views/individual/detailed-metrics_backup.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Screen_description || (depth0 != null ? depth0.Screen_description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Screen_description","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n\n<section id=\"hero\">\n<div class=\"text1\">\n    <h1 class=\"title\">Individual Bank Analyzer</h1><h2 class=\"title\"> Ratios & Analysis</h2>\n    <p class=\"sub-title\">Gain insights into the performance of individual banks by analyzing operating ratios relative to peers.</p>\n</div>\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li><a href=\"/individual\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li class=\"selected\"><a href=\"/individual/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/outlook\"><div class=\"premiuminline\"><img HR WIDTH=\"15px\" HR HEIGHT=\"15px\" src=\"/app/assets/images/premium-icon-red.png\"></div>&nbspESTIMATES & OUTLOOK</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/simulation\"><div class=\"premiuminline\"><img HR WIDTH=\"15px\" HR HEIGHT=\"15px\" src=\"/app/assets/images/premium-icon-red.png\"></div>&nbspWHAT-IF SIMULATOR</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n\n        </div>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"individual\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>BANK HOLDING COMPANY:</h3>\n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n        <div class=\"col\">\n            <h3>INDUSTRY SEGMENT:</h3>\n            <div class = \"segment\" id=\"industry_segment\"></div>\n\n            <div class = \"segment_image\" id=\"view_segment\">\n                <img blklab-click=\"showPeers\" HR WIDTH=\"90%\" HR HEIGHT=\"90%\" src=\"/app/assets/images/multiple-users.svg\">\n                <div class=\"peerSet\" id=\"peerDetails\"></div>\n            </div>\n        </div>\n\n        <div class=\"col\">\n            <h3>RATIOS TO DISPLAY:</h3>\n            <select blklab-change=\"changeScreen\" id=\"screen-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.screens : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n<!--\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> PREMIUM CONTENT</h2>\n        </div>\n--!>\n    </section>\n\n    <section id=\"data\">\n\n        "
    + ((stack1 = ((helper = (helper = helpers.table || (depth0 != null ? depth0.table : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"table","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n\n        <div class=\"clear\"></div>\n\n    </section>\n\n    <section id=\"background\"></section>\n\n    <section id=\"chart-holder\">\n        <header>\n            <div class=\"inner\">\n                <h2>RATIOS & ANALYSIS</h2>\n            </div>\n            <div id=\"close\">Close X</div>\n        </header>\n        <div class=\"container\">\n            <div id=\"single-table\">\n\n            </div>\n            <div class=\"left-graphs\">\n            <div id=\"XY_Radio\" style=\"display: block; background:#fff; padding:5px; align: right;\">\n                Results:\n                <input type=\"radio\" id=\"XY1\" name=\"XY_Display\" value=\"PCT\" blklab-change=\"changeType\"> Percentiles <input type=\"radio\" id=\"XY2\" name=\"XY_Display\" value=\"ACT\" blklab-change=\"changeType\" checked> Actuals\n            </div>\n                <section id=\"xydiv\"></section>\n                <section id=\"chartdiv\"></section>\n                <section id=\"spiderdiv\"></section>\n            </div>\n            <div class=\"right-graphs\">\n                <section id=\"bardiv\"></section>\n            </div>\n        </div>\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/individual/detailed-metrics.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                     <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.userId || (depth0 != null ? depth0.userId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.segment || (depth0 != null ? depth0.segment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"segment","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Screen_description || (depth0 != null ? depth0.Screen_description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Screen_description","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n\n<section id=\"hero\">\n<div class=\"text1\">\n    <h1 class=\"title\">Individual Bank Analyzer</h1><h2 class=\"title\"> Ratios & Analysis</h2>\n    <p class=\"sub-title\">Gain insights into the performance of individual banks by analyzing operating ratios relative to peers.</p>\n</div>\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li><a href=\"/individual\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li class=\"selected\"><a href=\"/individual/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/outlook\"><div class=\"premiuminline\"><img HR WIDTH=\"15px\" HR HEIGHT=\"15px\" src=\"/app/assets/images/premium-icon-red.png\"></div>&nbspESTIMATES & OUTLOOK</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/simulation\"><div class=\"premiuminline\"><img HR WIDTH=\"15px\" HR HEIGHT=\"15px\" src=\"/app/assets/images/premium-icon-red.png\"></div>&nbspWHAT-IF SIMULATOR</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n\n        </div>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"individual\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>BANK HOLDING COMPANY:</h3>\n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n        <div class=\"col\">\n            <h3>INDUSTRY SEGMENT:</h3>\n            <select blklab-change=\"changeSegment\" id=\"segment-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.segments : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select> \n			<div></div>\n			\n			<div class=\"segment_image\">\n				<img blklab-click=\"peerMenu\" HR WIDTH=\"90%\" HR HEIGHT=\"90%\" src=\"/app/assets/images/multiple-users.svg\">	\n				<div id=\"peerMenu\" class=\"peerMenu\">\n					<div blklab-click=\"showPeers\">\n        				<div class = \"segment_image2\" id=\"view_segment\">\n           					<img HR WIDTH=\"80%\" HR HEIGHT=\"80%\" src=\"/app/assets/images/glasses.png\">\n         				</div>\n						<div class=\"peerSet\">View segment participants</div>\n						<div id=\"peerDetails\"></div>\n					</div>	\n				<div></div>\n					\n        		<div blklab-click=\"addSegment\">\n					<div class=\"segment_image2\">\n        				<img HR WIDTH=\"80%\" HR HEIGHT=\"80%\" src=\"/app/assets/images/plus.png\">\n        			</div>\n					<div class=\"peerSet\" id=\"addSegment\">Create custom segment</div>\n				</div>\n				<div blklab-click=\"editSegment\">\n				<div class=\"segment_image2\">\n           			<img HR WIDTH=\"70%\" HR HEIGHT=\"70%\" src=\"/app/assets/images/pencil.png\">\n           		</div>\n					<div class=\"peerSet\" id=\"editSegment\">Edit existing segment</div>\n				</div>\n			</div>\n		</div>	\n	</div>\n        <div class=\"col\">\n            <h3>RATIOS TO DISPLAY:</h3>\n            <select blklab-change=\"changeScreen\" id=\"screen-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.screens : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n<!--\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> PREMIUM CONTENT</h2>\n        </div>\n--!>\n    </section>\n\n    <section id=\"data\">\n\n        "
    + ((stack1 = ((helper = (helper = helpers.table || (depth0 != null ? depth0.table : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"table","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n\n        <div class=\"clear\"></div>\n\n    </section>\n\n    <section id=\"background\"></section>\n\n    <section id=\"chart-holder\">\n        <header>\n            <div class=\"inner\">\n                <h2>RATIOS & ANALYSIS</h2>\n            </div>\n            <div id=\"close\">Close X</div>\n        </header>\n        <div class=\"container\">\n            <div id=\"single-table\">\n\n            </div>\n            <div class=\"left-graphs\">\n            <div id=\"XY_Radio\" style=\"display: block; background:#fff; padding:5px; align: right;\">\n                Results:\n                <input type=\"radio\" id=\"XY1\" name=\"XY_Display\" value=\"PCT\" blklab-change=\"changeType\"> Percentiles <input type=\"radio\" id=\"XY2\" name=\"XY_Display\" value=\"ACT\" blklab-change=\"changeType\" checked> Actuals\n            </div>\n                <section id=\"xydiv\"></section>\n                <section id=\"chartdiv\"></section>\n				<section id=\"spiderdiv\"></section>\n            </div>\n            <div class=\"right-graphs\">\n                <section id=\"bardiv\"></section>\n            </div>\n        </div>\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/individual/index.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.userId || (depth0 != null ? depth0.userId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.segment || (depth0 != null ? depth0.segment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"segment","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Screen_description || (depth0 != null ? depth0.Screen_description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Screen_description","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"hero\">\n    <div class=\"text1\">\n        <h1 class=\"title\">INDIVIDUAL BANK Analyzer</h1><h2 class=\"title\">PERFORMANCE SNAPSHOT</h2>\n        <p class=\"sub-title\">Gain insights into the performance of individual banks by reviewing snapshots of results relative to peers.</p>\n    </div>\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li class=\"selected\"><a href=\"/individual\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/outlook\"><div class=\"premiuminline\"><img HR WIDTH=\"15px\" HR HEIGHT=\"15px\" src=\"/app/assets/images/premium-icon-red.png\"></div>&nbspESTIMATES & OUTLOOK</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/simulation\"><div class=\"premiuminline\"><img HR WIDTH=\"15px\" HR HEIGHT=\"15px\" src=\"/app/assets/images/premium-icon-red.png\"></div>&nbspWHAT-IF SIMULATOR</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n        </div>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"individual\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>BANK HOLDING COMPANY:</h3>\n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n        <div class=\"col\">\n            <h3>INDUSTRY SEGMENT:</h3>\n            <select blklab-change=\"changeSegment\" id=\"segment-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.segments : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select> \n			<div></div>\n			\n			<div class=\"segment_image\">\n				<img blklab-click=\"peerMenu\" HR WIDTH=\"90%\" HR HEIGHT=\"90%\" src=\"/app/assets/images/multiple-users.svg\">	\n				<div id=\"peerMenu\" class=\"peerMenu\">\n					<div blklab-click=\"showPeers\">\n        				<div class = \"segment_image2\" id=\"view_segment\">\n           					<img HR WIDTH=\"80%\" HR HEIGHT=\"80%\" src=\"/app/assets/images/glasses.png\">\n         				</div>\n						<div class=\"peerSet\">View segment participants</div>\n						<div id=\"peerDetails\"></div>\n					</div>	\n				<div></div>\n					\n        		<div blklab-click=\"addSegment\">\n					<div class=\"segment_image2\">\n        				<img HR WIDTH=\"80%\" HR HEIGHT=\"80%\" src=\"/app/assets/images/plus.png\">\n        			</div>\n					<div class=\"peerSet\" id=\"addSegment\">Create custom segment</div>\n				</div>\n				<div blklab-click=\"editSegment\">\n				<div class=\"segment_image2\">\n           			<img HR WIDTH=\"70%\" HR HEIGHT=\"70%\" src=\"/app/assets/images/pencil.png\">\n           		</div>\n					<div class=\"peerSet\" id=\"editSegment\">Edit existing segment</div>\n				</div>\n			</div>\n		</div>	\n\n        <div class=\"colhidden\">\n            <h3>SNAPSHOT:</h3>\n            <select blklab-change=\"changeScreen\" id=\"screen-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.screens : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n<!--\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> PREMIUM CONTENT</h2>\n        </div>\n--!>\n    </section>\n\n    <section id=\"data\">\n        <div class=\"block single\">\n            <h4>SHAREHOLDER RETURNS</h4>\n            <div class=\"chart-holder\">\n                <div class=\"chart\">\n                    <h3>Total Return - 5 years (%)</h3>\n                    <div class=\"overlay\">\n                        <p id=\"tr_5_value\" class=\"value\"></p>\n                        <p id=\"tr_5_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"tr_5\" data-id=\"TR_5\" class=\"graph\" width=\"230%\" height=\"230%\"/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"block double\">\n            <h4>SHAREHOLDER VALUE DRIVERS</h4>\n            <div class=\"chart-holder\">\n                <div class=\"chart\">\n                    <h3>Economic Profitability (%)</h3>\n                    <div class=\"overlay\">\n                        <p id=\"spread_value\" class=\"value\"></p>\n                        <p id=\"spread_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"spread\" data-id=\"Spread\" class=\"graph\" width=\"230%\" height=\"230%\"/>\n                </div>\n\n                <div class=\"chart\">\n                    <h3>Equity Growth Rate (%)</h3>\n                    <div class=\"overlay\">\n                        <p id=\"equity_growth_rate_value\" class=\"value\"></p>\n                        <p id=\"equity_growth_rate_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"equity_growth_rate\" data-id=\"Equity_Growth_Rate\" class=\"graph\" width=\"230%\" height=\"230%\"/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"block double\">\n            <h4>PROFITABILITY DRIVERS</h4>\n            <div class=\"chart-holder\">\n                <div class=\"chart\">\n                    <h3>Return On Equity (%)</h3>\n                    <div class=\"overlay\">\n                        <p id=\"roae_value\" class=\"value\"></p>\n                        <p id=\"roae_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"roae\" data-id=\"ROAE\" class=\"graph\" width=\"230%\" height=\"230%\"/>\n                </div>\n\n                <div class=\"chart\">\n                    <h3>Cost Of Capital (%)</h3>\n                    <div class=\"overlay\">\n                        <p id=\"cost_of_capital_value\" class=\"value\"></p>\n                        <p id=\"cost_of_capital_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"cost_of_capital\" data-id=\"Cost_of_Capital\" class=\"graph\" width=\"230%\" height=\"230%\"/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"block full\">\n            <h4>RETURN ON EQUITY DRIVERS</h4>\n            <div class=\"chart-holder\">\n                <div class=\"chart\">\n                    <h3>Efficiency Ratio (%)</h3>\n                    <div class=\"overlay\">\n                        <p id=\"efficiency_ratio_value\" class=\"value\"></p>\n                        <p id=\"efficiency_ratio_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"efficiency_ratio\" data-id=\"Efficiency_Ratio\" class=\"graph\" width=\"230%\" height=\"230%\"/>\n                </div>\n\n                <div class=\"chart\">\n                    <h3>Loan Loss Ratio (%)</h3>\n                    <div class=\"overlay\">\n                        <p id=\"llr_value\" class=\"value\"></p>\n                        <p id=\"llr_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"llr\" data-id=\"LLR\" class=\"graph\" width=\"230%\" height=\"230%\"/>\n                </div>\n                <div class=\"chart\">\n                    <h3>Asset Yield (%)</h3>\n                    <div class=\"overlay\">\n                        <p id=\"asset_yield_value\" class=\"value\"></p>\n                        <p id=\"asset_yield_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"asset_yield\" data-id=\"Asset_Yield\" class=\"graph\" width=\"230%\" height=\"230%\"/>\n                </div>\n\n                <div class=\"chart\">\n                    <h3>Leverage</h3>\n                    <div class=\"overlay\">\n                        <p id=\"leverage_value\" class=\"value\"></p>\n                        <p id=\"leverage_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"leverage\" data-id=\"Leverage\" class=\"graph\" width=\"230%\" height=\"230%\"/>\n                </div>\n                <div class=\"chart\">\n                    <h3>Effective Tax Rate (%)</h3>\n                    <div class=\"overlay\">\n                        <p id=\"roaa_effective_tax_rate_value\" class=\"value\"></p>\n                        <p id=\"roaa_effective_tax_rate_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"roaa_effective_tax_rate\" data-id=\"ROAA_Effective_Tax_Rate\" class=\"graph\" width=\"230%\" height=\"230%\"/>\n                </div>\n            </div>\n        </div>\n\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/individual/outlook_backup_04102017.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Screen_description || (depth0 != null ? depth0.Screen_description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Screen_description","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"hero\">\n<div class=\"text1\">\n    <h1 class=\"title\">Individual Bank</h1><h2 class=\"title\"> ESTIMATES & OUTLOOK</h2>\n    <p class=\"sub-title\">Gain insights into the future performance of individual banks by understanding the likely impact of market assumptions and forecasts.</p>\n</div>\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li><a href=\"/individual\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li class=\"selected\"><a href=\"/individual/outlook\"><div class=\"premiuminline\"><img HR WIDTH=\"15px\" HR HEIGHT=\"15px\" src=\"/app/assets/images/premium-icon-red.png\"></div>&nbspESTIMATES & OUTLOOK</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/simulation\"><div class=\"premiuminline\"><img HR WIDTH=\"15px\" HR HEIGHT=\"15px\" src=\"/app/assets/images/premium-icon-red.png\"></div>&nbspWHAT-IF SIMULATOR</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n        </div>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"individual\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>BANK HOLDING COMPANY</h3>\n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n\n        <div class=\"col\">\n            <h3>INDUSTRY SEGMENT:</h3>\n            <div class = \"segment\" id=\"industry_segment\"></div>\n\n            <div class = \"segment_image\" id=\"view_segment\">\n                <img blklab-click=\"showPeers\" HR WIDTH=\"90%\" HR HEIGHT=\"90%\" src=\"/app/assets/images/multiple-users.svg\">\n                <div class=\"peerSet\" id=\"peerDetails\"></div>\n            </div>\n        </div>\n\n        <div class=\"colhidden\">\n            <h3>SELECT RESULTS</h3>\n            <select blklab-change=\"changeScreen\" id=\"screen-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.screens : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n<!--\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> PREMIUM CONTENT</h2>\n        </div>\n\n--!>\n    </section>\n\n    <section id=\"data\">\n        <div class=\"block full\">\n            <div class=\"chart-holder\">\n                <table style=\"layout: fixed; width:100%; border:0\">\n                    <tr>\n                        <td Rowspan=1; style=\"width:35%;  vertical-align: top; background-color:#fff\">\n\n                            <!-- <div style=\"display: block; width: 100%; height: 3%; text-align:Left\"><b>&nbspESTIMATES</b></div> --!>\n                            <div id=\"Assumptions\" style=\"display: block; width: 100%; height: 97%; text-align:Left\">\n\n                                <table style=\"width: 90%; height: 95%; margin-left: auto; margin-right: auto;\">\n                                    <tr>\n                                        <th colspan = 2 style=\"width: 60%\">&nbspESTIMATES</th>\n                                        <th style=\"width: 2.5%\"></th>\n                                        <th style=\"width: 15%; text-align:center\" id=\"year_current\"></th>\n                                        <th style=\"width: 2.5%\"></th>\n                                        <th style=\"width: 15%; text-align:center\" id=\"year_future\"></th>\n                                    </tr>\n                                    <tr>\n                                        <td colspan = 2 style=\"width: 60%\"><b><i>&nbsp&nbspEconomic Profitabilty</i></b></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 2px solid gray; text-align:center\" id=\"spread_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 2px solid gray; text-align:center\" id=\"spread_future\"></td>\n                                    </tr>\n                                    <tr style=\"height: 1%\"></tr>\n                                    <tr>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 57.5%\">&nbsp&nbspReturn on Equity</td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"roae_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"roae_future\"></td>\n                                    </tr>\n                                    <tr style=\"height: 1%\"></tr>\n                                    <tr>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 57.5%\">&nbsp&nbspCost of Capital</td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"Cost_of_Capital_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"Cost_of_Capital_future\"></td>\n                                    </tr>\n                                    <tr style=\"height: 1%\"></tr>\n                                    <tr>\n                                        <td colspan = 2 style=\"width: 60%\"><b><i>&nbsp&nbspEquity Growth Rate</i></b></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 2px solid gray; text-align:center\" id=\"equity_growth_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 2px solid gray; text-align:center\" id=\"equity_growth_future\"></td>\n                                    </tr>\n                                    <tr style=\"height: 1%\"></tr>\n                                    <tr>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 57.5%\">&nbsp&nbspAsset Growth Rate</td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"ea_growth_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"ea_growth_future\"></td>\n                                    </tr>\n                                    <tr style=\"height: 1%\"></tr>\n                                    <tr>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 57.5%\">&nbsp&nbspLeverage</td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"leverage_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"leverage_future\"></td>\n                                    </tr>\n                                     <tr style=\"height: 1%\"></tr>\n                                    <tr>\n                                        <td colspan = 2 style=\"width: 60%\"><b><i>&nbsp&nbspCommon Share Growth Rate</i></b></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 2px solid gray; text-align:center\" id=\"shares_growth_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 2px solid gray; text-align:center\" id=\"shares_growth_future\"></td>\n                                    </tr>\n                                </table>\n                            </div>\n                        </td>\n\n\n                        <td style=\"width:1%;vertical-align: top;\"></td>\n\n                        <td style=\"width:35%;vertical-align: top;   background-color:#fff\">\n                            <div style=\"width: 100%; display: inline-block; height: 3%; text-align:center\"><b>Total Returns Outlook</b></div>\n                            <div id=\"pct_cht\" style=\"width: 100%; height:250px; \"></div>\n                        </td>\n\n                        <td style=\"width: 1%; \"></td>\n\n                        <td id=\"Peers\" Rowspan=3 style=\"width:27%;  text-align:center; align: center; vertical-align: middle; background-color:#fff\">\n                                <div style=\"width=100%; vertical-align: top; height:1%; display: inline-block; \"><b><br>Estimated Total Returns - 5 year avg</b></div>\n                                <div id=\"peers_cht\" style=\"width: 100%; height: 500px; align: center; \"></div>\n\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td colspan=3 style=\"width:34%; height:1%\"></td>\n                    </tr>\n\n                    <tr>\n\n                        <td id=\"SP\" colspan=1 style=\"width:35%;\">\n\n                        <div id=\"tradeoff_chrt\" style=\"width: 100%; height:275px;background-color:#fff\"></div>\n                        </td>\n                           <td style=\"width:1%; vertical-align: top;  height:32%\"></td>\n                        <td id=\"SP\" colspan=1 style=\"width:35%;\">\n                                <div id=\"TRS_chrt\" style=\"width: 100%; inline-block; height:275px;  background-color:#fff\"></div>\n                            </td>\n\n                        <td style=\"width:1%; vertical-align: top;  height:32%\"></td>\n\n                    </tr>\n\n                    <tr>\n                        <td colspan=\"4\" style=\"width:73%; height:1%\"></td>\n                    </tr>\n\n                    <tr>\n                        <td colspan=\"3\" style=\"width:%; \">\n                                <div id=\"hide\" style=\"float: left;width: 49%;  background-color:#fff\">\n                                <div style=\"width: 100%; height: 10%; text-align:Center;margin: auto\"><b>Top Quartile Shareholder Returns<br>ROE vs. Equity Growth Rate Trade  Off</b></div>\n                                <div id=\"tradeoff_chrt\" style=\"width: 100%; height:275px;\"></div>\n                            </div>\n                            <div id=\"hide1\" style=\"float: right;width: 49%;  background-color:#fff\">\n                                <div style=\"width: 100%; height: 10%; text-align:Center\"><b>Market Capitalization <br> Value of Current Operations vs. Future Growth</b></div>\n                                <div id=\"fgv_vco_chrt\" style=\"width: 100%; height:275px;  border: 0px solid black\"></div>\n\n                            </div>\n                        </td>\n                        <td style=\"width:1%; vertical-align: top;  height:32%\"></td>\n                    </tr>\n                </table>\n                </div>\n            </div>\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/individual/outlook.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                     <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.userId || (depth0 != null ? depth0.userId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.segment || (depth0 != null ? depth0.segment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"segment","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Screen_description || (depth0 != null ? depth0.Screen_description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Screen_description","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"hero\">\n<div class=\"text1\">\n    <h1 class=\"title\">Individual Bank</h1><h2 class=\"title\"> ESTIMATES & OUTLOOK</h2>\n    <p class=\"sub-title\">Gain insights into the future performance of individual banks by understanding the likely impact of market assumptions and forecasts.</p>\n</div>\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li><a href=\"/individual\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li class=\"selected\"><a href=\"/individual/outlook\"><div class=\"premiuminline\"><img HR WIDTH=\"15px\" HR HEIGHT=\"15px\" src=\"/app/assets/images/premium-icon-red.png\"></div>&nbspESTIMATES & OUTLOOK</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/simulation\"><div class=\"premiuminline\"><img HR WIDTH=\"15px\" HR HEIGHT=\"15px\" src=\"/app/assets/images/premium-icon-red.png\"></div>&nbspWHAT-IF SIMULATOR</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n        </div>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"individual\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>BANK HOLDING COMPANY</h3>\n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n\n        <div class=\"col\">\n            <h3>INDUSTRY SEGMENT:</h3>\n            <select blklab-change=\"changeSegment\" id=\"segment-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.segments : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select> \n			<div class=\"segment_image\">\n				<img blklab-click=\"peerMenu\" HR WIDTH=\"90%\" HR HEIGHT=\"90%\" src=\"/app/assets/images/multiple-users.svg\">	\n				<div id=\"peerMenu\" class=\"peerMenu\">\n					<div blklab-click=\"showPeers\">\n        				<div class = \"segment_image2\" id=\"view_segment\">\n           					<img HR WIDTH=\"80%\" HR HEIGHT=\"80%\" src=\"/app/assets/images/glasses.png\">\n         				</div>\n						<div class=\"peerSet\">View segment participants</div>\n						<div id=\"peerDetails\"></div>\n					</div>	\n				<div></div>\n					\n        		<div blklab-click=\"addSegment\">\n					<div class=\"segment_image2\">\n        				<img HR WIDTH=\"80%\" HR HEIGHT=\"80%\" src=\"/app/assets/images/plus.png\">\n        			</div>\n					<div class=\"peerSet\" id=\"addSegment\">Create custom segment</div>\n				</div>\n				<div blklab-click=\"editSegment\">\n				<div class=\"segment_image2\">\n           			<img HR WIDTH=\"70%\" HR HEIGHT=\"70%\" src=\"/app/assets/images/pencil.png\">\n           		</div>\n					<div class=\"peerSet\" id=\"editSegment\">Edit existing segment</div>\n				</div>\n			</div>\n		</div>	\n	</div>\n\n        <div class=\"colhidden\">\n            <h3>SELECT RESULTS</h3>\n            <select blklab-change=\"changeScreen\" id=\"screen-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.screens : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n<!--\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> PREMIUM CONTENT</h2>\n        </div>\n\n--!>\n    </section>\n\n    <section id=\"data\">\n        <div class=\"block full\">\n            <div class=\"chart-holder\">\n                <table style=\"layout: fixed; width:100%; border:0\">\n                    <tr>\n                        <td Rowspan=1; style=\"width:35%;  vertical-align: top; background-color:#fff\">\n\n                            <!-- <div style=\"display: block; width: 100%; height: 3%; text-align:Left\"><b>&nbspESTIMATES</b></div> --!>\n                            <div id=\"Assumptions\" style=\"display: block; width: 100%; height: 97%; text-align:Left\">\n\n                                <table style=\"width: 90%; height: 95%; margin-left: auto; margin-right: auto;\">\n                                    <tr>\n                                        <th colspan = 2 style=\"width: 60%\">&nbspESTIMATES</th>\n                                        <th style=\"width: 2.5%\"></th>\n                                        <th style=\"width: 15%; text-align:center\" id=\"year_current\"></th>\n                                        <th style=\"width: 2.5%\"></th>\n                                        <th style=\"width: 15%; text-align:center\" id=\"year_future\"></th>\n                                    </tr>\n                                    <tr>\n                                        <td colspan = 2 style=\"width: 60%\"><b><i>&nbsp&nbspEconomic Profitabilty</i></b></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 2px solid gray; text-align:center\" id=\"spread_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 2px solid gray; text-align:center\" id=\"spread_future\"></td>\n                                    </tr>\n                                    <tr style=\"height: 1%\"></tr>\n                                    <tr>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 57.5%\">&nbsp&nbspReturn on Equity</td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"roae_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"roae_future\"></td>\n                                    </tr>\n                                    <tr style=\"height: 1%\"></tr>\n                                    <tr>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 57.5%\">&nbsp&nbspCost of Capital</td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"Cost_of_Capital_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"Cost_of_Capital_future\"></td>\n                                    </tr>\n                                    <tr style=\"height: 1%\"></tr>\n                                    <tr>\n                                        <td colspan = 2 style=\"width: 60%\"><b><i>&nbsp&nbspEquity Growth Rate</i></b></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 2px solid gray; text-align:center\" id=\"equity_growth_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 2px solid gray; text-align:center\" id=\"equity_growth_future\"></td>\n                                    </tr>\n                                    <tr style=\"height: 1%\"></tr>\n                                    <tr>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 57.5%\">&nbsp&nbspAsset Growth Rate</td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"ea_growth_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"ea_growth_future\"></td>\n                                    </tr>\n                                    <tr style=\"height: 1%\"></tr>\n                                    <tr>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 57.5%\">&nbsp&nbspLeverage</td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"leverage_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 1px solid gray; text-align:center\" id=\"leverage_future\"></td>\n                                    </tr>\n                                     <tr style=\"height: 1%\"></tr>\n                                    <tr>\n                                        <td colspan = 2 style=\"width: 60%\"><b><i>&nbsp&nbspCommon Share Growth Rate</i></b></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 2px solid gray; text-align:center\" id=\"shares_growth_current\"></td>\n                                        <td style=\"width: 2.5%\"></td>\n                                        <td style=\"width: 15%; border: 2px solid gray; text-align:center\" id=\"shares_growth_future\"></td>\n                                    </tr>\n                                </table>\n                            </div>\n                        </td>\n\n\n                        <td style=\"width:1%;vertical-align: top;\"></td>\n\n                        <td style=\"width:35%;vertical-align: top;   background-color:#fff\">\n                            <div style=\"width: 100%; display: inline-block; height: 3%; text-align:center\"><b>Total Returns Outlook</b></div>\n                            <div id=\"pct_cht\" style=\"width: 100%; height:250px; \"></div>\n                        </td>\n\n                        <td style=\"width: 1%; \"></td>\n\n                        <td id=\"Peers\" Rowspan=3 style=\"width:27%;  text-align:center; align: center; vertical-align: middle; background-color:#fff\">\n                                <div style=\"width=100%; vertical-align: top; height:1%; display: inline-block; \"><b><br>Estimated Total Returns - 5 year avg</b></div>\n                                <div id=\"peers_cht\" style=\"width: 100%; height: 500px; align: center; \"></div>\n\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td colspan=3 style=\"width:34%; height:1%\"></td>\n                    </tr>\n\n                    <tr>\n\n                        <td id=\"SP\" colspan=1 style=\"width:35%;\">\n\n                        <div id=\"tradeoff_chrt\" style=\"width: 100%; height:275px;background-color:#fff\"></div>\n                        </td>\n                           <td style=\"width:1%; vertical-align: top;  height:32%\"></td>\n                        <td id=\"SP\" colspan=1 style=\"width:35%;\">\n                                <div id=\"TRS_chrt\" style=\"width: 100%; inline-block; height:275px;  background-color:#fff\"></div>\n                            </td>\n\n                        <td style=\"width:1%; vertical-align: top;  height:32%\"></td>\n\n                    </tr>\n\n                    <tr>\n                        <td colspan=\"4\" style=\"width:73%; height:1%\"></td>\n                    </tr>\n\n                    <tr>\n                        <td colspan=\"3\" style=\"width:%; \">\n                                <div id=\"hide\" style=\"float: left;width: 49%;  background-color:#fff\">\n                                <div style=\"width: 100%; height: 10%; text-align:Center;margin: auto\"><b>Top Quartile Shareholder Returns<br>ROE vs. Equity Growth Rate Trade  Off</b></div>\n                                <div id=\"tradeoff_chrt\" style=\"width: 100%; height:275px;\"></div>\n                            </div>\n                            <div id=\"hide1\" style=\"float: right;width: 49%;  background-color:#fff\">\n                                <div style=\"width: 100%; height: 10%; text-align:Center\"><b>Market Capitalization <br> Value of Current Operations vs. Future Growth</b></div>\n                                <div id=\"fgv_vco_chrt\" style=\"width: 100%; height:275px;  border: 0px solid black\"></div>\n\n                            </div>\n                        </td>\n                        <td style=\"width:1%; vertical-align: top;  height:32%\"></td>\n                    </tr>\n                </table>\n                </div>\n            </div>\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/individual/simulation - before asset change.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"hero\">\n    <h1 class=\"title\">Individual Bank Analyzer</h1><h2 class=\"title\">WHAT-IF SIMULATOR</h2>\n    <p class=\"sub-title\">Gain insights into the performance of individual banks by simulating a range of what-if scenarios.</p>\n\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li><a href=\"/individual\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/outlook\">ESTIMATES & OUTLOOK</a></li>\n                <li>|</li>\n                <li class=\"selected\"><a href=\"/individual/simulation\">WHAT-IF SIMULATOR</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n        </div>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"individual\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>SELECT BANK <!-- <img src=\"/app/assets/images/premium-icon-red.png\"> --!> </h3>\n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n        <div class=\"col\">\n        </div>\n\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> SAVE/LOAD SIMULATION</h2>\n        </div>\n    </section>\n\n    <section id=\"data\" class=\"sim\" blklab-click=\"hide_tag\">\n	<div id=\"anchor\"></div>\n        <div id=\"results\" class=\"block full auto\">\n            <header>RESULTS SNAPSHOT</header>\n            <section class=\"detail\"  id=\"outcomes\">\n                <div id = \"simulation_outcomes\" class=\"col\">\n\n                </div>\n            </section>\n        </div>\n\n <!--       <div class=\"block full auto\">\n            <header>ASSUMPTIONS</header>\n            <section class=\"detail\" id=\"drivers\">\n            </section>\n        </div> --!>\n\n        <div class=\"block full auto\">\n            <header>DRIVERS</header>\n            <section class=\"detail\" id=\"simulation-detail\">\n<!--                <img src=\"/assets/images/list-view.png\" class=\"left-button\" id=\"list-view\">\n                    <img src=\"/assets/images/block-view.png\" class=\"left-button\" id=\"block-view\">\n                    <img src=\"/assets/images/graph-view.png\" class=\"left-button\" id=\"graph-view\">\n--!>\n                <div class=\"cell\">\n                     <div id=\"controls_total_return_1\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Total Returns (%)</div>\n                    <div id=\"total_return_1\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork\"></div>\n\n                <div class=\"cell two\">\n                    <div id=\"controls_dividend_yield\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Dividend Yield (%)</div>\n                    <div id=\"dividend_yield\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell two\">\n                     <div id=\"controls_shares_yield\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Share Price Appreciation (%)</div>\n                    <div id=\"shares_yield\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"vertical-lineright\"></div>\n                <div class=\"fork twoskinny\">\n                    \n                </div>\n				\n\n\n                <div class=\"cell two\">\n                    <div id=\"controls_mkt_cap\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Market Capitalization ($bn)</div>\n                    <div id=\"mkt_cap\" class=\"graph\"></div>\n                </div>\n				\n\n                <div class=\"cell two\">\n					<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Common_share_growth_tag\">\n						<div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n					</div>\n            		<div id=\"controls_Common_share_growth\" class = \"trafficlights\"></div>\n					<div id=\"Common_share_growth_tag\" class=\"tag\">\n\n					</div>\n                    <div class=\"header\">Common Shares Growth (%)</div>\n                    <div id=\"Common_share_growth\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"vertical-lineleft\"></div>\n                <div class=\"fork two\"></div>\n                \n\n                <div class=\"cell three\">\n                    <div id=\"controls_equity_growth\" class = \"trafficlights\"></div>\n                    <div class=\"header\"> Equity Growth (%)</div>\n                    <div id=\"equity_growth\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"cell threeblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\"></div>\n                </div>\n\n                <div class=\"cell three\">\n                    <div id=\"controls_spread\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Economic Profitability (%)</div>\n                    <div id=\"spread\" class=\"graph\"></div>\n                </div>\n				  \n				<div></div>\n                <div class=\"fork-box\">\n                    <div class=\"vertical-line firstleft\"></div>\n                    <div class=\"fork fourleft\"></div>\n                </div>\n                <div class=\"fork-box\">\n                    <div class=\"vertical-linewideright\"></div>\n                    <div class=\"fork fourright\"></div>\n                </div>\n                <div></div>\n                <div class=\"cell four\">\n					<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Total_Asset_Growth_Rate_tag\">\n						<div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n					</div>\n            		<div id=\"controls_Total_Asset_Growth_Rate\" class = \"trafficlights\"></div>\n					<div id=\"Total_Asset_Growth_Rate_tag\" class=\"tag\">\n\n					</div>			\n                    <div class=\"header\">Total Asset Growth (%) </div>\n\n                    <div id=\"Total_Asset_Growth_Rate\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n					<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"equity_other_growth_rate_tag\">\n						<div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n					</div>\n            		<div id=\"controls_equity_other_growth_rate\" class = \"trafficlights\"></div>		\n					<div id=\"equity_other_growth_rate_tag\" class=\"tag\">\n\n					</div>		\n				    <div class=\"header\"> Other Equity Growth (%)</div>\n\n                    <div id=\"equity_other_growth_rate\" class=\"graph\"></div>\n                </div>\n\n                \n				<div class=\"cell four\">\n				<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"ROAE_tag\"><div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n                <div id=\"controls_ROAE\" class = \"trafficlights\"></div>\n				<div id=\"ROAE_tag\" class=\"tag\">\n\n				</div>                 \n                    <div class=\"header\">Return on Equity (%)</div>\n\n                    <div id=\"ROAE\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n					<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Cost_of_Capital_tag\">\n						<div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n            		<div id=\"controls_Cost_of_Capital\" class = \"trafficlights\"></div>\n					<div id=\"Cost_of_Capital_tag\" class=\"tag\">\n\n					</div>\n					<div class=\"header\">Cost of Equity (%)</div>\n\n					<div id=\"Cost_of_Capital\" class=\"graph\"></div>\n                </div>\n							\n			<div></div>\n			\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n				<div id=\"plus-assetgrowth\" blklab-click=\"expandassetgrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/plus.svg\"></div>\n				<div id=\"minus-assetgrowth\" blklab-click=\"collapseassetgrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n			</div>\n\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n				<div id=\"plus-otherequitygrowth\" blklab-click=\"expandotherequitygrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n				<div id=\"minus-otherequitygrowth\" blklab-click=\"collapseotherequitygrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n			</div>\n			\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n				<div id=\"plus-roaa\" blklab-click=\"expandroaa\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n				<div id=\"minus-roaa\" blklab-click=\"collapseroaa\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n			</div>\n			\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n				<div id=\"plus-coe\" blklab-click=\"expandcoe\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/plus.svg\"></div>\n				<div id=\"minus-coe\" blklab-click=\"collapsecoe\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n			</div>\n			\n			<div id=\"plus-assetgrowth-results\">	\n	\n				<div></div>\n				\n				<div class=\"fork-box\">\n					<div class=\"vertical-line\"></div>\n				</div>\n				\n				<div class=\"fork-box\"></div>\n				<div class=\"fork-box\"></div>\n				<div class=\"fork-box\"></div>\n			\n				<div class=\"fork threeleftfirst\">\n					<div class=\"vertical-line\"></div>\n				</div>\n				\n				<div></div>\n	\n            	<div class=\"cell four\">\n                	<div class=\"controls\"></div>\n                	<div class=\"header\">Loan Growth (%) </div>\n                	<div id=\"wgt_loan_growth\" class=\"graph\"></div>\n            	</div>\n				\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Loan Mix (% Assets) </div>\n                    <div id=\"wgt_other_ea_growth\" class=\"graph\"></div>\n                </div>				\n\n                <div class=\"cell four\">\n                    	\n                    <div class=\"header\">Other Asset Growth (%)</div>\n                    <div id=\"wgt_other_asset_growth\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"cell fourblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">&nbsp</div>\n                    <div id=\"\" class=\"graph\"></div>\n                </div>\n				\n				<div></div>\n				\n					<div class=\"fork-box\">\n						<div class=\"vertical-line\"></div>\n					</div>\n					<div class=\"fork-box\"></div>\n					<div class=\"fork-box\"></div>\n					<div class=\"fork-box\"></div>\n			\n					<div class=\"fork threeleftfirst\">\n						<div class=\"vertical-line\"></div>\n					</div>\n					\n					<div></div>\n		\n 					<div class=\"cell four\">\n             		   	<div class=\"controls\"></div>\n                		<div class=\"header\">Domestic Loan Growth (%) </div>\n                		<div id=\"wgt_loan_growth\" class=\"graph\"></div>\n            		</div>\n				\n                	<div class=\"cell four\">\n                    	<div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    	<div class=\"header\">Domestic Loan Mix (%)</div>\n                    	<div id=\"domesticloanmix\" class=\"graph\"></div>\n                	</div>				\n\n                	<div class=\"cell four\">\n                    	<div class=\"controls\"></div>\n                    	<div class=\"header\">Foreign Loan Growth (%) </div>\n                    	<div id=\"wgt_other_asset_growth\" class=\"graph\"></div>\n                	</div>\n				\n                	<div class=\"cell fourblank\">\n                    	<div class=\"controls\"></div>\n                    	<div class=\"header\">&nbsp</div>\n                    	<div id=\"\" class=\"graph\"></div>\n                		</div>		\n				\n					<div></div>\n				\n					<div class=\"fork-box\">\n						<div class=\"vertical-line\"></div>\n					</div>\n					<div class=\"fork-box\"></div>\n					<div class=\"fork-box\"></div>\n					<div class=\"fork-box\"></div>\n			\n					<div class=\"fork all\"></div>\n					<div></div>\n				\n            		<div class=\"cell four\">\n                		<div class=\"controls\"></div>\n                		<div class=\"header\">Growth Contribution: Consumer Loans (%) </div>\n                		<div id=\"wgt_loan_growth\" class=\"graph\"></div>\n            		</div>\n				\n               	 	<div class=\"cell four\">\n                    	<div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    	<div class=\"header\">Growth Contribution: Real Estate Loans (%) </div>\n                    	<div id=\"wgt_other_ea_growth\" class=\"graph\"></div>\n                	</div>				\n\n               	 	<div class=\"cell four\">\n                 	  	<div class=\"controls\"></div>\n                		<div class=\"header\">Growth Contribution: C&I Loans (%)</div>\n                		<div id=\"wgt_other_asset_growth\" class=\"graph\"></div>\n               		</div>\n				\n              	   	<div class=\"cell four\">\n              		  <div class=\"controls\"></div>\n              		  <div class=\"header\">Growth Contribution: Other Loans (%)</div>\n              		  <div id=\"\" class=\"graph\"></div>\n            		</div>	\n				\n					<div></div>\n				\n					<div class=\"fork-box\">\n						<div class=\"vertical-line\"></div>\n						<div id=\"plus-wgtloangrowth\" blklab-click=\"expandwgtloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/plus.svg\"></div>\n						<div id=\"minus-wgtloangrowth\" blklab-click=\"collapsewgtloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n					</div>\n\n					<div class=\"fork-box\">\n						<div class=\"vertical-line\"></div>\n						<div id=\"plus-wgtreloangrowth\" blklab-click=\"expandwgtreloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n						<div id=\"minus-wgtreloangrowth\" blklab-click=\"collapsewgrreloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n					</div>\n			\n					<div class=\"fork-box\">\n						<div class=\"vertical-line\"></div>\n						<div id=\"plus-wgtciloangrowth\" blklab-click=\"expandwgtciloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n						<div id=\"minus-wgtciloangrowth\" blklab-click=\"collapsewgtciloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n					</div>\n			\n					<div class=\"fork-box\">\n						<div class=\"vertical-line\"></div>\n						<div id=\"plus-wgtotherloangrowth\" blklab-click=\"expandwgtotherloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n						<div id=\"minus-wgtotherloangrowth\" blklab-click=\"collapsewgtotherloanggrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n					</div>\n				\n					<div></div>\n								\n					<div id=\"plus-wgtloangrowth-results\">\n				\n						<div class=\"fork-box\">\n							<div class=\"vertical-line\"></div>\n						</div>\n						<div class=\"fork-box\"></div>\n						<div class=\"fork-box\"></div>\n						<div class=\"fork-box\"></div>\n			\n						<div class=\"fork two\"></div>\n						<div></div>\n				\n            			<div class=\"cell four\">\n                			<div class=\"controls\"></div>\n                			<div class=\"header\">Consumer Loan Growth (%)</div>\n                			<div id=\"consumerloan_growth\" class=\"graph\"></div>\n            			</div>\n				\n                		<div class=\"cell four\">\n             			    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n             			    <div class=\"header\">Consumer Loan Mix (%) </div>\n            				<div id=\"consumerloanmix\" class=\"graph\"></div>\n            			</div>				\n\n						<div class=\"cell fourblank\">\n                			<div class=\"controls\"></div>\n                			<div class=\"header\">&nbsp</div>\n                			<div id=\"\" class=\"graph\"></div>\n              			</div>\n				\n            			<div class=\"cell fourblank\">\n               				<div class=\"controls\"></div>\n                    		<div class=\"header\">&nbsp</div>\n                    		<div id=\"\" class=\"graph\"></div>\n                		</div>	\n				\n						<div></div>\n				\n						<div class=\"fork-box\">\n							<div class=\"vertical-line\"></div>\n						</div>\n						<div class=\"fork-box\"></div>\n						<div class=\"fork-box\"></div>\n						<div class=\"fork-box\"></div>\n			\n						<div class=\"fork fourleft	\"></div>\n				\n						<div></div>\n				\n            			<div class=\"cell four\">\n                			<div class=\"controls\"></div>\n                			<div class=\"header\">Consumer Loan Market Share (%)</div>\n                			<div id=\"wgt_loan_growth\" class=\"graph\"></div>\n            			</div>\n				\n            			<div class=\"cell four\">\n                    		<div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                   			<div class=\"header\">Consumer Loan Industry Growth (%) </div>\n                    		<div id=\"wgt_other_ea_growth\" class=\"graph\"></div>\n                		</div>				\n\n						<div class=\"cell fourblank\">\n                			<div class=\"controls\"></div>\n                    		<div class=\"header\">&nbsp</div>\n                    		<div id=\"\" class=\"graph\"></div>\n                		</div>\n				\n            			<div class=\"cell fourblank\">\n                    		<div class=\"controls\"></div>\n                   			<div class=\"header\">&nbsp</div>\n                   		 	<div id=\"\" class=\"graph\"></div>\n                		</div>\n				\n				\n	\n				</div>\n			\n			</div>\n			\n			\n			\n			\n			\n			\n			<div id=\"plus-coe-results\">	\n				<div></div>\n            	\n			\n			 <div class=\"fork-box\"></div>\n             <div class=\"fork-boxouter\">\n			 	<div class=\"vertical-linefarright\"></div>\n				 <div class=\"fork threeright\">\n				 	<div class=\"vertical-lineleft\"></div>\n				 </div>\n             </div>\n			 \n             <div></div>\n			\n            	<div class=\"cell fourblank\">\n                	<div class=\"controls\"></div>\n                	<div class=\"header\">&nbsp </div>\n                	<div class=\"graph\"></div>\n            	</div>\n				\n                <div class=\"cell four\">\n					<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Risk_Free_Rate_tag\">\n						<div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n            		\n					<div id=\"Risk_Free_Rate_tag\" class=\"tag\">\n\n					</div>\n                    <div class=\"header\">10yr US Bond Rate (%) </div>\n                    <div id=\"Risk_Free_Rate\" class=\"graph\"></div>\n                </div>				\n\n                <div class=\"cell four\">\n					<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Beta_tag\">\n						<div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n            		<div id=\"controls_Beta\" class = \"trafficlights\"></div>\n					<div id=\"Beta_tag\" class=\"tag\">\n\n					</div>\n                    <div class=\"header\">Stock Beta</div>\n                    <div id=\"Beta\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"cell four\">\n					<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Equity_Risk_Premium_tag\">\n						<div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n            		\n					<div id=\"Equity_Risk_Premium_tag\" class=\"tag\">\n\n					</div>\n                    <div class=\"header\">Equity Risk Premium (%)</div>\n                    <div id=\"Equity_Risk_Premium\" class=\"graph\"></div>\n                </div>\n			\n			</div>\n			\n			<div id=\"plus-otherequitygrowth-results\">\n             <div class=\"fork-box\">\n                 <div class=\"vertical-line\"></div>\n                 <div class=\"fork threeright\"></div>\n             </div>\n			 \n             <div class=\"fork-box\"></div>\n             <div></div>	\n			 \n             <div class=\"cell three\">\n				 <div class=\"controls\"><div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>			 \n                 <div id=\"controls_dividend_payout\" class = \"trafficlights\"></div>\n                 <div class=\"header\">Dividend Payout (%)</div>\n                 <div id=\"dividend_payout\" class=\"graph\"></div>\n             </div>		\n			 \n             <div class=\"cell three\">\n					<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Leverage_tag\"><div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n            		<div id=\"controls_Leverage\" class = \"trafficlights\"></div>\n					<div id=\"Leverage_tag\" class=\"tag\"></div>\n					<div class=\"header\">Leverage</div>\n            		<div id=\"Leverage\" class=\"graph\"></div>\n             </div>\n			 \n             <div class=\"cell threeblank\">\n                 <div class=\"controls\"></div>\n                 <div class=\"header\">&nbsp</div>\n                 <div id=\"\" class=\"graph\"></div>\n             </div>\n			\n			\n			</div>\n			\n			\n			<div id=\"plus-roaa-results\">	\n			<div></div>\n 		   	\n			<div class=\"vertical-lineright\"></div>\n 		   	<div class=\"fork twoskinny\"></div>\n            \n			<div></div>\n			\n\n                <div class=\"cell fourblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">&nbsp</div>\n                    <div id=\"\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"cell four\">\n				\n				\n					<div class=\"controls\"><div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>				\n                    <div id=\"controls_Leverage1\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Leverage</div>\n                    <div id=\"Leverage1\" class=\"graph\"></div>\n                </div>\n				\n\n                <div class=\"cell three\">\n                    <div id=\"controls_ROAA\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Return on Average Assets</div>\n                    <div id=\"ROAA\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"cell fourblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">&nbsp</div>\n                    <div id=\"\" class=\"graph\"></div>\n                </div>\n			\n                <div class=\"vertical-lineright\"></div>\n                <div class=\"fork two\"></div>\n			\n            <div class=\"cell three\">\n                <div id=\"controls_op_roaa\" class = \"trafficlights\"></div>\n                <div class=\"header\">Operating Return on Assets</div>\n                <div id=\"op_roaa\" class=\"graph\"></div>\n            </div>\n			\n            <div class=\"cell threeblank\">\n                <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"\" class=\"graph\"></div>\n            </div>\n\n            <div class=\"cell three\">\n				<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Extra_Adj_Other_ROAA_tag\">\n					<div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n				</div>\n                <div id=\"controls_Extra_Adj_Other_ROAA\" class = \"trafficlights\"></div>\n				<div id=\"Extra_Adj_Other_ROAA_tag\" class=\"tag\"></div>\n                <div class=\"header\">Extraordinary Items & Other Adjs</div>\n                <div id=\"Extra_Adj_Other_ROAA\" class=\"graph\"></div>\n            </div>\n			\n			<div></div>\n			<div class = \"vertical-line firstleft\"></div>\n		   \n            <div class=\"fork three\">\n                <div class=\"vertical-line\"></div>\n            </div>\n\n            <div class=\"cell three\">\n                 <div id=\"controls_Op_Margin\" class = \"trafficlights\"></div>\n                <div class=\"header\">Operating Margin</div>\n                <div id=\"Op_Margin\" class=\"graph\"></div>\n            </div>\n\n            <div class=\"cell three\">\n				<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"ROAA_Effective_Tax_Rate_tag\">\n					<div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n				</div>\n                <div id=\"controls_ROAA_Effective_Tax_Rate\" class = \"trafficlights\"></div>\n				<div id=\"ROAA_Effective_Tax_Rate_tag\" class=\"tag\"></div>\n                <div class=\"header\">Effective Tax Rate</div>\n                <div id=\"ROAA_Effective_Tax_Rate\" class=\"graph\"></div>\n            </div>\n\n            <div class=\"cell three\">\n				<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Asset_Yield_tag\">\n					<div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n				</div>\n                <div id=\"controls_Asset_Yield\" class = \"trafficlights\"></div>\n				<div id=\"Asset_Yield_tag\" class=\"tag\"></div>\n				<div class=\"header\">Asset Yield</div>\n                <div id=\"Asset_Yield\" class=\"graph\"></div>\n            </div>\n\n            <div></div>\n            <div class=\"fork-boxouter\">\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork four\"></div>\n            </div>\n            <div class=\"fork-boxouter\">\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork four\"></div>\n            </div>\n            <div></div>\n            <div class=\"cell four\">\n				<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Efficiency_Ratio_tag\"><div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n                <div id=\"controls_Efficiency_Ratio\" class = \"trafficlights\"></div>\n				<div id=\"Efficiency_Ratio_tag\" class=\"tag\">\n\n				</div>\n                <div class=\"header\">Efficiency_Ratio</div>\n                <div id=\"Efficiency_Ratio\" class=\"graph\"></div>\n            </div>\n\n            <div class=\"cell four\">\n				<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"LLR_tag\"><div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n                <div id=\"controls_LLR\" class = \"trafficlights\"></div>\n				<div id=\"LLR_tag\" class=\"tag\">\n\n				</div>\n                <div class=\"header\">Loan Loss Ratio</div>\n                <div id=\"LLR\" class=\"graph\"></div>\n            </div>\n\n            <div class=\"cell four\">\n				<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"net_int_margin_grossed_tag\">\n					<div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n				</div>\n                <div id=\"controls_net_int_margin_grossed\" class = \"trafficlights\"></div>\n				<div id=\"net_int_margin_grossed_tag\" class=\"tag\">\n\n				</div>\n				<div class=\"header\">Net Interest Margin</div>\n                <div id=\"net_int_margin_grossed\" class=\"graph\"></div>\n            </div>\n\n            <div class=\"cell four\">\n				<div class=\"controls\" blklab-click=\"slider_show\" data-id=\"non_int_margin_grossed_tag\">\n					<div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n				</div>\n                <div id=\"controls_non_int_margin_grossed\" class = \"trafficlights\"></div>\n				<div id=\"non_int_margin_grossed_tag\" class=\"tag\">\n				\n				</div>\n                <div class=\"header\">Non Interest Income Yield</div>\n                <div id=\"non_int_margin_grossed\" class=\"graph\"></div>\n            </div>\n			\n			<div></div>\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n				<div id=\"plus-er\" blklab-click=\"expander\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/plus.svg\"></div>\n				<div id=\"minus-er\" blklab-click=\"collapseer\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n			</div>\n\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n				<div id=\"plus-llr\" blklab-click=\"expandllr\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n				<div id=\"minus-llr\" blklab-click=\"collapsellr\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n			</div>\n			\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n				<div id=\"plus-nim\" blklab-click=\"expandnim\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n				<div id=\"minus-nim\" blklab-click=\"collapsenim\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n			</div>\n			\n			<div class=\"fork-box\">\n			</div>\n			\n			\n			<div id=\"plus-er-results\">\n			\n			\n			\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n			</div>\n			<div class=\"fork-box\"></div>\n			<div class=\"fork-box\"></div>\n			<div class=\"fork-box\"></div>\n			\n			<div class=\"fork threeleftfirst\"></div>\n			\n			<div></div>\n			\n    		<div class=\"cell four\">\n    			<div id=\"controls_Costs_EA\" class = \"trafficlights\"></div>\n   			 	<div class=\"header\">Cost Efficiency (%)</div>\n  			  	<div id=\"Costs_EA\" class=\"graph\"></div>\n  			  </div>\n\n 			<div class=\"cell fourblank\">\n  		   		<div class=\"controls\"></div>\n        		<div class=\"header\">&nbsp</div>\n        		<div id=\"\" class=\"graph\"></div>\n    			</div>\n\n    		<div class=\"cell four\">\n    			<div id=\"controls_Asset_Yield_EA\" class = \"trafficlights\"></div>\n    			<div class=\"header\">Asset Yield (% EA)</div>\n    			<div id=\"Asset_Yield_EA\" class=\"graph\"></div>\n   			</div>\n\n    		<div class=\"cell fourblank\">\n    			<div class=\"controls\"></div>\n    			<div class=\"header\">&nbsp</div>\n    			<div id=\"\" class=\"graph\"></div>\n    		</div>		\n			\n			<div></div>\n			\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n			</div>\n			<div class=\"fork-box\"></div>\n			<div class=\"fork-box\"></div>\n			<div class=\"fork-box\"></div>\n			\n			<div class=\"fork threeleftfirst\">\n				<div class=\"vertical-line\"></div>\n			</div>\n			\n 			<div class=\"cell four\">\n  		   		<div id=\"controls_salaryexpense\" class = \"trafficlights\"></div>\n        		<div class=\"header\">Salary Expense (% EA)</div>\n        		<div id=\"salaryexpense\" class=\"graph\"></div>\n    			</div>\n\n    		<div class=\"cell four\">\n    			<div id=\"controls_gaexpense\" class = \"trafficlights\"></div>\n    			<div class=\"header\">Goodwill & Amort. Expense (% EA)</div>\n    			<div id=\"gaexpense\" class=\"graph\"></div>\n   			</div>\n\n    		<div class=\"cell four\">\n    			<div id=\"controls_externalexpense\" class = \"trafficlights\"></div>\n    			<div class=\"header\">External Expenses (% EA)</div>\n    			<div id=\"externalexpense\" class=\"graph\"></div>\n    		</div>\n			\n    		<div class=\"cell fourblank\">\n    			<div class=\"controls\"></div>\n    			<div class=\"header\">&nbsp</div>\n    			<div id=\"\" class=\"graph\"></div>\n    		</div>\n			\n			\n			\n			<div></div>\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n				<div id=\"plus-salaryer\" blklab-click=\"expandsalaryer\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/plus.svg\"></div>\n				<div id=\"minus-salaryer\" blklab-click=\"collapsesalaryer\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n			</div>\n			\n			<div class=\"fork-box\">\n\n			</div>\n\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n				<div id=\"plus-externaler\" blklab-click=\"expandexternaler\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n				<div id=\"minus-externaler\" blklab-click=\"collapseexternaler\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n			</div>	\n			\n			<div class=\"fork-box\">\n\n			</div>\n				<div></div>\n			\n			<div id=\"plus-salaryer-results\">\n			<div></div>\n			\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n			</div>\n			\n			<div class=\"fork-box\"></div>\n			<div class=\"fork-box\"></div>\n			<div class=\"fork-box\"></div>\n			\n				<div class=\"forkleftfirst\"></div>\n			\n			<div></div>\n		\n			\n 			<div class=\"cell four\">\n  		   		<div id=\"controls_salaryperfte\" class = \"trafficlights\"></div>\n        		<div class=\"header\">Salary Per FTE ($)</div>\n        		<div id=\"salaryperfte\" class=\"graph\"></div>\n    			</div>\n\n    		<div class=\"cell four\">\n    			<div id=\"controls_eaperfte\" class = \"trafficlights\"></div>\n    			<div class=\"header\">Earning Asset per FTE ($)</div>\n    			<div id=\"eaperfte\" class=\"graph\"></div>\n   			</div>	\n			\n 			<div class=\"cell fourblank\">\n  		   		<div class=\"controls\"></div>\n        		<div class=\"header\">&nbsp</div>\n        		<div id=\"\" class=\"graph\"></div>\n    			</div>\n\n    		<div class=\"cell fourblank\">\n    			<div class=\"controls\"></div>\n    			<div class=\"header\">&nbsp</div>\n    			<div id=\"\" class=\"graph\"></div>\n   			</div>	\n			\n			</div>\n			\n			<div id=\"plus-externaler-results\">\n			<div></div>\n			\n			<div class=\"fork-box\"></div>\n			<div class=\"fork-box\"></div>\n			\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n			</div>\n			\n			<div class=\"fork-box\">\n			</div>\n			\n			<div class=\"fork all\">\n				<div class=\"fork-box\"></div>\n				<div class=\"fork-box\">\n					<div class=\"vertical-line\"></div>\n				</div>\n				<div class=\"fork-box\">\n					<div class=\"vertical-line\"></div>\n				</div>\n				<div class=\"fork-box\"></div>\n			</div>\n\n			\n			<div></div>\n		\n			\n 			<div class=\"cell four\">\n  		   		<div id=\"controls_premisesexpense\" class = \"trafficlights\"></div>\n        		<div class=\"header\">Premises Expense (% EA)</div>\n        		<div id=\"premisesexpense\" class=\"graph\"></div>\n    			</div>\n\n    		<div class=\"cell four\">\n    			<div id=\"controls_dataprocessingexpense\" class = \"trafficlights\"></div>\n    			<div class=\"header\">Data Processing Expense (% EA)</div>\n    			<div id=\"dataprocessingexpense\" class=\"graph\"></div>\n   			</div>	\n			\n 			<div class=\"cell four\">\n  		   		<div id=\"controls_advertisingexpense\" class = \"trafficlights\"></div>\n        		<div class=\"header\">Advertising Expense (% EA)</div>\n        		<div id=\"advertisingexpense\" class=\"graph\"></div>\n    			</div>\n\n    		<div class=\"cell four\">\n    			<div class=\"controls\"></div>\n    			<div class=\"header\">Other Expenses (% EA)</div>\n    			<div id=\"otherexpense\" class=\"graph\"></div>\n   			</div>	\n		\n			</div>\n			\n			</div>\n			\n			\n			\n			\n			\n			\n			\n			<div id=\"plus-llr-results\">\n			\n			\n			\n			<div class=\"fork-box\"></div>\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n			</div>\n		\n			<div class=\"fork-box\"></div>\n			<div class=\"fork-box\"></div>\n			\n			<div class=\"fork\"></div>\n			\n			<div></div>\n			\n    		<div class=\"cell two\">\n    			<div id=\"controls_llpea\" class = \"trafficlights\"></div>\n   			 	<div class=\"header\">Loan Loss Provisions (% EA)</div>\n  			  	<div id=\"llpea\" class=\"graph\"></div>\n  			  </div>\n\n    		<div class=\"cell two\">\n    			<div id=\"controls_Asset_Yield_EA1\" class = \"trafficlights\"></div>\n    			<div class=\"header\">Revenue Productivity (% EA)</div>\n    			<div id=\"Asset_Yield_EA1\" class=\"graph\"></div>\n   			</div>	\n			\n			<div></div>\n			\n			<div class=\"fork-box\"></div>\n			<div class=\"fork-box\">\n				<div class=\"vertical-line\"></div>\n			</div>\n\n			<div class=\"fork-box\"></div>\n			<div class=\"fork-box\"></div>\n			\n			\n			<div class=\"fork three\"></div>\n			\n 			<div class=\"cell three\">\n  		   		<div id=\"controls_llploans\" class = \"trafficlights\"></div>\n        		<div class=\"header\">Loan Loss Provisions (% Loans)</div>\n        		<div id=\"llploans\" class=\"graph\"></div>\n    			</div>\n\n    		<div class=\"cell threeblank\">\n    			<div class=\"controls\"></div>\n    			<div class=\"header\">&nbsp</div>\n    			<div id=\"\" class=\"graph\"></div>\n   			</div>\n\n    		<div class=\"cell three\">\n    			<div id=\"controls_loan_lease_mix1\" class = \"trafficlights\"></div>\n    			<div class=\"header\">Loans Mix (% EA)</div>\n    			<div id=\"loan_lease_mix1\" class=\"graph\"></div>\n    		</div>\n			<div></div>\n            <div class=\"fork-boxouter\">\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork four\"></div>\n            </div>\n			<div class=\"fork-boxouter\"></div>\n			<div></div>\n 			<div class=\"cell four\">\n  		   		<div id=\"controls_ncoloans\" class = \"trafficlights\"></div>\n        		<div class=\"header\">Net Charge Offs (% Avg. Loans)</div>\n        		<div id=\"ncoloans\" class=\"graph\"></div>\n    			</div>\n\n    		<div class=\"cell four\">\n    			<div id=\"controls_llpnco\" class = \"trafficlights\"></div>\n    			<div class=\"header\">Net Charge Offs (% Provisions)</div>\n    			<div id=\"llpnco\" class=\"graph\"></div>\n   			</div>\n\n    		<div class=\"cell fourblank\">\n    			<div class=\"controls\"></div>\n    			<div class=\"header\">&nbsp</div>\n    			<div id=\"\" class=\"graph\"></div>\n    		</div>\n			\n    		<div class=\"cell fourblank\">\n    			<div class=\"controls\"></div>\n    			<div class=\"header\">&nbsp</div>\n    			<div id=\"\" class=\"graph\"></div>\n    		</div>			\n			\n			\n			\n			\n			\n			\n			\n			\n			\n			\n			\n			</div>\n			\n			\n\n			<div id=\"plus-nim-results\">\n   \n				 \n                 <div class=\"vertical-lineright\"></div>\n                 <div class=\"fork twoskinny\"></div>\n				 \n				\n\n            <div class=\"cell two\">\n                    <div id=\"controls_net_int_margin\" class = \"trafficlights\"></div>\n                    <div class=\"header\"> Net Interest Margin EA (%)</div>\n                    <div id=\"net_int_margin\" class=\"graph\"></div>	\n            </div>\n			\n            <div class=\"cell two\">\n                <div id=\"controls_EA_Mix\" class = \"trafficlights\"></div>\n                <div class=\"header\">Earning Asset (EA) Mix (%)</div>\n                <div id=\"EA_Mix\" class=\"graph\"></div>\n            </div>\n			\n            <div class=\"vertical-lineleft\"></div>\n            <div class=\"fork three\"></div>\n			\n            <div class=\"cell three\">\n                <div id=\"controls_gross_int_yield\" class = \"trafficlights\"></div>\n                <div class=\"header\"> Gross Interest Yield (% EA)</div>\n                <div id=\"gross_int_yield\" class=\"graph\"></div>\n            </div>				\n\n            <div class=\"cell threeblank\">\n                <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"blank\" class=\"graph\"></div>\n            </div>\n			\n            <div class=\"cell three\">\n                <div id=\"controls_cost_of_funds_ea\" class = \"trafficlights\"></div>\n                <div class=\"header\">Interest Expense (% EA)</div>\n                <div id=\"cost_of_funds_ea\" class=\"graph\"></div>\n            </div>\n			\n			<div></div>\n			<div class=\"fork-boxouter\">\n				<div class=\"vertical-line\"></div>\n				<div id=\"plus-grossintyield\" blklab-click=\"expandgrossintyield\"><img HR WIDTH=\"5%\" HR HEIGHT=\"5%\" src=\"/assets/images/plus.svg\"></div>\n				<div id=\"minus-grossintyield\" blklab-click=\"collapsegrossintyield\"><img HR WIDTH=\"5%\" HR HEIGHT=5%\" src=\"/assets/images/minus.svg\"></div>\n				\n			</div>\n			\n			<div class=\"fork-boxouter\">\n				<div class=\"vertical-line\"></div>\n				<div id=\"plus-costoffunds\" blklab-click=\"expandcostoffunds\"><img HR WIDTH=\"5%\" HR HEIGHT=5%\" src=\"/assets/images/plus.svg\"></div>\n				<div id=\"minus-costoffunds\" blklab-click=\"collapsecostoffunds\"><img HR WIDTH=\"5%\" HR HEIGHT=5%\" src=\"/assets/images/minus.svg\"></div>\n			</div>\n			\n			<div id=\"plus-grossintyield-results\">\n            <div></div>\n			\n			<div class=\"fork-boxouter\">\n				<div class=\"vertical-line\"></div>\n			</div>\n     	   	<div class=\"fork-boxouter\"></div>\n            <div class=\"fork three\"></div>\n			\n			<div></div>\n			\n            <div class=\"cell three\">\n                <div id=\"controls_int_yield_loans_wgt\" class = \"trafficlights\"></div>\n                <div class=\"header\"> Weighted Loan Yield (% EA) </div>\n                <div id=\"int_yield_loans_wgt\" class=\"graph\"></div>\n            </div>\n\n				\n				\n            <div class=\"cell threeblank\">\n                <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"\" class=\"graph\"></div>\n            </div>\n\n            <div class=\"cell three\">\n                <div id=\"controls_other_int_yield_wgt\" class = \"trafficlights\"></div>\n                <div class=\"header\">Weighted Other Yield (% EA)</div>\n                <div id=\"other_int_yield_wgt\" class=\"graph\"></div>\n            </div>\n\n			\n			<div></div>\n			\n			<div class=\"fork-boxouter\">\n				<div class=\"vertical-line\"></div>\n				<div class=\"forkright\"></div>\n			</div>\n			\n\n\n			<div class=\"fork-boxouter\">\n				<div class=\"vertical-lineleft\"></div>\n				<div class=\"forkleft\"></div>\n			</div>\n					\n			\n			<div></div>\n			\n            <div class=\"cell three\">\n                <div id=\"controls_loan_yield\" class = \"trafficlights\"></div>\n                <div class=\"header\"> Loan Yield (%) </div>\n                <div id=\"loan_yield\" class=\"graph\"></div>\n            </div>\n\n				\n				\n            <div class=\"cell three\">\n                <div id=\"controls_loan_lease_mix\" class = \"trafficlights\"></div>\n                <div class=\"header\">Loan Mix (%)</div>\n                <div id=\"loan_lease_mix\" class=\"graph\"></div>\n            </div>\n\n            <div class=\"cell three\">\n                <div id=\"controls_otherintyield\" class = \"trafficlights\"></div>\n                <div class=\"header\">Other EA Yield (%)</div>\n                <div id=\"otherintyield\" class=\"graph\"></div>\n            </div>\n			\n			</div>\n			\n		   <div id=\"plus-costoffunds-results\">\n		   \n		   <div></div>\n				<div class=\"fork-boxouter\">\n				</div>\n		\n           <div class=\"fork-boxouter\">\n               <div class=\"vertical-line\"></div> \n   				<div class=\"fork-boxouter\">\n   			 	<div class=\"fork fourleft\"></div></div>\n           </div>\n		\n		<div></div>\n           \n           <div class=\"cell threeblank\">\n               <div class=\"controls\"></div>\n               <div class=\"header\">&nbsp</div>\n			<div id=\"\" class=\"graph\"></div>\n           </div>\n		   \n\n		   <div class=\"cell three\">\n               <div id=\"controls_cost_of_funds\" class = \"trafficlights\"></div>\n               <div class=\"header\">Cost of Funds (%)</div>\n               <div id=\"cost_of_funds\" class=\"graph\"></div>\n           </div>\n\n           <div class=\"cell three\">\n               <div id=\"controls_ibl_ea_ratio\" class = \"trafficlights\"></div>\n               <div class=\"header\">Earning Assets / Funding (%)</div>\n			<div id=\"ibl_ea_ratio\" class=\"graph\"></div>\n           </div>\n		   \n		   <div></div>\n		\n           <div class=\"vertical-line\"></div> \n            <div class=\"fork three\"></div>		\n		   \n		   <div></div>\n		   \n           <div class=\"cell three\">\n               <div id=\"controls_cost_of_deposits_wgt\" class = \"trafficlights\"></div>\n               <div class=\"header\">Weighted Cost of Deposits (%)</div>\n               <div id=\"cost_of_deposits_wgt\" class=\"graph\"></div>\n           </div>\n		   \n           <div class=\"cell threeblank\">\n               <div class=\"controls\"></div>\n               <div class=\"header\">&nbsp</div>\n               <div id=\"t\" class=\"graph\"></div>\n           </div>\n		   \n\n           <div class=\"cell three\">\n               <div id=\"controls_cost_of_other_borrowings_wgt\" class = \"trafficlights\"></div>\n               <div class=\"header\">Weighted Cost of Other Funds (%)</div>\n			<div id=\"cost_of_other_borrowings_wgt\" class=\"graph\"></div>\n           </div>\n		   \n		   <div></div>\n		\n           <div class=\"fork-boxouter\">\n               <div class=\"vertical-line\"></div> \n			   <div class=\"fork-boxouter\">\n               <div class=\"fork fourright\"></div></div>\n           </div>\n		   \n           <div class=\"fork-boxouter\">\n               <div class=\"vertical-line\"></div> \n   				<div class=\"fork-boxouter\">\n   			 	<div class=\"fork fourleft\"></div></div>\n           </div>\n		   \n		   \n		   <div></div>\n		   \n           <div class=\"cell three\">\n               <div id=\"controls_cost_of_deposits\" class = \"trafficlights\"></div>\n               <div class=\"header\">Cost of Deposits</div>\n               <div id=\"cost_of_deposits\" class=\"graph\"></div>\n           </div>\n\n           <div class=\"cell three\">\n               <div id=\"controls_deposit_mix\" class = \"trafficlights\"></div>\n               <div class=\"header\">Deposits Mix (% of funds)</div>\n               <div id=\"deposit_mix\" class=\"graph\"></div>\n           </div>\n\n           <div class=\"cell three\">\n               <div id=\"controls_cost_of_other_funds\" class = \"trafficlights\"></div>\n               <div class=\"header\">Cost of Other Funds (%)</div>\n			<div id=\"cost_of_other_funds\" class=\"graph\"></div>\n           </div>\n		   \n		   <div></div>\n		   \n		   \n		   \n		   \n		   \n		   \n		   \n		   \n		   </div>\n				\n			</div>\n\n			\n            </div>\n			\n			  \n            </section>\n        </div>\n\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/individual/simulation-AY.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"hero\">\n    <h1 class=\"title\">Individual Bank Analyzer</h1><h2 class=\"title\">WHAT-IF SIMULATOR</h2>\n    <p class=\"sub-title\">Gain insights into the performance of individual banks by simulating a range of what-if scenarios.</p>\n\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li><a href=\"/individual\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/outlook\">ESTIMATES & OUTLOOK</a></li>\n                <li>|</li>\n                <li class=\"selected\"><a href=\"/individual/simulation\">WHAT-IF SIMULATOR</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n        </div>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"individual\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>SELECT BANK <img src=\"/app/assets/images/premium-icon-red.png\"></h3>\n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n        <div class=\"col\">\n        </div>\n\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> SAVE/LOAD SIMULATION</h2>\n        </div>\n    </section>\n\n    <section id=\"data\" class=\"sim\">\n        <div class=\"block full auto\">\n            <header>SIMULATED OUTCOMES</header>\n            <section class=\"detail\"  id=\"outcomes\">\n                <div class=\"col\">\n                    <label>Total Shareholder Returns: </label> <span>0% (0%) <img src=\"/app/assets/images/outcome-arrow.png\"> 0% (0%) <img src=\"/app/assets/images/outcome-graph.png\"></span>\n                </div>\n            </section>\n        </div>\n\n        <div class=\"block full auto\">\n            <header>ASSUMPTIONS</header>\n            <section class=\"detail\" id=\"drivers\">\n                <div class=\"col\">\n                    <label>Efficiency Ratio</label>\n                    <input type=\"range\" id=\"er-slider\" blklab-change=\"updateER\" class=\"reverse\" />\n                    <div id=\"er-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Loan Loss Ratio</label>\n                    <input type=\"range\" id=\"llr-slider\" blklab-change=\"updateLLR\" class=\"reverse\" />\n                    <div id=\"llr-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Asset Yield</label>\n                    <input type=\"range\" id=\"ay-slider\" blklab-change=\"updateAY\" />\n                    <div id=\"ay-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Leverage</label>\n                    <input type=\"range\" id=\"lev-slider\" blklab-change=\"updateLev\" />\n                    <div id=\"lev-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n            </section>\n        </div>\n\n        <div class=\"block full auto\">\n            <header>SIMULATION DETAILS</header>\n            <section class=\"detail\" id=\"simulation-detail\">\n                <img src=\"/assets/images/list-view.png\" class=\"left-button\" id=\"list-view\">\n                <img src=\"/assets/images/block-view.png\" class=\"left-button\" id=\"block-view\">\n                <img src=\"/assets/images/graph-view.png\" class=\"left-button\" id=\"graph-view\">\n\n                <div class=\"cell\">\n                    <!-- <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div> --!>\n                    <div class=\"header\">Asset Yield (%)</div>\n                    <div id=\"Asset_Yield\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork three\">\n                    <div class=\"vertical-line\"></div>\n                </div>\n				\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\"> Net Interest Margin (%)</div>\n                    <div id=\"net_int_margin\" class=\"graph\"></div>\n                </div>				\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Non-Interest Income Yield (%)</div>\n                    <div id=\"non_int_margin\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Earning Asset Mix (%)</div>\n                    <div id=\"EA_Mix\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"vertical-line firstleft\"></div>\n                <div class=\"fork three\"></div>\n				\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\"> Gross Interest Yield (%)</div>\n                    <div id=\"gross_int_yield\" class=\"graph\"></div>\n                </div>				\n\n                <div class=\"cell threeblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">&nbsp</div>\n                    <div id=\"blank\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Interest Expense (% Earning Assets)</div>\n                    <div id=\"cost_of_funds_ea\" class=\"graph\"></div>\n                </div>\n		\n				<div></div>\n                <div class=\"fork-boxouter\">\n	                <div class=\"vertical-line\"></div> \n	                <div class=\"fork four\"></div>\n                </div>\n                <div class=\"fork-boxouter\">\n                   <div class=\"vertical-line\"></div>\n                   <div class=\"fork four\"></div>\n                </div>\n				\n                <div></div>\n                <div class=\"cell four\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Weighted Loan Yield (%) </div>\n                    <div id=\"int_yield_loans_wgt\" class=\"graph\"></div>\n                </div>\n\n					\n					\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Weighted Other Yield(%)</div>\n                    <div id=\"other_int_yield_wgt\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Cost of Funds (%)</div>\n                    <div id=\"cost_of_funds\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Earning Assets / Funding (%)</div>\n					<div id=\"ibl_ea_ratio\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"fork-boxouter\">\n	                <div class=\"vertical-line\"></div> \n	                <div class=\"fork four\">\n					 <div class=\"vertical-line\"></div>\n					</div>\n                </div>\n				\n				<div></div>\n                <div class=\"fork-boxouter\">\n                   <div class=\"vertical-lineleft\"></div>\n                   <div class=\"fork four\"></div>\n                </div>\n                <div class=\"fork-boxouter\">\n                   <div class=\"vertical-lineleft\"></div>\n                   <div class=\"fork four\"></div>\n                </div>\n                <div></div>\n                <div class=\"cell four\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Loans - Interest Yield (%) </div>\n                    <div id=\"loan_yield\" class=\"graph\"></div>\n                </div>		\n					\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\"> Loans Mix (%)</div>\n                    <div id=\"loan_lease_mix\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Weighted Cost of Deposits (%)</div>\n                    <div id=\"cost_of_deposits_wgt\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Weighted Cost of Other Funds (%)</div>\n					<div id=\"cost_of_other_borrowings_wgt\" class=\"graph\"></div>\n                </div>\n				\n				\n                <div class=\"fork-boxouter\">\n	                <div class=\"vertical-line\"></div> \n	                <div class=\"fork four\">\n					 <div class=\"vertical-line\"></div>\n					</div>\n                </div>\n				\n				<div></div>\n                \n				<div class=\"fork-boxouter\">\n                   <div class=\"vertical-lineright\"></div>\n                   <div class=\"fork four\"></div>\n                </div>\n                <div></div>\n				\n                <div class=\"cell fourblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">&nbsp</div>\n                    <div id=\"blank\" class=\"graph\"></div>\n                </div>		\n					\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Cost of Deposits</div>\n                    <div id=\"cost_of_deposits\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Deposits Mix (% of funds)</div>\n                    <div id=\"deposit_mix\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Cost of Other Funds (%)</div>\n					<div id=\"cost_of_other_funds\" class=\"graph\"></div>\n                </div>\n				\n			<!-- <div></div>\n             <div class=\"fork-box\">\n                 <div class=\"vertical-line\"></div>\n                 <div class=\"fork threeleft\"></div>\n             </div>\n             <div class=\"fork-box\">\n                 <div class=\"vertical-line\"></div>\n                 <div class=\"fork threeright\"></div>\n             </div>\n             <div></div>\n				\n                <div class=\"cell three\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Dividend Payout (%)</div>\n                    <div id=\"dividend_payout\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Leverage</div>\n                    <div id=\"Leverage\" class=\"graph\"></div>\n                </div>\n				\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Return on Average Assets</div>\n                    <div id=\"ROAA\" class=\"graph\"></div>\n                </div> --!>\n\n                <!--<table style='table-layout:fixed; width:100%; height: 650px'>\n                    <tr>\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='width 100%; height:3%; background:white; padding:10px;'>Return on Equity</div>\n                            <div id='ROAE' style='width 100%; height:22%; background:white;'></div>\n                        </td>\n\n                        <td style=' width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:50%'></div>\n                                <div style='border-top: 1px solid black; width:100%; height:50%'></div>\n                            </div>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border: 0; width:100%; height:33%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:34%'></div>\n                                <div style='border: 0px solid black; width:100%; height:33%'></div>\n                            </div>\n                        </td>\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='border:0; width 22%; height:25%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Operating Return on Equity</div>\n                            <div id=\"Operating_ROE\" style='background:white; width 100%; height:22%'></div>\n                            <div style='border:0; width 99%; height:4%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Extraordinary Items & Other Adjs</div>\n                            <div id=\"Extra_Adj_Other\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:25%'></div>\n                        </td>\n\n                        <td style='width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 50%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:74%'></div>\n                                <div style='border-top: 1px solid black; width:100%; height:26%'></div>\n                            </div>\n\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border: 0; width:100%; height:23%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:27%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:27%'></div>\n                                <div style='border: 0px solid black; width:100%; height:23%'></div>\n                            </div>\n                        </td>\n\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='border:0; width 99%; height:12%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Operating Margin</div>\n                            <div id=\"Op_Margin\" style='background:t; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:5%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Effective Tax Rate</div>\n                            <div id=\"ROAA_Effective_Tax_Rate\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:5%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Capital Utilization</div>\n                            <div id=\"Capital_Utilization\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:12%'></div>\n                        </td>\n\n                        <td style='width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:23%'></div>\n                                <div style='border-bottom: 1px solid black; width:100%; height:54%'></div>\n                                <div style='border: 0; width:100%; height:23%'></div>\n                            </div>\n\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:11%'></div>\n                                <div style='border-bottom: 1px solid black; border-left: 1px solid black;width:100%; height:25%'></div>\n                                <div style='border-bottom: 1px solid black; width:100%; height:28%'></div>\n                                <div style='border-bottom: 1px solid black; border-left: 1px solid black;width:100%; height:25%'></div>\n                                <div style='border:0; width:100%; height:11%'></div>\n                            </div>\n                        </td>\n\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='background:white;  width 100%; height:3%; padding:10px;'>Efficiency_Ratio</div>\n                            <div id=\"Efficiency_Ratio\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Loan Loss Ratio</div>\n                            <div id=\"LLR\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Income Yield on Assets</div>\n                            <div id=\"Asset_Yield\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Leverage</div>\n                            <div id=\"Leverage\" style='background:white; width 99%; height:22%'></div>\n                        </td>\n\n                    </tr>\n                </table>-->\n            </section>\n        </div>\n\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/individual/simulation-COE.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"hero\">\n    <h1 class=\"title\">Individual Bank Analyzer</h1><h2 class=\"title\">WHAT-IF SIMULATOR</h2>\n    <p class=\"sub-title\">Gain insights into the performance of individual banks by simulating a range of what-if scenarios.</p>\n\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li><a href=\"/individual\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/outlook\">ESTIMATES & OUTLOOK</a></li>\n                <li>|</li>\n                <li class=\"selected\"><a href=\"/individual/simulation\">WHAT-IF SIMULATOR</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n        </div>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"individual\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>SELECT BANK <img src=\"/app/assets/images/premium-icon-red.png\"></h3>\n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n        <div class=\"col\">\n        </div>\n\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> SAVE/LOAD SIMULATION</h2>\n        </div>\n    </section>\n\n    <section id=\"data\" class=\"sim\">\n        <div class=\"block full auto\">\n            <header>SIMULATED OUTCOMES</header>\n            <section class=\"detail\"  id=\"outcomes\">\n                <div class=\"col\">\n                    <label>Total Shareholder Returns: </label> <span>0% (0%) <img src=\"/app/assets/images/outcome-arrow.png\"> 0% (0%) <img src=\"/app/assets/images/outcome-graph.png\"></span>\n                </div>\n            </section>\n        </div>\n\n        <div class=\"block full auto\">\n            <header>ASSUMPTIONS</header>\n            <section class=\"detail\" id=\"drivers\">\n                <div class=\"col\">\n                    <label>Efficiency Ratio</label>\n                    <input type=\"range\" id=\"er-slider\" blklab-change=\"updateER\" class=\"reverse\" />\n                    <div id=\"er-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Loan Loss Ratio</label>\n                    <input type=\"range\" id=\"llr-slider\" blklab-change=\"updateLLR\" class=\"reverse\" />\n                    <div id=\"llr-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Asset Yield</label>\n                    <input type=\"range\" id=\"ay-slider\" blklab-change=\"updateAY\" />\n                    <div id=\"ay-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Leverage</label>\n                    <input type=\"range\" id=\"lev-slider\" blklab-change=\"updateLev\" />\n                    <div id=\"lev-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n            </section>\n        </div>\n\n        <div class=\"block full auto\">\n            <header>SIMULATION DETAILS</header>\n            <section class=\"detail\" id=\"simulation-detail\">\n                <img src=\"/assets/images/list-view.png\" class=\"left-button\" id=\"list-view\">\n                <img src=\"/assets/images/block-view.png\" class=\"left-button\" id=\"block-view\">\n                <img src=\"/assets/images/graph-view.png\" class=\"left-button\" id=\"graph-view\">\n\n                <div class=\"cell\">\n                    <!-- <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div> --!>\n                    <div class=\"header\">Cost of Equity (%)</div>\n                    <div id=\"cost_of_capital\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork three\">\n                    <div class=\"vertical-line\"></div>\n                </div>\n				\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">10yr US Bond Rate (%) </div>\n                    <div id=\"risk_free_rate\" class=\"graph\"></div>\n                </div>				\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Stock Beta</div>\n                    <div id=\"beta\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Equity Risk Premium (%)</div>\n                    <div id=\"equity_risk_premium\" class=\"graph\"></div>\n                </div>\n				\n            </section>\n        </div>\n\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/individual/simulation-orig.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"hero\">\n    <h1 class=\"title\">Individual Bank Analyzer</h1><h2 class=\"title\">WHAT-IF SIMULATOR</h2>\n    <p class=\"sub-title\">Gain insights into the performance of individual banks by simulating a range of what-if scenarios.</p>\n\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li><a href=\"/individual\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/outlook\">ESTIMATES & OUTLOOK</a></li>\n                <li>|</li>\n                <li class=\"selected\"><a href=\"/individual/simulation\">WHAT-IF SIMULATOR</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n        </div>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"individual\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>SELECT BANK <img src=\"/app/assets/images/premium-icon-red.png\"></h3>\n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n        <div class=\"col\">\n        </div>\n\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> SAVE/LOAD SIMULATION</h2>\n        </div>\n    </section>\n\n    <section id=\"data\" class=\"sim\">\n        <div class=\"block full auto\">\n            <header>SIMULATED OUTCOMES</header>\n            <section class=\"detail\"  id=\"outcomes\">\n                <div class=\"col\">\n                    <label>Total Shareholder Returns: </label> <span>0% (0%) <img src=\"/app/assets/images/outcome-arrow.png\"> 0% (0%) <img src=\"/app/assets/images/outcome-graph.png\"></span>\n                </div>\n            </section>\n        </div>\n\n        <div class=\"block full auto\">\n            <header>ASSUMPTION DRIVERS</header>\n            <section class=\"detail\" id=\"drivers\">\n                <div class=\"col\">\n                    <label>Efficiency Ratio  Scenario</label>\n                    <input type=\"range\" id=\"er-slider\" blklab-change=\"updateER\" class=\"reverse\" />\n                    <div id=\"er-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Loan Loss Ratio Scenario</label>\n                    <input type=\"range\" id=\"llr-slider\" blklab-change=\"updateLLR\" class=\"reverse\" />\n                    <div id=\"llr-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Asset Yield Scenario</label>\n                    <input type=\"range\" id=\"ay-slider\" blklab-change=\"updateAY\" />\n                    <div id=\"ay-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Leverage Scenario</label>\n                    <input type=\"range\" id=\"lev-slider\" blklab-change=\"updateLev\" />\n                    <div id=\"lev-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n            </section>\n        </div>\n\n        <div class=\"block full auto\">\n            <header>SIMULATION DETAILS</header>\n            <section class=\"detail\" id=\"simulation-detail\">\n                <img src=\"/assets/images/list-view.png\" class=\"left-button\" id=\"list-view\">\n                <img src=\"/assets/images/block-view.png\" class=\"left-button\" id=\"block-view\">\n                <img src=\"/assets/images/graph-view.png\" class=\"left-button\" id=\"graph-view\">\n\n\n                <div class=\"tree-top\">\n                    <img src=\"/assets/images/tree-top.png\">\n                    Total<br>\n                    Returns\n                </div>\n\n                <div class=\"vertical-line\"></div>\n\n                <div class=\"cell\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Return on Equity</div>\n                    <div id=\"ROAE\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork\"></div>\n\n                <div class=\"cell two\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Operating Return on Equity</div>\n                    <div id=\"Operating_ROE\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell two\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Extraordinary Items & Other Adjs</div>\n                    <div id=\"Extra_Adj_Other\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"vertical-line first\"></div>\n                <div class=\"fork three\">\n                    <div class=\"vertical-line\"></div>\n                </div>\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Oeprating Margin</div>\n                    <div id=\"Op_Margin\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Effective Tax Rate</div>\n                    <div id=\"ROAA_Effective_Tax_Rate\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Capital Utilization</div>\n                    <div id=\"Capital_Utilization\" class=\"graph\"></div>\n                </div>\n\n                <div></div>\n                <div class=\"fork-boxouter\">\n                    <div class=\"vertical-line\"></div>\n                    <div class=\"fork four\"></div>\n                </div>\n                <div class=\"fork-boxouter\">\n                    <div class=\"vertical-line\"></div>\n                    <div class=\"fork four\"></div>\n                </div>\n                <div></div>\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Efficiency_Ratio</div>\n                    <div id=\"Efficiency_Ratio\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Loan Loss Ratio</div>\n                    <div id=\"LLR\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Asset Yield</div>\n                    <div id=\"Asset_Yield\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Leverage</div>\n                    <div id=\"Leverage\" class=\"graph\"></div>\n                </div>\n\n                <!--<table style='table-layout:fixed; width:100%; height: 650px'>\n                    <tr>\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='width 100%; height:3%; background:white; padding:10px;'>Return on Equity</div>\n                            <div id='ROAE' style='width 100%; height:22%; background:white;'></div>\n                        </td>\n\n                        <td style=' width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:50%'></div>\n                                <div style='border-top: 1px solid black; width:100%; height:50%'></div>\n                            </div>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border: 0; width:100%; height:33%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:34%'></div>\n                                <div style='border: 0px solid black; width:100%; height:33%'></div>\n                            </div>\n                        </td>\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='border:0; width 22%; height:25%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Operating Return on Equity</div>\n                            <div id=\"Operating_ROE\" style='background:white; width 100%; height:22%'></div>\n                            <div style='border:0; width 99%; height:4%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Extraordinary Items & Other Adjs</div>\n                            <div id=\"Extra_Adj_Other\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:25%'></div>\n                        </td>\n\n                        <td style='width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 50%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:74%'></div>\n                                <div style='border-top: 1px solid black; width:100%; height:26%'></div>\n                            </div>\n\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border: 0; width:100%; height:23%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:27%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:27%'></div>\n                                <div style='border: 0px solid black; width:100%; height:23%'></div>\n                            </div>\n                        </td>\n\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='border:0; width 99%; height:12%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Operating Margin</div>\n                            <div id=\"Op_Margin\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:5%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Effective Tax Rate</div>\n                            <div id=\"ROAA_Effective_Tax_Rate\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:5%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Capital Utilization</div>\n                            <div id=\"Capital_Utilization\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:12%'></div>\n                        </td>\n\n                        <td style='width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:23%'></div>\n                                <div style='border-bottom: 1px solid black; width:100%; height:54%'></div>\n                                <div style='border: 0; width:100%; height:23%'></div>\n                            </div>\n\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:11%'></div>\n                                <div style='border-bottom: 1px solid black; border-left: 1px solid black;width:100%; height:25%'></div>\n                                <div style='border-bottom: 1px solid black; width:100%; height:28%'></div>\n                                <div style='border-bottom: 1px solid black; border-left: 1px solid black;width:100%; height:25%'></div>\n                                <div style='border:0; width:100%; height:11%'></div>\n                            </div>\n                        </td>\n\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='background:white;  width 100%; height:3%; padding:10px;'>Efficiency_Ratio</div>\n                            <div id=\"Efficiency_Ratio\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Loan Loss Ratio</div>\n                            <div id=\"LLR\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Income Yield on Assets</div>\n                            <div id=\"Asset_Yield\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Leverage</div>\n                            <div id=\"Leverage\" style='background:white; width 99%; height:22%'></div>\n                        </td>\n\n                    </tr>\n                </table>-->\n            </section>\n        </div>\n\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/individual/simulation-ROAA.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"hero\">\n    <h1 class=\"title\">Individual Bank Analyzer</h1><h2 class=\"title\">WHAT-IF SIMULATOR</h2>\n    <p class=\"sub-title\">Gain insights into the performance of individual banks by simulating a range of what-if scenarios.</p>\n\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li><a href=\"/individual\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/outlook\">ESTIMATES & OUTLOOK</a></li>\n                <li>|</li>\n                <li class=\"selected\"><a href=\"/individual/simulation\">WHAT-IF SIMULATOR</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n        </div>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"individual\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>SELECT BANK <img src=\"/app/assets/images/premium-icon-red.png\"></h3>\n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n        <div class=\"col\">\n        </div>\n\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> SAVE/LOAD SIMULATION</h2>\n        </div>\n    </section>\n\n    <section id=\"data\" class=\"sim\">\n        <div class=\"block full auto\">\n            <header>SIMULATED OUTCOMES</header>\n            <section class=\"detail\"  id=\"outcomes\">\n                <div class=\"col\">\n                    <label>Total Returns: </label> <span>0% (0%) <img src=\"/app/assets/images/outcome-arrow.png\"> 0% (0%) <img src=\"/app/assets/images/outcome-graph.png\"></span>\n                </div>\n            </section>\n        </div>\n\n        <div class=\"block full auto\">\n            <header>ASSUMPTION DRIVERS</header>\n            <section class=\"detail\" id=\"drivers\">\n                <div class=\"col\">\n                    <label>Efficiency Ratio  Scenario</label>\n                    <input type=\"range\" id=\"er-slider\" blklab-change=\"updateER\" class=\"reverse\" />\n                    <div id=\"er-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Loan Loss Ratio Scenario</label>\n                    <input type=\"range\" id=\"llr-slider\" blklab-change=\"updateLLR\" class=\"reverse\" />\n                    <div id=\"llr-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Asset Yield Scenario</label>\n                    <input type=\"range\" id=\"ay-slider\" blklab-change=\"updateAY\" />\n                    <div id=\"ay-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Leverage Scenario</label>\n                    <input type=\"range\" id=\"lev-slider\" blklab-change=\"updateLev\" />\n                    <div id=\"lev-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n            </section>\n        </div>\n\n        <div class=\"block full auto\">\n            <header>SIMULATION DETAILS</header>\n            <section class=\"detail\" id=\"simulation-detail\">\n                <img src=\"/assets/images/list-view.png\" class=\"left-button\" id=\"list-view\">\n                <img src=\"/assets/images/block-view.png\" class=\"left-button\" id=\"block-view\">\n                <img src=\"/assets/images/graph-view.png\" class=\"left-button\" id=\"graph-view\">\n\n\n                <div class=\"tree-top\">\n                    <img src=\"/assets/images/tree-top.png\">\n                    Total<br>\n                    Returns\n                </div>\n\n                <div class=\"vertical-line\"></div>\n\n                <div class=\"cell\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Return on Assets (%)</div>\n                    <div id=\"ROAA\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork\"></div>\n\n                <div class=\"cell two\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Operating Return on Assets</div>\n                    <div id=\"op_roaa\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell two\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Extraordinary Items & Other Adjs</div>\n                    <div id=\"Extra_Adj_Other_ROAA\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"vertical-line first\"></div>\n                <div class=\"fork three\">\n                    <div class=\"vertical-line\"></div>\n                </div>\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Operating Margin</div>\n                    <div id=\"Op_Margin\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Effective Tax Rate</div>\n                    <div id=\"ROAA_Effective_Tax_Rate\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Asset_Yield</div>\n                    <div id=\"Asset_Yield\" class=\"graph\"></div>\n                </div>\n\n                <div></div>\n                <div class=\"fork-box\">\n                    <div class=\"vertical-line\"></div>\n                    <div class=\"fork four\"></div>\n                </div>\n                <div class=\"fork-box\">\n                    <div class=\"vertical-line\"></div>\n                    <div class=\"fork four\"></div>\n                </div>\n                <div></div>\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Efficiency_Ratio</div>\n                    <div id=\"Efficiency_Ratio\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Loan Loss Ratio</div>\n                    <div id=\"LLR\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Net Interest Margin</div>\n                    <div id=\"net_int_margin\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Non Interest Income Yield</div>\n                    <div id=\"non_int_margin\" class=\"graph\"></div>\n                </div>\n\n                <!--<table style='table-layout:fixed; width:100%; height: 650px'>\n                    <tr>\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='width 100%; height:3%; background:white; padding:10px;'>Return on Equity</div>\n                            <div id='ROAE' style='width 100%; height:22%; background:white;'></div>\n                        </td>\n\n                        <td style=' width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:50%'></div>\n                                <div style='border-top: 1px solid black; width:100%; height:50%'></div>\n                            </div>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border: 0; width:100%; height:33%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:34%'></div>\n                                <div style='border: 0px solid black; width:100%; height:33%'></div>\n                            </div>\n                        </td>\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='border:0; width 22%; height:25%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Operating Return on Equity</div>\n                            <div id=\"Operating_ROE\" style='background:white; width 100%; height:22%'></div>\n                            <div style='border:0; width 99%; height:4%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Extraordinary Items & Other Adjs</div>\n                            <div id=\"Extra_Adj_Other\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:25%'></div>\n                        </td>\n\n                        <td style='width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 50%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:74%'></div>\n                                <div style='border-top: 1px solid black; width:100%; height:26%'></div>\n                            </div>\n\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border: 0; width:100%; height:23%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:27%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:27%'></div>\n                                <div style='border: 0px solid black; width:100%; height:23%'></div>\n                            </div>\n                        </td>\n\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='border:0; width 99%; height:12%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Operating Margin</div>\n                            <div id=\"Op_Margin\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:5%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Effective Tax Rate</div>\n                            <div id=\"ROAA_Effective_Tax_Rate\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:5%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Capital Utilization</div>\n                            <div id=\"Capital_Utilization\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:12%'></div>\n                        </td>\n\n                        <td style='width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:23%'></div>\n                                <div style='border-bottom: 1px solid black; width:100%; height:54%'></div>\n                                <div style='border: 0; width:100%; height:23%'></div>\n                            </div>\n\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:11%'></div>\n                                <div style='border-bottom: 1px solid black; border-left: 1px solid black;width:100%; height:25%'></div>\n                                <div style='border-bottom: 1px solid black; width:100%; height:28%'></div>\n                                <div style='border-bottom: 1px solid black; border-left: 1px solid black;width:100%; height:25%'></div>\n                                <div style='border:0; width:100%; height:11%'></div>\n                            </div>\n                        </td>\n\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='background:white;  width 100%; height:3%; padding:10px;'>Efficiency_Ratio</div>\n                            <div id=\"Efficiency_Ratio\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Loan Loss Ratio</div>\n                            <div id=\"LLR\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Income Yield on Assets</div>\n                            <div id=\"Asset_Yield\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Leverage</div>\n                            <div id=\"Leverage\" style='background:white; width 99%; height:22%'></div>\n                        </td>\n\n                    </tr>\n                </table>-->\n            </section>\n        </div>\n\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/individual/simulation.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "               <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.userId || (depth0 != null ? depth0.userId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.segment || (depth0 != null ? depth0.segment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"segment","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"hero\">\n<div class=\"text1\">\n    <h1 class=\"title\">Individual Bank Analyzer</h1><h2 class=\"title\">WHAT-IF SIMULATOR</h2>\n    <p class=\"sub-title\">Gain insights into the performance of individual banks by simulating a range of what-if scenarios.</p>\n</div>\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li><a href=\"/individual\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/outlook\"><div class=\"premiuminline\"><img HR WIDTH=\"15px\" HR HEIGHT=\"15px\" src=\"/app/assets/images/premium-icon-red.png\"></div>&nbspESTIMATES & OUTLOOK</a></li>\n                <li>|</li>\n                <li class=\"selected\"><a href=\"/individual/simulation\"><div class=\"premiuminline\"><img HR WIDTH=\"15px\" HR HEIGHT=\"15px\" src=\"/app/assets/images/premium-icon-red.png\"></div>&nbspWHAT-IF SIMULATOR</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n        </div>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"individual\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>SELECT BANK </h3>\n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n        <div class=\"col\">\n            <h3>INDUSTRY SEGMENT:</h3>\n            <select blklab-change=\"changeSegment\" id=\"segment-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.segments : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select> \n			<div class=\"segment_image\">\n				<img blklab-click=\"peerMenu\" HR WIDTH=\"90%\" HR HEIGHT=\"90%\" src=\"/app/assets/images/multiple-users.svg\">	\n				<div id=\"peerMenu\" class=\"peerMenu\">\n					<div blklab-click=\"showPeers\">\n        				<div class = \"segment_image2\" id=\"view_segment\">\n           					<img HR WIDTH=\"80%\" HR HEIGHT=\"80%\" src=\"/app/assets/images/glasses.png\">\n         				</div>\n						<div class=\"peerSet\">View segment participants</div>\n						<div id=\"peerDetails\"></div>\n					</div>	\n				<div></div>\n					\n        		<div blklab-click=\"addSegment\">\n					<div class=\"segment_image2\">\n        				<img HR WIDTH=\"80%\" HR HEIGHT=\"80%\" src=\"/app/assets/images/plus.png\">\n        			</div>\n					<div class=\"peerSet\" id=\"addSegment\">Create custom segment</div>\n				</div>\n				<div blklab-click=\"editSegment\">\n				<div class=\"segment_image2\">\n           			<img HR WIDTH=\"70%\" HR HEIGHT=\"70%\" src=\"/app/assets/images/pencil.png\">\n           		</div>\n					<div class=\"peerSet\" id=\"editSegment\">Edit existing segment</div>\n				</div>\n			</div>\n		</div>	\n	</div>\n\n        <div class=\"col\">\n        </div>\n<!--\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> SAVE/LOAD SIMULATION</h2>\n        </div>\n\n--!>\n    </section>\n\n    <section id=\"data\" class=\"sim\" blklab-click=\"hide_tag\">\n    <div id=\"anchor\"></div>\n        <div id=\"results\" class=\"block full auto\">\n            <header>RESULTS SNAPSHOT</header>\n            <section class=\"detail\"  id=\"outcomes\">\n                <div id = \"simulation_outcomes\" class=\"col\">\n\n                </div>\n            </section>\n        </div>\n\n <!--       <div class=\"block full auto\">\n            <header>ASSUMPTIONS</header>\n            <section class=\"detail\" id=\"drivers\">\n            </section>\n        </div> --!>\n\n        <div class=\"block full auto\">\n            \n            	<header>DRIVERS&nbsp&nbsp(&nbspClick&nbsp<div class=\"circleHeader\"><img src=\"/app/assets/images/graph-icon.png\">&nbsp to change input values for selected charts)</div></header>\n            	\n            \n            <section class=\"detail\" id=\"simulation-detail\">\n<!--                <img src=\"/assets/images/list-view.png\" class=\"left-button\" id=\"list-view\">\n                    <img src=\"/assets/images/block-view.png\" class=\"left-button\" id=\"block-view\">\n                    <img src=\"/assets/images/graph-view.png\" class=\"left-button\" id=\"graph-view\">\n--!>\n                <div class=\"cell\">\n                     <div id=\"controls_total_return_1\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Total Returns (%)</div>\n                    <div id=\"total_return_1\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork\"></div>\n\n                <div class=\"cell two\">\n                    <div id=\"controls_dividend_yield\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Dividend Yield (%)</div>\n                    <div id=\"dividend_yield\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"cell two\">\n                     <div id=\"controls_shares_yield\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Share Price Appreciation (%)</div>\n                    <div id=\"shares_yield\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"vertical-lineright\"></div>\n                <div class=\"fork twoskinny\">\n\n                </div>\n\n\n\n                <div class=\"cell two\">\n                    <div id=\"controls_mkt_cap\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Market Capitalization ($bn)</div>\n                    <div id=\"mkt_cap\" class=\"graph1\"></div>\n                </div>\n\n\n                <div class=\"cell two\">\n                    <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Common_share_growth_tag\">\n                        <div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n                    </div>\n                    <div id=\"controls_Common_share_growth\" class = \"trafficlights\"></div>\n                    <div id=\"Common_share_growth_tag\" class=\"tag\">\n\n                    </div>\n                    <div class=\"header\">Common Shares Growth (%)</div>\n                    <div id=\"Common_share_growth\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"vertical-lineleft\"></div>\n                <div class=\"fork two\"></div>\n\n\n                <div class=\"cell three\">\n                    <div id=\"controls_equity_growth\" class = \"trafficlights\"></div>\n                    <div class=\"header\"> Equity Growth (%)</div>\n                    <div id=\"equity_growth\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"cell threeblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\"></div>\n                </div>\n\n                <div class=\"cell three\">\n                    <div id=\"controls_spread\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Economic Profitability (%)</div>\n                    <div id=\"spread\" class=\"graph1\"></div>\n                </div>\n\n                <div></div>\n                <div class=\"fork-box\">\n                    <div class=\"vertical-line firstleft\"></div>\n                    <div class=\"fork fourleft\"></div>\n                </div>\n                <div class=\"fork-box\">\n                    <div class=\"vertical-linewideright\"></div>\n                    <div class=\"fork fourright\"></div>\n                </div>\n                <div></div>\n                <div class=\"cell four\">\n                    <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Total_Asset_Growth_Rate_tag\">\n                        <div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n                    </div>\n                    <div id=\"controls_Total_Asset_Growth_Rate\" class = \"trafficlights\"></div>\n                    <div id=\"Total_Asset_Growth_Rate_tag\" class=\"tag\">\n\n                    </div>\n                    <div class=\"header\">Total Asset Growth (%) </div>\n\n                    <div id=\"Total_Asset_Growth_Rate\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"cell four\">\n\n                    <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Leverage_tag\"><div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n                    <div id=\"controls_Leverage\" class = \"trafficlights\"></div>\n                    <div id=\"Leverage_tag\" class=\"tag\"></div>\n                    <div class=\"header\">Leverage</div>\n                    <div id=\"Leverage\" class=\"graph1\"></div>\n             </div>\n\n\n\n                <div class=\"cell four\">\n                <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"ROAE_tag\"><div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n                <div id=\"controls_ROAE\" class = \"trafficlights\"></div>\n                <div id=\"ROAE_tag\" class=\"tag\">\n\n                </div>\n                    <div class=\"header\">Return on Equity (%)</div>\n\n                    <div id=\"ROAE\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Cost_of_Capital_tag\">\n                        <div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n                    <div id=\"controls_Cost_of_Capital\" class = \"trafficlights\"></div>\n                    <div id=\"Cost_of_Capital_tag\" class=\"tag\">\n\n                    </div>\n                    <div class=\"header\">Cost of Equity (%)</div>\n\n                    <div id=\"Cost_of_Capital\" class=\"graph1\"></div>\n                </div>\n\n            <div></div>\n\n            <div class=\"fork-box\">\n<!--\n                <div class=\"vertical-line\"></div>\n                <div id=\"plus-assetgrowth\" blklab-click=\"expandassetgrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/plus.svg\"></div>\n                <div id=\"minus-assetgrowth\" blklab-click=\"collapseassetgrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n--!>\n            </div>\n\n            <div class=\"fork-box\">\n<!--\n                <div class=\"vertical-line\"></div>\n                <div id=\"plus-otherequitygrowth\" blklab-click=\"expandotherequitygrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n                <div id=\"minus-otherequitygrowth\" blklab-click=\"collapseotherequitygrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n--!>\n            </div>\n\n\n            <div class=\"fork-box\">\n                <div class=\"vertical-line\"></div>\n                <div id=\"plus-roaa\" blklab-click=\"expandroaa\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n                <div id=\"minus-roaa\" blklab-click=\"collapseroaa\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n            </div>\n\n            <div class=\"fork-box\">\n                <div class=\"vertical-line\"></div>\n                <div id=\"plus-coe\" blklab-click=\"expandcoe\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/plus.svg\"></div>\n                <div id=\"minus-coe\" blklab-click=\"collapsecoe\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n            </div>\n\n            <div id=\"plus-assetgrowth-results\">\n\n                <div></div>\n\n                <div class=\"fork-box\">\n                    <div class=\"vertical-line\"></div>\n                </div>\n\n                <div class=\"fork-box\"></div>\n                <div class=\"fork-box\"></div>\n                <div class=\"fork-box\"></div>\n\n                <div class=\"fork threeleftfirst\">\n                    <div class=\"vertical-line\"></div>\n                </div>\n\n                <div></div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Loan Growth (%) </div>\n                    <div id=\"wgt_loan_growth\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Loan Mix (% Assets) </div>\n                    <div id=\"wgt_other_ea_growth\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"cell four\">\n\n                    <div class=\"header\">Other Asset Growth (%)</div>\n                    <div id=\"wgt_other_asset_growth\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"cell fourblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">&nbsp</div>\n                    <div id=\"\" class=\"graph1\"></div>\n                </div>\n\n                <div></div>\n\n                    <div class=\"fork-box\">\n                        <div class=\"vertical-line\"></div>\n                    </div>\n                    <div class=\"fork-box\"></div>\n                    <div class=\"fork-box\"></div>\n                    <div class=\"fork-box\"></div>\n\n                    <div class=\"fork threeleftfirst\">\n                        <div class=\"vertical-line\"></div>\n                    </div>\n\n                    <div></div>\n\n                     <div class=\"cell four\">\n                            <div class=\"controls\"></div>\n                        <div class=\"header\">Domestic Loan Growth (%) </div>\n                        <div id=\"wgt_loan_growth\" class=\"graph1\"></div>\n                    </div>\n\n                    <div class=\"cell four\">\n                        <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                        <div class=\"header\">Domestic Loan Mix (%)</div>\n                        <div id=\"domesticloanmix\" class=\"graph1\"></div>\n                    </div>\n\n                    <div class=\"cell four\">\n                        <div class=\"controls\"></div>\n                        <div class=\"header\">Foreign Loan Growth (%) </div>\n                        <div id=\"wgt_other_asset_growth\" class=\"graph1\"></div>\n                    </div>\n\n                    <div class=\"cell fourblank\">\n                        <div class=\"controls\"></div>\n                        <div class=\"header\">&nbsp</div>\n                        <div id=\"\" class=\"graph1\"></div>\n                        </div>\n\n                    <div></div>\n\n                    <div class=\"fork-box\">\n                        <div class=\"vertical-line\"></div>\n                    </div>\n                    <div class=\"fork-box\"></div>\n                    <div class=\"fork-box\"></div>\n                    <div class=\"fork-box\"></div>\n\n                    <div class=\"fork all\"></div>\n                    <div></div>\n\n                    <div class=\"cell four\">\n                        <div class=\"controls\"></div>\n                        <div class=\"header\">Growth Contribution: Consumer Loans (%) </div>\n                        <div id=\"wgt_loan_growth\" class=\"graph1\"></div>\n                    </div>\n\n                        <div class=\"cell four\">\n                        <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                        <div class=\"header\">Growth Contribution: Real Estate Loans (%) </div>\n                        <div id=\"wgt_other_ea_growth\" class=\"graph1\"></div>\n                    </div>\n\n                        <div class=\"cell four\">\n                           <div class=\"controls\"></div>\n                        <div class=\"header\">Growth Contribution: C&I Loans (%)</div>\n                        <div id=\"wgt_other_asset_growth\" class=\"graph1\"></div>\n                       </div>\n\n                         <div class=\"cell four\">\n                        <div class=\"controls\"></div>\n                        <div class=\"header\">Growth Contribution: Other Loans (%)</div>\n                        <div id=\"\" class=\"graph1\"></div>\n                    </div>\n\n                    <div></div>\n\n                    <div class=\"fork-box\">\n                        <div class=\"vertical-line\"></div>\n                        <div id=\"plus-wgtloangrowth\" blklab-click=\"expandwgtloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/plus.svg\"></div>\n                        <div id=\"minus-wgtloangrowth\" blklab-click=\"collapsewgtloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n                    </div>\n\n                    <div class=\"fork-box\">\n                        <div class=\"vertical-line\"></div>\n                        <div id=\"plus-wgtreloangrowth\" blklab-click=\"expandwgtreloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n                        <div id=\"minus-wgtreloangrowth\" blklab-click=\"collapsewgrreloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n                    </div>\n\n                    <div class=\"fork-box\">\n                        <div class=\"vertical-line\"></div>\n                        <div id=\"plus-wgtciloangrowth\" blklab-click=\"expandwgtciloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n                        <div id=\"minus-wgtciloangrowth\" blklab-click=\"collapsewgtciloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n                    </div>\n\n                    <div class=\"fork-box\">\n                        <div class=\"vertical-line\"></div>\n                        <div id=\"plus-wgtotherloangrowth\" blklab-click=\"expandwgtotherloangrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n                        <div id=\"minus-wgtotherloangrowth\" blklab-click=\"collapsewgtotherloanggrowth\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n                    </div>\n\n                    <div></div>\n\n                    <div id=\"plus-wgtloangrowth-results\">\n\n                        <div class=\"fork-box\">\n                            <div class=\"vertical-line\"></div>\n                        </div>\n                        <div class=\"fork-box\"></div>\n                        <div class=\"fork-box\"></div>\n                        <div class=\"fork-box\"></div>\n\n                        <div class=\"fork two\"></div>\n                        <div></div>\n\n                        <div class=\"cell four\">\n                            <div class=\"controls\"></div>\n                            <div class=\"header\">Consumer Loan Growth (%)</div>\n                            <div id=\"consumerloan_growth\" class=\"graph1\"></div>\n                        </div>\n\n                        <div class=\"cell four\">\n                             <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                             <div class=\"header\">Consumer Loan Mix (%) </div>\n                            <div id=\"consumerloanmix\" class=\"graph1\"></div>\n                        </div>\n\n                        <div class=\"cell fourblank\">\n                            <div class=\"controls\"></div>\n                            <div class=\"header\">&nbsp</div>\n                            <div id=\"\" class=\"graph1\"></div>\n                          </div>\n\n                        <div class=\"cell fourblank\">\n                               <div class=\"controls\"></div>\n                            <div class=\"header\">&nbsp</div>\n                            <div id=\"\" class=\"graph1\"></div>\n                        </div>\n\n                        <div></div>\n\n                        <div class=\"fork-box\">\n                            <div class=\"vertical-line\"></div>\n                        </div>\n                        <div class=\"fork-box\"></div>\n                        <div class=\"fork-box\"></div>\n                        <div class=\"fork-box\"></div>\n\n                        <div class=\"fork fourleft    \"></div>\n\n                        <div></div>\n\n                        <div class=\"cell four\">\n                            <div class=\"controls\"></div>\n                            <div class=\"header\">Consumer Loan Market Share (%)</div>\n                            <div id=\"wgt_loan_growth\" class=\"graph1\"></div>\n                        </div>\n\n                        <div class=\"cell four\">\n                            <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                               <div class=\"header\">Consumer Loan Industry Growth (%) </div>\n                            <div id=\"wgt_other_ea_growth\" class=\"graph1\"></div>\n                        </div>\n\n                        <div class=\"cell fourblank\">\n                            <div class=\"controls\"></div>\n                            <div class=\"header\">&nbsp</div>\n                            <div id=\"\" class=\"graph1\"></div>\n                        </div>\n\n                        <div class=\"cell fourblank\">\n                            <div class=\"controls\"></div>\n                               <div class=\"header\">&nbsp</div>\n                                <div id=\"\" class=\"graph1\"></div>\n                        </div>\n\n\n\n                </div>\n\n            </div>\n\n\n\n\n\n\n            <div id=\"plus-coe-results\">\n                <div></div>\n\n\n             <div class=\"fork-box\"></div>\n             <div class=\"fork-boxouter\">\n                 <div class=\"vertical-linefarright\"></div>\n                 <div class=\"fork threeright\">\n                     <div class=\"vertical-lineleft\"></div>\n                 </div>\n             </div>\n\n             <div></div>\n\n                <div class=\"cell fourblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">&nbsp </div>\n                    <div class=\"graph1\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Risk_Free_Rate_tag\">\n                        <div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n\n                    <div id=\"Risk_Free_Rate_tag\" class=\"tag\">\n\n                    </div>\n                    <div class=\"header\">10yr US Bond Rate (%) </div>\n                    <div id=\"Risk_Free_Rate\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Beta_tag\">\n                        <div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n                    <div id=\"controls_Beta\" class = \"trafficlights\"></div>\n                    <div id=\"Beta_tag\" class=\"tag\">\n\n                    </div>\n                    <div class=\"header\">Stock Beta</div>\n                    <div id=\"Beta\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Equity_Risk_Premium_tag\">\n                        <div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n\n                    <div id=\"Equity_Risk_Premium_tag\" class=\"tag\">\n\n                    </div>\n                    <div class=\"header\">Equity Risk Premium (%)</div>\n                    <div id=\"Equity_Risk_Premium\" class=\"graph1\"></div>\n                </div>\n\n            </div>\n<!--\n            <div id=\"plus-otherequitygrowth-results\">\n             <div class=\"fork-box\">\n                 <div class=\"vertical-line\"></div>\n                 <div class=\"fork threeright\"></div>\n             </div>\n\n             <div class=\"fork-box\"></div>\n             <div></div>\n\n             <div class=\"cell three\">\n                 <div class=\"controls\"><div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n                 <div id=\"controls_dividend_payout\" class = \"trafficlights\"></div>\n                 <div class=\"header\">Dividend Payout (%)</div>\n                 <div id=\"dividend_payout\" class=\"graph1\"></div>\n             </div>\n\n             <div class=\"cell three\">\n                    <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Leverage_tag\"><div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n                    <div id=\"controls_Leverage\" class = \"trafficlights\"></div>\n                    <div id=\"Leverage_tag\" class=\"tag\"></div>\n                    <div class=\"header\">Leverage</div>\n                    <div id=\"Leverage\" class=\"graph1\"></div>\n             </div>\n\n             <div class=\"cell threeblank\">\n                 <div class=\"controls\"></div>\n                 <div class=\"header\">&nbsp</div>\n                 <div id=\"\" class=\"graph1\"></div>\n             </div>\n\n\n            </div>\n--!>\n\n            <div id=\"plus-roaa-results\">\n            <div></div>\n\n            <div class=\"vertical-lineright\"></div>\n                <div class=\"fork twoskinny\"></div>\n\n            <div></div>\n\n\n                <div class=\"cell fourblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">&nbsp</div>\n                    <div id=\"\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"cell three\">\n\n                    <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Leverage1_tag\">\n                        <div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n                    </div>\n                    <div id=\"controls_Leverage1\" class = \"trafficlights\"></div>\n                    <div id=\"Leverage1_tag\" class=\"tag\"></div>\n                    <div class=\"header\">Leverage</div>\n                    <div id=\"Leverage1\" class=\"graph1\"></div>\n                </div>\n\n\n                <div class=\"cell three\">\n                    <div id=\"controls_ROAA\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Return on Average Assets</div>\n                    <div id=\"ROAA\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"cell fourblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">&nbsp</div>\n                    <div id=\"\" class=\"graph1\"></div>\n                </div>\n\n                <div class=\"vertical-lineright\"></div>\n                <div class=\"fork two\"></div>\n\n            <div class=\"cell three\">\n                <div id=\"controls_op_roaa\" class = \"trafficlights\"></div>\n                <div class=\"header\">Operating Return on Assets</div>\n                <div id=\"op_roaa\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell threeblank\">\n                <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell three\">\n                <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Extra_Adj_Other_ROAA_tag\">\n                    <div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n                </div>\n                <div id=\"controls_Extra_Adj_Other_ROAA\" class = \"trafficlights\"></div>\n                <div id=\"Extra_Adj_Other_ROAA_tag\" class=\"tag\"></div>\n                <div class=\"header\">Extraordinary Items & Other Adjs</div>\n                <div id=\"Extra_Adj_Other_ROAA\" class=\"graph1\"></div>\n            </div>\n\n            <div></div>\n            <div class = \"vertical-line firstleft\"></div>\n\n            <div class=\"fork three\">\n                <div class=\"vertical-line\"></div>\n            </div>\n\n            <div class=\"cell three\">\n                 <div id=\"controls_Op_Margin\" class = \"trafficlights\"></div>\n                <div class=\"header\">Operating Margin</div>\n                <div id=\"Op_Margin\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell three\">\n                <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"ROAA_Effective_Tax_Rate_tag\">\n                    <div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n                </div>\n                <div id=\"controls_ROAA_Effective_Tax_Rate\" class = \"trafficlights\"></div>\n                <div id=\"ROAA_Effective_Tax_Rate_tag\" class=\"tag\"></div>\n                <div class=\"header\">Effective Tax Rate</div>\n                <div id=\"ROAA_Effective_Tax_Rate\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell three\">\n                <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Asset_Yield_tag\">\n                    <div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n                </div>\n                <div id=\"controls_Asset_Yield\" class = \"trafficlights\"></div>\n                <div id=\"Asset_Yield_tag\" class=\"tag\"></div>\n                <div class=\"header\">Asset Yield</div>\n                <div id=\"Asset_Yield\" class=\"graph1\"></div>\n            </div>\n\n            <div></div>\n            <div class=\"fork-boxouter\">\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork four\"></div>\n            </div>\n            <div class=\"fork-boxouter\">\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork four\"></div>\n            </div>\n            <div></div>\n            <div class=\"cell four\">\n                <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"Efficiency_Ratio_tag\"><div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n                <div id=\"controls_Efficiency_Ratio\" class = \"trafficlights\"></div>\n                <div id=\"Efficiency_Ratio_tag\" class=\"tag\">\n\n                </div>\n                <div class=\"header\">Efficiency_Ratio</div>\n                <div id=\"Efficiency_Ratio\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell four\">\n                <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"LLR_tag\"><div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div></div>\n                <div id=\"controls_LLR\" class = \"trafficlights\"></div>\n                <div id=\"LLR_tag\" class=\"tag\">\n\n                </div>\n                <div class=\"header\">Loan Loss Ratio</div>\n                <div id=\"LLR\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell four\">\n                <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"net_int_margin_grossed_tag\">\n                    <div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n                </div>\n                <div id=\"controls_net_int_margin_grossed\" class = \"trafficlights\"></div>\n                <div id=\"net_int_margin_grossed_tag\" class=\"tag\">\n\n                </div>\n                <div class=\"header\">Net Interest Margin</div>\n                <div id=\"net_int_margin_grossed\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell four\">\n                <div class=\"controls\" blklab-click=\"slider_show\" data-id=\"non_int_margin_grossed_tag\">\n                    <div class=\"circlecontrol light\"><img src=\"/app/assets/images/graph-icon.png\"></div>\n                </div>\n                <div id=\"controls_non_int_margin_grossed\" class = \"trafficlights\"></div>\n                <div id=\"non_int_margin_grossed_tag\" class=\"tag\">\n\n                </div>\n                <div class=\"header\">Non Interest Income Yield</div>\n                <div id=\"non_int_margin_grossed\" class=\"graph1\"></div>\n            </div>\n\n            <div></div>\n            <div class=\"fork-box\">\n                <div class=\"vertical-line\"></div>\n                <div id=\"plus-er\" blklab-click=\"expander\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/plus.svg\"></div>\n                <div id=\"minus-er\" blklab-click=\"collapseer\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n            </div>\n\n            <div class=\"fork-box\">\n                <div class=\"vertical-line\"></div>\n                <div id=\"plus-llr\" blklab-click=\"expandllr\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n                <div id=\"minus-llr\" blklab-click=\"collapsellr\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n            </div>\n\n            <div class=\"fork-box\">\n                <div class=\"vertical-line\"></div>\n                <div id=\"plus-nim\" blklab-click=\"expandnim\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n                <div id=\"minus-nim\" blklab-click=\"collapsenim\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n            </div>\n\n            <div class=\"fork-box\">\n            </div>\n\n\n            <div id=\"plus-er-results\">\n\n\n\n            <div class=\"fork-box\">\n                <div class=\"vertical-line\"></div>\n            </div>\n            <div class=\"fork-box\"></div>\n            <div class=\"fork-box\"></div>\n            <div class=\"fork-box\"></div>\n\n            <div class=\"fork threeleftfirst\"></div>\n\n            <div></div>\n\n            <div class=\"cell four\">\n                <div id=\"controls_Costs_EA\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Cost Efficiency (%)</div>\n                    <div id=\"Costs_EA\" class=\"graph1\"></div>\n                </div>\n\n             <div class=\"cell fourblank\">\n                     <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"\" class=\"graph1\"></div>\n                </div>\n\n            <div class=\"cell four\">\n                <div id=\"controls_Asset_Yield_EA\" class = \"trafficlights\"></div>\n                <div class=\"header\">Asset Yield (% EA)</div>\n                <div id=\"Asset_Yield_EA\" class=\"graph1\"></div>\n               </div>\n\n            <div class=\"cell fourblank\">\n                <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"\" class=\"graph1\"></div>\n            </div>\n\n            <div></div>\n\n            <div class=\"fork-box\">\n                <div class=\"vertical-line\"></div>\n            </div>\n            <div class=\"fork-box\"></div>\n            <div class=\"fork-box\"></div>\n            <div class=\"fork-box\"></div>\n\n            <div class=\"fork threeleftfirst\">\n                <div class=\"vertical-line\"></div>\n            </div>\n\n             <div class=\"cell four\">\n                     <div id=\"controls_salaryexpense\" class = \"trafficlights\"></div>\n                <div class=\"header\">Salary Expense (% EA)</div>\n                <div id=\"salaryexpense\" class=\"graph1\"></div>\n                </div>\n\n            <div class=\"cell four\">\n                <div id=\"controls_gaexpense\" class = \"trafficlights\"></div>\n                <div class=\"header\">Goodwill & Amort. Expense (% EA)</div>\n                <div id=\"gaexpense\" class=\"graph1\"></div>\n               </div>\n\n            <div class=\"cell four\">\n                <div id=\"controls_externalexpense\" class = \"trafficlights\"></div>\n                <div class=\"header\">External Expenses (% EA)</div>\n                <div id=\"externalexpense\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell fourblank\">\n                <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"\" class=\"graph1\"></div>\n            </div>\n\n\n\n            <div></div>\n            <div class=\"fork-box\">\n                <div class=\"vertical-line\"></div>\n                <div id=\"plus-salaryer\" blklab-click=\"expandsalaryer\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/plus.svg\"></div>\n                <div id=\"minus-salaryer\" blklab-click=\"collapsesalaryer\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n            </div>\n\n            <div class=\"fork-box\">\n\n            </div>\n\n            <div class=\"fork-box\">\n                <div class=\"vertical-line\"></div>\n                <div id=\"plus-externaler\" blklab-click=\"expandexternaler\"><img HR WIDTH=\"10%\" HR HEIGHT=\"10%\" src=\"/assets/images/plus.svg\"></div>\n                <div id=\"minus-externaler\" blklab-click=\"collapseexternaler\"><img HR WIDTH=\"10%\" HR HEIGHT=10%\" src=\"/assets/images/minus.svg\"></div>\n            </div>\n\n            <div class=\"fork-box\">\n\n            </div>\n                <div></div>\n\n            <div id=\"plus-salaryer-results\">\n            <div></div>\n\n            <div class=\"fork-box\">\n                <div class=\"vertical-line\"></div>\n            </div>\n\n            <div class=\"fork-box\"></div>\n            <div class=\"fork-box\"></div>\n            <div class=\"fork-box\"></div>\n\n                <div class=\"forkleftfirst\"></div>\n\n            <div></div>\n\n\n             <div class=\"cell four\">\n                     <div id=\"controls_salaryperfte\" class = \"trafficlights\"></div>\n                <div class=\"header\">Salary Per FTE ($)</div>\n                <div id=\"salaryperfte\" class=\"graph1\"></div>\n                </div>\n\n            <div class=\"cell four\">\n                <div id=\"controls_eaperfte\" class = \"trafficlights\"></div>\n                <div class=\"header\">Earning Asset per FTE ($)</div>\n                <div id=\"eaperfte\" class=\"graph1\"></div>\n               </div>\n\n             <div class=\"cell fourblank\">\n                     <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"\" class=\"graph1\"></div>\n                </div>\n\n            <div class=\"cell fourblank\">\n                <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"\" class=\"graph1\"></div>\n               </div>\n\n            </div>\n\n            <div id=\"plus-externaler-results\">\n            <div></div>\n\n            <div class=\"fork-box\"></div>\n            <div class=\"fork-box\"></div>\n\n            <div class=\"fork-box\">\n                <div class=\"vertical-line\"></div>\n            </div>\n\n            <div class=\"fork-box\">\n            </div>\n\n            <div class=\"fork all\">\n                <div class=\"fork-box\"></div>\n                <div class=\"fork-box\">\n                    <div class=\"vertical-line\"></div>\n                </div>\n                <div class=\"fork-box\">\n                    <div class=\"vertical-line\"></div>\n                </div>\n                <div class=\"fork-box\"></div>\n            </div>\n\n\n            <div></div>\n\n\n             <div class=\"cell four\">\n                     <div id=\"controls_premisesexpense\" class = \"trafficlights\"></div>\n                <div class=\"header\">Premises Expense (% EA)</div>\n                <div id=\"premisesexpense\" class=\"graph1\"></div>\n                </div>\n\n            <div class=\"cell four\">\n                <div id=\"controls_dataprocessingexpense\" class = \"trafficlights\"></div>\n                <div class=\"header\">Data Processing Expense (% EA)</div>\n                <div id=\"dataprocessingexpense\" class=\"graph1\"></div>\n               </div>\n\n             <div class=\"cell four\">\n                     <div id=\"controls_advertisingexpense\" class = \"trafficlights\"></div>\n                <div class=\"header\">Advertising Expense (% EA)</div>\n                <div id=\"advertisingexpense\" class=\"graph1\"></div>\n                </div>\n\n            <div class=\"cell four\">\n                <div class=\"controls\"></div>\n                <div class=\"header\">Other Expenses (% EA)</div>\n                <div id=\"otherexpense\" class=\"graph1\"></div>\n               </div>\n\n            </div>\n\n            </div>\n\n\n\n\n\n\n\n            <div id=\"plus-llr-results\">\n\n\n\n            <div class=\"fork-box\"></div>\n            <div class=\"fork-box\">\n                <div class=\"vertical-line\"></div>\n            </div>\n\n            <div class=\"fork-box\"></div>\n            <div class=\"fork-box\"></div>\n\n            <div class=\"fork\"></div>\n\n            <div></div>\n\n            <div class=\"cell two\">\n                <div id=\"controls_llpea\" class = \"trafficlights\"></div>\n                    <div class=\"header\">Loan Loss Provisions (% EA)</div>\n                    <div id=\"llpea\" class=\"graph1\"></div>\n                </div>\n\n            <div class=\"cell two\">\n                <div id=\"controls_Asset_Yield_EA1\" class = \"trafficlights\"></div>\n                <div class=\"header\">Revenue Productivity (% EA)</div>\n                <div id=\"Asset_Yield_EA1\" class=\"graph1\"></div>\n               </div>\n\n            <div></div>\n\n            <div class=\"fork-box\"></div>\n            <div class=\"fork-box\">\n                <div class=\"vertical-line\"></div>\n            </div>\n\n            <div class=\"fork-box\"></div>\n            <div class=\"fork-box\"></div>\n\n\n            <div class=\"fork three\"></div>\n\n             <div class=\"cell three\">\n                     <div id=\"controls_llploans\" class = \"trafficlights\"></div>\n                <div class=\"header\">Loan Loss Provisions (% Loans)</div>\n                <div id=\"llploans\" class=\"graph1\"></div>\n                </div>\n\n            <div class=\"cell threeblank\">\n                <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"\" class=\"graph1\"></div>\n               </div>\n\n            <div class=\"cell three\">\n                <div id=\"controls_loan_lease_mix1\" class = \"trafficlights\"></div>\n                <div class=\"header\">Loans Mix (% EA)</div>\n                <div id=\"loan_lease_mix1\" class=\"graph1\"></div>\n            </div>\n            <div></div>\n            <div class=\"fork-boxouter\">\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork four\"></div>\n            </div>\n            <div class=\"fork-boxouter\"></div>\n            <div></div>\n             <div class=\"cell four\">\n                     <div id=\"controls_ncoloans\" class = \"trafficlights\"></div>\n                <div class=\"header\">Net Charge Offs (% Avg. Loans)</div>\n                <div id=\"ncoloans\" class=\"graph1\"></div>\n                </div>\n\n            <div class=\"cell four\">\n                <div id=\"controls_llpnco\" class = \"trafficlights\"></div>\n                <div class=\"header\">Net Charge Offs (% Provisions)</div>\n                <div id=\"llpnco\" class=\"graph1\"></div>\n               </div>\n\n            <div class=\"cell fourblank\">\n                <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell fourblank\">\n                <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"\" class=\"graph1\"></div>\n            </div>\n\n\n\n\n\n\n\n\n\n\n\n            </div>\n\n\n\n            <div id=\"plus-nim-results\">\n\n\n                 <div class=\"vertical-lineright\"></div>\n                 <div class=\"fork twoskinny\"></div>\n\n\n\n            <div class=\"cell two\">\n                    <div id=\"controls_net_int_margin\" class = \"trafficlights\"></div>\n                    <div class=\"header\"> Net Interest Margin EA (%)</div>\n                    <div id=\"net_int_margin\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell two\">\n                <div id=\"controls_EA_Mix\" class = \"trafficlights\"></div>\n                <div class=\"header\">Earning Asset (EA) Mix (%)</div>\n                <div id=\"EA_Mix\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"vertical-lineleft\"></div>\n            <div class=\"fork three\"></div>\n\n            <div class=\"cell three\">\n                <div id=\"controls_gross_int_yield\" class = \"trafficlights\"></div>\n                <div class=\"header\"> Gross Interest Yield (% EA)</div>\n                <div id=\"gross_int_yield\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell threeblank\">\n                <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"blank\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell three\">\n                <div id=\"controls_cost_of_funds_ea\" class = \"trafficlights\"></div>\n                <div class=\"header\">Interest Expense (% EA)</div>\n                <div id=\"cost_of_funds_ea\" class=\"graph1\"></div>\n            </div>\n\n            <div></div>\n            <div class=\"fork-boxouter\">\n                <div class=\"vertical-line\"></div>\n                <div id=\"plus-grossintyield\" blklab-click=\"expandgrossintyield\"><img HR WIDTH=\"5%\" HR HEIGHT=\"5%\" src=\"/assets/images/plus.svg\"></div>\n                <div id=\"minus-grossintyield\" blklab-click=\"collapsegrossintyield\"><img HR WIDTH=\"5%\" HR HEIGHT=5%\" src=\"/assets/images/minus.svg\"></div>\n\n            </div>\n\n            <div class=\"fork-boxouter\">\n                <div class=\"vertical-line\"></div>\n                <div id=\"plus-costoffunds\" blklab-click=\"expandcostoffunds\"><img HR WIDTH=\"5%\" HR HEIGHT=\"5%\" src=\"/assets/images/plus.svg\"></div>\n                <div id=\"minus-costoffunds\" blklab-click=\"collapsecostoffunds\"><img HR WIDTH=\"5%\" HR HEIGHT=\"5%\" src=\"/assets/images/minus.svg\"></div>\n            </div>\n\n            <div id=\"plus-grossintyield-results\">\n            <div></div>\n\n            <div class=\"fork-boxouter\">\n                <div class=\"vertical-line\"></div>\n            </div>\n                <div class=\"fork-boxouter\"></div>\n            <div class=\"fork three\"></div>\n\n            <div></div>\n\n            <div class=\"cell three\">\n                <div id=\"controls_int_yield_loans_wgt\" class = \"trafficlights\"></div>\n                <div class=\"header\"> Weighted Loan Yield (% EA) </div>\n                <div id=\"int_yield_loans_wgt\" class=\"graph1\"></div>\n            </div>\n\n\n\n            <div class=\"cell threeblank\">\n                <div class=\"controls\"></div>\n                <div class=\"header\">&nbsp</div>\n                <div id=\"\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell three\">\n                <div id=\"controls_other_int_yield_wgt\" class = \"trafficlights\"></div>\n                <div class=\"header\">Weighted Other Yield (% EA)</div>\n                <div id=\"other_int_yield_wgt\" class=\"graph1\"></div>\n            </div>\n\n\n            <div></div>\n\n            <div class=\"fork-boxouter\">\n                <div class=\"vertical-line\"></div>\n                <div class=\"forkright\"></div>\n            </div>\n\n\n\n            <div class=\"fork-boxouter\">\n                <div class=\"vertical-lineleft\"></div>\n                <div class=\"forkleft\"></div>\n            </div>\n\n\n            <div></div>\n\n            <div class=\"cell three\">\n                <div id=\"controls_loan_yield\" class = \"trafficlights\"></div>\n                <div class=\"header\"> Loan Yield (%) </div>\n                <div id=\"loan_yield\" class=\"graph1\"></div>\n            </div>\n\n\n\n            <div class=\"cell three\">\n                <div id=\"controls_loan_lease_mix\" class = \"trafficlights\"></div>\n                <div class=\"header\">Loan Mix (%)</div>\n                <div id=\"loan_lease_mix\" class=\"graph1\"></div>\n            </div>\n\n            <div class=\"cell three\">\n                <div id=\"controls_otherintyield\" class = \"trafficlights\"></div>\n                <div class=\"header\">Other EA Yield (%)</div>\n                <div id=\"otherintyield\" class=\"graph1\"></div>\n            </div>\n\n            </div>\n\n           <div id=\"plus-costoffunds-results\">\n\n           <div></div>\n                <div class=\"fork-boxouter\">\n                </div>\n\n           <div class=\"fork-boxouter\">\n               <div class=\"vertical-line\"></div>\n                   <div class=\"fork-boxouter\">\n                    <div class=\"fork fourleft\"></div></div>\n           </div>\n\n        <div></div>\n\n           <div class=\"cell threeblank\">\n               <div class=\"controls\"></div>\n               <div class=\"header\">&nbsp</div>\n            <div id=\"\" class=\"graph1\"></div>\n           </div>\n\n\n           <div class=\"cell three\">\n               <div id=\"controls_cost_of_funds\" class = \"trafficlights\"></div>\n               <div class=\"header\">Cost of Funds (%)</div>\n               <div id=\"cost_of_funds\" class=\"graph1\"></div>\n           </div>\n\n           <div class=\"cell three\">\n               <div id=\"controls_ibl_ea_ratio\" class = \"trafficlights\"></div>\n               <div class=\"header\">Earning Assets / Funding (%)</div>\n            <div id=\"ibl_ea_ratio\" class=\"graph1\"></div>\n           </div>\n\n           <div></div>\n\n           <div class=\"vertical-line\"></div>\n            <div class=\"fork three\"></div>\n\n           <div></div>\n\n           <div class=\"cell three\">\n               <div id=\"controls_cost_of_deposits_wgt\" class = \"trafficlights\"></div>\n               <div class=\"header\">Weighted Cost of Deposits (%)</div>\n               <div id=\"cost_of_deposits_wgt\" class=\"graph1\"></div>\n           </div>\n\n           <div class=\"cell threeblank\">\n               <div class=\"controls\"></div>\n               <div class=\"header\">&nbsp</div>\n               <div id=\"t\" class=\"graph1\"></div>\n           </div>\n\n\n           <div class=\"cell three\">\n               <div id=\"controls_cost_of_other_borrowings_wgt\" class = \"trafficlights\"></div>\n               <div class=\"header\">Weighted Cost of Other Funds (%)</div>\n            <div id=\"cost_of_other_borrowings_wgt\" class=\"graph1\"></div>\n           </div>\n\n           <div></div>\n\n           <div class=\"fork-boxouter\">\n               <div class=\"vertical-line\"></div>\n               <div class=\"fork-boxouter\">\n               <div class=\"fork fourright\"></div></div>\n           </div>\n\n           <div class=\"fork-boxouter\">\n               <div class=\"vertical-line\"></div>\n                   <div class=\"fork-boxouter\">\n                    <div class=\"fork fourleft\"></div></div>\n           </div>\n\n\n           <div></div>\n\n           <div class=\"cell three\">\n               <div id=\"controls_cost_of_deposits\" class = \"trafficlights\"></div>\n               <div class=\"header\">Cost of Deposits</div>\n               <div id=\"cost_of_deposits\" class=\"graph1\"></div>\n           </div>\n\n           <div class=\"cell three\">\n               <div id=\"controls_deposit_mix\" class = \"trafficlights\"></div>\n               <div class=\"header\">Deposits Mix (% of funds)</div>\n               <div id=\"deposit_mix\" class=\"graph1\"></div>\n           </div>\n\n           <div class=\"cell three\">\n               <div id=\"controls_cost_of_other_funds\" class = \"trafficlights\"></div>\n               <div class=\"header\">Cost of Other Funds (%)</div>\n            <div id=\"cost_of_other_funds\" class=\"graph1\"></div>\n           </div>\n\n           <div></div>\n\n\n\n\n\n\n\n\n           </div>\n\n            </div>\n\n\n            </div>\n\n\n            </section>\n        </div>\n\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/individual/simulationTR-alternate.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"hero\">\n    <h1 class=\"title\">Individual Bank Analyzer</h1><h2 class=\"title\">WHAT-IF SIMULATOR</h2>\n    <p class=\"sub-title\">Gain insights into the performance of individual banks by simulating a range of what-if scenarios.</p>\n\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li><a href=\"/individual\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/outlook\">ESTIMATES & OUTLOOK</a></li>\n                <li>|</li>\n                <li class=\"selected\"><a href=\"/individual/simulation\">WHAT-IF SIMULATOR</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n        </div>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"individual\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>SELECT BANK <img src=\"/app/assets/images/premium-icon-red.png\"></h3>\n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n        <div class=\"col\">\n        </div>\n\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> SAVE/LOAD SIMULATION</h2>\n        </div>\n    </section>\n\n    <section id=\"data\" class=\"sim\">\n        <div class=\"block full auto\">\n            <header>SIMULATED OUTCOMES</header>\n            <section class=\"detail\"  id=\"outcomes\">\n                <div class=\"col\">\n                    <label>Total Shareholder Returns: </label> <span>0% (0%) <img src=\"/app/assets/images/outcome-arrow.png\"> 0% (0%) <img src=\"/app/assets/images/outcome-graph.png\"></span>\n                </div>\n            </section>\n        </div>\n\n        <div class=\"block full auto\">\n            <header>ASSUMPTIONS</header>\n            <section class=\"detail\" id=\"drivers\">\n                <div class=\"col\">\n                    <label>Efficiency Ratio</label>\n                    <input type=\"range\" id=\"er-slider\" blklab-change=\"updateER\" class=\"reverse\" />\n                    <div id=\"er-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Loan Loss Ratio</label>\n                    <input type=\"range\" id=\"llr-slider\" blklab-change=\"updateLLR\" class=\"reverse\" />\n                    <div id=\"llr-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Asset Yield</label>\n                    <input type=\"range\" id=\"ay-slider\" blklab-change=\"updateAY\" />\n                    <div id=\"ay-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Leverage</label>\n                    <input type=\"range\" id=\"lev-slider\" blklab-change=\"updateLev\" />\n                    <div id=\"lev-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n            </section>\n        </div>\n\n        <div class=\"block full auto\">\n            <header>SIMULATION DETAILS</header>\n            <section class=\"detail\" id=\"simulation-detail\">\n                <img src=\"/assets/images/list-view.png\" class=\"left-button\" id=\"list-view\">\n                <img src=\"/assets/images/block-view.png\" class=\"left-button\" id=\"block-view\">\n                <img src=\"/assets/images/graph-view.png\" class=\"left-button\" id=\"graph-view\">\n\n                <div class=\"cell\">\n                    <!-- <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div> --!>\n                    <div class=\"header\">Total Returns (%)</div>\n                    <div id=\"total_return_1\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork\"></div>\n\n                <div class=\"cell two\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Share Price (%)</div>\n                    <div id=\"actual_closing\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell two\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Dividend Yield (%)</div>\n                    <div id=\"dividend_yield\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"vertical-line first\"></div>\n                <div class=\"fork three\">\n                    <div class=\"vertical-line\"></div>\n                </div>\n				\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\"> Equity Growth (%)</div>\n                    <div id=\"equity_growth\" class=\"graph\"></div>\n                </div>				\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Growth in Shares Outstanding</div>\n                    <div id=\"share_growth\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Profitability (Spread)(%)</div>\n                    <div id=\"spread\" class=\"graph\"></div>\n                </div>\n		\n				<div></div>\n                <div class=\"fork-boxouter\">\n	                <div class=\"vertical-line\"></div>\n	                <div class=\"fork four\"></div>\n                </div>\n                <div class=\"fork-boxouter\">\n                   <div class=\"vertical-line\"></div>\n                   <div class=\"fork four\"></div>\n                </div>\n                <div></div>\n                <div class=\"cell four\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Growth - Total Assets (%) </div>\n                    <div id=\"EA_Asset_Growth\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\"> Other Equity Growth (%)</div>\n                    <div id=\"other_equity_growth\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Return on Equity (%)</div>\n                    <div id=\"ROAE\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Cost of Equity (%)</div>\n					<div id=\"cost_of_capital\" class=\"graph\"></div>\n                </div>\n				\n			<!-- <div></div>\n             <div class=\"fork-box\">\n                 <div class=\"vertical-line\"></div>\n                 <div class=\"fork threeleft\"></div>\n             </div>\n             <div class=\"fork-box\">\n                 <div class=\"vertical-line\"></div>\n                 <div class=\"fork threeright\"></div>\n             </div>\n             <div></div>\n				\n                <div class=\"cell threeb\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Dividend Payout (%)</div>\n                    <div id=\"dividend_payout\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Leverage</div>\n                    <div id=\"Leverage\" class=\"graph\"></div>\n                </div>\n				\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Return on Average Assets</div>\n                    <div id=\"ROAA\" class=\"graph\"></div>\n                </div> --!>\n\n                <!--<table style='table-layout:fixed; width:100%; height: 650px'>\n                    <tr>\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='width 100%; height:3%; background:white; padding:10px;'>Return on Equity</div>\n                            <div id='ROAE' style='width 100%; height:22%; background:white;'></div>\n                        </td>\n\n                        <td style=' width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:50%'></div>\n                                <div style='border-top: 1px solid black; width:100%; height:50%'></div>\n                            </div>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border: 0; width:100%; height:33%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:34%'></div>\n                                <div style='border: 0px solid black; width:100%; height:33%'></div>\n                            </div>\n                        </td>\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='border:0; width 22%; height:25%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Operating Return on Equity</div>\n                            <div id=\"Operating_ROE\" style='background:white; width 100%; height:22%'></div>\n                            <div style='border:0; width 99%; height:4%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Extraordinary Items & Other Adjs</div>\n                            <div id=\"Extra_Adj_Other\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:25%'></div>\n                        </td>\n\n                        <td style='width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 50%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:74%'></div>\n                                <div style='border-top: 1px solid black; width:100%; height:26%'></div>\n                            </div>\n\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border: 0; width:100%; height:23%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:27%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:27%'></div>\n                                <div style='border: 0px solid black; width:100%; height:23%'></div>\n                            </div>\n                        </td>\n\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='border:0; width 99%; height:12%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Operating Margin</div>\n                            <div id=\"Op_Margin\" style='background:t; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:5%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Effective Tax Rate</div>\n                            <div id=\"ROAA_Effective_Tax_Rate\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:5%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Capital Utilization</div>\n                            <div id=\"Capital_Utilization\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:12%'></div>\n                        </td>\n\n                        <td style='width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:23%'></div>\n                                <div style='border-bottom: 1px solid black; width:100%; height:54%'></div>\n                                <div style='border: 0; width:100%; height:23%'></div>\n                            </div>\n\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:11%'></div>\n                                <div style='border-bottom: 1px solid black; border-left: 1px solid black;width:100%; height:25%'></div>\n                                <div style='border-bottom: 1px solid black; width:100%; height:28%'></div>\n                                <div style='border-bottom: 1px solid black; border-left: 1px solid black;width:100%; height:25%'></div>\n                                <div style='border:0; width:100%; height:11%'></div>\n                            </div>\n                        </td>\n\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='background:white;  width 100%; height:3%; padding:10px;'>Efficiency_Ratio</div>\n                            <div id=\"Efficiency_Ratio\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Loan Loss Ratio</div>\n                            <div id=\"LLR\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Income Yield on Assets</div>\n                            <div id=\"Asset_Yield\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Leverage</div>\n                            <div id=\"Leverage\" style='background:white; width 99%; height:22%'></div>\n                        </td>\n\n                    </tr>\n                </table>-->\n            </section>\n        </div>\n\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/individual/simulationTR.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"hero\">\n    <h1 class=\"title\">Individual Bank Analyzer</h1><h2 class=\"title\">WHAT-IF SIMULATOR</h2>\n    <p class=\"sub-title\">Gain insights into the performance of individual banks by simulating a range of what-if scenarios.</p>\n\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li><a href=\"/individual\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/individual/outlook\">ESTIMATES & OUTLOOK</a></li>\n                <li>|</li>\n                <li class=\"selected\"><a href=\"/individual/simulation\">WHAT-IF SIMULATOR</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n        </div>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"individual\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>SELECT BANK <img src=\"/app/assets/images/premium-icon-red.png\"></h3>\n            <select blklab-change=\"changeCompany\" id=\"company-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n        <div class=\"col\">\n        </div>\n\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> SAVE/LOAD SIMULATION</h2>\n        </div>\n    </section>\n\n    <section id=\"data\" class=\"sim\">\n        <div class=\"block full auto\">\n            <header>SIMULATED OUTCOMES</header>\n            <section class=\"detail\"  id=\"outcomes\">\n                <div class=\"col\">\n                    <label>Total Shareholder Returns: </label> <span>0% (0%) <img src=\"/app/assets/images/outcome-arrow.png\"> 0% (0%) <img src=\"/app/assets/images/outcome-graph.png\"></span>\n                </div>\n            </section>\n        </div>\n\n        <div class=\"block full auto\">\n            <header>ASSUMPTIONS</header>\n            <section class=\"detail\" id=\"drivers\">\n                <div class=\"col\">\n                    <label>Efficiency Ratio</label>\n                    <input type=\"range\" id=\"er-slider\" blklab-change=\"updateER\" class=\"reverse\" />\n                    <div id=\"er-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Loan Loss Ratio</label>\n                    <input type=\"range\" id=\"llr-slider\" blklab-change=\"updateLLR\" class=\"reverse\" />\n                    <div id=\"llr-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Asset Yield</label>\n                    <input type=\"range\" id=\"ay-slider\" blklab-change=\"updateAY\" />\n                    <div id=\"ay-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <label>Leverage</label>\n                    <input type=\"range\" id=\"lev-slider\" blklab-change=\"updateLev\" />\n                    <div id=\"lev-years\" class=\"buttons\">\n\n                    </div>\n                </div>\n\n            </section>\n        </div>\n\n        <div class=\"block full auto\">\n            <header>SIMULATION DETAILS</header>\n            <section class=\"detail\" id=\"simulation-detail\">\n                <img src=\"/assets/images/list-view.png\" class=\"left-button\" id=\"list-view\">\n                <img src=\"/assets/images/block-view.png\" class=\"left-button\" id=\"block-view\">\n                <img src=\"/assets/images/graph-view.png\" class=\"left-button\" id=\"graph-view\">\n\n                <div class=\"cell\">\n                    <!-- <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div> --!>\n                    <div class=\"header\">Total Returns (%)</div>\n                    <div id=\"total_return_1\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork\"></div>\n\n                <div class=\"cell two\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Dividend Yield (%)</div>\n                    <div id=\"dividend_yield\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell two\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Share Price Appreciation (%)</div>\n                    <div id=\"shares_yield\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"vertical-lineright\"></div>\n                <div class=\"forkright\">\n                    \n                </div>\n				\n                <div class=\"cell threeblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">&nbsp </div>\n                    <div class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Market Capitalization ($bn)</div>\n                    <div id=\"mkt_cap\" class=\"graph\"></div>\n                </div>\n				\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Growth in Shares Outstanding</div>\n                    <div id=\"share_growth\" class=\"graph\"></div>\n                </div>\n				\n                <div class=\"vertical-line\"></div>\n                <div class=\"fork\"></div>\n                \n                <div class=\"cell fourblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">&nbsp </div>\n                    <div class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\"> Equity Growth (%)</div>\n                    <div id=\"equity_growth\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Profitability (Spread)(%)</div>\n                    <div id=\"spread\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell fourblank\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">&nbsp </div>\n                </div>\n				  \n				<div></div>\n                <div class=\"fork-box\">\n                    <div class=\"vertical-line\"></div>\n                    <div class=\"fork fourleft\"></div>\n                </div>\n                <div class=\"fork-box\">\n                    <div class=\"vertical-line\"></div>\n                    <div class=\"fork fourright\"></div>\n                </div>\n                <div></div>\n                <div class=\"cell four\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Growth - Total Assets (%) </div>\n                    <div id=\"asset_growth\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\"> Other Equity Growth (%)</div>\n                    <div id=\"other_equity_growth\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Return on Equity (%)</div>\n                    <div id=\"ROAE\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell four\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Cost of Equity (%)</div>\n					<div id=\"cost_of_capital\" class=\"graph\"></div>\n                </div>\n				\n			<div></div>\n             <div class=\"fork-box\">\n                 <div class=\"vertical-line\"></div>\n                 <div class=\"fork threeleft\"></div>\n             </div>\n             <div class=\"fork-box\">\n                 <div class=\"vertical-line\"></div>\n                 <div class=\"fork threeright\"></div>\n             </div>\n             <div></div>\n				\n                <div class=\"cell threeb\">\n                    <div class=\"controls\"></div>\n                    <div class=\"header\">Dividend Payout (%)</div>\n                    <div id=\"dividend_payout\" class=\"graph\"></div>\n                </div>\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Leverage</div>\n                    <div id=\"Leverage\" class=\"graph\"></div>\n                </div>\n				\n\n                <div class=\"cell three\">\n                    <div class=\"controls\"><img src=\"/assets/images/controls.png\"></div>\n                    <div class=\"header\">Return on Average Assets</div>\n                    <div id=\"ROAA\" class=\"graph\"></div>\n                </div>\n\n                <!--<table style='table-layout:fixed; width:100%; height: 650px'>\n                    <tr>\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='width 100%; height:3%; background:white; padding:10px;'>Return on Equity</div>\n                            <div id='ROAE' style='width 100%; height:22%; background:white;'></div>\n                        </td>\n\n                        <td style=' width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:50%'></div>\n                                <div style='border-top: 1px solid black; width:100%; height:50%'></div>\n                            </div>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border: 0; width:100%; height:33%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:34%'></div>\n                                <div style='border: 0px solid black; width:100%; height:33%'></div>\n                            </div>\n                        </td>\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='border:0; width 22%; height:25%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Operating Return on Equity</div>\n                            <div id=\"Operating_ROE\" style='background:white; width 100%; height:22%'></div>\n                            <div style='border:0; width 99%; height:4%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Extraordinary Items & Other Adjs</div>\n                            <div id=\"Extra_Adj_Other\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:25%'></div>\n                        </td>\n\n                        <td style='width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 50%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:74%'></div>\n                                <div style='border-top: 1px solid black; width:100%; height:26%'></div>\n                            </div>\n\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border: 0; width:100%; height:23%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:27%'></div>\n                                <div style='border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black;width:100%; height:27%'></div>\n                                <div style='border: 0px solid black; width:100%; height:23%'></div>\n                            </div>\n                        </td>\n\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='border:0; width 99%; height:12%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Operating Margin</div>\n                            <div id=\"Op_Margin\" style='background:t; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:5%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Effective Tax Rate</div>\n                            <div id=\"ROAA_Effective_Tax_Rate\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:5%'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Capital Utilization</div>\n                            <div id=\"Capital_Utilization\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:12%'></div>\n                        </td>\n\n                        <td style='width:2%; height: 100%; vertical-align:middle;'>\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:23%'></div>\n                                <div style='border-bottom: 1px solid black; width:100%; height:54%'></div>\n                                <div style='border: 0; width:100%; height:23%'></div>\n                            </div>\n\n                            <div style='float: left; width: 50%; height: 100%'>\n                                <div style='border-bottom: 1px solid black; width:100%; height:11%'></div>\n                                <div style='border-bottom: 1px solid black; border-left: 1px solid black;width:100%; height:25%'></div>\n                                <div style='border-bottom: 1px solid black; width:100%; height:28%'></div>\n                                <div style='border-bottom: 1px solid black; border-left: 1px solid black;width:100%; height:25%'></div>\n                                <div style='border:0; width:100%; height:11%'></div>\n                            </div>\n                        </td>\n\n\n                        <td style='width:22%; height: 100%; vertical-align:middle;'>\n                            <div style='background:white;  width 100%; height:3%; padding:10px;'>Efficiency_Ratio</div>\n                            <div id=\"Efficiency_Ratio\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Loan Loss Ratio</div>\n                            <div id=\"LLR\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Income Yield on Assets</div>\n                            <div id=\"Asset_Yield\" style='background:white; width 99%; height:22%'></div>\n                            <div style='border:0; width 99%; height:10px; background:#e6e6e6;'></div>\n                            <div style='background:white; width 100%; height:3%; padding:10px;'>Leverage</div>\n                            <div id=\"Leverage\" style='background:white; width 99%; height:22%'></div>\n                        </td>\n\n                    </tr>\n                </table>-->\n            </section>\n        </div>\n\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/industry/add-segment_backup.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ID","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"modal\">\n    <form blklab-submit=\"createSegment\" id=\"form\">\n        <div class=\"row\">\n            <input type=\"text\" name=\"name\" placeholder=\"Segment Name\">\n        </div>\n\n        <div class=\"row\">\n            <select multiple style=\"height:300px; width: 100%;\" id=\"companies-list\">\n                <option>Select Companies</option>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n        <div class=\"row\">\n            <input type=\"button\" value=\"Cancel\" blklab-click=\"cancel\"> <input type=\"submit\" value=\"Create\">\n\n        </div>\n    </form>\n</div>\n";
},"useData":true});

this["views"]["./app/js/views/industry/add-segment.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ID","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"modal\">\n			<form blklab-submit=\"createSegment\" id=\"form\" name=\"form\">\n				<h3>CREATE INDUSTRY SEGMENT:</h3>\n				<div class=\"row\">\n					<input type=\"text\" name=\"name\" placeholder=\"Segment Name\">\n				</div>\n				<div class=\"row\">\n					<div class=\"segmentcell\">\n						<select multiple style=\"height:300px; width: 100%;\" id=\"companies-list\">\n							<option>\n								<b>Select Companies</b>\n							</option>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						</select>\n					</div>\n					<div class=\"segmentcellbutton\">\n						<div>\n							<input type=\"button\" value=\">\" blklab-click=\"add\"> \n							<p></p>\n							<input type=\"button\" value=\"<\" blklab-click=\"delete\">\n						</div>\n					</div>\n					<div class=\"segmentcell\">\n						<select multiple style=\"height:300px; width: 100%;\" id=\"added-companies-list\">\n							<option>\n								<b>Companies Selected</b>\n							</option>\n						</select>\n					</div>\n				</div>\n				<div class=\"row\">\n					<input type=\"submit\" value=\"Create\">\n					<input type=\"button\" value=\"Cancel\" blklab-click=\"cancel\"> \n				</div>\n			</form>\n		</div>\n";
},"useData":true});

this["views"]["./app/js/views/industry/detailed-metrics.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.userId || (depth0 != null ? depth0.userId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.segment || (depth0 != null ? depth0.segment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"segment","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Screen_description || (depth0 != null ? depth0.Screen_description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Screen_description","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"hero\">\n<div class=\"text1\">\n    <h1 class=\"title\">Industry Analyzer</h1><h2 class=\"title\">RATIOS & ANALYSIS</h2>\n    <p class=\"sub-title\">Gain insights into the performance of banking industry operating ratio results relative to historical performance.</p>\n</div>\n\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li><a href=\"/industry\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li class=\"selected\"><a href=\"/industry/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"detailed-metrics\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>INDUSTRY SEGMENT:</h3>\n            <select blklab-change=\"changeSegment\" id=\"segment-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.indSegments : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n			<div></div>\n			\n			<div class=\"segment_image\">\n				<img blklab-click=\"peerMenu\" HR WIDTH=\"90%\" HR HEIGHT=\"90%\" src=\"/app/assets/images/multiple-users.svg\">	\n				<div id=\"peerMenu\" class=\"peerMenu\">\n					<div blklab-click=\"showPeers\">\n        				<div class = \"segment_image2\" id=\"view_segment\">\n           					<img HR WIDTH=\"80%\" HR HEIGHT=\"80%\" src=\"/app/assets/images/glasses.png\">\n         				</div>\n						<div class=\"peerSet\">View segment participants</div>\n						<div id=\"peerDetails\"></div>\n					</div>	\n				<div></div>\n					\n        		<div blklab-click=\"addSegment\">\n					<div class=\"segment_image2\">\n        				<img HR WIDTH=\"80%\" HR HEIGHT=\"80%\" src=\"/app/assets/images/plus.png\">\n        			</div>\n					<div class=\"peerSet\" id=\"addSegment\">Create custom segment</div>\n				</div>\n				<div blklab-click=\"editSegment\">\n				<div class=\"segment_image2\">\n           			<img HR WIDTH=\"70%\" HR HEIGHT=\"70%\" src=\"/app/assets/images/pencil.png\">\n           		</div>\n					<div class=\"peerSet\" id=\"editSegment\">Edit existing segment</div>\n				</div>\n			</div>\n			</div>			\n        </div>\n\n        <div class=\"col\">\n            <h3>RATIOS TO DISPLAY:</h3>\n            <select blklab-change=\"changeScreen\" id=\"screen-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.screens : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n        <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> PREMIUM CONTENT</h2>\n        </div>\n    </section>\n\n    <section id=\"data\">\n\n        "
    + ((stack1 = ((helper = (helper = helpers.table || (depth0 != null ? depth0.table : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"table","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        <!--<table class=\"rolling\">\n            <tr>\n                <th>Metric</th>\n                <th>12-2009</th>\n                <th>12-2010</th>\n                <th>12-2012</th>\n                <th>12-2013</th>\n                <th>12-2014</th>\n                <th>12-2015</th>\n            </tr>\n            <tr>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n            </tr>\n        </table>\n\n        <table class=\"avg\">\n            <tr>\n                <th>Avg</th>\n                <th>TOP 25%</th>\n            </tr>\n            <tr>\n                <td></td>\n                <td></td>\n            </tr>\n        </table>-->\n\n        <div class=\"clear\"></div>\n\n    </section>\n\n    <section id=\"background\"></section>\n\n    <section id=\"chart-holder\">\n        <header>\n            <div class=\"inner\">\n                <h2>DETAILED METRICS</h2>\n            </div>\n            <div id=\"close\">Close X</div>\n        </header>\n        <div class=\"container\">\n            <div id=\"single-table\">\n\n            </div>\n            <div class=\"left-graphs\">\n            <div id=\"XY_Radio\" style=\"display: block; background:#fff; padding:5px;\">\n                Results:\n                <input type=\"radio\" id=\"XY1\" name=\"XY_Display\" value=\"PCT\" blklab-change=\"changeType\"> Percentiles <input type=\"radio\" id=\"XY2\" name=\"XY_Display\" value=\"ACT\" blklab-change=\"changeType\" checked> Actuals\n            </div>\n           	 	<section id=\"xydiv\"></section>\n                <section id=\"chartdiv\"></section>\n            </div>\n            <div class=\"right-graphs\">\n                <section id=\"bardiv\"></section>\n            </div>\n        </div>\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/industry/edit-segment.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.userId || (depth0 != null ? depth0.userId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.segment || (depth0 != null ? depth0.segment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"segment","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"modal\">\n			<form blklab-submit=\"updateSegment\" id=\"form\" name=\"form\">\n		        <div class=\"row\">\n		            <h3>EDIT INDUSTRY SEGMENT:</h3>\n		            <div class = \"segmentcol\">\n		            <select blklab-change=\"changeSegmentEdit\" id=\"editSegment-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		            </select>\n		            </div>\n				</div>\n				<div class=\"row\">\n					<input type=\"text\" class=\"text\" name=\"name\" id=\"name\" placeholder=\"Segment Name\">\n				</div>\n				<div class=\"row\">\n					<div class=\"segmentcell\">\n						<select multiple style=\"height:300px; width: 100%;\" id=\"companies-list\">\n							<option>\n								<b>Select Companies</b>\n							</option>\n						</select>\n					</div>\n					<div class=\"segmentcellbutton\">\n						<div>\n							<input type=\"button\" id=\"add\" value=\">\" blklab-click=\"add\"> \n							<p></p>\n							<input type=\"button\" id=\"delete\" value=\"<\" blklab-click=\"delete\">\n						</div>\n					</div>\n					<div class=\"segmentcell\">\n						<select multiple style=\"height:300px; width: 100%;\" id=\"added-companies-list\">\n							<option>\n								<b>Companies Selected</b>\n							</option>\n						</select>\n					</div>\n				</div>\n				<div class=\"row\">\n					<input type=\"submit\" value=\"Save\" id=\"save\" >\n					<input type=\"button\" value=\"Cancel\" blklab-click=\"cancel\"> \n				</div>\n			</form>\n		</div>\n";
},"useData":true});

this["views"]["./app/js/views/industry/index-backup.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.userId || (depth0 != null ? depth0.userId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.segment || (depth0 != null ? depth0.segment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"segment","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Screen_description || (depth0 != null ? depth0.Screen_description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Screen_description","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"hero\">\n<div class=\"text1\">\n    <h1 class=\"title\">Industry Analyzer</h1><h2 class=\"title\">PERFORMANCE SNAPSHOT</h2>\n    <p class=\"sub-title\">Gain insights into the performance of banking industry by reviewing snapshots of results relative to historical performance.</p>\n</div>\n\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li class=\"selected\"><a href=\"/industry\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li><a href=\"/industry/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"home\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>INDUSTRY SEGMENT:</h3>\n            <select blklab-change=\"changeSegment\" id=\"segment-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.indSegments : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n			<div></div>\n			<div class=\"segment_image_line\">\n				<div class=\"segment_image\">\n        			<img blklab-click=\"addSegment\" HR WIDTH=\"90%\" HR HEIGHT=\"90%\" src=\"/app/assets/images/plus_sign.png\">\n        			<div class=\"peerSet\" id=\"editSegment\"></div>\n				</div>\n				<div class=\"segment_image\">\n            		<img blklab-click=\"editSegment\" HR WIDTH=\"90%\" HR HEIGHT=\"90%\" src=\"/app/assets/images/connection.png\">\n            		<div class=\"peerSet\" id=\"editSegment\"></div>\n				</div>\n            	<div class = \"segment_image\" id=\"view_segment\">\n                	<img blklab-click=\"showPeers\" HR WIDTH=\"90%\" HR HEIGHT=\"90%\" src=\"/app/assets/images/multiple-users.svg\">\n                	<div class=\"peerSet\" id=\"peerDetails\"></div>\n            	</div>\n			</div>\n        </div>\n\n      <div class=\"colhidden\">\n            <h3>SELECT RESULTS</h3>\n            <select blklab-change=\"changeScreen\" id=\"screen-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.screens : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n       <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> PREMIUM CONTENT</h2>\n        </div> \n    </section>\n\n    <section id=\"data\">\n        <div class=\"block single\">\n            <h4>SHAREHOLDER RETURNS</h4>\n            <div class=\"chart-holder\">\n                <div class=\"chart\">\n                    <h3>Total Returns - 1 year</h3>\n                    <div class=\"overlay\">\n                        <p id=\"tr_1_value\" class=\"value\"></p>\n                        <p id=\"tr_1_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"tr_1\" data-id=\"TR_1\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"block double\">\n            <h4>SHAREHOLDER VALUE DRIVERS</h4>\n            <div class=\"chart-holder\">\n                <div class=\"chart\">\n                    <h3>Profitability (Spread)</h3>\n                    <div class=\"overlay\">\n                        <p id=\"spread_value\" class=\"value\"></p>\n                        <p id=\"spread_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"spread\" data-id=\"Spread\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n\n                <div class=\"chart\">\n                    <h3>Equity Growth Rate </h3>\n                    <div class=\"overlay\">\n                        <p id=\"equity_growth_rate_value\" class=\"value\"></p>\n                        <p id=\"equity_growth_rate_perc\" class=\"perc\"></p>\n                    </div>\n           		 	    <canvas id=\"equity_growth_rate\" data-id=\"Equity_Growth_Rate\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"block double\">\n            <h4>PROFITABILITY DRIVERS</h4>\n            <div class=\"chart-holder\">\n                <div class=\"chart\">\n                    <h3>Return On Equity</h3>\n                    <div class=\"overlay\">\n                        <p id=\"roae_value\" class=\"value\"></p>\n                        <p id=\"roae_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"roae\" data-id=\"ROAE\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n\n                <div class=\"chart\">\n                    <h3>Cost Of Capital</h3>\n                    <div class=\"overlay\">\n                        <p id=\"cost_of_capital_value\" class=\"value\"></p>\n                        <p id=\"cost_of_capital_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"cost_of_capital\" data-id=\"Cost_of_Capital\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"block full\">\n            <h4>RETURN ON EQUITY DRIVERS</h4>\n            <div class=\"chart-holder\">\n                <div class=\"chart\">\n                    <h3>Cost Efficiency</h3>\n                    <div class=\"overlay\">\n                        <p id=\"costs_avg_ea_dep_value\" class=\"value\"></p>\n                        <p id=\"costs_avg_ea_dep_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"costs_avg_ea_dep\" data-id=\"Costs_Avg_EA_Dep\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n\n                <div class=\"chart\">\n                    <h3>Loan Loss Ratio</h3>\n                    <div class=\"overlay\">\n                        <p id=\"llr_value\" class=\"value\"></p>\n                        <p id=\"llr_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"llr\" data-id=\"LLR\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n                <div class=\"chart\">\n                    <h3>Asset Yields</h3>\n                    <div class=\"overlay\">\n                        <p id=\"asset_yield_value\" class=\"value\"></p>\n                        <p id=\"asset_yield_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"asset_yield\" data-id=\"Asset_Yield\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n\n                <div class=\"chart\">\n                    <h3>Leverage</h3>\n                    <div class=\"overlay\">\n                        <p id=\"leverage_value\" class=\"value\"></p>\n                        <p id=\"leverage_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"leverage\" data-id=\"Leverage\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n                <div class=\"chart\">\n                    <h3>Effective Tax Rate</h3>\n                    <div class=\"overlay\">\n                        <p id=\"roaa_effective_tax_rate_value\" class=\"value\"></p>\n                        <p id=\"roaa_effective_tax_rate_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"roaa_effective_tax_rate\" data-id=\"ROAA_Effective_Tax_Rate\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n            </div>\n        </div>\n\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/industry/index.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.userId || (depth0 != null ? depth0.userId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.segment || (depth0 != null ? depth0.segment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"segment","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Screen_description || (depth0 != null ? depth0.Screen_description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Screen_description","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"hero\">\n<div class=\"text1\">\n    <h1 class=\"title\">Industry Analyzer</h1><h2 class=\"title\">PERFORMANCE SNAPSHOT</h2>\n    <p class=\"sub-title\">Gain insights into the performance of banking industry by reviewing snapshots of results relative to historical performance.</p>\n</div>\n\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                <li class=\"selected\"><a href=\"/industry\">PERFORMANCE SNAPSHOT</a></li>\n                <li>|</li>\n                <li><a href=\"/industry/detailed-metrics\">RATIOS & ANALYSIS</a></li>\n                <li>|</li>\n                <li><a href=\"/perspectives\">DISCUSSION & PERSPECTIVES</a></li>\n            </ul>\n    </div>\n\n</section>\n\n<section id=\"main\" class=\"home\">\n    <section id=\"filters\">\n        <div class=\"col\">\n            <h3>INDUSTRY SEGMENT:</h3>\n            <select blklab-change=\"changeSegment\" id=\"segment-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.indSegments : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n			<div></div>\n			\n			<div class=\"segment_image\">\n				<img blklab-click=\"peerMenu\" HR WIDTH=\"90%\" HR HEIGHT=\"90%\" src=\"/app/assets/images/multiple-users.svg\">	\n				<div id=\"peerMenu\" class=\"peerMenu\">\n					<div blklab-click=\"showPeers\">\n        				<div class = \"segment_image2\" id=\"view_segment\">\n           					<img HR WIDTH=\"80%\" HR HEIGHT=\"80%\" src=\"/app/assets/images/glasses.png\">\n         				</div>\n						<div class=\"peerSet\">View segment participants</div>\n						<div id=\"peerDetails\"></div>\n					</div>	\n				<div></div>\n					\n        		<div blklab-click=\"addSegment\">\n					<div class=\"segment_image2\">\n        				<img HR WIDTH=\"80%\" HR HEIGHT=\"80%\" src=\"/app/assets/images/plus.png\">\n        			</div>\n					<div class=\"peerSet\" id=\"addSegment\">Create custom segment</div>\n				</div>\n				<div blklab-click=\"editSegment\">\n				<div class=\"segment_image2\">\n           			<img HR WIDTH=\"70%\" HR HEIGHT=\"70%\" src=\"/app/assets/images/pencil.png\">\n           		</div>\n					<div class=\"peerSet\" id=\"editSegment\">Edit existing segment</div>\n				</div>\n			</div>\n			</div>			\n        </div>\n\n      <div class=\"colhidden\">\n            <h3>SELECT RESULTS</h3>\n            <select blklab-change=\"changeScreen\" id=\"screen-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.screens : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n\n       <div class=\"colhidden\">\n            <h2><img src=\"/app/assets/images/premium-icon-red.png\"> PREMIUM CONTENT</h2>\n        </div> \n    </section>\n\n    <section id=\"data\">\n        <div class=\"block single\">\n            <h4>SHAREHOLDER RETURNS</h4>\n            <div class=\"chart-holder\">\n                <div class=\"chart\">\n                    <h3>Total Returns - 1 year</h3>\n                    <div class=\"overlay\">\n                        <p id=\"tr_1_value\" class=\"value\"></p>\n                        <p id=\"tr_1_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"tr_1\" data-id=\"TR_1\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"block double\">\n            <h4>SHAREHOLDER VALUE DRIVERS</h4>\n            <div class=\"chart-holder\">\n                <div class=\"chart\">\n                    <h3>Profitability (Spread)</h3>\n                    <div class=\"overlay\">\n                        <p id=\"spread_value\" class=\"value\"></p>\n                        <p id=\"spread_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"spread\" data-id=\"Spread\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n\n                <div class=\"chart\">\n                    <h3>Equity Growth Rate </h3>\n                    <div class=\"overlay\">\n                        <p id=\"equity_growth_rate_value\" class=\"value\"></p>\n                        <p id=\"equity_growth_rate_perc\" class=\"perc\"></p>\n                    </div>\n           		 	    <canvas id=\"equity_growth_rate\" data-id=\"Equity_Growth_Rate\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"block double\">\n            <h4>PROFITABILITY DRIVERS</h4>\n            <div class=\"chart-holder\">\n                <div class=\"chart\">\n                    <h3>Return On Equity</h3>\n                    <div class=\"overlay\">\n                        <p id=\"roae_value\" class=\"value\"></p>\n                        <p id=\"roae_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"roae\" data-id=\"ROAE\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n\n                <div class=\"chart\">\n                    <h3>Cost Of Capital</h3>\n                    <div class=\"overlay\">\n                        <p id=\"cost_of_capital_value\" class=\"value\"></p>\n                        <p id=\"cost_of_capital_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"cost_of_capital\" data-id=\"Cost_of_Capital\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"block full\">\n            <h4>RETURN ON EQUITY DRIVERS</h4>\n            <div class=\"chart-holder\">\n                <div class=\"chart\">\n                    <h3>Cost Efficiency</h3>\n                    <div class=\"overlay\">\n                        <p id=\"costs_avg_ea_dep_value\" class=\"value\"></p>\n                        <p id=\"costs_avg_ea_dep_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"costs_avg_ea_dep\" data-id=\"Costs_Avg_EA_Dep\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n\n                <div class=\"chart\">\n                    <h3>Loan Loss Ratio</h3>\n                    <div class=\"overlay\">\n                        <p id=\"llr_value\" class=\"value\"></p>\n                        <p id=\"llr_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"llr\" data-id=\"LLR\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n                <div class=\"chart\">\n                    <h3>Asset Yields</h3>\n                    <div class=\"overlay\">\n                        <p id=\"asset_yield_value\" class=\"value\"></p>\n                        <p id=\"asset_yield_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"asset_yield\" data-id=\"Asset_Yield\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n\n                <div class=\"chart\">\n                    <h3>Leverage</h3>\n                    <div class=\"overlay\">\n                        <p id=\"leverage_value\" class=\"value\"></p>\n                        <p id=\"leverage_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"leverage\" data-id=\"Leverage\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n                <div class=\"chart\">\n                    <h3>Effective Tax Rate</h3>\n                    <div class=\"overlay\">\n                        <p id=\"roaa_effective_tax_rate_value\" class=\"value\"></p>\n                        <p id=\"roaa_effective_tax_rate_perc\" class=\"perc\"></p>\n                    </div>\n                    <canvas id=\"roaa_effective_tax_rate\" data-id=\"ROAA_Effective_Tax_Rate\" class=\"graph\" width=\"230\" height=\"230\"/>\n                </div>\n            </div>\n        </div>		\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/perspectives/detail.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <img src=\"/app/assets/images/"
    + container.escapeExpression(((helper = (helper = helpers.title_image || (depth0 != null ? depth0.title_image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title_image","hash":{},"data":data}) : helper)))
    + "\" class=\"aboutImg smallImg no-lightense\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\"main\" class=\"posts\">\n    <div class=\"inner\">\n        <div class=\"divider-full\"></div>\n\n        <section class=\"col-left\">\n            <h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n            <p>"
    + alias4(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timestamp","hash":{},"data":data}) : helper)))
    + "</p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title_image : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <p><strong>by "
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</strong></p>\n        </section>\n\n        <section class=\"col-right\">\n            "
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </section>\n\n    </div>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/perspectives/index.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div class=\"post\">\n                <h1>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title_image : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<a href=\"/perspectives/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h1>\n\n                "
    + ((stack1 = ((helper = (helper = helpers.descrip || (depth0 != null ? depth0.descrip : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descrip","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n                <p class=\"readmore\"><a href=\"/perspectives/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Read More</a></p>\n\n                <p class=\"date\">Posted On "
    + alias4(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timestamp","hash":{},"data":data}) : helper)))
    + " by "
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n            <div class=\"divider-full\"></div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n                    <img src=\"/app/assets/images/"
    + container.escapeExpression(((helper = (helper = helpers.title_image || (depth0 != null ? depth0.title_image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title_image","hash":{},"data":data}) : helper)))
    + "\" class=\"aboutImg smallImg left\">\n                ";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <h1>No Perspectives</h1>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"hero\">\n    <div class=\"text\">\n        <h1 class=\"title\">DISCUSSIONS AND PERSPECTIVES</h1>\n\n        <p class=\"sub-title\">Read the lastest points of view posted by our team and industry analysts.<br><br></p>\n    </div>\n    <div class=\"overlay\">\n        <div class=\"inner\">\n            <ul>\n                   <li>RECENT POSTS </li>\n           </ul>\n        </div>\n    </div>\n\n\n</section>\n<section id=\"main\" class=\"posts\">\n    <div class=\"inner\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/users/account.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\"main\" class=\"individual\">\n    <section id=\"data\">\n        <h1>My Account</h1>\n        <label>Name</label>\n        <br>\n        <p>"
    + alias4(((helper = (helper = helpers.full_name || (depth0 != null ? depth0.full_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"full_name","hash":{},"data":data}) : helper)))
    + "</p>\n\n        <label>Title</label>\n        <br>\n        <p>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n\n        <label>Company</label>\n        <br>\n        <p>"
    + alias4(((helper = (helper = helpers.company || (depth0 != null ? depth0.company : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"company","hash":{},"data":data}) : helper)))
    + "</p>\n\n        <label>Status</label>\n        <br>\n        <p>Registered User / <span blklab-click=\"createSubscription\" class=\"click\">Become Premium</span></p>\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/users/create.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<section id=\"modal\" class=\"individual\">\n    <section id=\"data\">\n        <h2>CREATE ACCOUNT</h2>\n        <form method=\"post\" blklab-submit=\"createAccount\" id=\"form\">\n		<div class=\"registration\">\n        <p>\n            <label for=\"full_name\">full name</label>\n            <input type=\"text\" name=\"full_name\" id=\"full_name\" placeholder=\"Full Name\" required=\"true\"/>\n         </p>\n        <p>\n            <label for=\"title\">Title</label>\n            <input type=\"text\" name=\"title\" id=\"title\" placeholder=\"title\" required=\"true\"/>\n         </p>\n        <p>\n            <label for=\"company\">Company</label>\n            <input type=\"text\" name=\"company\" id=\"company\" placeholder=\"company\" required=\"true\"/>\n         </p>\n        <p>\n            <label for=\"email\">email</label>\n            <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"email\" required=\"true\"/>\n         </p>\n         <p>\n            <label for=\"password\">password</label>\n            <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"password\" required=\"true\"/>\n         </p>\n         <p>\n            <input type=\"submit\" value=\"sign up\"/>\n            <a href=\"/users/login\" title=\"login\">&nbspLogin | </a>\n			<a href=\"/\" title=\"home\">Cancel</a>\n         </p>\n        <p id=\"error\"></p>\n        </div>\n		\n		<div class=\"registration regbackground\">\n			<h3 class=\"fontColor\">Why you'll love the <i>Bank Performance Analyzer</i></h3>\n			<img HR WIDTH=\"500px\" src=\"/app/assets/images/Big-Data-Analytics2.png\">\n			<ul>\n				<li class=\"spacing\">Access over 200 performance metrics for more than 1200 U.S. banks</li>\n				<li class=\"spacing\">Assess a bank's recent performance relative to peers</li>\n				<li class=\"spacing\">Analyze market expectations and the outlook for future performance</li>\n				<li class=\"spacing\">Simulate shareholder returns changes</li>\n				<li class=\"spacing\">Access the latest thinking on the banking industry</li>\n			</ul>\n		\n		</div>\n		</form>\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/users/login-modal.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"modal-background\" blklab-click=\"close\"></div>\n<section id=\"modal\" class=\"individual\">\n    <section id=\"data\">\n	<div class=\"registration\">\n        <h2>This feature requires you to login.</h2>\n		\n        <form method=\"post\" blklab-submit=\"login\" id=\"form\">\n		\n\n            <p></p>\n			<p>\n                <label for=\"email\">email</label>\n                <input type=\"text\" name=\"email\" id=\"email\"\n                placeholder=\"email\" required=\"true\"/>\n            </p>\n            <p>\n                <label for=\"password\">password</label>\n                <input type=\"password\" name=\"password\" id=\"password\"\n                placeholder=\"password\" required=\"true\"/>\n            </p>\n            <p>\n                <input type=\"submit\" name=\"signin\" id=\"signin\" value=\"login\"/>\n                <a href=\"/users/signup\" title=\"register\">&nbspCreate Account | </a>\n				<a href=\"/\" title=\"home\">Cancel</a>\n				<p></p>\n                <a href=\"/users/send-reset\" title=\"Register\">Forgot Password?</a>\n            </p>\n\n            <p id=\"error\"></p>\n		</div>\n		<div class=\"registration regbackground\">\n			<h3 class=\"fontColor\"><b>Dont have an account?</b></h3>\n			<h3 class=\"fontColor\"><a href=\"/users/signup\" title=\"register\" class=\"fontColor\">Create a free account</a> and get 2 weeks access to all Premium content for no cost</h3>\n			<img HR WIDTH=\"500px\" src=\"/app/assets/images/measure.png\">\n			<ul>\n				<li class=\"spacing\">Access over 200 performance metrics for more than 1200 U.S. banks</li>\n				<li class=\"spacing\">Assess a bank's recent performance relative to peers</li>\n				<li class=\"spacing\">Analyze market expectations and the outlook for future performance</li>\n				<li class=\"spacing\">Simulate shareholder returns changes</li>\n				<li class=\"spacing\">Access the latest thinking on the banking industry</li>\n			</ul>\n		\n		</div>\n        </form>\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/users/login.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"main\" class=\"individual\">\n    <section id=\"data\">\n	<div class=\"registration\">\n        <h2>This feature requires a registered account.</h2>\n		<h2>Please login.</h2>\n        <form method=\"post\" blklab-submit=\"login\" id=\"form\">\n		\n\n            <p></p>\n			<p>\n                <label for=\"email\">email</label>\n                <input type=\"text\" name=\"email\" id=\"email\"\n                placeholder=\"email\" required=\"true\"/>\n            </p>\n            <p>\n                <label for=\"password\">password</label>\n                <input type=\"password\" name=\"password\" id=\"password\"\n                placeholder=\"password\" required=\"true\"/>\n            </p>\n            <p>\n                <input type=\"submit\" name=\"signin\" id=\"signin\" value=\"login\"/>\n                <a href=\"/users/signup\" title=\"register\">&nbspCreate Account | </a>\n				<a href=\"/\" title=\"home\">Cancel</a>\n				<p></p>\n                <a href=\"/users/send-reset\" title=\"Register\">Forgot Password?</a>\n            </p>\n\n            <p id=\"error\"></p>\n		</div>\n		<div class=\"registration regbackground\">\n			<h3 class=\"fontColor\"><b>Dont have an account?</b></h3>\n			<h3 class=\"fontColor\"><a href=\"/users/signup\" title=\"register\" class=\"fontColor\">Create an account</a> for free and get 2 weeks access to all Premium content for no cost</h3>\n			<img HR WIDTH=\"500px\" src=\"/app/assets/images/measure.png\">\n			<ul>\n				<li class=\"spacing\">Access over 200 performance metrics for more than 1200 U.S. banks</li>\n				<li class=\"spacing\">Assess a bank's recent performance relative to peers</li>\n				<li class=\"spacing\">Analyze market expectations and the outlook for future performance</li>\n				<li class=\"spacing\">Simulate shareholder returns changes</li>\n				<li class=\"spacing\">Access the latest thinking on the banking industry</li>\n			</ul>\n		\n		</div>\n        </form>\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/users/premium-account.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\"main\" class=\"individual\">\n    <section id=\"data\">\n        <h1>My Account</h1>\n\n        <label>Name</label>\n        <br>\n        <p>"
    + alias4(((helper = (helper = helpers.full_name || (depth0 != null ? depth0.full_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"full_name","hash":{},"data":data}) : helper)))
    + "</p>\n\n        <label>Title</label>\n        <br>\n        <p>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n\n        <label>Company</label>\n        <br>\n        <p>"
    + alias4(((helper = (helper = helpers.company || (depth0 != null ? depth0.company : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"company","hash":{},"data":data}) : helper)))
    + "</p>\n\n        <label>Status</label>\n        <br>\n        <p>Premium / <span blklab-click=\"cancelSubscription\" class=\"click\">Cancel Premium</span></p>\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/users/premium-modal.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"modal-background\" blklab-click=\"close\"></div>\n<section id=\"modal\" class=\"individual\">\n    <section id=\"data\">\n        <div id=\"close\" blklab-click=\"close\">X</div>\n        <h2>Become a Premium Member</h2>\n        <p>You will receive a 14 free day trial period.</p>\n        <div class=\"demo-frame\">\n            <form action=\"/\" method=\"post\" id=\"cardForm\" >\n                <label class=\"hosted-fields--label\" for=\"card-number\">Card Number</label>\n                <div id=\"card-number\" class=\"hosted-field\"></div>\n\n                <label class=\"hosted-fields--label\" for=\"expiration-date\">Expiration Date</label>\n                <div id=\"expiration-date\" class=\"hosted-field\"></div>\n\n                <label class=\"hosted-fields--label\" for=\"cvv\">CVV</label>\n                <div id=\"cvv\" class=\"hosted-field\"></div>\n\n                <label class=\"hosted-fields--label\" for=\"postal-code\">Postal Code</label>\n                <div id=\"postal-code\" class=\"hosted-field\"></div>\n\n                <div class=\"button-container\">\n                <input type=\"submit\" class=\"button button--small button--green\" value=\"Purchase\" id=\"submit\"/>\n                </div>\n            </form>\n        </div>\n\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/users/reset.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"main\" class=\"individual\">\n    <section id=\"data\">\n        <h2>RESET PASSWORD</h2>\n        <form method=\"post\" blklab-submit=\"resetAccount\" id=\"form\">\n            <p>\n                <label for=\"password\">Password</label>\n                <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"password\" required=\"true\"/>\n             </p>\n            <p>\n                <input type=\"submit\" name=\"signin\" id=\"signin\" value=\"Reset\"/>\n                <a href=\"/users/login\" title=\"login\">login</a>\n            </p>\n\n            <p id=\"error\"></p>\n        </form>\n    </section>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/users/send-reset.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"main\" class=\"individual\">\n    <section id=\"data\">\n        <h2>SEND RESET</h2>\n        <form method=\"post\" blklab-submit=\"resetAccount\" id=\"form\">\n            <p>\n                <label for=\"email\">email</label>\n                <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"email\" required=\"true\"/>\n            </p>\n            <p>\n                <input type=\"submit\" value=\"Send Reset\"/>\n                <a href=\"/users/login\" title=\"login\">Login</a>\n            </p>\n\n            <p id=\"error\"></p>\n        </form>\n    </section>\n</section>\n";
},"useData":true});;BlkLab.App.Company = 1951350;
BlkLab.App.Segment = 8;
BlkLab.App.Actuals = true;

BlkLab.App.HomeView = BlkLab.View.extend({
    template: this.views['./app/js/views/home.hbs']
});

BlkLab.App.HomeController = BlkLab.Controller.extend({
    actions:{
        changeCompany: function(){
            BlkLab.App.Company = this.value;
            BlkLab.Storage.set('company', this.value);
        },

        changeSegment: function(){
            BlkLab.App.Segment = this.value;
            BlkLab.Storage.set('segment', this.value);
        },

    },



    render: function(params){
        var view = new BlkLab.App.HomeView();
		
        if(BlkLab.App.Segment== null){ 
			BlkLab.App.Segment = 8;
        	BlkLab.Storage.set('segment', 8);
		}
		
		if(BlkLab.App.Company == null){
           BlkLab.App.Company = 1951350;
     	   BlkLab.Storage.set('company', 1951350);
		}
		
		if(BlkLab.App.Actuals == null){
		BlkLab.App.Actuals = true;
		}

        var segment = BlkLab.Storage.get('segment');
        var company = BlkLab.Storage.get('company');
	
        if(segment){
            BlkLab.App.Segment = segment;
        }

        if(company){
            BlkLab.App.Company = company;
        }

        view.model = {
            data: {
                companies: BlkLab.Filters.companies,
                segments: BlkLab.Filters.segments,
				indSegments: BlkLab.Filters.indSegments
            }	
        }
		view.render('#content');

        _$('#company-list').value = company;
        _$('#segment-list').value = segment;

        this.refreshActions();
    }
});

BlkLab.App.Router.routes({
    '/': {
        controller:    BlkLab.App.HomeController
    }
});
;(function() {
    var content = _$('#content');

    _$(window).on('load', function(){});
    _$(window).on('resize', function(){});
    var last;

    function refresh(){
        var loc = location.pathname;
		
        var base = loc.split('/')[1];
        var cur = _$(base + '-main');
        if(cur){
            cur.add_class('selected');
        }

        if(last){
            last.remove_class('selected');
        }

        last = cur;


        var token = BlkLab.Storage.get('access-token');
        var accountOptions = _$('#account-options');
        if(accountOptions){
            if(token){
                accountOptions.innerHTML = '<li><a href="/users/account">My Account</a></li><li> | </li><li><a href="/users/logout">Logout</a></li>';
            }else{
                accountOptions.innerHTML = '<li><a href="/users/login">My Account</a></li><li> |  </li><li><a href="/users/login">Login</a></li>';
            }
        }
    };



    BlkLab.Security.handle = function(http, premium){
        var type = BlkLab.Storage.get('type');
        var token = BlkLab.Storage.get('access-token');
		
		
		//BlkLab.Storage.remove('type');
        //BlkLab.Storage.remove('access-token');
        //location.href = "/users/login";
        var seg = BlkLab.App.Segment;
        var comp = BlkLab.App.Company;



        BlkLab.App.Segment = 8;
        BlkLab.Storage.set('segment', 8);
        BlkLab.App.Company = 1951350;
        BlkLab.Storage.set('company', 1951350);

        if(!_$('#modal')){
            if(!premium || !token){
		        
                BlkLab.App.LoginModalController.segment = seg;
                BlkLab.App.LoginModalController.company = comp;
                BlkLab.App.LoginModalController.render();
            }else{
                BlkLab.App.PremiumModalController.segment = seg;
                BlkLab.App.PremiumModalController.company = comp;
                BlkLab.App.PremiumModalController.render();
            }
        }
    }

    BlkLab.Filters = {};

    BlkLab.get({
        url: '/api/filters'
    }).then(function(http){
        BlkLab.History.start({
            callback: function(){
                refresh();
            }
        });

        BlkLab.App.Segment = BlkLab.Storage.get('segment');
        BlkLab.App.Company = BlkLab.Storage.get('company');

        var results = JSON.parse(http.response);
        BlkLab.Filters = results;

        BlkLab.App.run();
        refresh();
    });

})();
;BlkLab.App.Segment = 8;
BlkLab.App.Screen = 9;
BlkLab.App.Metric = 173;

BlkLab.App.doughnutChart = function(ctx, data, options) {
	return new Chart(ctx).Doughnut(data, {
		responsive: false,
		animationEasing: "easeOutQuart",
		percentageInnerCutout: 75,
		legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
	});
}


BlkLab.App.IndustryView = BlkLab.View.extend({
	template: this.views['./app/js/views/industry/index.hbs']
});

BlkLab.App.IndustryDetailedMetricsView = BlkLab.View.extend({
	template: this.views['./app/js/views/industry/detailed-metrics.hbs']
});

BlkLab.App.AddSegmentView = BlkLab.View.extend({
	template: this.views['./app/js/views/industry/add-segment.hbs']
});

BlkLab.App.EditSegmentView = BlkLab.View.extend({
	template: this.views['./app/js/views/industry/edit-segment.hbs']
});

BlkLab.App.IndustryController = BlkLab.Controller.extend({
	actions: {
		peerMenu: function() {
			var x = document.getElementById("peerMenu");
			var y = document.getElementById("peerDetails");
		    if (x.style.display == 'none') {
		        x.style.display = 'block';
		
		    } else {
		        x.style.display = 'none';
		
		    }
		    if (y.style.display != 'none') {
		        y.style.display = 'none';
		
		    }
		
		
		},

		showPeers: function() {

/*			if ($('#peerMenu').is(':visible')) {

				$('#peerMenu').hide();
			} else
*/				var self = BlkLab.App.IndividualController;

			
				BlkLab.get({
					url: '/api/individual/reportcard/' + BlkLab.App.Segment
				}).then(function(http) {
					var segmentDetails = JSON.parse(http.response);
					var segmentDetails = segmentDetails[0]["rows"];

					var length = segmentDetails.name.length;
					var html = "";
					html += '<div class="arrow_box" id="peerDetails">';
					html += '<header><div class="inner"><h2>INDUSTRY SEGMENT PARTICIPANTS</h2></div><div id="peerClose">Close X</div></header>';
					html += '<div class="arrow_box_contents"><table id="peerSetList"><tr>';
					html += '<TH align="center"><b>' + segmentDetails["segment"][0] + '</b></TH><TR>';

					for (l = 0; l < length; l++) {
						html += '<TR><TD>' + (l + 1) + ". " + segmentDetails["name"][l] + '<TD></TR>';
					}
					html += '</table></div></div>';
					$('#peerDetails').replaceWith(html);
					$('#peerDetails').show();

					var peerclose = function() {
						//var container = BlkLab.create('div');
						//container.id = "peerDetails";
						//_$('#peerDtls').append(container);
						$('#peerDetails').hide();
						$('#peerMenu').hide();

					}

					_$('#peerClose').click(peerclose);
					
				});
//			}

		},

		filterSegment: function() {
			//var self = BlkLab.App.IndustryController;
			var token = BlkLab.Storage.get('access-token');
			
			var url;
			if(token==null){
				url ='/api/industry/reportcardfilter/';
			} else {
				url = '/api/industry/reportcardfilterauth/';
			}
			
			BlkLab.get({
				url: url + BlkLab.App.Segment
			}).then(function(http) {
				var segments = JSON.parse(http.response);
				_$('#segment-list').length = 0;
				for (var i = 0; i < segments.id.length; i++) {
					/*var opt = document.createElement('option');
					opt.value = segments.id[i];
					//opt.data('name', segments.userId[i]);
					//opt.name = segments.userId[i];
					opt.innerHTML = segments.segment[i];
					_$('#segment-list').append(opt);
					var sel = _$('#segment-list').option[i];
					sel.data("foo",segments.userId[i]);*/
					$('#segment-list').append("<option value='" + segments.id[i] + "' data-name='" + segments.userId[i] + "'>" + segments.segment[i] + "</option>");
					////alert(check);
				}
				if (BlkLab.App.Segment == null) {
					BlkLab.App.Segment = segments.id[0];
				}

				var segment = BlkLab.App.Segment;

				BlkLab.Storage.set('segment', segment);
				_$('#segment-list').value = BlkLab.App.Segment;

			});
		},

		changeSegmentEdit: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			_$('#modal-container').destroy();
			BlkLab.App.IndustryController.actions.editSegment();

		},



		editSegment: function() {
			//var check = _$('#segment-list').find('option:selected').attr("name");
			$('#peerMenu').hide();
			var view = new BlkLab.App.EditSegmentView();
			var segment = BlkLab.App.Segment;
			var check = _$('#segment-list option[value ="' + segment + '"]').data("name");
			
			if (check == 1) {
				alert("Unfortuantely you cannot edit a default industry segment. PLease select another segment to edit")
			} else {

				BlkLab.get({
					url: '/api/industry/segmentCompanies/' + segment
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					////alert(JSON.stringify(data));

					var segments = data.segment;
					var company = data.company;
					data = segment;

					view.model = {
						data: {
							data: segments
						}
					};


					var html = view.render();

					var container = BlkLab.create('div');
					container.innerHTML = html;
					container.id = "modal-container";
					_$('#content').append(container);
					_$('#editSegment-list').value = segment;
					for (var i = 0, len = company.length; i < len; i++) {
						if (company[i]['selected'] == 0) {
							$('#companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						} else {
							$('#added-companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						}
					}
				
					var sel = _$('#added-companies-list');
					var nonSel = _$('#companies-list');

					for (var i = 1, len = sel.options.length; i < len; i++) {
						var opt = sel.options[i];
						////alert(opt.value);
						_$('#companies-list option[value = "' + opt.value + '"]').remove();

					}

					var test = $('#editSegment-list option[value ="' + segment + '"]').text();

					_$('#name').value = test;

					BlkLab.App.IndustryController.refreshActions();
					BlkLab.App.IndustryDetailedMetricsController.refreshActions();

				});
			}
		},

		addSegment: function() {
			$('#peerMenu').hide();
			var view = new BlkLab.App.AddSegmentView();
			BlkLab.get({
				url: '/api/industry/companies'
			}).then(function(http) {
				var data = JSON.parse(http.responseText);

				view.model = {
					data: {
						data: data
					}
				};

				var html = view.render();

				var container = BlkLab.create('div');
				container.innerHTML = html;
				container.id = "modal-container";
				_$('#content').append(container);
				BlkLab.App.IndustryController.refreshActions();
				

			},function(http) {
					BlkLab.Security.handle(http, true);
				});
		},

		updateSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);
			var segment = BlkLab.App.Segment;
			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}

			var name = payload["name"];
			var selValue = $('#editSegment-list option[value ="' + segment + '"]').text();
			var txtValue = $('#name').val();
			if (selValue != txtValue) {
				payload["name"] = txtValue;
			} else {
				payload["name"] = selValue;
			}


			payload["segment"] = segment;
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				//alert("Please enter a segment name");
			} else if (opts.length < 2) {

				//alert("Please select at least 2 participating companies");

			} else {


				BlkLab.post({
					url: '/api/industry/editSegment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);

					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndividualController.actions.filterSegment();
					BlkLab.App.IndustryController.actions.loadGraphs();
					

				});

				return false;
			}
		},

		createSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);

			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}


			var name = payload["name"];
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				alert("Please enter a segment name");
			} else if (opts.length < 3) {

				alert("Please select at least 2 participating companies");

			} else {
				BlkLab.post({
					url: '/api/industry/segment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#segment-list').append(opt);
					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndustryController.actions.filterSegment();
					BlkLab.App.IndustryController.actions.loadGraphs();

				});

				return false;
			}
		},

		cancel: function() {
			_$('#modal-container').destroy();
		},

		add: function() {
			var select = _$('#added-companies-list');
			select.options[0].remove();
			!$('#companies-list option:selected').remove().appendTo('#added-companies-list');
			$("#added-companies-list").html($("#added-companies-list option").sort(function(a, b) {
				return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			}))
			$("#added-companies-list").prepend("<option value=''>Companies Selected</option>");


		},

		delete: function() {
			!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

			$("#companies-list").html($("#companies-list option").sort(function(a, b) {
				return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			}))
			$("#companies-list").prepend("<option value=''>Select Companies</option>");
		},



		changeSegment: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			BlkLab.App.IndustryController.actions.loadGraphs();
		},

		changeScreen: function() {
			BlkLab.Storage.set('screen', this.value);
			BlkLab.App.Screen = this.value;
		},

		loadGraphs: function() {
			_$('.graph').each(function(graph) {
				var id = graph.id;
				var ident = graph.data('id');

				BlkLab.get({
					url: '/api/industry/report-card/segment/' + ident + '?segment=' + BlkLab.App.Segment
				}).then(function(http) {
					var results = JSON.parse(http.response);
					////alert(JSON.stringify(http.response));
					if (Object.keys(results).length > 0) {
						var data = [{
							value: results[0].PCT_val,
							color: results[0].colors,
							highlight: results[0].colors,
							label: results[0].Metric_Name
						}, {
							value: results[1].PCT_val,
							color: results[1].colors,
							highlight: results[1].colors,
							label: results[1].Metric_Name
						}];
					} else {
						var data = [{
							value: 0,
							color: '#e2e2e4',
							highlight: '#e2e2e4',
							label: 'N/A'
						}];
					}

					if (results) {
						_$('#' + id + '_value').innerHTML = results[1].Value.toFixed(2) || 0;
						if (results[1].PCT_val < 1) {
							_$('#' + id + '_perc').innerHTML = Math.round(results[1].PCT_val * 100).toPrecision(2) + results[0].format;
						} else {
							_$('#' + id + '_perc').innerHTML = "100" + results[0].format;
						}
					} else {
						_$('#' + id + '_value').innerHTML = "";
						_$('#' + id + '_perc').innerHTML = "";
					}

					var ctx = graph.getContext("2d");
					ctx.clearRect(0, 0, graph.width, graph.height);
					var chart = BlkLab.App.doughnutChart(ctx, data);

				}, function(http) {
					BlkLab.Security.handle(http);
				});
			})
		}
	},

	render: function(params) {
		var view = new BlkLab.App.IndustryView();
		view.model = {
			data: {
				segments: BlkLab.Filters.segments,
				screens: BlkLab.Filters.screens,
				indSegments: BlkLab.Filters.indSegments
			}
		}
		view.render('#content');

		var segment = BlkLab.Storage.get('segment');
		var screen = BlkLab.Storage.get('screen');

		if (segment) {
			BlkLab.App.Segment = segment;
		}

		var x = document.getElementById("peerMenu");
		       x.style.display = 'none';
		if (screen) {
			BlkLab.App.Screen = screen;
		}

		_$('#segment-list').value = BlkLab.App.Segment;
		_$('#screen-list').value = BlkLab.App.Screen;


		this.actions.filterSegment();
		this.actions.loadGraphs();
		this.refreshActions();
	}
});

BlkLab.App.IndustryDetailedMetricsController = BlkLab.Controller.extend({
	lastSel: '',

	actions: {

		peerMenu: function() {
			var x = document.getElementById("peerMenu");
			var y = document.getElementById("peerDetails");
		    if (x.style.display == 'none') {
		        x.style.display = 'block';
		
		    } else {
		        x.style.display = 'none';
		
		    }
		    if (y.style.display != 'none') {
		        y.style.display = 'none';
		
		    }
		
		
		},

		showPeers: function() {

/*			if ($('#peerMenu').is(':visible')) {

				$('#peerMenu').hide();
			} else
*/				var self = BlkLab.App.IndividualController;

			
				BlkLab.get({
					url: '/api/individual/reportcard/' + BlkLab.App.Segment
				}).then(function(http) {
					var segmentDetails = JSON.parse(http.response);
					var segmentDetails = segmentDetails[0]["rows"];

					var length = segmentDetails.name.length;
					var html = "";
					html += '<div class="arrow_box" id="peerDetails">';
					html += '<header><div class="inner"><h2>INDUSTRY SEGMENT PARTICIPANTS</h2></div><div id="peerClose">Close X</div></header>';
					html += '<div class="arrow_box_contents"><table id="peerSetList"><tr>';
					html += '<TH align="center"><b>' + segmentDetails["segment"][0] + '</b></TH><TR>';

					for (l = 0; l < length; l++) {
						html += '<TR><TD>' + (l + 1) + ". " + segmentDetails["name"][l] + '<TD></TR>';
					}
					html += '</table></div></div>';
					$('#peerDetails').replaceWith(html);
					$('#peerDetails').show();

					var peerclose = function() {
						//var container = BlkLab.create('div');
						//container.id = "peerDetails";
						//_$('#peerDtls').append(container);
						$('#peerDetails').hide();
						$('#peerMenu').hide();

					}

					_$('#peerClose').click(peerclose);
					
				});
//			}

		},

		filterSegment: function() {
			//var self = BlkLab.App.IndustryController;
			var token = BlkLab.Storage.get('access-token');
			
			var url;
			if(token==null){
				url ='/api/industry/reportcardfilter/';
			} else {
				url = '/api/industry/reportcardfilterauth/';
			}
			
			BlkLab.get({
				url: url + BlkLab.App.Segment
			}).then(function(http) {
				var segments = JSON.parse(http.response);
				
				_$('#segment-list').length = 0;
				for (var i = 0; i < segments.id.length; i++) {
					/*var opt = document.createElement('option');
					opt.value = segments.id[i];
					//opt.data('name', segments.userId[i]);
					//opt.name = segments.userId[i];
					opt.innerHTML = segments.segment[i];
					_$('#segment-list').append(opt);
					var sel = _$('#segment-list').option[i];
					sel.data("foo",segments.userId[i]);*/
					$('#segment-list').append("<option value='" + segments.id[i] + "' data-name='" + segments.userId[i] + "'>" + segments.segment[i] + "</option>");
					////alert(check);
				}
				if (BlkLab.App.Segment == null) {
					BlkLab.App.Segment = segments.id[0];
				}

				var segment = BlkLab.App.Segment;

				BlkLab.Storage.set('segment', segment);
				_$('#segment-list').value = BlkLab.App.Segment;

			});
		},

		changeSegmentEdit: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			_$('#modal-container').destroy();
			BlkLab.App.IndustryDetailedMetricsController.actions.editSegment();

		},



		editSegment: function() {
			//var check = _$('#segment-list').find('option:selected').attr("name");
			$('#peerMenu').hide();
			var view = new BlkLab.App.EditSegmentView();
			var segment = BlkLab.App.Segment;
			var check = _$('#segment-list option[value ="' + segment + '"]').data("name");
			
			if (check == 1) {
				alert("Unfortuantely you cannot edit a default industry segment. PLease select another segment to edit")
			} else {

				BlkLab.get({
					url: '/api/industry/segmentCompanies/' + segment
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					////alert(JSON.stringify(data));

					var segments = data.segment;
					var company = data.company;
					data = segment;

					view.model = {
						data: {
							data: segments
						}
					};


					var html = view.render();

					var container = BlkLab.create('div');
					container.innerHTML = html;
					container.id = "modal-container";
					_$('#content').append(container);
					_$('#editSegment-list').value = segment;
					for (var i = 0, len = company.length; i < len; i++) {
						if (company[i]['selected'] == 0) {
							$('#companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						} else {
							$('#added-companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						}
					}
				
					var sel = _$('#added-companies-list');
					var nonSel = _$('#companies-list');

					for (var i = 1, len = sel.options.length; i < len; i++) {
						var opt = sel.options[i];
						////alert(opt.value);
						_$('#companies-list option[value = "' + opt.value + '"]').remove();

					}

					var test = $('#editSegment-list option[value ="' + segment + '"]').text();

					_$('#name').value = test;

					BlkLab.App.IndustryDetailedMetricsController.refreshActions();
					

				});
			}
		},

		addSegment: function() {
			$('#peerMenu').hide();
			var view = new BlkLab.App.AddSegmentView();
			BlkLab.get({
				url: '/api/industry/companies'
			}).then(function(http) {
				var data = JSON.parse(http.responseText);

				view.model = {
					data: {
						data: data
					}
				};

				var html = view.render();

				var container = BlkLab.create('div');
				container.innerHTML = html;
				container.id = "modal-container";
				_$('#content').append(container);
				BlkLab.App.IndustryDetailedMetricsController.refreshActions();
				

			},function(http) {
					BlkLab.Security.handle(http, true);
				});
		},

		updateSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);
			var segment = BlkLab.App.Segment;
			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}

			var name = payload["name"];
			var selValue = $('#editSegment-list option[value ="' + segment + '"]').text();
			var txtValue = $('#name').val();
			if (selValue != txtValue) {
				payload["name"] = txtValue;
			} else {
				payload["name"] = selValue;
			}


			payload["segment"] = segment;
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				alert("Please enter a segment name");
			} else if (opts.length < 2) {

				alert("Please select at least 2 participating companies");

			} else {


				BlkLab.post({
					url: '/api/industry/editSegment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);

					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndustryDetailedMetricsController.actions.filterSegment();
					BlkLab.App.IndustryDetailedMetricsController.actions.loadMetrics();

				});

				return false;
			}
		},

		createSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);

			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}


			var name = payload["name"];
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				//alert("Please enter a segment name");
			} else if (opts.length < 3) {

				//alert("Please select at least 2 participating companies");

			} else {
				BlkLab.post({
					url: '/api/industry/segment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#segment-list').append(opt);
					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndustryDetailedMetricsController.actions.filterSegment();
					BlkLab.App.IndustryDetailedMetricsController.actions.loadMetrics();

				});

				return false;
			}
		},

		cancel: function() {
			_$('#modal-container').destroy();
		},

		add: function() {
			var select = _$('#added-companies-list');
			select.options[0].remove();
			!$('#companies-list option:selected').remove().appendTo('#added-companies-list');
			$("#added-companies-list").html($("#added-companies-list option").sort(function(a, b) {
				return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			}))
			$("#added-companies-list").prepend("<option value=''>Companies Selected</option>");


		},

		delete: function() {
			!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

			$("#companies-list").html($("#companies-list option").sort(function(a, b) {
				return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			}))
			$("#companies-list").prepend("<option value=''>Select Companies</option>");
		},

		
		changeSegment: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			BlkLab.App.IndustryDetailedMetricsController.actions.loadMetrics();
		},

		changeScreen: function() {
			BlkLab.App.Screen = this.value;
			BlkLab.Storage.set('screen', this.value);
			BlkLab.App.IndustryDetailedMetricsController.actions.loadMetrics();
		},

		changeMetric: function() {
			BlkLab.App.Metric_Code = _$(this).data('metric');
			BlkLab.Storage.set('metric', _$(this).data('metric'));
			BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();
		},


		changeType: function() {
			BlkLab.App.Actuals = this.value == 'ACT' ? true : false;
			var base = '/api/graphs/industry/xy/pct';
			if (BlkLab.App.Actuals) {
				//base = '/api/graphs/individual/xy';
				base = '/api/graphs/industry/xy';
			}

			BlkLab.get({
				url: base + '?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);
				////alert(JSON.stringify(chartData));
				if (chartData.length > 0) {
					var chart = new AmCharts.AmXYChart();
					chart.addClassNames = true;
					chart.classNamePrefix = "amcharts";
					chart.sequencedAnimation = true;
					chart.startEffect = "easeInSine";
					chart.startDuration = 1;
					chart.pathToImages = "amcharts/images";
					chart.marginRight = 1;
					chart.dataProvider = chartData;
					chart.export = {
						enabled: true
					};

					var YAxisTitle = chartData[0].yaxis;
					var XAxisTitle = chartData[0].xaxis;
					var YAxisAvg = chartData[0].yaxisavg;
					var XAxisAvg = chartData[0].xaxisavg;
					var metric_name = chartData[0].metric_name;
					var YAxisPctAvg = 50;
					var XAxisPctAvg = 50;
					var YHigher_Good_or_Bad = chartData[0].yaxishgb;
					var XHigher_Good_or_Bad = chartData[0].xaxishgb;
					var period = chartData[0].period;

					chart.titles = [{
						text: metric_name + " drivers",
						bold: true,
						size: 14
					}, {
						text: "Period:" + period + " (TTM)",
						bold: false,
						size: 12
					}];

					var valueAxis = new AmCharts.ValueAxis();
					valueAxis.title = YAxisTitle;
					BlkLab.App.Actuals
					if (!BlkLab.App.Actuals) {
						valueAxis.baseValue = YAxisPctAvg;
					} else {
						valueAxis.baseValue = YAxisAvg;
					}
					valueAxis.titleBold = false;
					valueAxis.position = "left";
					valueAxis.inside = false;
					valueAxis.autoGridCount = false;
					valueAxis.gridCount = 25;
					valueAxis.minMaxMultiplier = 1;
					valueAxis.gridAplha = 0.0;
					valueAxis.gridThickness = 0;
					valueAxis.labelFrequency = 5;
					valueAxis.includeGuidesInMinMax = false;
					if (!BlkLab.App.Actuals) {
						valueAxis.reversed = false;
					} else {
						valueAxis.reversed = (YHigher_Good_or_Bad == '1');
					}
					chart.addValueAxis(valueAxis);


					var valueAxis2 = new AmCharts.ValueAxis();
					if (!BlkLab.App.Actuals) {
						valueAxis2.baseValue = XAxisPctAvg;
					} else {
						valueAxis2.baseValue = XAxisAvg;
					}
					valueAxis2.title = XAxisTitle;
					valueAxis2.autoWrap = false;
					valueAxis2.titleBold = false;
					valueAxis2.position = "bottom";
					valueAxis2.inside = false;
					valueAxis2.autoGridCount = false;
					valueAxis2.gridCount = 50;
					valueAxis2.minMaxMultiplier = 1.05;
					valueAxis2.gridAplha = 0.0;
					valueAxis2.gridThickness = 0;
					valueAxis2.labelFrequency = 5;
					valueAxis2.includeGuidesInMinMax = false;
					if (!BlkLab.App.Actuals) {
						valueAxis2.reversed = false;
					} else {
						valueAxis2.reversed = (XHigher_Good_or_Bad == '1');
					}
					chart.addValueAxis(valueAxis2);

					var guide = new AmCharts.Guide();
					if (!BlkLab.App.Actuals) {
						guide.value = YAxisPctAvg;
					} else {
						guide.value = YAxisAvg;
					}
					guide.lineColor = "Gray";
					if (!BlkLab.App.Actuals) {
						guide.label = "Avg: 50%";
					} else {
						guide.label = "Avg: " + YAxisAvg;
					}
					guide.inside = true;
					guide.lineThickness = 1;
					valueAxis.addGuide(guide);

					var guide2 = new AmCharts.Guide();
					if (!BlkLab.App.Actuals) {
						guide2.value = XAxisPctAvg;
					} else {
						guide2.value = XAxisAvg;
					}
					guide2.lineColor = "Gray";
					if (!BlkLab.App.Actuals) {
						guide2.label = "Avg: 50%";
					} else {
						guide2.label = "Avg: " + XAxisAvg;
					}
					guide2.inside = true;
					guide2.labelRotation = 90;
					guide2.lineThickness = 1;
					valueAxis2.addGuide(guide2);

					var graph = new AmCharts.AmGraph();
					graph.bullet = "round";
					graph.animationPlayed = false;
					graph.xField = "x";
					graph.yField = "y";
					graph.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
					graph.valueField = "value";
					graph.lineAlpha = 0;
					graph.colorField = "color";
					graph.bulletBorderColor = "#0489d6";
					graph.bulletBorderThickness = 2;
					graph.bulletSize = 8;
					graph.maxBulletSize = 8;
					graph.minBulletSize = 8;
					chart.addGraph(graph);


					var graph2 = new AmCharts.AmGraph();
					graph2.id = "company";
					graph.animcationPlayed = false;
					graph2.bullet = "round";
					graph2.classNameField = "lastBullet";
					graph2.xField = "x2";
					graph2.yField = "y2";
					graph2.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
					graph2.valueField = "value2";
					graph2.lineAlpha = 0.2;
					graph2.colorField = "color";
					graph2.bulletBorderColor = "Black";
					graph2.bulletBorderAlpha = 1;
					graph2.bulletBorderThickness = 0;
					graph2.bulletSize = 8;
					graph2.maxBulletSize = 8;
					graph2.minBulletSize = 8;
					chart.addGraph(graph2);

					var legend = new AmCharts.AmLegend();
					legend.position = "bottom";
					legend.verticalGap = 2;
					legend.align = "center";
					legend.data = [{
						title: metric_name + ":<br>",
						color: "white",
						markerType: "none"
					}, {
						title: "1st Quartile",
						color: "Green",
						markerType: "round"
					}, {
						title: "2nd Quartile",
						color: "LightGreen",
						markerType: "round"
					}, {
						title: "3rd Quartile",
						color: "Orange",
						markerType: "round"
					}, {
						title: "4th Quartile",
						color: "Red",
						markerType: "round"
					}];
					legend.equalWidths = false;
					legend.spacing = 5;
					legend.valueWidth = 0;
					legend.marginLeft = 0;
					legend.marginRight = 0;
					legend.fontSize = 10;
					legend.markerSize = 10;

					chart.addLegend(legend);


					chart.write("xydiv");
					_$('#xydiv').show();
					_$('#XY_Radio').show();
				} else {
					_$('#xydiv').hide();
					_$('#XY_Radio').hide();
				}

			}, function(http) {
				BlkLab.Security.handle(http);
			});

		},

		loadMetrics: function() {
			BlkLab.get({
				url: '/api/industry/segment/screen?segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen
			}).then(function(http) {
				var results = JSON.parse(http.response);
				_$("#data").innerHTML = results.html;
				_$('#chart-holder').hide();
				BlkLab.App.IndustryDetailedMetricsController.refreshActions();
			}, function(http) {
				BlkLab.Security.handle(http);
			});
		},

		showGraphs: function() {
			var self = BlkLab.App.IndustryDetailedMetricsController;
			var ele = _$(this);
			var table = ele.parent.parent;
			var header = table.children_by_tag('tr').first().cloneNode(true);
			var row = ele.cloneNode(true);
			var tbl = BlkLab.create('table');
			tbl.append(header);
			tbl.append(row);

			BlkLab.App.Metric = ele.data('id');

			_$("chartdiv").innerHTML = '';
			_$("bardiv").innerHTML = '';
			_$("xydiv").innerHTML = '';

			if (self.lastSel) {
				self.lastSel.remove_class('selected');
			}

			ele.add_class('selected');
			self.lastSel = ele;


			var base = '/api/graphs/individual/xy/pct';
			if (BlkLab.App.Actuals) {
				base = '/api/graphs/industry/xy';
			}

			BlkLab.get({
				url: base + '?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);
				if (chartData.length > 0) {
					var chart = new AmCharts.AmXYChart();
					chart.addClassNames = true;
					chart.classNamePrefix = "amcharts";
					chart.sequencedAnimation = true;
					chart.startEffect = "easeInSine";
					chart.startDuration = 1;
					chart.pathToImages = "amcharts/images";
					chart.marginRight = 1;
					chart.dataProvider = chartData;
					chart.export = {
						enabled: true
					};

					var YAxisTitle = chartData[0].yaxis;
					var XAxisTitle = chartData[0].xaxis;
					var YAxisAvg = chartData[0].yaxisavg;
					var XAxisAvg = chartData[0].xaxisavg;
					var metric_name = chartData[0].metric_name;
					var YAxisPctAvg = 50;
					var XAxisPctAvg = 50;
					var YHigher_Good_or_Bad = chartData[0].yaxishgb;
					var XHigher_Good_or_Bad = chartData[0].xaxishgb;
					var period = chartData[0].period;
					var segment_name = chartData[0].segment_name;


					chart.titles = [{
						text: metric_name + " drivers (" + period + ")",
						bold: true,
						size: 14
					}, {
						text: "Industry segment: " + segment_name,
						bold: false,
						size: 12
					}];

					var valueAxis = new AmCharts.ValueAxis();
					valueAxis.title = YAxisTitle;
					valueAxis.baseValue = YAxisAvg;
					valueAxis.titleBold = false;
					valueAxis.position = "left";
					valueAxis.inside = false;
					valueAxis.autoGridCount = false;
					valueAxis.gridCount = 25;
					valueAxis.minMaxMultiplier = 1.2;
					valueAxis.gridAplha = 0.2;
					valueAxis.gridThickness = 0;
					valueAxis.labelFrequency = 5;
					valueAxis.includeGuidesInMinMax = false;
					if (!BlkLab.App.Actuals) {
						valueAxis.reversed = false;
					} else {
						valueAxis.reversed = (YHigher_Good_or_Bad == '1');
					}
					chart.addValueAxis(valueAxis);


					var valueAxis2 = new AmCharts.ValueAxis();
					valueAxis2.baseValue = XAxisAvg;
					valueAxis2.title = XAxisTitle;
					valueAxis2.autoWrap = false;
					valueAxis2.titleBold = false;
					valueAxis2.position = "bottom";
					valueAxis2.inside = false;
					valueAxis2.autoGridCount = false;
					valueAxis2.gridCount = 50;
					valueAxis2.minMaxMultiplier = 1.2;
					valueAxis2.gridAplha = 0.2;
					valueAxis2.gridThickness = 0;
					valueAxis2.labelFrequency = 5;
					valueAxis2.includeGuidesInMinMax = false;
					if (!BlkLab.App.Actuals) {
						valueAxis2.reversed = false;
					} else {
						valueAxis2.reversed = (XHigher_Good_or_Bad == '1');
					}
					chart.addValueAxis(valueAxis2);

					var guide = new AmCharts.Guide();
					if (!BlkLab.App.Actuals) {
						guide.value = YAxisPctAvg;
					} else {
						guide.value = YAxisAvg;
					}
					guide.lineColor = "Gray";
					guide.label = "Avg: " + YAxisAvg;
					guide.inside = true;
					guide.lineThickness = 1;
					valueAxis.addGuide(guide);

					var guide2 = new AmCharts.Guide();
					if (!BlkLab.App.Actuals) {
						guide2.value = XAxisPctAvg;
					} else {
						guide2.value = XAxisAvg;
					}
					guide2.lineColor = "Gray";
					guide2.label = "Avg: " + XAxisAvg;
					guide2.inside = true;
					guide2.labelRotation = 90;
					guide2.lineThickness = 1;
					valueAxis2.addGuide(guide2);

					var graph = new AmCharts.AmGraph();
					graph.bullet = "round";
					graph.animationPlayed = false;
					graph.xField = "x";
					graph.yField = "y";
					graph.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
					//graph.valueField = "value";
					graph.lineAlpha = 0;
					graph.colorField = "color";
					graph.bulletBorderColor = "#0489d6";
					graph.bulletBorderThickness = 2;
					graph.bulletSize = 8;
					graph.minBulletSize = 8;
					graph.maxBulletSize = 8;
					chart.addGraph(graph);
					/*
										var graph = new AmCharts.AmGraph();
										graph.bullet = "round";
										graph.animationPlayed = false;
										graph.xField = "x";
										graph.yField = "y";
										graph.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
										graph.valueField = "value";
										graph.lineAlpha = 0;
										graph.colorField = "color";
										graph.bulletBorderColor = "#0489d6";
										graph.bulletBorderThickness = 2;
										//graph.maxBulletSize = 10;
										chart.addGraph(graph);


										var graph2 = new AmCharts.AmGraph();
										graph2.id = "company";
										graph2.bullet = "round";
										graph2.animationPlayed = false;
										graph2.classNameField = "lastBullet";
										graph2.xField = "x2";
										graph2.yField = "y2";
										graph2.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
										graph2.valueField = "value2";
										graph2.lineAlpha = 0.2;
										graph2.colorField = "color";
										graph2.bulletBorderColor = "Black";
										graph2.bulletBorderAlpha = 1;
										graph2.bulletBorderThickness = 0;
										graph2.maxBulletSize = 12;
										chart.addGraph(graph2);
					*/
					var legend = new AmCharts.AmLegend();
					legend.position = "bottom";
					legend.verticalGap = 2;
					legend.align = "center";
					legend.data = [{
						title: metric_name + ":<br>",
						color: "white",
						markerType: "none"
					}, {
						title: "1st Quartile",
						color: "Green",
						markerType: "round"
					}, {
						title: "2nd Quartile",
						color: "LightGreen",
						markerType: "round"
					}, {
						title: "3rd Quartile",
						color: "Orange",
						markerType: "round"
					}, {
						title: "4th Quartile",
						color: "Red",
						markerType: "round"
					}];
					legend.equalWidths = false;
					legend.spacing = 5;
					legend.valueWidth = 0;
					legend.marginLeft = 0;
					legend.marginRight = 0;
					legend.fontSize = 10;
					legend.markerSize = 10;

					chart.addLegend(legend);
					chart.write("xydiv");
					_$('#xydiv').show();
					_$('#XY_Radio').show();
				} else {
					_$('#xydiv').hide();
					_$('#XY_Radio').hide();
				}

			}, function(http) {
				BlkLab.Security.handle(http);
			});


			BlkLab.get({
				url: '/api/graphs/industry/line?segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);
				var segment_description = chartData[0].segment_description;
				var metric_description = chartData[0].metric_description;
				var period_start = chartData[0].Period;
				var period_end = chartData[(chartData.length - 1)].Period;

				var format = chartData[0].format;

				// SERIAL CHART
				chart = new AmCharts.AmSerialChart();
				chart.addClassNames = true;
				chart.classNamePrefix = "amcharts";
				chart.startDuration = 1;
				chart.startEffect = "elastic";
				chart.backgroundColor = "#ffffff";
				chart.pathToImages = "http://www.amcharts.com/lib/images/";
				chart.dataProvider = chartData;
				chart.categoryField = "Period";
				chart.handDrawn = false;
				chart.export = {
					enabled: true
				};
				chart.titles = [{
					text: metric_description + ": " + period_start + " - " + period_end,
					bold: true,
					size: 14
				}, {
					text: segment_description,
					bold: false,
					size: 12
				}];


				// Category Axis

				var categoryAxis = chart.categoryAxis;
				categoryAxis.gridAlpha = 0;
				//   categoryAxis.labelFunction = formatcategory;



				// Value Axis

				var valueAxis = new AmCharts.ValueAxis();
				if (format == "%") {
					valueAxis.unit = "%";
				} else if (format == "$") {
					valueAxis.unit = "$";
				}
				if (format == "%") {
					valueAxis.Position = "right";
				} else {
					valueAxis.unitPosition = "left";
				}
				//valueAxis.labelFunction = formatLabel;
				valueAxis.gridAlpha = 1;
				valueAxis.gridCount = 0;
				valueAxis.gridThickness = 0;
				valueAxis.gridColor = "Gray";
				chart.addValueAxis(valueAxis);


				// GRAPHS

				var graph1 = new AmCharts.AmGraph();
				graph1.id = "median";
				//graph1.classNameField = "movingLine";
				graph1.animationPlayed = false;
				graph1.valueField = "Avg";
				graph1.type = "line";
				graph1.lineColor = "Orange";
				graph1.lineAlpha = 0.8;
				graph1.dashLength = 4;
				graph1.lineThickness = 2;
				graph1.cornerRadiusTop = 0;
				graph1.title = "Median";
				//graph1.fillColors = "Orange";
				// graph1.fillAlphas = 1;
				graph1.bullet = "round";
				graph1.bulletBorderThickness = 2;
				graph1.bulletBorderAlpha = 1;
				graph1.bulletBorderColor = "Orange";
				graph1.bulletSize = 8;
				graph1.bulletColor = "White";
				graph1.backgroundColor = "#FFFFFF";
				//if(format == "%") {graph1.labelText  = "[[Avg]]%";} else if(format == "$") {graph1.labelText  = "$[[Avg]]";} else {graph1.labelText  = "[[Avg]]";}
				if (format == "%") {
					graph1.balloonText = "[[Avg]]%";
				} else if (format == "$") {
					graph1.balloonText = "$[[Avg]]";
				} else {
					graph1.balloonText = "[[Avg]]";
				}
				chart.addGraph(graph1);

				var graph2 = new AmCharts.AmGraph();
				graph2.animationPlayed = true;
				graph2.valueField = "Bottom";
				graph2.type = "line";
				graph2.lineColor = "DarkRed";
				graph2.lineThickness = 2;
				graph2.lineAlpha = 0;
				graph2.title = "Bottom 25%";
				graph2.bullet = "round";
				graph2.bulletBorderThickness = 2;
				graph2.bulletBorderAlpha = 1;
				graph2.bulletBorderColor = "DarkRed";
				graph2.bulletSize = 4;
				graph2.bulletColor = "White";
				graph2.backgroundColor = "#FFFFFF";
				if (format == "%") {
					graph2.balloonText = "[[Bottom]]%";
				} else if (format == "$") {
					graph2.balloonText = "$[[Bottom]]";
				} else {
					graph2.balloonText = "[[Bottom]]";
				}
				chart.addGraph(graph2);


				var graph3 = new AmCharts.AmGraph();
				graph3.animationPlayed = true;
				graph3.valueField = "Top";
				graph3.data_labels = "Percents"
				graph3.type = "line";
				graph3.lineColor = "Green";
				graph3.lineThickness = 2;
				graph3.lineAlpha = 0;
				graph3.title = "Top 25%";
				graph3.bullet = "round";
				graph3.bulletBorderThickness = 2;
				graph3.bulletBorderAlpha = 1;
				graph3.bulletBorderColor = "Green";
				graph3.bulletSize = 4;
				graph3.bulletColor = "White";
				graph3.backgroundColor = "#FFFFFF";
				// if(format == "%") {graph3.balloonText = "[[Top]]%";} else if(format == "$") {graph3.balloonText = "$[[Top]]";} else {graph3.balloonText = "[[Top]]";}
				chart.addGraph(graph3);

				//legend
				var legend = new AmCharts.AmLegend();
				legend.position = "bottom";
				legend.verticalGap = 2;
				legend.align = "center";
				legend.useGraphSettings = true;
				//legend.data = [{title: "Peer Median" },{title: "Bottom 25%"},{title:"Top 25%"}];
				legend.equalWidths = false;
				legend.spacing = 5;
				legend.valueWidth = 0;
				legend.fontSize = 10;
				legend.markerSize = 10;

				chart.addLegend(legend);

				// WRITE
				chart.write("chartdiv");

			}, function(http) {
				BlkLab.Security.handle(http);
			});

			BlkLab.get({
				url: '/api/graphs/industry/bar?segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);
				var metric = chartData[0].Metric;
				var segment_name = chartData[0].Segment;
				var period_start = chartData[0].Period;
				var format = chartData[0].format;

				// SERIAL CHART
				chart = new AmCharts.AmSerialChart();
				chart.pathToImages = "http://www.amcharts.com/lib/images/";
				chart.dataProvider = chartData;
				chart.startDuration = 1;
				chart.startEffect = "elastic";
				chart.categoryField = "Company";
				chart.rotate = "true";
				chart.handDrawn = false;
				chart.export = {
					enabled: true
				};
				chart.titles = [{
					text: metric + ": " + period_start,
					bold: true,
					size: 14
				}, {
					text: segment_name,
					bold: false,
					size: 12
				}];


				// Category Axis

				var categoryAxis = chart.categoryAxis;
				categoryAxis.gridAlpha = 0;
				categoryAxis.fontSize = 9;
				categoryAxis.position = "left";




				// Value Axis

				var valueAxis = new AmCharts.ValueAxis();
				if (format == "%") {
					valueAxis.unit = "%";
				} else if (format == "$") {
					valueAxis.unit = "$";
				}
				if (format == "%") {
					valueAxis.Position = "right";
				} else {
					valueAxis.unitPosition = "left";
				}
				//valueAxis.labelFunction = formatLabel;
				valueAxis.gridAlpha = 1;
				valueAxis.gridCount = 0;
				valueAxis.gridThickness = 0;
				valueAxis.gridColor = "Gray";
				valueAxis.baseValue = 0;
				chart.addValueAxis(valueAxis);


				// GRAPHS

				var graph1 = new AmCharts.AmGraph();
				graph1.valueField = "Value";
				graph1.type = "column";
				graph1.colorField = 'Color';
				graph1.lineColorField = 'Color';
				graph1.fillAlphas = 1;
				graph1.balloonText = "[[value]]%";
				//if(format == "%") {graph1.labelText  = "[[Value]]%";} else if(format == "$") {graph1.labelText  = "$[[Value]]";} else {graph1.labelText  = "[[Value]]";}
				graph1.labelBold = false;
				graph1.fontSize = 10;
				chart.addGraph(graph1);

				// LEGEND

				var legend = new AmCharts.AmLegend();
				legend.position = "bottom";
				legend.verticalGap = 2;
				legend.equalWidths = false;
				legend.align = "left";
				legend.marginLeft = 5;
				legend.marginRight = 5;
				legend.fontSize = 9;
				legend.valueWidth = 0;
				legend.data = [{
					title: "1st Quartile",
					color: "Green",
					markerType: "square"
				}, {
					title: "2nd Quartile",
					color: "LightGreen",
					markerType: "square"
				}, {
					title: "3rd Quartile",
					color: "Orange",
					markerType: "square"
				}, {
					title: "4th Quartile",
					color: "Red",
					markerType: "square"
				}];
				legend.markerSize = 8;
				chart.addLegend(legend);

				// WRITE

				chart.write("bardiv");
			}, function(http) {
				BlkLab.Security.handle(http);
			});

			/*var h =  _$('#segment_metrics').offsetHeight > 665 ?  (_$('#segment_metrics').offsetHeight - 46) : 665;
			_$('#chart-holder').show();
			 _$('#chart-holder').css({
			     left:  _$('#segment_metrics').offsetLeft + 260 + "px",
			     width:  _$('#segment_metrics').offsetWidth - 259 + "px",
			     height: h + 'px',
			     top: '810px'
			});

			_$('#holder').css({
			    height: h + 49 + 'px',
			})

			_$('#chart-holder').click(function(){
			    _$('#chart-holder').hide();
			    _$('#holder').css({
			        height: 'auto',
			    })
			    ele.remove_class('selected');
			})*/

			var tbl_container = _$('#single-table');
			tbl_container.innerHTML = "";
			tbl_container.append(tbl);


			_$('#chart-holder').show();
			_$('#background').show();
			/*_$('#chart-holder').css({
			     left:  _$('#segment_metrics').offsetLeft + 404 + "px",
			     width:  _$('#segment_metrics').offsetWidth - 404 + "px",
			     height: h + 'px',
			     top: '812px'
			});

			_$('#holder').css({
			    height: h + 49 + 'px',
			})
			*/
			document.body.style.overflow = "hidden";

			var close = function() {
				_$('#chart-holder').hide();
				_$('#background').hide();
				ele.remove_class('selected');
				document.body.style.overflow = "auto";
			}

			_$('#background').click(close);
			_$('#close').click(close);
		}
	},

	render: function(params) {
		var self = this;
		var view = new BlkLab.App.IndustryDetailedMetricsView();
		BlkLab.get({
			url: '/api/industry/segment/screen?segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen
		}).then(function(http) {
			var results = JSON.parse(http.response);
			view.model = {
				data: {
					table: results.html,
					segments: BlkLab.Filters.segments,
					screens: BlkLab.Filters.screens,
					indSegments: BlkLab.Filters.indSegments
				}
			}
			view.render('#content');
			
			var x = document.getElementById("peerMenu");
			       x.style.display = 'none';

			var segment = BlkLab.Storage.get('segment');
			var screen = BlkLab.Storage.get('screen');

			if (segment) {
				BlkLab.App.Segment = segment;
			}

			if (screen) {
				BlkLab.App.Screen = screen;
			}

			_$('#segment-list').value = BlkLab.App.Segment;
			_$('#screen-list').value = BlkLab.App.Screen;

			BlkLab.App.IndustryController.actions.filterSegment();
			self.refreshActions();
		}, function(http) {
			BlkLab.Security.handle(http);
		});
	}
});


BlkLab.App.Router.routes({
	'/industry': {
		controller: BlkLab.App.IndustryController
	},

	'/industry/detailed-metrics': {
		controller: BlkLab.App.IndustryDetailedMetricsController
	}
});
;BlkLab.App.Company = 1951350;
BlkLab.App.Metric_Code = 1;
BlkLab.App.Actuals = true;
BlkLab.App.Segment = 8;

BlkLab.App.IndividualView = BlkLab.View.extend({
	template: this.views['./app/js/views/individual/index.hbs']
});

BlkLab.App.IndividualDetailedMetricsView = BlkLab.View.extend({
	template: this.views['./app/js/views/individual/detailed-metrics.hbs']
});

BlkLab.App.IndividualOutlookView = BlkLab.View.extend({
	template: this.views['./app/js/views/individual/outlook.hbs']
});

BlkLab.App.IndividualSimulationView = BlkLab.View.extend({
	template: this.views['./app/js/views/individual/simulation.hbs']
});

BlkLab.App.IndividualController = BlkLab.Controller.extend({
	charts: [],

	actions: {

		peerMenu: function() {
			var x = document.getElementById("peerMenu");
			var y = document.getElementById("peerDetails");
			if (x.style.display == 'none') {
				x.style.display = 'block';

			} else {
				x.style.display = 'none';

			}
			if (y.style.display != 'none') {
				y.style.display = 'none';

			}


		},

		showPeers: function() {
			
			BlkLab.get({
				url: '/api/individual/reportcard/'+BlkLab.App.Segment,
				
			}).then(function(http) {
				
				var segmentDetails = JSON.parse(http.response);

				var segmentDetails = segmentDetails[0]["rows"];
				var length = segmentDetails.name.length;
				var html = "";
				html += '<div class="arrow_box" id="peerDetails">';
				html += '<header><div class="inner"><h2>INDUSTRY SEGMENT PARTICIPANTS</h2></div><div id="peerClose">Close X</div></header>';
				html += '<div class="arrow_box_contents"><table id="peerSetList"><tr>';
				html += '<TH align="center"><b>' + segmentDetails["segment"][0] + '</b></TH><TR>';

				for (l = 0; l < length; l++) {
					html += '<TR><TD>' + (l + 1) + ". " + segmentDetails["name"][l] + '<TD></TR>';
				}
				html += '</table></div></div>';
				$('#peerDetails').replaceWith(html);
				$('#peerDetails').show();

				var peerclose = function() {
					//var container = BlkLab.create('div');
					//container.id = "peerDetails";
					//_$('#peerDtls').append(container);
					$('#peerDetails').hide();
					$('#peerMenu').hide();

				}

				_$('#peerClose').click(peerclose);

			});

		},

		filterSegment: function() {

			var company = BlkLab.App.Company;
			var token = BlkLab.Storage.get('access-token');
			
			var url;
			if(token==null){
				url ='/api/individual/companysegments/';
			} else {
				url = '/api/individual/companysegmentsauth/';
			}
			BlkLab.get({
				url: url + BlkLab.App.Company
			}).then(function(http) {
				var segments = JSON.parse(http.response);
				////alert(JSON.stringify(segments));
				_$('#segment-list').length = 0;
				var test=0;
				for (var i = 0; i < segments.id.length; i++) {
					/*var opt = document.createElement('option');
					opt.value = segments.id[i];
					opt.innerHTML = segments.segment[i];
					_$('#segment-list').append(opt);*/
					if(segments.id[i]==BlkLab.App.Segment){
						test++;
					}
					$('#segment-list').append("<option value='" + segments.id[i] + "' data-name='" + segments.userId[i] + "'>" + segments.segment[i] + "</option>");
				}
				
				if (!BlkLab.App.Segment == null) {
					////alert(BlkLab.App.Segment);
					BlkLab.Storage.set('segment',segments.id[0]);
					BlkLab.App.Segment = segments.id[0];
				} else if(test == 0){
					BlkLab.Storage.set('segment',segments.id[0]);
					BlkLab.App.Segment = segments.id[0];	
				}
				//BlkLab.Storage.set('segment', segments.id[0]);
				BlkLab.Storage.set('segment',BlkLab.App.Segment);
				_$('#segment-list').value = BlkLab.App.Segment;
				
				BlkLab.App.IndividualController.actions.loadGraphs();
			
			});
		},

		editSegment: function() {

			$('#peerMenu').hide();
			var view = new BlkLab.App.EditSegmentView();
			var segment = BlkLab.App.Segment;
			var check = _$('#segment-list option[value ="' + segment + '"]').data("name");
			if (check == 1) {
				alert("Unfortuantely you cannot edit a default industry segment. Please select another segment to edit")
			} else {

				BlkLab.get({
					url: '/api/industry/segmentCompanies/' + segment
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					//////alert(JSON.stringify(data));

					var segments = data.segment;
					var company = data.company;
					data = segment;

					view.model = {
						data: {
							data: segments
						}
					};


					var html = view.render();

					var container = BlkLab.create('div');
					container.innerHTML = html;
					container.id = "modal-container";
					_$('#content').append(container);
					_$('#editSegment-list').value = segment;
					for (var i = 0, len = company.length; i < len; i++) {
						if (company[i]['selected'] == 0) {
							$('#companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						} else {
							$('#added-companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						}
					}

					var sel = _$('#added-companies-list');
					var nonSel = _$('#companies-list');

					for (var i = 1, len = sel.options.length; i < len; i++) {
						var opt = sel.options[i];
						//////alert(opt.value);
						_$('#companies-list option[value = "' + opt.value + '"]').remove();

					}

					var test = $('#editSegment-list option[value ="' + segment + '"]').text();

					_$('#name').value = test;

					BlkLab.App.IndividualController.refreshActions();


				});
			}
		},

		addSegment: function() {
			$('#peerMenu').hide();
			var view = new BlkLab.App.AddSegmentView();
			BlkLab.get({
				url: '/api/industry/companies'
			}).then(function(http) {
				var data = JSON.parse(http.responseText);

				view.model = {
					data: {
						data: data
					}
				};

				var html = view.render();
				var client = BlkLab.App.Company;

				var container = BlkLab.create('div');
				container.innerHTML = html;
				container.id = "modal-container";
				_$('#content').append(container);



				for (var i = 0, len = data.length; i < len; i++) {
					if (data[i]['ID'] == client) {

						_$('#companies-list option[value = "' + data[i]['ID'] + '"]').remove();

						$('#added-companies-list').append("<option value='" + data[i]['ID'] + "'>" + data[i]['Name'] + "</option>");
					}
				}

				BlkLab.App.IndividualController.refreshActions();

			}, function(http) {
					BlkLab.Security.handle(http, true);
				});
		},

		updateSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);
			var segment = BlkLab.App.Segment;
			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}

			var name = payload["name"];
			var selValue = $('#editSegment-list option[value ="' + segment + '"]').text();
			var txtValue = $('#name').val();
			if (selValue != txtValue) {
				payload["name"] = txtValue;
			} else {
				payload["name"] = selValue;
			}


			payload["segment"] = segment;
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				alert("Please enter a segment name");
			} else if (opts.length < 2) {

				alert("Please select at least 2 participating companies");

			} else {


				BlkLab.post({
					url: '/api/industry/editSegment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);

					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndividualController.actions.filterSegment();
					//BlkLab.App.IndividualController.actions.loadGraphs();

				});

				return false;
			}
		},

		createSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);

			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}


			var name = payload["name"];
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				alert("Please enter a segment name");
			} else if (opts.length < 3) {

				alert("Please select at least 2 participating companies");

			} else {
				BlkLab.post({
					url: '/api/industry/segment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#segment-list').append(opt);
					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndividualController.actions.filterSegment();
					//BlkLab.App.IndividualController.actions.loadGraphs();

				});

				return false;
			}
		},

		cancel: function() {
			_$('#modal-container').destroy();
		},

		add: function() {
			var select = _$('#added-companies-list');
			select.options[0].remove();
			!$('#companies-list option:selected').remove().appendTo('#added-companies-list');
			$("#added-companies-list").html($("#added-companies-list option").sort(function(a, b) {
				return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			}))
			$("#added-companies-list").prepend("<option value=''>Companies Selected</option>");


		},

		delete: function() {
			
			var company = BlkLab.App.Company;
			
			var val = $('#added-companies-list option[value = "' + company + '"]:selected');
			var test = $('#added-companies-list').val();
			var check = 0;
			for(i=0; i<test.length; i++){
				if (test[i]==company) {
					check++;
				}
			}
			
			if (check==1) {
				if (confirm('You have chosen to remove ' + val.text() + ' from this Industry Segment.  However it is the Bank Holding Company currently being analysed.\n\nDo you wish to contine?')) {
					// Save it!
					!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

					$("#companies-list").html($("#companies-list option").sort(function(a, b) {
						return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
					}))
					$("#companies-list").prepend("<option value=''>Select Companies</option>");
				}
			} else {
				!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

				$("#companies-list").html($("#companies-list option").sort(function(a, b) {
					return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
				}))
				$("#companies-list").prepend("<option value=''>Select Companies</option>");
			}
		},


		changeSegment: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.App.IndividualController.actions.loadGraphs();
			//BlkLab.App.IndividualController.actions.loadGraphs();
		},


		changeCompany: function() {
			$('#peerDetails').hide();
			
			BlkLab.App.Company = this.value;
			BlkLab.Storage.set('company', this.value);
			BlkLab.App.IndividualController.actions.filterSegment();
			//BlkLab.App.IndividualController.actions.filterSegment();
		},

		/*		changeScreen: function() {
					BlkLab.App.Screen = this.value;
					BlkLab.Storage.set('company', this.value);
				},
		*/
		loadGraphs: function() {
			var self = BlkLab.App.IndividualController;
			_$('.graph').each(function(graph, idx) {
				var id = graph.id;
				var ident = graph.data('id');
				BlkLab.get({
					url: '/api/individual/report-card/' + BlkLab.App.Company + '?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&metric=' + ident
				}).then(function(http) {
					var results = JSON.parse(http.response);
					_$('#segment-list').value = results[0]["segmentId"];
					BlkLab.App.Segment = results[0]["segmentId"];
					BlkLab.Storage.set('segment', results[0]["segmentId"]);

					//_$('#industry_segment').innerHTML = results[0]["segment"];

					var data;
					if (Object.keys(results).length > 0) {
						var v1 = results[0].PCT_val;
						var v2 = results[1].PCT_val;
						data = [{
							value: v1,
							color: results[0].colors,
							highlight: results[0].colors,
							label: results[0].Metric_Name || 'N/A'
						}, {
							value: v2,
							color: results[1].colors,
							highlight: results[1].colors,
							label: results[1].Metric_Name || 'N/A'
						}];
					} else {
						data = [{
							value: 0,
							color: '#e2e2e4',
							highlight: '#e2e2e4',
							label: 'N/A'
						}, {
							value: 0,
							color: '#e2e2e4',
							highlight: '#e2e2e4',
							label: 'N/A'
						}, ];
					}


					if (results[1].Value) {
						_$('#' + id + '_value').innerHTML = results[1].Value.toFixed(2) || 0;
						_$('#' + id + '_perc').innerHTML = "Last among peers";
						if (results[1].PCT_val < 1) {
							if (Math.round(results[1].PCT_val * 100).toPrecision(2) >= 50) {
								_$('#' + id + '_perc').innerHTML = "Top " + Math.abs(((Math.round((1 - results[1].PCT_val) * 100).toPrecision(2)))) + results[0].format + " of peers";
							} else if (results[1].PCT_val > 0) {
								_$('#' + id + '_perc').innerHTML = "Bottom " + Math.round(results[1].PCT_val * 100).toPrecision(2) + results[0].format + " of peers";
							}
						} else if (results[1].PCT_val == 1) {
							_$('#' + id + '_perc').innerHTML = "Best among peers";
						} else if (results[1].PCT_val == 0) {

						}
					} else {
						_$('#' + id + '_value').innerHTML = "";
						_$('#' + id + '_perc').innerHTML = "Unavailable.";
					}

					var chart;
					if (self.charts[idx]) {
						chart = self.charts[idx];
						chart.destroy();
					} else {
						self.charts[idx] = '';
					}

					var ctx = graph.getContext("2d");
					ctx.clearRect(0, 0, window.width * 0.184, window.width * 0.184); //graph.width, graph.height);
					chart = BlkLab.App.doughnutChart(ctx, data);
					self.charts[idx] = chart
				}, function(http) {
					BlkLab.Security.handle(http, true);
				});
			});
		}
	},

	render: function(params) {
		var view = new BlkLab.App.IndividualView();

		view.model = {
			data: {
				companies: BlkLab.Filters.companies,
				segments: BlkLab.Filters.segments,
				screens: BlkLab.Filters.screens
			}
		}


		view.render('#content');
		$('#peerDetails').hide();
		var screen = BlkLab.Storage.get('screen');
		var company = BlkLab.Storage.get('company');
		var segment = BlkLab.Storage.get('segment');
		var x = document.getElementById("peerMenu");
		       x.style.display = 'none';

		if (screen) {
			BlkLab.App.Screen = screen;
		}

		if (company) {
			BlkLab.App.Company = company;
		}

		if (segment) {
			BlkLab.App.Segment = segment;
		}


		_$('#company-list').value = company;
		_$('#screen-list').value = screen;


		this.actions.filterSegment();
		this.refreshActions();
		$('.donut').peity('donut');
	}
});

BlkLab.App.IndividualDetailedMetricsController = BlkLab.Controller.extend({
	actions: {

		peerMenu: function() {
			var x = document.getElementById("peerMenu");
			var y = document.getElementById("peerDetails");
			if (x.style.display == 'none') {
				x.style.display = 'block';

			} else {
				x.style.display = 'none';

			}
			if (y.style.display != 'none') {
				y.style.display = 'none';

			}


		},

		showPeers: function() {

			/*			if ($('#peerMenu').is(':visible')) {

							$('#peerMenu').hide();
						} else
			*/
			var self = BlkLab.App.IndividualController;


			BlkLab.get({
				url: '/api/individual/reportcard/' + BlkLab.App.Segment
			}).then(function(http) {
				var segmentDetails = JSON.parse(http.response);
				var segmentDetails = segmentDetails[0]["rows"];

				var length = segmentDetails.name.length;
				var html = "";
				html += '<div class="arrow_box" id="peerDetails">';
				html += '<header><div class="inner"><h2>INDUSTRY SEGMENT PARTICIPANTS</h2></div><div id="peerClose">Close X</div></header>';
				html += '<div class="arrow_box_contents"><table id="peerSetList"><tr>';
				html += '<TH align="center"><b>' + segmentDetails["segment"][0] + '</b></TH><TR>';

				for (l = 0; l < length; l++) {
					html += '<TR><TD>' + (l + 1) + ". " + segmentDetails["name"][l] + '<TD></TR>';
				}
				html += '</table></div></div>';
				$('#peerDetails').replaceWith(html);
				$('#peerDetails').show();

				var peerclose = function() {

					$('#peerDetails').hide();
					$('#peerMenu').hide();

				}

				_$('#peerClose').click(peerclose);

			});
			//			}

		},

		filterSegment: function() {

			var company = BlkLab.App.Company;
			var token = BlkLab.Storage.get('access-token');
			
			var url;
			if(token==null){
				url ='/api/individual/companysegments/';
			} else {
				url = '/api/individual/companysegmentsauth/';
			}
			BlkLab.get({
				url: url + BlkLab.App.Company
			}).then(function(http) {
				var segments = JSON.parse(http.response);
				_$('#segment-list').length = 0;
				var test=0;
				for (var i = 0; i < segments.id.length; i++) {
					/*var opt = document.createElement('option');
					opt.value = segments.id[i];
					opt.innerHTML = segments.segment[i];
					_$('#segment-list').append(opt);*/
					if(segments.id[i]==BlkLab.App.Segment){
						test++;
					}
					$('#segment-list').append("<option value='" + segments.id[i] + "' data-name='" + segments.userId[i] + "'>" + segments.segment[i] + "</option>");
				}


				if (!BlkLab.App.Segment == null) {
					////alert(BlkLab.App.Segment);
					BlkLab.App.Segment = segments.id[0];
					BlkLab.Storage.set('segment',segments.id[0]);
				} else if(test == 0){
					BlkLab.App.Segment = segments.id[0];
					BlkLab.Storage.set('segment',segments.id[0]);
				}
				//BlkLab.Storage.set('segment', segments.id[0]);
				BlkLab.Storage.set('segment',BlkLab.App.Segment);
				_$('#segment-list').value = BlkLab.App.Segment;
				
				BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();
			

			});
		},


		changeSegmentEdit: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			_$('#modal-container').destroy();
			BlkLab.App.IndividualDetailedMetricsController.actions.editSegment();

		},



		editSegment: function() {
			$('#peerMenu').hide();
			var view = new BlkLab.App.EditSegmentView();
			var segment = BlkLab.App.Segment;
			var check = _$('#segment-list option[value ="' + segment + '"]').data("name");

			if (check == 1) {
				alert("Unfortuantely you cannot edit a default industry segment. Please select another segment to edit")
			} else {

				BlkLab.get({
					url: '/api/industry/segmentCompanies/' + segment
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					//////alert(JSON.stringify(data));

					var segments = data.segment;
					var company = data.company;
					data = segment;

					view.model = {
						data: {
							data: segments
						}
					};


					var html = view.render();

					var container = BlkLab.create('div');
					container.innerHTML = html;
					container.id = "modal-container";
					_$('#content').append(container);
					_$('#editSegment-list').value = segment;
					for (var i = 0, len = company.length; i < len; i++) {
						if (company[i]['selected'] == 0) {
							$('#companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						} else {
							$('#added-companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						}
					}

					var sel = _$('#added-companies-list');
					var nonSel = _$('#companies-list');

					for (var i = 1, len = sel.options.length; i < len; i++) {
						var opt = sel.options[i];
						_$('#companies-list option[value = "' + opt.value + '"]').remove();

					}

					var test = $('#editSegment-list option[value ="' + segment + '"]').text();

					_$('#name').value = test;

					BlkLab.App.IndividualDetailedMetricsController.refreshActions();


				});
			}
		},

		addSegment: function() {
			$('#peerMenu').hide();
			var view = new BlkLab.App.AddSegmentView();
			BlkLab.get({
				url: '/api/industry/companies'
			}).then(function(http) {
				var data = JSON.parse(http.responseText);

				view.model = {
					data: {
						data: data
					}
				};

				var html = view.render();

				var container = BlkLab.create('div');
				container.innerHTML = html;
				container.id = "modal-container";
				_$('#content').append(container);

				var client = BlkLab.App.Company;
				for (var i = 0, len = data.length; i < len; i++) {
					if (data[i]['ID'] == client) {

						_$('#companies-list option[value = "' + data[i]['ID'] + '"]').remove();

						$('#added-companies-list').append("<option value='" + data[i]['ID'] + "'>" + data[i]['Name'] + "</option>");
					}
				}
				BlkLab.App.IndividualDetailedMetricsController.refreshActions();


			},function(http) {
					BlkLab.Security.handle(http, true);
				});
		},

		updateSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);
			var segment = BlkLab.App.Segment;
			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}

			var name = payload["name"];
			var selValue = $('#editSegment-list option[value ="' + segment + '"]').text();
			var txtValue = $('#name').val();
			if (selValue != txtValue) {
				payload["name"] = txtValue;
			} else {
				payload["name"] = selValue;
			}


			payload["segment"] = segment;
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				alert("Please enter a segment name");
			} else if (opts.length < 2) {

				alert("Please select at least 2 participating companies");

			} else {


				BlkLab.post({
					url: '/api/industry/editSegment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);

					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndividualDetailedMetricsController.actions.filterSegment();
					//BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();

				});

				return false;
			}
		},

		createSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);

			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}


			var name = payload["name"];
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				alert("Please enter a segment name");
			} else if (opts.length < 3) {

				alert("Please select at least 2 participating companies");

			} else {
				BlkLab.post({
					url: '/api/industry/segment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#segment-list').append(opt);
					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndividualDetailedMetricsController.actions.filterSegment();
					//BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();

				});

				return false;
			}
		},

		cancel: function() {
			_$('#modal-container').destroy();
		},

		add: function() {
			var select = _$('#added-companies-list');
			select.options[0].remove();
			!$('#companies-list option:selected').remove().appendTo('#added-companies-list');
			$("#added-companies-list").html($("#added-companies-list option").sort(function(a, b) {
				return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			}))
			$("#added-companies-list").prepend("<option value=''>Companies Selected</option>");


		},

		delete: function() {
			var company = BlkLab.App.Company;
			var val = $('#added-companies-list option[value = "' + company + '"]:selected');
			var test = $('#added-companies-list').val();
			var check = 0;
			for(i=0; i<test.length; i++){
				if (test[i]==company) {
					check++;
				}
			}
			
			if (check==1) {
				if (confirm('You have chosen to remove ' + val.text() + ' from this Industry Segment.  However it is the Bank Holding Company currently being analysed.\n\nDo you wish to contine?')) {
					// Save it!
					!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

					$("#companies-list").html($("#companies-list option").sort(function(a, b) {
						return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
					}))
					$("#companies-list").prepend("<option value=''>Select Companies</option>");
				}
			} else {
				!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

				$("#companies-list").html($("#companies-list option").sort(function(a, b) {
					return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
				}))
				$("#companies-list").prepend("<option value=''>Select Companies</option>");
			}
		},

		changeSegment: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();
		},


		changeCompany: function() {
			$('#peerDetails').hide();
			BlkLab.App.Company = this.value;
			BlkLab.Storage.set('company', this.value);
			BlkLab.App.IndividualDetailedMetricsController.actions.filterSegment();
			//BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();
			//BlkLab.App.IndividualDetailedMetricsController.actions.filterSegment();
		},

		changeScreen: function() {
			$('#peerDetails').hide();
			BlkLab.App.Screen = this.value;
			BlkLab.Storage.set('screen', this.value);
			BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();
		},

		changeMetric: function() {
			$('#peerDetails').hide();
			BlkLab.App.Metric_Code = _$(this).data('metric');
			BlkLab.Storage.set('metric', _$(this).data('metric'));
			BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();
		},

		changeType: function() {
			BlkLab.App.Actuals = this.value == 'ACT' ? true : false;
			var base = '/api/graphs/individual/xy/pct';
			if (BlkLab.App.Actuals) {
				base = '/api/graphs/individual/xy';
			}

			BlkLab.get({
				url: base + '?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);
				if (chartData.length > 0) {
					var chart = new AmCharts.AmXYChart();
					chart.addClassNames = true;
					chart.classNamePrefix = "amcharts";
					chart.sequencedAnimation = true;
					chart.startEffect = "easeInSine";
					chart.startDuration = 1;
					chart.pathToImages = "amcharts/images";
					chart.marginRight = 1;
					chart.dataProvider = chartData;
					chart.export = {
						enabled: true
					};

					var YAxisTitle = chartData[0].yaxis;
					var XAxisTitle = chartData[0].xaxis;
					var YAxisAvg = chartData[0].yaxisavg;
					var XAxisAvg = chartData[0].xaxisavg;
					var metric_name = chartData[0].metric_name;
					var YAxisPctAvg = 50;
					var XAxisPctAvg = 50;
					var YHigher_Good_or_Bad = chartData[0].yaxishgb;
					var XHigher_Good_or_Bad = chartData[0].xaxishgb;
					var period = chartData[0].period;
					var segment_name = chartData[0].segment_name;

					chart.titles = [{
						text: metric_name + " drivers (" + period + ")",
						bold: true,
						size: 14
					}, {
						text: "Industry segment: " + segment_name,
						bold: false,
						size: 12
					}];

					var valueAxis = new AmCharts.ValueAxis();
					valueAxis.title = YAxisTitle;
					valueAxis.baseValue = YAxisPctAvg;
					valueAxis.titleBold = false;
					valueAxis.position = "left";
					valueAxis.inside = false;
					valueAxis.autoGridCount = false;
					valueAxis.gridCount = 25;
					valueAxis.minMaxMultiplier = 1;
					valueAxis.gridAplha = 0.2;
					valueAxis.gridThickness = 0;
					valueAxis.labelFrequency = 5;
					valueAxis.includeGuidesInMinMax = false;
					if (!BlkLab.App.Actuals) {
						valueAxis.reversed = false;
					} else {
						valueAxis.reversed = (YHigher_Good_or_Bad == '1');
					}
					chart.addValueAxis(valueAxis);


					var valueAxis2 = new AmCharts.ValueAxis();
					valueAxis2.baseValue = XAxisPctAvg;
					valueAxis2.title = XAxisTitle;
					valueAxis2.autoWrap = false;
					valueAxis2.titleBold = false;
					valueAxis2.position = "bottom";
					valueAxis2.inside = false;
					valueAxis2.autoGridCount = false;
					valueAxis2.gridCount = 50;
					valueAxis2.minMaxMultiplier = 1.05;
					valueAxis2.gridAplha = 0.2;
					valueAxis2.gridThickness = 0;
					valueAxis2.labelFrequency = 5;
					valueAxis2.includeGuidesInMinMax = false;
					if (!BlkLab.App.Actuals) {
						valueAxis2.reversed = false;
					} else {
						valueAxis2.reversed = (XHigher_Good_or_Bad == '1');
					}
					chart.addValueAxis(valueAxis2);

					var guide = new AmCharts.Guide();
					if (!BlkLab.App.Actuals) {
						guide.value = YAxisPctAvg;
					} else {
						guide.value = YAxisAvg;
					}
					guide.lineColor = "Gray";
					guide.label = "Avg: 50%";
					guide.inside = true;
					guide.lineThickness = 1;
					valueAxis.addGuide(guide);

					var guide2 = new AmCharts.Guide();
					if (!BlkLab.App.Actuals) {
						guide2.value = XAxisPctAvg;
					} else {
						guide2.value = XAxisAvg;
					}
					guide2.lineColor = "Gray";
					guide2.label = "Avg: 50%";
					guide2.inside = true;
					guide2.labelRotation = 90;
					guide2.lineThickness = 1;
					valueAxis2.addGuide(guide2);

					var graph = new AmCharts.AmGraph();
					graph.bullet = "round";
					graph.animationPlayed = false;
					graph.xField = "x";
					graph.yField = "y";
					graph.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
					graph.valueField = "value";
					graph.lineAlpha = 0;
					graph.colorField = "color";
					graph.bulletBorderColor = "#0489d6";
					graph.bulletBorderThickness = 2;
					graph.maxBulletSize = 10;
					chart.addGraph(graph);


					var graph2 = new AmCharts.AmGraph();
					graph2.id = "company";
					graph.animcationPlayed = false;
					graph2.bullet = "round";
					graph2.classNameField = "lastBullet";
					graph2.xField = "x2";
					graph2.yField = "y2";
					graph2.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
					graph2.valueField = "value2";
					graph2.lineAlpha = 0.2;
					graph2.colorField = "color";
					graph2.bulletBorderColor = "Black";
					graph2.bulletBorderAlpha = 1;
					graph2.bulletBorderThickness = 0;
					graph2.maxBulletSize = 12;
					chart.addGraph(graph2);

					var legend = new AmCharts.AmLegend();
					legend.position = "bottom";
					legend.verticalGap = 2;
					legend.align = "center";
					legend.data = [{
						title: metric_name + ":<br>",
						color: "white",
						markerType: "none"
					}, {
						title: "1st Quartile",
						color: "Green",
						markerType: "round"
					}, {
						title: "2nd Quartile",
						color: "LightGreen",
						markerType: "round"
					}, {
						title: "3rd Quartile",
						color: "Orange",
						markerType: "round"
					}, {
						title: "4th Quartile",
						color: "Red",
						markerType: "round"
					}];
					legend.equalWidths = false;
					legend.spacing = 5;
					legend.valueWidth = 0;
					legend.marginLeft = 0;
					legend.marginRight = 0;
					legend.fontSize = 10;
					legend.markerSize = 10;

					chart.addLegend(legend);


					chart.write("xydiv");
					_$('#xydiv').show();
					_$('#XY_Radio').show();
				} else {
					_$('#xydiv').hide();
					_$('#XY_Radio').hide();
				}

			}, function(http) {
				BlkLab.Security.handle(http);
			});

		},

		loadMetrics: function() {

			BlkLab.get({
				url: '/api/individual/segment/screen?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen + '&metric_code=' + BlkLab.App.Metric_Code
			}).then(function(http) {
				var results = JSON.parse(http.response);
				_$("#data").innerHTML = results.html;
				$('.donut').peity('donut');

				if (results.segment) {
					BlkLab.App.Segment = results.segment;
					BlkLab.Storage.set('segment', results.segment);
				}

				_$('#segment-list').value = BlkLab.App.Segment;
				//_$('#industry_segment').innerHTML = results.segmentDesc;
				$('#peerDetails').hide();
				_$('#chart-holder').hide();
				BlkLab.App.IndividualDetailedMetricsController.refreshActions();
			}, function(http) {
				BlkLab.Security.handle(http);
			});
		},

		showGraphs: function() {
			var self = BlkLab.App.IndividualDetailedMetricsController;
			var ele = _$(this);
			var table = ele.parent.parent;
			var header = table.children_by_tag('tr').first().cloneNode(true);
			var row = ele.cloneNode(true);
			var tbl = BlkLab.create('table');
			tbl.append(header);
			tbl.append(row);


			BlkLab.App.Metric = ele.data('id');

			_$("chartdiv").innerHTML = '';
			_$("bardiv").innerHTML = '';
			_$("xydiv").innerHTML = '';
			_$("spiderdiv").innerHTML = '';

			if (self.lastSel) {
				self.lastSel.remove_class('selected');
			}

			ele.add_class('selected');
			self.lastSel = ele;
			/*
			            BlkLab.get({
			                url: '/api/graphs/individual/spider?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&metric=' + BlkLab.App.Metric
			            }).then(function(http){
			                var chartData = JSON.parse(http.response);
							
			                if(chartData.length > 0){
			                    var chart = AmCharts.makeChart("spiderdiv", {
			                        "type": "radar",
			                        "theme": "none",
			                        "dataProvider": chartData,
			                        "valueAxes": [{
			                        "gridType": "circles",
			                        "minimum": 0,
			                        "maximum": 1,
			                        "autoGridCount": false,
			                        "axisAlpha": 0.2,
			                        "fillAlpha": 0.05,
			                        "fillColor": "#FFFFFF",
			                        "gridAlpha": 0.08,

			                        "position": "left"
			                        }],
			                        "startDuration": 1,
			                        "graphs": [{
			                        "balloonText": "[[metric]]: [[Value]]",
			                        "bullet": "round",
			                        "fillAlphas": 0.3,
			                        "valueField": "Value"
			                        }],
			                        "categoryField": "metric"
			                    });

			                    // WRITE

			                    chart.write("spiderdiv");
			                    _$('#spiderdiv').show();
			                    //self.refreshActions();
			                }else{
			                    _$('#spiderdiv').hide();
			                }
			            }, function(http){
			                BlkLab.Security.handle(http, true);
			            });
			*/

			var base = '/api/graphs/individual/xy/pct';
			if (BlkLab.App.Actuals) {
				base = '/api/graphs/individual/xy';
			}

			BlkLab.get({
				url: base + '?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);
				////alert(JSON.stringify(chartData));
				if (chartData.length > 0) {
					var chart = new AmCharts.AmXYChart();
					chart.addClassNames = true;
					chart.classNamePrefix = "amcharts";
					chart.sequencedAnimation = true;
					chart.startEffect = "easeInSine";
					chart.startDuration = 1;
					chart.pathToImages = "amcharts/images";
					chart.marginRight = 1;
					chart.dataProvider = chartData;
					chart.export = {
						enabled: true
					};

					var YAxisTitle = chartData[0].yaxis;
					var XAxisTitle = chartData[0].xaxis;
					var YAxisAvg = chartData[0].yaxisavg;
					var XAxisAvg = chartData[0].xaxisavg;
					var metric_name = chartData[0].metric_name;
					var YAxisPctAvg = 50;
					var XAxisPctAvg = 50;
					var YHigher_Good_or_Bad = chartData[0].yaxishgb;
					var XHigher_Good_or_Bad = chartData[0].xaxishgb;
					var period = chartData[0].period;
					var segment_name = chartData[0].segment_name;


					chart.titles = [{
						text: metric_name + " drivers (" + period + ")",
						bold: true,
						size: 14
					}, {
						text: "Industry segment: " + segment_name,
						bold: false,
						size: 12
					}];

					var valueAxis = new AmCharts.ValueAxis();
					valueAxis.title = YAxisTitle;
					valueAxis.baseValue = YAxisAvg;
					valueAxis.titleBold = false;
					valueAxis.position = "left";
					valueAxis.inside = false;
					valueAxis.autoGridCount = false;
					valueAxis.gridCount = 25;
					valueAxis.minMaxMultiplier = 1.2;
					valueAxis.gridAplha = 0.2;
					valueAxis.gridThickness = 0;
					valueAxis.labelFrequency = 5;
					valueAxis.includeGuidesInMinMax = false;
					if (!BlkLab.App.Actuals) {
						valueAxis.reversed = false;
					} else {
						valueAxis.reversed = (YHigher_Good_or_Bad == '1');
					}
					chart.addValueAxis(valueAxis);


					var valueAxis2 = new AmCharts.ValueAxis();
					valueAxis2.baseValue = XAxisAvg;
					valueAxis2.title = XAxisTitle;
					valueAxis2.autoWrap = false;
					valueAxis2.titleBold = false;
					valueAxis2.position = "bottom";
					valueAxis2.inside = false;
					valueAxis2.autoGridCount = false;
					valueAxis2.gridCount = 50;
					valueAxis2.minMaxMultiplier = 1.2;
					valueAxis2.gridAplha = 0.2;
					valueAxis2.gridThickness = 0;
					valueAxis2.labelFrequency = 5;
					valueAxis2.includeGuidesInMinMax = false;
					if (!BlkLab.App.Actuals) {
						valueAxis2.reversed = false;
					} else {
						valueAxis2.reversed = (XHigher_Good_or_Bad == '1');
					}
					chart.addValueAxis(valueAxis2);

					var guide = new AmCharts.Guide();
					if (!BlkLab.App.Actuals) {
						guide.value = YAxisPctAvg;
					} else {
						guide.value = YAxisAvg;
					}
					guide.lineColor = "Gray";
					guide.label = "Avg: " + YAxisAvg;
					guide.inside = true;
					guide.lineThickness = 1;
					valueAxis.addGuide(guide);

					var guide2 = new AmCharts.Guide();
					if (!BlkLab.App.Actuals) {
						guide2.value = XAxisPctAvg;
					} else {
						guide2.value = XAxisAvg;
					}
					guide2.lineColor = "Gray";
					guide2.label = "Avg: " + XAxisAvg;
					guide2.inside = true;
					guide2.labelRotation = 90;
					guide2.lineThickness = 1;
					valueAxis2.addGuide(guide2);

					var graph = new AmCharts.AmGraph();
					graph.bullet = "round";
					graph.animationPlayed = false;
					graph.xField = "x";
					graph.yField = "y";
					graph.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
					graph.valueField = "value";
					graph.lineAlpha = 0;
					graph.colorField = "color";
					graph.bulletBorderColor = "#0489d6";
					graph.bulletBorderThickness = 2;
					graph.maxBulletSize = 10;
					chart.addGraph(graph);


					var graph2 = new AmCharts.AmGraph();
					graph2.id = "company";
					graph2.bullet = "round";
					graph2.animationPlayed = false;
					graph2.classNameField = "lastBullet";
					graph2.xField = "x2";
					graph2.yField = "y2";
					graph2.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
					graph2.valueField = "value2";
					graph2.lineAlpha = 0.2;
					graph2.colorField = "color";
					graph2.bulletBorderColor = "Black";
					graph2.bulletBorderAlpha = 1;
					graph2.bulletBorderThickness = 0;
					graph2.maxBulletSize = 12;
					chart.addGraph(graph2);

					var legend = new AmCharts.AmLegend();
					legend.position = "bottom";
					legend.verticalGap = 2;
					legend.align = "center";
					legend.data = [{
						title: metric_name + ":<br>",
						color: "white",
						markerType: "none"
					}, {
						title: "1st Quartile",
						color: "Green",
						markerType: "round"
					}, {
						title: "2nd Quartile",
						color: "LightGreen",
						markerType: "round"
					}, {
						title: "3rd Quartile",
						color: "Orange",
						markerType: "round"
					}, {
						title: "4th Quartile",
						color: "Red",
						markerType: "round"
					}];
					legend.equalWidths = false;
					legend.spacing = 5;
					legend.valueWidth = 0;
					legend.marginLeft = 0;
					legend.marginRight = 0;
					legend.fontSize = 10;
					legend.markerSize = 10;

					chart.addLegend(legend);
					chart.write("xydiv");
					_$('#xydiv').show();
					_$('#XY_Radio').show();
				} else {
					_$('#xydiv').hide();
					_$('#XY_Radio').hide();
				}

			}, function(http) {
				BlkLab.Security.handle(http, true);
			});


			BlkLab.get({
				url: '/api/graphs/individual/line?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);
				var company_name = chartData[0].Company;
				var format = chartData[0].format;
				var metric = chartData[0].metric;
				var period_start = chartData[0].Period;
				var period_end = chartData[(chartData.length - 1)].Period;


				// SERIAL CHART
				var chart = new AmCharts.AmSerialChart();
				chart.pathToImages = "http://www.amcharts.com/lib/images/";
				chart.dataProvider = chartData;
				chart.startDuration = 1;
				chart.startEffect = "elastic";
				chart.categoryField = "Period";
				chart.handDrawn = false;
				chart.export = {
					enabled: true
				};
				chart.titles = [{
					text: company_name,
					bold: true,
					size: 14
				}, {
					text: metric + ": " + period_start + " - " + period_end,
					bold: false,
					size: 12
				}];
				

				// Category Axis

				var categoryAxis = chart.categoryAxis;
				categoryAxis.gridAlpha = 0;

				var valueAxis = new AmCharts.ValueAxis();
				if (format == "%") {
					valueAxis.unit = "%";
				} else if (format == "$") {
					valueAxis.unit = "$";
				}
				if (format == "%") {
					valueAxis.Position = "right";
				} else {
					valueAxis.unitPosition = "left";
				}
				valueAxis.gridAlpha = 1;
				valueAxis.gridCount = 0;
				valueAxis.gridThickness = 0;
				valueAxis.gridColor = "Gray";
				valueAxis.baseValue = 0;
				chart.addValueAxis(valueAxis);


				var graph3 = new AmCharts.AmGraph();
				graph3.valueField = "Top";
				graph3.data_labels = "Percents";
				graph3.animationPlayed = true;
				graph3.type = "line";
				graph3.lineColor = "Green";
				graph3.title = "75th Percentile";
				graph3.lineThickness = 2;
				graph3.lineAlpha = 0;
				graph3.bullet = "round";
				graph3.bulletSize = 6;
				graph3.bulletBorderThickness = 2;
				graph3.bulletBorderAlpha = 1;
				graph3.bulletBorderColor = "Green";
				graph3.bulletColor = "White";
				if (format == "%") {
					graph3.balloonText = "[[Top]]%";
				} else if (format == "$") {
					graph3.balloonText = "$[[Top]]";
				} else {
					graph3.balloonText = "[[Top]]";
				}
				chart.addGraph(graph3);

				var graph2 = new AmCharts.AmGraph();
				graph2.valueField = "Avg";
				graph2.type = "line";
				graph2.animationPlayed = true;
				graph2.lineColor = "Orange";
				graph2.lineThickness = 2;
				graph2.lineAlpha = 0;
				graph2.title = "Median";
				graph2.bullet = "round";
				graph2.bulletBorderThickness = 2;
				graph2.bulletBorderAlpha = 1;
				graph2.bulletBorderColor = "Orange";
				graph2.bulletColor = "White";
				graph2.bulletSize = 6;
				if (format == "%") {
					graph2.balloonText = "[[Avg]]%";
				} else if (format == "$") {
					graph2.balloonText = "$[[Avg]]";
				} else {
					graph2.balloonText = "[[Avg]]";
				}
				chart.addGraph(graph2);

				var graph4 = new AmCharts.AmGraph();
				graph4.valueField = "Bottom";
				graph4.data_labels = "Percents";
				graph4.animationPlayed = true;
				graph4.type = "line";
				graph4.lineColor = "DarkRed";
				graph4.title = "25th Percentile";
				graph4.lineThickness = 2;
				graph4.lineAlpha = 0;
				graph4.bullet = "round";
				graph4.bulletSize = 6;
				graph4.bulletBorderThickness = 2;
				graph4.bulletBorderAlpha = 1;
				graph4.bulletBorderColor = "DarkRed";
				graph4.bulletColor = "White";
				if (format == "%") {
					graph4.balloonText = "[[Bottom]]%";
				} else if (format == "$") {
					graph4.balloonText = "$[[Bottom]]";
				} else {
					graph4.balloonText = "[[Bottom]]";
				}
				chart.addGraph(graph4);



				var graph1 = new AmCharts.AmGraph();
				graph1.valueField = "Value";
				graph1.type = "column";
				graph1.lineColor = "Gray";
				graph1.animationPlayed = false;
				graph1.title = company_name;
				graph1.lineAlpha = 0.8;
				graph1.lineThickness = 1;
				graph1.lineThickness = 1;
				graph1.cornerRadiusTop = 0;
				graph1.fillColors = "Silver";
				graph1.fillAlphas = 1;
				// if(format == "%") {graph1.labelText  = "[[Value]]%";} else if(format == "$") {graph1.labelText  = "$[[Value]]";} else {graph1.labelText  = "[[Value]]";}
				if (format == "%") {
					graph1.balloonText = "[[Value]]%";
				} else if (format == "$") {
					graph1.balloonText = "$[[Value]]";
				} else {
					graph1.balloonText = "[[Value]]";
				}

				chart.addGraph(graph1);


				var legend = new AmCharts.AmLegend();
				legend.useGraphSettings = true;
				legend.position = "bottom";
				legend.verticalGap = 2;
				legend.align = "center";
				//legend.data = [{title: company_name, color: "Gray", markerType: "square", markerBorderColor: "Black", markerBorderThickness: 2},{title: "Top 25%", color: "Green", markerType: "round", markerBorderColor: "Black", markerBorderThickness: 1},{title:"Median", color: "Orange", markerType: "circle",  markerBorderColor: "Black", markerBorderThickness: 2}];
				legend.equalWidths = false;
				legend.spacing = 5;
				legend.valueWidth = 0;
				legend.fontSize = 10;
				legend.markerSize = 10;

				chart.addLegend(legend);


				chart.write("chartdiv");

			}, function(http) {
				BlkLab.Security.handle(http, true);
			});



			BlkLab.get({
				url: '/api/graphs/individual/bar?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);

				var format = chartData[0].format;
				var metric = chartData[0].Metric;
				var segment_name = chartData[0].Segment_Name;
				var company = BlkLab.App.Company;

				// SERIAL CHART
				chart = new AmCharts.AmSerialChart();
				chart.pathToImages = "http://www.amcharts.com/lib/images/";
				chart.dataProvider = chartData;
				chart.startDuration = 1;
				chart.startEffect = "elastic";
				chart.categoryField = "Company";
				chart.marginLeft = 200;
				chart.rotate = "true";
				chart.handDrawn = false;
				chart.usePrefixes = true;
				chart.export = {
					enabled: true
				};
				chart.titles = [{
					text: metric,
					bold: true,
					size: 14
				}, {
					text: "Industry Segment: " + segment_name,
					bold: false,
					size: 10
				}];

				var categoryAxis = chart.categoryAxis;
				categoryAxis.gridAlpha = 0;
				categoryAxis.fontSize = 8;
				categoryAxis.gridPosition = "start";
				categoryAxis.position = "left";
				categoryAxis.ignoreAxisWidth = true;
				categoryAxis.autoWrap = true;

				var valueAxis = new AmCharts.ValueAxis();
				if (format == "%") {
					valueAxis.unit = "%";
				} else if (format == "$") {
					valueAxis.unit = "$";
				}
				if (format == "%") {
					valueAxis.Position = "right";
				} else {
					valueAxis.unitPosition = "left";
				}
				//valueAxis.labelFunction = formatLabel;
				valueAxis.gridAlpha = 1;
				valueAxis.gridCount = 0;
				valueAxis.gridThickness = 0;
				valueAxis.gridColor = "Gray";
				valueAxis.baseValue = 0;

				chart.addValueAxis(valueAxis);

				var graph1 = new AmCharts.AmGraph();
				graph1.valueField = "Value";
				graph1.type = "column";
				graph1.colorField = 'Line_Color';
				graph1.lineColorField = "Color";
				graph1.lineThickness = 2;
				graph1.fillAlphas = 0.8;
				if (format == "%") {
					graph1.balloonText = "[[Company]]" + ":<br>" + "[[Value]]%";
				} else if (format == "$") {
					graph1.balloonText = "[[Company]]" + ":<br>" + "$[[Value]]";
				} else {
					graph1.balloonText = "[[Company]]" + ":<br>" + "[[Value]]";
				}
				// if(format == "%") {graph1.labelText  = "[[Value]]%";} else if(format == "$") {graph1.labelText  = "$[[Value]]";} else {graph1.labelText  = "[[Value]]";}
				graph1.labelBold = false;
				graph1.fontSize = 10;
				chart.addGraph(graph1);

				var legend = new AmCharts.AmLegend();
				legend.position = "bottom";
				legend.verticalGap = 2;
				legend.equalWidths = false;
				legend.align = "left";
				legend.marginLeft = 5;
				legend.marginRight = 5;
				legend.fontSize = 9;
				legend.valueWidth = 0;
				legend.data = [{
					title: "1st Quartile",
					color: "Green",
					markerType: "square"
				}, {
					title: "2nd Quartile",
					color: "LightGreen",
					markerType: "square"
				}, {
					title: "3rd Quartile",
					color: "Orange",
					markerType: "square"
				}, {
					title: "4th Quartile",
					color: "Red",
					markerType: "square"
				}];
				legend.markerSize = 8;
				chart.addLegend(legend);

				chart.write("bardiv");
			}, function(http) {
				BlkLab.Security.handle(http, true);
			});

			//var h =  _$('#segment_metrics').offsetHeight > 665 ?  (_$('#segment_metrics').offsetHeight - 46) : 665;
			var tbl_container = _$('#single-table');
			tbl_container.innerHTML = "";
			tbl_container.append(tbl);


			_$('#chart-holder').show();
			_$('#background').show();
			/*_$('#chart-holder').css({
			     left:  _$('#segment_metrics').offsetLeft + 404 + "px",
			     width:  _$('#segment_metrics').offsetWidth - 404 + "px",
			     height: h + 'px',
			     top: '812px'
			});

			_$('#holder').css({
			    height: h + 49 + 'px',
			})
			*/
			document.body.style.overflow = "hidden";

			var close = function() {
				_$('#chart-holder').hide();
				_$('#background').hide();
				ele.remove_class('selected');
				document.body.style.overflow = "auto";
			}

			_$('#background').click(close);
			_$('#close').click(close);
		}
	},

	render: function(params) {
		var self = this;
		var view = new BlkLab.App.IndividualDetailedMetricsView();
		BlkLab.get({
			url: '/api/individual/segment/screen?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen
		}).then(function(http) {
			var results = JSON.parse(http.response);


			view.model = {
				data: {
					table: results.html,
					segments: BlkLab.Filters.segments,
					companies: BlkLab.Filters.companies,
					screens: BlkLab.Filters.screens
				}
			}
			view.render('#content');
			$('.donut').peity('donut');

			var x = document.getElementById("peerMenu");
			       x.style.display = 'none';
				   
			var screen = BlkLab.Storage.get('screen');
			var segment = BlkLab.Storage.get('segment');
			var company = BlkLab.Storage.get('company');

			if (screen) {
				BlkLab.App.Screen = screen;
			}

			if (company) {
				BlkLab.App.Company = company;
			}

			if (segment) {
				BlkLab.App.Segment = segment;
			}
			$('#peerDetails').hide();

			//BlkLab.App.Segment = results.segment;
			//BlkLab.Storage.set('segment', results.segment);
			_$('#company-list').value = BlkLab.App.Company;
			_$('#screen-list').value = BlkLab.App.Screen;
			_$('#segment-list').value = BlkLab.App.Segment;
			//_$('#industry_segment').innerHTML = results.segmentDesc;

			self.actions.filterSegment();
			self.refreshActions();
		}, function(http) {
			BlkLab.Security.handle(http);
		});
	}
});

BlkLab.App.IndividualOutlookController = BlkLab.Controller.extend({
	actions: {

		peerMenu: function() {
			var x = document.getElementById("peerMenu");
			var y = document.getElementById("peerDetails");
			if (x.style.display == 'none') {
				x.style.display = 'block';

			} else {
				x.style.display = 'none';

			}
			if (y.style.display != 'none') {
				y.style.display = 'none';

			}


		},

		showPeers: function() {

			/*			if ($('#peerMenu').is(':visible')) {

							$('#peerMenu').hide();
						} else
			*/
			var self = BlkLab.App.IndividualController;


			BlkLab.get({
				url: '/api/individual/reportcard/' + BlkLab.App.Segment
			}).then(function(http) {
				var segmentDetails = JSON.parse(http.response);
				var segmentDetails = segmentDetails[0]["rows"];

				var length = segmentDetails.name.length;
				var html = "";
				html += '<div class="arrow_box" id="peerDetails">';
				html += '<header><div class="inner"><h2>INDUSTRY SEGMENT PARTICIPANTS</h2></div><div id="peerClose">Close X</div></header>';
				html += '<div class="arrow_box_contents"><table id="peerSetList"><tr>';
				html += '<TH align="center"><b>' + segmentDetails["segment"][0] + '</b></TH><TR>';

				for (l = 0; l < length; l++) {
					html += '<TR><TD>' + (l + 1) + ". " + segmentDetails["name"][l] + '<TD></TR>';
				}
				html += '</table></div></div>';
				$('#peerDetails').replaceWith(html);
				$('#peerDetails').show();

				var peerclose = function() {
					//var container = BlkLab.create('div');
					//container.id = "peerDetails";
					//_$('#peerDtls').append(container);
					$('#peerDetails').hide();
					$('#peerMenu').hide();

				}

				_$('#peerClose').click(peerclose);

			});
			//			}

		},

		filterSegment: function() {

			var company = BlkLab.App.Company;
			var token = BlkLab.Storage.get('access-token');
			
			var url;
			if(token==null){
				url ='/api/individual/companysegments/';
			} else {
				url = '/api/individual/companysegmentsauth/';
			}
			BlkLab.get({
				url: url + BlkLab.App.Company
			}).then(function(http) {
				var segments = JSON.parse(http.response);
				_$('#segment-list').length = 0;
				var test=0;
				for (var i = 0; i < segments.id.length; i++) {
					/*var opt = document.createElement('option');
					opt.value = segments.id[i];
					opt.innerHTML = segments.segment[i];
					_$('#segment-list').append(opt);*/
					if(segments.id[i]==BlkLab.App.Segment){
						test++;
					}
					$('#segment-list').append("<option value='" + segments.id[i] + "' data-name='" + segments.userId[i] + "'>" + segments.segment[i] + "</option>");
				}

			
				if (!BlkLab.App.Segment == null) {
					////alert(BlkLab.App.Segment);
					BlkLab.App.Segment = segments.id[0];
					BlkLab.Storage.set('segment',segments.id[0]);
				} else if(test == 0){
					BlkLab.App.Segment = segments.id[0];
					BlkLab.Storage.set('segment',segments.id[0]);
				}
				//BlkLab.Storage.set('segment', segments.id[0]);
				BlkLab.Storage.set('segment',BlkLab.App.Segment);
				_$('#segment-list').value = BlkLab.App.Segment;
				
				BlkLab.App.IndividualOutlookController.actions.loadCharts();
			

			});
		},


		changeSegmentEdit: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			_$('#modal-container').destroy();
			BlkLab.App.IndividualOutlookController.actions.editSegment();

		},



		editSegment: function() {
			//var check = _$('#segment-list').find('option:selected').attr("name");
			$('#peerMenu').hide();
			var view = new BlkLab.App.EditSegmentView();
			var segment = BlkLab.App.Segment;
			var check = _$('#segment-list option[value ="' + segment + '"]').data("name");

			if (check == 1) {
				alert("Unfortuantely you cannot edit a default industry segment. Please select another segment to edit")
			} else {

				BlkLab.get({
					url: '/api/industry/segmentCompanies/' + segment
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					//////alert(JSON.stringify(data));

					var segments = data.segment;
					var company = data.company;
					data = segment;

					view.model = {
						data: {
							data: segments
						}
					};


					var html = view.render();

					var container = BlkLab.create('div');
					container.innerHTML = html;
					container.id = "modal-container";
					_$('#content').append(container);
					_$('#editSegment-list').value = segment;
					for (var i = 0, len = company.length; i < len; i++) {
						if (company[i]['selected'] == 0) {
							$('#companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						} else {
							$('#added-companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						}
					}

					var sel = _$('#added-companies-list');
					var nonSel = _$('#companies-list');

					for (var i = 1, len = sel.options.length; i < len; i++) {
						var opt = sel.options[i];
						//////alert(opt.value);
						_$('#companies-list option[value = "' + opt.value + '"]').remove();

					}

					var test = $('#editSegment-list option[value ="' + segment + '"]').text();

					_$('#name').value = test;

					BlkLab.App.IndividualOutlookController.refreshActions();


				});
			}
		},

		addSegment: function() {
			$('#peerMenu').hide();
			var view = new BlkLab.App.AddSegmentView();
			BlkLab.get({
				url: '/api/industry/companies'
			}).then(function(http) {
				var data = JSON.parse(http.responseText);

				view.model = {
					data: {
						data: data
					}
				};

				var html = view.render();

				var container = BlkLab.create('div');
				container.innerHTML = html;
				container.id = "modal-container";
				_$('#content').append(container);

				var client = BlkLab.App.Company;
				for (var i = 0, len = data.length; i < len; i++) {
					if (data[i]['ID'] == client) {

						_$('#companies-list option[value = "' + data[i]['ID'] + '"]').remove();

						$('#added-companies-list').append("<option value='" + data[i]['ID'] + "'>" + data[i]['Name'] + "</option>");
					}
				}

				BlkLab.App.IndividualOutlookController.refreshActions();


			},function(http) {
					BlkLab.Security.handle(http, true);
				});
		},

		updateSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);
			var segment = BlkLab.App.Segment;
			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}

			var name = payload["name"];
			var selValue = $('#editSegment-list option[value ="' + segment + '"]').text();
			var txtValue = $('#name').val();
			if (selValue != txtValue) {
				payload["name"] = txtValue;
			} else {
				payload["name"] = selValue;
			}


			payload["segment"] = segment;
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				alert("Please enter a segment name");
			} else if (opts.length < 2) {

				alert("Please select at least 2 participating companies");

			} else {


				BlkLab.post({
					url: '/api/industry/editSegment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);

					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndividualOutlookController.actions.filterSegment();
					//BlkLab.App.IndividualOutlookController.actions.loadCharts();

				});

				return false;
			}
		},

		createSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);

			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}


			var name = payload["name"];
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				alert("Please enter a segment name");
			} else if (opts.length < 3) {

				alert("Please select at least 2 participating companies");

			} else {
				BlkLab.post({
					url: '/api/industry/segment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#segment-list').append(opt);
					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndividualOutlookController.actions.filterSegment();
					//BlkLab.App.IndividualOutlookController.actions.loadCharts();

				});

				return false;
			}
		},

		cancel: function() {
			_$('#modal-container').destroy();
		},

		add: function() {
			var select = _$('#added-companies-list');
			select.options[0].remove();
			!$('#companies-list option:selected').remove().appendTo('#added-companies-list');
			$("#added-companies-list").html($("#added-companies-list option").sort(function(a, b) {
				return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			}))
			$("#added-companies-list").prepend("<option value=''>Companies Selected</option>");


		},

		delete: function() {
			var company = BlkLab.App.Company;
			var val = $('#added-companies-list option[value = "' + company + '"]:selected');
			var test = $('#added-companies-list').val();
			var check = 0;
			for(i=0; i<test.length; i++){
				if (test[i]==company) {
					check++;
				}
			}
			
			if (check==1) {
				if (confirm('You have chosen to remove ' + val.text() + ' from this Industry Segment.  However it is the Bank Holding Company currently being analysed.\n\nDo you wish to contine?')) {
					// Save it!
					!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

					$("#companies-list").html($("#companies-list option").sort(function(a, b) {
						return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
					}))
					$("#companies-list").prepend("<option value=''>Select Companies</option>");
				}
			} else {
				!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

				$("#companies-list").html($("#companies-list option").sort(function(a, b) {
					return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
				}))
				$("#companies-list").prepend("<option value=''>Select Companies</option>");
			}
		},

		changeSegment: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.App.IndividualOutlookController.actions.loadCharts();
		},

		changeCompany: function() {
			$('#peerDetails').hide();
			BlkLab.App.Company = this.value;
			BlkLab.Storage.set('company', this.value);
			BlkLab.App.IndividualOutlookController.actions.filterSegment();
			BlkLab.App.IndividualOutlookController.actions.loadCharts();
			//.App.IndividualOutlookController.actions.filterSegment();
		},

		changeScreen: function() {
			BlkLab.App.Screen = this.value;
			BlkLab.Storage.set('screen', this.value)
			BlkLab.App.IndividualOutlookController.actions.loadCharts();
		},

		loadCharts: function() {
			var self = BlkLab.App.IndividualOutlookController;

			_$("#peers_cht").innerHTML = "";
			_$("#pct_cht").innerHTML = "";
			_$("tradeoff_chrt").innerHTML = "";
			_$("#fgv_vco_chrt").innerHTML = "";
			_$("#TRS_chrt").innerHTML = "";
			_$("#hide").hide();
			_$("#hide1").hide();

			BlkLab.get({
				url: '/api/individual/assessment/assumptions?company=' + BlkLab.App.Company
			}).then(function(http) {
				var chartData = JSON.parse(http.response);

				Object.keys(chartData).forEach(function(key) {
					_$('#' + key).innerHTML = chartData[key];
				});
			}, function(http) {
				BlkLab.Security.handle(http, true);
			});


			BlkLab.get({
				url: '/api/individual/assessment/sp?company=' + BlkLab.App.Company
			}).then(function(http) {
				var chartData = JSON.parse(http.response);

				var chart = new AmCharts.AmSerialChart();
				chart.pathToImages = "http://www.amcharts.com/lib/images/";
				chart.dataProvider = chartData;
				chart.categoryField = "Period";
				chart.handDrawn = false;
				chart.height = "100%";
				chart.handDrawn = false;
				chart.columnWidth = 0.8;
				chart.startDuration = 1;
				chart.startEffect = "elastic";
				chart.export = {
					enabled: true
				};
				chart.titles = [{
					"text": chartData[0].Company,
					"size": 12
				}, {
					"text": "Estimated Share Price (" + chartData[0].Period + "-" + chartData[5].Period + ")",
					"size": 10
				}]

				var categoryAxis = chart.categoryAxis;
				categoryAxis.gridAlpha = 0;

				var valueAxis = new AmCharts.ValueAxis();
				valueAxis.unit = "$";
				valueAxis.unitPosition = "left";
				valueAxis.gridAlpha = 0.0;
				chart.addValueAxis(valueAxis);

				var graph1 = new AmCharts.AmGraph();
				graph1.valueField = "Share_Price";
				graph1.type = "column";
				graph1.lineColor = "Silver";
				graph1.fillAlphas = 1;
				graph1.labelText = "$[[Share_Price]]";
				graph1.balloonText = "$[[Share_Price]]";
				chart.addGraph(graph1);
				chart.write("TRS_chrt");

				self.refreshActions();
			}, function(http) {
				BlkLab.Security.handle(http, true);
			});
			x
			BlkLab.get({
				url: '/api/individual/assessment/peers?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment
			}).then(function(http) {
				var result = JSON.parse(http.response);
				//+'&segment='+BlkLab.App.Segment 
				var chartData = result.peers;

				//////alert(JSON.stringify(chartData));
				_$('#segment-list').value = chartData[0].SegmentId;
				//_$('#industry_segment').innerHTML = chartData[0].Segment;
				//
				BlkLab.App.Segment = chartData[0].SegmentId;
				BlkLab.Storage.set('segment', chartData[0].SegmentId);
				var format = chartData.length > 0 ? chartData[0].format : "%";
				var chart = new AmCharts.AmSerialChart();
				chart.pathToImages = "http://www.amcharts.com/lib/images/";
				chart.dataProvider = chartData;
				chart.categoryField = "Company";
				chart.rotate = "true";
				chart.addClassNames = true;
				chart.classNamePrefix = "amcharts";
				chart.sequencedAnimation = true;
				chart.startDuration = 1;
				chart.startEffect = "elastic";
				chart.handDrawn = false;
				chart.export = {
					enabled: true
				};

				var categoryAxis = chart.categoryAxis;
				categoryAxis.gridAlpha = 0;
				categoryAxis.fontSize = 9;
				categoryAxis.position = "left"

				var valueAxis = new AmCharts.ValueAxis();
				valueAxis.unit = "%";
				valueAxis.Position = "right";
				valueAxis.gridAlpha = 0.2;
				valueAxis.boldLabels = false;
				valueAxis.gridAlpha = 1;
				valueAxis.gridCount = 0;
				valueAxis.gridThickness = 0;
				valueAxis.gridColor = "Gray";
				valueAxis.baseValue = 0;
				valueAxis.minimum = -1;
				chart.addValueAxis(valueAxis);

				var graph1 = new AmCharts.AmGraph();
				graph1.id = "TRS";
				graph1.valueField = "TRS";
				graph1.type = "column";
				graph1.lineColorField = "color_peer";
				graph1.colorField = "color_peer";
				graph1.fillAlphas = 1;
				graph1.balloonText = "[[TRS]]%";
				graph1.labelText = "[[TRS]]%";
				graph1.classNameField = "classname";
				graph1.labelBold = false;
				graph1.fontSize = 10;
				chart.addGraph(graph1);
				chart.write("peers_cht");

				var chartData2 = result.percentile;
				//////alert(JSON.stringify(chartData2));
				var label_text;
				if (parseFloat(chartData2[1]["PCT_val"]).toFixed(2) == 1) {
					label_text = "Best among peers";
				} else if (parseFloat(chartData2[1]["PCT_val"]).toFixed(2) == 0) {
					label_text = "Last among peers";
				} else if (parseFloat(chartData2[1]["PCT_val"]).toFixed(2) >= 0.5) {
					label_text = "Top:" + parseFloat(chartData2[0].PCT_val * 100).toFixed(0) + "% of peers";
				} else {
					label_text = "Bottom:" + parseFloat(chartData2[1].PCT_val * 100).toFixed(0) + "% of peers";
				}
				var chart2 = new AmCharts.AmPieChart();
				chart2.pathToImages = "http://www.amcharts.com/lib/images/";
				chart2.dataProvider = chartData2;
				chart2.categoryField = "Period";
				chart2.startDuration = 2;
				chart2.startEffect = "easeOutSine";
				chart2.handDrawn = false;
				chart2.titleField = "Metric_Name";
				chart2.startDuration = 0;
				chart2.valueField = "PCT";
				chart2.labelRadius = -130;
				chart2.radius = "45%";
				chart2.innerRadius = "70%";
				chart2.outlineColor = "LightGray";
				chart2.outlineAlpha = 1;
				chart2.labelText = "";
				chart2.colorField = "colors";
				chart2.allLabels = [{
					"text": chartData2[1].Metric_Name + ":",
					"align": "center",
					"bold": true,
					"size": 12,
					"y": 100
				}, {
					"text": parseFloat(chartData2[0].Value).toFixed(2),
					"align": "center",
					"bold": true,
					"size": 16,
					"y": 115
				}, {
					"text": label_text,
					"align": "center",
					"bold": false,
					"size": 12,
					"y": 140
				}];
				chart2.export = {
					enabled: true
				};
				chart2.write("pct_cht");

				var chartTradeoffData = result.tradeoff;
				var chartTradeoff = new AmCharts.AmXYChart();
				chartTradeoff.pathToImages = "amchartTradeoffs/images";
				chartTradeoff.marginRight = 1;
				chartTradeoff.dataProvider = chartTradeoffData;
				chartTradeoff.export = {
					enabled: true
				};
				chartTradeoff.titles = [{
					text: "Top Quartile Shareholder Returns",
					bold: true,
					size: 14
				}, {
					text: "ROE vs. Equity Growth Rate Trade  Off",
					bold: false,
					size: 12
				}];

				var YAxisTitle = "ROE";
				var XAxisTitle = "Equity Growth Rate";

				var valueAxis = new AmCharts.ValueAxis();
				valueAxis.title = YAxisTitle;
				valueAxis.position = "left";
				valueAxis.inside = false;
				valueAxis.autoGridCount = false;
				valueAxis.gridCount = 50;
				valueAxis.gridAplha = 0.2;
				valueAxis.gridThickness = 0.1;
				valueAxis.minimum = 0;
				valueAxis.labelFrequency = 5;
				valueAxis.includeGuidesInMinMax = false;
				chartTradeoff.addValueAxis(valueAxis);
				var valueAxis2 = new AmCharts.ValueAxis();
				valueAxis2.title = XAxisTitle;
				valueAxis2.position = "bottom";
				valueAxis2.inside = false;
				valueAxis2.autoGridCount = false;
				valueAxis2.gridCount = 50;
				valueAxis2.gridAplha = 0.6;
				valueAxis2.gridThickness = 0.1;
				valueAxis2.labelFrequency = 5;
				valueAxis2.includeGuidesInMinMax = false;
				chartTradeoff.addValueAxis(valueAxis2);
				var graph = new AmCharts.AmGraph();
				graph.xField = "Growth";
				graph.yField = "ROE";
				graph.lineAlpha = 1;
				graph.bullet = "none";
				graph.lineColor = "DarkGreen";
				graph.fillColor = "DarkGreen";
				//graph.bulletSize= 1;
				chartTradeoff.addGraph(graph);

				var graph2 = new AmCharts.AmGraph();
				graph2.xField = "Current_Growth";
				graph2.yField = "Current_ROE";
				graph2.lineAlpha = 1;
				graph2.bullet = "round";
				graph2.label = "Current Position";
				graph2.lineColor = "Red";
				graph2.fillColor = "Red";
				graph2.labelText = "Today";
				graph2.labelPosition = "right";
				graph2.maxBulletSize = 10;
				chartTradeoff.addGraph(graph2);
				chartTradeoff.write("tradeoff_chrt");

				var chartVCOData = result.vco;
				var chartVCO = new AmCharts.AmSerialChart();
				chartVCO.pathToImages = "http://www.amchartVCOs.com/lib/images/";
				chartVCO.dataProvider = chartVCOData;
				chartVCO.categoryField = "Period";
				chartVCO.handDrawn = false;
				chartVCO.height = "100%";
				chartVCO.columnWidth = 0.8;
				chartVCO.export = {
					enabled: true
				};
				
				var categoryAxis = chartVCO.categoryAxis;
				categoryAxis.gridAlpha = 0;
				// Value Axis
				var valueAxis = new AmCharts.ValueAxis();
				valueAxis.stackType = "regular";
				valueAxis.unit = "%";
				valueAxis.unitPosition = "right";
				valueAxis.gridAlpha = 0;
				valueAxis.baseValue = 0;
				chartVCO.addValueAxis(valueAxis);
				var graph1 = new AmCharts.AmGraph();
				graph1.valueField = "VCO";
				graph1.type = "column";
				graph1.lineColor = "#9B1717";
				graph1.fillAlphas = 0.8;
				graph1.color = "White";
				graph1.labelText = "[[VCO]]%";
				graph1.balloonText = "VCO ([[Year]]):[[VCO]]%";
				graph1.showAllValueLabels = true;
				graph1.title = "Current Operations Value";
				chartVCO.addGraph(graph1);
				var graph2 = new AmCharts.AmGraph();
				graph2.valueField = "FGV";
				graph2.type = "column";
				graph2.lineColor = "#778242";
				graph2.fillAlphas = 0.6;
				graph2.color = "Black";
				graph2.labelText = "[[FGV]]%";
				graph2.balloonText = "FGV ([[Year]]):[[FGV]]%";
				graph2.title = "Future Growth Value";
				graph2.showAllValueLabels = true;
				chartVCO.addGraph(graph2)
				chartVCO.write("fgv_vco_chrt");

				self.refreshActions();
			}, function(http) {
				BlkLab.Security.handle(http, true);
			});


		}
	},

	render: function(params) {
		var view = new BlkLab.App.IndividualOutlookView();
		view.model = {
			data: {
				companies: BlkLab.Filters.companies,
				segments: BlkLab.Filters.segments,
				screens: BlkLab.Filters.screens
			}
		};
		view.render('#content');
		var x = document.getElementById("peerMenu");
		       x.style.display = 'none';
		var screen = BlkLab.Storage.get('screen');
		var company = BlkLab.Storage.get('company');
		var segment = BlkLab.Storage.get('segment');

		if (screen) {
			BlkLab.App.Screen = screen;
		}

		if (company) {
			BlkLab.App.Company = company;
		}

		if (segment) {
			BlkLab.App.Segment = segment;
		}

		_$('#company-list').value = company;
		_$('#segment-list').value = segment;
		_$('#screen-list').value = screen;
		$('.donut').peity('donut');
		$('#peerDetails').hide();
		this.actions.filterSegment();
		//this.actions.loadCharts();
		this.refreshActions();
	}
});

BlkLab.App.ER = 0;
BlkLab.App.ER2 = 0;
BlkLab.App.ER_Orig = 0;
BlkLab.App.LLR = 0;
BlkLab.App.LLR2 = 0;
BlkLab.App.LLR_Orig = 0;
BlkLab.App.AY = 0;
BlkLab.App.AY2 = 0;
BlkLab.App.AY_Orig = 0;
BlkLab.App.Lev = 0;
BlkLab.App.Lev2 = 0;
BlkLab.App.Lev_Orig = 0;
BlkLab.App.simulationSliders = {};
BlkLab.App.simulationSlidersKeys = {};
BlkLab.App.simulationSlidersValue = {};
BlkLab.App.simulationSlidersValue2 = {};
BlkLab.App.simulationSlidersValue_Orig = {};

BlkLab.App.simulationKeys = [
	"ER",
	"ER2",
	"ER_Orig",
	"LLR",
	"LLR2",
	"LLR_Orig",
	"AY",
	"AY2",
	"AY_Orig",
	"Lev",
	"Lev2",
	"Lev_Orig"
];

BlkLab.App.IndividualSimulationController = BlkLab.Controller.extend({


	actions: {

		resultsDiv: function() {

			var stickyEl = $('#results');
			var anchor = $('#anchor');
			var hold = stickyEl.offset().top;

			$(document).scroll(function() {

				var offset = stickyEl.offset().top;

				if ($(document).scrollTop() > offset) {
					stickyEl.addClass("sticky");
					anchor.height(stickyEl.outerHeight());
				}

				if ($(document).scrollTop() <= hold) {
					stickyEl.removeClass("sticky");
					anchor.height(0);
				}
			});
		},

		hide_tag: function() {
			$(document).mouseup(function(e) {
				var container = BlkLab.App.simulationSlidersKeys;
				$.each(container, function(key, value) {
					value = "#" + value + "_tag";
					if (!$(value).is(e.target) // if the target of the click isn't the container...
						&&
						$(value).has(e.target).length === 0) // ... nor a descendant of the container
					{
						$(value).hide();
					}
				});
			});
		},
		peerMenu: function() {
			var x = document.getElementById("peerMenu");
			var y = document.getElementById("peerDetails");
			if (x.style.display == 'none') {
				x.style.display = 'block';

			} else {
				x.style.display = 'none';

			}
			if (y.style.display != 'none') {
				y.style.display = 'none';

			}


		},

		showPeers: function() {

			/*			if ($('#peerMenu').is(':visible')) {

							$('#peerMenu').hide();
						} else
			*/
			var self = BlkLab.App.IndividualController;


			BlkLab.get({
				url: '/api/individual/reportcard/' + BlkLab.App.Segment
			}).then(function(http) {
				var segmentDetails = JSON.parse(http.response);
				var segmentDetails = segmentDetails[0]["rows"];

				var length = segmentDetails.name.length;
				var html = "";
				html += '<div class="arrow_box" id="peerDetails">';
				html += '<header><div class="inner"><h2>INDUSTRY SEGMENT PARTICIPANTS</h2></div><div id="peerClose">Close X</div></header>';
				html += '<div class="arrow_box_contents"><table id="peerSetList"><tr>';
				html += '<TH align="center"><b>' + segmentDetails["segment"][0] + '</b></TH><TR>';

				for (l = 0; l < length; l++) {
					html += '<TR><TD>' + (l + 1) + ". " + segmentDetails["name"][l] + '<TD></TR>';
				}
				html += '</table></div></div>';
				$('#peerDetails').replaceWith(html);
				$('#peerDetails').show();

				var peerclose = function() {
					//var container = BlkLab.create('div');
					//container.id = "peerDetails";
					//_$('#peerDtls').append(container);
					$('#peerDetails').hide();
					$('#peerMenu').hide();

				}

				_$('#peerClose').click(peerclose);

			});
			//			}

		},

		filterSegment: function() {

			var company = BlkLab.App.Company;
			var token = BlkLab.Storage.get('access-token');
			
			var url;
			if(token==null){
				url ='/api/individual/companysegments/';
			} else {
				url = '/api/individual/companysegmentsauth/';
			}
			BlkLab.get({
				url: url + BlkLab.App.Company
			}).then(function(http) {
				var segments = JSON.parse(http.response);
				_$('#segment-list').length = 0;
				var test=0;
				for (var i = 0; i < segments.id.length; i++) {
					/*var opt = document.createElement('option');
					opt.value = segments.id[i];
					opt.innerHTML = segments.segment[i];
					_$('#segment-list').append(opt);*/
					if(segments.id[i]==BlkLab.App.Segment){
						test++;
					}
					$('#segment-list').append("<option value='" + segments.id[i] + "' data-name='" + segments.userId[i] + "'>" + segments.segment[i] + "</option>");
				}


				if (!BlkLab.App.Segment == null) {
					////alert(BlkLab.App.Segment);
					BlkLab.App.Segment = segments.id[0];
					BlkLab.Storage.set('segment',segments.id[0]);
				} else if(test == 0){
					BlkLab.App.Segment = segments.id[0];
					BlkLab.Storage.set('segment',segments.id[0]);
				}
				//BlkLab.Storage.set('segment', segments.id[0]);
				BlkLab.Storage.set('segment',BlkLab.App.Segment);
				_$('#segment-list').value = BlkLab.App.Segment;
				
				BlkLab.App.IndividualSimulationController.actions.loadSimulation();
			

			});
		},


		changeSegmentEdit: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			_$('#modal-container').destroy();
			BlkLab.App.IndividualSimulationController.actions.editSegment();

		},



		editSegment: function() {
			//var check = _$('#segment-list').find('option:selected').attr("name");
			$('#peerMenu').hide();
			var view = new BlkLab.App.EditSegmentView();
			var segment = BlkLab.App.Segment;
			var check = _$('#segment-list option[value ="' + segment + '"]').data("name");

			if (check == 1) {
				alert("Unfortuantely you cannot edit a default industry segment. Please select another segment to edit")
			} else {

				BlkLab.get({
					url: '/api/industry/segmentCompanies/' + segment
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					//////alert(JSON.stringify(data));

					var segments = data.segment;
					var company = data.company;
					data = segment;

					view.model = {
						data: {
							data: segments
						}
					};


					var html = view.render();

					var container = BlkLab.create('div');
					container.innerHTML = html;
					container.id = "modal-container";
					_$('#content').append(container);
					_$('#editSegment-list').value = segment;
					for (var i = 0, len = company.length; i < len; i++) {
						if (company[i]['selected'] == 0) {
							$('#companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						} else {
							$('#added-companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						}
					}

					var sel = _$('#added-companies-list');
					var nonSel = _$('#companies-list');

					for (var i = 1, len = sel.options.length; i < len; i++) {
						var opt = sel.options[i];
						//////alert(opt.value);
						_$('#companies-list option[value = "' + opt.value + '"]').remove();

					}

					var test = $('#editSegment-list option[value ="' + segment + '"]').text();

					_$('#name').value = test;

					BlkLab.App.IndividualSimulationController.refreshActions();


				});
			}
		},

		addSegment: function() {
			$('#peerMenu').hide();
			var view = new BlkLab.App.AddSegmentView();
			BlkLab.get({
				url: '/api/industry/companies'
			}).then(function(http) {
				var data = JSON.parse(http.responseText);

				view.model = {
					data: {
						data: data
					}
				};

				var html = view.render();

				var container = BlkLab.create('div');
				container.innerHTML = html;
				container.id = "modal-container";
				_$('#content').append(container);

				var client = BlkLab.App.Company;
				for (var i = 0, len = data.length; i < len; i++) {
					if (data[i]['ID'] == client) {

						_$('#companies-list option[value = "' + data[i]['ID'] + '"]').remove();

						$('#added-companies-list').append("<option value='" + data[i]['ID'] + "'>" + data[i]['Name'] + "</option>");
					}
				}

				BlkLab.App.IndividualSimulationController.refreshActions();


			},function(http) {
					BlkLab.Security.handle(http, true);
				});
		},

		updateSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);
			var segment = BlkLab.App.Segment;
			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}

			var name = payload["name"];
			var selValue = $('#editSegment-list option[value ="' + segment + '"]').text();
			var txtValue = $('#name').val();
			if (selValue != txtValue) {
				payload["name"] = txtValue;
			} else {
				payload["name"] = selValue;
			}


			payload["segment"] = segment;
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				alert("Please enter a segment name");
			} else if (opts.length < 3) {

				alert("Please select at least 2 participating companies");

			} else {


				BlkLab.post({
					url: '/api/industry/editSegment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);

					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndividualSimulationController.actions.filterSegment();
					BlkLab.App.IndividualSimulationController.actions.loadSimulation();

				});

				return false;
			}
		},

		createSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);

			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}


			var name = payload["name"];
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				alert("Please enter a segment name");
			} else if (opts.length < 3) {

				alert("Please select at least 2 participating companies");

			} else {
				BlkLab.post({
					url: '/api/industry/segment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#segment-list').append(opt);
					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndividualSimulationController.actions.filterSegment();
					BlkLab.App.IndividualSimulationController.actions.loadSimulation();

				});

				return false;
			}
		},

		cancel: function() {
			_$('#modal-container').destroy();
		},

		add: function() {
			var select = _$('#added-companies-list');
			select.options[0].remove();
			!$('#companies-list option:selected').remove().appendTo('#added-companies-list');
			$("#added-companies-list").html($("#added-companies-list option").sort(function(a, b) {
				return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			}))
			$("#added-companies-list").prepend("<option value=''>Companies Selected</option>");


		},

		delete: function() {
			var company = BlkLab.App.Company;
			var val = $('#added-companies-list option[value = "' + company + '"]:selected');
			var test = $('#added-companies-list').val();
			var check = 0;
			for(i=0; i<test.length; i++){
				if (test[i]==company) {
					check++;
				}
			}
			
			if (check==1) {
				if (confirm('You have chosen to remove ' + val.text() + ' from this Industry Segment.  However it is the Bank Holding Company currently being analysed.\n\nDo you wish to contine?')) {
					// Save it!
					!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

					$("#companies-list").html($("#companies-list option").sort(function(a, b) {
						return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
					}))
					$("#companies-list").prepend("<option value=''>Select Companies</option>");
				}
			} else {
				!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

				$("#companies-list").html($("#companies-list option").sort(function(a, b) {
					return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
				}))
				$("#companies-list").prepend("<option value=''>Select Companies</option>");
			}
		},

		changeSegment: function() {
			BlkLab.App.Segment = this.value;
			//////alert(BlkLab.App.Segment);
			BlkLab.Storage.set('segment', this.value);
			BlkLab.App.IndividualSimulationController.actions.loadSimulation();
		},


		changeCompany: function() {
			$('#peerDetails').hide();
			var self = BlkLab.App.IndividualSimulationController;
			BlkLab.App.Company = this.value;
			BlkLab.Storage.set('company', this.value);
			
			BlkLab.App.IndividualSimulationController.actions.filterSegment();
		
			self.actions.collapseroaa();
			self.actions.collapsecoe();
			//BlkLab.App.IndividualSimulationController.actions.filterSegment();

		},

		update_slider: function() {
			var self = BlkLab.App.IndividualSimulationController;
			var ele = _$(this).getAttribute('id');

			var code = ele.replace("-slider", "");
			var index = BlkLab.App.simulationSlidersKeys.indexOf(code);
			BlkLab.App.simulationSlidersValue[index] = this.value / 10;
			if (code == "Leverage1") {
				_$('#' + "Leverage" + '-slider').value = _$('#' + "Leverage1" + '-slider').value;
				BlkLab.App["Leverage"][0] = this.value / 10;
				BlkLab.App["Leverage1"][0] = this.value / 10;
				HTML = '<div class="controls" blklab-click="slider_show" data-id="' + "Leverage" + '_tag"><div class="circlecontrol selected"><img src="/app/assets/images/graph-icon.png"></div></div>';
				HTML1 = '<div class="controls" blklab-click="slider_show" data-id="' + "Leverage1" + '_tag"><div class="circlecontrol selected"><img src="/app/assets/images/graph-icon.png"></div></div>';
				$('div[data-id=' + "Leverage" + '_tag]').replaceWith(HTML);
				$('div[data-id=' + "Leverage1" + '_tag]').replaceWith(HTML1);
				_$('#' + "Leverage" + '-delete').show();
				_$('#' + "Leverage1" + '-delete').show();

			} else if (code == "Leverage") {
				_$('#' + "Leverage1" + '-slider').value = _$('#' + "Leverage" + '-slider').value;
				BlkLab.App["Leverage"][0] = this.value / 10;
				BlkLab.App["Leverage1"][0] = this.value / 10;
				HTML = '<div class="controls" blklab-click="slider_show" data-id="' + "Leverage" + '_tag"><div class="circlecontrol selected"><img src="/app/assets/images/graph-icon.png"></div></div>';
				HTML1 = '<div class="controls" blklab-click="slider_show" data-id="' + "Leverage1" + '_tag"><div class="circlecontrol selected"><img src="/app/assets/images/graph-icon.png"></div></div>';
				$('div[data-id=' + "Leverage" + '_tag]').replaceWith(HTML);
				$('div[data-id=' + "Leverage1" + '_tag]').replaceWith(HTML1);
				_$('#' + "Leverage" + '-delete').show();
				_$('#' + "Leverage1" + '-delete').show();

			} else {
				BlkLab.App[code][0] = this.value / 10;
				HTML = '<div class="controls" blklab-click="slider_show" data-id="' + code + '_tag"><div class="circlecontrol selected"><img src="/app/assets/images/graph-icon.png"></div></div>';
				$('div[data-id=' + code + '_tag]').replaceWith(HTML);
				_$('#' + code + '-delete').show();
			}


			self.actions.updateSimulation();

		},

		removeWhatIf: function() {
			var self = BlkLab.App.IndividualSimulationController;
			var ele = _$(this).getAttribute('id');

			var code = ele.replace("-delete", "");
			if (code == "Leverage1" || code == "Leverage") {

				BlkLab.App["Leverage"][0] = BlkLab.App["Leverage" + "_Orig"][0];
				BlkLab.App["Leverage1"][0] = BlkLab.App["Leverage1" + "_Orig"][0];
				_$('#' + "Leverage" + '-slider').value = Math.round(BlkLab.App[code][0] * 10);
				_$('#' + "Leverage1" + '-slider').value = Math.round(BlkLab.App[code][0] * 10);
				_$('#' + "Leverage" + '-slider-output').style.display = 'none';
				_$('#' + "Leverage1" + '-slider-output').style.display = 'none';
				HTML = '<div class="controls" blklab-click="slider_show" data-id="' + "Leverage" + '_tag"><div class="circlecontrol light"><img src="/app/assets/images/graph-icon.png"></div></div>';
				HTML1 = '<div class="controls" blklab-click="slider_show" data-id="' + "Leverage1" + '_tag"><div class="circlecontrol light"><img src="/app/assets/images/graph-icon.png"></div></div>';
				$('div[data-id=' + "Leverage" + '_tag]').replaceWith(HTML);
				$('div[data-id=' + "Leverage1" + '_tag]').replaceWith(HTML1);
				_$('#' + "Leverage" + '-delete').hide();
				_$('#' + "Leverage1" + '-delete').hide();
			} else {
				BlkLab.App[code][0] = BlkLab.App[code + "_Orig"][0];
				_$('#' + code + '-slider').value = Math.round(BlkLab.App[code][0] * 10);
				_$('#' + code + '-slider-output').style.display = 'none';
				HTML = '<div class="controls" blklab-click="slider_show" data-id="' + code + '_tag"><div class="circlecontrol light"><img src="/app/assets/images/graph-icon.png"></div></div>';
				$('div[data-id=' + code + '_tag]').replaceWith(HTML);
				_$('#' + code + '-delete').hide();
			}


			self.actions.updateSimulation();
		},
		/*
		updateER: function(){
		    var self = BlkLab.App.IndividualSimulationController;
		    BlkLab.App.ER = this.value;


		   self.actions.updateSimulation();
		},

		updateLLR: function(){
		    var self = BlkLab.App.IndividualSimulationController;
		    BlkLab.App.LLR = this.value;
		    self.actions.updateSimulation();
		},

		updateAY: function(){
		    var self = BlkLab.App.IndividualSimulationController;
		    BlkLab.App.AY = this.value;
		    self.actions.updateSimulation();
		},

		updateLev: function(){
		    var self = BlkLab.App.IndividualSimulationController;
		    BlkLab.App.Lev = this.value;
		    self.actions.updateSimulation();
		}, */

		expandroaa: function() {
			_$('#plus-roaa-results').show();
			_$('#plus-roaa').hide();
			_$('#minus-roaa').show();
			_$('#plus-nim-results').hide();
			_$('#plus-er-results').hide();
			_$('#plus-llr-results').hide();
			_$('#plus-coe-results').hide();
			//            _$('#plus-otherequitygrowth-results').hide();

			_$('#plus-coe').show();
			_$('#minus-coe').hide();
			//            _$('#plus-otherequitygrowth').show();
			//            _$('#minus-otherequitygrowth').hide();
			_$('#minus-er').hide();
			_$('#plus-er').show();
			_$('#minus-llr').hide();
			_$('#plus-llr').show();
			_$('#minus-nim').hide();
			_$('#plus-nim').show();
			_$('#minus-nonintmargin').hide();
			_$('#plus-nonintmargin').show();

			_$('#plus-assetgrowth-results').hide();
			//            _$('#plus-assetgrowth').show();
			//            _$('#minus-assetgrowth').hide();



			//self.actions.updateSimulation();
		},

		collapseroaa: function() {

			_$('#plus-roaa-results').hide();
			_$('#plus-roaa').show();
			_$('#minus-roaa').hide();

		},

		/*        expandotherequitygrowth: function(){
		            _$('#plus-otherequitygrowth-results').show();
		            _$('#plus-otherequitygrowth').hide();
		            _$('#minus-otherequitygrowth').show();
		            _$('#plus-roaa-results').hide();
		            _$('#plus-coe-results').hide();


		            _$('#plus-coe').show();
		            _$('#minus-coe').hide();
		            _$('#plus-roaa').show();
		            _$('#minus-roaa').hide();
		            _$('#plus-assetgrowth-results').hide();
		            _$('#plus-assetgrowth').show();
		            _$('#minus-assetgrowth').hide();

		            //self.actions.updateSimulation();
		        },

		        collapseotherequitygrowth: function(){

		            _$('#plus-otherequitygrowth-results').hide();
		            _$('#plus-otherequitygrowth').show();
		            _$('#minus-otherequitygrowth').hide();
		            //self.actions.updateSimulation();
		        },
		*/
		expandcoe: function() {
			_$('#plus-roaa-results').hide();
			//            _$('#plus-otherequitygrowth-results').hide();
			_$('#plus-coe-results').show();
			_$('#plus-coe').hide();
			_$('#minus-coe').show();
			_$('#plus-roaa').show();
			_$('#minus-roaa').hide();
			//            _$('#plus-otherequitygrowth').show();
			//            _$('#minus-otherequitygrowth').hide();

			_$('#plus-assetgrowth-results').hide();
			//            _$('#plus-assetgrowth').show();
			//            _$('#minus-assetgrowth').hide();

		},

		collapsecoe: function() {
			_$('#plus-coe-results').hide();
			_$('#plus-coe').show();
			_$('#minus-coe').hide();
			//self.actions.updateSimulation();
		},
		/*
		        expandassetgrowth: function(){
		            _$('#plus-roaa-results').hide();
		//            _$('#plus-otherequitygrowth-results').hide();
		            _$('#plus-coe-results').hide();
		            _$('#plus-coe').show();
		            _$('#minus-coe').hide();
		            _$('#plus-roaa').show();
		            _$('#minus-roaa').hide();

		//            _$('#plus-otherequitygrowth').show();
		//            _$('#minus-otherequitygrowth').hide();

		            _$('#plus-assetgrowth-results').show();
		            _$('#plus-assetgrowth').hide();
		            _$('#minus-assetgrowth').show();

		            _$('#plus-wgtloangrowth-results').hide();
		            _$('#plus-wgtloangrowth').show();
		            _$('#minus-wgtloangrowth').hide();

		            _$('#plus-wgtreloangrowth').show();
		            _$('#minus-wgtreloangrowth').hide();

		            _$('#plus-wgtciloangrowth').show();
		            _$('#minus-wgtciloangrowth').hide();

		            _$('#plus-wgtotherloangrowth').show();
		            _$('#minus-wgtotherloangrowth').hide();

		        },

		        collapseassetgrowth: function(){
		            _$('#plus-assetgrowth-results').hide();
		            _$('#plus-assetgrowth').show();
		            _$('#minus-assetgrowth').hide();

		        },
		*/
		expandwgtloangrowth: function() {
			_$('#plus-wgtloangrowth-results').show();
			_$('#plus-wgtloangrowth').hide();
			_$('#minus-wgtloangrowth').show();

			_$('#plus-wgtreloangrowth').show();
			_$('#minus-wgtreloangrowth').hide();

			_$('#plus-wgtciloangrowth').show();
			_$('#minus-wgtciloangrowth').hide();

			_$('#plus-wgtotherloangrowth').show();
			_$('#minus-wgtotherloangrowth').hide();

		},

		collapsewgtloangrowth: function() {
			_$('#plus-wgtloangrowth-results').hide();
			_$('#plus-wgtloangrowth').show();
			_$('#minus-wgtloangrowth').hide();

		},

		expander: function() {

			_$('#plus-er-results').show();
			_$('#plus-nim-results').hide();
			_$('#plus-llr-results').hide();
			_$('#plus-nim').show();
			_$('#minus-nim').hide();
			_$('#plus-llr').show();
			_$('#minus-llr').hide();
			_$('#plus-er').hide();
			_$('#minus-er').show();
			_$('#plus-salaryer-results').hide();
			_$('#plus-salaryer').show();
			_$('#minus-salaryer').hide();
			_$('#plus-externaler-results').hide();
			_$('#plus-externaler').show();
			_$('#minus-externaler').hide();

			//self.actions.updateSimulation();
		},

		collapseer: function() {
			_$('#plus-er-results').hide();
			_$('#plus-er').show();
			_$('#minus-er').hide();
			//self.actions.updateSimulation();
		},


		expandllr: function() {
			_$('#plus-llr-results').show();
			_$('#plus-er-results').hide();
			_$('#plus-nim-results').hide();
			_$('#plus-nim').show();
			_$('#minus-nim').hide();
			_$('#plus-er').show();
			_$('#minus-er').hide();
			_$('#plus-llr').hide();
			_$('#minus-llr').show();

			//self.actions.updateSimulation();
		},

		collapsellr: function() {
			_$('#plus-llr-results').hide();
			_$('#plus-llr').show();
			_$('#minus-llr').hide();
			//self.actions.updateSimulation();
		},

		expandsalaryer: function() {

			_$('#plus-salaryer-results').show();
			_$('#plus-salaryer').hide();
			_$('#minus-salaryer').show();



			//self.actions.updateSimulation();
		},

		collapsesalaryer: function() {
			_$('#plus-salaryer-results').hide();
			_$('#plus-salaryer').show();
			_$('#minus-salaryer').hide();
			//self.actions.updateSimulation();
		},

		expandexternaler: function() {
			_$('#plus-externaler-results').show();
			_$('#plus-externaler').hide();
			_$('#minus-externaler').show();

			_$('#plus-salaryer-results').hide();
			_$('#plus-salaryer').show();
			_$('#minus-salaryer').hide();



			//self.actions.updateSimulation();
		},

		collapseexternaler: function() {
			_$('#plus-externaler-results').hide();
			_$('#plus-externaler').show();
			_$('#minus-externaler').hide();
			//self.actions.updateSimulation();
		},

		expandnim: function() {

			_$('#plus-nim-results').show();
			_$('#plus-grossintyield-results').hide();
			_$('#plus-costoffunds-results').hide();
			_$('#plus-er-results').hide();
			_$('#plus-llr-results').hide();
			_$('#plus-nim').hide();
			_$('#minus-nim').show();
			_$('#minus-grossintyield').hide();
			_$('#plus-grossintyield').show();
			_$('#minus-costoffunds').hide();
			_$('#plus-costoffunds').show();
			_$('#minus-er').hide();
			_$('#plus-er').show();
			_$('#minus-llr').hide();
			_$('#plus-llr').show();


			//self.actions.updateSimulation();
		},

		collapsenim: function() {
			_$('#plus-nim-results').hide();
			_$('#plus-nim').show();
			_$('#minus-nim').hide();
			//self.actions.updateSimulation();
		},

		expandgrossintyield: function() {
			_$('#plus-costoffunds').show();
			_$('#minus-costoffunds').hide();
			_$('#plus-costoffunds-results').hide();
			_$('#plus-grossintyield').hide();
			_$('#minus-grossintyield').show();
			_$('#plus-grossintyield-results').show();
			//self.actions.updateSimulation();
		},

		collapsegrossintyield: function() {
			_$('#plus-grossintyield').show();
			_$('#minus-grossintyield').hide();
			_$('#plus-grossintyield-results').hide();
		},

		expandcostoffunds: function() {
			_$('#plus-grossintyield').show();
			_$('#minus-grossintyield').hide();
			_$('#plus-grossintyield-results').hide();
			_$('#plus-costoffunds').hide();
			_$('#minus-costoffunds').show();
			_$('#plus-costoffunds-results').show();
			//self.actions.updateSimulation();
		},

		collapsecostoffunds: function() {
			_$('#plus-costoffunds').show();
			_$('#minus-costoffunds').hide();
			_$('#plus-costoffunds-results').hide();
		},

		slider_show: function() {
			var ele = _$(this).getAttribute('data-id');

			//ele = '#'+ele;
			if ($('#' + ele).is(':visible')) {
				_$('#' + ele).hide();
			} else {
				_$('#' + ele).show();
			}
		},

		loadSimulation: function() {
			var self = BlkLab.App.IndividualSimulationController;
			//////alert(BlkLab.App.Segment);
			//////alert(BlkLab.App.Segment);
			BlkLab.get({
				url: '/api/individual/scenario/sliders?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment
			}).then(function(http) {
				var result = JSON.parse(http.response);
				//
				BlkLab.App.simulationSliders = result;

				BlkLab.App.simulationSlidersKeys = result.Metric;

				BlkLab.App.simulationSlidersValue = result.Metric_Value;
				BlkLab.App.simulationSlidersValue2 = result.Metric_Value;
				BlkLab.App.simulationSlidersValue_Orig = result.Metric_Value;


				Object.keys(result).forEach(function(key) {
					if (BlkLab.App.simulationKeys.indexOf(key) != -1) {
						BlkLab.App[key] = result[key];
					}
				});



				var sliders = result;
				var metricLength = sliders["Metric"].length;

				//_$('#segment-list').value = sliders["segmentID"][0];
				//////alert(sliders["segmentDesc"][0]);
				//_$('#industry_segment').innerHTML = sliders["segmentDesc"][0];

				//////alert(BlkLab.App.Segment); 
				BlkLab.App.Segment = BlkLab.App.Segment;
				BlkLab.Storage.set('segment', BlkLab.App.Segment);

				//BlkLab.App.Segment = sliders["segmentID"][0];
				//BlkLab.Storage.set('segment', sliders["segmentID"][0]);
				$('#peerDetails').hide();
				var string = "";

				for (l = 0; l < metricLength; l++) {


					BlkLab.App[sliders["Metric"][l]] = [];
					BlkLab.App[sliders["Metric"][l] + "2"] = [];
					BlkLab.App[sliders["Metric"][l] + "_Orig"] = [];

					BlkLab.App[sliders["Metric"][l]].push(sliders["Metric_Value"][l]);
					BlkLab.App[sliders["Metric"][l] + "2"].push(sliders["Metric_Value"][l]);
					BlkLab.App[sliders["Metric"][l] + "_Orig"].push(sliders["Metric_Value"][l]);

					if (sliders["Metric_Value"][l] < sliders["segmentrank_25"][l]) {
						if (sliders["Metric_Value"][l] < 0) {
							min = (Math.round(sliders["Metric_Value"][l] * 10 * 2));

						} else {
							min = parseInt(Math.round(sliders["Metric_Value"][l] * 10 * 0.2)) - 100;
						}
					} else {
						if (sliders["segmentrank_25"][l] < 0) {
							min = parseInt(Math.round(sliders["segmentrank_25"][l] * 10 * 2));

						} else {
							min = parseInt(Math.round(sliders["segmentrank_25"][l] * 10 * 0.2)) - 100;
						}
					}

					if (sliders["Metric_Value"][l] > sliders["segmentrank_75"][l]) {
						max = parseInt(Math.round(sliders["Metric_Value"][l] * 10 * 2)) + 100;
					} else {
						max = parseInt(Math.round(sliders["segmentrank_75"][l] * 10 * 2)) + 100;
					}

					value = Math.round(sliders["Metric_Value"][l] * 10);

					//create the html for the metric tag
					var html_tag = "";

					html_tag += '<div class="circle light"><img src="/app/assets/images/graph-icon.png"></div>';
					html_tag += '<div class="col">';
					html_tag += '<label>' + sliders["Metric_Name"][l] + '</label><div id="' + sliders["Metric"][l] + '-delete" class= "delete" blklab-click="removeWhatIf" ><img src="/app/assets/images/delete.png"></div>';
					html_tag += '<div id="' + sliders["Metric"][l] + '-slider-output" class="tooltip"></div>';
					html_tag += '<input type="range" id="' + sliders["Metric"][l] + '-slider" min="' + min + '" max="' + max + '" value="' + value + '" blklab-click="update_slider" ';
					if (sliders["hgb"][l] == 1) {
						html_tag += 'class="reverse"  />';
					} else {
						html_tag += ' />';
					}
					html_tag += '<div id="' + sliders["Metric"][l] + '-years" class="buttons"></div>';
					html_tag += '</div>';


					var ele = _$('#' + sliders["Metric"][l] + '_tag');

					ele.innerHTML = html_tag;


					Slider = _$('#' + sliders["Metric"][l]);
					ele.hide();
					_$('#' + sliders["Metric"][l] + '-delete').hide();

				}






				//////alert(JSON.stringify(BlkLab.App));
				/*
				var erSlider= _$('#er-slider');
				erSlider.min = BlkLab.App.simulationSliders.min;
				erSlider.max = BlkLab.App.simulationSliders.max;
				erSlider.value = BlkLab.App.ER;


				var llrSlider = _$('#llr-slider');
				llrSlider.min = BlkLab.App.simulationSliders.LLRmin;
				llrSlider.max = BlkLab.App.simulationSliders.LLRmax;
				llrSlider.value = BlkLab.App.LLR;


				var aySlider = _$('#ay-slider');
				aySlider.min = BlkLab.App.simulationSliders.AYmin;
				aySlider.max = BlkLab.App.simulationSliders.AYmax;
				aySlider.value = BlkLab.App.AY;

				var levSlider = _$('#lev-slider');
				levSlider.min = BlkLab.App.simulationSliders.Levmin;
				levSlider.max = BlkLab.App.simulationSliders.Levmax;
				levSlider.value = BlkLab.App.Lev;
				*/

				//hide additional section results
				_$('#plus-roaa-results').hide();
				_$('#plus-coe-results').hide();
				//                _$('#plus-otherequitygrowth-results').hide();
				_$('#plus-assetgrowth-results').hide();




				//hide minus signs
				//                _$('#minus-otherequitygrowth').hide();
				_$('#minus-roaa').hide();
				_$('#minus-coe').hide();
				//                _$('#minus-assetgrowth').hide();

				//show plus signs
				//                _$('#plus-otherequitygrowth').show();
				_$('#plus-roaa').show();
				_$('#plus-coe').show();
				//                _$('#plus-assetgrowth').show();



				self.actions.updateSimulation();
			}, function(http) {
				BlkLab.Security.handle(http, true);
			});
		},

		updateSimulation: function() {
			var self = BlkLab.App.IndividualSimulationController;
			var slider_metrics = BlkLab.App.simulationSliders.Metric;
			var slider_values = BlkLab.App.simulationSliders.Metric_Value;

			var slider_length = slider_metrics.length;
			//////alert(JSON.stringify(slider_metrics));
			var qstring = '';

			for (s = 0; s < slider_length; s++) {
				qstring += "&" + slider_metrics[s] + "=" + BlkLab.App[slider_metrics[s]];
				qstring += "&" + slider_metrics[s] + "2=" + BlkLab.App[slider_metrics[s] + "2"];
				qstring += "&" + slider_metrics[s] + "_Orig=" + BlkLab.App[slider_metrics[s] + "_Orig"];
			}

			//var qstring = '&ER=' + BlkLab.App.ER + '&ER2=' + BlkLab.App.ER2 + '&ER_Orig=' +  BlkLab.App.ER_Orig + '&LLR=' + BlkLab.App.LLR + '&LLR2=' + BlkLab.App.LLR2 + '&LLR_Orig=' + BlkLab.App.LLR_Orig + '&AY=' + BlkLab.App.AY + '&AY2=' + BlkLab.App.AY2 + '&AY_Orig=' + BlkLab.App.AY_Orig + '&Lev=' + BlkLab.App.Lev + '&Lev2=' + BlkLab.App.Lev2 + '&Lev_Orig=' + BlkLab.App.Lev_Orig;
			//////alert(BlkLab.App.Segment);
			BlkLab.get({
				url: '/api/individual/scenario/forecast?company=' + BlkLab.App.Company + qstring + '&segment=' + BlkLab.App.Segment
			}).then(function(http) {
				var result = JSON.parse(http.response);

				var chartData = result;


				var length = chartData.length - 1;

				var current = length - 5;

				var outcomes = $('#simulation_outcomes');


				var HTML = ''
				HTML += '<div id = "simulation_outcomes" class="col">';
				if (chartData[current]["TR_5"] != null) {
					HTML += '<div class="simulation"><label> Total Returns (5 Yrs): </label> <span>' + chartData[current]["TR_5"] + '%<img src="/app/assets/images/outcome-arrow.png">' + chartData[length]["TR_5"] + '%</span></div>';
				}
				if (chartData[current]["actual_closing"] != null) {
					HTML += '<div class="simulation"><label> Share Price: </label> <span>$' + chartData[current]["actual_closing"] + '<img src="/app/assets/images/outcome-arrow.png">$' + chartData[length]["actual_closing"] + '</span></div>';
				}

				if (chartData[current]["Total_NI"] != null) {
					curr_ni = chartData[current]["Total_NI"] / 1000;
					curr_ni = curr_ni.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
					//curr_ni = curr_ni.replace(".00","");
					tgt_ni = chartData[length]["Total_NI"] / 1000;
					tgt_ni = tgt_ni.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
					//tgt_ni = tgt_ni.replace(".00","");
					HTML += '<div class="simulation"><label> Net Income (\'M): </label> <span>$' + curr_ni + '<img src="/app/assets/images/outcome-arrow.png">$' + tgt_ni + '</span></div>';
				}

				if (chartData[current]["Total_Assets"] != null) {
					curr_ni = chartData[current]["Total_Assets"] / 1000000;
					curr_ni = curr_ni.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
					//curr_ni = curr_ni.replace(".00","");

					tgt_ni = chartData[length]["Total_Assets"] / 1000000;
					tgt_ni = tgt_ni.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
					//tgt_ni = tgt_ni.replace(".00","");
					HTML += '<div class="simulation"><label> Total Assets (BN): </label> <span>$' + curr_ni + '<img src="/app/assets/images/outcome-arrow.png">$' + tgt_ni + '</span></div>';
				}

				HTML += '<div>';

				outcomes.replaceWith(HTML);



				var chart_tree_metrics = [
					"ROAE",
					"Operating_ROE",
					"Extra_Adj_Other_ROAA",
					"Extra_Adj_Other",
					"Op_Margin",
					"ROAA_Effective_Tax_Rate",
					"Capital_Utilization",
					"Efficiency_Ratio",
					"LLR",
					"Asset_Yield",
					"Leverage",
					"ROAA",
					"EA_Asset_Growth",
					//  "dividend_payout",
					"Cost_of_Capital",
					"spread",
					"equity_growth",
					// "equity_other_growth_rate",
					"mkt_cap",
					"Common_share_growth",
					"actual_closing",
					"dividend_yield",
					"op_roaa",
					"total_return_1",
					"EA_Mix",
					"net_int_margin",
					"non_int_margin",
					"gross_int_yield",
					"cost_of_funds_ea",
					"cost_of_funds",
					"ibl_ea_ratio",
					"int_yield_loans_wgt",
					"other_int_yield_wgt",
					"cost_of_deposits_wgt",
					"cost_of_other_borrowings_wgt",
					"loan_yield",
					"loan_lease_mix",
					"cost_of_deposits",
					"deposit_mix",
					"cost_of_other_funds",
					"Total_Asset_Growth_Rate",
					"Risk_Free_Rate",
					"Equity_Risk_Premium",
					"Beta",
					"shares_yield",
					"net_int_margin_grossed",
					"non_int_margin_grossed",
					"Leverage1",
					"Costs_EA",
					"Asset_Yield_EA",
					"salaryexpense",
					"gaexpense",
					"externalexpense",
					"salaryperfte",
					"eaperfte",
					"dataprocessingexpense",
					"advertisingexpense",
					"premisesexpense",
					"otherexpense",
					"llploans",
					"ncoloans",
					"llpnco",
					"llpea",
					"Asset_Yield_EA1",
					"loan_lease_mix1",
					"otherintyield",

				];

				var chart_tree_metrics_seg50 = [
					"\"ROAE_pct50\"",
					"Operating_ROE",
					"\"Extra_Adj_Other_ROAA_pct50\"",
					"Extra_Adj_Other",
					"\"Op_Margin_pct50\"",
					"\"ROAA_Effective_Tax_Rate_pct50\"",
					"Capital_Utilization",
					"\"Efficiency_Ratio_pct50\"",
					"\"LLR_pct50\"",
					"\"Asset_Yield_pct50\"",
					"\"Leverage_pct50\"",
					"\"ROAA_pct50\"",
					"\"EA_Asset_Growth_pct50\"",
					//   "\"Dividend_Payout_pct50\"",
					"\"Cost_of_Capital_pct50\"",
					"\"Spread_pct50\"",
					"\"Equity_Growth_Rate_pct50\"",
					//   "\"equity_other_growth_rate_pct50\"",
					"\"Mkt_Cap_pct50\"",
					"\"Common_share_growth_pct50\"",
					"actual_closing",
					"\"DY_1_pct50\"",
					"\"ROAA_Pre_Tax_Excl_Security_Gains_pct50\"",
					"\"TR_1_pct50\"",
					"\"EA_Mix_pct50\"",
					"\"Net_Int_Margin_pct50\"",
					"\"Non_Int_Yield_pct50\"",
					"\"Gross_Int_Inc_EA_Yield_pct50\"",
					"\"Int_Exp_EA_pct50\"",
					"\"Total_Int_Bearing_Liab_Cost_pct50\"",
					"ibl_ea_ratio",
					"\"Inc_Int_on_Loans_Leases_Yield_Weighted_pct50\"",
					"\"other_int_yield_wgt_pct50\"",
					"\"Int_Exp_Deposits_Cost_Wgt_pct50\"",
					"\"cost_of_other_borrowings_wgt\"",
					"\"Inc_Int_on_Loans_Leases_Yield_pct50\"",
					"\"EA_Loans_Leases_Mix_Yield_pct50\"",
					"\"Int_Exp_Deposits_Cost_pct50\"",
					"\"IBL_Deposits_Mix_pct50\"",
					"\"cost_of_other_funds_pct50\"",
					"\"Total_Asset_Growth_Rate_pct50\"",
					"Risk_Free_Rate",
					"Equity_Risk_Premium",
					"\"Beta_pct50\"",
					"\"SP_1_pct50\"",
					"\"net_int_margin_grossed_pct50\"",
					"\"non_int_margin_grossed_pct50\"",
					"\"Leverage_pct50\"",
					"\"Costs_Avg_EA_Dep_pct50\"",
					"\"Op_Inc_Avg_EA_Dep_pct50\"",
					"\"Exp_Salary_Benefits_Avg_EA_Dep_pct50\"",
					"\"gaexpense_pct50\"",
					"\"externalexpense_pct50\"",
					"\"Exp_Salary_Benefits_Per_FTE_pct50\"",
					"\"Avg_EA_Dep_Per_FTE_pct50\"",
					"\"Exp_Data_Process_Avg_EA_Dep_pct50\"",
					"\"Exp_Advertising_Avg_EA_Dep_pct50\"",
					"\"Exp_Premises_Fixed_Assets_Inc_pvt50\"",
					"\"otherexpense_pct50\"",
					"\"LLP_Loans_pct50\"",
					"\"ncoloans_pct50\"",
					"\"LLP_NCO_pct50\"",
					"\"llpea_pct50\"",
					"\"Op_Inc_Avg_EA_Dep_pct50\"",
					"\"EA_Loans_Leases_Mix_Yield_pct50\"",
					"\"otherintyield_pct50\"",
				];

				var chart_tree_metrics_seg75 = [
					"\"ROAE_pct75\"",
					"Operating_ROE",
					"\"Extra_Adj_Other_ROAA_pct75\"",
					"Extra_Adj_Other",
					"\"Op_Margin_pct75\"",
					"\"ROAA_Effective_Tax_Rate_pct75\"",
					"Capital_Utilization",
					"\"Efficiency_Ratio_pct75\"",
					"\"LLR_pct75\"",
					"\"Asset_Yield_pct75\"",
					"\"Leverage_pct75\"",
					"\"ROAA_pct75\"",
					"\"EA_Asset_Growth_pct75\"",
					//    "\"Dividend_Payout_pct75\"",
					"\"Cost_of_Capital_pct75\"",
					"\"Spread_pct75\"",
					"\"Equity_Growth_Rate_pct75\"",
					//   "\"equity_other_growth_rate_pct75\"",
					"\"Mkt_Cap_pct75\"",
					"\"Common_share_growth_pct75\"",
					"actual_closing",
					"\"DY_1_pct75\"",
					"\"ROAA_Pre_Tax_Excl_Security_Gains_pct75\"",
					"\"TR_1_pct75\"",
					"\"EA_Mix_pct75\"",
					"\"Net_Int_Margin_pct75\"",
					"\"Non_Int_Yield_pct75\"",
					"\"Gross_Int_Inc_EA_Yield_pct75\"",
					"\"Int_Exp_EA_pct75\"",
					"\"Total_Int_Bearing_Liab_Cost_pct75\"",
					"ibl_ea_ratio",
					"\"Inc_Int_on_Loans_Leases_Yield_Weighted_pct75\"",
					"\"other_int_yield_wgt_pct75\"",
					"\"Int_Exp_Deposits_Cost_Wgt_pct75\"",
					"\"cost_of_other_borrowings_wgt\"",
					"\"Inc_Int_on_Loans_Leases_Yield_pct75\"",
					"\"EA_Loans_Leases_Mix_Yield_pct75\"",
					"\"Int_Exp_Deposits_Cost_pct75\"",
					"\"IBL_Deposits_Mix_pct75\"",
					"\"cost_of_other_funds_pct75\"",
					"\"Total_Asset_Growth_Rate_pct75\"",
					"Risk_Free_Rate",
					"Equity_Risk_Premium",
					"\"Beta_pct75\"",
					"\"SP_1_pct75\"",
					"\"net_int_margin_grossed_pct75\"",
					"\"non_int_margin_grossed_pct75\"",
					"\"Leverage_pct75\"",
					"\"Costs_Avg_EA_Dep_pct75\"",
					"\"Op_Inc_Avg_EA_Dep_pct75\"",
					"\"Exp_Salary_Benefits_Avg_EA_Dep_pct75\"",
					"\"gaexpense_pct75\"",
					"\"externalexpense_pct75\"",
					"\"Exp_Salary_Benefits_Per_FTE_pct75\"",
					"\"Avg_EA_Dep_Per_FTE_pct75\"",
					"\"Exp_Data_Process_Avg_EA_Dep_pct75\"",
					"\"Exp_Advertising_Avg_EA_Dep_pct75\"",
					"\"Exp_Premises_Fixed_Assets_Inc_pvt50\"",
					"\"otherexpense_pct75\"",
					"\"LLP_Loans_pct75\"",
					"\"ncoloans_pct75\"",
					"\"LLP_NCO_pct75\"",
					"\"llpea_pct75\"",
					"\"Op_Inc_Avg_EA_Dep_pct75\"",
					"\"EA_Loans_Leases_Mix_Yield_pct75\"",
					"\"otherintyield_pct75\"",
				];

				var chart_tree_metrics_seg25 = [
					"\"ROAE_pct25\"",
					"Operating_ROE",
					"\"Extra_Adj_Other_ROAA_pct25\"",
					"Extra_Adj_Other",
					"\"Op_Margin_pct25\"",
					"\"ROAA_Effective_Tax_Rate_pct25\"",
					"Capital_Utilization",
					"\"Efficiency_Ratio_pct25\"",
					"\"LLR_pct25\"",
					"\"Asset_Yield_pct25\"",
					"\"Leverage_pct25\"",
					"\"ROAA_pct25\"",
					"\"EA_Asset_Growth_pct25\"",
					//    "\"Dividend_Payout_pct25\"",
					"\"Cost_of_Capital_pct25\"",
					"\"Spread_pct25\"",
					"\"Equity_Growth_Rate_pct25\"",
					//     "\"equity_other_growth_rate_pct25\"",
					"\"Mkt_Cap_pct25\"",
					"\"Common_share_growth_pct25\"",
					"actual_closing",
					"\"DY_1_pct25\"",
					"\"ROAA_Pre_Tax_Excl_Security_Gains_pct25\"",
					"\"TR_1_pct25\"",
					"\"EA_Mix_pct25\"",
					"\"Net_Int_Margin_pct25\"",
					"\"Non_Int_Yield_pct25\"",
					"\"Gross_Int_Inc_EA_Yield_pct25\"",
					"\"Int_Exp_EA_pct25\"",
					"\"Total_Int_Bearing_Liab_Cost_pct25\"",
					"ibl_ea_ratio",
					"\"Inc_Int_on_Loans_Leases_Yield_Weighted_pct25\"",
					"\"other_int_yield_wgt_pct25\"",
					"\"Int_Exp_Deposits_Cost_Wgt_pct25\"",
					"\"cost_of_other_borrowings_wgt\"",
					"\"Inc_Int_on_Loans_Leases_Yield_pct25\"",
					"\"EA_Loans_Leases_Mix_Yield_pct25\"",
					"\"Int_Exp_Deposits_Cost_pct25\"",
					"\"IBL_Deposits_Mix_pct25\"",
					"\"cost_of_other_funds_pct25\"",
					"\"Total_Asset_Growth_Rate_pct25\"",
					"Risk_Free_Rate",
					"Equity_Risk_Premium",
					"\"Beta_pct25\"",
					"\"SP_1_pct25\"",
					"\"net_int_margin_grossed_pct25\"",
					"\"non_int_margin_grossed_pct25\"",
					"\"Leverage_pct25\"",
					"\"Costs_Avg_EA_Dep_pct25\"",
					"\"Op_Inc_Avg_EA_Dep_pct25\"",
					"\"Exp_Salary_Benefits_Avg_EA_Dep_pct25\"",
					"\"gaexpense_pct25\"",
					"\"externalexpense_pct25\"",
					"\"Exp_Salary_Benefits_Per_FTE_pct25\"",
					"\"Avg_EA_Dep_Per_FTE_pct25\"",
					"\"Exp_Data_Process_Avg_EA_Dep_pct25\"",
					"\"Exp_Advertising_Avg_EA_Dep_pct25\"",
					"\"Exp_Premises_Fixed_Assets_Inc_pvt50\"",
					"\"otherexpense_pct25\"",
					"\"LLP_Loans_pct25\"",
					"\"ncoloans_pct25\"",
					"\"LLP_NCO_pct25\"",
					"\"llpea_pct25\"",
					"\"Op_Inc_Avg_EA_Dep_pct25\"",
					"\"EA_Loans_Leases_Mix_Yield_pct25\"",
					"\"otherintyield_pct25\"",
				];
				var chart_tree_metrics_hgb = [
					"\"ROAE_higher_good_or_bad\"",
					"Operating_ROE",
					"\"Extra_Adj_Other_ROAA_higher_good_or_bad\"",
					"Extra_Adj_Other",
					"\"Op_Margin_higher_good_or_bad\"",
					"\"ROAA_Effective_Tax_Rate_higher_good_or_bad\"",
					"Capital_Utilization",
					"\"Efficiency_Ratio_higher_good_or_bad\"",
					"\"LLR_higher_good_or_bad\"",
					"\"Asset_Yield_higher_good_or_bad\"",
					"\"Leverage_higher_good_or_bad\"",
					"\"ROAA_higher_good_or_bad\"",
					"\"EA_Asset_Growth_higher_good_or_bad\"",
					//      "\"Dividend_Payout_higher_good_or_bad\"",
					"\"Cost_of_Capital_higher_good_or_bad\"",
					"\"Spread_higher_good_or_bad\"",
					"\"Equity_Growth_Rate_higher_good_or_bad\"",
					//      "\"equity_other_growth_rate_higher_good_or_bad\"",
					"\"Mkt_Cap_higher_good_or_bad\"",
					"\"Common_share_growth_higher_good_or_bad\"",
					"actual_closing",
					"\"DY_1_higher_good_or_bad\"",
					"\"ROAA_Pre_Tax_Excl_Security_Gains_higher_good_or_bad\"",
					"\"TR_1_higher_good_or_bad\"",
					"\"EA_Mix_higher_good_or_bad\"",
					"\"Net_Int_Margin_higher_good_or_bad\"",
					"\"Non_Int_Yield_higher_good_or_bad\"",
					"\"Gross_Int_Inc_EA_Yield_higher_good_or_bad\"",
					"\"Int_Exp_EA_higher_good_or_bad\"",
					"\"Total_Int_Bearing_Liab_Cost_higher_good_or_bad\"",
					"ibl_ea_ratio",
					"\"Inc_Int_on_Loans_Leases_Yield_Weighted_higher_good_or_bad\"",
					"\"other_int_yield_wgt_higher_good_or_bad\"",
					"\"Int_Exp_Deposits_Cost_Wgt_higher_good_or_bad\"",
					"\"cost_of_other_borrowings_wgt\"",
					"\"Inc_Int_on_Loans_Leases_Yield_higher_good_or_bad\"",
					"\"EA_Loans_Leases_Mix_Yield_higher_good_or_bad\"",
					"\"Int_Exp_Deposits_Cost_higher_good_or_bad\"",
					"\"IBL_Deposits_Mix_higher_good_or_bad\"",
					"\"cost_of_other_funds_higher_good_or_bad\"",
					"\"Total_Asset_Growth_Rate_higher_good_or_bad\"",
					"Risk_Free_Rate",
					"Equity_Risk_Premium",
					"\"Beta_higher_good_or_bad\"",
					"\"SP_1_higher_good_or_bad\"",
					"\"net_int_margin_grossed_higher_good_or_bad\"",
					"\"non_int_margin_grossed_higher_good_or_bad\"",
					"\"Leverage_higher_good_or_bad\"",
					"\"Costs_Avg_EA_Dep_higher_good_or_bad\"",
					"\"Op_Inc_Avg_EA_Dep_higher_good_or_bad\"",
					"\"Exp_Salary_Benefits_Avg_EA_Dep_higher_good_or_bad\"",
					"\"gaexpense_higher_good_or_bad\"",
					"\"externalexpense_higher_good_or_bad\"",
					"\"Exp_Salary_Benefits_Per_FTE_higher_good_or_bad\"",
					"\"Avg_EA_Dep_Per_FTE_higher_good_or_bad\"",
					"\"Exp_Data_Process_Avg_EA_Dep_higher_good_or_bad\"",
					"\"Exp_Advertising_Avg_EA_Dep_higher_good_or_bad\"",
					"\"Exp_Premises_Fixed_Assets_Inc_pvt50\"",
					"\"otherexpense_higher_good_or_bad\"",
					"\"LLP_Loans_higher_good_or_bad\"",
					"\"ncoloans_higher_good_or_bad\"",
					"\"LLP_NCO_higher_good_or_bad\"",
					"\"llpea_higher_good_or_bad\"",
					"\"Op_Inc_Avg_EA_Dep_higher_good_or_bad\"",
					"\"EA_Loans_Leases_Mix_Yield_higher_good_or_bad\"",
					"\"otherintyield_higher_good_or_bad\"",
				];
				// Create array of graphs to create
				var i = 0;
				var j = chart_tree_metrics.length;
				var cyear = 0;

				for (slider_number = 0; slider_number < slider_length; slider_number++) {
					var metric = _$('#' + slider_metrics[slider_number] + '-years');

					metric.innerHTML = "";


					/*
                    var er = _$('#er-years');
                    var llr = _$('#LLR-years');
                    var ay = _$('#Asset_Yield-years');
                    var lev = _$('#Leverage-years');

                er.innerHTML = "";
                llr.innerHTML = "";
                ay.innerHTML = "";
                lev.innerHTML = "";
*/
					//Number of years/columns to display in the assumptions section.
					var n = chartData.length;
					var w = (5 * 2); //Math.round(100/(chartData.length - 3));
					var y = n - (w / 2);

					chartData.forEach(function(year, idx) {
						if (idx > (y - 3) && year.Year != null) {

							var metric_col = BlkLab.create('div', {
								"class": 'col'
							});

							metric_col.css({
								width: w + '%'
							});

							/* var er_col = BlkLab.create('div', {"class": 'col'});
							 var llr_col = BlkLab.create('div', {"class": 'col'});
							 var ay_col = BlkLab.create('div', {"class": 'col'});
							 var lev_col = BlkLab.create('div', {"class": 'col'});

							 er_col.css({width: w + '%'});
							 llr_col.css({width: w + '%'});
							 ay_col.css({width: w + '%'});
							 lev_col.css({width: w + '%'});

							 */

							if (year.Year != null) {
								cyear = parseFloat(year.Year);
							} else {
								cyear++;
							}

							//var ref = "year." +  slider_metrics[slider_number];
							//var check = year.indexOf(slider_metrics[slider_number]);
							//////
							metric_col.innerHTML = cyear + '<div class="box">' + parseFloat(year[slider_metrics[slider_number]]).toFixed(2) + '</div>';
							metric.append(metric_col);

							/*
							er_col.innerHTML = cyear  + '<div class="box">' + parseFloat(year.Efficiency_Ratio).toFixed(2) + '</div>';
							llr_col.innerHTML = cyear + '<div class="box">' + parseFloat(year.LLR).toFixed(2) + '</div>';
							ay_col.innerHTML = cyear  + '<div class="box">' + parseFloat(year.Asset_Yield).toFixed(2) + '</div>';
							lev_col.innerHTML = cyear + '<div class="box">' + parseFloat(year.Leverage).toFixed(2) + '</div>';

							er.append(er_col);
							llr.append(llr_col);
							ay.append(ay_col);
							lev.append(lev_col);
							*/
						}
					});

					if (chartData[4].Year != null) {

						var metric_col_button = BlkLab.create('div', {
							"class": 'col line'
						});
						metric_col_button.css({
							width: w + '%'
						});
						metric_col_button.innerHTML = '<img src="/assets/images/curve-linear.png">';
						/*
						    var er_col_button = BlkLab.create('div', {"class": 'col line'});
						    var llr_col_button = BlkLab.create('div', {"class": 'col line'});
						    var ay_col_button = BlkLab.create('div', {"class": 'col line'});
						    var lev_col_button = BlkLab.create('div', {"class": 'col line'});

						    er_col_button.css({width: w + '%'});
						    llr_col_button.css({width: w + '%'});
						    ay_col_button.css({width: w + '%'});
						    lev_col_button.css({width: w + '%'});

						    er_col_button.innerHTML = '<img src="/assets/images/curve-linear.png">';
						    llr_col_button.innerHTML = '<img src="/assets/images/curve-linear.png">';
						    ay_col_button.innerHTML = '<img src="/assets/images/curve-linear.png">';
						    lev_col_button.innerHTML = '<img src="/assets/images/curve-linear.png">';

						    //er.append(er_col_button);
						    //llr.append(llr_col_button);
						    //ay.append(ay_col_button);
						    //lev.append(lev_col_button); */
					}



					// set the tool tip for the slider and color according to segment
					var ref = slider_metrics[slider_number];

					var Slider = _$('#' + slider_metrics[slider_number] + '-slider');

					Slider.on("input", function(Slider) {
						var ele = _$(this).getAttribute('id');
						// ////alert(JSON.stringify(BlkLab.App.simulationSliders));
						Slider = _$('#' + ele);

						var code = ele.replace("-slider", "");

						var index = slider_metrics.indexOf(code);

						var SliderOutput = _$('#' + ele + '-output');
						BlkLab.App.simulationSliders.Metric
						var posPerc = (((Slider.value) / Slider.max) * 100);
						var display_resulta = parseInt(Slider.value);
						var seg_75_resulta = parseInt(BlkLab.App.simulationSliders.segmentrank_75[index] * 10);
						var seg_50_resulta = parseInt(BlkLab.App.simulationSliders.segmentrank_50[index] * 10);
						var seg_25_resulta = parseInt(BlkLab.App.simulationSliders.segmentrank_25[index] * 10);
						var hgb_resulta = BlkLab.App.simulationSliders.hgb[index];

						if (hgb_resulta == 1) {
							var pixPos = (-((posPerc / 100 - 1)) * (Slider.clientWidth * 0.77));
						} else {
							var pixPos = (((posPerc / 100)) * (Slider.clientWidth * 0.77));
						}
						pixPos += Slider.offsetLeft;

						SliderOutput.style.display = 'block';
						SliderOutput.style.left = pixPos + 'px';

						if (BlkLab.App.simulationSliders.format[index] == "%") {
							SliderOutput.innerHTML = Slider.value / 10;
						} else {
							SliderOutput.innerHTML = Math.round(Slider.value / 100) / 10;
						}

						//get color to format tooltip


						var color_a;
						var color_b;
						if (hgb_resulta == 1) {

							if (display_resulta < seg_25_resulta) {
								color_a = "Green";
								color_b = "White";
							} else if (display_resulta < seg_50_resulta) {
								color_a = "LightGreen";
								color_b = "Black";
							} else if (display_resulta < seg_75_resulta) {
								color_a = "Orange";
								color_b = "Black";
							} else {
								color_a = "Red";
								color_b = "White";
							}
						} else {
							if (display_resulta > seg_75_resulta) {
								color_a = "Green";
								color_b = "White";
							} else if (display_resulta > seg_50_resulta) {
								color_a = "LightGreen";
								color_b = "Black";
							} else if (display_resulta > seg_25_resulta) {
								color_a = "Orange";
								color_b = "Black";
							} else {
								color_a = "Red";
								color_b = "White";
							}
						}
						SliderOutput.style.background = color_a;
						SliderOutput.style.color = color_b;


					});
					//_$('#'+sliders[slider_number]+'-slider-output').style.display = "none";
				}

				while (i <= j) {
					// SERIAL CHART
					var chart = new AmCharts.AmSerialChart();
					chart.pathToImages = "/amcharts/images/";
					chart.dataProvider = chartData;
					chart.categoryField = "Year";
					chart.height = "100%";
					chart.handDrawn = false;
					chart.columnWidth = 0.8;



					// Category Axis

					var categoryAxis = chart.categoryAxis;
					categoryAxis.gridAlpha = 0;
					categoryAxis.labelsEnabled = true;
					categoryAxis.axisAlpha = 0;


					// Value Axis

					var valueAxis = new AmCharts.ValueAxis();
					if (chart_tree_metrics[i] == "mkt_cap" || chart_tree_metrics[i] == "salaryperfte" || chart_tree_metrics[i] == "eaperfte") {
						valueAxis.unit = "$";
						valueAxis.unitPosition = "left";
					} else {
						valueAxis.unit = "%";
					}
					valueAxis.gridAlpha = 0;
					valueAxis.lineColor = "White";
					valueAxis.labelsEnabled = true;
					valueAxis.axisAlpha = 0;
					chart.addValueAxis(valueAxis);



					// GRAPHS

					var graph1 = new AmCharts.AmGraph();
					graph1.valueField = chart_tree_metrics[i];
					graph1.precision = -1;
					graph1.alphaField = "columncolor";
					graph1.type = "column";
					graph1.lineColor = "Gray";
					chart.addGraph(graph1);

					var graph2 = new AmCharts.AmGraph();
					graph2.valueField = chart_tree_metrics_seg50[i];
					graph2.alphaField = "columncolor";
					graph2.type = "line";
					graph2.bullet = "round";
					graph2.bulletColor = "Orange";
					graph2.bulletSize = 4;
					graph2.lineAlpha = 0;
					chart.addGraph(graph2);

					var graph3 = new AmCharts.AmGraph();
					graph3.valueField = chart_tree_metrics_seg75[i];
					graph3.alphaField = "columncolor";
					graph3.type = "line";
					graph3.bullet = "round";
					graph3.bulletColor = "DarkGreen";
					graph3.bulletSize = 4;
					graph3.lineAlpha = 0;
					chart.addGraph(graph3);

					var graph4 = new AmCharts.AmGraph();
					graph4.valueField = chart_tree_metrics_seg25[i];
					graph4.alphaField = "columncolor";
					graph4.type = "line";
					graph4.bullet = "round";
					graph4.bulletColor = "Red";
					graph4.bulletSize = 4;
					graph4.lineAlpha = 0;
					chart.addGraph(graph4);


					var legend = new AmCharts.AmLegend();
					legend.position = "bottom";
					legend.verticalGap = 2;
					legend.equalWidths = false;
					legend.align = "center";
					legend.marginTop = 0;
					legend.marginLeft = 25;
					legend.marginRight = 5;
					legend.fontSize = 9;
					legend.valueWidth = 30;
					legend.data = [{
						title: "Actual",
						color: "DarkGray",
						markerType: "square"
					}, {
						title: "Forecast",
						color: "LightGray",
						markerType: "square"
					}];
					legend.markerSize = 8;
					chart.addLegend(legend);

					// WRITE
					chart.write(chart_tree_metrics[i]);


					//add traffic light for metric based on last year results

					var traffic_light = _$('#controls_' + chart_tree_metrics[i]);
					if (traffic_light === null) {} else {
						var color = "Gray";
						var length = chartData.length;

						if (chart_tree_metrics_seg50[i] != null) {

							if (chart_tree_metrics[i] == "mkt_cap") {
								var display_result = chartData[length - 1][chart_tree_metrics[i]] * 1000000000;
							} else {
								var display_result = chartData[length - 1][chart_tree_metrics[i]];
							}
							var seg_75_result = chartData[length - 1][chart_tree_metrics_seg75[i]];
							var seg_50_result = chartData[length - 1][chart_tree_metrics_seg50[i]];
							var seg_25_result = chartData[length - 1][chart_tree_metrics_seg25[i]];

							var hgb_result = chartData[length - 1][chart_tree_metrics_hgb[i]];

							if (hgb_result != null) {

								if (hgb_result == 1) {
									if (display_result < seg_25_result) {
										traffic_light.innerHTML = "<div class='circlegreen'></div><div class='circle'></div><div class = 'circle'></div>";
									} else if (display_result < seg_50_result) {
										traffic_light.innerHTML = "<div class='circlelightgreen'></div><div class='circle'></div><div class = 'circle'></div>";
										color3 = "#eeeeee";
									} else if (display_result < seg_75_result) {
										traffic_light.innerHTML = "<div class='circle'></div><div class='circleorange'></div><div class = 'circle'></div>";
									} else {
										traffic_light.innerHTML = "<div class='circle'></div><div class='circle'></div><div class = 'circlered'></div>";
									}
								} else {
									if (display_result > seg_75_result) {
										traffic_light.innerHTML = "<div class='circlegreen'></div><div class='circle'></div><div class = 'circle'></div>";

									} else if (display_result > seg_50_result) {
										traffic_light.innerHTML = "<div class='circlelightgreen'></div><div class='circle'></div><div class = 'circle'></div>";

									} else if (display_result > seg_25_result) {
										traffic_light.innerHTML = "<div class='circle'></div><div class='circleorange'></div><div class = 'circle'></div>";

									} else {
										traffic_light.innerHTML = "<div class='circle'></div><div class='circle'></div><div class = 'circlered'></div>";
									}
								}
							}

						}

					}
					i++;
				}

				self.refreshActions();
				$('.donut').peity('donut');
			}, function(http) {
				BlkLab.Security.handle(http, true);
			});
		}
	},

	render: function(params) {
		var self = this;
		var view = new BlkLab.App.IndividualSimulationView();

		view.model = {
			data: {
				companies: BlkLab.Filters.companies,
				segments: BlkLab.Filters.segments
			}
		};
		view.render('#content');
		var x = document.getElementById("peerMenu");
		       x.style.display = 'none';
		var company = BlkLab.Storage.get('company');
		var segment = BlkLab.Storage.get('segment');
		//////alert(segment);
		//console.log(company);

		if (company) {
			BlkLab.App.Company = company;
		}

		if (segment) {
			BlkLab.App.Segment = segment;
		}



		_$('#company-list').value = company;
		_$('#segment-list').value = segment;
		this.actions.filterSegment();
		//this.actions.loadSimulation();
		this.actions.resultsDiv();


		self.refreshActions();
	}
});


BlkLab.App.Router.routes({
	'/individual': {
		controller: BlkLab.App.IndividualController
	},

	'/individual/detailed-metrics': {
		controller: BlkLab.App.IndividualDetailedMetricsController
	},

	'/individual/outlook': {
		controller: BlkLab.App.IndividualOutlookController
	},

	'/individual/simulation': {
		controller: BlkLab.App.IndividualSimulationController
	}
});
;BlkLab.App.AdminHomeView = BlkLab.View.extend({
    template: this.views['./app/js/views/admin/index.hbs']
});

BlkLab.App.AdminHomeController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var view = new BlkLab.App.AdminHomeView();
        view.render('#content');
        this.refreshActions();
    }
});

BlkLab.App.AdminPerspectivesView = BlkLab.View.extend({
    template: this.views['./app/js/views/admin/perspectives.hbs']
});

BlkLab.App.AdminPerspectivesController = BlkLab.Controller.extend({
    files: [],

    actions:{
        save: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form');
            var content = _$('.editor').first().innerHTML;
            payload.content = content;
            BlkLab.post({
                url: '/api/perspectives',
                data: JSON.stringify(payload)
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
                location.reload(0);
            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });
            return false;
        },

        remove: function(){
            BlkLab.del({
                url: '/api/perspectives/' + _$(this).data('id')
            }).then(function(http){
                location.reload(0);
            }, function(http){});
        },

        loadFiles: function(ev){
            var self = BlkLab.App.AdminPerspectivesController;
            var files = Object.create(this.files);
            var i = 0;
            var len = this.files.length;
            var next = function(){
                var f = files[i];
                var fr = new FileReader;

                var name = f.name;
                var fn = name.split('.');
                var ext = fn.pop();

                fr.onload = function() {
                    var img = new Image;
                    img.onload = function() {
                        var w = img.width;
                        var h = img.height;
                        var orientation = w > h ? 'landscape' : 'portrait';
                        BlkLab.Uploader.add_to_queue(f, function(e){
                            _$('#title_image').value = name;
                        });

                        BlkLab.Uploader.start();
                        /*var model = BlkLab.App.MediaModel;
                        model.set('width', w);
                        model.set('height', h);
                        model.set('orientation', orientation);
                        model.set('filename', name);
                        model.set('basename', fn);
                        model.set('extension', ext);
                        model.set('type', 'image');
                        model.set('created', new Date());
                        model.set('date', new Date());*/
                    };
                    img.src = fr.result;

                    i++;
                    if(i < len){
                        next();
                    }else{
                        //submit.disabled = false;
                    }
                };
                self.files.push(f);
                fr.readAsDataURL(f);
            };
            next();
        },

        updateForm: function(){
            _$('#text-content').value = this.innerHTML;
        }
    },

    render: function(params){
        var self = this;
        var view = new BlkLab.App.AdminPerspectivesView();
        BlkLab.get({
            url: '/api/perspectives?all=true'
        }).then(function(http){
            var results = JSON.parse(http.response);
            view.model = {
                data: {
                    data:results,
                    segments: BlkLab.Filters.segments,
                    screens: BlkLab.Filters.screens,
                    companies: BlkLab.Filters.companies
                }
            };
            view.render('#content');
            self.refreshActions();
            var editor = new MediumEditor('.editor', {
                placeholder: {
                    text: 'Type your text',
                    hideOnClick: true
                },
                anchor: {
                    placeholderText: 'Type a link',
                    customClassOption: 'btn',
                    customClassOptionText: 'Create Button'
                },
                paste: {
                    cleanPastedHTML: true,
                    cleanAttrs: ['style', 'dir'],
                    cleanTags: ['label', 'meta']
                },
                anchorPreview: {
                    hideDelay: 300
                },
                extensions: {
                    'imageDragging': {}
                }
            });

            var e = _$('#editor');

            editor.on(e, 'dragenter', function(ev){
                ev.preventDefault();
                console.log('enter');
                console.log(ev);
                return false;
            });

            editor.on(e, 'dragover', function(ev){
                ev.preventDefault();
                console.log('over');
                console.log(ev);
                return false;
            });

            editor.on(e, 'drop', function(ev){
                ev.preventDefault();
                ev.stopPropagation();

                var self = BlkLab.App.AdminPerspectivesController;
                var files = Object.create(ev.dataTransfer.files);
                var i = 0;
                var len = ev.dataTransfer.files.length;
                var next = function(){
                    var f = files[i];
                    var fr = new FileReader;

                    var name = f.name;
                    var fn = name.split('.');
                    var ext = fn.pop();

                    fr.onload = function() {
                        var img = new Image;
                        img.onload = function() {
                            var w = img.width;
                            var h = img.height;
                            var orientation = w > h ? 'landscape' : 'portrait';
                            //console.log(MediumEditor.selection)
                            BlkLab.Uploader.add_to_queue(f, function(e){
                                document.execCommand("insertImage", false, "/assets/images/" + name);
                            });

                            BlkLab.Uploader.start();
                            /*var model = BlkLab.App.MediaModel;
                            model.set('width', w);
                            model.set('height', h);
                            model.set('orientation', orientation);
                            model.set('filename', name);
                            model.set('basename', fn);
                            model.set('extension', ext);
                            model.set('type', 'image');
                            model.set('created', new Date());
                            model.set('date', new Date());*/
                        };
                        img.src = fr.result;

                        i++;
                        if(i < len){
                            next();
                        }else{
                            //submit.disabled = false;
                        }
                    };
                    //self.files.push(f);
                    fr.readAsDataURL(f);
                };
                next();


                return false;
            });

        });
    }
});

BlkLab.App.AdminEditPerspectiveView = BlkLab.View.extend({
    template: this.views['./app/js/views/admin/edit_perspective.hbs']
});

BlkLab.App.AdminEditPerspectivesController = BlkLab.Controller.extend({
    actions:{
        save: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form');
            var content = _$('.editor').first().innerHTML;
            payload.content = content;
            BlkLab.put({
                url: '/api/perspectives/' + payload.id,
                data: JSON.stringify(payload)
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
                location.reload(0);
            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });
            return false;
        },

        loadFiles: function(ev){
            var self = BlkLab.App.AdminPerspectivesController;
            var files = Object.create(this.files);
            var i = 0;
            var len = this.files.length;
            var next = function(){
                var f = files[i];
                var fr = new FileReader;

                var name = f.name;
                var fn = name.split('.');
                var ext = fn.pop();

                fr.onload = function() {
                    var img = new Image;
                    img.onload = function() {
                        var w = img.width;
                        var h = img.height;
                        var orientation = w > h ? 'landscape' : 'portrait';
                        BlkLab.Uploader.add_to_queue(f, function(e){
                            _$('#title_image').value = name;
                        });

                        BlkLab.Uploader.start();
                        /*var model = BlkLab.App.MediaModel;
                        model.set('width', w);
                        model.set('height', h);
                        model.set('orientation', orientation);
                        model.set('filename', name);
                        model.set('basename', fn);
                        model.set('extension', ext);
                        model.set('type', 'image');
                        model.set('created', new Date());
                        model.set('date', new Date());*/
                    };
                    img.src = fr.result;

                    i++;
                    if(i < len){
                        next();
                    }else{
                        //submit.disabled = false;
                    }
                };
                self.files.push(f);
                fr.readAsDataURL(f);
            };
            next();
        }
    },

    render: function(params){
        var self = this;
        var view = new BlkLab.App.AdminEditPerspectiveView();
        BlkLab.get({
            url: '/api/perspectives/' + params.id
        }).then(function(http){
            var results = JSON.parse(http.response);
            view.model = {data: results};
            view.render('#content');
            self.refreshActions();

            var editor = new MediumEditor('.editor', {
                placeholder: {
                    text: 'Type your text',
                    hideOnClick: true
                },
                anchor: {
                    placeholderText: 'Type a link',
                    customClassOption: 'btn',
                    customClassOptionText: 'Create Button'
                },
                paste: {
                    cleanPastedHTML: true,
                    cleanAttrs: ['style', 'dir'],
                    cleanTags: ['label', 'meta']
                },
                anchorPreview: {
                    hideDelay: 300
                },
                extensions: {
                    'imageDragging': {}
                }
            });

            var e = _$('#editor');

            editor.on(e, 'dragenter', function(ev){
                ev.preventDefault();
                console.log('enter');
                console.log(ev);
                return false;
            });

            editor.on(e, 'dragover', function(ev){
                ev.preventDefault();
                console.log('over');
                console.log(ev);
                return false;
            });

            editor.on(e, 'drop', function(ev){
                ev.preventDefault();
                ev.stopPropagation();

                var self = BlkLab.App.AdminPerspectivesController;
                var files = Object.create(ev.dataTransfer.files);
                var i = 0;
                var len = ev.dataTransfer.files.length;
                var next = function(){
                    var f = files[i];
                    var fr = new FileReader;

                    var name = f.name;
                    var fn = name.split('.');
                    var ext = fn.pop();

                    fr.onload = function() {
                        var img = new Image;
                        img.onload = function() {
                            var w = img.width;
                            var h = img.height;
                            var orientation = w > h ? 'landscape' : 'portrait';
                            //console.log(MediumEditor.selection)
                            BlkLab.Uploader.add_to_queue(f, function(e){
                                document.execCommand("insertImage", false, "/assets/images/" + name);
                            });

                            BlkLab.Uploader.start();
                            /*var model = BlkLab.App.MediaModel;
                            model.set('width', w);
                            model.set('height', h);
                            model.set('orientation', orientation);
                            model.set('filename', name);
                            model.set('basename', fn);
                            model.set('extension', ext);
                            model.set('type', 'image');
                            model.set('created', new Date());
                            model.set('date', new Date());*/
                        };
                        img.src = fr.result;

                        i++;
                        if(i < len){
                            next();
                        }else{
                            //submit.disabled = false;
                        }
                    };
                    //self.files.push(f);
                    fr.readAsDataURL(f);
                };
                next();


                return false;
            });

        });
    }
});

BlkLab.App.AdminUsersView = BlkLab.View.extend({
    template: this.views['./app/js/views/admin/users.hbs']
});

BlkLab.App.AdminUsersController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var self = this;
        var view = new BlkLab.App.AdminUsersView();
        BlkLab.get({
            url: '/api/users'
        }).then(function(http){
            var results = JSON.parse(http.response);
            view.model = {data: {data:results}};
            view.render('#content');
            self.refreshActions();
        });
    }
});

BlkLab.App.AdminSecurityView = BlkLab.View.extend({
    template: this.views['./app/js/views/admin/security.hbs']
});

BlkLab.App.AdminSecurityController = BlkLab.Controller.extend({
    actions:{
        changeLevel: function(){
            console.log(this.value);
            BlkLab.put({
                url: '/api/admin/security/' + _$(this).data('id'),
                data: JSON.stringify({level: this.value})
            }).then(function(http){
                alert('Saved');
            });
        }
    },

    render: function(params){
        var self = this;
        var view = new BlkLab.App.AdminSecurityView();
        BlkLab.get({
            url: '/api/admin/security'
        }).then(function(http){
            var results = JSON.parse(http.response);
            view.model = {data: {data:results}};
            view.render('#content');
            self.refreshActions();
        });
    }
});

BlkLab.App.Router.routes({
    '/admin': {
        controller:BlkLab.App.AdminHomeController
    },

    '/admin/perspectives': {
        controller:BlkLab.App.AdminPerspectivesController
    },

    '/admin/perspectives/:id': {
        controller:BlkLab.App.AdminEditPerspectivesController
    },

    '/admin/users': {
        controller:BlkLab.App.AdminUsersController
    },

    '/admin/security': {
        controller:BlkLab.App.AdminSecurityController
    }
});
;BlkLab.App.PerspectivesView = BlkLab.View.extend({
    template: this.views['./app/js/views/perspectives/index.hbs']
});

BlkLab.App.PerspectivesController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var self = this;
        var view = new BlkLab.App.PerspectivesView();
        BlkLab.get({
            url: '/api/perspectives?all=true'
        }).then(function(http){
                var results = JSON.parse(http.response);
                results.forEach(function(res){
                    var date = Date.parse(res.timestamp);
                    var d = new Date(date);

                    var day = d.getDate();
                    var monthIndex = d.getMonth();
                    var year = d.getFullYear();
                    res.timestamp = monthIndex + '.' + day + '.' + year;

                    res["descrip"] = res.content.split('</p>')[0] + '</p>';

                });
                view.model = {data:{
                    data: results
                }}
                view.render('#content');
                self.refreshActions();
        });
    }
});

BlkLab.App.PerspectivesIndustryController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var self = this;
        var view = new BlkLab.App.PerspectivesView();
        BlkLab.get({
            url: '/api/perspectives?segment=' + BlkLab.App.Segment
        }).then(function(http){
                var results = JSON.parse(http.response);
                results.forEach(function(res){
                    var date = Date.parse(res.timestamp);
                    var d = new Date(date);

                    var day = d.getDate();
                    var monthIndex = d.getMonth();
                    var year = d.getFullYear();
                    res.timestamp = monthIndex + '.' + day + '.' + year;
                });
                view.model = {data:{
                    data: results
                }}
                view.render('#content');
                self.refreshActions();
        });
    }
});

BlkLab.App.PerspectivesIndividualController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var self = this;
        var view = new BlkLab.App.PerspectivesView();
        BlkLab.get({
            url: '/api/perspectives?company=' + BlkLab.App.Company + '&metric=' + BlkLab.App.Metric
        }).then(function(http){
                var results = JSON.parse(http.response);
                results.forEach(function(res){
                    var date = Date.parse(res.timestamp);
                    var d = new Date(date);

                    var day = d.getDate();
                    var monthIndex = d.getMonth();
                    var year = d.getFullYear();
                    res.timestamp = monthIndex + '.' + day + '.' + year;
                });
                view.model = {data:{
                    data: results
                }}
                view.render('#content');
                self.refreshActions();
        });
    }
});

BlkLab.App.PerspectivesDetailView = BlkLab.View.extend({
    template: this.views['./app/js/views/perspectives/detail.hbs']
});

BlkLab.App.PerspectivesDetailController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var self = this;
        var view = new BlkLab.App.PerspectivesDetailView();
        BlkLab.get({
            url: '/api/perspectives/' + params.id
        }).then(function(http){
                var results = JSON.parse(http.response);
                var date = Date.parse(results.timestamp);
                var d = new Date(date);

                var day = d.getDate();
                var monthIndex = d.getMonth();
                var year = d.getFullYear();
                results.timestamp = monthIndex + '.' + day + '.' + year;
                view.model = {data:results};
                view.render('#content');
                var el = _$('#content').querySelectorAll('img:not(.no-lightense),.lightense');
                Lightense(el);
                self.refreshActions();
        });
    }
});

BlkLab.App.AboutView = BlkLab.View.extend({
    template: this.views['./app/js/views/about.hbs']
});

BlkLab.App.AboutController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var view = new BlkLab.App.AboutView();
        view.render('#content');
        this.refreshActions();
    }
});


BlkLab.App.Router.routes({
    '/perspectives': {
        controller:    BlkLab.App.PerspectivesController
    },

    '/perspectives/industry': {
        controller:    BlkLab.App.PerspectivesIndustryController
    },

    '/perspectives/individual': {
        controller:    BlkLab.App.PerspectivesIndividualController
    },

    '/perspectives/:id': {
        controller:    BlkLab.App.PerspectivesDetailController
    },

    '/about': {
        controller:    BlkLab.App.AboutController
    }
});
;BlkLab.App.LoginView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/login.hbs']
});

BlkLab.App.LoginModalView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/login-modal.hbs']
});

BlkLab.App.PremiumModalView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/premium-modal.hbs']
});

BlkLab.App.CreateView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/create.hbs']
});

BlkLab.App.ResetView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/reset.hbs']
});

BlkLab.App.SendResetView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/send-reset.hbs']
});

BlkLab.App.AccountView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/account.hbs']
});

BlkLab.App.PremiumAccountView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/premium-account.hbs']
});

BlkLab.App.LoginController = BlkLab.Controller.extend({
    actions:{
        login: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form', true);
            BlkLab.post({
                url: '/api/users/auth/login',
                data: payload
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
                 if(resp.token){
                    console.log('test');
                    BlkLab.Storage.set('access-token', resp.token);
                    location.href = "/";
                }else{
                    _$('#error').innerHTML = resp.msg || 'Error logging in.';
                }
            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });
            return false;
        }
    },

    render: function(params){
        var view = new BlkLab.App.LoginView();
        view.render('#content');
        this.refreshActions();
    }
});

BlkLab.App.LoginModalController = BlkLab.Controller.extend({
    company: '',

    actions:{
        close: function(){
            BlkLab.Storage.set('segment', 8);
            BlkLab.Storage.set('company', 1951350);
            _$('#modal').destroy();
            _$('#modal-background').destroy();
            console.log(BlkLab.Storage.get('company'));
            setTimeout(function(){
                location.reload(0);
            }, 1000);
        },

        login: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form', true);
            BlkLab.post({
                url: '/api/users/auth/login',
                data: payload
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
               
                if(resp.token){
                    BlkLab.Storage.set('access-token', resp.token);
                    BlkLab.Storage.set('segment', BlkLab.App.LoginModalController.segment);
                    BlkLab.Storage.set('company', BlkLab.App.LoginModalController.company);
                    setTimeout(function(){
                        location.reload(0);
                    }, 1000);
                }else{
                    _$('#error').innerHTML = resp.msg || 'Error logging in.';
                }
            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });
            return false;
        }
    },

    render: function(params){
        var view = new BlkLab.App.LoginModalView();
        var modal = view.render();
        _$('#content').innerHTML += modal;
        this.refreshActions();
    }
});

BlkLab.App.PremiumModalController = BlkLab.Controller.extend({
    actions:{
        close: function(){
            BlkLab.Storage.set('segment', 8);
            BlkLab.Storage.set('company', 1951350);
            _$('#modal').destroy();
            _$('#modal-background').destroy();
            console.log(BlkLab.Storage.get('company'));
            setTimeout(function(){
                location.reload(0);
            }, 1000);
        },

        subscribe: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form', true);
            BlkLab.post({
                url: '/api/users/auth/premium',
                data: payload
            }).then(function(http){
                var resp = JSON.parse(http.responseText);

            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });
            return false;
        }
    },

    render: function(params){
        var view = new BlkLab.App.PremiumModalView();
        var modal = view.render();
        _$('#content').innerHTML += modal;

        BlkLab.get({
            url: '/api/users/auth/token'
        }).then(function(http){
            var res = JSON.parse(http.responseText);
            var token = res.token;

            var form = document.querySelector('#cardForm');
            var authorization = token;

            braintree.client.create({
              authorization: authorization
            }, function(err, clientInstance) {
              if (err) {
                console.error(err);
                return;
              }
              createHostedFields(clientInstance);
            });

            function createHostedFields(clientInstance) {
              braintree.hostedFields.create({
                client: clientInstance,
                styles: {
                  'input': {
                    'font-size': '16px',
                    'font-family': 'courier, monospace',
                    'font-weight': 'lighter',
                    'color': '#ccc'
                  },
                  ':focus': {
                    'color': 'black'
                  },
                  '.valid': {
                    'color': '#8bdda8'
                  }
                },
                fields: {
                  number: {
                    selector: '#card-number',
                    placeholder: '4111 1111 1111 1111'
                  },
                  cvv: {
                    selector: '#cvv',
                    placeholder: '123'
                  },
                  expirationDate: {
                    selector: '#expiration-date',
                    placeholder: 'MM/YYYY'
                  },
                  postalCode: {
                    selector: '#postal-code',
                    placeholder: '11111'
                  }
                }
              }, function (err, hostedFieldsInstance) {
                var teardown = function (event) {
                  event.preventDefault();
                    hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
                        if (tokenizeErr) {
                        // Handle error in Hosted Fields tokenization
                            return;
                        }

                        BlkLab.post({
                            url: '/api/users/auth/premium',
                            data: JSON.stringify({
                                payment_method_nonce: payload.nonce
                            })
                        }).then(function(http){
                            var resp = JSON.parse(http.responseText);
                            if(resp.token){
                                BlkLab.Storage.set('access-token', resp.token);
                                BlkLab.Storage.set('segment', BlkLab.App.PremiumModalController.segment);
                                BlkLab.Storage.set('company', BlkLab.App.PremiumModalController.company);
                                setTimeout(function(){
                                    location.reload(0);
                                }, 1000);
                            }
                        });

                        hostedFieldsInstance.teardown(function () {
                             createHostedFields(clientInstance);
                            form.removeEventListener('submit', teardown, false);
                        });
                    });
                };

                form.addEventListener('submit', teardown, false);
              });
            }
         });
        this.refreshActions();
    }
});

BlkLab.App.CreateController = BlkLab.Controller.extend({
    actions:{
        createAccount: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form', true);
            BlkLab.post({
                url: '/api/users',
                data: payload
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
                if(resp.token){
                    BlkLab.Storage.set('access-token', resp.token);
                    location.href = "/";
                }else{
                    _$('#error').innerHTML = resp.msg || 'Error logging in.';
                }
            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });
            return false;
        }
    },

    render: function(params){
        var view = new BlkLab.App.CreateView();
        view.render('#content');
        this.refreshActions();
    }
});

BlkLab.App.ResetController = BlkLab.Controller.extend({
    actions:{
        resetAccount: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form', true);
            /*BlkLab.post({
                url: '/api/users',
                data: payload
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
                if(resp.token){
                    BlkLab.Storage.set('access-token', resp.token);
                    location.href = "/";
                }else{
                    _$('#error').innerHTML = resp.msg || 'Error logging in.';
                }
            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });*/
            return false;
        }
    },

    render: function(params){
        var view = new BlkLab.App.ResetView();
        view.render('#content');
        this.refreshActions();
    }
});

BlkLab.App.SendResetController = BlkLab.Controller.extend({
    actions:{
        resetAccount: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form', true);
            BlkLab.post({
                url: '/api/users/send-reset',
                data: payload
            }).then(function(http){
                location.href = "/login";
            }, function(http){});
            return false;
        }
    },

    render: function(params){
        var view = new BlkLab.App.SendResetView();
        view.render('#content');
        this.refreshActions();
    }
});

BlkLab.App.AccountController = BlkLab.Controller.extend({
    actions:{
        createSubscription: function(){
            BlkLab.App.PremiumModalController.render();
        },

        cancelSubscription: function(){
            BlkLab.post({
                url: '/api/users/auth/cancel'
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
                if(resp.token){
                    BlkLab.Storage.set('access-token', resp.token);
                    location.reload(0);
                }
            }, function(http){});
        }
    },

    render: function(params){
        var self = this;
        var view = new BlkLab.App.AccountView();
        BlkLab.get({
            url: '/api/users/profile'
        }).then(function(http){
            var resp = JSON.parse(http.responseText);
            if(resp.level == 3){
                view = new BlkLab.App.PremiumAccountView();
            }
            view.model = {data: resp};
            view.render('#content');
            self.refreshActions();
        }, function(http){});
    }
});

BlkLab.App.LogoutController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        BlkLab.Storage.remove('type');
        BlkLab.Storage.remove('access-token');
        BlkLab.App.Segment = 8;
        BlkLab.Storage.set('segment', 8);
        BlkLab.App.Company = 1951350;
        BlkLab.Storage.set('company', 1951350);
        location.href = "/users/login";
    }
});

BlkLab.App.Router.routes({
    '/users/login': {
        controller: BlkLab.App.LoginController
    },

    '/users/logout': {
        controller: BlkLab.App.LogoutController
    },

    '/users/signup': {
        controller: BlkLab.App.CreateController
    },

    '/users/send-reset': {
        controller: BlkLab.App.SendResetController
    },

    '/users/reset': {
        controller: BlkLab.App.ResetController
    },

    '/users/account': {
        controller: BlkLab.App.AccountController
    }
});
