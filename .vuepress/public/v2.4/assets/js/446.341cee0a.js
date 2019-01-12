(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{463:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[a("a",{attrs:{href:"https://wiki.eclipse.org/JDT_Core/Null_Analysis",target:"_blank",rel:"noopener noreferrer"}},[t._v("Null annotations"),a("OutboundLink")],1),t._v(" are used from the Eclipse JDT project.\nThe intention of these annotations is to transfer a method's contract written in its JavaDoc into the code to be processed by tools.\nThese annotations can be used for "),a("strong",[t._v("static")]),t._v(" checks, but "),a("strong",[t._v("not")]),t._v(" at runtime.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("Fields should be annotated like this:")]),t._v(" "),t._m(6),a("p",[t._v("Methods should be annotated as follows:")]),t._v(" "),t._m(7),a("p",[t._v("Fields that get a static and mandatory reference injected through OSGi Declarative Services can be annotated with")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("The transition of existing classes can be a longer process, but using nullness annotations in a class / interface requires to set the default for the whole class and annotations on all types that differ from the default.")]),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"conventions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conventions","aria-hidden":"true"}},[this._v("#")]),this._v(" Conventions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"null-annotations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#null-annotations","aria-hidden":"true"}},[this._v("#")]),this._v(" Null Annotations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Thus for publicly exposed methods that belong to the API and are (potentially) called by external callers, a "),e("code",[this._v("null")]),this._v(" check cannot be omitted, although a method parameter is marked to be not "),e("code",[this._v("null")]),this._v(" via an annotation.\nThere will be a warning in the IDE for this check, but that is fine.\nFor private methods or methods in an internal package the annotations are respected and additional "),e("code",[this._v("null")]),this._v(" checks are omitted.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("To use the annotations, every bundle must have an "),a("strong",[t._v("optional")]),t._v(" "),a("code",[t._v("Import-Package")]),t._v(" dependency to "),a("code",[t._v("org.eclipse.jdt.annotation")]),t._v(".\nClasses should be annotated with "),a("code",[t._v("@NonNullByDefault")]),t._v(":")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNullByDefault")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyClass")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Return types, parameter types, generic types etc. are annotated with "),e("code",[this._v("@Nullable")]),this._v(" only.\nThe annotation should be written in front of the type.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[this._v("private")]),this._v(" "),e("span",{attrs:{class:"token annotation punctuation"}},[this._v("@Nullable")]),this._v(" MyType myField"),e("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Nullable")]),t._v(" MyReturnType "),a("span",{attrs:{class:"token function"}},[t._v("myMethod")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNullByDefault")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" MyService injectedService"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("to skip the nullevaluation for these fields.\nFields within "),a("code",[t._v("ThingHandler")]),t._v(" classes that are initialized within the "),a("code",[t._v("initialize()")]),t._v(" method may also be annotated like this, because the framework ensures that "),a("code",[t._v("initialize()")]),t._v(" will be called before any other method.\nHowever, please watch the scenario where the initialization of the handler fails, because fields might not have been initialized and using them should be prepended by a "),a("code",[t._v("null")]),t._v(" check.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There is "),e("strong",[this._v("no need")]),this._v(" for a "),e("code",[this._v("@NonNull")]),this._v(" annotation because it is set as default.\nTest classes do not have to be annotated (the usage of "),e("code",[this._v('SuppressWarnings("null")')]),this._v(" is allowed, too).")])}],!1,null,null,null);s.options.__file="conventions.md";e.default=s.exports}}]);