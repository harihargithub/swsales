Ext.define('SwApp.view.swsales.SwsalesView', {
  xtype: 'swsalesview',
  cls: 'swsalesview',
  controller: { type: 'swsalesviewcontroller' },
  viewModel: { type: 'swsalesviewmodel' },
  requires: [],
  extend: 'Ext.panel.Panel',

  layout: 'fit',

  items: [
    {
      xtype: 'grid',
      bind: '{salesData}',
      columns: [
        { text: 'ID', dataIndex: 'id', flex: 1 },
        { text: 'Company Name', dataIndex: 'company_name', flex: 2 },
        { text: 'Revenue', dataIndex: 'revenue', flex: 1 },
        { text: 'URL', dataIndex: 'url', flex: 2 },
        { text: 'Last Entry Date', dataIndex: 'last_entry_date', flex: 1 },
        { text: 'Active Status', dataIndex: 'active_status', flex: 1 },
      ],
    },
  ],
});
