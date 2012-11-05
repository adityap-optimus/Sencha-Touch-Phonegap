Ext.define('MyApp.view.MainPanel', {
    extend: 'Ext.Panel',
    alias : 'widget.mainPanel',
     
    requires: [
            'MyApp.view.LandscapePanel',
            'MyApp.view.PortraitPanel'
        ],
                
    config: {
         
        fullscreen: true,
        layout: {
            type: 'fit'
        },
        items: [
            {
                //xtype: 'landscapePanel',
            }
        ]
    }
});