/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

	requires: [
		'Ext.MessageBox',
		'Ext.device.Camera'
	],
	models: [
		'Contact',
		'Deal',
		'UserPreferences'
	],
	stores: [
		'ContactStore',
		'MyJsonPStore',
		'MyDealsStore',
		'UserPreferences',
		'MyJsonPStore1'
	],
	views: [
		'Form',
		'Info',
		'Picture',
		'List',
		'DealPicture',
		'ListOfDeals',
		'Main',
		'DealsPanel'
	],
	controllers: [
		'Contacts'
	],
	icon: 'icon.png',
	name: 'Contact',
	startupImage: 'icon.png',

	launch: function() {

		Ext.util.Format.empty = function(value, defaultValue) {
		    return !Ext.isEmpty(value) ? value : defaultValue;
		};
		Ext.util.Format.undef = function(value, defaultValue) {
		    return Ext.isDefined(value) ? value : defaultValue;
		};



		var view = Ext.create('Contact.view.Main',{}) ;
		Ext.create('Contact.store.MyJsonPStore', {
		    autoLoad: true,
		    listeners: {
		        load: function (self, records) {
		            view.setData(records);
		        }
		    }
		});

		Ext.create('Contact.store.MyDealsStore', {
		    autoLoad: true

		});
		if (Ext.os.is('Android')) {
		    document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);  // add back button listener

		    function onBackKeyDown(eve) {
		        eve.preventDefault();
		        Ext.Msg.confirm("Exit", "",  function ( answer ) {
		            if ( answer == 'yes') {
		                navigator.app.exitApp();
		            } else {
		                //do nothing
		            }
		        });
		    }
		}


		Ext.create('Contact.view.Main', {fullscreen: true});
	}

});
