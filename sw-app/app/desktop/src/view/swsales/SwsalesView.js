Ext.define('SwApp.view.swsales.SwsalesView',{
	xtype: 'swsalesview',
	cls: 'swsalesview',
	controller: {type: 'swsalesviewcontroller'},
	viewModel: {type: 'swsalesviewmodel'},
	requires: [],
	extend: 'Ext.panel.Panel',

	html: '<div style="font-size:24px;">swsalesview</div>'
});
