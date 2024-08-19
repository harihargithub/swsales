Ext.define('SwApp.view.orders.OrdersViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ordersviewcontroller',

  onFetchOrdersClick: function () {
    var store = this.getViewModel().getStore('orders');
    store.load({
      callback: function (records, operation, success) {
        if (success) {
          console.log('Orders loaded successfully:', records);
          console.log('Store data:', store.getData().items);
          // Log the actual data to verify its structure
          if (records.length > 0) {
            console.log('Actual data:', records[0].getData());
          } else {
            console.log('No records found.');
          }
        } else {
          console.error('Failed to load orders:', operation.getError());
        }
      },
    });
  },
});
