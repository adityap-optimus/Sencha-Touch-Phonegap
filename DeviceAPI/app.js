//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

Ext.application({
    name: 'Device',

    stores: ['Images'],

    views: [
        'Main',
        'Information',
        'Camera',
        'Connection',
        'Notification',
        'Orientation',
        'Geolocation',
        'Push'
    ],

    controllers: [
        'Application',
        'Camera',
        'Notification',
        'Connection',
        'Push'
    ],

    launch: function() {	
		alert('App Starts');
        Ext.create('Device.view.Main');
    }
});
