/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/venky/ZMD/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/venky/ZMD/test/integration/pages/App",
	"com/venky/ZMD/test/integration/pages/Browser",
	"com/venky/ZMD/test/integration/pages/Master",
	"com/venky/ZMD/test/integration/pages/Detail",
	"com/venky/ZMD/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.venky.ZMD.view."
	});

	sap.ui.require([
		"com/venky/ZMD/test/integration/NavigationJourneyPhone",
		"com/venky/ZMD/test/integration/NotFoundJourneyPhone",
		"com/venky/ZMD/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});