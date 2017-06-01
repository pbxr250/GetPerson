sap.ui.define([
	"staffwatch/webapp/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/GroupHeaderListItem",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"	
], function(BaseController, JSONModel, GroupHeaderListItem, Filter, FilterOperator) {
	"use strict";

	return BaseController.extend("staffwatch.webapp.controller.MasterPages.PeopleList", {

		getGroupHeader: function (oGroup){
			return new GroupHeaderListItem( {
				title: oGroup.key,
				upperCase: false
			} );
		},

		handlePressListItem: function (oEvent, sId){
			this.getRouter().navTo("show_person", {
				personId : sId
			});
			
		},

		getRespectiveIcon: function (sId, oContext){
			var item = new sap.m.StandardListItem(sId, {
							type: sap.m.ListType.Active,
							title: (oContext.getProperty("FirstName") + " " + oContext.getProperty("LastName")),
							description: oContext.getProperty("LastName"),
							iconDensityAware: false,
							iconInset: false,
							press: [oContext.getProperty("id"), this.handlePressListItem, this]
						});
			var group = oContext.getProperty("Title");
			switch(group) {
				case "Sales Representative":
					item.setIcon("sap-icon://my-sales-order");
					break;
				case "Vice President, Sales":
					item.setIcon("sap-icon://manager");
					break;
				case "Sales Manager":
					item.setIcon("sap-icon://leads");
					break;
				case "Inside Sales Coordinator":
					item.setIcon("sap-icon://learning-assistant");
					break;
				default:
					item.setIcon("sap-icon://employee");
			}
			return item;
		},

		onSearch: function (oEvent){
			// build filter array
			var oList = this.getView().byId("peopleList1");
			var aFilter = [];
			//var sQuery = oEvent.getParameter("query");
			var sQuery = oEvent.getParameter("newValue");
			if (!sQuery) {
				oList.refreshAggregation("items");
			}
			aFilter.push(new Filter("FirstName", FilterOperator.Contains, sQuery));
			aFilter.push(new Filter("LastName", FilterOperator.Contains, sQuery));
			// filter binding
			var oBinding = oList.getBinding("items");
			var theFilter = new Filter({
				filters : aFilter,
				and : false 
			});
			oBinding.filter(theFilter);
		}

		
	});

});