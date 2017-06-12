
console.log("Tablet view: ModernApp.view.tablet.Main");

Ext.define('ModernApp.view.tablet.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-tablet',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'left',

    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'tabletlist'
            }]
        }
    ]
});

