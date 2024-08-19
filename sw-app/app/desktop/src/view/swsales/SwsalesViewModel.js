Ext.define('SwApp.view.swsales.SwsalesViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.swsalesviewmodel',

  data: {
    name: 'swsalesview',
  },

  stores: {
    salesData: {
      fields: [
        'id',
        'company_name',
        'revenue',
        'url',
        'last_entry_date',
        'active_status',
      ],
      proxy: {
        type: 'ajax',
        url: 'app/desktop/src/util/swsales.json',
        reader: {
          type: 'json',
          rootProperty: '',
        },
      },
      autoLoad: true,
    },
  },
});
