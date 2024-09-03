Ext.define('SwApp.view.swuserlist.SwuserlistViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.swuserlistviewmodel',
  data: {
    name: 'swuserlistview',
  },
  stores: {
    users: {
      proxy: {
        type: 'rest',
        url: 'https://jsonplaceholder.typicode.com/users',
        reader: {
          type: 'json',
          rootProperty: '',
        },
      },
      autoLoad: true,
    },
  },
});
