Ext.define('SwApp.view.swuserlist.SwuserlistViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.swuserlistviewcontroller',

  onRefreshClick: function () {
    Ext.Msg.alert('Hello', 'Hello Everybody');
  },

  onNewUserClick: function () {
    Ext.Msg.alert('New User', 'Add new user functionality here.');
  },

  onGridSelect: function (grid, record) {
    var detailsPanel = grid.up('panel').down('#detailsPanel');
    if (detailsPanel) {
      detailsPanel.update(record.getData());
    } else {
      Ext.Msg.alert('Error', 'Details panel not found.');
    }
  },

  onButtonClick: function () {
    Ext.Msg.alert('Button Clicked', 'Button click functionality here.');
  },
});
