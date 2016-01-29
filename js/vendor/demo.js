/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
    'use strict';


    // Initialize the Gallery as video carousel:
    var myGal = blueimp.Gallery([
        {
            title: 'LES TWINS - An Industry Ahead',
            type: 'text/html',
            youtube: 'zi4CIXpx7Bg'
        },
        {
            title: 'LES TWINS - An Industry Ahead',
            type: 'text/html',
            youtube: 'zi4CIXpx7Bg'
        },
        {
            title: 'LES TWINS - An Industry Ahead',
            type: 'text/html',
            youtube: 'zi4CIXpx7Bg'
        },
        {
            title: 'LES TWINS - An Industry Ahead',
            type: 'text/html',
            youtube: 'zi4CIXpx7Bg'
        },
        {
            title: 'LES TWINS - An Industry Ahead',
            type: 'text/html',
            youtube: 'zi4CIXpx7Bg'
        }
    ], {
        container: '#blueimp-video-carousel',
        carousel: true
    });
    $('#blueimpPrev').on('click', function (e) {
        e.preventDefault();
        myGal.prev();
    })
    $('#blueimpNext').on('click', function (e) {
        e.preventDefault();
        myGal.next();
    })

});
