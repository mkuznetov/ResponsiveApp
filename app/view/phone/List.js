/**
 * This view is an example list of people.
 */
Ext.define('ModernApp.view.phone.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'phonelist',

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
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, { 
        text: 'Phone',
        dataIndex: 'phone',
        width: 150 
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
