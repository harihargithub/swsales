Ext.define('SwApp.view.swuserlist.SwuserlistViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.swuserlistviewcontroller',

  onRefreshClick: function () {
    var grid = this.lookupReference('userGrid');
    grid.getStore().reload();
    Ext.Msg.alert('Refresh', 'Grid data refreshed.');
  },

  onNewUserClick: function () {
    Ext.Msg.alert('New User', 'Add new user functionality here.');
  },

  onGridSelect: function (grid, record) {
    // Check if record is an array-like object and access the first item
    var selectedRecord = Array.isArray(record) ? record[0] : record;
    console.log('Selected Record Object:', selectedRecord); // Log the selected record object

    if (selectedRecord && selectedRecord.data) {
      var detailsPanel = this.lookupReference('detailsPanel');
      if (detailsPanel) {
        detailsPanel.setData(selectedRecord.data); // Use setData instead of update
      } else {
        Ext.Msg.alert('Error', 'Details panel not found.');
      }
    } else {
      Ext.Msg.alert('Error', 'Selected record is undefined or has no data.');
    }
  },

  onButtonClick: function () {
    Ext.Msg.alert('Button Clicked', 'Button click functionality here.');
  },
});
