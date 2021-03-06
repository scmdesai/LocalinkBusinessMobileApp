function _37ff470eb8fc1cd16aa565ae60bd846bde44680b(){};/*
 * File: app/view/Form.js
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

Ext.define('Contact.view.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.contactform',

    requires: [
        'Contact.view.Picture',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.field.TextArea'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'cancelButton',
                        ui: 'decline',
                        text: 'Cancel'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'saveContactButton',
                        ui: 'confirm',
                        text: 'Save'
                    }
                ]
            },
            {
                xtype: 'contactpic'
            },
            {
                xtype: 'textfield',
                itemId: 'businessName',
                margin: '10px 0 0 0',
                label: 'Business Name',
                labelAlign: 'top',
                labelWrap: true,
                required: true
            },
            {
                xtype: 'textfield',
                itemId: 'phoneNumber',
                label: 'Phone Number',
                labelAlign: 'top',
                labelWrap: true,
                required: true
            },
            {
                xtype: 'textareafield',
                label: 'Address',
                labelAlign: 'top',
                required: true
            }
        ]
    },

    getValidationErrors: function() {
        var errors = [];
                var reqFields = this.query('field[required=true]');
                var i = 0, ln = reqFields.length, field;
                for (; i < ln; i++) {
                    field = reqFields[i];
                    if (!field.getValue()) {
                        errors.push(field.getLabel() + ' must be completed.');
                    }
                }
                console.dir(errors);
                return errors;
    },

    setRecord: function(record) {

         this.callParent(arguments);
                if (record) {
                    this.child('contactpic').setData(record.data);
                    this.child('textareafield').setData(record.data);

                }

    }

});