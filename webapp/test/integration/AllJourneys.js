/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProductSet in the list

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
		"com/venky/ZMD/test/integration/MasterJourney",
		"com/venky/ZMD/test/integration/NavigationJourney",
		"com/venky/ZMD/test/integration/NotFoundJourney",
		"com/venky/ZMD/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});