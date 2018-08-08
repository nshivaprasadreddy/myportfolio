myapp = angular.module('myapp', ['ngRoute']);

myapp.config(['$routeProvider','$locationProvider',

    function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.when('/', {

            templateUrl: 'views/about.html'

        }).

            when('/contact', {

                templateUrl: 'views/contact.html'

            }).

            when('/projects', {

                templateUrl: 'views/projects.html'

            }).

            otherwise({

                redirectTo: '/'

            });

    }

]);