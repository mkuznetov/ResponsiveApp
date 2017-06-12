
Ext.define('ModernApp.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
          name: 'Tablet',
          views: ['ModernApp.view.tablet.Main']
    },

    views: ['ModernApp.view.tablet.Main'],
    //mainView: 'ModernApp.view.tablet.Main',

    isActive: function() {
        console.log("isActive Tablet: " + !!Ext.os.is.Tablet);
        return Ext.os.is.Tablet;
    },

    launch: function() {
        var mainView = Ext.create('ModernApp.view.tablet.Main');
        //Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(mainView);
        //Ext.Viewport.setActiveItem(mainView);
        console.log("ModernApp.profile.Tablet");
    }
});
