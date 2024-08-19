Ext.define('SwApp.view.swsales.SwsalesViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.swsalesviewcontroller',

  // Event handler for grid item click
  onGridItemClick: function (view, record, item, index, e, eOpts) {
    if (record && typeof record.get === 'function') {
      Ext.Msg.alert(
        'Item Clicked',
        'You clicked on ' + record.get('company_name'),
      );
    } else {
      Ext.Msg.alert('Error', 'Record is not valid.');
    }
  },

  // Event handler for button click
  onButtonClick: function () {
    Ext.Msg.alert('Button Clicked', 'You clicked the button.');
  },
});
