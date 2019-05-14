this["views"] = this["views"] || {};

this["views"]["./app/js/views/admin/admin.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n<section id=\"admin\">\n    <h2>Admin</h2>\n\n    <ul>\n        <li><a href=\"/admin/professors\">Professors</a></li>\n        <li><a href=\"#\">Students</a></li>\n        <li><a href=\"/admin/projects\">Projects</a></li>\n        <li><a href=\"/admin/jobs\">Jobs</a></li>\n    </ul>\n</section>";
},"useData":true});

this["views"]["./app/js/views/admin/edit-modal.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <li><a href=\""
    + alias3(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a> <span class=\"fa fa-trash\" blklab-click=\"removeLink\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"></span></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div id=\"close\" blklab-click=\"closeEdit\">X</div>\n<header>\n    <h1>Edit Professor</h1>\n</header>\n<section class=\"invite form\">\n    <h3>Description</h3>\n    <textarea id=\"description\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\n\n    <h3>Links</h3>\n    <section id=\"documents\">\n        <ul id=\"documents-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n        <img src=\"/assets/images/project-page-add-icon-gray.png\" class=\"add\" blklab-click=\"addLink\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n    </section>\n    \n    <input type=\"button\" value=\"Save\" class=\"invite-btn\" blklab-click=\"saveDescription\" blklab-enter=\"saveDescription\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n</section>";
},"useData":true});

this["views"]["./app/js/views/admin/jobs.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <tr>\n            <td><img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"avatar\"></td>\n            <td>"
    + alias3(((helper = (helper = helpers.project_name || (depth0 != null ? depth0.project_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"project_name","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"title\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"type\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"skills\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.skills || (depth0 != null ? depth0.skills : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"skills","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"degree\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.degree || (depth0 != null ? depth0.degree : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"degree","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"major\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.major || (depth0 != null ? depth0.major : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"major","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"compensation\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.compensation || (depth0 != null ? depth0.compensation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"compensation","hash":{},"data":data}) : helper)))
    + "</td>\n            <td><span class=\"fa fa-trash\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-type=\"Jobs\" blklab-click=\"remove\"></span></td>\n        </tr>\n";
},"3":function(depth0,helpers,partials,data) {
    return "        <tr>\n            <td colspan=\"9\">No Jobs</td>\n        </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n<section id=\"admin\">\n    <h2>Admin</h2>\n\n    <ul>\n        <li><a href=\"/admin/professors\">Professors</a></li>\n        <li><a href=\"/admin/students\">Students</a></li>\n        <li><a href=\"/admin/projects\">Projects</a></li>\n        <li class=\"selected\"><a href=\"/admin/jobs\">Jobs</a></li>\n    </ul>\n    \n    <table border=\"1\" class=\"bordered\">\n        <tr>\n            <th></th>\n            <th>Project</th>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Skills</th>\n            <th>Degree</th>\n            <th>Major</th>\n            <th>Compensation</th>\n            <th></th>\n        </tr>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </table>\n</section>";
},"useData":true});

this["views"]["./app/js/views/admin/professor-modal.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <li>\n                <a href=\"/explore/profile/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\"><img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"avatar\"></a>\n                <div class=\"name\">\n                    <h2>"
    + alias3(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</h2>\n                    <h3>"
    + alias3(((helper = (helper = helpers.university || (depth0 != null ? depth0.university : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"university","hash":{},"data":data}) : helper)))
    + ", "
    + alias3(((helper = (helper = helpers.department || (depth0 != null ? depth0.department : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"department","hash":{},"data":data}) : helper)))
    + "</h3>\n                    "
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\n                </div>\n                <div class=\"add\" blklab-click=\"selectProfessor\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-email=\""
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\">\n                    <img src=\"/assets/images/project-page-add-icon-gray.png\" class=\"plus\">\n                    <img src=\"/assets/images/invite-selected.png\" class=\"check\">\n                </div>\n                <div class=\"clear\"></div>\n            </li>\n";
},"3":function(depth0,helpers,partials,data) {
    return "            <li>No Members</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"close\" blklab-click=\"close\">X</div>\n<header>\n    <h1>Change Project Owner</h1>\n    <input type=\"text\" class=\"search\" id=\"search\">\n</header>\n<aside></aside>\n<section class=\"invite\">\n    <section class=\"list\">\n        <ul id=\"user-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </section>\n    <!--<input type=\"text\" class=\"invite-field icon mail\" placeholder=\"Don’t see who you’re looking for? Invite them by email.\">-->\n    \n    <input type=\"button\" value=\"Save\" class=\"invite-btn\" blklab-click=\"saveProfessor\" blklab-enter=\"saveProfessor\">\n</section>";
},"useData":true});

this["views"]["./app/js/views/admin/professors.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <tr>\n            <td>\n                <div class=\"upload\">\n                    <a href=\"/explore/profile/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-target=\"new\" target=\"_blank\"><img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"avatar\"></a>\n                    <span class=\"fa fa-image\">\n                        <input type=\"file\" blklab-change=\"handleFileSelect\" class=\"file\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n                        <i class=\"loader\" id=\"loader\"></i>\n                    </span>\n                </div>\n            </td>\n            <td class=\"inline\" data-key=\"first_name\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first_name","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"last_name\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"email\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"university\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.university || (depth0 != null ? depth0.university : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"university","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"department\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.department || (depth0 != null ? depth0.department : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"department","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.projects : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "            </td>\n            <td><span class=\"fa fa-edit\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-type=\"Professors\" blklab-click=\"edit\"></span> <span class=\"fa fa-trash\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-type=\"Professors\" blklab-click=\"remove\"></span></td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.projects : depth0)) != null ? stack1.length : stack1), depth0))
    + "\n";
},"4":function(depth0,helpers,partials,data) {
    return "                    0\n";
},"6":function(depth0,helpers,partials,data) {
    return "        <tr>\n            <td colspan=\"8\">No Professors</td>\n        </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n<section id=\"admin\">\n    <h2>Admin</h2>\n\n    <ul>\n        <li class=\"selected\"><a href=\"/admin/professors\">Professors</a></li>\n        <li><a href=\"/admin/students\">Students</a></li>\n        <li><a href=\"/admin/projects\">Projects</a></li>\n        <li><a href=\"/admin/jobs\">Jobs</a></li>\n    </ul>\n    \n    <table border=\"1\" class=\"bordered\">\n        <tr>\n            <th></th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Email</th>\n            <th>University</th>\n            <th>Department</th>\n            <th>Projects</th>\n            <th></th>\n        </tr>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "    </table>\n</section>";
},"useData":true});

this["views"]["./app/js/views/admin/projects.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "        <tr>\n            <td><img src=\"/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" class=\"avatar\"></td>\n            <td class=\"inline\" data-key=\"name\" data-id=\""
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" style=\"width:20%\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n            <td><img src=\"/assets/images/project-type-"
    + alias2(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "-icon.png\" class=\"project-type\"></td>\n            <td><span class=\"project-status "
    + alias2(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">\n                    "
    + alias2(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\n                    <ul>\n                        <li blklab-click=\"changeStatus\" data-id=\""
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-value=\"archived\" class=\"archived-status\">Archived</li>\n                        <li blklab-click=\"changeStatus\" data-id=\""
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-value=\"recruiting\" class=\"recruiting-status\">Recruiting</li>\n                        <li blklab-click=\"changeStatus\" data-id=\""
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-value=\"active\" class=\"active-status\">Active</li>\n                        <li blklab-click=\"changeStatus\" data-id=\""
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-value=\"draft\" class=\"draft-status\">Draft</li>\n                    </ul>\n                </span>\n            </td>\n            <td style=\"width:20%\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.last_name : stack1), depth0))
    + " <span class=\"fa fa-user\" blklab-click=\"changeProfessor\" data-id=\""
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"></span></td>\n            <td>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.applicants : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "            </td>\n            <td>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.leaders : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "            </td>\n            <td>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.members : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "            </td>\n            <td>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.jobs : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "            </td>\n            <td><span class=\"fa "
    + alias2(((helper = (helper = helpers.checkState || (depth0 != null ? depth0.checkState : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"checkState","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" blklab-click=\"toggleTrending\"></span></td>\n            <td><span class=\"fa fa-trash\" data-id=\""
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-type=\"Projects\" blklab-click=\"remove\"></span></td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.applicants : depth0)) != null ? stack1.length : stack1), depth0))
    + "\n";
},"4":function(depth0,helpers,partials,data) {
    return "                    0\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.leaders : depth0)) != null ? stack1.length : stack1), depth0))
    + "\n";
},"8":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.members : depth0)) != null ? stack1.length : stack1), depth0))
    + "\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.jobs : depth0)) != null ? stack1.length : stack1), depth0))
    + "\n";
},"12":function(depth0,helpers,partials,data) {
    return "        <tr>\n            <td colspan=\"10\">No Projects</td>\n        </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n<section id=\"admin\">\n    <h2>Admin</h2>\n\n    <ul>\n        <li><a href=\"/admin/professors\">Professors</a></li>\n        <li><a href=\"/admin/students\">Students</a></li>\n        <li class=\"selected\"><a href=\"/admin/projects\">Projects</a></li>\n        <li><a href=\"/admin/jobs\">Jobs</a></li>\n    </ul>\n    \n    <table border=\"1\" class=\"bordered\">\n        <tr>\n            <th></th>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Status</th>\n            <th>Professor</th>\n            <th>Applicants</th>\n            <th>Leaders</th>\n            <th>Members</th>\n            <th>Jobs</th>\n            <th>Trending</th>\n            <th></th>\n        </tr>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "    </table>\n</section>";
},"useData":true});

this["views"]["./app/js/views/admin/students.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <tr>\n            <td><img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"avatar\"></td>\n            <td class=\"inline\" data-key=\"first_name\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first_name","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"last_name\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"email\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"university\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.university || (depth0 != null ? depth0.university : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"university","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"inline\" data-key=\"major\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.major || (depth0 != null ? depth0.major : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"major","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.jobs : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "            </td>\n            <td><span class=\"fa fa-trash\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-type=\"Students\" blklab-click=\"remove\"></span></td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.jobs : depth0)) != null ? stack1.length : stack1), depth0))
    + "\n";
},"4":function(depth0,helpers,partials,data) {
    return "                    0\n";
},"6":function(depth0,helpers,partials,data) {
    return "        <tr>\n            <td colspan=\"8\">No Students</td>\n        </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n<section id=\"admin\">\n    <h2>Admin</h2>\n\n    <ul>\n        <li><a href=\"/admin/professors\">Professors</a></li>\n        <li class=\"selected\"><a href=\"/admin/students\">Students</a></li>\n        <li><a href=\"/admin/projects\">Projects</a></li>\n        <li><a href=\"/admin/jobs\">Jobs</a></li>\n    </ul>\n    \n    <table border=\"1\" class=\"bordered\">\n        <tr>\n            <th></th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Email</th>\n            <th>University</th>\n            <th>Major</th>\n            <th>Projects</th>\n            <th></th>\n        </tr>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "    </table>\n</section>";
},"useData":true});

this["views"]["./app/js/views/coming-soon.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section id=\"float\">\n    <img src=\"/assets/images/logo.png\">\n    <h1>Thanks For Your Interest!</h1>\n    <p>Currently your University is unavaiable, we will let you know once it has been added.</p>\n    \n    <p>Need access now? Send us a note: <a href=\"mailto:hello@mykubby.com\">hello@mykubby.com</a></p>\n</section>";
},"useData":true});

this["views"]["./app/js/views/explore/explore.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "                <div class=\"project\">\n                    <section class=\"project-description\">\n                        <header blklab-click=\"expand\">\n                            <div class=\"avatar\"><div class=\"flag professor\">P</div>\n                                <a href=\"/explore/profile/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1._id : stack1), depth0))
    + "\"><img src=\"/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\"></a>\n                                <div class=\"avatar-tooltip\">\n                                    \n                                    <img src=\"/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\">\n                                    <h3>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "</h3>\n                                    <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.department : stack1), depth0))
    + " at "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.university : stack1), depth0))
    + "</p>\n                                </div>\n                            </div>\n                            <div class=\"project-meta\">\n                                <h1 data-href=\"/explore/project/"
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n                                <span class=\"university\"><img src=\"/assets/images/university-icon-orange.png\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.university : stack1), depth0))
    + "</span>\n                                <span class=\"degree\"><img src=\"/assets/images/hat-icon-orange.png\"> "
    + alias2(((helper = (helper = helpers.degrees || (depth0 != null ? depth0.degrees : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"degrees","hash":{},"data":data}) : helper)))
    + "</span>\n                                <span class=\"major\"><img src=\"/assets/images/degree-icon-orange.png\"> "
    + alias2(((helper = (helper = helpers.majors || (depth0 != null ? depth0.majors : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"majors","hash":{},"data":data}) : helper)))
    + "</span>\n                                <br>\n                                 <img src=\"/assets/images/project-type-"
    + alias2(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "-icon.png\" class=\"project-type\"> <span class=\"project-status "
    + alias2(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n                            </div>\n                            <div class=\"tags\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                            </div> \n                        </header>\n                        <div class=\"expand\">\n                            <section class=\"team\">\n                                <h3>TEAM</h3>\n                                <div class=\"team-list\">\n                                    <span class=\"avatar\"><a href=\"/explore/profile/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1._id : stack1), depth0))
    + "\"><div class=\"flag professor\">P</div><img src=\"/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\"></a><div class=\"avatar-tooltip\">\n                                    <img src=\"/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" class=\"tooltip-img\">\n                                    <h3>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "</h3>\n                                    <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.department : stack1), depth0))
    + " at "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.university : stack1), depth0))
    + "</p>\n                                        </div>\n                                    </span>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.leaders : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                                </div>\n                                <input type=\"button\" value=\"Apply\" blklab-click=\"apply\" class=\"apply "
    + alias2(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "-state "
    + alias2(((helper = (helper = helpers.usertype || (depth0 != null ? depth0.usertype : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"usertype","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-index=\""
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n                            </section>\n                            <section class=\"detail\">\n                                <h2>About Project</h2>    \n                                <p>"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n                            </section>\n                            <section class=\"jobs\">\n                                <h2>Open Positions</h2>    \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.jobs : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "                            </section>\n                        </div>\n                    </section>\n                </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "                                    <div class=\"tag\">"
    + ((stack1 = this.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</div>\n";
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                                    <span class=\"avatar\"><a href=\"/explore/profile/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"><img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\"></a><div class=\"avatar-tooltip\">\n                                    <img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"tooltip-img\">\n                                    <h3>"
    + alias3(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</h3>\n                                    <p>"
    + alias3(((helper = (helper = helpers.department || (depth0 != null ? depth0.department : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"department","hash":{},"data":data}) : helper)))
    + " at "
    + alias3(((helper = (helper = helpers.university || (depth0 != null ? depth0.university : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"university","hash":{},"data":data}) : helper)))
    + "</p>\n                                        </div>\n                                    </span>\n                                    \n";
},"6":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                                    <div class=\"job\" blklab-click=\"toggle\">\n                                        <h3>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n                                        <div class=\"job-overview\">\n                                            <div class=\"details\">\n                                                <span class=\"type\"><img src=\"/assets/images/time-icon.png\"> "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</span>\n                                                <span class=\"majors\"><img src=\"/assets/images/degree-icon.png\"> "
    + alias3(((helper = (helper = helpers.degree || (depth0 != null ? depth0.degree : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"degree","hash":{},"data":data}) : helper)))
    + "</span>\n                                                <span class=\"pay\"><img src=\"/assets/images/finance-icon.png\"> "
    + alias3(((helper = (helper = helpers.compensation || (depth0 != null ? depth0.compensation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"compensation","hash":{},"data":data}) : helper)))
    + "</span>\n                                            </div>\n                                            <div class=\"skills\">\n                                                Skills: "
    + alias3(((helper = (helper = helpers.skills || (depth0 != null ? depth0.skills : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"skills","hash":{},"data":data}) : helper)))
    + "\n                                            </div>\n                                        </div>\n                                        <div class=\"job-description\">\n                                            <h3>Task Description</h3>\n                                            "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                                        </div>\n                                    </div>\n";
},"8":function(depth0,helpers,partials,data) {
    return "                                    <div class=\"job\">\n                                        <h3>No Positions</h3>\n                                    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n<section id=\"explore\">\n    \n    <section id=\"project-container\">\n        <h2>What are you looking for?</h2>\n        <section id=\"filters\">\n            <div class=\"applied\"></div>\n            <div class=\"divider\"></div>\n            <input type=\"text\" class=\"search\" id=\"search\">\n            <div class=\"bar\">\n                <ul>\n                    <li>\n                        JOB TYPE\n                        <ul class=\"select\">\n                            <li blklab-click=\"select\" data-key=\"time\">Full Time</li>\n                            <li blklab-click=\"select\" data-key=\"time\">Part Time</li>\n                        </ul>\n                    </li>\n                    <li>\n                        ROLE\n                        <ul class=\"select\">\n                            <li blklab-click=\"select\" data-key=\"title\">Research Assistant</li>\n                            <li blklab-click=\"select\" data-key=\"title\">Data Analyst</li>\n                            <li blklab-click=\"select\" data-key=\"title\">Data Collector</li>\n                            <li blklab-click=\"select\" data-key=\"title\">Proofreader</li>\n                            <li blklab-click=\"select\" data-key=\"title\">Administrative Assistant</li>\n                            <li blklab-click=\"select\" data-key=\"title\">Course Assistant</li>\n                            <li blklab-click=\"select\" data-key=\"title\">Grader</li>\n                            <li blklab-click=\"select\" data-key=\"title\">Teaching Assistant</li>\n                            <li blklab-click=\"select\" data-key=\"title\">Tutor</li>\n                        </ul>\n                    </li>\n                    <li>\n                        MAJOR\n                        <ul class=\"select\">\n                            <li blklab-click=\"select\" data-key=\"major\">Economics</li>\n                            <li blklab-click=\"select\" data-key=\"major\">Finance</li>\n                            <li blklab-click=\"select\" data-key=\"major\">Math</li>\n                            <li blklab-click=\"select\" data-key=\"major\">Psychology</li>\n                        </ul>\n                    </li>\n                    <li>\n                        COMPENSATION\n                        <ul class=\"select\">\n                            <li blklab-click=\"select\" data-key=\"compensation\">Paid</li>\n                            <li blklab-click=\"select\" data-key=\"compensation\">Co-Authorship</li>\n                            <li blklab-click=\"select\" data-key=\"compensation\">Academic Credit</li>\n                            <li blklab-click=\"select\" data-key=\"compensation\">Volunteer</li>\n                        </ul>\n                    </li>\n                    <li>\n                        CATEGORY\n                        <ul class=\"select\">\n                            <li blklab-click=\"select\" data-key=\"tags\">Development</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">Education</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">Gender</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">History</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">Innovation</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">Environment</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">Microeconomic/<br>Game Theory</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">Finance</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">Health</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">International Trade</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">Labor</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">Macroeconomics</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">Industrial Organization</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">Digitization</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">Behavioral and Experimental</li>\n                            <li blklab-click=\"select\" data-key=\"tags\">Computational</li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </section>\n\n        <div class=\"project-count\">"
    + this.escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"count","hash":{},"data":data}) : helper)))
    + " Kubbys</div>\n\n        <section id=\"project-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.projects : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </section>\n    </section>\n</section>";
},"useData":true});

this["views"]["./app/js/views/explore/professors/profile.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <li><a href=\""
    + alias3(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"3":function(depth0,helpers,partials,data) {
    return "                    <li>No Links</li>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "			     <div class=\"project\">\n                     <img src=\"/assets/images/project-type-"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "-icon.png\">\n                     <div class=\"detail\">\n                        <h2 data-href=\"/explore/project/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n                     </div>\n                     \n                </div>\n";
},"7":function(depth0,helpers,partials,data) {
    return "                <div class=\"project\">No Current Projects</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n<section id=\"profile\" class=\"flexbox\">\n	<nav class=\"col\">\n        <div class=\"upload\">\n            <div class=\"flag professor\">P</div>\n            <img src=\"/app/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" id=\"avatar\">\n        </div>\n		<h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "</h1>\n		<section class=\"education\">\n			<p class=\"icon university orange\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.university : stack1), depth0))
    + "</p>\n			<p class=\"icon degree orange\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.department : stack1), depth0))
    + "</p>\n		</section>\n		\n		<section class=\"rating\">\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n		</section>\n		\n		<div class=\"send-message\">\n			<img src=\"/assets/images/mail-icon.png\"> <span>Send a Message</span>\n		</div>\n		\n	</nav>\n	\n	<section id=\"profile-content\" class=\"col\">\n		<h2>About Me</h2>\n		<div class=\"description\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n		\n		\n		<h2>Links</h2>\n		<section id=\"documents\">\n            <ul id=\"documents-list\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.links : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "            </ul>\n		</section>\n		\n		<h2>Projects</h2>\n		<section id=\"projects\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.projects : stack1),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "        </section>\n		\n		<h2>Past Projects</h2>\n		<section id=\"past-projects\">\n            <div>None</div>\n        </section>\n		\n	</section>	\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/explore/project.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"tag\">"
    + ((stack1 = this.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <div class=\"job\" blklab-click=\"toggle\">\n                        <h3>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n                        <div class=\"job-overview\">\n                            <div class=\"details\">\n                                <span class=\"type\"><img src=\"/assets/images/time-icon.png\"> "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</span>\n                                <span class=\"majors\"><img src=\"/assets/images/degree-icon.png\"> "
    + alias3(((helper = (helper = helpers.degree || (depth0 != null ? depth0.degree : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"degree","hash":{},"data":data}) : helper)))
    + "</span>\n                                <span class=\"pay\"><img src=\"/assets/images/finance-icon.png\"> "
    + alias3(((helper = (helper = helpers.compensation || (depth0 != null ? depth0.compensation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"compensation","hash":{},"data":data}) : helper)))
    + "</span>\n                            </div>\n                            <div class=\"skills\">\n                                Skills: "
    + alias3(((helper = (helper = helpers.skills || (depth0 != null ? depth0.skills : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"skills","hash":{},"data":data}) : helper)))
    + "\n                            </div>\n                        </div>\n                        <div class=\"job-description\">\n                            <h3>Task Description</h3>\n                            "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <span class=\"avatar\">\n                    <a href=\"/explore/profile/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"flag professor\">P</div><img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"avatar-overlap\" title=\""
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\"></a>\n                    <div class=\"avatar-tooltip\">\n                        <img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"tooltip-img\">\n                        <h3>"
    + alias3(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</h3>\n                        <p>"
    + alias3(((helper = (helper = helpers.department || (depth0 != null ? depth0.department : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"department","hash":{},"data":data}) : helper)))
    + " at "
    + alias3(((helper = (helper = helpers.university || (depth0 != null ? depth0.university : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"university","hash":{},"data":data}) : helper)))
    + "</p>\n                    </div>\n                    </span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.lambda, alias4=this.escapeExpression;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n<section id=\"project-page\" class=\"external\">\n    <header>\n    <h1>"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1>\n    <span class=\"university\"><img src=\"/assets/images/university-icon-orange.png\"> "
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.professor : stack1)) != null ? stack1.university : stack1), depth0))
    + " <img src=\"/assets/images/university-icon-orange.png\"> "
    + alias4(((helper = (helper = helpers.jobCount || (depth0 != null ? depth0.jobCount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobCount","hash":{},"data":data}) : helper)))
    + "</span> <span class=\"project-status "
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.status : stack1), depth0))
    + "\">"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.status : stack1), depth0))
    + "</span>\n    <span class=\"tags\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.tags : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </span>\n    <span class=\"stage "
    + alias4(((helper = (helper = helpers.stage || (depth0 != null ? depth0.stage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stage","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.publish : stack1), depth0))
    + "</span>\n        \n        <input type=\"button\" value=\"Apply\" blklab-click=\"apply\" class=\"apply "
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.status : stack1), depth0))
    + "-state "
    + alias4(((helper = (helper = helpers.usertype || (depth0 != null ? depth0.usertype : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"usertype","hash":{},"data":data}) : helper)))
    + "\">\n        \n    </header>\n    \n    <div class=\"flexbox full\">\n        <section id=\"detail\" class=\"col\">\n            <h2>Description</h2>\n            <div class=\"description\">"
    + ((stack1 = alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n\n            <h2>Compensation</h2>\n            <div class=\"description\">"
    + alias4(((helper = (helper = helpers.compensation || (depth0 != null ? depth0.compensation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"compensation","hash":{},"data":data}) : helper)))
    + "</div>\n\n            <h2>Open Positions</h2>    \n            <section class=\"jobs project-description\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.jobs : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </section>\n\n        </section>\n\n        <aside class=\"col\">\n            <h3>Share</h3>\n            <div class=\"social\">\n                <img src=\"/assets/images/project-page-facebook.png\">\n                <img src=\"/assets/images/project-page-twitter.png\">\n                <img src=\"/assets/images/project-page-mobile.png\">\n                <img src=\"/assets/images/project-page-mail.png\">\n            </div>\n            <h3>Team Leaders</h3>\n            <div class=\"leaders team-list\">\n                <span class=\"avatar\">\n                    <a href=\"/explore/profile/"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.professor : stack1)) != null ? stack1._id : stack1), depth0))
    + "\"><div class=\"flag professor\">P</div><img src=\"/assets/avatars/"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.professor : stack1)) != null ? stack1.avatar : stack1), depth0))
    + "\" title=\""
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.professor : stack1)) != null ? stack1.email : stack1), depth0))
    + "\"></a>\n                    <div class=\"avatar-tooltip\">\n                        <img src=\"/assets/avatars/"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.professor : stack1)) != null ? stack1.avatar : stack1), depth0))
    + "\" class=\"tooltip-img\">\n                        <h3>"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.professor : stack1)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.professor : stack1)) != null ? stack1.last_name : stack1), depth0))
    + "</h3>\n                        <p>"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.professor : stack1)) != null ? stack1.department : stack1), depth0))
    + " at "
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.professor : stack1)) != null ? stack1.university : stack1), depth0))
    + "</p>\n                    </div>\n                </span>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.leaders : stack1),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n\n            <h3>Team Members</h3>\n            <div class=\"members team-list\"></div>\n        </aside>\n    </div>\n</section>";
},"useData":true});

this["views"]["./app/js/views/explore/search-results.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "    <div class=\"project\">\n        <section class=\"project-description\">\n            <header blklab-click=\"expand\">\n                <div class=\"avatar\"><div class=\"flag professor\">P</div>\n                    <a href=\"/explore/profile/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1._id : stack1), depth0))
    + "\"><img src=\"/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\"></a>\n                    <div class=\"avatar-tooltip\">\n\n                        <img src=\"/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\">\n                        <h3>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "</h3>\n                        <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.department : stack1), depth0))
    + " at "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.university : stack1), depth0))
    + "</p>\n                    </div>\n                </div>\n                <div class=\"project-meta\">\n                    <h1 data-href=\"/explore/project/"
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n                    <span class=\"university\"><img src=\"/assets/images/university-icon-orange.png\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.university : stack1), depth0))
    + "</span>\n                    <span class=\"degree\"><img src=\"/assets/images/hat-icon-orange.png\"> "
    + alias2(((helper = (helper = helpers.degrees || (depth0 != null ? depth0.degrees : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"degrees","hash":{},"data":data}) : helper)))
    + "</span>\n                    <span class=\"major\"><img src=\"/assets/images/degree-icon-orange.png\"> "
    + alias2(((helper = (helper = helpers.majors || (depth0 != null ? depth0.majors : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"majors","hash":{},"data":data}) : helper)))
    + "</span>\n                    <br>\n                     <img src=\"/assets/images/project-type-"
    + alias2(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "-icon.png\" class=\"project-type\"> <span class=\"project-status "
    + alias2(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n                </div>\n                <div class=\"tags\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </div> \n            </header>\n            <div class=\"expand\">\n                <section class=\"team\">\n                    <h3>TEAM</h3>\n                    <div class=\"team-list\">\n                        <span class=\"avatar\"><a href=\"/explore/profile/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1._id : stack1), depth0))
    + "\"><div class=\"flag professor\">P</div><img src=\"/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\"></a><div class=\"avatar-tooltip\">\n                        <img src=\"/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" class=\"tooltip-img\">\n                        <h3>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "</h3>\n                        <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.department : stack1), depth0))
    + " at "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.university : stack1), depth0))
    + "</p>\n                            </div>\n                        </span>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.leaders : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n                    <input type=\"button\" value=\"Apply\" blklab-click=\"apply\" class=\"apply "
    + alias2(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "-state "
    + alias2(((helper = (helper = helpers.usertype || (depth0 != null ? depth0.usertype : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"usertype","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-index=\""
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n                </section>\n                <section class=\"detail\">\n                    <h2>About Project</h2>    \n                    <p>"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n                </section>\n                <section class=\"jobs\">\n                    <h2>Open Positions</h2>    \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.jobs : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "                </section>\n            </div>\n        </section>\n    </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "                        <div class=\"tag\">"
    + ((stack1 = this.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</div>\n";
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <span class=\"avatar\"><a href=\"/explore/profile/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"><img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\"></a><div class=\"avatar-tooltip\">\n                        <img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"tooltip-img\">\n                        <h3>"
    + alias3(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</h3>\n                        <p>"
    + alias3(((helper = (helper = helpers.department || (depth0 != null ? depth0.department : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"department","hash":{},"data":data}) : helper)))
    + " at "
    + alias3(((helper = (helper = helpers.university || (depth0 != null ? depth0.university : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"university","hash":{},"data":data}) : helper)))
    + "</p>\n                            </div>\n                        </span>\n\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <div class=\"job\" blklab-click=\"toggle\">\n                            <h3>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n                            <div class=\"job-overview\">\n                                <div class=\"details\">\n                                    <span class=\"type\"><img src=\"/assets/images/time-icon.png\"> "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</span>\n                                    <span class=\"majors\"><img src=\"/assets/images/degree-icon.png\"> "
    + alias3(((helper = (helper = helpers.degree || (depth0 != null ? depth0.degree : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"degree","hash":{},"data":data}) : helper)))
    + "</span>\n                                    <span class=\"pay\"><img src=\"/assets/images/finance-icon.png\"> "
    + alias3(((helper = (helper = helpers.compensation || (depth0 != null ? depth0.compensation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"compensation","hash":{},"data":data}) : helper)))
    + "</span>\n                                </div>\n                                <div class=\"skills\">\n                                    Skills: "
    + alias3(((helper = (helper = helpers.skills || (depth0 != null ? depth0.skills : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"skills","hash":{},"data":data}) : helper)))
    + "\n                                </div>\n                            </div>\n                            <div class=\"job-description\">\n                                <h3>Task Description</h3>\n                                "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                            </div>\n                        </div>\n";
},"8":function(depth0,helpers,partials,data) {
    return "                        <div class=\"job\">\n                            <h3>No Positions</h3>\n                        </div>\n";
},"10":function(depth0,helpers,partials,data) {
    return "    <div class=\"project\">\n        No Results\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.projects : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["views"]["./app/js/views/explore/students/profile.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "				<div class=\"skill selected\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "				No Skills\n";
},"5":function(depth0,helpers,partials,data) {
    return "				<div class=\"skill\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</div>\n";
},"7":function(depth0,helpers,partials,data) {
    return "				No Projects\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "				<div class=\"job icon user\"><span class=\"title\">"
    + alias3(((helper = (helper = helpers.job_title || (depth0 != null ? depth0.job_title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"job_title","hash":{},"data":data}) : helper)))
    + "</span> <span class=\"organization icon organization\">"
    + alias3(((helper = (helper = helpers.organization || (depth0 != null ? depth0.organization : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"organization","hash":{},"data":data}) : helper)))
    + "</span> <span class=\"dates icon calendar\">"
    + alias3(((helper = (helper = helpers.start_date || (depth0 != null ? depth0.start_date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"start_date","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.end_date || (depth0 != null ? depth0.end_date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"end_date","hash":{},"data":data}) : helper)))
    + "</span></div>\n";
},"11":function(depth0,helpers,partials,data) {
    return "				No Experience\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n<section id=\"profile\" class=\"flexbox\">\n	<nav class=\"col\">\n		<div class=\"upload\">\n            <input type=\"file\" blklab-change=\"handleFileSelect\" class=\"file\">\n            <img src=\"/app/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" class=\"avatar\" id=\"avatar\">\n            <i class=\"loader\" id=\"loader\"></i>\n        </div>\n        <h1><span blklab-click=\"edit\" blklab-model=\"students.first_name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.first_name : stack1), depth0))
    + "</span> <span blklab-click=\"edit\" blklab-model=\"students.last_name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "</span></h1>\n		<section class=\"education\">\n			<p blklab-click=\"edit\" blklab-model=\"students.university\" class=\"icon university orange\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.university : stack1), depth0))
    + "</p>\n			<p blklab-click=\"edit\" blklab-model=\"students.major\" class=\"icon degree orange\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.major : stack1), depth0))
    + "</p>\n		</section>\n		\n		<!--<section class=\"rating\">\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n		</section>\n		\n		<div class=\"send-message\">\n			<img src=\"/assets/images/mail-icon.png\"> <span>Send a Message</span>\n		</div>-->\n		\n	</nav>\n	\n	<section id=\"profile-content\" class=\"col\">\n		<h2>About Me</h2>\n		<p blklab-click=\"edit\" blklab-model=\"students.description\" class=\"description\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n		\n		\n		<h2>Documents</h2>\n		<section id=\"documents\">\n			<a href=\"/app/assets/resumes/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.resume : stack1), depth0))
    + "\">Download Resume</a>\n		</section>\n		\n		<h2>Skills</h2>\n		<section class=\"skills-list profile\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.skills : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "		</section>\n		\n		<h2>Projects</h2>\n		<section id=\"projects\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.projects : stack1),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "		</section>\n		\n		<h2>Past Projects</h2>\n		<section id=\"past-projects\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.past_projects : stack1),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "		</section>\n		\n		<h2>Experience</h2>\n		<section id=\"experience\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.experience : stack1),{"name":"each","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "		</section>\n		\n	</section>	\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/login.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section id=\"login\">\n	<form id=\"login-form\" method=\"post\" action=\"/users/auth/login\">\n		<div class=\"row\">\n			<label for=\"email\">Email</label>\n			<input type=\"email\" id=\"email\" name=\"email\" required autofocus>\n		</div>\n\n		<div class=\"row\">\n			<label for=\"password\">Password</label>\n			<input type=\"password\" id=\"password\" name=\"password\" required>\n		</div>\n\n		<div class=\"row\">\n			<input type=\"button\" value=\"Sign In\" data-action=\"/users/auth/login\" data-form-id=\"login-form\" blklab-click=\"login\"><br>\n			<span id=\"login-note\"></span>\n		</div>\n\n		<p class=\"note\">DON'T HAVE AN ACCOUNT? <a href=\"/users/create\">CREATE ONE</a></p>\n	</form>\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/modals/apply.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <input type=\"checkbox\" value=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" blklab-click=\"jobSelect\"> <label>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " ("
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + ")</label><br>\n";
},"3":function(depth0,helpers,partials,data) {
    return "                <span class=\"fa fa-file-o\"></span> 1 Resume attached.\n";
},"5":function(depth0,helpers,partials,data) {
    return "                Oops! You're missing a resume <span class=\"resume-container\">upload one now</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div id=\"close\" blklab-click=\"close\">X</div>\n<aside>\n    <h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.title : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h2>\n    <div class=\"divider\"></div>\n    <p>Please select which jobs you would like to apply to:</p>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.jobs : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</aside>\n<section id=\"student-detail\">\n    <img src=\"/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.student : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" class=\"avatar\">\n    <div class=\"detail\">\n        <h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.student : depth0)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.student : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "</h1>\n        <div><span class=\"icon university\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.student : depth0)) != null ? stack1.university : stack1), depth0))
    + "</span> <span class=\"icon degree\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.student : depth0)) != null ? stack1.major : stack1), depth0))
    + "</span></div>\n        <div class=\"bio\"><span class=\"icon user\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.student : depth0)) != null ? stack1.description : stack1), depth0))
    + "</span></div>\n        \n        <div class=\"resume\">\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.student : depth0)) != null ? stack1.resume : stack1),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n        \n        <div class=\"divider\"></div>\n        \n        <textarea class=\"message\" id=\"message-text\" placeholder=\"Write message here (optional)...\"></textarea>\n        \n        <input type=\"button\" value=\"Apply\" blklab-click=\"submit\">\n        \n    </div>\n</section>\n\n<section id=\"application-complete\">\n    <h2>Sweet!</h2>\n    <h3>Your application has been sent.</h3>\n    <div class=\"complete\"><span class=\"fa fa-check\"></span></div>\n</section>";
},"useData":true});

this["views"]["./app/js/views/modals/invite-filtered.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <li>\n        <a href=\"/explore/profile/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\"><img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"avatar\"></a>\n        <div class=\"name\">\n            <h2>"
    + alias3(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</h2>\n            <h3>"
    + alias3(((helper = (helper = helpers.university || (depth0 != null ? depth0.university : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"university","hash":{},"data":data}) : helper)))
    + ", "
    + alias3(((helper = (helper = helpers.department || (depth0 != null ? depth0.department : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"department","hash":{},"data":data}) : helper)))
    + "</h3>\n            "
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\n        </div>\n        <div class=\"add\" blklab-click=\"addLeaderInvite\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-email=\""
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\">\n            <img src=\"/assets/images/project-page-add-icon-gray.png\" class=\"plus\">\n            <img src=\"/assets/images/invite-selected.png\" class=\"check\">\n        </div>\n        <div class=\"clear\"></div>\n    </li>\n";
},"3":function(depth0,helpers,partials,data) {
    return "    <li>No Members</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["views"]["./app/js/views/modals/invite.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <li>\n                <a href=\"/explore/profile/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\"><img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"avatar\"></a>\n                <div class=\"name\">\n                    <h2>"
    + alias3(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</h2>\n                    <h3>"
    + alias3(((helper = (helper = helpers.university || (depth0 != null ? depth0.university : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"university","hash":{},"data":data}) : helper)))
    + ", "
    + alias3(((helper = (helper = helpers.department || (depth0 != null ? depth0.department : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"department","hash":{},"data":data}) : helper)))
    + "</h3>\n                    "
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\n                </div>\n                <div class=\"add\" blklab-click=\"addLeaderInvite\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-email=\""
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\">\n                    <img src=\"/assets/images/project-page-add-icon-gray.png\" class=\"plus\">\n                    <img src=\"/assets/images/invite-selected.png\" class=\"check\">\n                </div>\n                <div class=\"clear\"></div>\n            </li>\n";
},"3":function(depth0,helpers,partials,data) {
    return "            <li>No Members</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"close\" blklab-click=\"close\">X</div>\n<header>\n    <h1>Invite Members</h1>\n    <input type=\"text\" class=\"search\" id=\"search\">\n</header>\n<aside></aside>\n<section class=\"invite\">\n    <section class=\"list\">\n        <ul id=\"user-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </section>\n    <input type=\"text\" class=\"invite-field icon mail\" placeholder=\"Don’t see who you’re looking for? Invite them by email.\">\n    \n    <input type=\"button\" value=\"Invite\" class=\"invite-btn\" blklab-click=\"sendInvites\" blklab-enter=\"sendInvites\">\n</section>";
},"useData":true});

this["views"]["./app/js/views/nav.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header class=\"account\">\n	<div class=\"inner\">\n		<h1><a href=\"/students/profile\"><img src=\"/assets/images/logo.png\" id=\"logo\" alt=\"Kubby\"> Kubby</a></h1>\n	</div>\n</header>";
},"useData":true});

this["views"]["./app/js/views/professors/add-job-form.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"job-details\">\n    <div class=\"job-detail\">\n        <h3><input type=\"text\"></h3>\n\n        <div class=\"time row\"><img src=\"/assets/images/time-icon.png\" class=\"icon\"> <select class=\"field\">\n                <option>Full Time</option>\n                <option>Part Time</option>\n            </select></div>\n\n        <div class=\"degree row\"><img src=\"/assets/images/degree-icon.png\" class=\"icon degree-inline\"><input type=\"text\" name=\"degree\" placeholder=\"Major\" class=\"indent degree-field\"></div>\n\n        <div class=\"compensation row\">\n            <img src=\"/assets/images/finance-icon.png\" class=\"icon money-inline\">\n            <select name=\"compensation\" class=\"indent compensation-field\">\n                <option value=\"\">Compensation</option>\n                <option>Paid</option>\n                <option>Co-Authorship</option>\n                <option>Academic Credit</option>\n            </select>\n        </div>\n\n        <div class=\"skills row\">\n            <h4>Skills</h4>\n            <input type=\"text\" class=\"autocomplete\" id=\"skills-search-0\" placeholder=\"Search\" data-type=\"skills\" data-index=\"0\"> \n            <div id=\"skills-search-results-0\" class=\"results\"></div>\n            <div class=\"skills-list\" id=\"skills-list-0\">\n\n            </div>\n            <div class=\"clear\"></div>\n        </div>\n\n        <div class=\"description row\">\n            <h4>Project Description</h4>\n            <textarea name=\"description\" class=\"description-field\"></textarea>\n        </div>\n\n    </div>\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/applicants.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div class=\"project\">\n                <h2><img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"avatar\">"
    + alias3(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</h2>\n            </div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "            <div class=\"project\"><h2>No Applicants</h2></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.lambda, alias4=this.escapeExpression;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n<section id=\"project-page\" class=\"internal\">\n    <header>\n    <h1 blklab-click=\"edit\" blklab-model=\"projects.name\">"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1>\n        <span class=\"university\"><img src=\"/assets/images/university-icon-orange.png\"> "
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.professor : stack1)) != null ? stack1.university : stack1), depth0))
    + " <span class=\"project-status "
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.status : stack1), depth0))
    + "\">"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.status : stack1), depth0))
    + "</span> <span class=\"stage "
    + alias4(((helper = (helper = helpers.stage || (depth0 != null ? depth0.stage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stage","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.publish : stack1), depth0))
    + "</span></span>\n    </header>\n    \n    <section id=\"detail\">\n        <h2>Applicants</h2>\n        <div class=\"list\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.applicants : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n        \n    </section>\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/home.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section id=\"home\">\n	<section id=\"hero\" class=\"professor fade\">\n		<div class=\"overlay\">\n			<header class=\"inner\">\n				<h1><a href=\"/professors\"><img src=\"/assets/images/logo.png\" id=\"logo\" alt=\"Kubby\"> Kubby</a></h1>\n\n				<aside class=\"user\">\n					<a href=\"/professors/login\">SIGN IN</a> <a class=\"border\" href=\"/students\">For Students</a>\n				</aside>\n			</header>\n\n			<section id=\"detail\">\n				<section class=\"col text\">\n					<h2>FIND THE BEST TALENT FOR<br>YOUR RESEARCH OR CLASS.</h2>	\n					<p>You post. They come. It’s as simple as that.</p>\n				</section>\n				<section class=\"col form professor\">\n					<h2>Join For <strong>Free</strong></h2>\n					<form id=\"signup\">\n						<div class=\"row\">\n							<input type=\"text\" name=\"first_name\" placeholder=\"First Name\" class=\"half\" id=\"first_name_field\" required blklab-model=\"professors.first_name\"><input type=\"text\" name=\"last_name\" placeholder=\"Last Name\" class=\"half\" id=\"last_name_field\" required blklab-model=\"professors.last_name\">\n						</div>\n						<div class=\"row\">\n							<input type=\"email\" name=\"email\" class=\"full\" placeholder=\"Your .edu Email\" pattern=\".*\\.edu\" id=\"email_field\" required blklab-model=\"professors.email\">\n						</div>\n						<div class=\"row\">\n							<select name=\"department\" class=\"full\" id=\"department_field\" required blklab-model=\"professors.department\">\n								<option value=\"\">Department</option>\n                                <option>Anthropology</option>\n                                <option>Art and Art History</option>\n                                <option>Biology</option>\n                                <option>Chemistry and Biochemistry</option>\n                                <option>Classics</option>\n                                <option>Communication</option>\n                                <option>Economics</option>\n                                <option>English</option>\n                                <option>Environmental Studies and Sciences</option>\n                                <option>Ethnic Studies Program</option>\n                                <option>Graduate Program in Pastoral Ministries</option>\n                                <option>History</option>\n                                <option>Liberal Studies Program</option>\n                                <option>Mathematics and Computer Science</option>\n                                <option>Military Science (ROTC)</option>\n                                <option>Modern Languages and Literatures</option>\n                                <option>Music</option>\n                                <option>Philosophy</option>\n                                <option>Physics</option>\n                                <option>Political Science</option>\n                                <option>Psychology</option>\n                                <option>Public Health Program</option>\n                                <option>Religious Studies</option>\n                                <option>Sociology</option>\n                                <option>Theatre and Dance</option>\n                                <option>Women’s and Gender Studies Program</option>\n                                <option>Other</option>\n							</select>\n						</div>\n                        <div class=\"row\">\n                            <input type=\"password\" id=\"password_field\" blklab-model=\"professors.password\" class=\"full\" placeholder=\"Password\">\n                        </div>\n						\n						<span id=\"form-message\"></span>\n						<input type=\"button\" blklab-click=\"validate\" value=\"Get Started\" class=\"professor\">						\n					</form>\n				</section>\n			</section>\n		</div>\n	</section>\n\n	<footer>\n		<div class=\"inner\">\n			<section class=\"left\">KUBBY</section>\n			\n			<section class=\"right\"><a href=\"http://www.kubbyhq.com\" target=\"_blank\">Blog</a> <a href=\"http://www.angel.co/kubby\" target=\"_blank\">Jobs</a> <a href=\"mailto:hello@mykubby.com\">Contact</a></section>\n		</div>\n	</footer>\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/job-types.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <div class=\"job-type\" blklab-click=\"select\" data-id=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h4>Job "
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "</h4> <span class=\"fa fa-trash\" blklab-click=\"removeJob\" data-index=\""
    + alias3(((helper = (helper = helpers.rindex || (depth0 != null ? depth0.rindex : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rindex","hash":{},"data":data}) : helper)))
    + "\"></span>\n<section class=\"job-types\" id=\"job-types-"
    + alias3(((helper = (helper = helpers.rindex || (depth0 != null ? depth0.rindex : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rindex","hash":{},"data":data}) : helper)))
    + "\" data-index=\""
    + alias3(((helper = (helper = helpers.rindex || (depth0 != null ? depth0.rindex : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rindex","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.jobs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</section>\n<div class=\"new-job\">\n    <input type=\"text\" class=\"custom\" placeholder=\"Type in your own job title, separate by comma\">\n</div>";
},"useData":true});

this["views"]["./app/js/views/professors/login.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section id=\"home\">\n	<section id=\"hero\" class=\"professor fade\">\n		<div class=\"overlay\">\n			<header class=\"inner\">\n				<h1><a href=\"/professors\"><img src=\"/assets/images/logo.png\" id=\"logo\" alt=\"Kubby\"> Kubby</a></h1>\n\n				<aside class=\"user\">\n					<a href=\"/professors\">SIGN UP</a> <a class=\"border\" href=\"/students\">For Students</a>\n				</aside>\n\n			</header>\n\n			<section id=\"login\">\n                <form class=\"onboarding\" id=\"onboarding\">\n                    <h2>Login</h2>\n                    <div class=\"row\">\n                        <input type=\"text\" name=\"email\" value=\"\" placeholder=\"Email\" class=\"icon mail\" id=\"email_field\" blklab-model=\"professors.email\">\n                    </div>\n                    <div class=\"row\">\n                        <input type=\"password\" name=\"password\" id=\"password_field\" placeholder=\"Password\" class=\"icon lock\" blklab-model=\"professors.password\">\n                    </div>\n                    <span id=\"form-message\"></span>\n                    <input type=\"button\" value=\"Login\" class=\"inline professor\" blklab-click=\"login\">\n                </form>\n			</section>\n		</div>\n	</section>\n\n	<footer>\n		<div class=\"inner\">\n			<section class=\"left\">KUBBY</section>\n			\n            <section class=\"right\"><a href=\"http://www.kubbyhq.com\" target=\"_blank\">Blog</a> <a href=\"http://www.angel.co/kubby\" target=\"_blank\">Jobs</a> <a href=\"mailto:howdy@mykubby.com\">Contact</a></section>\n		</div>\n	</footer>\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/nav.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<header class=\"account\">\n	<div class=\"inner\">\n		<h1><a href=\"/professors/news-feed\"><img src=\"/assets/images/logo.png\" id=\"logo\" alt=\"Kubby\"> Kubby</a></h1>\n		<aside>\n			<ul>\n                <li><a href=\"/explore\">Browse</a></li>\n                <li><a href=\"/professors/projects\">My Kubbies</a></li>\n				<!--<li><img src=\"/assets/images/alert-icon.png\"></li>\n				<li><img src=\"/assets/images/messages-icon.png\"></li>-->\n				<li class=\"drop\">\n                    <a href=\"/professors/profile\"><img src=\"/app/assets/avatars/"
    + this.escapeExpression(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"nav-avatar\"></a>\n                    <ul class=\"dropdown\">\n                        <li data-href=\"/professors/profile\">My Profile</li>\n                        <li data-href=\"/professors/logout\">Logout</li>\n                    </ul>\n                </li>\n			</ul>\n		</aside>\n	</div>\n</header>";
},"useData":true});

this["views"]["./app/js/views/professors/news-feed.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "			     <div class=\"project\">\n                     <img src=\"/assets/images/project-type-"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "-icon.png\">\n                     <div class=\"detail\">\n                        <h2 data-href=\"/professors/projects/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2><span class=\"fa fa-trash\" blklab-click=\"deleteProject\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"></span>\n                     </div>\n                     \n                </div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "                <div class=\"project\">No Current Projects</div>\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "             <div class=\"project\">\n                 <a href=\"/explore/profile/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1._id : stack1), depth0))
    + "\"><img src=\"/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" class=\"avatar\"></a>\n                 <div class=\"detail\">\n                    <img src=\"/assets/images/project-type-"
    + alias2(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "-icon.png\"> <h3 data-href=\"/explore/project/"
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n                 </div>\n\n            </div>\n";
},"7":function(depth0,helpers,partials,data) {
    return "            <div class=\"project\">No Trending Projects</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n<section id=\"news-feed\" class=\"flexbox\">\n	<nav class=\"col\">\n		<h1>My Projects</h1>\n		<section id=\"current-projects\" class=\"professors\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.projects : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "		</section>\n				\n		<section id=\"applications\">\n			<ul>\n				<li><a href=\"/professors/projects\">You have "
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.projects : stack1)) != null ? stack1.length : stack1), depth0))
    + " Saved Projects</a></li>\n                <li><a href=\"/professors/projects\">You have 0 Applications Pending</a></li>\n			</ul>\n		</section>\n	</nav>\n	\n	<section id=\"news-feed-content\" class=\"col\">\n		<h2>What's New</h2>\n		\n		<div class=\"divider\"></div>\n		\n		<section id=\"explore-text\">\n			<h3>Welcome to Kubby!</h3>\n			<p>Here, you’ll find activity that is specially personalized for you.<br>Or type your own right here.</p>\n			<a href=\"/professors/post\"><input type=\"button\" value=\"Post A Job\" class=\"professor\"></a>\n		</section>				\n		\n		<div class=\"divider\"></div>\n		\n		<ul id=\"project-feed\">\n            <li>No News</li>\n		</ul>\n		\n	</section>\n	\n	<section id=\"news-feed-trending\" class=\"col\">\n		<h2>Trending Projects</h2>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.trending : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "	</section>\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/post-about.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n<section id=\"project\">\n	\n	<section id=\"progress\">\n        <div class=\"progress-line step_1\"></div>\n		<div class=\"line\">\n			<div class=\"step active\" id=\"step-1\"><span class=\"text\">About Project</span><br><span class=\"circle active\"></span></div>\n			<div class=\"step\" id=\"step-2\"><span class=\"text\">Open Positions</span><br><span class=\"circle\"></span></div>\n            <div class=\"step\" id=\"step-3\"><span class=\"text\">Details</span><br><span class=\"circle\"></span></div>\n			<div class=\"step\" id=\"step-4\"><span class=\"text\">Publish!</span><br><span class=\"circle\"></span></div> \n		</div>\n	</section>\n	\n	<section id=\"steps\">\n		<section id=\"about-project\">\n			<h3 class=\"center\">Great! Now let’s give your project a name and description.</h3>\n			<p class=\"center\">Don’t worry, you can change this later.</p>\n            <form id=\"about-form\" blklab-submit=\"next\">\n                <div class=\"row\">\n                    <label>Project Name</label>\n                    <input type=\"text\" name=\"name\" id=\"name_field\" placeholder=\"(i.e) The Effects of Fairy Dust on Unicorns\" blklab-model=\"projects.name\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.name : stack1), depth0))
    + "\">\n                </div>\n\n                <div class=\"row\">\n                    <label>Description</label>\n                    <textarea  name=\"description\" id=\"description_field\" placeholder=\"Tell us all about it!\" blklab-model=\"projects.description\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.description : stack1), depth0))
    + "</textarea>\n                </div>\n            </form>\n			\n		</section>\n		\n		<div class=\"move-on\">\n			<div class=\"step\"></div>\n\n			<input type=\"button\" value=\"Next\" blklab-click=\"next\">\n		</div>\n	</section>\n	\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/post-audience.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n<section id=\"project\">\n	\n	<section id=\"progress\">\n        <div class=\"progress-line step_4\"></div>\n		<div class=\"line\">\n			<div class=\"step active\" id=\"step-1\" data-href=\"/professors/post\"><span class=\"text\">Project Type</span><br><span class=\"circle active\"></span></div>\n			<div class=\"step active\" id=\"step-2\" data-href=\"/professors/post/about\"><span class=\"text\">About Project</span><br><span class=\"circle active\"></span></div>\n			<div class=\"step active\" id=\"step-3\" data-href=\"/professors/post/jobs\"><span class=\"text\">Jobs (Optional)</span><br><span class=\"circle active\"></span></div>\n			<div class=\"step active\" id=\"step-4\" data-href=\"/professors/post/audience\"><span class=\"text\">Audience</span><br><span class=\"circle active\"></span></div>\n			<div class=\"step\" id=\"step-6\" data-href=\"/professors/post/publish\"><span class=\"text\">Publish!</span><br><span class=\"circle\"></span></div> \n		</div>\n	</section>\n	\n	<section id=\"steps\">\n		<section id=\"audience\">\n			<h3>Who should see these jobs and projects?</h3>\n			<p>Please keep in mind that Kubby is built on the pillar of transparency. Therefore, we encourage you to consider creating a public project. You can always change this later.</p>\n			\n			<div class=\"types\">\n				<div class=\"type\" blklab-click=\"select\" data-key=\"audience\" data-value=\"public\">\n					<img src=\"/assets/images/public-icon-gray.png\" class=\"inactive\">\n					<img src=\"/assets/images/public-icon.png\" class=\"active\">\n					Public\n				</div>\n\n				<div class=\"type\" blklab-click=\"select\" data-key=\"audience\" data-value=\"network\">\n					<img src=\"/assets/images/network-icon-gray.png\" class=\"inactive\">\n					<img src=\"/assets/images/network-icon.png\" class=\"active\">\n					My Network\n				</div>\n\n				<div class=\"type\" blklab-click=\"select\" data-key=\"audience\" data-value=\"invite\">\n					<img src=\"/assets/images/invite-icon-gray.png\" class=\"inactive\">\n					<img src=\"/assets/images/invite-icon.png\" class=\"active\">\n					Invite Only\n				</div>\n			</div>\n		</section>\n		\n		<div class=\"move-on\">\n			<div class=\"step\"></div>\n\n			<input type=\"button\" value=\"Next\"  data-href=\"/professors/post/publish\">\n		</div>\n	</section>\n	\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/post-categories.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "				<div class=\"interest-cell "
    + alias3(((helper = (helper = helpers.selected || (depth0 != null ? depth0.selected : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"selected","hash":{},"data":data}) : helper)))
    + "\" blklab-click=\"activate\" data-value=\""
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">\n					<img src=\"/assets/images/check.png\" class=\"check\">\n					<img src=\"/assets/images/"
    + alias3(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\" class=\"icon\">\n					<h3>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n				</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n<section id=\"progress\">\n    <div class=\"progress-line step_1\"></div>\n    <div class=\"line\">\n        <div class=\"step active\" id=\"step-1\" data-href=\"/professors/post/about\"><span class=\"text\">About Project</span><br><span class=\"circle active\"></span></div>\n        <div class=\"step\" id=\"step-2\"><span class=\"text\">Open Positions</span><br><span class=\"circle\"></span></div>\n        <div class=\"step\" id=\"step-3\"><span class=\"text\">Details</span><br><span class=\"circle\"></span></div>\n        <div class=\"step\" id=\"step-4\"><span class=\"text\">Publish!</span><br><span class=\"circle\"></span></div> \n    </div>\n</section>\n<section id=\"content-pane\" data-href=\"/students/onboarding/step/2\">\n	<div class=\"inner\">\n		<form class=\"onboarding\" blklab-submit=\"next\">\n			<h2>What category?</h2>\n			<p></p>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			\n			<span id=\"form-message\"></span>\n			\n			<div class=\"move-on\">\n				\n				<input type=\"button\" id=\"back\" data-href=\"/professors/post/about\" value=\"Back\"> <input type=\"button\" value=\"Next\" data-href=\"/professors/post/jobs\">\n			</div>\n		</form>				\n	</div>\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/post-jobs-detail.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "					<div class=\"job-detail\">\n						<h3>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3> <span class=\"fa fa-trash\" blklab-click=\"removeJob\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"></span>\n						\n                        <!--<span class=\"field selected\" blklab-click=\"activate\" data-value=\"Full Time\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">Full-Time</span> <span class=\"field\" blklab-click=\"activate\" data-value=\"Part Time\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">Part-Time</span>-->\n                        \n						<div class=\"time row tooltip-right\" data-tooltip=\"Tell students whether this is a full-time or part-time position.\"><img src=\"/assets/images/time-icon.png\" class=\"icon\"> \n                            <select class=\"field\" >\n"
    + ((stack1 = (helpers.select || (depth0 && depth0.select) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"select","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                            </select>\n                        </div>\n						\n                        <div class=\"degree row tooltip-right\" data-tooltip=\"What degree is recommended for this position.\">\n                            <img src=\"/assets/images/hat-icon.png\" class=\"icon degree-inline\">\n							<select name=\"degree\" class=\"indent degree-field\">\n"
    + ((stack1 = (helpers.select || (depth0 && depth0.select) || alias1).call(depth0,(depth0 != null ? depth0.degree : depth0),{"name":"select","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "							</select>\n						</div>\n						\n                        <div class=\"major row tooltip-right\" data-tooltip=\"Are you looking for an applicant with a certain major? You can select up to three.\">\n                            <img src=\"/assets/images/degree-icon.png\"  class=\"icon major-inline\">\n                            <input type=\"text\" name=\"degree\" id=\"majors-search-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Major\" class=\"indent major-field autocomplete\" data-tooltip=\"Test\" data-type=\"majors\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.major || (depth0 != null ? depth0.major : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"major","hash":{},"data":data}) : helper)))
    + "\">\n                            <div id=\"majors-search-results-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"results\"></div>\n                        </div>\n                        \n                        \n                        <div class=\"compensation row\">\n                            <h4 class=\"tooltip-right\" data-tooltip=\"What kind of compensation can the student expect for this job? If no compensation, select “Volunteer.”\"><img src=\"/assets/images/finance-icon.png\" class=\"icon money-inline\"> Compensation <span class=\"fa fa-question-circle\"></span></h4>\n                            <div class=\"clear\"></div>\n                            <div class=\"col\">\n                                <input id=\"checkbox-1-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom\" name=\"compensation-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "[]\" type=\"checkbox\" value=\"Paid\">\n                                <label for=\"checkbox-1-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom-label\">Paid</label>\n                            </div>\n                            \n                            <div class=\"col\">\n                                <input id=\"checkbox-2-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom\" name=\"compensation-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "[]\" type=\"checkbox\" value=\"Co-Authorship\">\n                                <label for=\"checkbox-2-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom-label\">Co-Authorship</label>\n                            </div>\n                            \n                            <div class=\"col\">\n                                <input id=\"checkbox-3-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom\" name=\"compensation-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "[]\" type=\"checkbox\" value=\"Academic Credit\">\n                                <label for=\"checkbox-3-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom-label\">Academic Credit</label>\n                            </div>\n                            \n                            <div class=\"col\">\n                                <input id=\"checkbox-4-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom\" name=\"compensation-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "[]\" type=\"checkbox\" value=\"Volunteer\">\n                                <label for=\"checkbox-4-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom-label\">Volunteer</label>\n                            </div>\n                            \n							<!--<select name=\"compensation\" class=\"indent compensation-field\">\n"
    + ((stack1 = (helpers.select || (depth0 && depth0.select) || alias1).call(depth0,(depth0 != null ? depth0.compensation : depth0),{"name":"select","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "							</select>-->\n						</div>\n                        \n                        <div class=\"skills row\">\n							<h4 class=\"tooltip-right\" data-tooltip=\"Below are skills that are pre-selected for this position. Click on any to disable.\">Skills <span class=\"fa fa-question-circle\"></span></h4>\n							<input type=\"text\" class=\"autocomplete\" id=\"skills-search-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Search\" data-type=\"skills\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"> \n						    <div id=\"skills-search-results-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"results\"></div>\n							<div class=\"skills-list\" id=\"skills-list-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n							</div>\n                            <div class=\"clear\"></div>\n						</div>\n						\n						<div class=\"description row\">\n							<h4>Task Description</h4>\n							<textarea name=\"description\" class=\"description-field\" blklab-model=\"jobs.description\" placeholder=\"Describe the job here! Tell students any additional information they might need before applying. Some things you might include are additional qualifications, what they can expect to learn on the job, etc.\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\n						</div>\n						\n					</div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "                                <option>Full Time</option>\n                                <option>Part Time</option>\n";
},"4":function(depth0,helpers,partials,data) {
    return "                                    <option>Any Degree</option>\n                                    <option>Graduate</option>\n                                    <option>Undergrad</option>\n";
},"6":function(depth0,helpers,partials,data) {
    return "								<option value=\"\">Compensation</option>\n								<option>Paid</option>\n								<option>Co-Authorship</option>\n								<option>Academic Credit</option>\n                                <option>Volunteer</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n<section id=\"project\">\n	\n	<section id=\"progress\">\n        <div class=\"progress-line step_3\"></div>\n		<div class=\"line\">\n			<div class=\"line\">\n			<div class=\"step active\" id=\"step-1\" data-href=\"/professors/post/about\"><span class=\"text\">About Project</span><br><span class=\"circle active\"></span></div>\n			<div class=\"step active\" id=\"step-2\" data-href=\"/professors/post/jobs\"><span class=\"text\">Open Positions</span><br><span class=\"circle active\"></span></div>\n            <div class=\"step active\" id=\"step-3\"><span class=\"text\">Details</span><br><span class=\"circle active\"></span></div>\n			<div class=\"step\" id=\"step-4\"><span class=\"text\">Publish!</span><br><span class=\"circle\"></span></div> \n		</div>\n		</div>\n	</section>\n	\n	<section id=\"steps\" class=\"jobs\">\n			\n		<section id=\"jobs\">\n			<h3>Tell us more...</h3>\n			\n			<section class=\"job-details\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.jobs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</section>\n		</section>\n		\n		<div class=\"move-on\">\n			<div class=\"step\"></div>\n\n			<input type=\"button\" id=\"back\" data-href=\"/professors/post/jobs\" value=\"Back\"> <input type=\"button\" value=\"Next\" blklab-click=\"next\">\n		</div>\n	\n	</section>\n	\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/post-jobs.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n<section id=\"project\">\n	\n	<section id=\"progress\">\n        <div class=\"progress-line step_2\"></div>\n		<div class=\"line\">\n			<div class=\"line\">\n			<div class=\"step active\" id=\"step-1\" data-href=\"/professors/post/about\"><span class=\"text\">About Project</span><br><span class=\"circle active\"></span></div>\n			<div class=\"step active\" id=\"step-2\"><span class=\"text\">Open Positions</span><br><span class=\"circle active\"></span></div>\n            <div class=\"step\" id=\"step-3\"><span class=\"text\">Details</span><br><span class=\"circle\"></span></div>\n			<div class=\"step\" id=\"step-4\"><span class=\"text\">Publish!</span><br><span class=\"circle\"></span></div> \n		</div>\n		</div>\n	</section>\n	\n	<section id=\"steps\" class=\"jobs\">\n			\n		<section id=\"jobs\">\n			<h3 class=\"center\">Excellent! So you need help with your "
    + this.escapeExpression(((helper = (helper = helpers.type_name || (depth0 != null ? depth0.type_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type_name","hash":{},"data":data}) : helper)))
    + ".</h3>\n			\n            <h3 class=\"center\">What positions are you hiring for?</h3>\n            <p class=\"center\"></p>\n            \n            <section id=\"job-types-container\">\n            </section>\n            \n            <img src=\"/assets/images/project-page-add-icon-gray.png\" blklab-click=\"addJob\" class=\"add\"> <span class=\"add-job-text\" blklab-click=\"addJob\">Add a Job</span> <span id=\"alert\"><img src=\"/assets/images/alert.png\" class=\"float-left\">No jobs yet? No problem.<br>Hit next to skip this step.</span>\n            \n            \n        </section>        \n\n		\n		<div class=\"move-on\">\n			<div class=\"step\"></div>\n\n			<input type=\"button\" id=\"back\" data-href=\"/professors/post/categories\" value=\"Back\"> <input type=\"button\" value=\"Next\" blklab-click=\"next\">\n		</div>\n	\n	</section>\n	\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/post-publish.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "                            <div class=\"tag\">"
    + ((stack1 = this.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</div>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <div class=\"job\">\n                        <h3>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n                        <div class=\"job-overview\">\n                            <div class=\"details\">\n                                <span class=\"type\"><img src=\"/assets/images/time-icon.png\"> "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</span>\n                                <span class=\"majors\"><img src=\"/assets/images/degree-icon.png\"> "
    + alias3(((helper = (helper = helpers.degree || (depth0 != null ? depth0.degree : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"degree","hash":{},"data":data}) : helper)))
    + "</span>\n                                <span class=\"pay\"><img src=\"/assets/images/finance-icon.png\"> "
    + alias3(((helper = (helper = helpers.compensation || (depth0 != null ? depth0.compensation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"compensation","hash":{},"data":data}) : helper)))
    + "</span>\n                            </div>\n                            <div class=\"skills\">\n                                Skills: "
    + alias3(((helper = (helper = helpers.skills || (depth0 != null ? depth0.skills : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"skills","hash":{},"data":data}) : helper)))
    + "\n                            </div>\n                        </div>\n                    </div>\n";
},"5":function(depth0,helpers,partials,data) {
    return "                    <div class=\"job\">\n                        <h3>No Positions</h3>\n                    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.lambda, alias4=this.escapeExpression;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n<section id=\"project\">\n	\n	<section id=\"progress\">\n        <div class=\"progress-line step_4\"></div>\n		<div class=\"line\">\n			<div class=\"line\">\n			<div class=\"step active\" id=\"step-1\" data-href=\"/professors/post/about\"><span class=\"text\">About Project</span><br><span class=\"circle active\"></span></div>\n			<div class=\"step active\" id=\"step-2\" data-href=\"/professors/post/jobs\"><span class=\"text\">Open Positions</span><br><span class=\"circle active\"></span></div>\n            <div class=\"step active\" id=\"step-3\" data-href=\"/professors/post/jobs/detail\"><span class=\"text\">Details</span><br><span class=\"circle active\"></span></div>\n			<div class=\"step active\" id=\"step-4\"><span class=\"text\">Publish!</span><br><span class=\"circle active\"></span></div> \n		</div>\n		</div>\n	</section>\n	\n	<section id=\"steps\" class=\"publish\">\n		<div class=\"step\">\n            <h3 class=\"center\">Hot off the press! Here’s your new listing.</h3>\n            <p class=\"center\">This is how your project will appear in the search. If you need to edit anything, you can always edit after you post or go back and make changes.</p>\n        </div>\n\n        <section class=\"project-description\">\n            <header>\n                <div class=\"avatar\"><img src=\"/assets/avatars/"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\"></div>\n                <div class=\"project-meta\">\n                    <h1>"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1>\n                    <span class=\"university\"><img src=\"/assets/images/university-icon-orange.png\"> "
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.professor : depth0)) != null ? stack1.university : stack1), depth0))
    + "</span>\n                    <span class=\"degree\"><img src=\"/assets/images/hat-icon-orange.png\"> "
    + alias4(((helper = (helper = helpers.degrees || (depth0 != null ? depth0.degrees : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"degrees","hash":{},"data":data}) : helper)))
    + "</span>\n                    <span class=\"major\"><img src=\"/assets/images/degree-icon-orange.png\"> "
    + alias4(((helper = (helper = helpers.majors || (depth0 != null ? depth0.majors : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"majors","hash":{},"data":data}) : helper)))
    + "</span>\n                    <div class=\"tags\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </header>\n            <section class=\"team\">\n                <h3>TEAM</h3>\n                <div class=\"team-list\">\n                    no other members\n                </div>\n            </section>\n            <section class=\"detail\">\n                <h2>About Projects</h2>    \n                <p>"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n            </section>\n            <section class=\"jobs\">\n                <h2>Open Positions</h2>    \n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.jobs : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "            </section>\n        </section>\n        \n        <div id=\"screen\"></div>\n        <div id=\"project-done\">\n            <h3>WooHoo!</h3>\n            <h4>You've just added a new item to your Kubby!<br>How do you want to tell people about it?</h4>\n            <div class=\"social\">\n                <img src=\"/assets/images/facebook-share-icon.png\">\n                <img src=\"/assets/images/twitter-share-icon.png\">\n                <img src=\"/assets/images/google-share-icon.png\">\n                <img src=\"/assets/images/linkedin-share-icon.png\">\n                <img src=\"/assets/images/mail-share-icon.png\">\n            </div>\n            <div class=\"btn invite\" blklab-click=\"invite\">\n                Invite Students\n            </div>\n            <div class=\"other\">\n                <a href=\"/professors/projects/\" id=\"view-project\">View Your Project</a> or <a href=\"/professors/post\">Create Another</a>\n            </div>\n        </div>\n        \n		<div class=\"move-on\">\n			<input type=\"button\" id=\"back\" data-href=\"/professors/post/jobs/detail\" value=\"Back\"> <input type=\"button\" value=\"Publish\" blklab-click=\"publish\">\n		</div>\n	</section>\n	\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/post-type.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n<section id=\"project\">\n	\n	<!--<section id=\"progress\">\n		<div class=\"line\">\n			<div class=\"step active\" id=\"step-1\" data-href=\"/professors/post\"><span class=\"text\">Project Type</span><br><span class=\"circle active\"></span></div>\n			<div class=\"step\" id=\"step-2\" data-href=\"/professors/post/about\"><span class=\"text\">About Project</span><br><span class=\"circle\"></span></div>\n			<div class=\"step\" id=\"step-3\" data-href=\"/professors/post/jobs\"><span class=\"text\">Jobs (Optional)</span><br><span class=\"circle\"></span></div>\n			<div class=\"step\" id=\"step-4\" data-href=\"/professors/post/audience\"><span class=\"text\">Audience</span><br><span class=\"circle\"></span></div>\n			<div class=\"step\" id=\"step-6\" data-href=\"/professors/post/publish\"><span class=\"text\">Publish!</span><br><span class=\"circle\"></span></div> \n		</div>\n	</section>-->\n	\n	<section id=\"steps\" class=\"center\">\n		\n		<h2>\n            Hey there, let’s get you set up.<br>\n            What would you like to add to your kubby?\n        </h2>\n		\n		<section class=\"project-types\">\n			<div class=\"type\" blklab-click=\"select\" data-key=\"type\" data-value=\"research\">\n				New Research Project\n			</div>\n			\n			<div class=\"type\" blklab-click=\"select\" data-key=\"type\" data-value=\"course-work\">\n				New Course\n			</div>\n		</section>\n		\n		<!--<div class=\"move-on\">\n			<div class=\"step\"></div>\n\n			<input type=\"button\" value=\"Next\"  data-href=\"/professors/post/about\">\n		</div>-->\n	</section>	\n	\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/post.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n<section id=\"project\" class=\"background\">\n	\n	<div class=\"floating\">\n		<div class=\"text\">\n			<p>Hi there!</p>\n			<p>Looks like you don’t have any projects started.</p>\n			<p>Let’s get one going for you.</p>\n		</div>\n		\n		<a href=\"/professors/post/detail\"><input type=\"button\" class=\"professor\" value=\"CREATE PROJECT\"></a>\n	</div>\n	\n	<div class=\"move-on\">\n		<div class=\"step\"></div>\n\n		<input type=\"button\" value=\"Next\"  data-href=\"/professors/post/about\">\n	</div>\n	\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/profile.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <li><a href=\""
    + alias3(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a> <span class=\"fa fa-trash\" blklab-click=\"removeLink\" data-id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"></span></li>\n";
},"3":function(depth0,helpers,partials,data) {
    return "                    <li>No Links</li>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "			     <div class=\"project\">\n                     <img src=\"/assets/images/project-type-"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "-icon.png\">\n                     <div class=\"detail\">\n                        <h2 data-href=\"/professors/projects/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2><span class=\"fa fa-trash\" blklab-click=\"deleteProject\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"></span>\n                     </div>\n                     \n                </div>\n";
},"7":function(depth0,helpers,partials,data) {
    return "                <div class=\"project\">No Current Projects</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n<section id=\"profile\" class=\"flexbox\">\n	<nav class=\"col\">\n        <div class=\"upload\">\n            <input type=\"file\" blklab-change=\"handleFileSelect\" class=\"file\">\n            <img src=\"/app/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" class=\"avatar\" id=\"avatar\">\n            <i class=\"loader\" id=\"loader\"></i>\n        </div>\n		<h1><span blklab-click=\"edit\" blklab-model=\"professors.first_name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.first_name : stack1), depth0))
    + "</span> <span blklab-click=\"edit\" blklab-model=\"professors.last_name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "</span></h1>\n		<section class=\"education\">\n			<p class=\"icon university orange\" blklab-click=\"edit\" blklab-model=\"professors.university\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.university : stack1), depth0))
    + "</p>\n			<p class=\"icon degree orange\" blklab-click=\"edit\" blklab-model=\"professors.department\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.department : stack1), depth0))
    + "</p>\n		</section>\n		\n		<!--<section class=\"rating\">\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n		</section>\n		\n		<div class=\"send-message\">\n			<img src=\"/assets/images/mail-icon.png\"> <span>Send a Message</span>\n		</div>-->\n		\n	</nav>\n	\n	<section id=\"profile-content\" class=\"col\">\n		<h2>About Me</h2>\n		<div blklab-click=\"edit\" blklab-model=\"professors.description\" class=\"description\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n		\n		\n		<h2>Links</h2>\n		<section id=\"documents\">\n            <ul id=\"documents-list\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.links : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "            </ul>\n            <img src=\"/assets/images/project-page-add-icon-gray.png\" class=\"add\" blklab-click=\"addLink\">\n		</section>\n		\n		<h2>Projects</h2>\n		<section id=\"projects\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.projects : stack1),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "        </section>\n		\n		<h2>Past Projects</h2>\n		<section id=\"past-projects\">\n            <div>None</div>\n        </section>\n		\n	</section>	\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/professors/project.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"tag\">"
    + ((stack1 = this.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <div class=\"job-detail\">\n                            <h3>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3> <span class=\"fa fa-trash\" blklab-click=\"removeJob\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"></span>\n\n                            <!--<span class=\"field selected\" blklab-click=\"activate\" data-value=\"Full Time\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">Full-Time</span> <span class=\"field\" blklab-click=\"activate\" data-value=\"Part Time\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">Part-Time</span>-->\n\n                            <div class=\"time row tooltip-right\" data-tooltip=\"Tell students whether this is a full-time or part-time position.\"><img src=\"/assets/images/time-icon.png\" class=\"icon\"> \n                                <select class=\"field\" >\n"
    + ((stack1 = (helpers.select || (depth0 && depth0.select) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"select","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                                </select>\n                            </div>\n\n                            <div class=\"degree row\">\n                                <img src=\"/assets/images/hat-icon.png\" class=\"icon degree-inline\">\n                                <select name=\"degree\" class=\"indent degree-field\">\n"
    + ((stack1 = (helpers.select || (depth0 && depth0.select) || alias1).call(depth0,(depth0 != null ? depth0.degree : depth0),{"name":"select","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                                </select>\n                            </div>\n\n                            <div class=\"major row tooltip-right\" data-tooltip=\"Are you looking for an applicant with a certain major? You can select up to three.\">\n                                <img src=\"/assets/images/degree-icon.png\"  class=\"icon major-inline\">\n                                <input type=\"text\" name=\"degree\" id=\"majors-search-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Major\" class=\"indent major-field autocomplete\" data-tooltip=\"Test\" data-type=\"majors\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.major || (depth0 != null ? depth0.major : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"major","hash":{},"data":data}) : helper)))
    + "\">\n                                <div id=\"majors-search-results-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"results\"></div>\n                            </div>\n\n\n                            <div class=\"compensation row\">\n                                <h4 class=\"tooltip-right\" data-tooltip=\"What kind of compensation can the student expect for this job? If no compensation, select “Volunteer.”\"><img src=\"/assets/images/finance-icon.png\" class=\"icon money-inline\"> Compensation <span class=\"fa fa-question-circle\"></span></h4>\n                                <div class=\"clear\"></div>\n                                <div class=\"col\">\n                                    <input id=\"Paid-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom\" name=\"compensation-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "[]\" type=\"checkbox\" value=\"Paid\" "
    + alias3((helpers.checked || (depth0 && depth0.checked) || alias1).call(depth0,(depth0 != null ? depth0.compensation : depth0),{"name":"checked","hash":{},"data":data}))
    + ">\n                                    <label for=\"checkbox-1-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom-label\">Paid</label>\n                                </div>\n\n                                <div class=\"col\">\n                                    <input id=\"Co-Authorship-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom\" name=\"compensation-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "[]\" type=\"checkbox\" value=\"Co-Authorship\">\n                                    <label for=\"checkbox-2-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom-label\">Co-Authorship</label>\n                                </div>\n\n                                <div class=\"col\">\n                                    <input id=\"AcademicCredit-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom\" name=\"compensation-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "[]\" type=\"checkbox\" value=\"Academic Credit\">\n                                    <label for=\"checkbox-3-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom-label\">Academic Credit</label>\n                                </div>\n\n                                <div class=\"col\">\n                                    <input id=\"Volunteer-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom\" name=\"compensation-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "[]\" type=\"checkbox\" value=\"Volunteer\">\n                                    <label for=\"checkbox-4-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom-label\">Volunteer</label>\n                                </div>\n\n                                <!--<select name=\"compensation\" class=\"indent compensation-field\">\n"
    + ((stack1 = (helpers.select || (depth0 && depth0.select) || alias1).call(depth0,(depth0 != null ? depth0.compensation : depth0),{"name":"select","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                                </select>-->\n                            </div>\n\n                            <div class=\"skills row\">\n                                <h4 class=\"tooltip-right\" data-tooltip=\"Below are skills that are pre-selected for this position. Click on any to disable.\">Skills <span class=\"fa fa-question-circle\"></span></h4>\n                                <input type=\"text\" class=\"autocomplete\" id=\"skills-search-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Search\" data-type=\"skills\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"> \n                                <div id=\"skills-search-results-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"results\"></div>\n                                <div class=\"skills-list\" id=\"skills-list-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n                                </div>\n                                <div class=\"clear\"></div>\n                            </div>\n\n                            <div class=\"description row\">\n                                <h4>Task Description</h4>\n                                <textarea name=\"description\" class=\"description-field\" blklab-model=\"jobs.description\" placeholder=\"Describe the job here! Tell students any additional information they might need before applying. Some things you might include are additional qualifications, what they can expect to learn on the job, etc.\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\n                            </div>\n\n                        </div>\n";
},"4":function(depth0,helpers,partials,data) {
    return "                                    <option>Full Time</option>\n                                    <option>Part Time</option>\n";
},"6":function(depth0,helpers,partials,data) {
    return "                                        <option>Any Degree</option>\n                                        <option>Graduate</option>\n                                        <option>Undergrad</option>\n";
},"8":function(depth0,helpers,partials,data) {
    return "                                    <option value=\"\">Compensation</option>\n                                    <option>Paid</option>\n                                    <option>Co-Authorship</option>\n                                    <option>Academic Credit</option>\n                                    <option>Volunteer</option>\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n                    <div class=\"job\" blklab-click=\"toggle\">\n                        <h3>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n                        <div class=\"job-overview\">\n                            <div class=\"details\">\n                                <span class=\"type\"><img src=\"/assets/images/time-icon.png\"> "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</span>\n                                <span class=\"majors\"><img src=\"/assets/images/degree-icon.png\"> "
    + alias3(((helper = (helper = helpers.degree || (depth0 != null ? depth0.degree : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"degree","hash":{},"data":data}) : helper)))
    + "</span>\n                                <span class=\"pay\"><img src=\"/assets/images/finance-icon.png\"> "
    + alias3(((helper = (helper = helpers.compensation || (depth0 != null ? depth0.compensation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"compensation","hash":{},"data":data}) : helper)))
    + "</span>\n                            </div>\n                            <div class=\"skills\">\n                                Skills: "
    + alias3(((helper = (helper = helpers.skills || (depth0 != null ? depth0.skills : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"skills","hash":{},"data":data}) : helper)))
    + "\n                            </div>\n                        </div>\n                        <div class=\"job-description\">\n                            <h3>Task Description</h3>\n                            "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n                ";
},"12":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <span class=\"avatar\">\n                        <div class=\"flag professor\" blklab-click=\"removeLeader\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">X</div><img src=\"/assets/avatars/"
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"avatar-overlap\" title=\""
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\">\n                    </span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.lambda, alias4=this.escapeExpression;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n<section id=\"project-page\" class=\"internal\">\n    <header>\n    <h1 blklab-click=\"edit\" blklab-model=\"projects.name\">"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1>\n    <span class=\"university\"><img src=\"/assets/images/university-icon-orange.png\"> "
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.professor : stack1)) != null ? stack1.university : stack1), depth0))
    + " <img src=\"/assets/images/university-icon-orange.png\"> "
    + alias4(((helper = (helper = helpers.jobCount || (depth0 != null ? depth0.jobCount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobCount","hash":{},"data":data}) : helper)))
    + "</span> <span class=\"project-status "
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.status : stack1), depth0))
    + "\">"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.status : stack1), depth0))
    + "\n        <ul>\n            <li blklab-click=\"changeStatus\" data-id=\""
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1._id : stack1), depth0))
    + "\" data-value=\"archived\" class=\"archived-status\">Archived</li>\n            <li blklab-click=\"changeStatus\" data-id=\""
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1._id : stack1), depth0))
    + "\" data-value=\"recruiting\" class=\"recruiting-status\">Recruiting</li>\n            <li blklab-click=\"changeStatus\" data-id=\""
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1._id : stack1), depth0))
    + "\" data-value=\"active\" class=\"active-status\">Active</li>\n            <li blklab-click=\"changeStatus\" data-id=\""
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1._id : stack1), depth0))
    + "\" data-value=\"draft\" class=\"draft-status\">Draft</li>\n        </ul>\n    </span>\n    <span class=\"tags\" id=\"tags\">\n        <!--<div class=\"tag add\" blklab-click=\"addTag\">Tag +</div> -->\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.tags : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </span>\n    <span class=\"stage "
    + alias4(((helper = (helper = helpers.stage || (depth0 != null ? depth0.stage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stage","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.publish : stack1), depth0))
    + "</span>\n        \n        <!--<input type=\"button\" value=\"Apply\">-->\n    </header>\n    \n    <div class=\"flexbox full\">\n    <section id=\"detail\" class=\"col\">\n        <h2>Description</h2>\n        <div class=\"description\" blklab-click=\"edit\" blklab-model=\"projects.description\">"
    + ((stack1 = alias3(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n        \n        <h2>Compensation</h2>\n        <div class=\"description\">"
    + alias4(((helper = (helper = helpers.compensation || (depth0 != null ? depth0.compensation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"compensation","hash":{},"data":data}) : helper)))
    + "</div>\n        \n        <h2>Open Positions</h2>    \n            <section class=\"jobs project-description\" id=\"jobs\">\n                <section class=\"job-details\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.jobs : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </section>\n                <!--"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.jobs : stack1),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "-->\n            </section>\n            <!--<img src=\"/assets/images/project-page-add-icon-gray.png\" class=\"add\" blklab-click=\"addJob\">-->\n\n        </section>\n\n        <aside class=\"col\">\n            <h3>Share</h3>\n            <div class=\"social\">\n                <img src=\"/assets/images/project-page-facebook.png\">\n                <img src=\"/assets/images/project-page-twitter.png\">\n                <img src=\"/assets/images/project-page-mobile.png\">\n                <img src=\"/assets/images/project-page-mail.png\">\n            </div>\n            <h3>Team Leaders</h3>\n            <div class=\"leaders team-list\">\n                <img src=\"/assets/avatars/"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.professor : stack1)) != null ? stack1.avatar : stack1), depth0))
    + "\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.leaders : stack1),{"name":"each","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n                <img src=\"/assets/images/project-page-add-icon.png\" class=\"add\" blklab-click=\"addLeader\">\n            </div>\n\n            <h3>Team Members</h3>\n            <div class=\"members\"></div>\n            <!--<div class=\"btn\" blklab-click=\"addMember\">Invite More Members</div>-->\n        </aside>\n    <div class=\"clear\"></div>\n    </div>\n</section>";
},"useData":true});

this["views"]["./app/js/views/professors/projects.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div class=\"project\">\n                <h2><a href=\"/professors/projects/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></h2>\n                <img src=\"/assets/images/project-type-"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "-icon.png\" class=\"project-type\"> <span class=\"fa fa-user\"></span> <span class=\"applicants\" data-href=\"/professors/projects/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "/applicants\">"
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.applicants : depth0)) != null ? stack1.length : stack1), depth0))
    + " Applicants</span> <span class=\"fa fa-eye\"></span> <span class=\"views\">0 Views</span> <span class=\"project-status "
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span> \n                \n                <div class=\"vertical\"></div>\n                <span class=\"remove\" blklab-click=\"deleteProject\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">X</span>\n            </div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "            <div class=\"project\"><h2>No Projects</h2></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n<section id=\"projects-list\">\n    <header>\n        <h1>My Projects</h1>\n        <input type=\"button\" value=\"New Project\" data-href=\"/professors/post\">\n    </header>\n    <div class=\"list\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.projects : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n</section>";
},"useData":true});

this["views"]["./app/js/views/students/home.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section id=\"home\">\n	<section id=\"hero\" class=\"student fade\">\n		<div class=\"overlay\">\n			<header class=\"inner\">\n				<h1><a href=\"/students\"><img src=\"/assets/images/logo.png\" id=\"logo\" alt=\"Kubby\"> Kubby</a></h1>\n\n				<aside class=\"user\">\n					<a href=\"/students/login\">SIGN IN</a> <a class=\"border\" href=\"/professors\">For Professors</a>\n				</aside>\n\n			</header>\n\n			<section id=\"detail\">\n				<section class=\"col text\">\n					<h2>EVER WANTED TO WORK FOR A PROFESSOR BUT WERE TOO AFRAID TO ASK?</h2>	\n					<p>Sign up today and find out which professors are hiring, all within minutes, not office hours.</p>\n				</section>\n				<section class=\"col form\">\n					<h2>Join For <strong>Free</strong></h2>\n					<form id=\"signup\">\n						<div class=\"row\">\n							<input type=\"text\" name=\"first_name\" placeholder=\"First Name\" class=\"half\" id=\"first_name_field\" required  blklab-model=\"students.first_name\"><input type=\"text\" name=\"last_name\" placeholder=\"Last Name\" class=\"half\" id=\"last_name_field\" required blklab-model=\"students.last_name\">\n						</div>\n						<div class=\"row\">\n							<input type=\"email\" name=\"email\" class=\"full\" placeholder=\"Your .edu Email\" pattern=\".*\\.edu\" id=\"email_field\" required blklab-model=\"students.email\">\n						</div>\n						<div class=\"row major\">\n							<input type=\"text\" id=\"majors-search\"  data-type=\"majors\" placeholder=\"What is your major(s)\" name=\"major\" class=\"full autocomplete\" blklab-model=\"students.major\">\n                            <div id=\"majors-search-results\"></div>\n						</div>\n                        <div class=\"row\">\n                            <input type=\"password\" id=\"password_field\" blklab-model=\"students.password\" class=\"full\" placeholder=\"Password\">\n                        </div>\n						<span id=\"form-message\"></span>\n						<input type=\"button\" blklab-click=\"validate\" value=\"Get Started\">\n					</form>\n				</section>\n			</section>\n		</div>\n	</section>\n\n	<footer>\n		<div class=\"inner\">\n			<section class=\"left\">KUBBY</section>\n			\n			<section class=\"right\"><a href=\"http://mykubby.com/#header-main\">About</a> <a href=\"http://www.angel.co/kubby\" target=\"_blank\">Jobs</a> <a href=\"mailto:hello@mykubby.com\">Contact</a></section>\n		</div>\n	</footer>\n</section>";
},"useData":true});

this["views"]["./app/js/views/students/job-row.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"col\">\n	<input type=\"text\" class=\"icon user\" placeholder=\"Job Title\" name=\"job_title\" value=\""
    + alias3(((helper = (helper = helpers.job_title || (depth0 != null ? depth0.job_title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"job_title","hash":{},"data":data}) : helper)))
    + "\">\n</div>\n<div class=\"col\">\n	<input type=\"text\" class=\"icon organization\" placeholder=\"Organization\" name=\"organization\"  value=\""
    + alias3(((helper = (helper = helpers.organization || (depth0 != null ? depth0.organization : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"organization","hash":{},"data":data}) : helper)))
    + "\">\n</div>\n<div class=\"col\">\n    <input type=\"text\" class=\"icon calendar half\" placeholder=\"Start Date\" name=\"start_date\" id=\"start_date-"
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" blklab-focus=\"showDates\" blklab-blur=\"hideDates\" value=\""
    + alias3(((helper = (helper = helpers.start_date || (depth0 != null ? depth0.start_date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"start_date","hash":{},"data":data}) : helper)))
    + "\"> <span class=\"dash\">-</span> \n    <input type=\"text\" class=\"half end\" placeholder=\"End Date\" name=\"end_date\" id=\"end_date-"
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.end_date || (depth0 != null ? depth0.end_date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"end_date","hash":{},"data":data}) : helper)))
    + "\">\n\n    <div class=\"results date-results\" id=\"dates-"
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n        <ul class=\"dates\">\n            <li>\n                <select name=\"month\" id=\"start-month-"
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" onchange=\"\" size=\"1\">\n                    <option value=\"Jan\">January</option>\n                    <option value=\"Feb\">February</option>\n                    <option value=\"Mar\">March</option>\n                    <option value=\"Apr\">April</option>\n                    <option value=\"May\">May</option>\n                    <option value=\"Jun\">June</option>\n                    <option value=\"Jul\">July</option>\n                    <option value=\"Aug\">August</option>\n                    <option value=\"Sep\">September</option>\n                    <option value=\"Oct\">October</option>\n                    <option value=\"Nov\">November</option>\n                    <option value=\"Dec\">December</option>\n                </select>\n                <input type=\"text\" name=\"startDateYear\" id=\"start-year-"
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" maxlength=\"4\" class=\"year\" placeholder=\"Year\">\n            </li>\n            <li class=\"divide\"> - </li>\n            <li>\n                <select name=\"month\" id=\"end-month-"
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" onchange=\"\" size=\"1\">\n                    <option value=\"Present\">Present</option>\n                    <option value=\"Jan\">January</option>\n                    <option value=\"Feb\">February</option>\n                    <option value=\"Mar\">March</option>\n                    <option value=\"Apr\">April</option>\n                    <option value=\"May\">May</option>\n                    <option value=\"Jun\">June</option>\n                    <option value=\"Jul\">July</option>\n                    <option value=\"Aug\">August</option>\n                    <option value=\"Sep\">September</option>\n                    <option value=\"Oct\">October</option>\n                    <option value=\"Nov\">November</option>\n                    <option value=\"Dec\">December</option>\n                </select>\n                <input type=\"text\" name=\"startDateYear\" id=\"end-year-"
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" maxlength=\"4\" class=\"year\" placeholder=\"Year\">\n                <br><input type=\"button\" value=\"Save\" blklab-click=\"saveDates\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n            </li>            \n        </ul>\n    </div>\n</div>";
},"useData":true});

this["views"]["./app/js/views/students/login.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section id=\"home\">\n	<section id=\"hero\" class=\"student fade\">\n		<div class=\"overlay\">\n			<header class=\"inner\">\n				<h1><a href=\"/students\"><img src=\"/assets/images/logo.png\" id=\"logo\" alt=\"Kubby\"> Kubby</a></h1>\n\n				<aside class=\"user\">\n					<a href=\"/students\">SIGN Up</a> <a class=\"border\" href=\"/professors\">For Professors</a>\n				</aside>\n\n			</header>\n\n			<section id=\"login\">\n                <form class=\"onboarding\" id=\"onboarding\">\n                    <h2>Login</h2>\n                    <div class=\"row\">\n                        <input type=\"text\" name=\"email\" value=\"\" placeholder=\"Email\" class=\"icon mail\" id=\"email_field\" blklab-model=\"students.email\">\n                    </div>\n                    <div class=\"row\">\n                        <input type=\"password\" name=\"password\" id=\"password_field\" placeholder=\"Password\" class=\"icon lock\" blklab-model=\"students.password\">\n                    </div>\n                    <span id=\"form-message\"></span>\n                    <input type=\"button\" value=\"Login\" class=\"inline\" blklab-click=\"login\">\n                </form>\n			</section>\n		</div>\n	</section>\n\n	<footer>\n		<div class=\"inner\">\n			<section class=\"left\">KUBBY</section>\n			\n			<section class=\"right\"><a href=\"#\">About</a> <a href=\"#\">Jobs</a> <a href=\"#\">Contact</a></section>\n		</div>\n	</footer>\n</section>";
},"useData":true});

this["views"]["./app/js/views/students/nav.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<header class=\"account\">\n	<div class=\"inner\">\n		<h1><a href=\"/students/news-feed\"><img src=\"/assets/images/logo.png\" id=\"logo\" alt=\"Kubby\"> Kubby</a></h1>\n		<aside>\n			<ul>\n                <li><a href=\"/explore\">Browse</a></li>\n				<!--<li><img src=\"/assets/images/alert-icon.png\"></li>\n				<li><img src=\"/assets/images/messages-icon.png\"></li>-->\n				<li class=\"drop\">\n                    <a href=\"/students/profile\"><img src=\"/app/assets/avatars/"
    + this.escapeExpression(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"nav-avatar\"></a>\n                    <ul class=\"dropdown\">\n                        <li data-href=\"/students/profile\">My Profile</li>\n                        <li data-href=\"/students/logout\">Logout</li>\n                    </ul>\n                </li>\n			</ul>\n		</aside>\n	</div>\n</header>";
},"useData":true});

this["views"]["./app/js/views/students/news-feed.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n<section id=\"news-feed\" class=\"flexbox\">\n	<nav class=\"col\">\n		<h1>Your Current Jobs</h1>\n		<section id=\"current-projects\">\n			<div class=\"job-cell\">No Current Jobs</div>\n		</section>\n		\n		<h1>Your Applications</h1>\n		<section id=\"applications\">\n			<ul>\n				<li>Saved Jobs</li>\n				<li>Drafts</li>\n				<li>Applications Pending</li>\n			</ul>\n		</section>\n	</nav>\n	\n	<section id=\"news-feed-content\" class=\"col\">\n		<h2>What's New</h2>\n		\n		<div class=\"divider\"></div>\n		\n		<section id=\"explore-text\">\n			<h3>Welcome to Kubby!</h3>\n			<p>Here, you’ll find activity that is specially personalized for you.<Br>Or, if you’re the hands-on type, go for it yourself!</p>\n			<a href=\"/explore\"><input type=\"button\" value=\"Explore\"></a>\n		</section>				\n		\n		<div class=\"divider\"></div>\n		\n		<ul id=\"project-feed\">\n			<li>No News</li>\n		</ul>\n		\n	</section>\n	\n	<section id=\"news-feed-trending\" class=\"col\">\n		<h2>Trending Projects</h2>\n	</section>\n</section>";
},"useData":true});

this["views"]["./app/js/views/students/onboarding-1.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<header class=\"interior\">\n	<div class=\"inner\">\n		<h1><a href=\"/students\"><img src=\"/assets/images/logo.png\" id=\"logo\" alt=\"Kubby\"> Kubby</a></h1>\n	</div>\n</header>\n<section id=\"content-pane\">\n	<div class=\"inner\">\n		<form class=\"onboarding\" id=\"onboarding\">\n			<h2>Nice to meet you!<br>Now, let's improve your chances of getting hired.</h2>\n			\n            <section class=\"connect-with-linkedin\">\n                <img src=\"/assets/images/connect-with-linkedin.png\" blklab-click=\"importLinkedIn\">\n                <p>Professors are more likely to hire students with complete profiles.<br>The easiest way to do this is by connecting your Linkedin account.</p>\n            </section>\n            \n			<!--<aside class=\"profile-avatar\">\n				<h3>Don't Have a Linkedin?</h3>\n				<img src=\"/assets/images/avatar-placeholder.png\" id=\"avatar\">\n				<div class=\"btn\" blklab-click=\"importFacebook\"><span class=\"fa fa-facebook\"></span> <span>Connect with Facebook</span></div>\n                <div class=\"btn\" blklab-click=\"importTwitter\"><span class=\"fa fa-twitter\"></span> <span>Connect with Twitter</span></div>\n                <div class=\"btn\"><input type=\"file\" blklab-change=\"handleFileSelect\" class=\"file\">Upload Image</div>\n			</aside>\n			\n			<div class=\"row\">\n				<input type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first_name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"First Name\" class=\"icon user\" blklab-model=\"students.first_name\">\n			</div>\n			\n			<div class=\"row\">\n				<input type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Last Name\" class=\"icon user\" blklab-model=\"students.last_name\">\n			</div>\n			\n			<div class=\"row\">\n				<input type=\"text\" name=\"email\" value=\""
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Email\" class=\"icon mail\" id=\"email_field\" blklab-model=\"students.email\">\n			</div>\n			\n			<div class=\"row\">\n				<input type=\"password\" name=\"password\" id=\"password_field\" placeholder=\"Create Password\" class=\"icon lock\">\n			</div>\n			\n			<div class=\"row\">\n				<input type=\"password\" name=\"password\" id=\"confirm_password_field\" placeholder=\"Confirm Password\" class=\"icon lock\" blklab-model=\"students.password\">\n			</div>\n			\n			<div class=\"break\"></div>\n			\n			<div class=\"row\">\n				<input type=\"text\" placeholder=\"University\" name=\"university\" class=\"icon university autocomplete\" blklab-model=\"students.university\" id=\"universities-search\"  data-type=\"universities\">\n                <div id=\"universities-search-results\"></div>\n			</div>\n			\n			<div class=\"row\">\n				<select name=\"degree\" class=\"icon degree\" id=\"degree_field\" required  blklab-model=\"students.degree\">\n                    <option value=\"\">Degree</option>\n                    <option>Undergrad</option>\n                    <option>Graduate</option>\n                </select>\n			</div>\n			\n			<div class=\"row skills\">\n				<div class=\"title\">\n					<div class=\"left\"><span class=\"icon badge\"></span> What are your skills? (select all that apply)</div>\n					\n					<div class=\"right\">\n                        <input type=\"text\" class=\"autocomplete\" id=\"skills-search\" placeholder=\"Search\" data-type=\"skills\"> \n						<div id=\"skills-search-results\"></div>\n						<span>Import From</span> <img src=\"/assets/images/linkedin.png\" class=\"click\" blklab-click=\"import\">\n					</div>\n				</div>\n                \n                <section id=\"skills\">\n                    \n                </section>\n				\n			</div>-->\n			\n			<span id=\"form-message\"></span>\n			\n			<div class=\"move-on\">\n			\n				<div class=\"step\">\n					Step 1 of 3\n				</div>\n				\n				<input type=\"button\" value=\"Next\" blklab-click=\"step_2\">\n				\n			</div>\n		</form>\n		\n	</div>\n</section>";
},"useData":true});

this["views"]["./app/js/views/students/onboarding-2.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header class=\"interior\">\n	<div class=\"inner\">\n		<h1><a href=\"/students\"><img src=\"/assets/images/logo.png\" id=\"logo\" alt=\"Kubby\"> Kubby</a></h1>\n	</div>\n</header>\n<section id=\"content-pane\" data-href=\"/students/onboarding/step/3\">\n	<div class=\"inner\">\n		<form class=\"onboarding\">\n			<h2>Almost there! Stand out by sharing your experiences.</h2>			\n			\n            <h3>What are your skills?</h3>\n            <div class=\"row skills\">\n                <div class=\"title\">\n					<div class=\"left\">\n                        <span class=\"icon badge tooltip-right\" data-tooltip=\"Below are skills that have been randomly selected for you. Click on any to disable.\"></span> <input type=\"text\" class=\"autocomplete\" id=\"skills-search\" placeholder=\"Search\" data-type=\"skills\"> \n						<div id=\"skills-search-results\"></div>\n					</div>\n				</div>\n                <section id=\"skills\">\n                    \n                </section>\n				\n			</div>\n            \n			<!--<section class=\"skills connect-to-linkedin\">\n				<h3>Want to skip a step? Upload your experiences directly from LinkedIn.</h3>\n				<img src=\"/assets/images/connect-linkedin.png\">\n			</section>-->\n			\n            <h3>Where have you worked?</h3>\n            \n			<section id=\"skill-rows\">\n				<div class=\"skills-row\" id=\"row-0\">\n					<div class=\"col\">\n						<input type=\"text\" class=\"icon user\" placeholder=\"Job Title\" name=\"job_title\">\n					</div>\n					<div class=\"col\">\n						<input type=\"text\" class=\"icon organization\" placeholder=\"Organization\" name=\"organization\">\n					</div>\n					<div class=\"col\">\n						<input type=\"text\" class=\"icon calendar half\" placeholder=\"Start Date\" name=\"start_date\" id=\"start_date-0\" blklab-focus=\"showDates\" blklab-blur=\"hideDates\"> <span class=\"dash\">-</span> \n                        <input type=\"text\" class=\"icon half end\" placeholder=\"End Date\" name=\"end_date\" id=\"end_date-0\">\n                        \n                        <div class=\"results date-results\" id=\"dates-0\">\n                            <ul class=\"dates\">\n                                <li>\n                                    <select name=\"month\" id=\"start-month-0\" onchange=\"\" size=\"1\">\n                                        <option value=\"Jan\">January</option>\n                                        <option value=\"Feb\">February</option>\n                                        <option value=\"Mar\">March</option>\n                                        <option value=\"Apr\">April</option>\n                                        <option value=\"May\">May</option>\n                                        <option value=\"Jun\">June</option>\n                                        <option value=\"Jul\">July</option>\n                                        <option value=\"Aug\">August</option>\n                                        <option value=\"Sep\">September</option>\n                                        <option value=\"Oct\">October</option>\n                                        <option value=\"Nov\">November</option>\n                                        <option value=\"Dec\">December</option>\n                                    </select>\n                                    <input type=\"text\" name=\"startDateYear\" id=\"start-year-0\" maxlength=\"4\" class=\"year\" placeholder=\"Year\">\n                                </li>\n                                <li class=\"divide\"> to </li>\n                                <li>\n                                    <select name=\"month\" id=\"end-month-0\" onchange=\"\" size=\"1\">\n                                        <option value=\"Present\">Present</option>\n                                        <option value=\"Jan\">January</option>\n                                        <option value=\"Feb\">February</option>\n                                        <option value=\"Mar\">March</option>\n                                        <option value=\"Apr\">April</option>\n                                        <option value=\"May\">May</option>\n                                        <option value=\"Jun\">June</option>\n                                        <option value=\"Jul\">July</option>\n                                        <option value=\"Aug\">August</option>\n                                        <option value=\"Sep\">September</option>\n                                        <option value=\"Oct\">October</option>\n                                        <option value=\"Nov\">November</option>\n                                        <option value=\"Dec\">December</option>\n                                    </select>\n                                    <input type=\"text\" name=\"startDateYear\" id=\"end-year-0\" maxlength=\"4\" class=\"year\" placeholder=\"Year\">\n                                    <br><input type=\"button\" value=\"Save\" blklab-click=\"saveDates\" data-index=\"0\">\n                                </li>\n                                \n                            </ul>\n                        </div>\n					</div>\n				</div>\n			</section>\n			\n			<img src=\"/assets/images/plus.png\" class=\"plus click\" blklab-click=\"add_job\">\n			\n			<span id=\"form-message\"></span>\n			\n			<div class=\"move-on\">\n				<div class=\"step\">\n					Step 2 of 3\n				</div>\n				\n				<input type=\"button\" id=\"back\" data-href=\"/students/onboarding/step/1\" value=\"Back\">  <input type=\"button\" value=\"Next\"  blklab-click=\"step_3\">\n			</div>\n		</form>		\n	</div>\n</section>";
},"useData":true});

this["views"]["./app/js/views/students/onboarding-3.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "				<div class=\"interest-cell "
    + alias3(((helper = (helper = helpers.selected || (depth0 != null ? depth0.selected : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"selected","hash":{},"data":data}) : helper)))
    + "\" blklab-click=\"activate\" data-value=\""
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">\n					<img src=\"/assets/images/check.png\" class=\"check\">\n					<img src=\"/assets/images/"
    + alias3(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\" class=\"icon\">\n					<h3>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n				</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<header class=\"interior\">\n	<div class=\"inner\">\n		<h1><a href=\"/students\"><img src=\"/assets/images/logo.png\" id=\"logo\" alt=\"Kubby\"> Kubby</a></h1>\n	</div>\n</header>\n<section id=\"content-pane\" data-href=\"/students/onboarding/step/2\">\n	<div class=\"inner\">\n		<form class=\"onboarding\">\n			<h2>What interests you?</h2>\n			<p>Pick at least 3 categories you’d like to follow, and we’ll keep you up to date about projects in those areas! We’ve even suggested one for you, based on your major.</p>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			<div class=\"selected-interests\"><span id=\"total\">0</span>/3</div>\n			\n			<span id=\"form-message\"></span>\n			\n			<div class=\"move-on\">\n				<div class=\"step\">\n					Step 3 of 3\n				</div>\n				\n				<input type=\"button\" id=\"back\" data-href=\"/students/onboarding/step/2\" value=\"Back\"><input type=\"button\" value=\"Finish\" blklab-click=\"finish\" id=\"finish-btn\" class=\"disabled\">\n			</div>\n		</form>				\n	</div>\n</section>";
},"useData":true});

this["views"]["./app/js/views/students/profile.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "			     <a href=\"/app/assets/resumes/"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.resume : stack1), depth0))
    + "\" target=\"_blank\">Download Resume</a>\n";
},"3":function(depth0,helpers,partials,data) {
    return "                No Resume\n";
},"5":function(depth0,helpers,partials,data) {
    return "				<div class=\"skill selected\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</div>\n";
},"7":function(depth0,helpers,partials,data) {
    return "				No Skills\n";
},"9":function(depth0,helpers,partials,data) {
    return "				<div class=\"skill\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</div>\n";
},"11":function(depth0,helpers,partials,data) {
    return "				No Projects\n";
},"13":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "				<div class=\"job icon user\"><span class=\"title\">"
    + alias3(((helper = (helper = helpers.job_title || (depth0 != null ? depth0.job_title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"job_title","hash":{},"data":data}) : helper)))
    + "</span> <span class=\"organization icon organization\">"
    + alias3(((helper = (helper = helpers.organization || (depth0 != null ? depth0.organization : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"organization","hash":{},"data":data}) : helper)))
    + "</span> <span class=\"dates icon calendar\">"
    + alias3(((helper = (helper = helpers.start_date || (depth0 != null ? depth0.start_date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"start_date","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.end_date || (depth0 != null ? depth0.end_date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"end_date","hash":{},"data":data}) : helper)))
    + "</span></div>\n";
},"15":function(depth0,helpers,partials,data) {
    return "				No Experience\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression;

  return ((stack1 = ((helper = (helper = helpers.nav || (depth0 != null ? depth0.nav : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nav","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n<section id=\"profile\" class=\"flexbox\">\n	<nav class=\"col\">\n		<div class=\"upload\">\n            <input type=\"file\" blklab-change=\"handleFileSelect\" class=\"file\">\n            <img src=\"/app/assets/avatars/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" class=\"avatar\" id=\"avatar\">\n            <i class=\"loader\" id=\"loader\"></i>\n        </div>\n        <h1><span blklab-click=\"edit\" blklab-model=\"students.first_name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.first_name : stack1), depth0))
    + "</span> <span blklab-click=\"edit\" blklab-model=\"students.last_name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "</span></h1>\n		<section class=\"education\">\n			<p blklab-click=\"edit\" blklab-model=\"students.university\" class=\"icon university orange\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.university : stack1), depth0))
    + "</p>\n			<p blklab-click=\"edit\" blklab-model=\"students.major\" class=\"icon degree orange\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.major : stack1), depth0))
    + "</p>\n		</section>\n		\n		<!--<section class=\"rating\">\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n			<span class=\"fa fa-star\"></span>\n		</section>\n		\n		<div class=\"send-message\">\n			<img src=\"/assets/images/mail-icon.png\"> <span>Send a Message</span>\n		</div>-->\n		\n	</nav>\n	\n	<section id=\"profile-content\" class=\"col\">\n		<h2>About Me</h2>\n		<p blklab-click=\"edit\" blklab-model=\"students.description\" class=\"description\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n		\n		\n		<h2>Documents</h2>\n		<section id=\"documents\">\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.resume : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "            <span class=\"resume-container\"><img src=\"/assets/images/project-page-add-icon-gray.png\" class=\"add\" blklab-click=\"add\"><input type=\"file\" blklab-change=\"handleResume\"></span>\n		</section>\n		\n		<h2>Skills</h2>\n		<section class=\"skills-list profile\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.skills : stack1),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "		</section>\n		\n		<h2>Projects</h2>\n		<section id=\"projects\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.projects : stack1),{"name":"each","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "		</section>\n		\n		<h2>Past Projects</h2>\n		<section id=\"past-projects\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.past_projects : stack1),{"name":"each","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "		</section>\n		\n		<h2>Experience</h2>\n		<section id=\"experience\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.profile : depth0)) != null ? stack1.experience : stack1),{"name":"each","hash":{},"fn":this.program(13, data, 0),"inverse":this.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "		</section>\n		\n	</section>	\n</section>\n";
},"useData":true});

this["views"]["./app/js/views/thanks.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section id=\"float\">\n    <img src=\"/assets/images/logo.png\">\n    <h1>Thanks For Registering!</h1>\n    <p>You've been registered for Kubby! We're in private beta right now and will notify you when we've launched publicly.</p>\n    \n    <p>Need access now? Send us a note: <a href=\"mailto:hello@mykubby.com\">hello@mykubby.com</a></p>\n</section>";
},"useData":true});;
;BlkLab.App.JobsModel = BlkLab.Model.extend({});
BlkLab.App.JobsModel.schema({
	title: _String,
	time: _String,
	degree: _String,
	experience: _String,
	compensation: _String,
    skills: [_String],
	majors:[],
    degree:_String,
	description: _String,
	project: {type: '', ref: "Projects"}
});
BlkLab.App.JobsModel.url = '/api/jobs';;BlkLab.App.StudentsModel = BlkLab.Model.extend({});
BlkLab.App.StudentsModel.schema({
	first_name: _String,
	last_name: _String,
	description: _String,
	email: _String,
	degree: _String,
	password: _String,
	university: _String,
	major: _String,
	skills: [],
	avatar: {type:_String, default:"avatar-placeholder.png"},
	experience: [],
	interests: [],
	jobs: [],
	projects: []
});
BlkLab.App.StudentsModel.url = '/api/students';

/*BlkLab.App.StudentsModel.on('update', function(key, val, old){
	console.log('changed to ' + key + ' to ' + val + ' from ' + old);
});

BlkLab.App.StudentsModel.set('first_name', BlkLab.Storage.get('first_name'));
BlkLab.App.StudentsModel.set('last_name', BlkLab.Storage.get('last_name'));
BlkLab.App.StudentsModel.set('email', BlkLab.Storage.get('email'));*/

//BlkLab.App.StudentsModel.save();

BlkLab.App.StudentsHomeView = BlkLab.View.extend({
	template: this.views['./app/js/views/students/home.hbs'],
	title:'Kubby Student Home'
});

BlkLab.App.StudentsController = BlkLab.Controller.extend({
	actions:{
		validate: function(ev){
			var button = _$(this);
			var form = button.parent;
			var data = BlkLab.Form.collect(form);
			var valid = true;
			var errors = [];
			Object.keys(data).forEach(function(key){
				
				/*if(key == 'email'){
					valid = data[key].match(/.*\.edu/);
					_$(key + '_field').remove_class('highlight');
					if(!valid){
						errors.push('Email must be .edu');
						_$(key + '_field').add_class('highlight');
					}
				}*/
				
                var field = _$(key + '_field');
				if(!data[key]){
					valid = false;	
					errors.push(key.replace('_', ' '));
                    if(field){
					   field.add_class('highlight');
                    }
				}else{
                    if(field){
					field.remove_class('highlight');
                    }
					BlkLab.Storage.set(key, data[key]);	
				}
			});
			if(valid){
                if(BlkLab.App.StudentsModel.get('email') != 'admin@scu.edu' && BlkLab.App.StudentsModel.get('email') != 'chelmers@scu.edu'){
                    BlkLab.App.StudentsModel.save().then(function(http){
                        var resp = JSON.parse(http.responseText);
                        if(resp.redirect){
                            BlkLab.App.redirect('/' + resp.redirect);
                        }
                    });
                }else{
				    BlkLab.App.redirect('/students/onboarding/step/1')
                }
			}else{
				_$('#form-message').innerHTML = 'please complete the following: ' + errors.join(', ');
			}
		}
	},

	render: function(params){
        var token = BlkLab.Storage.get('access-token');
        if(token){
            var type = BlkLab.Storage.get('type');
            BlkLab.App.redirect('/' + type + 's/news-feed');
        }else{
            var view = new BlkLab.App.StudentsHomeView();
            view.model = BlkLab.App.StudentsModel;
            view.render('#content');
            this.refreshActions();
            BlkLab.App.OnboardingController.actions.autocomplete();
            //BlkLab.App.redirect('/' + resp.redirect);
        }
	}
});


BlkLab.App.StudentsNavigationView = BlkLab.View.extend({
	template: this.views['./app/js/views/students/nav.hbs']
});

BlkLab.App.OnboardingStep1View = BlkLab.View.extend({
	template: this.views['./app/js/views/students/onboarding-1.hbs']
});

BlkLab.App.OnboardingStep2View = BlkLab.View.extend({
	template: this.views['./app/js/views/students/onboarding-2.hbs']
});

BlkLab.App.OnboardingStep3View = BlkLab.View.extend({
	template: this.views['./app/js/views/students/onboarding-3.hbs']
});

BlkLab.App.JobRowView = BlkLab.View.extend({
	template: this.views['./app/js/views/students/job-row.hbs']
});

BlkLab.App.OnboardingController = BlkLab.Controller.extend({
	interests_active: 1,
	interests: {},
    skills: {},
    positions:{},
    profile: {},
	
	actions:{
        facebookLogin: function(response){
            if(response.status === 'connected') {
                FB.api("/" + response.authResponse.userID + "/picture", function (response) {
                    if (response && !response.error) {
                        console.log(response);
                    }
                });   
            }
        },
        
        importFacebook: function(){
            FB.getLoginStatus(BlkLab.App.OnboardingController.actions.facebookLogin);            
        },
        
        importLinkedIn: function(){
            /*IN.API.Profile("me").result(function(result) {
                alert(JSON.stringify(result));
            });*/
            
            var getProfileData = function(){
                IN.API.Raw("/people/~:(id,picture-url,positions)").result(function(data){
                    console.log(data);
                    BlkLab.App.OnboardingController.profile = data;
                    BlkLab.App.OnboardingController.positions = data.positions || {};
                    BlkLab.App.redirect('/students/onboarding/step/2');
                }).error(function(error){
                    IN.User.login(function(){
                        getProfileData();     
                    });        
                });
            }
            
            IN.User.authorize(function(){
               getProfileData();
            });
        },
        
        getUniversity: function(){
            var uni = BlkLab.App.StudentsModel.get('email');
            BlkLab.get({
                url: '/api/universities/email?query=' + uni,
            }).then(function(http){
               var res = JSON.parse(http.responseText);   
                if(Object.keys(res).length > 0){
                    _$('universities-search').value = res.title;   
                }
            });
        },
        
        select: function(){
            var ele = _$(this);
            ele.toggle_class('selected');
            if(!ele.has_class('selected')){
                delete BlkLab.App.OnboardingController.skills[ele.innerHTML];
            }else{
                BlkLab.App.OnboardingController.skills[ele.innerHTML] = 1;
            }
        },
        
        universitiesResults: function(e){
            var search = _$('#universities-search');
            var results = _$('#universities-search-results');
            search.value = this.innerHTML;
            BlkLab.App.StudentsModel.set('university', search.value);
            results.hide();
        },
        
        majorsResults: function(e){
            var search = _$('#majors-search');
            var results = _$('#majors-search-results');
            search.value = BlkLab.Utils.titleCase(this.innerHTML);
            BlkLab.App.StudentsModel.set('major', search.value);
            results.hide();
        },
        
        createSkill: function(val){
            var skills = _$('#skills');
            var skill = BlkLab.create('div', {'class':'skill selected fade'});
            skill.click(BlkLab.App.OnboardingController.actions.select.bind(skill));
            skill.innerHTML = val;
            skills.append(skill);                
            BlkLab.App.OnboardingController.skills[val] = 1;  
        },
        
        skillsResults: function(ev){
            var val = this.innerHTML;
            console.log(val);
            if(!BlkLab.App.OnboardingController.skills[val]){
                BlkLab.App.OnboardingController.actions.createSkill(val);
                _$('#skills-search-results').hide();
                _$('#skills-search').value = '';
                _$('#skills-search').focus();
            }            
        },
        
        loadDefaultSkills: function(){
            var skills = [
                "Word",
                "Powerpoint",
                "LaTeX",
                "Scientific WorkPlace",
                "EndNote",
                "Excel",
                "R",
                "Stata",
                "Outlook",
                "GoogleCalendar",
                "Camino",
                "Python",
                "Matlab",
                "Visual Basic"
            ]
            var ri;
            var val;
            var i;
            for(i=0;i<5;i++){
                var ri = Math.floor(Math.random() * skills.length);
                var val = skills.splice(ri, 1);
                if(!BlkLab.App.OnboardingController.skills[val]){
                    BlkLab.App.OnboardingController.actions.createSkill(val);
                }
            }
        },
        
        checkPassword: function(){
            var password = _$('#password_field');
            var confirm = _$('#confirm_password_field');
            var run = BlkLab.debounce(function(ev){
                if(password.value != confirm.value){
                    password.add_class('highlight');
					confirm.add_class('highlight');   
                }else{
                    password.remove_class('highlight');
					confirm.remove_class('highlight');   
                }
            }, 300);
            
            confirm.typing(run);
        },
        
		autocomplete: function(e){
            var rows;
            var next;
            var current;
            var last;
            var current_results;
            var just_searched = false;
            _$('.autocomplete').each(function(ele){
                var type = ele.data('type');            
                var search = _$('#' + type + '-search');
                var results = _$('#' + type + '-search-results');
                results.css({
                    top:search.offsetTop + search.offsetHeight + 'px'
                });

                var run = BlkLab.debounce(function(ev){
                    if(search.value != '' && search.value != last && !just_searched){
                        BlkLab.get({
                            url: '/api/' + type + '?query=' + search.value,
                        }).then(function(http){
                            current_results = results;
                            results.innerHTML = '';
                            results.show();
                            var resp = JSON.parse(http.responseText);
                            var row;
                            resp.forEach(function(ele){
                                row = BlkLab.create('div', {'class':'row'});
                                row.innerHTML = ele.title;
                                row.data('type', type);
                                row.click(BlkLab.App.OnboardingController.actions[type + 'Results'].bind(row));
                                results.append(row);                            
                            });
                            BlkLab.App.OnboardingController.refreshActions();
                            rows = results.children_by_class('row');
                            current = rows.first();
                        });
                        last = search.value;
                    }else{
                        if(search.value == ''){
                            results.hide();
                        }
                    }
                    just_searched = false;
                }, 300);
                search.typing(run);

                _$(window).click(function(ev){
                    try{
                        if((ev.target.id.indexOf(type + '-search') == -1 && ev.target.parentNode.id.indexOf(type + '-search') == -1)){
                            results.hide();
                        }
                    }catch(e){}
                });
                
                
            });
            
            _$(document).typing(function(e){
                if(rows){
                    if (e.keyCode == 40) {                        
                        e.preventDefault();
                        e.stopPropagation();
                        next = rows.next();
                        current_results.scrollTop = next.offsetTop - (current_results.offsetHeight - next.offsetHeight);
                        current.remove_class('hlight')
                        next.add_class('hlight');
                        current = next;    
                        return false;
                    } else if (e.keyCode === 38) {
                        e.preventDefault();
                        e.stopPropagation();
                        next = rows.prev();
                        current_results.scrollTop = next.offsetTop - (current_results.offsetHeight - next.offsetHeight);
                        current.remove_class('hlight')
                        next.add_class('hlight');
                        current = next;
                        return false;
                    }else if(e.keyCode == 13){
                        if(current){
                            BlkLab.App.OnboardingController.actions[current.data('type') + 'Results'].call(current);
                            just_searched = true;
                        }
                    }
                }
            });
		},
		
		handleFileSelect: function(e){
			var reader = new FileReader();
			reader.onload = function(event){
				var canvas = document.createElement("canvas");
				var context = canvas.getContext('2d');
				var img = new Image();
				var width = 300;
				var height = 300;
				var minVal;
				img.onload = function(){
					var canvas = document.createElement("canvas");
					canvas.width = width;
					canvas.height = height;

					if(img.width == img.height) {
						canvas.getContext("2d").drawImage(img, 0, 0, width, height);
					}else{
						minVal = Math.min(img.width, img.height);
						if(img.width > img.height) {
							canvas.getContext("2d").drawImage(img, (img.width - minVal) / 2, 0, minVal, minVal, 0, 0, width, height);
						}else{
							canvas.getContext("2d").drawImage(img, 0, (img.height - minVal) / 2, minVal, minVal, 0, 0, width, height);
						}
					}
					_$('#avatar').src = canvas.toDataURL();
                    BlkLab.App.StudentsModel.set('avatar', canvas.toDataURL());
				}
				img.src = event.target.result;
			}
			reader.readAsDataURL(e.target.files[0]); 
		},
        
        showDates: function(ev){
            var f = _$(this.parentNode).children_by_class('results').first();
            f.show();
            
            _$(window).on('click', function(ev){
                if((ev.target.className && ev.target.className.indexOf('calendar') == -1) && (ev.target.className && ev.target.className.indexOf('results') == -1) && (ev.target.parentNode.className && ev.target.parentNode.className.indexOf('results') == -1)){
                    f.hide();
                }
            });
        },
        
        hideDates: function(ev){
            /*console.log(this);
            var f = _$(this.parentNode).children_by_class('results').first();
            f.hide();*/
        },
		
        saveDates: function(){
            var ele = _$(this);
            var i = ele.data('index');
            
            var start = _$('#start-month-' + i).value + ' ' + _$('#start-year-' + i).value
            var end = _$('#end-month-' + i).value != 'Present' ? _$('#end-month-' + i).value + ' ' + _$('#end-year-' + i).value : _$('#end-month-' + i).value;
            _$('#start_date-' + i).value = start;
            _$('#end_date-' + i).value = end;
            
            _$('#dates-' + i).hide();
        },
        
		add_job: function(){
			var skills = _$('#skill-rows');
            var children = skills.children_by_class('skills-row').length;
			var view = new BlkLab.App.JobRowView();
			var row = BlkLab.create('div');
			row.className = 'skills-row';
            view.model = {
                data:{
                    index: children
                }
            }
			row.innerHTML = view.render();
			skills.append(row);
            BlkLab.App.OnboardingController.refreshActions();
		},
        
        loadPositions: function(){
            var dates = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
            var skills = _$('#skill-rows');
			var p = BlkLab.App.OnboardingController.positions.values;
            if(p){
                _$('#row-0').destroy();
                p.forEach(function(job, idx){
                    var view = new BlkLab.App.JobRowView();
                    var row = BlkLab.create('div');
                    row.className = 'skills-row';
                    var start_date = job.startDate ? dates[job.startDate.month-1] + ' ' + job.startDate.year : '';
                    var end_date;
                    if(job.isCurrent){
                        end_date = 'Present';   
                    }else{
                        end_date = job.endDate ? dates[job.startDate.month-1] + ' ' + job.endDate.year : '';
                    }

                    view.model = {
                        data: {
                            job_title: job.company.name || '',
                            organization: job.title || '',
                            start_date: start_date,
                            end_date: end_date,
                            index: idx
                        }
                    }
                    row.innerHTML = view.render();
                    skills.append(row);	    
                });
            }
        },
		
		activate: function(){
			var ele = _$(this);
			var total = _$('#total');
			var btn = _$('finish-btn');
			if(ele.has_class('active')){
				BlkLab.App.OnboardingController.interests_active--;	
                delete BlkLab.App.OnboardingController.interests[ele.data('value')];
			}else{
				BlkLab.App.OnboardingController.interests_active++;	
                BlkLab.App.OnboardingController.interests[ele.data('value')] = 1;
			}
			ele.toggle_class('active');
			total.innerHTML = BlkLab.App.OnboardingController.interests_active;
	       
            if(BlkLab.App.OnboardingController.interests_active >= 3){
				btn.remove_class('disabled');
			}else{
				btn.add_class('disabled');	
			}
		},
		
		step_2: function(){
            //if(BlkLab.App.OnboardingController.check()){
				/*var valid = true;
                var password = _$('#password_field');
				var confirm = _$('#confirm_password_field');
				var email = _$('#email_field');
				var msgs = []

				if((!confirm.value || !password.value)){
					valid = false;
					if(!password.value){
						password.add_class('highlight');
					}
					if(!confirm.value){
						confirm.add_class('highlight');
					}
					msgs.push("Please enter both passwords.");
				}else{
					password.remove_class('highlight');
					confirm.remove_class('highlight');
				}

				if((password.value != confirm.value)){
					valid = false;	
					password.add_class('highlight');
					confirm.add_class('highlight');
					msgs.push("Passwords must match."); 
				}else{
					password.remove_class('highlight');
					confirm.remove_class('highlight');
				}

				if(!email.value.match(/.*\.edu/)){
					valid = false;
					email.add_class('highlight');
					msgs.push('Email must be .edu');
				}else{
					email.remove_class('highlight');
				}

				if(valid){
					
				}else{
					_$('#form-message').innerHTML = msgs.join(', ');		
				}*/
                BlkLab.App.redirect('/students/onboarding/step/2');	
			//}
		},
		
		step_3: function(){
			//if(BlkLab.App.OnboardingController.check()){
                BlkLab.App.StudentsModel.set('skills', Object.keys(BlkLab.App.OnboardingController.skills));            
				var skills = [];
				var skill;
				_$('.skills-row').each(function(el){
					var fields = _$(el).children_by_tag('input');
					skill = {}
					fields.each(function(field){
						skill[field.name] = field.value;
					});
					skills.push(skill);
				});

				BlkLab.App.StudentsModel.set('experience', skills);
				BlkLab.App.redirect('/students/onboarding/step/3');	
			//}
		},
		
		finish: function(){
			if(BlkLab.App.OnboardingController.check()){
				if(BlkLab.App.OnboardingController.interests_active >= 3){
					BlkLab.App.StudentsModel.set('interests', Object.keys(BlkLab.App.OnboardingController.interests));
					BlkLab.App.StudentsModel.save().then(function(http){
					var resp = JSON.parse(http.responseText);
						if(resp.token){
							BlkLab.Storage.set('access-token', resp.token);
                            BlkLab.Storage.set('type', resp.type);
                            BlkLab.Storage.set('email', resp.email);
                            BlkLab.Storage.set('name', resp.name);
                            BlkLab.Storage.set('created', resp.created || Date.now());
							location.href = '/students/news-feed';
						}else{
							_$('#form-message').innerHTML = 'Error Creating Account';
						}
					}, function(http){
						if(http.status === 401){
							var resp = JSON.parse(http.responseText);
							note.innerHTML = resp.msg;
						}
					});
					
				}else{
					_$('#form-message').innerHTML = "Please select three interests.";
				}
			}
		},
        
        import: function(){
            var call =  function(){
                IN.API.Raw('/people/~:(skills,positions)').method('GET').body('').result(function(ret){
                    console.log(ret);
                });
            }
            if(!IN.User.isAuthorized()){
                IN.User.authorize(call, this);
            }else{
                call();   
            }
        }
	},

	check: function(){
		if(!BlkLab.App.StudentsModel.get('email') || !BlkLab.App.StudentsModel.get('password')){
			BlkLab.App.redirect('/students');
			return false;
		}
		return true;
	},        
	
	render: function(params){
		var view = new BlkLab.App['OnboardingStep' + params.step + 'View']();
		var valid = true;
		
		if(params.step >= 2){
			//valid = BlkLab.App.OnboardingController.check();
        }
		
		if(valid){
			if(params.step == 3){
				this.interests = [];
				var cats = [
					{title: 'Development', icon: 'development-icon.png', selected:''},
					{title: 'Education', icon: 'education-icon.png', selected:''},
					{title: 'Gender', icon: 'gender-studies-icon.png', selected:''},
					{title: 'History', icon: 'history-icon.png', selected:''},
					{title: 'Innovation', icon: 'innovation-icon.png', selected:''},
					{title: 'Environment', icon: 'environment-icon.png', selected:''},
					{title: 'Microeconomic/<br>Game Theory', icon: 'game-theory-icon.png', selected:''},
					{title: 'Finance', icon: 'finance-icon.png', selected:''},
					{title: 'Health', icon: 'health-icon.png', selected:''},
					{title: 'International Trade', icon: 'international-trade-icon.png', selected:''},
					{title: 'Labor', icon: 'development-icon.png', selected:''},
					{title: 'Macroeconomics', icon: 'macroeconomics-icon.png', selected:''},
					{title: 'Industrial Organization', icon: 'industrial-organization-icon.png', selected:''},
					{title: 'Digitization', icon: 'digitization-icon.png', selected:''},
					{title: 'Behavioral and Experimental', icon: 'behavioral-studies-icon.png', selected:''},
					{title: 'Computational', icon: 'mathematics-icon.png', selected:''}
				]
                var r = Math.floor(Math.random() * cats.length);
                cats[r].selected = 'active';
				view.model = {data:{
					data:cats
				}};	
			}else{
				view.model = BlkLab.App.StudentsModel;	
			}
			view.render('#content');
			this.refreshActions();
			
			if(params.step == 1){
				//this.actions.autocomplete();	
                //this.actions.checkPassword();
                //this.actions.getUniversity();
			}
            
            if(params.step == 2){
                this.actions.autocomplete();
                this.actions.loadDefaultSkills();
                this.actions.loadPositions();
                /*var picker = new Pikaday({
                    field: document.getElementById('dates-0'),
                    firstDay: 1,
                    format: 'MMM YYYY',
                    minDate: new Date(2000, 0, 1),
                    maxDate: new Date(2020, 12, 31),
                    yearRange: [2000,2020],
                    onSelect: function(){
                        return false;
                    }
                });*/  
            }
		}
	}
});


/*------Profile-----*/

BlkLab.App.StudentsProfileView = BlkLab.View.extend({
	template: this.views['./app/js/views/students/profile.hbs'],
	title:'Kubby Student Home'
});

BlkLab.App.StudentsProfileController = BlkLab.Controller.extend({
	actions:{
        handleResume: function(){
            var file = this.files[0];
            var formdata = new FormData();
            var reader = new FileReader();
            reader.onloadend = function (e) { 
                BlkLab.post({
                    url: '/api/students/resume',
                    data: JSON.stringify({
                        resume: e.target.result,
                        title: file.name,
                        type: file.type
                    })
                }).then(function(http){
                    //location.href = '/students/profile';
                });
            }
            reader.readAsDataURL(file);
        },
        
        handleFileSelect: function(e){
            var avatar = _$('#avatar');
            var loader = _$('#loader');
            loader.add_class('show');
            avatar.add_class('hidden');
			var reader = new FileReader();
			reader.onload = function(event){
				var canvas = document.createElement("canvas");
				var context = canvas.getContext('2d');
				var img = new Image();
				var width = 300;
				var height = 300;
				var minVal;
				img.onload = function(){
					var canvas = document.createElement("canvas");
					canvas.width = width;
					canvas.height = height;

					if(img.width == img.height) {
						canvas.getContext("2d").drawImage(img, 0, 0, width, height);
					}else{
						minVal = Math.min(img.width, img.height);
						if(img.width > img.height) {
							canvas.getContext("2d").drawImage(img, (img.width - minVal) / 2, 0, minVal, minVal, 0, 0, width, height);
						}else{
							canvas.getContext("2d").drawImage(img, 0, (img.height - minVal) / 2, minVal, minVal, 0, 0, width, height);
						}
					}
					avatar.src = canvas.toDataURL();
                    loader.remove_class('show');
                    BlkLab.post({
                        url: '/api/students/avatar',
                        data: JSON.stringify({
                            avatar: canvas.toDataURL()
                        }),
                    }).then(function(http){
                        location.href = '/students/profile';
                    });
				}
				img.src = event.target.result;
			}
			reader.readAsDataURL(e.target.files[0]); 
		},
        
        edit: function(){
            var ele = _$(this);
            var val = ele.innerHTML;
            ele.contentEditable = true;
            ele.focus();
            ele.onblur(function(){
                if(ele.innerHTML != val){
                    BlkLab.App.StudentsModel.save().then(function(http){
                        console.log(http.responseText);
                    })
                }
                ele.contentEditable = false;
            });
        }
    },
	
	render: function(params){
		var model = BlkLab.App.StudentsModel;
		var self = this;
		model.find().then(function(){
			var nav = new BlkLab.App.StudentsNavigationView();
            nav.model = {data:{avatar:model.data.avatar}};
			var view = new BlkLab.App.StudentsProfileView();
			view.model = {
				data:{
					nav: nav.render(),
					profile: model.data
				}
			};	
			view.render('#content');
			self.refreshActions();
		});		
	}
});

/*------News Feed-----*/

BlkLab.App.StudentsNewsFeedView = BlkLab.View.extend({
	template: this.views['./app/js/views/students/news-feed.hbs'],
	title:'Kubby Student Home'
});

BlkLab.App.StudentsNewsFeedController = BlkLab.Controller.extend({
	actions:{},
	
	render: function(params){
        var model = BlkLab.App.StudentsModel;
		var self = this;
		model.find().then(function(){
            var nav = new BlkLab.App.StudentsNavigationView();
            nav.model = {data:{avatar:model.data.avatar}};
            var view = new BlkLab.App.StudentsNewsFeedView();
            view.model = {
                data:{
                    nav: nav.render()
                }
            };	
            view.render('#content');
            self.refreshActions();
        });
	}
});

/*------Login-----*/

BlkLab.App.StudentsLoginView = BlkLab.View.extend({
	template: this.views['./app/js/views/students/login.hbs'],
	title:'Kubby Student Home'
});

BlkLab.App.StudentsLoginController = BlkLab.Controller.extend({
	actions:{
		login: function(){
            var note = _$('form-message');
            if(!BlkLab.App.StudentsModel.get('email')){
                BlkLab.App.StudentsModel.set('email', _$('#email_field').value)
                BlkLab.App.StudentsModel.set('password', _$('#password_field').value)                
            }
			BlkLab.post({
				url: '/api/students/auth/login',
				data: JSON.stringify(BlkLab.App.StudentsModel.data),
			}).then(function(http){                
				var resp = JSON.parse(http.responseText);
				if(resp.token){
					BlkLab.Storage.set('access-token', resp.token);
                    BlkLab.Storage.set('type', resp.type);
                    BlkLab.Storage.set('email', resp.email);
                    BlkLab.Storage.set('name', resp.name);
                    BlkLab.Storage.set('created', resp.created || Date.now());
					location.href = '/students/news-feed';
				}else{
					note.innerHTML = 'Error Logging In';
				}
			}, function(http){
				if(http.status === 401){
					var resp = JSON.parse(http.responseText);
					note.innerHTML = resp.msg;
				}
			});
		}
		
	},
	
	render: function(params){
		var view = new BlkLab.App.StudentsLoginView();
		view.model = {
			data:{}
		};	
		view.render('#content');
		this.refreshActions();
	}
});

BlkLab.App.StudentsLogutController = BlkLab.Controller.extend({
   render: function(){
       BlkLab.Security.handle();
   } 
});

BlkLab.App.Router.routes({
	'/': {
		controller: BlkLab.App.StudentsController
	},
	
	'/students': {
		controller: BlkLab.App.StudentsController
	},
	
	'/students/login': {
		controller: BlkLab.App.StudentsLoginController
	},
    
    '/students/logout': {
		controller: BlkLab.App.StudentsLogutController
	},
	
	'/students/onboarding/step/:step': {
		controller: BlkLab.App.OnboardingController
	},
	
	'/students/profile': {
		controller: BlkLab.App.StudentsProfileController,
		secured: true
	},
	
	'/students/news-feed': {
		controller: BlkLab.App.StudentsNewsFeedController,
		secured: true
	}
});
;BlkLab.App.ProfessorsModel = BlkLab.Model.extend({});
BlkLab.App.ProfessorsModel.schema({
	first_name: _String,
	last_name: _String,
	email: _String,
    description: _String,
	department: _String,
	password: _String,
	university: _String,
	skills: [],
	avatar: _String,
	experience: [],
	interests: [],
	projects: [],
    links: []
});
BlkLab.App.ProfessorsModel.url = '/api/professors';


/*BlkLab.App.ProfessorsModel.on('update', function(key, val, old){
	console.log('changed to ' + key + ' to ' + val + ' from ' + old);
});*/

BlkLab.App.ProfessorsNavigationView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/nav.hbs'],
	title:'Kubby Student Home'
});

BlkLab.App.ThanksView = BlkLab.View.extend({
	template: this.views['./app/js/views/thanks.hbs']
});

BlkLab.App.ThanksController = BlkLab.Controller.extend({
	actions:{},
    
    render: function(params){
        var view = new BlkLab.App.ThanksView();
        view.model = {};
        view.render('#content');
        this.refreshActions();
    }
});

BlkLab.App.ComingSoonView = BlkLab.View.extend({
	template: this.views['./app/js/views/coming-soon.hbs']
});

BlkLab.App.ComingSoonController = BlkLab.Controller.extend({
	actions:{},
    
    render: function(params){
        var view = new BlkLab.App.ComingSoonView();
        view.model = {};
        view.render('#content');
        this.refreshActions();
    }
});

/*------Home-----*/

BlkLab.App.ProfessorsHomeView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/home.hbs'],
	title:'Kubby Professor Home'
});

BlkLab.App.ProfessorsController = BlkLab.Controller.extend({
	actions:{
		validate: function(ev){
			var button = _$(this);
			var form = _$('#signup');
			var data = BlkLab.Form.collect(form);
			var valid = true;
			var errors = [];
			Object.keys(data).forEach(function(key){
				
				/*if(key == 'email' || key == 'password'){
					valid = data[key].match(/.*\.edu/);
					_$(key + '_field').remove_class('highlight');
					if(!valid){
						errors.push('Email must be .edu');
						_$(key + '_field').add_class('highlight');
					}
				}*/
				
				if(!data[key]){
					valid = false;	
					errors.push(key.replace('_', ' '));
					_$(key + '_field').add_class('highlight');
				}else{
					_$(key + '_field').remove_class('highlight');
					BlkLab.Storage.set(key, data[key]);	
				}
			});
			if(valid){
				BlkLab.App.ProfessorsModel.set('avatar', 'avatar-placeholder.png');
                BlkLab.App.ProfessorsModel.save().then(function(http){
					var resp = JSON.parse(http.responseText);
                    if(resp.token){
                        console.log('test');
                        BlkLab.Storage.set('access-token', resp.token);
                        BlkLab.Storage.set('type', resp.type);
                        BlkLab.Storage.set('email', resp.email);
                        BlkLab.Storage.set('name', resp.name);
                        BlkLab.Storage.set('created', resp.created || Date.now());

                        window.Intercom('boot', {
                          app_id: "wm5vdjcu",
                          name: resp.name,
                          email: resp.email,
                          created_at: resp.created || Date.now() // TODO: The current logged in user's sign-up date as a Unix timestamp.
                        });
                        BlkLab.App.redirect('/professors/post');	
                    }else{
                        if(resp.redirect){
                            BlkLab.App.redirect('/' + resp.redirect);	
                        }else{
                            _$('#form-message').innerHTML = 'Error Creating Account';
                        }
                    }
                }, function(http){
                    if(http.status === 401){
                        var resp = JSON.parse(http.responseText);
                        note.innerHTML = resp.msg;
                    }
                });				
			}else{
				_$('#form-message').innerHTML = 'please complete the following: ' + errors.join(', ')
			}
		},
	},

	render: function(params){
        var token = BlkLab.Storage.get('access-token');
        if(token){
            BlkLab.App.redirect('/professors/news-feed');
        }else{
            var view = new BlkLab.App.ProfessorsHomeView();
            view.model = BlkLab.App.ProfessorsModel;
            view.render('#content');
            this.refreshActions();
            if(!BlkLab.Storage.has_support()){
                _$('form-message').innerHTML = 'Please enable cookies';
            }
        }
	}
});

/*------Profile-----*/

BlkLab.App.ProfessorsProfileView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/profile.hbs'],
	title:'Kubby Student Home'
});

BlkLab.App.ProfessorsProfileController = BlkLab.Controller.extend({
	actions:{
        edit: function(){
            var ele = _$(this);
            ele.contentEditable = true;
            ele.focus();
            ele.onblur(function(){
                BlkLab.App.ProfessorsModel.save().then(function(http){
                    console.log(http);
                })
                ele.contentEditable = false;
            });
        },
        
        deleteProject: function(){
            var ele = _$(this);
            var id = ele.data('id');
            
            BlkLab.App.ProjectsModel.del(id).then(function(ret){
               _$(ele.parentNode.parentNode).destroy();
                location.href = location.href;
            });
        },
        
        handleFileSelect: function(e){
            var avatar = _$('#avatar');
            var loader = _$('#loader');
            loader.add_class('show');
            avatar.add_class('hidden');
			var reader = new FileReader();
			reader.onload = function(event){
				var canvas = document.createElement("canvas");
				var context = canvas.getContext('2d');
				var img = new Image();
				var width = 300;
				var height = 300;
				var minVal;
				img.onload = function(){
					var canvas = document.createElement("canvas");
					canvas.width = width;
					canvas.height = height;

					if(img.width == img.height) {
						canvas.getContext("2d").drawImage(img, 0, 0, width, height);
					}else{
						minVal = Math.min(img.width, img.height);
						if(img.width > img.height) {
							canvas.getContext("2d").drawImage(img, (img.width - minVal) / 2, 0, minVal, minVal, 0, 0, width, height);
						}else{
							canvas.getContext("2d").drawImage(img, 0, (img.height - minVal) / 2, minVal, minVal, 0, 0, width, height);
						}
					}
					avatar.src = canvas.toDataURL();
                    loader.remove_class('show');
                    BlkLab.post({
                        url: '/api/professors/avatar',
                        data: JSON.stringify({
                            avatar: canvas.toDataURL()
                        }),
                    }).then(function(http){
                        location.href = '/professors/profile';
                    });
				}
				img.src = event.target.result;
			}
			reader.readAsDataURL(e.target.files[0]); 
		},
        
        addLink: function(){
            var docs = _$('#documents-list');
            var lis = docs.children_by_tag('li').first();
            if(lis.innerHTML == 'No Links'){
                lis.destroy();
            }
            var li = BlkLab.create('li');
            var title = BlkLab.create('input', {type: 'text', id:'title-value', placeholder:'Link Title'});
            var link = BlkLab.create('input', {type: 'text', id:'link-value', placeholder: 'Link'});
            var save = BlkLab.create('input', {type: 'button', id:'save', value: 'Save'});
            li.append([title, link, save]);
            
            save.click(function(){
                if(!BlkLab.App.ProfessorsModel.data.links){
                    BlkLab.App.ProfessorsModel.data.links = [];
                }
                BlkLab.App.ProfessorsModel.push('links', {title:title.value, link:link.value});
                BlkLab.App.ProfessorsModel.save().then(function(){
                    var len = BlkLab.App.ProfessorsModel.get('links').length;
                    li.innerHTML = '<a href="' + link.value + '" target="_blank">' + title.value + '</a> <span class="fa fa-trash" blklab-click="removeLink" data-index="' + (len-1) + '"></span>';
                    BlkLab.App.ProfessorsProfileController.refreshActions();
                });                
            });
            
            docs.append(li);
        },
        
        removeLink: function(){
            var ele = _$(this);
            var i = ele.data('index');
            _$(ele.parentNode).destroy();
            var list = BlkLab.App.ProfessorsModel.get('links');
            list.splice(i, 1);
            BlkLab.App.ProfessorsModel.set('links', list);
            BlkLab.App.ProfessorsModel.save().then(function(){});
        }
    },
	
	render: function(params){
        var self = this;
		var nav = new BlkLab.App.ProfessorsNavigationView();
		var view = new BlkLab.App.ProfessorsProfileView();
        BlkLab.App.ProfessorsModel.find().then(function(professor){          
            var data = professor.data;
            nav.model = {data:{avatar:data.avatar}};
            data.avatar = data.avatar || 'avatar-placeholder.png';            
            data.description = data.description || 'None';

            view.model = {
                data:{
                    nav: nav.render(),
                    profile:data
                }
            };
            view.render('#content');
            self.refreshActions();
        });		
	}
});

/*------News Feed-----*/

BlkLab.App.ProfessorsNewsFeedView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/news-feed.hbs'],
	title:'Kubby Student Home'
});

BlkLab.App.ProfessorsNewsFeedController = BlkLab.Controller.extend({
	actions:{
        deleteProject: function(){
            var ele = _$(this);
            var id = ele.data('id');
            
            BlkLab.App.ProjectsModel.del(id).then(function(ret){
               _$(ele.parentNode.parentNode).destroy();
                var list = _$('#current-projects');
                var projects = list.children_by_class('project');
                var project_list = _$(list.children_by_class('list')[0]);
                location.href = location.href;
            });
        }
    },
	
	render: function(params){
        var self = this;
		var nav = new BlkLab.App.ProfessorsNavigationView();
		var view = new BlkLab.App.ProfessorsNewsFeedView();
        var projectsModel = Object.create(BlkLab.App.ProjectsModel);
        projectsModel.path = '/trending';
        BlkLab.App.ProfessorsModel.find().then(function(professor){
            if(professor.data){
                projectsModel.find().then(function(trending){
                    var data = professor.data;
                    nav.model = {data:{avatar:data.avatar}};
                    data.avatar = data.avatar || 'avatar-placeholder.png';
                    view.model = {
                        data:{
                            nav: nav.render(),
                            profile:data,
                            trending:projectsModel.data,
                            totalProjects:0,
                            totalJobs:0,
                            totalApplications:0
                        }
                    };
                    view.render('#content');
                    self.refreshActions();
                });
            }else{
                //BlkLab.Security.handle();   
            }
        });	
	}
});

/*------Post-----*/

BlkLab.App.nav;

BlkLab.App.ProfessorsPostView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/post-type.hbs'],
	title:'Kubby Student Home'
});

BlkLab.App.ProfessorsPostController = BlkLab.Controller.extend({
	last: '',
	
	actions:{
		select: function(){
			var ele = _$(this);
			ele.toggle_class('selected');
			BlkLab.App.ProjectsModel.set(ele.data('key'), ele.data('value'));
            BlkLab.App.redirect('/professors/post/about');
			/*var last = BlkLab.App.ProfessorsPostController.last;
			if(last){
				last.remove_class('selected');
			}
			
			BlkLab.App.ProfessorsPostController.last = ele;*/
		}
	},
	
	render: function(params){
        var self = this;
        BlkLab.App.ProjectsModel.setData({
            type: _String,
            name: _String,
            description: _String,
            audience: _String,    
            published:Boolean,
            avatar:"avatar-placeholder.png",
            status:"draft",
            tags:[],
            jobs:[],
            leaders:[],
            members:[],
            applicants:[],
            university: _String
        });
        
        BlkLab.App.ProfessorsPostCategoryController.interests = {};
        BlkLab.App.ProfessorsPostCategoryController.interests_active = 1;
        BlkLab.App.ProfessorsPostJobsController.jobs = [];
        BlkLab.App.ProfessorsPostJobsController.selected = [];
        BlkLab.App.ProfessorsPostJobsController.idx = 0;
        BlkLab.App.ProfessorsPostJobsDetailController.jobs = [];
        BlkLab.App.ProfessorsPostJobsDetailController.lastJobs = [];
        BlkLab.App.ProfessorsPostJobsDetailController.lastJobs = [];
        
        BlkLab.App.ProfessorsModel.find().then(function(projects){
            var nav = new BlkLab.App.ProfessorsNavigationView();
            var view = new BlkLab.App.ProfessorsPostView();
            nav.model = {data:{avatar:projects.get('avatar')}};
            BlkLab.App.nav = nav.render();
            view.model = {
                data:{
                    nav: BlkLab.App.nav
                }
            };	
            view.render('#content');
            self.refreshActions();
        });
	}
});

BlkLab.App.ProfessorsPostAboutView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/post-about.hbs'],
	title:'Kubby Student Home'
});

BlkLab.App.ProfessorsPostAboutController = BlkLab.Controller.extend({
	actions:{
        next : function(ev){
            ev.preventDefault();
            var name = _$('#project-name');
            var description = _$('#project-description');
            var form = _$('#about-form');
			var data = BlkLab.Form.collect(form);
			var valid = true;
			var errors = [];
			Object.keys(data).forEach(function(key){
				var field = _$(key + '_field');
				if(!data[key]){
					valid = false;	
					errors.push(key.replace('_', ' '));
                    if(field){
					   field.add_class('highlight');
                    }
				}else{
                    if(field){
					field.remove_class('highlight');
                    }	
				}
			});
			if(valid){
                BlkLab.App.redirect("/professors/post/categories");
            }
        }
    },
	
	render: function(params){
		if(BlkLab.App.ProjectsModel.get('type')){
            var view = new BlkLab.App.ProfessorsPostAboutView(); 
        
            view.model = {
                data:{
                    nav: BlkLab.App.nav,
                    project: BlkLab.App.ProjectsModel.data
                }
            };	
            view.render('#content');
            this.refreshActions();
        }else{
            BlkLab.App.redirect('/professors/post');   
        }
	}
});



BlkLab.App.ProfessorsPostCategoryView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/post-categories.hbs']
});

BlkLab.App.ProfessorsPostCategoryController = BlkLab.Controller.extend({
	last: '',
    interests_active: 1,
	interests: {},
	
	actions:{
        next: function(ev){
            ev.preventDefault();
            BlkLab.App.redirect('/professors/post/jobs');   
            return false;
        },
        
		activate: function(){
			var ele = _$(this);
			var total = _$('#total');
			var btn = _$('finish-btn');
			if(ele.has_class('active')){
                delete BlkLab.App.ProfessorsPostCategoryController.interests[ele.data('value')];
			}else{
                BlkLab.App.ProfessorsPostCategoryController.interests[ele.data('value')] = 1;
			}
			ele.toggle_class('active');
		}
	},
	
	render: function(params){
		if(BlkLab.App.ProjectsModel.get('type')){
            var nav = new BlkLab.App.ProfessorsNavigationView();
            var view = new BlkLab.App.ProfessorsPostCategoryView(); 
            var cats = [
                {title: 'Development', icon: 'development-icon.png', selected:''},
                {title: 'Education', icon: 'education-icon.png', selected:''},
                {title: 'Gender', icon: 'gender-studies-icon.png', selected:''},
                {title: 'History', icon: 'history-icon.png', selected:''},
                {title: 'Innovation', icon: 'innovation-icon.png', selected:''},
                {title: 'Environment', icon: 'environment-icon.png', selected:''},
                {title: 'Microeconomic/<br>Game Theory', icon: 'game-theory-icon.png', selected:''},
                {title: 'Finance', icon: 'finance-icon.png', selected:''},
                {title: 'Health', icon: 'health-icon.png', selected:''},
                {title: 'International Trade', icon: 'international-trade-icon.png', selected:''},
                {title: 'Labor', icon: 'development-icon.png', selected:''},
                {title: 'Macroeconomics', icon: 'macroeconomics-icon.png', selected:''},
                {title: 'Industrial Organization', icon: 'industrial-organization-icon.png', selected:''},
                {title: 'Digitization', icon: 'digitization-icon.png', selected:''},
                {title: 'Behavioral and Experimental', icon: 'behavioral-studies-icon.png', selected:''},
                {title: 'Computational', icon: 'mathematics-icon.png', selected:''}
            ]
            
            Object.keys(BlkLab.App.ProfessorsPostCategoryController.interests).forEach(function(key){
                cats.forEach(function(cat, idx){
                    if(cats[idx].title == key){
                        cats[idx].selected = 'active';    
                    }
                })
            });

            view.model = {data:{
                nav: BlkLab.App.nav,
                data:cats
            }};
            view.render('#content');
            this.refreshActions();
        }else{
            BlkLab.App.redirect('/professors/post');   
        }
	}
});


BlkLab.App.ProfessorsPostJobsView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/post-jobs.hbs']
});

BlkLab.App.ProfessorsJobTypesView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/job-types.hbs']
});

BlkLab.App.ProfessorsPostJobsController = BlkLab.Controller.extend({
	selected: [],
    jobs:[],
    idx:0,
	
	actions:{
		select: function(){
			var ele = _$(this);
            var idx = parseInt(ele.parent.data('index'));
			ele.toggle_class('selected');
			if(ele.has_class('selected')){
                BlkLab.App.ProfessorsPostJobsController.selected[idx][ele.data('id')] = {title: ele.data('id')};
			}else{
				delete BlkLab.App.ProfessorsPostJobsController.selected[idx][ele.data('id')];
			}            
		},
		
		load: function(){
			if(Object.keys(BlkLab.App.ProfessorsPostJobsController.selected).length > 0){
				var fields = _$('.job-type');	
				fields.each(function(field){
					if(BlkLab.App.ProfessorsPostJobsController.selected[field.data('id')]){
						field.add_class('selected');	
					}
				});
			}
		},
		
		add: function(){
			var jobs = _$('#job-types');
			var value = _$('#new-job').value;
			var type = BlkLab.create('div', {'class': 'job-type'});
			type.blklab('click', 'select');
			type.data('id', value);
			type.innerHTML = value;
			jobs.append(type);
			BlkLab.App.ProfessorsPostJobsController.refreshActions();
		},                
        
        addJob: function(){
            _$('#alert').hide();
            _$('.add-job-text').first().innerHTML = 'ADD ANOTHER JOB';
            var jobs = _$('#job-types-container');
            var view = new BlkLab.App.ProfessorsJobTypesView();
            var idx = BlkLab.App.ProfessorsPostJobsController.idx = BlkLab.App.ProfessorsPostJobsController.idx + 1;
            view.model = {data:{
                jobs:BlkLab.App.ProfessorsPostJobsController.jobs,
                index: idx,
                rindex: idx - 1
            }};
            var holder = BlkLab.create('div', {'class':'job-holder'});
            holder.innerHTML = view.render();
            jobs.append(holder);
            BlkLab.App.ProfessorsPostJobsController.selected.push({});
            BlkLab.App.ProfessorsPostJobsDetailController.jobs.push({
                skills: {},
                compensation:'',
                description:'',
                degree:'',
                major:'',
                type:'full-time',
                title:''
            });
            BlkLab.App.ProfessorsPostJobsController.refreshActions();
        },
        
        removeJob: function(){
            var ele = _$(this);
            var idx = BlkLab.App.ProfessorsPostJobsController.idx;
            BlkLab.App.ProfessorsPostJobsController.idx = BlkLab.App.ProfessorsPostJobsController.idx - 1;
            BlkLab.App.ProfessorsPostJobsController.selected.splice(ele.data('index'),1);
            BlkLab.App.ProfessorsPostJobsDetailController.jobs.splice(ele.data('index'),1)
            ele.parent.destroy();
        },
		
		next: function(){
            var custom = _$('.custom');
            if(custom.length > 0){
                custom.each(function(f, idx){
                    if(f.value){
                        f.value.split(',').forEach(function(el){
                            el = el.trim();
                            BlkLab.App.ProfessorsPostJobsController.selected[idx][el.trim()] = {title: el.trim()};   
                        });
                    }
                });
                BlkLab.App.redirect('/professors/post/jobs/detail');	
            }else{
                BlkLab.App.redirect('/professors/post/publish');   
            }			
		},
	},
	
    render: function(params){
        if(BlkLab.App.ProjectsModel.get('type')){
            var view = new BlkLab.App.ProfessorsPostJobsView(); 		
            var jobs = [];
            if(BlkLab.App.ProjectsModel.get('type') == 'research'){
                jobs = this.jobs = [
                    'Proofreader',
                    'Data Collector',
                    'Data Cleaner',
                    'Data Analyst',
                    'Administrative Assistant'
                ];
            }else if(BlkLab.App.ProjectsModel.get('type') == 'course-work'){
                jobs = this.jobs = [
                    'Teaching Assistant',
                    'Tutor',
                    'Grader'
                ]
            }
            
            var type_name = 'research';
            if(BlkLab.App.ProjectsModel.get('type') == 'course-work'){
                type_name = 'course';
            }
            view.model = {
                data:{
                    nav: BlkLab.App.nav,
                    jobs: jobs,
                    type_name:type_name
                }
            };	
            view.render('#content');
            this.refreshActions();
            this.actions.load();
            
            this.selected.forEach(function(el, idx){
                var jobs = _$('#job-types-container');
                var view = new BlkLab.App.ProfessorsJobTypesView();
                view.model = {data:{
                    jobs:BlkLab.App.ProfessorsPostJobsController.jobs,
                    index: idx,
                    rindex: idx
                }};
                var holder = BlkLab.create('div', {'class':'job-holder'});
                holder.innerHTML = view.render();
                jobs.append(holder);
                var p = _$('#job-types-' + idx).children_by_class('job-type');
                p.each(function(sel){
                    var ele = _$(sel);
                    if(el[ele.data('id')]){
                        ele.add_class('selected');    
                    }
                });
                BlkLab.App.ProfessorsPostJobsController.refreshActions();
            })
            
            if(BlkLab.App.ProfessorsPostJobsDetailController.jobs.length > 0){
                _$('#alert').hide();
                _$('.add-job-text').first().innerHTML = 'ADD ANOTHER JOB';    
            }
            
        }else{
            BlkLab.App.redirect('/professors/post');   
        }
	}
});

BlkLab.App.ProfessorsPostJobsDetailView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/post-jobs-detail.hbs']
});

BlkLab.App.ProfessorsPostJobsDetailController = BlkLab.Controller.extend({
	lastJobs: [],
	jobs:[],
    
	actions:{
        select: function(){
            var self = BlkLab.App.ProfessorsPostJobsDetailController;
            var ele = _$(this);
            var idx = parseInt(ele.getAttribute('index'));
            ele.toggle_class('selected');
            if(!ele.has_class('selected')){
                delete self.jobs[idx].skills[ele.innerHTML];
            }else{
                self.jobs[idx].skills[ele.innerHTML] = 1;
            }
        },
        
        majorsResults: function(e){
            var ele = _$(this);
            var idx = ele.data('index');
            var search = _$('#majors-search-' + idx);
            var results = _$('#majors-search-results-' + idx);
            console.log(idx);
            search.value = BlkLab.Utils.titleCase(this.innerHTML);
            //BlkLab.App.StudentsModel.set('major', search.value);
            results.hide();
        },
        
        createSkill: function(val, idx, is_selected){
            var self = BlkLab.App.ProfessorsPostJobsDetailController;
            var skills = _$('#skills-list-' + idx);
            if(skills){
                var cls;
                if(is_selected){
                    cls = 'skill selected fade';
                }else{
                    cls = 'skill fade';   
                }
                var skill = BlkLab.create('div', {'class': cls});
                skill.setAttribute('index', idx);
                skill.click(self.actions.select.bind(skill));
                skill.innerHTML = val;
                skills.append(skill);                
                if(is_selected){
                    self.jobs[idx].skills[val] = 1;  
                }
            }
        },
        
        skillsResults: function(ev){
            var self = BlkLab.App.ProfessorsPostJobsDetailController;
            var val = this.innerHTML;
            var ele = _$(this);
            var idx = parseInt(ele.data('index'));
            if(!self.jobs[idx].skills[val]){
                _$('#skills-search-' + idx).value = '';
                _$('#skills-search-results-' + idx).hide();
                self.actions.createSkill(val, idx);
            }            
        },
        
        autocomplete: function(e){
            var self = this;
            var rows;
            var next;
            var current;
            var last;
            var current_results;
            var just_searched = false;
            _$('.autocomplete').each(function(ele){
                var type = ele.data('type');            
                var idx = ele.data('index');            
                var search = _$('#' + type + '-search-' + idx);
                var results = _$('#' + type + '-search-results-' + idx);
                if(results){
                    results.css({
                        top:search.offsetTop + search.offsetHeight + 'px'
                    });
                }

                var run = BlkLab.debounce(function(ev){
                    if(search.value != '' && search.value != last && !just_searched){
                        BlkLab.get({
                            url: '/api/' + type + '?query=' + search.value,
                        }).then(function(http){
                            current_results = results;
                            results.innerHTML = '';
                            results.show();
                            var resp = JSON.parse(http.responseText);
                            var row;
                            resp.forEach(function(ele){
                                row = BlkLab.create('div', {'class':'row'});
                                row.innerHTML = ele.title;
                                row.setAttribute('data-index', idx);
                                row.data('type', type);
                                row.click(self[type + 'Results'].bind(row));
                                results.append(row);                            
                            });
                            rows = results.children_by_class('row');
                            current = rows.first();
                        });
                        last = search.value;
                    }else{
                        if(search.value == ''){
                            results.hide();
                        }
                    }
                    just_searched = false;
                }, 300);
                search.typing(run);

                _$(window).click(function(ev){
                    try{
                        if((ev.target.id.indexOf(type + '-search-' + idx) == -1 && ev.target.parentNode.id.indexOf(type + '-search-' + idx) == -1)){
                            results.hide();
                        }
                    }catch(e){}
                });
            });
            
            _$(document).typing(function(e){
                if(rows){
                    if (e.keyCode == 40) {                        
                        e.preventDefault();
                        e.stopPropagation();
                        next = rows.next();
                        current_results.scrollTop = next.offsetTop - (current_results.offsetHeight - next.offsetHeight);
                        current.remove_class('hlight')
                        next.add_class('hlight');
                        current = next;    
                        return false;
                    } else if (e.keyCode === 38) {
                        e.preventDefault();
                        e.stopPropagation();
                        next = rows.prev();
                        current_results.scrollTop = next.offsetTop - (current_results.offsetHeight - next.offsetHeight);
                        current.remove_class('hlight')
                        next.add_class('hlight');
                        current = next;
                        return false;
                    }else if(e.keyCode == 13){
                        if(current){
                            self[current.data('type') + 'Results'].call(current);
                            just_searched = true;
                        }
                    }
                }
            });
		},
        
		activate: function(){
			var ele = _$(this);
            var idx = parseInt(ele.data('index'));
			var last = BlkLab.App.ProfessorsPostJobsDetailController.lastJobs[idx] || ele.parent.children_by_class('field').first();
			ele.add_class('selected');
			if(last){
				last.remove_class('selected');	
			}
			BlkLab.App.ProfessorsPostJobsDetailController.lastJobs[idx] = ele;
		},
		
        removeJob: function(){
            var ele = _$(this);
            BlkLab.App.ProfessorsPostJobsDetailController.jobs.splice(ele.data('index'),1);
            ele.parent.destroy();
            console.log(BlkLab.App.ProfessorsPostJobsDetailController.jobs);
        },
        
		next: function(){
            var self = BlkLab.App.ProfessorsPostJobsDetailController;
			var fields = _$('.job-detail');	
            var comp = [];
			fields.each(function(field, idx){
				field = _$(field);
                
                var checks, i;
                
                checks = field.querySelectorAll('input[type=checkbox]:checked');
                for (i = 0; i < checks.length; ++i) {
                  comp.push(checks[i].value);
                }
                
                self.jobs[idx].type = field.children_by_class('field').first().value;
                self.jobs[idx].compensation = comp.join(', ');
                self.jobs[idx].degree = field.children_by_class('degree-field').first().value;
                self.jobs[idx].major = field.children_by_class('major-field').first().value;
                self.jobs[idx].description = field.children_by_class('description-field').first().value;
			});
            BlkLab.App.ProjectsModel.set('jobs', self.jobs);
			BlkLab.App.redirect('/professors/post/publish');
		}
	},
	
	render: function(params){
        if(BlkLab.App.ProjectsModel.get('type')){
            var selected = BlkLab.App.ProfessorsPostJobsController.selected;
            if(Object.keys(selected).length > 0){
                var self = this;
                var view = new BlkLab.App.ProfessorsPostJobsDetailView(); 
                var jobs = [];

                var defaults = {
                    'Proofreader': ['Word', 'Powerpoint', 'LaTeX', 'Scientific WorkPlace', 'EndNote'],
                    'Data Collector': ['Excel', 'R', 'Stata', 'Python'],
                    'Data Cleaner': ['Excel', 'R', 'Stata'],
                    'Data Analyst': ['Excel', 'Stata', 'Python', 'R', 'Matlab', 'Visual Basic'],
                    'Administrative Assistant': ['Outlook', 'GoogleCalendar', 'Word', 'Camino'],
                    'Teaching Assistant': ['Econ 1', 'Econ 2', 'Econ 3', 'Econ 41/42', 'Econ 101', 'Econ 111', 'Econ 113', 'Econ 114', 'Econ 115', 'Econ 120', 'Econ 122', 'Econ 126', 'Econ 129', 'Econ 135', 'Econ 137', 'Econ 150', 'Econ 171', 'Econ 172', 'Econ 174', 'Econ 181', 'Econ 182', 'Econ 185', 'Econ 186'],
                    'Tutor': ['Econ 1', 'Econ 2', 'Econ 3', 'Econ 41/42', 'Econ 101', 'Econ 111', 'Econ 113', 'Econ 114', 'Econ 115', 'Econ 120', 'Econ 122', 'Econ 126', 'Econ 129', 'Econ 135', 'Econ 137', 'Econ 150', 'Econ 171', 'Econ 172', 'Econ 174', 'Econ 181', 'Econ 182', 'Econ 185', 'Econ 186'],
                    'Grader': ['Econ 1', 'Econ 2', 'Econ 3', 'Econ 41/42', 'Econ 101', 'Econ 111', 'Econ 113', 'Econ 114', 'Econ 115', 'Econ 120', 'Econ 122', 'Econ 126', 'Econ 129', 'Econ 135', 'Econ 137', 'Econ 150', 'Econ 171', 'Econ 172', 'Econ 174', 'Econ 181', 'Econ 182', 'Econ 185', 'Econ 186']
                }
                
                var no_select = [
                    'Teaching Assistant',
                    'Tutor',
                    'Grader'
                ]

                var self = this;
                
                if(self.jobs.length == 0){
                    selected.forEach(function(select){
                        var title = [];
                        Object.keys(select).forEach(function(job){
                            title.push(job);
                        });
                        jobs.push({title: title.join(', ')});
                        self.lastJobs.push('');
                    });
                }else{
                    selected.forEach(function(select, idx){
                        var title = [];
                        Object.keys(select).forEach(function(job){
                            title.push(job);
                        });
                        self.jobs[idx].title = title.join(', ');
                    });
                    jobs = self.jobs;
                }

                view.model = {
                    data:{
                        nav: BlkLab.App.nav,
                        jobs: jobs
                    }
                };	
                view.render('#content');
                this.refreshActions();
                this.actions.autocomplete();

                var skills;
                
                var fillWithDefaults = function(select, idx){
                    var created = {};
                    select.forEach(function(job, i){
                        var skills = defaults[job];
                        var is_selected = true;
                        if(no_select.indexOf(job) != -1){
                            is_selected = false
                        }
                        skills.forEach(function(skill){
                           created[skill] = is_selected; 
                        });
                    });
                    Object.keys(created).forEach(function(skill){
                        self.actions.createSkill(skill, idx, created[skill]);
                    });
                }
                
                
                if(self.jobs.length == 0){
                    selected.forEach(function(select, idx){
                        fillWithDefaults(Object.keys(select), idx);
                    });
                }else{
                    self.jobs.forEach(function(job, idx){
                        if(typeof jobs.skills === 'string' || (job.skills && job.skills.length > 0)){
                            job.skills.split(', ').forEach(function(skill){
                                self.actions.createSkill(skill, idx);
                            })
                        }else{
                            fillWithDefaults(job.title.split(', '), idx);
                        }
                    });
                }
            }else{
                console.log('here');
                BlkLab.App.redirect('/professors/post/jobs');       
            }
        }else{
            BlkLab.App.redirect('/professors/post');   
        }
	}
});

/*BlkLab.App.ProfessorsPostAudienceView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/post-audience.hbs'],
	title:'Kubby Student Home'
});

BlkLab.App.ProfessorsPostAudienceController = BlkLab.Controller.extend({
	last: '',
	
	actions:{
		select: function(){
			var ele = _$(this);
			ele.add_class('selected');
			BlkLab.App.ProjectsModel.set(ele.data('key'), ele.data('value'));
			var last = BlkLab.App.ProfessorsPostAudienceController.last;
			if(last){
				last.remove_class('selected');
			}
			
			BlkLab.App.ProfessorsPostAudienceController.last = ele;
		}
	},
	
	render: function(params){
		if(BlkLab.App.ProjectsModel.get('type')){
            var nav = new BlkLab.App.ProfessorsNavigationView();
            var view = new BlkLab.App.ProfessorsPostAudienceView(); 
        
            view.model = {
                data:{
                    nav: nav.render()
                }
            };	
            view.render('#content');
            this.refreshActions();
        }else{
            BlkLab.App.redirect('/professors/post');   
        }
	}
});*/

BlkLab.App.ProfessorsPostPublishView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/post-publish.hbs'],
	title:'Kubby Student Home'
});

BlkLab.App.ProfessorsPostPublishController = BlkLab.Controller.extend({
	actions:{
		publish: function(){
            BlkLab.App.ProjectsModel.set('tags', Object.keys(BlkLab.App.ProfessorsPostCategoryController.interests));
            if(BlkLab.App.ProjectsModel.data.jobs && BlkLab.App.ProjectsModel.data.jobs.length > 0){
                BlkLab.App.ProjectsModel.set('status', 'recruiting');
            }else{
                BlkLab.App.ProjectsModel.set('status', 'active');   
            }
            BlkLab.App.ProjectsModel.save().then(function(http){
				//location.href = '/professors/news-feed';
                var data = JSON.parse(http.responseText);
                _$('#screen').add_class('show');
                _$('#project-done').add_class('show');
                _$('#view-project').href = '/professors/projects/' + data._id;
			}, function(err){
				console.log('Error');
			});
		}
	},
	
	render: function(params){
        var self = this;
		var view = new BlkLab.App.ProfessorsPostPublishView(); 
        if(BlkLab.App.ProjectsModel.get('type')){
            BlkLab.App.ProfessorsModel.find().then(function(professor){
                var data = Object.create(BlkLab.App.ProjectsModel.data) || {jobs:[]};
                var degrees = {};
                var majors = {};
                var d = data;
                if(data.jobs && data.jobs.length > 0){
                    data.jobs.forEach(function(d, idx){
                        if(typeof data.jobs[idx].skills != "string"){
                            data.jobs[idx].skills = Object.keys(data.jobs[idx].skills).join(', ');
                        }
                        majors[data.jobs[idx].major] = 1;
                        degrees[data.jobs[idx].degree] = 1;
                    });
                }
                
                var ma = Object.keys(majors);
                var de = Object.keys(degrees); 
                ma = ma && ma.length > 0 ? ma.join(',') : 'Any Major';
                de = de && de.length > 0 ? de.join(',') : 'Any Degree';
                majors = ma ? ma : 'Any Major';
                degrees = de ? de : 'Any Degree';
                
                console.log(data.jobs);
                
                view.model = {
                    data:{
                        nav: BlkLab.App.nav,
                        project: data,
                        professor: professor.data,
                        degrees: degrees,
                        majors: majors,
                        tags: Object.keys(BlkLab.App.ProfessorsPostCategoryController.interests)
                    }
                };	
                view.render('#content');
                self.refreshActions();
            });
        }else{
            BlkLab.App.redirect('/professors/post');   
        }
	}
});

BlkLab.App.ProfessorsLoginView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/login.hbs'],
	title:'Kubby Student Home'
});

BlkLab.App.ProfessorsLogutController = BlkLab.Controller.extend({
   render: function(){
       BlkLab.Security.handle();
   } 
});

BlkLab.App.ProfessorsLoginController = BlkLab.Controller.extend({
	actions:{
		login: function(){
            var note = _$('form-message');
            if(!BlkLab.App.ProfessorsModel.get('email')){
                BlkLab.App.ProfessorsModel.set('email', _$('#email_field').value)
                BlkLab.App.ProfessorsModel.set('password', _$('#password_field').value)                
            }
			BlkLab.post({
				url: '/api/professors/auth/login',
				data: JSON.stringify(BlkLab.App.ProfessorsModel.data),
			}).then(function(http){
                var resp = JSON.parse(http.responseText);
				if(resp.token){
					BlkLab.Storage.set('access-token', resp.token);
					BlkLab.Storage.set('type', resp.type);
                    BlkLab.Storage.set('email', resp.email);
                    BlkLab.Storage.set('name', resp.name);
                    BlkLab.Storage.set('created', resp.created || Date.now());
                    
                    window.Intercom('boot', {
                      app_id: "wm5vdjcu",
                      name: resp.name,
                      email: resp.email,
                      created_at: resp.created || Date.now() // TODO: The current logged in user's sign-up date as a Unix timestamp.
                    });
                    
                    
					location.href = '/professors/news-feed';
				}else{
					note.innerHTML = 'Error Logging In';
				}
			}, function(http){
				if(http.status === 401){
					var resp = JSON.parse(http.responseText);
					note.innerHTML = resp.msg;
				}
			});
		}
		
	},
	
	render: function(params){
		var view = new BlkLab.App.ProfessorsLoginView();
		view.model = {
			data:{}
		};	
		view.render('#content');
		this.refreshActions();
        if(!BlkLab.Storage.has_support()){
            _$('form-message').innerHTML = 'Please enable cookies';
        }
	}
});

BlkLab.App.ProfessorsProjectsView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/projects.hbs'],
	title:'Kubby Student Home'
});

BlkLab.App.ProfessorsProjectsController = BlkLab.Controller.extend({
	actions:{
        deleteProject: function(){
            var ele = _$(this);
            var id = ele.data('id');
            
            BlkLab.App.ProjectsModel.del(id).then(function(ret){
               _$(ele.parentNode).destroy();
                location.href = location.href;
                var list = _$('#projects-list');
                var projects = list.children_by_class('project');
                var project_list = _$(list.children_by_class('list')[0]);
                if(projects.length == 0){
                    project_list.innerHTML = '<div class="project"><h2>No Projects</h2></div>';
                }                
            });
        }
    },
	
	render: function(params){
        var self = this;
		var view = new BlkLab.App.ProfessorsProjectsView();
        var nav = new BlkLab.App.ProfessorsNavigationView();
        
        BlkLab.App.ProfessorsModel.find().then(function(projects){
            nav.model = {data:{avatar:projects.get('avatar')}};
            
            if(projects.data.projects){
                projects.data.projects.forEach(function(d, idx){
                    projects.data.projects[idx].status = d.jobs.length == 0 ? 'active' : d.status;
                })
            }
            
            view.model = {
                data:{
                    nav:nav.render(),
                    user: projects.data
                }
            };	
            view.render('#content');
            self.refreshActions();
        })		
	}
});

BlkLab.App.ProfessorsProjectView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/project.hbs']
});

BlkLab.App.InviteModalView = BlkLab.View.extend({
	template: this.views['./app/js/views/modals/invite.hbs']
});

BlkLab.App.InviteFilteredModalView = BlkLab.View.extend({
	template: this.views['./app/js/views/modals/invite-filtered.hbs']
});

BlkLab.App.NewJobView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/add-job-form.hbs']
});

BlkLab.App.ProfessorsProjectController = BlkLab.Controller.extend({
    leaderInvites: {},
    studentInvites: {},
    jobs: [],
    data:[],
    
	actions:{
        toggle: function(){
            _$(this).children_by_class('job-description').first().toggle_class('show');
        },
        
        changeStatus: function(){
            var self = BlkLab.App.ProfessorsProjectController;
            var ele = _$(this);
            var id = ele.data('id');
            var value = ele.data('value');
            var model = Object.create(BlkLab.App.ProjectsModel);
            model.find({'_id': id}).then(function(){
                model.set('status', value);
                model.save().then(function(http){
                    location.href = location.href;
                });
            });
        },
        
        createSkill: function(val, idx, is_selected){
            var self = BlkLab.App.ProfessorsPostJobsDetailController;
            var skills = _$('#skills-list-' + idx);
            if(skills){
                var cls;
                if(is_selected){
                    cls = 'skill selected fade';
                }else{
                    cls = 'skill fade';   
                }
                var skill = BlkLab.create('div', {'class': cls});
                skill.setAttribute('index', idx);
                skill.click(self.actions.select.bind(skill));
                skill.innerHTML = val;
                skills.append(skill);                
            }
        },
        
        removeJob: function(){
            var ele = _$(this);
            var id = ele.data('id');
            var model = BlkLab.App.JobsModel;
            BlkLab.App.JobsModel.del(id).then(function(project){
               location.href = location.href; 
            });
        },
        
        addLeaderInvite: function(){
            var ele = _$(this);
            var id = ele.data('id');
            if(BlkLab.App.ProfessorsProjectController.leaderInvites[id]){
                delete BlkLab.App.ProfessorsProjectController.leaderInvites[id]
            }else{
                BlkLab.App.ProfessorsProjectController.leaderInvites[id] = 1
            }
            ele.toggle_class('selected');
        },
        
        addStudentInvite: function(){
            var ele = _$(this);
            var id = ele.data('id');
            if(BlkLab.App.ProfessorsProjectController.studentInvites[id]){
                delete BlkLab.App.ProfessorsProjectController.studentInvites[id]
            }else{
                BlkLab.App.ProfessorsProjectController.studentInvites[id] = 1
            }
            ele.toggle_class('selected');
        },
        
        sendInvites: function(){
            BlkLab.post({
				url: '/api/professors/invite/leaders',
                data: JSON.stringify({
                    existing: Object.keys(BlkLab.App.ProfessorsProjectController.leaderInvites),
                    external: _$('.invite-field').first().value.split(','),
                    project_id: BlkLab.App.ProfessorsProjectController.project_id
                })
			}).then(function(http){
                BlkLab.App.ProfessorsProjectController.actions.close();
                location.href = location.href;
            });
        },
        
        addLeader: function(){
            BlkLab.get({
				url: '/api/invite/professors'
			}).then(function(http){
                var resp = JSON.parse(http.responseText);
                BlkLab.App.ProfessorsProjectController.data = resp;
                var view = new BlkLab.App.InviteModalView();
                view.model = {
                    data:{
                        members:resp
                    }
                }
                var screen = BlkLab.create('div', {id:'screen'});
                var modal = BlkLab.create('div', {id:'modal', 'class':'invite'});
                modal.innerHTML = view.render();
                _$("#content").append([screen, modal]);
                modal.add_class('show');
                screen.add_class('show');
                BlkLab.App.ProfessorsProjectController.refreshActions();
                _$('#search').on('keyup', BlkLab.App.ProfessorsProjectController.actions.search);
                document.body.style.overflow = 'hidden';
            });
        },
        
        
        
        addMember: function(){
            BlkLab.get({
				url: '/api/invite/students'
			}).then(function(http){
                var view = new BlkLab.App.InviteModalView();
                var screen = BlkLab.create('div', {id:'screen'});
                var modal = BlkLab.create('div', {id:'modal', 'class':'invite'});
                modal.innerHTML = view.render();
                _$("#content").append([screen, modal]);
                modal.add_class('show');
                screen.add_class('show');
                BlkLab.App.ProfessorsProjectController.refreshActions();
                document.body.style.overflow = 'hidden';
            });
        },
        
        search: function(){
            var value = this.value.toLowerCase();
            if(value.length >= 3){
                var list = _$('#user-list');
                var view = new BlkLab.App.InviteFilteredModalView();
                var data = BlkLab.App.ProfessorsProjectController.data.filter(function(row){
                    return row.first_name.toLowerCase().indexOf(value) != -1 || row.last_name.toLowerCase().indexOf(value) != -1 || row.email.toLowerCase().indexOf(value) != -1 || row.department.toLowerCase().indexOf(value) != -1
                });
                
                view.model = {
                    data:{
                        members:data
                    }
                }
                
                list.innerHTML = view.render();
            }else if (value.length == 0){
                var list = _$('#user-list');
                var view = new BlkLab.App.InviteFilteredModalView();
                view.model = {
                    data:{
                        members:BlkLab.App.ProfessorsProjectController.data
                    }
                }
                
                list.innerHTML = view.render();
            }
        },
        
        close: function(){
            var modal = _$('#modal');
            modal.remove_class('show');
            _$('#screen').remove_class('show');
            setTimeout(function(){
                modal.destroy();
                document.body.style.overflow = 'auto';
            }, 500);
        },
        
        addTag: function(){
            var tags = _$('#tags');
            var tag = BlkLab.create('div', {class:'tag'});
            tag.contentEditable = true;
            tags.append(tag);
            tag.focus();
            tag.onblur(function(){
                if(!BlkLab.App.ProjectsModel.data.tags){
                    BlkLab.App.ProjectsModel.data.tags = [];
                }
                BlkLab.App.ProjectsModel.data.tags.push(tag.innerHTML);
            });
        },
        
        edit: function(){
            var ele = _$(this);
            ele.contentEditable = true;
            ele.focus();
            ele.onblur(function(){
                BlkLab.App.ProjectsModel.save().then(function(http){
                    console.log(http);
                })
                ele.contentEditable = false;
            });
        }
    },
	
    project_id:'',    
    
	render: function(params){
        var self = this;
		var view = new BlkLab.App.ProfessorsProjectView();
        var nav = new BlkLab.App.ProfessorsNavigationView();

        BlkLab.App.ProjectsModel.find({_id:params.id}).then(function(project){
            BlkLab.App.ProfessorsModel.find().then(function(professor){
                self.project_id = params.id;
                nav.model = {data:{avatar:professor.get('avatar')}};
                var compensation = {};
                project.data.jobs.forEach(function(job){
                    compensation[job.compensation] = 1;
                });
                
                project.data.status = project.data.jobs.length == 0 ? 'active' : project.data.status;
                
                var len = project.data.jobs.length;
                var jobs = len > 1 ? len + ' Positions' : len + ' Position';
                
                view.model = {
                    data:{
                        nav:nav.render(),
                        project: project.data,
                        compensation: Object.keys(compensation).join(', '),
                        professor:professor.data,
                        jobCount: jobs
                    }
                };	
                view.render('#content');
                self.refreshActions();
                
                var nodes = _$('.description').first().childNodes;
                for(var i=0;i<nodes.length;i++){
                    try{
                        nodes[i].removeAttribute('style');
                    }catch(e){
                        console.log(e);
                    }
                }
                
                project.data.jobs.forEach(function(job, idx){
                    var compensation = job.compensation.split(', ');
                    
                    if(compensation.length > 0){
                        compensation.forEach(function(comp){
                            if(comp.replace(' ', '')){
                                _$('#' + comp.replace(' ', '') + '-' + idx).checked = true;
                            }
                        });
                    }
                    
                    var skills = job.skills[0]
                    if(typeof skills === 'string' || (skills && skills.length > 0)){
                        skills.split(', ').forEach(function(skill){
                            self.actions.createSkill(skill, idx, true);
                        })
                    }else{
                        skills.forEach(function(skill){
                            self.actions.createSkill(skill, idx, true);
                        })
                    }
                });
                
            });
        })		
	}
});

BlkLab.App.ApplicantsView = BlkLab.View.extend({
	template: this.views['./app/js/views/professors/applicants.hbs']
});

BlkLab.App.ProfessorsProjectApplicantsController = BlkLab.Controller.extend({
    actions:{},
    
    render: function(params){
        var self = this;
		var view = new BlkLab.App.ApplicantsView();
        var nav = new BlkLab.App.ProfessorsNavigationView();

        BlkLab.App.ProjectsModel.find({_id:params.id}).then(function(project){
            BlkLab.App.ProfessorsModel.find().then(function(professor){
                self.project_id = params.id;
                nav.model = {data:{avatar:professor.get('avatar')}};
                view.model = {
                    data:{
                        nav:nav.render(),
                        project: project.data
                    }
                };	
                view.render('#content');
                self.refreshActions();
            });
        });
    }
});


BlkLab.App.Router.routes({
	'/thanks': {
		controller: BlkLab.App.ThanksController
	},
    
    '/coming-soon': {
		controller: BlkLab.App.ComingSoonController
	},
    
    '/professors': {
		controller: BlkLab.App.ProfessorsController
	},
	
	'/professors/login': {
		controller: BlkLab.App.ProfessorsLoginController
	},
    
    '/professors/logout': {
		controller: BlkLab.App.ProfessorsLogutController
	},
	
	'/professors/profile': {
		controller: BlkLab.App.ProfessorsProfileController,
		secured:true
	},
	
	'/professors/news-feed': {
		controller: BlkLab.App.ProfessorsNewsFeedController,
		secured:true
	},
	
	'/professors/post': {
		controller: BlkLab.App.ProfessorsPostController,
		secured:true
	},
	
	'/professors/post/about': {
		controller: BlkLab.App.ProfessorsPostAboutController,
		secured:true
	}, 
    
    '/professors/post/categories': {
		controller: BlkLab.App.ProfessorsPostCategoryController,
		secured:true
	}, 
	
	'/professors/post/jobs': {
		controller: BlkLab.App.ProfessorsPostJobsController,
		secured:true
	},
	
	'/professors/post/jobs/detail': {
		controller: BlkLab.App.ProfessorsPostJobsDetailController,
		secured:true
	},
	
	'/professors/post/audience': {
		controller: BlkLab.App.ProfessorsPostAudienceController,
		secured:true
	},
	
	'/professors/post/publish': {
		controller: BlkLab.App.ProfessorsPostPublishController,
		secured:true
	},
    
    '/professors/projects': {
		controller: BlkLab.App.ProfessorsProjectsController,
		secured:true
	},
    
    '/professors/projects/:id': {
		controller: BlkLab.App.ProfessorsProjectController,
		secured:true
	},
    
    '/professors/projects/:id/applicants': {
		controller: BlkLab.App.ProfessorsProjectApplicantsController,
		secured:true
	}
});
;BlkLab.App.ProjectsModel = BlkLab.Model.extend({});
BlkLab.App.ProjectsModel.schema({
	type: _String,
	name: _String,
	description: _String,
	audience: _String,    
	published:_Boolean,
    avatar: {type:_String, default:"avatar-placeholder.png"},
    status:{type:_String, default:"draft"},
	tags: {default:[]},
    jobs: {default:[]},
    leaders:{default:[]},
    members:{default:[]},
    applicants:{default:[]},
	university: _String,
    trending:_Number
});

BlkLab.App.ProjectsModel.url = '/api/projects';;BlkLab.App.ExploreView = BlkLab.View.extend({
	template: this.views['./app/js/views/explore/explore.hbs']
});

BlkLab.App.ExploreSearchResultsView = BlkLab.View.extend({
	template: this.views['./app/js/views/explore/search-results.hbs']
});

var timer;
BlkLab.App.ExploreController = BlkLab.Controller.extend({
    filters: {},
    
	actions:{
        select: function(){
            var type = BlkLab.Utils.titleCase(BlkLab.Storage.get('type') || 'student') || 'Student';
            var self = BlkLab.App.ExploreController;
            var ele = _$(this);
            var key = ele.data('key');
            var value = ele.innerHTML;
            self.filters[key] = value;
            BlkLab.post({
                url: '/api/projects/filter',
                data: JSON.stringify(self.filters),
            }).then(function(http){
                var data = JSON.parse(http.response);
                var view = new BlkLab.App.ExploreSearchResultsView();
                if(data){
                    var d = data;
                    d.forEach(function(projects, idx){
                        var majors = {};
                        var degrees = {};
                        projects.usertype = type.toLowerCase();
                        projects.jobs.forEach(function(job){
                            if(job.major){
                                majors[job.major] = 1;
                            }
                            if(job.degree){
                                degrees[job.degree] = 1;
                            }
                        });                                                

                        var ma = Object.keys(majors);
                        var de = Object.keys(degrees); 
                        if(ma){
                            if(ma.length > 1){
                                ma = 'Multiple Majors';   
                            }else if(ma.length == 1){
                                ma = ma[0];   
                            }else{
                                ma = 'Any Major';
                            }
                        }
                        de = de && de.length > 0 ? de.join(',') : 'Any Degree';
                        d[idx].majors = ma ? ma : 'Any Major';
                        d[idx].degrees = de ? de : 'Any Degree';
                    });                        
                }
                view.model = {
                    data: {
                        projects:data
                    }
                }
                view.render('#project-list');
                self.refreshActions();
            });
        },
        
        deselect: function(){
            var self = BlkLab.App.ExploreController;
            var ele = _$(this);
        },
        
        search: function(){
            var type = BlkLab.Utils.titleCase(BlkLab.Storage.get('type') || 'student') || 'Student';
            var self = BlkLab.App.ExploreController;
            var ele = _$(this);
            var key = "free";
            var value = ele.value;
            clearTimeout(timer);
            timer = setTimeout(function(){
                self.filters[key] = value;
                if(value.length > 3){
                    BlkLab.post({
                        url: '/api/projects/filter',
                        data: JSON.stringify(self.filters),
                    }).then(function(http){
                        var data = JSON.parse(http.response);
                        var view = new BlkLab.App.ExploreSearchResultsView();
                        if(data){
                            var d = data;
                            d.forEach(function(projects, idx){
                                var majors = {};
                                var degrees = {};
                                projects.usertype = type.toLowerCase();
                                projects.jobs.forEach(function(job){
                                    if(job.major){
                                        majors[job.major] = 1;
                                    }
                                    if(job.degree){
                                        degrees[job.degree] = 1;
                                    }
                                });                                                

                                var ma = Object.keys(majors);
                                var de = Object.keys(degrees); 
                                if(ma){
                                    if(ma.length > 1){
                                        ma = 'Multiple Majors';   
                                    }else if(ma.length == 1){
                                        ma = ma[0];   
                                    }else{
                                        ma = 'Any Major';
                                    }
                                }
                                de = de && de.length > 0 ? de.join(',') : 'Any Degree';
                                d[idx].majors = ma ? ma : 'Any Major';
                                d[idx].degrees = de ? de : 'Any Degree';
                            });                        
                        }
                        view.model = {
                            data: {
                                projects:data
                            }
                        }
                        view.render('#project-list');
                        self.refreshActions();
                    });
                }else if(value.length == 0){
                    BlkLab.post({
                        url: '/api/projects/filter',
                        data: JSON.stringify({all:1}),
                    }).then(function(http){
                        var data = JSON.parse(http.response);
                        var view = new BlkLab.App.ExploreSearchResultsView();
                        if(data){
                            var d = data;
                            d.forEach(function(projects, idx){
                                var majors = {};
                                var degrees = {};
                                projects.usertype = type.toLowerCase();
                                projects.jobs.forEach(function(job){
                                    if(job.major){
                                        majors[job.major] = 1;
                                    }
                                    if(job.degree){
                                        degrees[job.degree] = 1;
                                    }
                                });                                                

                                var ma = Object.keys(majors);
                                var de = Object.keys(degrees); 
                                if(ma){
                                    if(ma.length > 1){
                                        ma = 'Multiple Majors';   
                                    }else if(ma.length == 1){
                                        ma = ma[0];   
                                    }else{
                                        ma = 'Any Major';
                                    }
                                }
                                de = de && de.length > 0 ? de.join(',') : 'Any Degree';
                                d[idx].majors = ma ? ma : 'Any Major';
                                d[idx].degrees = de ? de : 'Any Degree';
                            });                        
                        }
                        view.model = {
                            data: {
                                projects:data
                            }
                        }
                        view.render('#project-list');
                        self.refreshActions();
                    });
                }
            }, 500);
        },
        
        toggle: function(){
            _$(this).children_by_class('job-description').first().toggle_class('show');
        },
        
        expand: function(){
            //console.log(ele.children_by_class('expand').first().scrollHeight);
            _$(this).parent.children_by_class('expand').first().toggle_class('expanded');
        },
        
        apply: function(){
            var ele = _$(this);
            var idx = ele.data('index');
            BlkLab.App.ApplyController.render(idx);
        },
        
        close: function(){
            var modal = _$('#modal');
            modal.remove_class('show');
            setTimeout(function(){
                modal.destroy();
            }, 500);
        },
        
        deleteProject: function(){
            var ele = _$(this);
            var id = ele.data('id');
            
            BlkLab.App.ProjectsModel.del(id).then(function(ret){
               _$(ele.parentNode.parentNode).destroy();
            });
        }
    },
    
	render: function(params){
        var type = BlkLab.Utils.titleCase(BlkLab.Storage.get('type') || 'student') || 'Student';
        var nav = new BlkLab.App[type+'sNavigationView']();
        var view = new BlkLab.App.ExploreView();
        var self = this;
        
        BlkLab.App.ProjectsModel.find().then(function(projects){
            BlkLab.App[type+'sModel'].find().then(function(professor){
                nav.model = {data:{avatar:professor.get('avatar')}};

                if(projects.data){
                    var d = projects.data;
                    d.forEach(function(projects, idx){
                        var majors = {};
                        var degrees = {};
                        projects.usertype = type.toLowerCase();
                        projects.jobs.forEach(function(job){
                            if(job.major){
                                majors[job.major] = 1;
                            }
                            if(job.degree){
                                degrees[job.degree] = 1;
                            }
                        });                                                
                        
                        var ma = Object.keys(majors);
                        var de = Object.keys(degrees); 
                        if(ma){
                            if(ma.length > 1){
                                ma = 'Multiple Majors';   
                            }else if(ma.length == 1){
                                ma = ma[0];   
                            }else{
                                ma = 'Any Major';
                            }
                        }
                        de = de && de.length > 0 ? de.join(',') : 'Any Degree';
                        d[idx].majors = ma ? ma : 'Any Major';
                        d[idx].degrees = de ? de : 'Any Degree';
                    });                        
                }                             
                
                view.model = {
                    data:{
                        nav: nav.render(),
                        projects:projects.data,
                        count: projects.data.length,
                        usertype: type.toLowerCase()
                    }
                }
                view.render('#content');
                self.refreshActions();
                _$('#search').on('keyup', self.actions.search);
            });
        }, function(){
            view.model = {
                data:{
                    nav: nav.render(),
                    projects:[],
                    count:0,
                    usertype: type.toLowerCase()
                }
            }
            view.render('#content');
            self.refreshActions();
        })
		
	}
});

BlkLab.App.ApplyView = BlkLab.View.extend({
	template: this.views['./app/js/views/modals/apply.hbs'],
	title:'Kubby Professor Home'
});

BlkLab.App.ApplyController = BlkLab.Controller.extend({
    selectedJobs: [],
    
	actions:{
        close: function(){
            var modal = _$('#modal');
            modal.remove_class('show');
            setTimeout(function(){
                modal.destroy();
            }, 500);
        },
        
        jobSelect: function(){
            var jobs = BlkLab.App.ApplyController.selectedJobs;
            var ele = _$(this);
            var job = this.value;
            if(!this.checked){
               jobs = jobs.filter(function(j){
                   if(j == job){
                       return false;
                   }else{
                       return true;   
                   }                   
               })
            }else{
                jobs.push(job);
            }
            BlkLab.App.ApplyController.selectedJobs = jobs;
        },
        
        submit: function(){
            var jobs = BlkLab.App.ApplyController.selectedJobs;
            var message = _$('#message-text').value;
            BlkLab.post({
                url: '/api/projects/apply',
                data: JSON.stringify({
                    jobs: jobs,
                    message: message
                }),
            }).then(function(http){
                _$('#student-detail').hide();
                _$('#application-complete').show();
            });
        }
    },

	render: function(idx){
        var modal = BlkLab.create('div', {id: 'modal', 'class': 'apply'});
        var view = new BlkLab.App.ApplyView();
        var data;
        console.log(idx !== false)
        if(idx !== false){
            data = BlkLab.App.ProjectsModel.data[idx]
        }else{
            data = BlkLab.App.ProjectsModel.data
        }
        
        BlkLab.App.StudentsModel.find().then(function(student){
            view.model = {
                data: {
                    project: data,
                    student: student.data
                }                
            }
            modal.innerHTML = view.render();
            _$('#content').append(modal);
            modal.add_class('show');
            BlkLab.App.ApplyController.refreshActions();
        });
    }
});

BlkLab.App.ExploreProjectView = BlkLab.View.extend({
	template: this.views['./app/js/views/explore/project.hbs'],
	title:'Kubby Professor Home'
});

BlkLab.App.ExploreProjectController = BlkLab.Controller.extend({
	actions:{
        toggle: function(){
            _$(this).children_by_class('job-description').first().toggle_class('show');
        },
        
        apply: function(){
            var ele = _$(this);
            BlkLab.App.ApplyController.render(false);
        }
    },

	render: function(params){
        var type = BlkLab.Utils.titleCase(BlkLab.Storage.get('type') || 'student') || 'Students';
        var nav = new BlkLab.App[type+'sNavigationView']();
        var view = new BlkLab.App.ExploreProjectView();
        var self = this;
        BlkLab.App.ProjectsModel.find({_id:params.id}).then(function(project){
            BlkLab.App[type+'sModel'].find().then(function(professor){
                nav.model = {data:{avatar:professor.get('avatar')}};
                var compensation = {};
                project.data.jobs.forEach(function(job){
                    compensation[job.compensation] = 1;
                });
                
                project.data.status = project.data.jobs.length == 0 ? 'active' : project.data.status;
                
                var len = project.data.jobs.length;
                var jobs = len > 1 ? len + ' Positions' : len + ' Position';
                
                view.model = {
                    data:{
                        nav:nav.render(),
                        project: project.data,
                        compensation: Object.keys(compensation).join(', '),
                        professor:professor.data,
                        jobCount: jobs,
                        usertype: type.toLowerCase()
                    }
                };	
                view.render('#content');
                self.refreshActions();
            });
        })	
	}
});

BlkLab.App.ExploreProfileView = BlkLab.View.extend({
	template: this.views['./app/js/views/explore/professors/profile.hbs']
});

BlkLab.App.ExploreProfileController = BlkLab.Controller.extend({
	actions:{},

	render: function(params){
        var self = this;
		var type = BlkLab.Utils.titleCase(BlkLab.Storage.get('type') || 'student') || 'Students';
        var nav = new BlkLab.App[type+'sNavigationView']();
        var view = new BlkLab.App.ExploreProfileView();
        Object.create(BlkLab.App.ProfessorsModel).find().then(function(me){
            var me_data = Object.create(me);
            console.log(me);
            BlkLab.App[type+'sModel'].find({_id:params.id}).then(function(professor){          
                var data = professor.data;
                nav.model = {data:{avatar:me_data.get('avatar')}};
                data.avatar = data.avatar || 'avatar-placeholder.png';
                
                console.log(me);                
                
                view.model = {
                    data:{
                        nav: nav.render(),
                        profile:data
                    }
                };
                view.render('#content');
                self.refreshActions();
            });	
        });
	}
});

BlkLab.App.ExploreStudentProfileView = BlkLab.View.extend({
	template: this.views['./app/js/views/explore/professors/profile.hbs']
});

BlkLab.App.ExploreStudentProfileController = BlkLab.Controller.extend({
	actions:{},

	render: function(params){
        var self = this;
		var type = BlkLab.Utils.titleCase(BlkLab.Storage.get('type') || 'student') || 'Students';
        var nav = new BlkLab.App[type+'sNavigationView']();
        var view = new BlkLab.App.ExploreProfileView();
        Object.create(BlkLab.App.StudentsModel).find().then(function(me){
            var me_data = Object.create(me);
            console.log(me);
            BlkLab.App[type+'sModel'].find({_id:params.id}).then(function(professor){          
                var data = professor.data;
                nav.model = {data:{avatar:me_data.get('avatar')}};
                data.avatar = data.avatar || 'avatar-placeholder.png';
                
                console.log(me);                
                
                view.model = {
                    data:{
                        nav: nav.render(),
                        profile:data
                    }
                };
                view.render('#content');
                self.refreshActions();
            });	
        });
	}
});

BlkLab.App.Router.routes({
	'/explore': {
		controller: BlkLab.App.ExploreController
	},
    
    '/explore/project/:id': {
        controller: BlkLab.App.ExploreProjectController,
        secured:true
    },
    
    '/explore/profile/:id': {
        controller: BlkLab.App.ExploreProfileController,
        secured:true
    },
    
    '/explore/students/profile/:id': {
        controller: BlkLab.App.ExploreStudentProfileController,
        secured: true
    }
});
;BlkLab.App.AdminModel = BlkLab.Model.extend({});
BlkLab.App.AdminModel.url = '/api/admin';

BlkLab.App.AdminView = BlkLab.View.extend({
	template: this.views['./app/js/views/admin/admin.hbs']
});

BlkLab.App.AdminProfessorsView = BlkLab.View.extend({
	template: this.views['./app/js/views/admin/professors.hbs']
});

BlkLab.App.AdminStudentsView = BlkLab.View.extend({
	template: this.views['./app/js/views/admin/students.hbs']
});

BlkLab.App.AdminJobsView = BlkLab.View.extend({
	template: this.views['./app/js/views/admin/jobs.hbs']
});

BlkLab.App.AdminProjectsView = BlkLab.View.extend({
	template: this.views['./app/js/views/admin/projects.hbs']
});

BlkLab.App.ProfessorModalView = BlkLab.View.extend({
	template: this.views['./app/js/views/admin/professor-modal.hbs']
});

BlkLab.App.EditModalView = BlkLab.View.extend({
	template: this.views['./app/js/views/admin/edit-modal.hbs']
});

BlkLab.App.AdminController = BlkLab.Controller.extend({
    last:'',
    owner:'',
    project_id:'',
    data: [],
    editModel: null,
    
    actions:{
        edit: function(){
            var self = BlkLab.App.AdminController;
            var ele = _$(this);
            var id = ele.data('id');
            self.editModel = Object.create(BlkLab.App.ProfessorsModel);
            self.editModel.url = '/api/admin/professors';
            self.editModel.find({'_id': id}).then(function(m){
                var desc = self.editModel.get('description') || ''
                self.editModel.set('description', desc.replace(/&nbsp;/g, '').replace(/(<(br[^>]*)>)/ig, '\n').replace(/(<([^>]+)>)/ig,'\n'))
                var view = new BlkLab.App.EditModalView();
                view.model = {
                    data:self.editModel.data                    
                }
                var screen = BlkLab.create('div', {id:'screen'});
                var modal = BlkLab.create('div', {id:'modal', 'class':'invite'});
                modal.innerHTML = view.render();
                _$("#content").append(modal);
                var desc = _$('#description');
                
                desc.css({
                    height: desc.scrollHeight+'px'
                })
                modal.add_class('show');
                BlkLab.App.AdminController.refreshActions();
            });
        },
        
        addLink: function(){
            var self = BlkLab.App.AdminController;
            var ele = _$(this);
            var id = ele.data('id');
            var docs = _$('#documents-list');
            var lis = docs.children_by_tag('li').first();
            var li = BlkLab.create('li');
            var title = BlkLab.create('input', {type: 'text', id:'title-value', placeholder:'Link Title'});
            var link = BlkLab.create('input', {type: 'text', id:'link-value', placeholder: 'Link'});
            var save = BlkLab.create('input', {type: 'button', id:'save', value: 'Save'});
            li.append([title, link, save]);
            
            save.click(function(){
                if(!self.editModel.data.links){
                    self.editModel.data.links = [];
                }
                self.editModel.push('links', {title:title.value, link:link.value});                
                self.editModel.save().then(function(){
                    var len = self.editModel.get('links').length;
                    li.innerHTML = '<a href="' + link.value + '" target="_blank">' + title.value + '</a> <span class="fa fa-trash" blklab-click="removeLink" data-index="' + (len-1) + '"></span>';
                    self.refreshActions();
                });                
            });
            
            docs.append(li);
        },
        
        removeLink: function(){
            var self = BlkLab.App.AdminController;
            var ele = _$(this);
            var i = ele.data('index');
            _$(ele.parentNode).destroy();
            var list = self.editModel.get('links');
            list.splice(i, 1);
            self.editModel.set('links', list);
            self.editModel.save().then(function(){});
        },
        
        saveDescription: function(){
            var self = BlkLab.App.AdminController;
            var value = _$('#description').value;
            self.editModel.set('description', value);
            self.editModel.save().then(function(){});
            self.actions.closeEdit();
        },
        
        search: function(){
            var value = this.value.toLowerCase();
            if(value.length >= 3){
                var list = _$('#user-list');
                var view = new BlkLab.App.InviteFilteredModalView();
                var data = BlkLab.App.AdminController.data.filter(function(row){
                    return row.first_name.toLowerCase().indexOf(value) != -1 || row.last_name.toLowerCase().indexOf(value) != -1 || row.email.toLowerCase().indexOf(value) != -1 || row.department.toLowerCase().indexOf(value) != -1
                });
                
                view.model = {
                    data:{
                        members:data
                    }
                }
                
                list.innerHTML = view.render();
            }else if (value.length == 0){
                var list = _$('#user-list');
                var view = new BlkLab.App.InviteFilteredModalView();
                view.model = {
                    data:{
                        members:BlkLab.App.AdminController.data
                    }
                }
                
                list.innerHTML = view.render();
            }
        },
        
        handleFileSelect: function(e){
            var ele = _$(this);
            var id = ele.data('id');
            var avatar = _$(ele.parentNode.parentNode.getElementsByClassName('avatar')[0]);
            var loader = _$(ele.parentNode.parentNode.getElementsByClassName('loader')[0]);
            avatar.add_class('hidden');
            loader.add_class('show');            
			var reader = new FileReader();
			reader.onload = function(event){
				var canvas = document.createElement("canvas");
				var context = canvas.getContext('2d');
				var img = new Image();
				var width = 300;
				var height = 300;
				var minVal;
				img.onload = function(){
					var canvas = document.createElement("canvas");
					canvas.width = width;
					canvas.height = height;

					if(img.width == img.height) {
						canvas.getContext("2d").drawImage(img, 0, 0, width, height);
					}else{
						minVal = Math.min(img.width, img.height);
						if(img.width > img.height) {
							canvas.getContext("2d").drawImage(img, (img.width - minVal) / 2, 0, minVal, minVal, 0, 0, width, height);
						}else{
							canvas.getContext("2d").drawImage(img, 0, (img.height - minVal) / 2, minVal, minVal, 0, 0, width, height);
						}
					}
					avatar.src = canvas.toDataURL();
                    loader.remove_class('show');
                    BlkLab.put({
                        url: '/api/admin/professors/avatar/' + id,
                        data: JSON.stringify({
                            avatar: canvas.toDataURL()
                        }),
                    }).then(function(http){
                        //location.href = '/admin/professors';
                    });
				}
				img.src = event.target.result;
			}
			reader.readAsDataURL(e.target.files[0]); 
		},
        
        remove: function(){
            var ele = _$(this);
            var id = ele.data('id');
            var type = ele.data('type');
            
            var model = BlkLab.App[type+'Model'];
            model.del(id).then(function(){
                ele.parent.parent.destroy();
            });                        
        },
        
        selectProfessor: function(){
            var ele = _$(this);
            var id = ele.data('id');
            BlkLab.App.AdminController.owner = id;
            ele.toggle_class('selected');
            if(BlkLab.App.AdminController.last){
                BlkLab.App.AdminController.last.remove_class('selected');
            }
            BlkLab.App.AdminController.last = ele;
        },
        
        changeProfessor: function(){
            var ele = _$(this);
            var id = ele.data('id');
            BlkLab.App.AdminController.project_id = id;
            BlkLab.get({
				url: '/api/invite/professors'
			}).then(function(http){
                var resp = JSON.parse(http.responseText);
                BlkLab.App.AdminController.data = resp;
                var view = new BlkLab.App.ProfessorModalView();
                view.model = {
                    data:{
                        members:resp
                    }
                }
                var screen = BlkLab.create('div', {id:'screen'});
                var modal = BlkLab.create('div', {id:'modal', 'class':'invite'});
                modal.innerHTML = view.render();
                _$("#content").append([screen, modal]);
                modal.add_class('show');
                screen.add_class('show');
                BlkLab.App.AdminController.refreshActions();
                _$('#search').on('keyup', BlkLab.App.AdminController.actions.search);
                document.body.style.overflow = 'hidden';
            });
        },
        
        saveProfessor: function(){
            var ele = _$(this);
            var model = Object.create(BlkLab.App.ProjectsModel);
            model.find({'_id': BlkLab.App.AdminController.project_id}).then(function(){
                model.url = '/api/admin/projects/change-owner';
                model.set('oldProfessor', model.get('professor')._id);
                model.set('professor', BlkLab.App.AdminController.owner);
                model.save().then(function(http){
                    location.href = '/admin/projects';
                });
            });
        },
        
        changeStatus: function(){
            var self = BlkLab.App.AdminController;
            var ele = _$(this);
            var id = ele.data('id');
            var value = ele.data('value');
            var model = Object.create(BlkLab.App[self.type+'Model']);
            model.find({'_id': id}).then(function(){
                model.set('status', value);
                model.save().then(function(http){
                    location.href = '/admin/projects';
                });
            });
        },
        
        close: function(){
            var modal = _$('#modal');
            modal.remove_class('show');
            _$('#screen').remove_class('show');
            setTimeout(function(){
                modal.destroy();
                document.body.style.overflow = 'auto';
            }, 500);
        },
        
        closeEdit: function(){
            var modal = _$('#modal');
            modal.remove_class('show');
            setTimeout(function(){
                modal.destroy();
                document.body.style.overflow = 'auto';
            }, 500);
        },
        
        toggleTrending: function(){
            var ele = _$(this);
            var id = ele.data('id');
            var trending;
            if(ele.className.indexOf('fa-check-circle') != -1){
                ele.remove_class('fa-check-circle');
                ele.add_class('fa-circle');
                trending = 0
            }else{
                ele.remove_class('fa-circle');
                ele.add_class('fa-check-circle');
                trending = 1
            }
            
            var model = Object.create(BlkLab.App.ProjectsModel);
            model.find({'_id': id}).then(function(){
                model.set('trending', trending);
                model.save().then(function(http){
                    location.href = '/admin/projects';
                });
            });
        }
    },
    
    inline: function(){
        var self = BlkLab.App.AdminController;
        var cells = _$('.inline');
        cells.click(function(ev){
            if(ev.target.nodeName != 'INPUT'){
                var cell = _$(this);
                var input = BlkLab.create('input');
                var current = this.innerHTML;
                input.value = this.innerHTML;
                cell.innerHTML = '';
                cell.append(input);
                input.focus();
                input.onblur(function(){
                    if(current != input.value){
                        var model = Object.create(BlkLab.App[self.type+'Model']);
                        model.find({'_id': cell.data('id')}).then(function(m){                    
                            console.log(m);
                            model.set(cell.data('key'), input.value);
                            model.url = '/api/admin/' + self.type.toLowerCase();
                            model.save().then(function(http){
                                console.log(http.responseText);
                            })
                        });
                    }
                    cell.innerHTML = input.value;
                });
            }
        });
    },
    
    type:'',
    
    render: function(params){
        var self = this;
		var view = new BlkLab.App.AdminView();
        var nav = new BlkLab.App.ProfessorsNavigationView();
        var model;
        BlkLab.App.ProfessorsModel.find().then(function(professor){
            if(params.type){
                self.type = BlkLab.Utils.titleCase(params.type);
                if(params.type == 'professors'){
                    view = new BlkLab.App.AdminProfessorsView();    
                }else if(params.type == 'projects'){
                    view = new BlkLab.App.AdminProjectsView();    
                }else if(params.type == 'jobs'){
                    view = new BlkLab.App.AdminJobsView();    
                }else if(params.type == 'students'){
                    view = new BlkLab.App.AdminStudentsView();    
                }
                
                model = Object.create(BlkLab.App.AdminModel);
                model.path = '/'+params.type;
                var d = '';
                if(params.id){
                    d = {_id:params.id};
                }
                model.find(d).then(function(data){
                    nav.model = {data:{avatar:professor.get('avatar')}};
                    
                    if(params.type == 'jobs'){
                        var tmp = [];
                        data.data.forEach(function(project){
                            project.jobs.forEach(function(job){
                                job.project_name = project.name;
                                job.avatar = project.professor.avatar;
                            })
                            tmp = tmp.reduce(function(coll, item){
                                coll.push(item);
                                return coll;
                            }, project.jobs);                            
                        });                        
                        data.data = tmp;
                    }
                    
                    if(params.type == 'projects'){
                        data.data.forEach(function(project){
                           if(project.trending){
                               project.checkState = 'fa-check-circle';
                           }else{
                               project.checkState = 'fa-circle';
                           }
                        });
                    }
                    
                    view.model = {
                        data:{
                            nav:nav.render(),
                            data: data.data
                        }
                    };	
                    view.render('#content');
                    self.refreshActions();
                    self.inline();
                });
            }else{
                nav.model = {data:{avatar:professor.get('avatar')}};
                view.model = {
                    data:{
                        nav:nav.render(),
                        project: []
                    }
                };	
                view.render('#content');
                self.refreshActions();
                
            }
        });
    }
});

BlkLab.App.Router.routes({
	'/admin': {
		controller: BlkLab.App.AdminController
	},
    
    '/admin/:type': {
        controller: BlkLab.App.AdminController
    },
    
    '/admin/:type/:id': {
        controller: BlkLab.App.AdminController
    }
});;(function() {
    var content = _$('#content');
	_$(window).on('load', function(){});
	_$(window).on('resize', function(){});
    
    _$(document).enter(function(ev){
        var form = _$('form').first();
        if(form){
            form.submit();   
        }
    });

	function refresh(){};

	BlkLab.Security.handle = function(http){
        var type = BlkLab.Storage.get('type');
        BlkLab.Storage.remove('type');
        BlkLab.Storage.remove('access-token');
		var href = '/students/login';
		if(type == 'professor'){
			href = '/professors/login';
		}
		location.href = href;
	}


    BlkLab.History.start({
		callback: function(){
            window.scrollTo(0,0);
            content.scrollTop = 0;
            if(window.Intercom){
                window.Intercom('update');
            }
			refresh();
		}
	});
    BlkLab.App.run();
	refresh();

})();
