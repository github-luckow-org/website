(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{632:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("AddonLogo"),t._v(" "),a("p",[t._v("This binding is for people with "),a("a",{attrs:{href:"http://enphase.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enphase Energy"),a("OutboundLink")],1),t._v(" microinverters used in their solar installation, which means every solar panel has its own inverter and can be monitored individually.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Your installer should have provided your with an "),a("a",{attrs:{href:"https://enlighten.enphaseenergy.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enlight Manager Account"),a("OutboundLink")],1),t._v(". Test that this account is working first and visit "),a("a",{attrs:{href:"https://enlighten.enphaseenergy.com/support",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://enlighten.enphaseenergy.com/support"),a("OutboundLink")],1),t._v(" to find out your Site ID (also called System ID). This is typically a small integer number, like 12345. It points to a specific installation location, you could potentially have more than one, if you have several homes.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Create a "),a("a",{attrs:{href:"https://developer.enphase.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("developer account"),a("OutboundLink")],1),t._v('. The free "WATT" plan is fine, as it allows 10 hits per minute and up to 10,000 per month. It doesn\'t make sense to poll the system more often that every 15 minutes, because the data is not updated more frequently anyway. The "WATT" plan requires Enphase attribution, which you could do within openHAB.')])]),t._v(" "),a("li",[a("p",[t._v("Create an "),a("a",{attrs:{href:"https://developer.enphase.com/admin/applications",target:"_blank",rel:"noopener noreferrer"}},[t._v("application"),a("OutboundLink")],1),t._v(" on the developer website.")])]),t._v(" "),a("li",[a("p",[t._v('Open the "Authorization URL" from the application in a web browser to receive a user id. The "user id" can always be seen under the account on the '),a("a",{attrs:{href:"https://enlighten.enphaseenergy.com/account",target:"_blank",rel:"noopener noreferrer"}},[t._v("enphase energy website"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Copy the "),a("a",{attrs:{href:"https://developer.enphase.com/admin/applications",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Key for the Application"),a("OutboundLink")],1),t._v(" and the user id from the Authorization URL to use in the next section.")])])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Example items:")]),t._v(" "),t._m(6),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"enphase-energy-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enphase-energy-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Enphase Energy Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"perequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#perequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Perequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding must be configured in the file "),e("code",[this._v("services/enphaseenergy.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("The API Key for the application you created earlier.")])]),t._v(" "),a("tr",[a("td",[t._v("user_id")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("Your user ID")])]),t._v(" "),a("tr",[a("td",[t._v("refresh")]),t._v(" "),a("td",[t._v("900000")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("How often to poll the API.  Default of 900000 is 15 minutes")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Enphase_last_report_at")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Solar Last Report at [%1$tD %tr]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (Solar)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" enphaseenergy"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12345#last_report_at"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Enphase_Current_Power")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Solar Latest Power [%.0f W]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (Solar)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" enphaseenergy"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12345#current_power"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Enphase_Energy_Today")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Solar Energy Today [%.2f kWh]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (Solar)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" enphaseenergy"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12345#energy_today"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Enphase_Energy_Lifetime")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Solar Energy Lifetime [%.1f MWh]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (Solar)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" enphaseenergy"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12345#energy_lifetime"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Enphase_Status")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Solar Status [%s]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (Solar)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" enphaseenergy"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12345#status"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Enphase_Modules")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Solar Number of Modules [%d]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (Solar)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" enphaseenergy"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12345#modules"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Enphase_size_w")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Solar System Size [%d W]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (Solar)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" enphaseenergy"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12345#size_w"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Enphase_source")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Solar Data Source [%s]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (Solar)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" enphaseenergy"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12345#source"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Enphase_summary_date")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Solar Summary Date [%1$tD]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (Solar)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" enphaseenergy"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12345#summary_date"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Enphase_operational_at")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Solar Operational at [%1$tD]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (Solar)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" enphaseenergy"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12345#operational_at"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="readme.md";e.default=n.exports}}]);