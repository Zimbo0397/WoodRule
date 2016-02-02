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
/*
[
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
    ]
*/

$(function () {
    'use strict';

    var currentVideo = 0,
        $desc = $('.vodeo-section .desc-holder');

    function prevContent () {
        if (currentVideo) {
            currentVideo--;
            $desc.html(videos[currentVideo].description);
        }
    }

    function nextContent () {
        if (currentVideo < videos.length - 1) {
            currentVideo++;
            $desc.html(videos[currentVideo].description);
        }
    }


    // Initialize the Gallery as video carousel:
    var myGal = blueimp.Gallery(videos, {
        container: '#blueimp-video-carousel',
        carousel: true,
        startSlideshow: false
    });
    $('#blueimpPrev').on('click', function (e) {
        e.preventDefault();
        if (currentVideo) {
            myGal.prev();
        }
        prevContent();
    })
    $('#blueimpNext').on('click', function (e) {
        e.preventDefault();
        if (currentVideo < videos.length - 1) {
            myGal.next();
        }
        nextContent();
    })

});
