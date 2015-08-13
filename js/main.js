requirejs.config({
    baseUrl: 'js',
    waitSeconds: 120,
    paths: {
        backbone: 'vendor/backbone',
        bootstrap: 'vendor/bootstrap',
        handlebars: 'vendor/handlebars-v3.0.3',
        jquery: 'vendor/jquery',
        // text: '/requirejs-text/text',
        underscore: 'vendor/underscore'
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: ['jquery']
        }
    },
});

require(["app"], function(App){
    App()
})