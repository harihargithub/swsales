Ext.define('SwApp.view.swuserlist.SwuserlistView', {
  extend: 'Ext.panel.Panel',
  xtype: 'swuserlistview',
  controller: { type: 'swuserlistviewcontroller' },
  viewModel: { type: 'swuserlistviewmodel' },
  requires: [
    'Ext.grid.plugin.PagingToolbar', // Add the required plugin
    // 'Ext.grid.filters.Filters', // Add the grid filters plugin
  ],
  layout: 'vbox',
  items: [
    {
      xtype: 'panel',
      layout: 'fit',
      flex: 5, // 5 means 5/6 of the available space
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
      items: [
        {
          xtype: 'grid',
          reference: 'userGrid',
          flex: 1, // Ensure the grid takes up available space
          style: { width: '100%' },
          plugins: {
            gridfilters: true,
            gridpagingtoolbar: true, // Use the paging toolbar plugin
          },
          columns: [
            { text: 'User ID', dataIndex: 'id', width: 120, filter: 'number' },
            {
              text: 'First Name',
              // dataindex: 'name',
              dataIndex: 'firstName',
              width: 200,
              filter: 'string',
            },
            {
              text: 'User Name',
              dataIndex: 'username',
              width: 200,
              filter: 'string',
            },
            { text: 'Email', dataIndex: 'email', width: 200, filter: 'string' },
          ],
          bind: '{users}', // Bind the store to the viewModel
          listeners: {
            select: 'onGridSelect',
          },
        },
      ],
    },
    {
      xtype: 'panel',
      reference: 'detailsPanel',
      flex: 1, // Ensure the details panel takes up available space
      tpl: new Ext.XTemplate(
        '<div><strong>User ID:</strong> {id}</div>',
        '<div><strong>First Name:</strong> {name}</div>',
        '<div><strong>Last Name:</strong> {username}</div>',
        '<div><strong>Email:</strong> {email}</div>',
      ),
      data: {},
    },
    {
      xtype: 'button',
      text: 'Click Me',
      handler: 'onButtonClick',
      margin: '10 0 0 0',
    },
  ],
});
