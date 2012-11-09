//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

/**
 * A demo application containing the Ext.Video component.
 */
Ext.application({
    glossOnIcon: false,
    icon: {
        57: 'resources/icons/icon.png'
    },
    requires: [
        'Ext.Panel',
        'Ext.Video'
    ],

    launch: function() {
         new Ext.Panel({
            fullscreen: true,
            dockedItems: [{xtype:'toolbar', title:'My First App'}],
            layout: 'fit',
            styleHtmlContent: true,
	    html: '<iframe width="640" height="360" src="http://www.youtube.com/embed/sk2BPP49GgI?feature=player_detailpage" frameborder="0" allowfullscreen></iframe>'
        });
    }
});
