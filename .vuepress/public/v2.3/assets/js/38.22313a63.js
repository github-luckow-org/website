(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{513:function(t,a,n){"use strict";n.r(a);var e=n(0),s=Object(e.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("The Pebble action service allows you to send pins and notifications directly to your Pebble watch.")]),t._v(" "),n("p",[t._v("You'll need to install the openHAB app on your Pebble watch and lookup the Timeline token.\nThis token is displayed at the bottom of the configuration page when you configure the app on your phone.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),n("DocPreviousVersions"),t._v(" "),n("EditPageLink")],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"pebble-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pebble-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Pebble Actions")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("You can either configure the required Pebble token in "),a("code",[this._v("services/pebble.cfg")]),this._v(" and refer to it by name, or provide it explicitly in your action calls.")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("table",[n("thead",[n("tr",[n("th",[t._v("Property")]),t._v(" "),n("th",[t._v("Default")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("<name>.token")])]),t._v(" "),n("td"),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",[t._v("A token to use in action calls by name")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"configuration-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Example")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("dave.token=88889999aaaabbbbccccddddeeeeffff\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ul",[n("li",[n("code",[t._v("pebblePin(String instanceOrToken, Date time, String title, String body)")]),t._v(": Insert a pin at a given time with a title and body.")]),t._v(" "),n("li",[n("code",[t._v("pebblePin(String instanceOrToken, Date time, String pinTitle, String actionTitle, String url)")]),t._v(": Insert a pin at a given time with a title and add an action. This action is a simple HTTP GET on the given url.")]),t._v(" "),n("li",[n("code",[t._v("pebbleNotification(String instanceOrToken, String title, String body)")]),t._v(": Push a notification directly, with the given title and body.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("All actions accept an instance name "),a("em",[this._v("or")]),this._v(" the timeline token as the first parameter.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("pebblePin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"88889999aaaabbbbccccddddeeeeffff"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" now"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toDate"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Dave left"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Dave is on his way"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("pebblePin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"dave"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("DateTime")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("withHourOfDay")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("23")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("withMinuteOfHour")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("30")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toDate"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Bed time"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Shutdown"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"http://192.168.1.15:8090/CMD?Lights_All=OFF"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("pebbleNotification")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"dave"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Dave left"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Dave left the house"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);s.options.__file="readme.md";a.default=s.exports}}]);