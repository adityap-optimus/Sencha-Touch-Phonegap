Ext.define('MyApp.view.LandscapePanel', {
    extend: 'Ext.Panel',
    alias : 'widget.landscapePanel',
    
    requires: [
               'MyApp.view.ScreenLayout1',
               'MyApp.view.ScreenLayout2'
           ],
           
    config: {
        
        layout: {
            type: 'hbox'
        },
        defaults: {
            margin: '3 3 3 3',
        },
    }
});