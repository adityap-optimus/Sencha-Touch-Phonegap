Ext.application({
    name: 'video',
	
	requires: [
        'Ext.MessageBox'
    ],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        
		// To add view
        Ext.Viewport.add({
        	fullscreen: true,
        	// To add titlebar
            dockedItems: [{xtype:'titlebar', title:'Camera', docked:'top',align:'centre'}],
            layout: 'fit',
            // To style HTML content
            styleHtmlContent: true,
            // HTML for accessing camera or gallery 
            html: '<input type="file"></input>'
        });

     }

});
