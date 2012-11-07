Ext.application({
    	name: 'Log',

       launch: function() {
        	// Destroy the #appLoadingIndicator element
        	Ext.fly('appLoadingIndicator').destroy();

        	// Initialize the view
        	Ext.Viewport.add({
    			layout: 'fit',
    			items: [
        		{
            		docked: 'top',
            		xtype: 'titlebar',
            		title: 'Log'
        		},
        		{
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
					console.log("Pinch");

					
        		}
			});

			//For double tap event
			Ext.Viewport.element.on({
  				doubletap: function(e, node) {
       				string="You tapped twice"
					Ext.getCmp('logger').setHtml(string);
					console.log("Double Tap");

				
        		}
			});

			//For single tap event
			Ext.Viewport.element.on({
    			singletap: function(e, node) {
       				string="You tapped"
					Ext.getCmp('logger').setHtml(string);
					console.log("Single tap");
        
   				 }
			});

			//For long press event
			Ext.Viewport.element.on({
    			longpress: function(e, node) {
       				string="Long pressed"
					Ext.getCmp('logger').setHtml(string);
					console.log("Long press");

        
    			}
			});
			
				//For long swipe event
				Ext.Viewport.element.on({
    			swipe: function(e, node) {
       				string="swipe left to right"
					Ext.getCmp('logger').setHtml(string);
					console.log("Swipe");

        
    			}
			});
			
			//For drag event
			Ext.Viewport.element.on({
    			drag: function(e, node) {
       				string="Drag"
					Ext.getCmp('logger').setHtml(string);
					console.log("Drag");
				}
			});

			//For rotate event
			Ext.Viewport.element.on({
    			rotate: function(e, node) {
       				string="rotate"
					Ext.getCmp('logger').setHtml(string);
					console.log("rotate");
	   			}
			});



		}
});
