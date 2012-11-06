//isOnline() tells wheteher device is Connected to internet or not

Ext.application({
name: 'Network',
requires: [
'Ext.MessageBox',
'Ext.device.Connection'],

		launch: function() 
			{
				Ext.Msg.alert('Online', Ext.device.Connection.isOnline());
			}

 });
 
 
 