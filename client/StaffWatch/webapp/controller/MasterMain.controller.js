sap.ui.define([
	"staffwatch/webapp/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("staffwatch.webapp.controller.MasterMain", {

		/**
		 * @Standard button handler
		 */
		handleShowPeople: function (oEvent) {   
            this.getRouter().navTo("list_people");
        },

        handleShowAbout: function (oEvent) {   
            this.getRouter().navTo("show_about");
        }
	});

});