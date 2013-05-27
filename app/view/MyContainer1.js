/*
 * File: app/view/MyContainer1.js
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

Ext.define('Booking.view.MyContainer1', {
    extend: 'Ext.Container',
    alias: 'widget.MyContainer1',

    config: {
        itemId: 'MyContainer1',
        scrollable: {
            direction: 'horizontal',
            directionLock: true
        },
        items: [
            {
                xtype: 'draw',
                itemId: 'inlineDraw1',
                style: 'background:#FFF;',
                autoDestroy: false,
                listeners: [
                    {
                        fn: function(element, eOpts) {
                            var me = this,
                                h = Ext.getBody().getSize().height,
                                w = Ext.getBody().getSize().width,
                                surface = this.getSurface('main'),
                                backgroundColor = me.backgroundColor,
                                timelineColor = me.timelineColor,
                                calendarId = me.calendarId,
                                roomText = me.roomText,
                                boxColor = me.boxColor,
                                result = me.result,
                                today = new Date(),
                                xloc,
                                iter;

                            var token = Booking.app.authToken,
                                clientId = '464168127252.apps.googleusercontent.com',
                                apiKey = 'AIzaSyAy7JAsd5JlzjTR_fkkarby9N1c3YkhY6o',
                                scopes = 'https://www.googleapis.com/auth/calendar';

                            today.setHours(0,0,0,0);
                            today = today.toISOString();

                            gapi.client.setApiKey(apiKey);
                            gapi.auth.setToken(token);

                            gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
                            function(authResult) {
                                if (authResult) {
                                    gapi.client.load('calendar', 'v3', function() {
                                        var request = gapi.client.calendar.events.list({
                                            'calendarId': calendarId,
                                            'singleEvents': true,
                                            'orderBy': 'startTime',
                                            'timeMin': today,
                                            'maxResults': 50
                                        });

                                        request.execute(function(resp) {
                                            if (resp.items) {
                                                w = 203 * resp.items.length;
                                            }
                                            me.setSize(w,h);
                                            surface.setSize(w,h);
                                            surface.setBackground(backgroundColor);

                                            //Line across screen
                                            surface.add({
                                                type: 'rect',
                                                fill: timelineColor,
                                                height : 20,
                                                width: w,
                                                x: 0,
                                                y: 330
                                            }).show(true);

                                            //Name of room
                                            surface.add({
                                                type: 'text',
                                                text: roomText,
                                                font: '32px Arial',
                                                fill: '#FFF',
                                                x: 70,
                                                y: 50
                                            }).show(true);

                                            if (resp.items) {
                                                for (iter = 0; iter < resp.items.length; iter++) {
                                                    xloc = iter*200;

                                                    surface.add({
                                                        type: 'circle',
                                                        cx: xloc+192,
                                                        cy: 338,
                                                        r: 22,
                                                        fillStyle: '#2b8bb5'
                                                    }).show(true);

                                                    surface.add({
                                                        type: 'circle',
                                                        cx: xloc+192,
                                                        cy: 338,
                                                        r: 16,
                                                        fillStyle: boxColor
                                                    }).show(true);

                                                    if (iter % 2 === 0) {
                                                        surface.add({
                                                            type: 'rect',
                                                            fill: boxColor,
                                                            height : 140,
                                                            width: 300,
                                                            radius: 10,
                                                            x: xloc+38,
                                                            y: 130
                                                        }).show(true);

                                                        surface.add({
                                                            type: 'path',
                                                            path: 'M ' + (xloc+178) + ' ' + 270 + ' ' +
                                                            'l ' + 25 + ' ' + 0 + ' ' +
                                                            'l ' + -12 + ' ' + 10 + 'z',
                                                            fillStyle: boxColor
                                                        }).show(true);

                                                        surface.add({
                                                            type: 'text',
                                                            text: resp.items[iter].summary,
                                                            font: '20px Arial',
                                                            fill: '#FFF',
                                                            x: xloc+48,
                                                            y: 150
                                                        }).show(true);

                                                        //Time and date for top
                                                        surface.add({
                                                            type: 'text',
                                                            text: resp.items[iter].start.datetime,
                                                            font: '14px Arial',
                                                            fill: '#FFF',
                                                            x: 170,
                                                            y: 380
                                                        }).show(true);

                                                    } else {
                                                        surface.add({
                                                            type: 'rect',
                                                            fill: boxColor,
                                                            height : 140,
                                                            width: 300,
                                                            radius: 10,
                                                            x: xloc+40,
                                                            y: 410
                                                        }).show(true);

                                                        surface.add({
                                                            type: 'path',
                                                            path: 'M ' + (xloc+205) + ' ' + 410 + ' ' +
                                                            'l ' + -25 + ' ' + 0 + ' ' +
                                                            'l ' + 12 + ' ' + -10 + 'z',
                                                            fillStyle: boxColor
                                                        }).show(true);

                                                        surface.add({
                                                            type: 'text',
                                                            text: resp.items[iter].summary,
                                                            font: '20px Arial',
                                                            fill: '#FFF',
                                                            x: xloc+45,
                                                            y: 430
                                                        }).show(true);
                                                    }
                                                }
                                            }
                                        });
                                    });
                                } else {
                                    window.location.reload();
                                }
                            });
                        },
                        event: 'painted'
                    },
                    {
                        fn: function(element, eOpts) {
                            this.setSize(null, Ext.getBody().getSize().height);
                            this.getSurface('main').setSize(null, Ext.getBody().getSize().height);
                        },
                        event: 'resize'
                    }
                ]
            }
        ]
    }

});