Ext.define('SwApp.view.orders.OrdersViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.ordersviewmodel',
  data: {
    name: 'ordersview',
  },
  stores: {
    orders: {
      type: 'store',
      autoLoad: false,
      fields: [
        { name: 'OrderID', type: 'int' },
        { name: 'CustomerID', type: 'string' },
        { name: 'EmployeeID', type: 'int' },
        { name: 'Freight', type: 'float' },
        { name: 'OrderDate', type: 'date', dateFormat: 'c' },
        { name: 'ShipAddress', type: 'string' },
        { name: 'ShipCity', type: 'string' },
        { name: 'ShipCountry', type: 'string' },
        { name: 'ShipName', type: 'string' },
        { name: 'ShippedDate', type: 'date', dateFormat: 'c' },
        { name: 'Verified', type: 'boolean' },
      ],
      proxy: {
        type: 'ajax',
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Orders',
        reader: {
          type: 'json',
          rootProperty: 'items', // Access the items array within the result object
        },
      },
    },
  },
});
