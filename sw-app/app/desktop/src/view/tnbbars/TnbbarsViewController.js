Ext.define('SwApp.view.tnbbars.TnbbarsViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.tnbbarsviewcontroller',

  onRefreshClick: function () {
    Ext.Msg.alert('Refresh', 'Refresh button clicked.');
  },

  onNewUserClick: function () {
    Ext.Msg.alert('New User', 'New User button clicked.');
  },
});
