Ext.define('MyApp.view.PortraitPanel', {
    extend: 'Ext.Panel',
    alias : 'widget.portraitPanel',
    
    requires: [
               'MyApp.view.ScreenLayout1',
               'MyApp.view.ScreenLayout2'
           ],
           
    config: {
        
        layout: {
            type: 'vbox'
        },
        defaults: {
            margin: '3 3 3 3',
        }
    }
});