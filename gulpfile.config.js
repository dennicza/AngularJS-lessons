/**
 * Created by js on 12/19/15.
 */
"use strict";

var GulpConfig = (function () {
    function GulpConfig () {
        this.vendors = {
            js: ['./bower_components/bootstrap/dist/js/bootstrap.js'],
            css: ['./bower_components/bootstrap/dist/css/bootstrap.css'],
            fonts: []
        };

        this.app = {
            js: ['./src/js/**/*.js'],
            css: ['./src/css/**/*.css'],
            views: [],
            index: ['./src/index.html']
        };
    };

    return GulpConfig;
})();

module.exports = GulpConfig;