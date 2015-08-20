requirejs.config({
    baseUrl: 'js',
    waitSeconds: 120,
    paths: {
        backbone: 'vendor/backbone',
        bootstrap: 'vendor/bootstrap',
        handlebars: 'vendor/handlebars-v3.0.3',
        jquery: 'vendor/jquery',
        text: 'vendor/require-text',
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
    }
});



window.config = {
    user: "vpotravnyy",
    pwd: "1234",
    apiUrl: "http://api.intersoglabs.com/"
}

require(["app"], function(App){
    App()
})