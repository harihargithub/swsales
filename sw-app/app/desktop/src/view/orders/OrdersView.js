Ext.define('SwApp.view.orders.OrdersView', {
  xtype: 'ordersview',
  cls: 'ordersview',
  controller: { type: 'ordersviewcontroller' },
  viewModel: { type: 'ordersviewmodel' },
  requires: [],
  extend: 'Ext.panel.Panel',

  layout: 'vbox',
  items: [
    {
      xtype: 'textfield',
      fieldLabel: 'Global Filter',
      listeners: {
        change: 'onGlobalFilterChange',
      },
    },
    {
      xtype: 'button',
      text: 'Fetch Orders',
      handler: 'onFetchOrdersClick',
    },
    {
      xtype: 'grid',
      reference: 'ordersGrid',
      bind: {
        store: '{orders}',
      },
      columns: [
        {
          text: 'Order ID',
          dataIndex: 'OrderID',
          filter: { type: 'string', itemDefaults: { emptyText: 'Search...' } },
        },
        {
          text: 'Customer ID',
          dataIndex: 'CustomerID',
          filter: { type: 'string', itemDefaults: { emptyText: 'Search...' } },
        },
        {
          text: 'Employee ID',
          dataIndex: 'EmployeeID',
          filter: { type: 'string', itemDefaults: { emptyText: 'Search...' } },
        },
        {
          text: 'Freight',
          dataIndex: 'Freight',
          filter: { type: 'number', itemDefaults: { emptyText: 'Search...' } },
        },
        {
          text: 'Ship City',
          dataIndex: 'ShipCity',
          filter: { type: 'string', itemDefaults: { emptyText: 'Search...' } },
        },
        {
          text: 'Verified',
          dataIndex: 'Verified',
          filter: { type: 'boolean', itemDefaults: { emptyText: 'Search...' } },
        },
        {
          text: 'Order Date',
          dataIndex: 'OrderDate',
          xtype: 'datecolumn',
          format: 'd-M-Y', // DD-MMM-YYYY format
          filter: {
            type: 'date',
            itemDefaults: {
              emptyText: 'Search...',
              dateFormat: 'd-M-Y', // Ensure the filter uses the same date format
            },
          },
        },
        {
          text: 'Ship Name',
          dataIndex: 'ShipName',
          filter: { type: 'string', itemDefaults: { emptyText: 'Search...' } },
        },
        {
          text: 'Ship Country',
          dataIndex: 'ShipCountry',
          filter: { type: 'string', itemDefaults: { emptyText: 'Search...' } },
        },
        {
          text: 'Shipped Date',
          dataIndex: 'ShippedDate',
          filter: { type: 'date', itemDefaults: { emptyText: 'Search...' } },
        },
        {
          text: 'Ship Address',
          dataIndex: 'ShipAddress',
          filter: { type: 'string', itemDefaults: { emptyText: 'Search...' } },
        },
      ],
      plugins: 'gridfilters', // Enable grid filters plugin
      flex: 1,
    },
  ],
});
