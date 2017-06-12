/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */

// Run app:

// Run on the default device (concrete type will be detected at runtime):
// http://localhost:44078

// Run on the Desktop device:
// http://localhost:44078/?deviceType=Desktop

// Run on the Phone device:
// http://localhost:44078/?deviceType=Phone

// Run on the Tablet device:
// http://localhost:44078/?deviceType=Tablet

// Run on the BlackBerry device:
// http://localhost:44078/?deviceType=BlackBerry

Ext.application({
    extend: 'ModernApp.Application',

    name: 'ModernApp',

    requires: [
        // This will automatically load all classes in the ModernApp namespace
        // so that application classes do not need to require each other.
        'ModernApp.*'
    ],

    // The name of the initial view to create.
    //mainView: 'ModernApp.view.main.Main',

    // Application profiles for a variety of device types
    profiles: ['Desktop', 'Tablet', 'Phone']
});
