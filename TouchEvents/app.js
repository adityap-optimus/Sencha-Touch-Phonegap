Ext.application({
    	name: 'TouchEvents',

       launch: function() {
        	
        	// Destroy the #appLoadingIndicator element
        	Ext.fly('appLoadingIndicator').destroy();

        	// Initialize the view
        	Ext.Viewport.add({
    			layout: 'fit',
    			
    			items: [
        		{
        			//For titlebar named TouchEvents
            		docked: 'top',
            		xtype: 'titlebar',
            		title: 'TouchEvents'
        		},
        		{
        			//For text on the page
            		id: 'logger',
            		styleHtmlContent: true,
            		html: 'Perform touch events',
            		padding:5
        		}
        	
        		]
			});

			//For pinch event 
			Ext.Viewport.element.on({
				pinch: function(e, node) {
       				string="You pinched"
					Ext.getCmp('logger').setHtml(string);
										
        		}
			});

			//For double tap event
			Ext.Viewport.element.on({
  				doubletap: function(e, node) {
       				string="You tapped twice"
					Ext.getCmp('logger').setHtml(string);
					
				}
			});

			//For single tap event
			Ext.Viewport.element.on({
    			singletap: function(e, node) {
       				string="You tapped"
					Ext.getCmp('logger').setHtml(string);
        
   				 }
			});

			//For long press event
			Ext.Viewport.element.on({
    			longpress: function(e, node) {
       				string="Long pressed"
					Ext.getCmp('logger').setHtml(string);
        
    			}
			});


		}
});
