Ext.define('SwApp.view.tnbbars.TnbbarsView', {
  extend: 'Ext.panel.Panel',
  xtype: 'tnbbarsview',
  controller: { type: 'tnbbarsviewcontroller' },
  viewModel: { type: 'tnbbarsviewmodel' },
  cls: 'tnbbarsview',
  layout: 'fit',
  height: 600,
  requires: [
    'Ext.grid.plugin.PagingToolbar', // Add the required plugin
    // 'Ext.grid.filters.Filters', // Add the grid filters plugin
  ],
  items: [
    {
      xtype: 'panel',
      layout: 'fit',
      tbar: [
        '->',
        {
          text: 'Refresh',
          iconCls: 'fa fa-sync',
          handler: 'onRefreshClick',
          scope: 'controller', // Ensure the correct scope
        },
        {
          text: 'New User',
          iconCls: 'fa fa-plus',
          handler: 'onNewUserClick',
          scope: 'controller', // Ensure the correct scope
        },
      ],
      bbar: {
        // Move bbar configuration here
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying users {0} - {1} of {2}', // Display message with page numbers
        emptyMsg: 'No users to display',
        bind: {
          store: '{users}',
        },
      },
      items: [
        {
          xtype: 'grid',
          reference: 'userGrid',
          flex: 1,
          plugins: 'gridfilters',
          columns: [
            { text: 'User ID', dataIndex: 'id', width: 120 },
            { text: 'First Name', dataIndex: 'name', width: 200 },
            { text: 'Last Name', dataIndex: 'username', width: 200 },
            { text: 'Email', dataIndex: 'email', width: 200 },
          ],
          bind: {
            store: '{users}',
          },
        },
      ],
    },
  ],
  viewModel: {
    type: 'default',
    stores: {
      users: {
        type: 'store',
        fields: ['id', 'name', 'username', 'email'],
        pageSize: 10, // Set page size for pagination
        autoLoad: true, // Ensure the store is loaded automatically
        proxy: {
          type: 'memory',
          enablePaging: true,
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
            // Add more data here to test pagination
            {
              id: 3,
              name: 'Alice',
              username: 'alice_wonder',
              email: 'alice@example.com',
            },
            {
              id: 4,
              name: 'Bob',
              username: 'bob_builder',
              email: 'bob@example.com',
            },
            {
              id: 5,
              name: 'Charlie',
              username: 'charlie_chaplin',
              email: 'charlie@example.com',
            },
            {
              id: 6,
              name: 'David',
              username: 'david_bowie',
              email: 'david@example.com',
            },
            {
              id: 7,
              name: 'Eve',
              username: 'eve_adams',
              email: 'eve@example.com',
            },
            {
              id: 8,
              name: 'Frank',
              username: 'frank_sinatra',
              email: 'frank@example.com',
            },
            {
              id: 9,
              name: 'Grace',
              username: 'grace_hopper',
              email: 'grace@example.com',
            },
            {
              id: 10,
              name: 'Hank',
              username: 'hank_hill',
              email: 'hank@example.com',
            },
            {
              id: 11,
              name: 'Ivy',
              username: 'ivy_lee',
              email: 'ivy@example.com',
            },
          ],
          reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total',
          },
        },
      },
    },
  },
});
