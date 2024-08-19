Ext.define('SwApp.view.swsales.SwsalesView', {
  xtype: 'swsalesview',
  cls: 'swsalesview',
  controller: { type: 'swsalesviewcontroller' },
  viewModel: { type: 'swsalesviewmodel' },
  requires: [],
  extend: 'Ext.panel.Panel',

  layout: 'vbox', // Change layout to vertical box to stack grid and button

  items: [
    {
      xtype: 'grid',
      bind: '{salesData}',
      flex: 1, // Allow grid to take up remaining space
      columns: [
        { text: 'ID', dataIndex: 'id', flex: 1 },
        { text: 'Company Name', dataIndex: 'company_name', flex: 2 },
        { text: 'Revenue', dataIndex: 'revenue', flex: 1 },
        { text: 'URL', dataIndex: 'url', flex: 2 },
        { text: 'Last Entry Date', dataIndex: 'last_entry_date', flex: 1 },
        { text: 'Active Status', dataIndex: 'active_status', flex: 1 },
      ],
      listeners: {
        itemclick: 'onGridItemClick', // Attach the handler to the grid item click event
      },
    },
    {
      xtype: 'button',
      text: 'Click Me',
      handler: 'onButtonClick', // Attach a different handler to the button click event
      margin: '10 0 0 0', // Add some margin to separate the button from the grid
    },
  ],
});
