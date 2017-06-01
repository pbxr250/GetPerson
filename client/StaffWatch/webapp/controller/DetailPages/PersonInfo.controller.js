sap.ui.define([
	"staffwatch/webapp/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/uxap/BlockBase"
], function(BaseController, JSONModel, BlockBase) {
	"use strict";

	return BaseController.extend("staffwatch.webapp.controller.DetailPages.PersonInfo", {

		onInit: function (oEvent) { 

			this._insertBlockViews();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("show_person").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
        	var sId = oEvent.getParameter("arguments").personId;
        	var sUrl = "http://127.0.0.1:3000/api/People/" + sId;
        	var oModelInfo = new sap.ui.model.json.JSONModel(sUrl);
        	this.setModel(oModelInfo,"mdInfo");
			this.getView().bindElement({
				path: "/",
				model: "mdInfo"
			});
			var sUriImage = "http://127.0.0.1:3000/api/people/getphoto?id=" + sId;
			this.getView().byId("pageHeaderInfo").setObjectImageURI(sUriImage);

			var oUIProgressBar = this.getView().byId("progressInd");
			var rand = Math.round(Math.random()*100);
			oUIProgressBar.setPercentValue(rand);
			oUIProgressBar.setDisplayValue(rand + "%");
		},


        toggleFooter: function (oEvent) {
			var a = this.getView().byId("ObjectPageLayout");
			var b =this.getView().byId("pageHeader");

			console.log(a);
		},

        /**
		 *Inserts Views into Block elements.
		 */
        _insertBlockViews: function () {
        	var classBlockGoals = BlockBase.extend("staffwatch.webapp.view.DetailPages.Blocks.BlockGoals", {
				metadata: {
					views: {
						Collapsed: {
							viewName: "staffwatch.webapp.view.DetailPages.Blocks.BlockGoals",
							type: "XML"
						},
						Expanded: {
							viewName: "staffwatch.webapp.view.DetailPages.Blocks.BlockGoals",
							type: "XML"
						}
					}
				}
			});
			var uiBlockGoals = new classBlockGoals();
			this.byId("goalsSub1").addBlock(uiBlockGoals);

			var classBlockPhone = BlockBase.extend("staffwatch.webapp.view.DetailPages.Blocks.BlockPhone", {
				metadata: {
					views: {
						Collapsed: {
							viewName: "staffwatch.webapp.view.DetailPages.Blocks.BlockPhone",
							type: "XML"
						},
						Expanded: {
							viewName: "staffwatch.webapp.view.DetailPages.Blocks.BlockPhone",
							type: "XML"
						}
					}
				}
			});
			var uiBlockPhone = new classBlockPhone();
			this.byId("personalSubS1").addBlock(uiBlockPhone);

			var classBlockAddresses = BlockBase.extend("staffwatch.webapp.view.DetailPages.Blocks.BlockAddresses", {
				metadata: {
					views: {
						Collapsed: {
							viewName: "staffwatch.webapp.view.DetailPages.Blocks.BlockAddresses",
							type: "XML"
						},
						Expanded: {
							viewName: "staffwatch.webapp.view.DetailPages.Blocks.BlockAddresses",
							type: "XML"
						}
					}
				}
			});
			var uiBlockAddresses = new classBlockAddresses();
			this.byId("personalSubS1").addBlock(uiBlockAddresses);

			var classBlockEAddr = BlockBase.extend("staffwatch.webapp.view.DetailPages.Blocks.BlockEAddr", {
				metadata: {
					views: {
						Collapsed: {
							viewName: "staffwatch.webapp.view.DetailPages.Blocks.BlockEAddr",
							type: "XML"
						},
						Expanded: {
							viewName: "staffwatch.webapp.view.DetailPages.Blocks.BlockEAddr",
							type: "XML"
						}
					}
				}
			});
			var uiBlockEAddr = new classBlockEAddr();
			this.byId("personalSubS1").addBlock(uiBlockEAddr);

			var classBlockPaymentMain = BlockBase.extend("staffwatch.webapp.view.DetailPages.Blocks.BlockPaymentMain", {
				metadata: {
					views: {
						Collapsed: {
							viewName: "staffwatch.webapp.view.DetailPages.Blocks.BlockPaymentMain",
							type: "XML"
						},
						Expanded: {
							viewName: "staffwatch.webapp.view.DetailPages.Blocks.BlockPaymentMain",
							type: "XML"
						}
					}
				}
			});
			var uiBlockPaymentMain = new classBlockPaymentMain();
			this.byId("personalSubS2").addBlock(uiBlockPaymentMain);

			var classBlockPaymentMore = BlockBase.extend("staffwatch.webapp.view.DetailPages.Blocks.BlockPaymentMore", {
				metadata: {
					views: {
						Collapsed: {
							viewName: "staffwatch.webapp.view.DetailPages.Blocks.BlockPaymentMore",
							type: "XML"
						},
						Expanded: {
							viewName: "staffwatch.webapp.view.DetailPages.Blocks.BlockPaymentMore",
							type: "XML"
						}
					}
				}
			});
			var uiBlockPaymentMore = new classBlockPaymentMore();
			this.byId("personalSubS2").addBlock(uiBlockPaymentMore);
        }
		
	});

});