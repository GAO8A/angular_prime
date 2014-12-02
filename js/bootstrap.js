

(function() {

    define([
        'angular',
        'controllers/AppController',
        'widgets/search/SearchBootstrap'
    ], function(angular, AppController, SearchBootstrap) {

        function init() { /// on intitilization, run the module app and bootstrap ui
            var App = angular.module('app', ['ui.bootstrap']);
            AppController.start(App); 
            // SearchBootstrap.start(App);
            // need to bootstrap angular since we wait for dojo/DOM to load
            angular.bootstrap(document.body, ['app']);
            return App;
        }

        return { start: init };

    });

}).call(this);