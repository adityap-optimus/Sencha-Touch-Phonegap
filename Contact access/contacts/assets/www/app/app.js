Ext.application({
	name : 'app',
	launch : function() {
		alert('Launched');
		this.launched = true;
		this.mainLaunch();

	},
	mainLaunch : function() {
		var onSuccess = function(contacts) {
			for ( var i = 0; i < contacts.length; i++) {
				for ( var j = 0; j < contacts[i].phoneNumbers.length; j++) {

					console.log("Display Name = " + contacts[i].displayName);
					alert(contacts[i].displayName + ' '
							+ contacts[i].phoneNumbers[j].value + ' '
							+ contacts[i].phoneNumbers[j].type);
				}
			}
		};
		var onError = function() {
			alert('Error ');
		};
		if (!device || !this.launched) {
			return;
		}
		var options = new ContactFindOptions();
		options.filter = "";
		var fields = [ "displayName", "phoneNumbers" ];
		navigator.contacts.find(fields, onSuccess, onError, options);

		alert('Launched successfully');
		

	},

});