/*
 * File: app/view/MyFormPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Conflux.view.MyFormPanel', {
    extend: 'Ext.form.Panel',

    requires: [
        'Conflux.view.timeSlider'
    ],

    config: {
        centered: true,
        height: 387,
        itemId: 'MyFormPanel',
        width: 600,
        hideOnMaskTap: true,
        modal: true,
        items: [
            {
                xtype: 'textfield',
                itemId: 'eventTitle',
                label: 'Summary: ',
                required: true
            },
            {
                xtype: 'textareafield',
                itemId: 'eventDescription',
                label: 'Description: ',
                autoCapitalize: true
            },
            {
                xtype: 'datepickerfield',
                itemId: 'datepicker',
                label: 'Date: ',
                required: true,
                picker: {
                    itemId: 'picker'
                }
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'container',
                        width: 515,
                        items: [
                            {
                                xtype: 'timeSlider',
                                listeners: {
                                    change: function(f) {
                                        var hours = f.getValue() / 2;
                                        var minutes = (hours - parseInt(hours, 10)) * 60;
                                        var ampm = ' am';
                                        hours = parseInt(hours, 10);
                                        if (hours > 12) {
                                            hours = hours - 12;
                                            ampm = ' pm';
                                        } else if (hours == 12) {
                                            ampm = ' pm';
                                        }
                                        
                                        if (minutes === 0) {
                                            minutes = '00';
                                        }
                                        
                                        var startLabel = document.getElementsByClassName('startLabel')[0];
                                        startLabel.innerText = hours + ':' + minutes + ampm;
                                        
                                    }
                                },
                                label: 'Start:'
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        cls: 'startLabel',
                        html: '12:00 am',
                        itemId: 'startLabel',
                        padding: '20 0 0 0',
                        style: 'background:#FFF;font-size:90%;',
                        width: 80
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'container',
                        width: 515,
                        items: [
                            {
                                xtype: 'timeSlider',
                                listeners: {
                                    change: function(f) {
                                        var hours = f.getValue() / 2;
                                        var minutes = (hours - parseInt(hours, 10)) * 60;
                                        var ampm = ' am';
                                        hours = parseInt(hours, 10);
                                        if (hours > 12) {
                                            hours = hours - 12;
                                            ampm = ' pm';
                                        } else if (hours == 12) {
                                            ampm = ' pm';
                                        }
                                        
                                        if (minutes === 0) {
                                            minutes = '00';
                                        }
                                        
                                        var endLabel = document.getElementsByClassName('endLabel')[0];
                                        endLabel.innerText = hours + ':' + minutes + ampm;
                                        
                                    }
                                },
                                label: 'End: '
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        cls: 'endLabel',
                        html: '12:00 am',
                        itemId: 'endLabel',
                        padding: '20 0 0 0',
                        style: 'background:#FFF; font-size:90%;',
                        width: 80
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                layout: {
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            var summary = Ext.ComponentQuery.query('#eventTitle')[0].getValue();
                            var description = Ext.ComponentQuery.query('#eventDescription')[0].getValue();
                            var date = Ext.ComponentQuery.query('#datepicker')[0].getValue();
                            var picker = Ext.ComponentQuery.query('#picker')[0].getValue();
                            var start = document.getElementsByClassName('startLabel')[0].innerHTML;
                            var end = document.getElementsByClassName('endLabel')[0].innerHTML;

                            var resource = {
                                'summary': summary,
                                'description': description,
                                'location': 'Somewhere',
                                'start': {
                                    'dateTime': '2011-12-16T10:00:00.000-07:00'
                                },
                                'end': {
                                    'dateTime': '2011-12-16T10:25:00.000-07:00'
                                }
                            };

                            console.log(resource);
                            console.log('date: ' + date);
                            console.log('picker: ' + picker);
                            console.log('start: ' + start);
                            console.log("end: " + end);

                            /*
                            var request = gapi.client.calendar.events.insert({
                            'calendarId': 'primary',
                            'resource': resource
                            });

                            request.execute(function(resp) {
                            console.log(resp);
                            });
                            */
                        },
                        ui: 'confirm',
                        width: '120px',
                        text: 'Submit'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();

        this.down('#datepicker').setValue(new Date());
    },

    addEvent: function(calendarId, roomText) {
        var resource = {
            "summary": "Appointment",
            "location": "Somewhere",
            "start": {
                "dateTime": "2011-12-16T10:00:00.000-07:00"
            },
            "end": {
                "dateTime": "2011-12-16T10:25:00.000-07:00"
            }
        };

        var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': resource
        });

        request.execute(function(resp) {
            console.log(resp);
        });
    }

});