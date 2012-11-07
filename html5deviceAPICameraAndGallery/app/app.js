//Set the path to 'touch/src' where the classes providing device support are present
Ext.Loader.setPath({
    'Ext': 'touch/src'
});

/*
  Create a panel and access Devices from this panel using HTML5
*/
Ext.application({
    name: 'HTML5deviceAPI',

   launch: function() {
         new Ext.Panel({
            fullscreen: true,
            dockedItems: [{xtype:'toolbar', title:'My First App'}],
            layout: 'fit',
            styleHtmlContent: true,
            html: '<form enctype="multipart/form-data" method="post"><h2>Regular file upload</h2><input type="file"></input><h2>capture=camera</h2><input type="file" accept="image/*;capture=camera"></input><h2>capture=camcorder</h2><input type="file" accept="video/*;capture=camcorder"></input><h2>capture=microphone</h2><input type="file" accept="audio/*;capture=microphone"></input></form>'
        });
    }
});
