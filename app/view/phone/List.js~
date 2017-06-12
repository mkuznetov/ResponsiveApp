/**
 * This view is an example list of people.
 */
Ext.define('ModernApp.view.tablet.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'tabletlist',

    requires: [
        'ModernApp.store.Personnel'
    ],

    title: 'Personnel (' + Ext.os.deviceType + ')',

    store: {
        type: 'personnel'
    },

    columns: [{ 
        text: 'Name',
        dataIndex: 'name',
        width: 75,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 200 
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
