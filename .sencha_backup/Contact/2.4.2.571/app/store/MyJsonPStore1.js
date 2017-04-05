/*
 * File: app/store/MyJsonPStore1.js
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

Ext.define('Contact.store.MyJsonPStore1', {
	extend: 'Ext.data.Store',

	requires: [
		'Contact.model.Contact',
		'Ext.util.Grouper',
		'Ext.data.proxy.JsonP',
		'Ext.data.reader.Json'
	],

	config: {
		autoLoad: true,
		groupField: 'category',
		model: 'Contact.model.Contact',
		storeId: 'MyJsonPStore1',
		grouper: {
			groupFn: function(item) {
				return record.get('category');
			},
			sortProperty: ''
		},
		sorters: {
			sorterFn: function(first, second) {

			}
		},
		proxy: {
			type: 'jsonp',
			url: 'http://services.appsonmobile.com/stores',
			reader: {
				type: 'json'
			}
		}
	}
});