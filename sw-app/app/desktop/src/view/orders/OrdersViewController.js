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

  onGlobalFilterChange: function (field, newValue) {
    var grid = this.lookupReference('ordersGrid'),
      store = grid.getStore(),
      filters = [];

    if (!store.isLoaded()) {
      console.warn('Store is not loaded yet.');
      return;
    }

    console.log('New filter value:', newValue); // Log the new filter value

    if (newValue) {
      grid.getColumns().forEach(function (column) {
        console.log('Column:', column); // Log the entire column object
        console.log('Column dataIndex:', column.dataIndex); // Log the dataIndex of each column
        if (column.dataIndex) {
          filters.push({
            property: column.dataIndex,
            value: newValue,
            anyMatch: true,
            caseSensitive: false,
          });
        } else {
          // Log nested columns if any
          if (column.columns && column.columns.length > 0) {
            column.columns.forEach(function (subColumn) {
              console.log('SubColumn:', subColumn); // Log the entire subColumn object
              console.log('SubColumn dataIndex:', subColumn.dataIndex); // Log the dataIndex of each subColumn
              if (subColumn.dataIndex) {
                filters.push({
                  property: subColumn.dataIndex,
                  value: newValue,
                  anyMatch: true,
                  caseSensitive: false,
                });
              }
            });
          }
        }
      });
    }

    console.log('Applying filters:', filters); // Log the filters being applied

    store.clearFilter();
    if (filters.length) {
      store.filter(filters);
    }

    // Log the filtered data
    console.log('Filtered data:', store.getData().items);

    // Verify the data structure
    if (store.getData().items.length > 0) {
      console.log('Data structure:', store.getData().items[0].getData());
    }
  },
});
