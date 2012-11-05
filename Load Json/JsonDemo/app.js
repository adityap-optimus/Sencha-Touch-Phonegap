//app.js //app.js is responsible for the initial startup of the application
//It is the main Javascript entry point for the app.

Ext.require([
    
	//Required to load and parse Json data
    'Ext.data.proxy.JsonP'
]);

Ext.application({
    name : 'jsonDemo',
	
	//this function is called once the application has been launched successfully
    launch : function(){
        Ext.getBody().removeCls('loading');
		var jsonResult;
		
		//making Json request to load json from the following URL
		Ext.data.JsonP.request({
		url: 'https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=optimusmobility',
		callbackKey : 'callback',
		
		
		//if url has been accessed successfully
		success : function(result){
		
		//converting the 'result' object to string 
		jsonResult = JSON.stringify(result);
		
		alert(jsonResult);
		
		//display the json data in the html view
		Ext.Viewport.setHtml(jsonResult)
		}})
		
	  }
})