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
        html: '<iframe id="authFrame" src="http://loganfynne.github.io/loganfynne.com/authiframe.html" width="100%" height="100%"></iframe>',
        listeners: [
            {
                fn: 'onContainerPainted',
                event: 'painted'
            }
        ]
    },

    onContainerPainted: function(element, eOpts) {
        var frame = document.getElementById("authFrame");

        try {
            frame.contentDocument.getElementById('tokenValue').addEventListener("dataLoadedCustom", this.hasLoaded);
        } catch(e) {
            while (frame === null) {
                frame = document.getElementById("authFrame");
                frame.contentDocument.getElementById('tokenValue').addEventListener("dataLoadedCustom", this.hasLoaded);
                console.log("Catching error");
            }
        }
    },

    hasLoaded: function() {
        var frame = document.getElementById('authFrame');
        var frameContent = frame.contentDocument || frame.contentWindow.document;
        var tokenData = frameContent.getElementById('tokenValue').innerHTML;
        console.log("OAuth: " +tokenData);

        Ext.Viewport.setActiveItem('mainCarousel');
    }

});