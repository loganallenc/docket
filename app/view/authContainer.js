/*
 * File: app/view/authContainer.js
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

Ext.define('Booking.view.authContainer', {
    extend: 'Ext.Container',

    config: {
        itemId: 'authContainer',
        listeners: [
            {
                fn: 'onContainerPainted',
                event: 'painted'
            }
        ]
    },

    onContainerPainted: function(element, eOpts) {
        var parameters = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            parameters[key] = value;
        });

        function isEmpty(ob) {
            for(var i in ob){
                return false;
            }
            return true;
        }

        if (isEmpty(parameters)) {
            window.location.href = 'login.html';
        } else {
            Booking.app.authToken = decodeURI(parameters.auth);
            this.generateItems();
        }
    },

    generateItems: function() {
        var me = this,
            myContainer = Ext.create('Booking.view.MyContainer1'),
            mainCarousel = Ext.create('Booking.view.mainCarousel'),
            token = Booking.app.authToken,
            clientId = '464168127252.apps.googleusercontent.com',
            apiKey = 'AIzaSyAy7JAsd5JlzjTR_fkkarby9N1c3YkhY6o',
            scopes = 'https://www.googleapis.com/auth/calendar',
            final_i = 0,
            array_i = 0,
            items = [],
            child,
            obj;

        try {
            gapi.client.setApiKey(apiKey);
            gapi.auth.setToken(token);
        } catch(e) {
            window.location.reload();
        }

        function addRoom(summary, events) {

        }

        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, function(authResult) {
        if (authResult) {
            gapi.client.load('calendar', 'v3', function() {
                var request = gapi.client.calendar.calendarList.list();
                request.execute(function(outer) {
                    for (var i = 0; i < outer.items.length; i++) {
                        if (outer.items[i].id.substring(0,8) === 'bestfitm') {final_i++;}
                    }
                    for (i = 0; i < outer.items.length; i++) {
                        if (outer.items[i].id.substring(0,8) === 'bestfitm') {
                            events = me.loadData(outer.items[i].id, outer.items[i].summary, array_i, final_i, items);
                            array_i++;
                        }
                    }
                });
            });
        }
    });
    },

    loadData: function(calendarId, summary, array_i, final_i, items) {
        var me = this,
            today = new Date();

        var token = Booking.app.authToken,
            clientId = '464168127252.apps.googleusercontent.com',
            apiKey = 'AIzaSyAy7JAsd5JlzjTR_fkkarby9N1c3YkhY6o',
            scopes = 'https://www.googleapis.com/auth/calendar';

        var backgroundColors = [
        '#0d6289', //Blue
        '#d27f56', //Orange
        '#4E2B52', //Purple
        '#FF4242', //Red
        '#53ab73', //Green
        '#D9D1A9', //Beige
        '#FFF',
        '#FFF',
        '#FFF',
        '#FFF',
        '#FFF'
        ];

        var boxColors = [
        '#43aad5', //Blue
        '#F99665', //Orange
        '#436085', //Purple
        '#FF837E', //Red
        '#7DCB99', //Green
        '#B9C18A',  //Beige
        '#FFF',
        '#FFF',
        '#FFF',
        '#FFF',
        '#FFF'
        ];

        var timelineColors = [
        '#176c93', //Blue
        '#DA8359', //Orange
        '#5A325F', //Purple
        '#EC6B51', //Red
        '#53AB73', //Green
        '#A4AE6A',  //Beige
        '#FFF',
        '#FFF',
        '#FFF',
        '#FFF',
        '#FFF'
        ];

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
                        if (resp.items !== undefined) {
                            obj = new Booking.view.MyContainer1();
                            child = Ext.ComponentQuery.query('#inlineDraw1')[array_i];

                            child.roomText = summary;
                            child.backgroundColor = backgroundColors[array_i];
                            child.boxColor = boxColors[array_i];
                            child.timelineColor = boxColors[array_i];
                            child.events = resp.items;

                            console.log("child.events: " + child.events);

                            items.push(obj);
                            array_i++;
                        }
                    });
                });
            } else {
                window.location.reload();
            }
        });

        if (final_i == array_i) {
            mainCarousel.removeAll(true);
            mainCarousel.setItems(items);
            Ext.ComponentQuery.query('#authContainer')[0].destroy();
            Ext.Viewport.setActiveItem('mainCarousel');
        }
    },

    switchViews: function() {

    }

});