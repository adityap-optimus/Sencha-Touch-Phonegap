//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

Ext.application({
    name: 'Device',

   launch: function() {
         new Ext.Panel({
            fullscreen: true,
            dockedItems: [{xtype:'toolbar', title:'My First App'}],
            layout: 'fit',
            styleHtmlContent: true,
            html: '<form enctype="multipart/form-data" method="post"><h2>Regular file upload</h2><input type="file"></input><h2>capture=camera</h2><input type="file" accept="image/*;capture=camera"></input></form>'
        });
    }
});
