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
        url: 'https://jsonplaceholder.typicode.com/users',
        reader: {
          type: 'json',
          rootProperty: '', // Ensure this matches the structure of the returned data
        },
      },
    },
  },
});
