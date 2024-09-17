// Controller definition
Ext.define('SwApp.view.tnbbars.TnbbarsViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.tnbbarsviewcontroller',

  onRefreshClick: function () {
    // debugger; // Add debugger statement here
    var grid = this.lookupReference('userGrid');
    console.log('Grid store before reload:', grid.getStore().getData().items);

    grid.getStore().reload({
      callback: function (records, operation, success) {
        console.log(
          'Grid store after reload:',
          grid.getStore().getData().items,
        );
        Ext.defer(function () {
          Ext.Msg.alert('Refresh', 'Grid data refreshed.');
        }, 100); // Defer the alert to keep the UI responsive
      },
    });
  },

  onNewUserClick: function () {
    // Handler for New User button
    Ext.Msg.alert('New User', 'New User button clicked.');
  },
});
