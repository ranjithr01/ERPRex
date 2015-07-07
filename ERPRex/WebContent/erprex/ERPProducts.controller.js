sap.ui.controller("erprex.ERPProducts", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf erprex.ERPProducts
*/
	onInit: function()
	{
var oModel=new sap.ui.model.odata.ODataModel("proxy/http/services.odata.org/V3/%28S%28l3q3t4vxx1bp14usvfwzg2pc%29%29/OData/OData.svc");
oModel.oHeader={
		"DataServiceVersion":"3.0",
		"MaxDataServiceVersion":"3.0"
};

sap.ui.getCore().setModel(oModel,"products");

},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf erprex.ERPProducts
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf erprex.ERPProducts
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf erprex.ERPProducts
*/
//	onExit: function() {
//
//	},
	
	create:function()
	{
	alert("helo");	
	},

edit:function()
{
	},

	
	remove1:function()
	{
		
	},
	
	save:function()
	{
		
	}



});