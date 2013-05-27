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
        style: '#authFrame {height:100%; width:100%; overflow:hidden;}',
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
            window.location.href = 'authiframe.html';
        } else {
            Booking.app.authToken = decodeURI(parameters.auth);
            console.log(Booking.app.authToken);
            this.generateItems();
        }
    },

    generateItems: function() {
        var myContainer = Ext.create('Booking.view.MyContainer1'),
            mainCarousel = Ext.create('Booking.view.mainCarousel'),
            token = Booking.app.authToken,
            clientId = '464168127252.apps.googleusercontent.com',
            apiKey = 'AIzaSyAy7JAsd5JlzjTR_fkkarby9N1c3YkhY6o',
            scopes = 'https://www.googleapis.com/auth/calendar',
            addContainer = "",
            array_i = 0,
            items = [],
            child,
            obj;

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

        gapi.client.setApiKey(apiKey);
        gapi.auth.setToken(token);

        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, function(authResult) {
        if (authResult) {
            gapi.client.load('calendar', 'v3', function() {
                var request = gapi.client.calendar.calendarList.list();
                request.execute(function(outer) {
                    for (var i = 0; i < outer.items.length; i++) {
                        if (outer.items[i].id.substring(0,16) === 'bestfitmedia.com') {
                            if (outer.items[i].summary.indexOf("Room") >= 0) {
                                console.log(outer.items[i].summary);
                                obj = new Booking.view.MyContainer1();
                                child = Ext.ComponentQuery.query('#inlineDraw1')[array_i];
                                child.calendarId = outer.items[i].id;
                                child.roomText = outer.items[i].summary;
                                child.backgroundColor = backgroundColors[array_i];
                                child.boxColor = boxColors[array_i];
                                child.timelineColor = boxColors[array_i];
                                items.push(obj);
                                array_i++;
                            }
                        }
                    }
                    mainCarousel.setItems(items);
                    Ext.ComponentQuery.query('#authContainer')[0].destroy();
                    Ext.Viewport.setActiveItem('mainCarousel');
                });
            });
        }
    });
    }

});