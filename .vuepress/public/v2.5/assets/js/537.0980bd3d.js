(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{498:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("Transformations and Profiles (see next section) are very similar in their nature. Usually\nif you implement a transformation, you also provide a profile for the same matter in the same bundle.")]),e._v(" "),a("p",[e._v("A transformation in openHAB is generally speaking a mapping from a Java String to a Java String\nwith a given user configuration.\nIt does not keep any state, so it is expected to return the same output for the same input.")]),e._v(" "),a("p",[e._v("Transformations are used for generic bindings like MQTT, HTTP, COAP and any other direct\nprotocol interaction to transform an incoming wire string to something that a channel can process.")]),e._v(" "),a("p",[e._v('Let\'s assume that we want to write a transformation that appends the string ",bro!" to every\ninput.')]),e._v(" "),a("p",[e._v("First you want to create a new bundle for example via the skeleton.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._m(3),e._v(" "),a("p",[e._v("Our implementation is as simple as this:")]),e._v(" "),e._m(4),e._m(5),e._v(" "),a("p",[e._v('The communication between the framework and the Thing handlers can be influenced by "Profiles".')]),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("But in contrast to transformations, if one Channel is linked to several Items it also will have several profile instances.\nEach instance handling the communication to exactly one of these Items.\nThe same applies for the situation where one Item is linked to multiple Channels.")]),e._v(" "),a("p",[e._v("Profiles are created by ProfileFactories and are retained for the lifetime of their link.\nThis means that they are, in contrast to transformations, allowed to retain a transient state,\nlike e.g. the timestamp of the the last event or the last state.\nWith this, it is possible to take into account the temporal dimension when calculating the appropriate action in any situation.")]),e._v(" "),a("p",[e._v("There exist two different kinds of profiles: state and trigger profiles.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),a("p",[e._v("Trigger profiles are powerful means to implement some immediate, straight-forward logic without the need to write any rules.")]),e._v(" "),a("p",[e._v("Apart from that, they do not pass any commands or state updates to and from the Thing handler as by their nature trigger Channels are not capable of handling these.")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._m(38),e._v(" "),a("p",[e._v("A few profiles are provided by openHAB itself.")]),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),a("DocPreviousVersions"),e._v(" "),a("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"developing-a-transformation-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#developing-a-transformation-service","aria-hidden":"true"}},[this._v("#")]),this._v(" Developing a Transformation Service")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You start by writing an OSGi service class that implements "),t("code",[this._v("TransformationService")]),this._v(".\nAlso check out the openHAB JavaDoc class documentation, there might be a more specialized class for\nyour needs like "),t("code",[this._v("AbstractFileTransformationService")]),this._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@NonNullByDefault")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("immediate "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" property "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"smarthome.transform=BRO"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TheBroTransformationService")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("implements")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TransformationService")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("private")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("final")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Logger")]),e._v(" logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TheBroTransformationService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Override")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Nullable")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("throws")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TransformationException")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Next you implement the "),a("code",[e._v("transform")]),e._v(" method. You are given a user configuration and the input value.\nIn our case we do not use the "),a("code",[e._v("config")]),e._v(' parameter.\nOther services like the regex or map transformation are using this parameter for the regex ("'),a("code",[e._v(".*=(\\\\d*.\\\\d*).*")]),e._v('") or the map ('),a("code",[e._v("mapfile.map")]),e._v(") for example.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Override")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Nullable")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("throws")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TransformationException")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" input "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('",bro!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"developing-a-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#developing-a-profile","aria-hidden":"true"}},[this._v("#")]),this._v(" Developing a Profile")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By their nature, profiles are correlated to links between Items and Channels (i.e. "),t("code",[this._v("ItemChannelLinks")]),this._v("),\njust like transformations.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"state-profiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state-profiles","aria-hidden":"true"}},[this._v("#")]),this._v(" State Profiles")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("State profiles are responsible for communication between Items and their corresponding state Channels ("),t("code",[this._v("ChannelKind.STATE")]),this._v(").\nTheir purpose is to forward state updates and commands to and from the Thing handlers.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"trigger-profiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trigger-profiles","aria-hidden":"true"}},[this._v("#")]),this._v(" Trigger Profiles")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Trigger Channels ("),t("code",[this._v("ChannelKind.TRIGGER")]),this._v(") by themselves do not maintain a state (as by their nature they only fire events).\nWith the help of trigger profiles they can be linked to Items anyway.\nHence the main purpose of a trigger profile is to calculate a state based on the fired events.\nThis state then is forwarded to the linked Item by sending "),t("code",[this._v("ItemStateEvents")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This section explains how custom "),t("code",[this._v("Profile")]),this._v("s can be created.\nFirst you want to create a new bundle for example via the skeleton.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"profile-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profile-properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Profile Properties")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("A "),a("code",[e._v("Profile")]),e._v(" is determined by its type, i.e. "),a("code",[e._v("StateProfileType")]),e._v(" or "),a("code",[e._v("TriggerProfileType")]),e._v(" and its "),a("code",[e._v("ProfileTypeUID")]),e._v(".\nBoth types are specified via interfaces "),a("code",[e._v("StateProfile")]),e._v(" and "),a("code",[e._v("TriggerProfile")]),e._v(", respectively.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The "),a("code",[e._v("ProfileTypeUID")]),e._v(" identifies one specific type of "),a("code",[e._v("Profile")]),e._v(".\nEach "),a("code",[e._v("Profile")]),e._v(" exists in a certain scope.\nThere are pre-defined "),a("code",[e._v("Profile")]),e._v("s that are defined in scope "),a("code",[e._v("ProfileTypeUID.SYSTEM_SCOPE")]),e._v(', which is "system".\nCustom '),a("code",[e._v("Profiles")]),e._v(" should be created in a different scope.\nThus a "),a("code",[e._v("ProfileTypeUID")]),e._v(" can be created as follows: "),a("code",[e._v('new ProfileTypeUID("MyScope", "MyProfileName")')]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("A "),a("code",[e._v("StateProfile")]),e._v(" receives "),a("code",[e._v("Commands")]),e._v(" and "),a("code",[e._v("StateUpdates")]),e._v(" from the "),a("code",[e._v("ThingHandler")]),e._v(" and from the "),a("code",[e._v("Item")]),e._v(".\nIt has to implement four methods that specify how the "),a("code",[e._v("Command")]),e._v("s or "),a("code",[e._v("StateUpdate")]),e._v("s should be handled.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("A "),a("code",[e._v("TriggerProfile")]),e._v(" makes it possible to link a "),a("code",[e._v("TriggerChannel")]),e._v(" to an "),a("code",[e._v("Item")]),e._v(".\nThis "),a("code",[e._v("Profile")]),e._v(" receives the "),a("code",[e._v("State")]),e._v(" of the "),a("code",[e._v("Item")]),e._v(" and the "),a("code",[e._v("Event")]),e._v(" that has been triggered.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"profiletypeprovider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profiletypeprovider","aria-hidden":"true"}},[this._v("#")]),this._v(" ProfileTypeProvider")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Custom "),t("code",[this._v("ProfileType")]),this._v("s have to be annouced by a "),t("code",[this._v("ProfileTypeProvider")]),this._v(" to the framework via an OSGi service:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("service "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ProfileTypeProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyProfileTypeProvider")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("implements")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ProfileTypeProvider")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Override")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Collection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ProfileType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getProfileTypes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Locale")]),e._v(" locale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//return custom types")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"profilefactory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profilefactory","aria-hidden":"true"}},[this._v("#")]),this._v(" ProfileFactory")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The most important interface is the "),t("code",[this._v("ProfileFactory")]),this._v(" which has to be implemented and announced as an OSGi service:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("service "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ProfileFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyProfileFactory")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("implements")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ProfileFactory")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Such a factory is responsible for specific "),a("code",[e._v("ProfileTypeUID")]),e._v("s that should be returned by "),a("code",[e._v("Collection<ProfileTypeUID> getSupportedProfileTypeUIDs()")]),e._v(".\nFurther it is capable of creating these "),a("code",[e._v("Profile")]),e._v("s via "),a("code",[e._v("createProfile(ProfileTypeUID profileTypeUID, ProfileCallback callback, ProfileContext profileContext);")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For convenience, the "),t("code",[this._v("ProfileFactory")]),this._v(" and the "),t("code",[this._v("ProfileTypeProvider")]),this._v(" can be put into one class and announce the two services:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("service "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ProfileFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ProfileTypeProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyProfileFactory")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("implements")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ProfileFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ProfileTypeProvider")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"profilecallback"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profilecallback","aria-hidden":"true"}},[this._v("#")]),this._v(" ProfileCallback")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("code",[e._v("Profile")]),e._v("s need the opportunity to notify the framework about what they did with the "),a("code",[e._v("Command")]),e._v("s and "),a("code",[e._v("StateUpdate")]),e._v("s it received from the framework.\nThe "),a("code",[e._v("ProfileCallback")]),e._v(" provides methods to forward the results of a "),a("code",[e._v("Profile")]),e._v("s processing to the "),a("code",[e._v("ThingHandler")]),e._v(" and to the "),a("code",[e._v("Framework")]),e._v(".\nIt should be injected into the "),a("code",[e._v("Profile")]),e._v(" upon its creation.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"profilecontext"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profilecontext","aria-hidden":"true"}},[this._v("#")]),this._v(" ProfileContext")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Some more advanced "),a("code",[e._v("Profile")]),e._v("s which can be configured need access to their "),a("code",[e._v("Configuration")]),e._v(" object.\nThis is offered via the "),a("code",[e._v("ProfileContext")]),e._v(".\nA "),a("code",[e._v("ScheduledExecutorService")]),e._v(" can also be retrieved via the "),a("code",[e._v("ProfileContext")]),e._v(" in order to schedule long running tasks in a separate Thread.\nThe "),a("code",[e._v("ProfileContext")]),e._v(" may also be injected into the "),a("code",[e._v("Profile")]),e._v(" upon its creation.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"profileadvisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profileadvisor","aria-hidden":"true"}},[this._v("#")]),this._v(" ProfileAdvisor")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("A "),a("code",[e._v("ProfileAdvisor")]),e._v(" is an optional component which can be used to suggest a specific "),a("code",[e._v("ProfileTypeUID")]),e._v(" for a given "),a("code",[e._v("Channel")]),e._v(" or "),a("code",[e._v("ChannelType")]),e._v(".\nTwo methods have to be implemented to achieve this:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("ProfileTypeUID getSuggestedProfileTypeUID(Channel channel, @Nullable String itemType);")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("ProfileTypeUID getSuggestedProfileTypeUID(ChannelType channelType, @Nullable String itemType);")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"using-profiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-profiles","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Profiles")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"items-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#items-file","aria-hidden":"true"}},[this._v("#")]),this._v(" .items file")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("Profiles")]),this._v("s can be specified as a parameter for a given channel:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("item"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyItem")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<bindingID>:<thing-typeID>:MyThing:myChannel"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("profile"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MyScope:MyProfile"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"existing-profiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#existing-profiles","aria-hidden":"true"}},[this._v("#")]),this._v(" Existing Profiles")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"followprofile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#followprofile","aria-hidden":"true"}},[this._v("#")]),this._v(" FollowProfile")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v('If one device should "follow" the actions of another device, the FollowProfile can be used.\nThe term "follow" in this case means that any state that is sent to an '),a("code",[e._v("Item")]),e._v(" will be forwarded from this "),a("code",[e._v("Item")]),e._v(" to any linked channel with the FollowProfile.\nThe FollowProfile takes state updates on an "),a("code",[e._v("Item")]),e._v(" and sends them as a command onto the channel.\nIn the direction from the ThingHandler towards the "),a("code",[e._v("Item")]),e._v(", the FollowProfile ignores state updates.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("itemType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("itemName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<channelUID>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<followChannelUID>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("profile"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"follow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"offsetprofile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#offsetprofile","aria-hidden":"true"}},[this._v("#")]),this._v(" OffsetProfile")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The "),a("code",[e._v("OffsetProfile")]),e._v(" provides the possibility to adjust a value from a device before it arrives at the framework.\nAn offset can be specified via the parameter "),a("code",[e._v("offset")]),e._v(" which has to be a "),a("code",[e._v("QuantityType")]),e._v(" or "),a("code",[e._v("DecimalType")]),e._v(".\nA positive offset is the amount of change from the device towards the framework, i.e. all values from the device are increased by this offset and values sent to the device are decreased by this offset.\nA negative offset subtracts the offset from the value sent by the device to the framework and adds the offset to values sent from the framework to the device.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v(" <itemName>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<bindingID>:<thing-typeID>:<thingName>:<channelName>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("profile"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"offset"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<value>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])}],!1,null,null,null);t.default=n.exports}}]);