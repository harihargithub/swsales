Ext.define('SwApp.view.swuserlist.SwuserlistViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.swuserlistviewmodel',
  data: {
    name: 'swuserlistview',
  },
  stores: {
    users: {
      autoLoad: true,
      proxy: {
        type: 'rest',
        // url: 'https://jsonplaceholder.typicode.com/users',
        url: 'https://dummyjson.com/users',
        reader: {
          type: 'json',
          // rootProperty: '', // Ensure this matches the structure of the returned data
          rootProperty: 'users', // Ensure this matches the structure of the returned data
          totalproperty: 'total', // Ensure this matches the structure of the returned data
        },
        // configure the paging parameters
        pageParam: 'page',
        startParam: 'skip', // or start if you are using a 0-based index
        limitParam: 'limit',
      },
      listeners: {
        load: function (store, records, successful, operation, eOpts) {
          console.log('Store loaded:', records);
        },
        exception: function (proxy, response, operation, eOpts) {
          console.error('Store load failed:', response);
        },
      },
    },
  },
});
