define(function(require, exports, module) { 
    'use strict';

    window.$ = require('jquery')
    window._ = require('underscore')
    var Backbone = require('backbone')
    require('bootstrap')

    

    var Router = require('router')

    var App = function(){
        var app = {}
        app.root = "/"
        
        $.ajaxSetup({
            contentType: 'application/json',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', config.user+":"+config.pwd);
            }
        })
        
        app.router = new Router()

        Backbone.history.start({pushState: false, root: app.root})
    }

    module.exports = App
})