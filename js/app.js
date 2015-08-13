define(function(require, exports, module) { 
    'use strict';
    var $ = require('jquery')
    var _ = require('underscore')
    require('backbone')
    require('bootstrap')
    

    var App = function(){
    	console.log("a")
    	console.log($)
    	console.log(_)
    }

    module.exports = App
})