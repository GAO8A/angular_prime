
(function() {

    var pathRX = new RegExp(/\/[^\/]+$/), locationPath = location.pathname.replace(pathRX, '');
 // Calls the contructor function RegExp as it provides runtime compilation of the regular expression. 
 // Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.
    define('angular', function() {
        if (angular) { return angular; }
        return {};
    });

    require({
        async: true,
        aliases: [['text', 'dojo/text']],
        packages: [{
            name: 'controllers',
            location: locationPath + 'js/controllers'
        }, {
            name: 'helpers',
            location: locationPath + 'js/helpers'
        }, {
            name: 'widgets',
            location: locationPath + 'js/widgets'
        }, {
            name: 'js',
            location: locationPath + 'js'
        }
        ]
    });

    require([
        'dojo/ready',
        'js/bootstrap'
    ], function(ready, bootstrap) {
        ready(function () {
            console.info('start the bootstrapper');
            bootstrap.start();
        });
    });

}).call(this); 
// call(this) is a way to make the anonymous function act as it would be a member function of 