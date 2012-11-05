Ext.Loader.setConfig({ 
    enabled: true
});
 
Ext.application({
    
    name: 'MyApp',
    appFolder: 'app',
    requires: [
               'MyApp.view.MainPanel',
               ], 
               
    views : ['MainPanel'],          
    controllers: ['SetLayout'],
    
    launch: function() {
        console.log('Application launch');
        Ext.create('MyApp.view.MainPanel');
    }
    
});
