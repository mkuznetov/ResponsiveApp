/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
console.log("Desktop view: ModernApp.view.main.Main");

Ext.define('ModernApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    ///mixins: ['Ext.mixin.Responsive'],

    ///responsiveConfig: {
    ///    'width >= 600': {
    ///        title: 'wide'
    ///    },
    ///    'width < 600': {
    ///        title: 'narrow'
    ///    }
    ///},

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
                xtype: 'mainlist'
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            plugins: 'responsive',
            responsiveConfig: {
                'width >= 600': {
                    bind: {
                        html: '{loremIpsum}'
                    }
                },
                'width < 600': {
                    bind: {
                        html: '<b>Lorem ipsum dolor sit amet...</b>'
                    }
                }
            }
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            plugins: 'responsive',
            responsiveConfig: {
                'width >= 600': {
                    bind: {
                        html: '{loremIpsum}'
                    }
                },
                'width < 600': {
                    bind: {
                        html: '<b>Lorem ipsum dolor sit amet...</b>'
                    }
                }
            }
        },{
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            plugins: 'responsive',
            responsiveConfig: {
                'width >= 600': {
                    bind: {
                        html: '{loremIpsum}'
                    }
                },
                'width < 600': {
                    bind: {
                        html: '<b>Lorem ipsum dolor sit amet...</b>'
                    }
                }
            }
        }
    ]
});

