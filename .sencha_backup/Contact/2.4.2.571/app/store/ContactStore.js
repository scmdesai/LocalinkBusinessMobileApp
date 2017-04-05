/*
 * File: app/store/ContactStore.js
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

Ext.define('Contact.store.ContactStore', {
	extend: 'Ext.data.Store',

	requires: [
		'Contact.model.Contact',
		'Ext.data.proxy.LocalStorage',
		'Ext.util.Grouper'
	],

	config: {
		autoLoad: true,
		autoSync: true,
		data: [
			{
				businessName: 'iste',
				category: 'illo',
				phoneNumber: '(599) 543-9099',
				emailAddress: '198 Hovde Trail',
				address: '304 Monica Crossing',
				city: 'Officia',
				state: 'AS',
				zipcode: 'atque',
				picture: 'ea',
				isFavorite: false
			},
			{
				businessName: 'fugit',
				category: 'et',
				phoneNumber: '(515) 687-0416',
				emailAddress: '28 Banding Drive',
				address: '263 West Point',
				city: 'Veritatis',
				state: 'FL',
				zipcode: 'repellendus',
				picture: 'recusandae',
				isFavorite: false
			},
			{
				businessName: 'nisi',
				category: 'dolorem',
				phoneNumber: '(883) 506-3306',
				emailAddress: '47 Elmside Place',
				address: '263 West Point',
				city: 'Laboriosam',
				state: 'WY',
				zipcode: 'optio',
				picture: 'et',
				isFavorite: false
			},
			{
				businessName: 'est',
				category: 'nulla',
				phoneNumber: '(827) 412-2582',
				emailAddress: '70664 Twin Pines Street',
				address: '296 Reindahl Center',
				city: 'Aspernatur',
				state: 'IA',
				zipcode: 'soluta',
				picture: 'ullam',
				isFavorite: true
			},
			{
				businessName: 'provident',
				category: 'veritatis',
				phoneNumber: '(673) 355-2351',
				emailAddress: '47 Elmside Place',
				address: '28 Banding Drive',
				city: 'Voluptate',
				state: 'AR',
				zipcode: 'eius',
				picture: 'rerum',
				isFavorite: true
			}
		],
		groupDir: 'ASC',
		groupField: 'category',
		model: 'Contact.model.Contact',
		storeId: 'ContactStore',
		proxy: {
			type: 'localstorage'
		},
		grouper: {
			groupFn: function(record) {
				return record.get('businessName')[0];

			}
		},
		sorters: {
			property: 'businessName'
		}
	}
});