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
        { text: 'Order ID', dataIndex: 'OrderID' },
        { text: 'Customer ID', dataIndex: 'CustomerID' },
        { text: 'Employee ID', dataIndex: 'EmployeeID' },
        { text: 'Freight', dataIndex: 'Freight' },
        { text: 'Ship City', dataIndex: 'ShipCity' },
        { text: 'Verified', dataIndex: 'Verified' },
        { text: 'Order Date', dataIndex: 'OrderDate' },
        { text: 'Ship Name', dataIndex: 'ShipName' },
        { text: 'Ship Country', dataIndex: 'ShipCountry' },
        { text: 'Shipped Date', dataIndex: 'ShippedDate' },
        { text: 'Ship Address', dataIndex: 'ShipAddress' },
      ],
      flex: 1,
    },
  ],
});
