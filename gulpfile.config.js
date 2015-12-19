/**
 * Created by js on 12/19/15.
 */
"use strict";

var GulpConfig = (function () {
    function GulpConfig () {
        this.vendors = {
            js: [],
            css: [],
            fonts: []
        };

        this.app = {
            js: [],
            less: [],
            views: [],
            index: []
        };
    };

    return GulpConfig;
})();

module.exports = GulpConfig;