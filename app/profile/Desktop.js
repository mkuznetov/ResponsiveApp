
Ext.define('ModernApp.profile.Desktop', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Desktop',
        views: ['ModernApp.view.main.Main']
    },

    mainView: 'ModernApp.view.main.Main',

    isActive: function() {
        console.log("isActive Desktop: " + !!Ext.os.is.Desktop);
        return Ext.os.is.Desktop;
    },

    launch: function() {
        var mainView = Ext.create('ModernApp.view.main.Main');
        //Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(mainView);
        //Ext.Viewport.setActiveItem(mainView);
        console.log("ModernApp.profile.Desktop");
    }
});

