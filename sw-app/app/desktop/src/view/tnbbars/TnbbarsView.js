Ext.define('SwApp.view.tnbbars.TnbbarsView', {
  extend: 'Ext.panel.Panel',
  xtype: 'tnbbarsview',
  controller: { type: 'tnbbarsviewcontroller' },
  viewModel: { type: 'tnbbarsviewmodel' },
  cls: 'tnbbarsview', // Add this line to apply the CSS class
  layout: 'fit', // Use 'fit' layout to ensure the grid takes up the entire panel
  height: 600,
  items: [
    {
      xtype: 'grid',
      reference: 'userGrid',
      flex: 1,
      plugins: 'gridfilters',
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
          store: '{users}', // Bind to the ViewModel store
        },
      },
      columns: [
        { text: 'User ID', dataIndex: 'id', width: 120 },
        { text: 'First Name', dataIndex: 'name', width: 200 },
        { text: 'Last Name', dataIndex: 'username', width: 200 },
        { text: 'Email', dataIndex: 'email', width: 200 },
      ],
      bind: {
        store: '{users}', // Bind to the ViewModel store
      },
    },
  ],
  viewModel: {
    type: 'default',
    stores: {
      users: {
        type: 'store',
        fields: ['id', 'name', 'username', 'email'],
        data: [
          {
            id: 1,
            name: 'John',
            username: 'john_doe',
            email: 'john@example.com',
          },
          {
            id: 2,
            name: 'Jane',
            username: 'jane_doe',
            email: 'jane@example.com',
          },
        ],
      },
    },
  },
});
