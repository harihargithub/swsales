Ext.define('SwApp.view.swuserlist.SwuserlistView', {
  extend: 'Ext.panel.Panel',
  xtype: 'swuserlistview',
  controller: { type: 'swuserlistviewcontroller' },
  viewModel: { type: 'swuserlistviewmodel' },
  layout: 'vbox',
  items: [
    {
      xtype: 'grid',
      flex: 1,
      height: 800, // Set a specific height for the grid
      tbar: [
        '->',
        {
          text: 'Refresh',
          iconCls: 'fa fa-sync',
          handler: 'onRefreshClick',
        },
        {
          text: 'New User',
          iconCls: 'fa fa-plus',
          handler: 'onNewUserClick',
        },
      ],
      bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
      },
      columns: [
        { text: 'User ID', dataIndex: 'id', width: 120 },
        { text: 'First Name', dataIndex: 'name', width: 200 },
        { text: 'Last Name', dataIndex: 'username', width: 200 },
        { text: 'Email', dataIndex: 'email', width: 200 },
      ],
      bind: '{users}', // Bind the store to the viewModel
      listeners: {
        select: 'onGridSelect',
      },
    },
    {
      xtype: 'panel',
      itemId: 'detailsPanel',
      flex: 1,
      tpl: [
        '<div><strong>User ID:</strong> {id}</div>',
        '<div><strong>First Name:</strong> {name}</div>',
        '<div><strong>Last Name:</strong> {username}</div>',
        '<div><strong>Email:</strong> {email}</div>',
      ],
    },
    {
      xtype: 'button',
      text: 'Click Me',
      handler: 'onButtonClick',
      margin: '10 0 0 0',
    },
  ],
});
