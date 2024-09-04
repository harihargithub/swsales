Ext.define('SwApp.view.swuserlist.SwuserlistView', {
  extend: 'Ext.panel.Panel',
  xtype: 'swuserlistview',
  controller: { type: 'swuserlistviewcontroller' },
  viewModel: { type: 'swuserlistviewmodel' },
  layout: 'vbox',
  items: [
    {
      xtype: 'grid',
      reference: 'userGrid', // Add reference for the grid
      flex: 1,
      // height: '100vh', // Set a specific height for the grid
      // layout: 'vbox',
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
        bind: {
          store: '{users}', // Bind the paging toolbar to the users store
        },
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
      reference: 'detailsPanel', // Add reference for the details panel
      flex: 1,
      tpl: new Ext.XTemplate(
        '<div><strong>User ID:</strong> {id}</div>',
        '<div><strong>First Name:</strong> {name}</div>',
        '<div><strong>Last Name:</strong> {username}</div>',
        '<div><strong>Email:</strong> {email}</div>',
      ),
      data: {}, // Initialize with empty data to ensure the template is ready
    },
    {
      xtype: 'button',
      text: 'Click Me',
      handler: 'onButtonClick',
      margin: '10 0 0 0',
    },
  ],
});
