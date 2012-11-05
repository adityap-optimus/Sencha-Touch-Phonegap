//This file 'app.js' is responsible for the initial startup of the application
//It is the main Javascript entry point for the app.

Ext.require([

     // Required to load and parse Json data 
    'Ext.data.proxy.JsonP',  

	//Required to diaplay data in the list view	
    'Ext.dataview.List'
    
]);

Ext.application({
    name : 'ParseJson',
    launch : function(){
        Ext.getBody().removeCls('loading');

        //creating a list view
		var listView = Ext.create('Ext.List', {
            fullscreen : true,
            cls : 'twitterView',
            
			//creating the store for the current data
			store : {
                autoLoad : 'true',
                fields: ['from_user', 'text', 'profile_image_url'],

				//creating the proxy to fetch data
                proxy : {
                    type : 'jsonp',
					url: 'http://search.twitter.com/search.json?q=optimusmobility',
						   	
					//set the Reader properties
					reader : {
                              type : 'json',
						      rootProperty: 'results'

						     }
                        }
                    },

            itemTpl: '<img src="{profile_image_url}" /><h2>{from_user}</h2><p>{text}</p>'
        });
        //Adding the list view to the current viewport
        Ext.Viewport.add(listView);
    }
})