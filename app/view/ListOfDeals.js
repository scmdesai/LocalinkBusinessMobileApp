/*
 * File: app/view/ListOfDeals.js
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

Ext.define('Contact.view.ListOfDeals', {
	extend: 'Ext.dataview.List',
	alias: 'widget.listofdeals',

	requires: [
		'Ext.XTemplate'
	],

	config: {
		cls: 'tpl-29v0zg8q',
		height: '100%',
		id: 'ListOfDeals',
		itemId: 'ListOfDeals',
		style: 'font-size: 10px',
		deselectOnContainerClick: false,
		mode: 'MULTI',
		itemCls: 'listofdeals',
		store: 'MyDealsStore',
		onItemDisclosure: false,
		pinHeaders: false,
		preventSelectionOnDisclose: false,
		refreshHeightOnUpdate: false,
		striped: true,
		useSimpleItems: false,
		itemTpl: [
			'<div style="font-size:20px" >{dealName}<input type="checkbox" class="checkbox_hidden" name="checkbox" style="zoom:2;float:right;" id= "chkbx" ></div>',
			'',
			'',
			'<div style="color:#0000FF;font-size:12px;font-style:italics">{dealStartDate} - {dealEndDate}</div>',
			''
		]
	}

});