sap.ui.define([
	"staffwatch/webapp/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("staffwatch.webapp.controller.DetailMain", {

		handlePressTest: function (oEvent) { 

			var oResize = this.getComponentModel("device").getProperty("/resize");  
            console.log(oResize);
        },
		
	});

});