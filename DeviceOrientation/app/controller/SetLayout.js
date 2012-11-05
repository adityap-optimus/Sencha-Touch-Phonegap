Ext.define('MyApp.controller.SetLayout', {
    extend : 'Ext.app.Controller',
    
    config: {
        profile: Ext.os.deviceType.toLowerCase(),
        refs: {
            myContainer: 'mainPanel'
        },
        control: {
            'mainPanel': {
                activate: 'onActivate'
            },
            'viewport': {
                //capture the orientation change event
                orientationchange: 'onOrientationchange'
            }
        } 
        
    },
    
    onActivate: function() {
        console.log('Main container is active');
    },
    
    init: function() {
        console.log('Controller initialized');
    },
    
    onOrientationchange: function(viewport, orientation, width, height) {
        console.log('Viewport orientation just changed');
        Ext.Msg.alert("Orientation",orientation);
        
        //another way to check the orientation is by checking the 
        //height and width of the screen window
        //There are some issues with the orientation when the code
        //was run on an Android Tablet so you check the height and 
        //width for a temporary fix until sencha provides one.
        console.log(height);
        console.log(width);
        if(width > height){
            orientation = 'landscape';
        }
        else {
            orientation = 'portrait';
        }
        console.log('Orientation is ' + orientation);
        
        //remove all the items from the main panel
        this.getMyContainer().removeAll(false,false);
        
        //add the landscape panel based on orientation 
        if(orientation == 'landscape'){
            console.log(landscapePanel.getItems());
            landscapePanel.add([screenLayout1,screenLayout2]);
            this.getMyContainer().add([landscapePanel]);
        }
        
        //add the portrait panel based on orientation 
        if(orientation == 'portrait'){
            console.log(portraitPanel.getItems());
            portraitPanel.add([screenLayout1,screenLayout2]);
            this.getMyContainer().add([portraitPanel]);
        }
    },
    
    launch: function() {
        console.log('Controller launched');
        
        //create a single instance of all the panels as global variables
        //so we can use them to add and remove without creating them 
        //again and again. (Not sure if creating again is better approach!)
        //Also this way it keeps the information that was entered on the
        //screen when the device orientation without you saving and restoring
        //each component
        screenLayout1 = Ext.widget('screenLayout1');
        screenLayout2 = Ext.widget('screenLayout2');
        landscapePanel = Ext.widget('landscapePanel');
        portraitPanel = Ext.widget('portraitPanel');
        
        //get the device orientation
        var orientation = Ext.Viewport.getOrientation();
        Ext.Msg.alert("Orientation",orientation);
        
        //you can also get the height and width and determine the
        //orientation. This code just to show how to do it. You can
        // use either approach
        var height = Ext.Viewport.getWindowHeight();
        var width = Ext.Viewport.getWindowWidth();
        console.log(height);
        console.log(width);
        if(width > height){
            orientation = 'landscape';
        }
        else {
            orientation = 'portrait';
        }
        console.log('Orientation is ' + orientation);
        
        //set panels inside the main Panel based on orientation
        if(orientation == 'landscape'){
            landscapePanel.add([screenLayout1,screenLayout2]);
            this.getMyContainer().add([landscapePanel]);
        }
        if(orientation == 'portrait'){
            portraitPanel.add([screenLayout1,screenLayout2]);
            this.getMyContainer().add([portraitPanel]);
        }
    },
            
});