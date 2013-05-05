/*
 * File: app/view/drawComponent.js
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

Ext.define('Booking.view.drawComponent', {
    extend: 'Ext.draw.Component',
    alias: 'widget.drawComponent',

    config: {
        docked: 'left',
        height: '100%',
        itemId: 'myComponent',
        width: '100%'
    },

    initialize: function() {
        this.callParent();

        this.getSurface('main').add({
            type: 'circle',
            fill: '#79BB3F',
            radius: 100,
            x: 100,
            y: 100
        }).show(true);

        this.getSurface('main').add({
            type: 'rect',
            fill: '#79BB3F',
            height : 20,
            width: 100,

            x: 0,
            y: 500
        }).show(true);

        this.getSurface('main').add({
            type: 'rect',
            fill: '#79BB3F',
            height : 20,
            width: 100,
            radius: 10,
            x: 100,
            y: 100
        }).show(true);
    }

});