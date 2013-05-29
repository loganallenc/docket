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
                events: [
                    
                ],
                itemId: 'inlineDraw1',
                autoDestroy: false,
                listeners: [
                    {
                        fn: function(element, eOpts) {
                            var me = this,
                                backgroundColor = me.backgroundColor,
                                timelineColor = me.timelineColor,
                                roomText = me.roomText,
                                boxColor = me.boxColor,
                                events = me.events;

                            var h = Ext.getBody().getSize().height,
                                surface = this.getSurface('main'),
                                today = Date.now(),
                                mainCarousel,
                                description,
                                dateTime,
                                summary,
                                yloc = h/10,
                                xloc,
                                iter;

                            try {
                                w = 203 * events.length;
                            } catch(e) {
                                mainCarousel = Ext.ComponentQuery.query('#mainCarousel')[0];
                                mainCarousel.remove(me, true);
                            }

                            console.log("Painted! Width: " + w + " Height: " + h);

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
                                y: yloc+330
                            }).show(true);

                            //Name of room
                            surface.add({
                                type: 'text',
                                text: roomText,
                                font: "42px Arial",
                                fill: '#FFF',
                                x: 70,
                                y: 70
                            }).show(true);

                            for (iter = 0; iter < events.length; iter++) {
                                xloc = iter*200;
                                summary = events[iter].summary;
                                if (summary.length > 26) {
                                    summary = summary.substring(0,24) + '...';
                                }

                                description = events[iter].description;
                                try {
                                    if (description.length > 35) {
                                        if (description.length > 70) {
                                            description = description.substring(0,35) + '\n' + description.substring(35,70) + '...';
                                        } else {
                                            description = description.substring(0,35) + '\n' + description.substring(35);
                                        }
                                    }
                                } catch(e) {
                                    description = false;
                                }

                                dateTime = events[iter].start.dateTime;
                                dateTime = Date.parse(dateTime);
                                dateTime = new Date(dateTime);
                                console.log(dateTime.getDate());
                                var date = dateTime.getDate();
                                var month = dateTime.getMonth();
                                var tdate = today.getDate();
                                var tmonth = today.getMonth();
                                if ((date == tdate()) && (month == tmonth())) {
                                    dateTime = dateTime.toTimeString();
                                } else if (month == tmonth()) {
                                    dateTime = dateTime.toDateString().substring(0,10) + ' ' + dateTime.toTimeString();
                                } else {
                                    dateTime = dateTime.toDateString().substring(0,10);
                                }

                                //Larger Point on timeline
                                surface.add({
                                    type: 'circle',
                                    cx: xloc+192,
                                    cy: yloc+338,
                                    r: 22,
                                    fillStyle: '#2b8bb5'
                                }).show(true);

                                surface.add({
                                    type: 'circle',
                                    cx: xloc+192,
                                    cy: yloc+338,
                                    r: 16,
                                    fillStyle: boxColor
                                }).show(true);

                                if (iter % 2 === 0) {
                                    surface.add({
                                        type: 'rect',
                                        fill: boxColor,
                                        height: 160,
                                        width: 300,
                                        radius: 10,
                                        x: xloc+38,
                                        y: yloc+110
                                    }).show(true);

                                    surface.add({
                                        type: 'path',
                                        path: 'M ' + (xloc+178) + ' ' + (yloc+270) + ' ' +
                                        'l ' + 25 + ' ' + 0 + ' ' +
                                        'l ' + -12 + ' ' + 10 + 'z',
                                        fillStyle: boxColor
                                    }).show(true);

                                    surface.add({
                                        type: 'text',
                                        text: summary,
                                        font: '22px Arial',
                                        width: 290,
                                        height: 130,
                                        fill: '#FFF',
                                        x: xloc+48,
                                        y: yloc+150
                                    }).show(true);

                                    if (description !== false) {
                                        surface.add({
                                            type: 'text',
                                            text: description,
                                            font: '16px Times New Roman',
                                            width: 280,
                                            height: 100,
                                            fill: '#FFF',
                                            x: xloc+48,
                                            y: yloc+190
                                        }).show(true);
                                    }

                                    //Time and date for top
                                    surface.add({
                                        type: 'text',
                                        text: dateTime,
                                        font: '14px Arial',
                                        fill: '#FFF',
                                        x: xloc+170,
                                        y: yloc+380
                                    }).show(true);

                                } else {

                                    surface.add({
                                        type: 'rect',
                                        fill: boxColor,
                                        height : 160,
                                        width: 300,
                                        radius: 10,
                                        x: xloc+40,
                                        y: yloc+410
                                    }).show(true);

                                    surface.add({
                                        type: 'path',
                                        path: 'M ' + (xloc+205) + ' ' + (yloc+410) + ' ' +
                                        'l ' + -25 + ' ' + 0 + ' ' +
                                        'l ' + 12 + ' ' + -10 + 'z',
                                        fillStyle: boxColor
                                    }).show(true);

                                    surface.add({
                                        type: 'text',
                                        text: summary,
                                        width: 290,
                                        height: 130,
                                        font: '22px Arial',
                                        fill: '#FFF',
                                        x: xloc+45,
                                        y: yloc+430
                                    }).show(true);

                                    if (description !== false) {
                                        surface.add({
                                            type: 'text',
                                            text: description,
                                            font: '16px Times New Roman',
                                            width: 280,
                                            height: 100,
                                            fill: '#FFF',
                                            x: xloc+45,
                                            y: yloc+420
                                        }).show(true);
                                    }

                                    //Time and date for bottom
                                    surface.add({
                                        type: 'text',
                                        text: dateTime,
                                        font: '14px Arial',
                                        fill: '#FFF',
                                        x: xloc+170,
                                        y: yloc+340
                                    }).show(true);
                                }
                            }
                        },
                        single: true,
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