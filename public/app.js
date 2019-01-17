angular.module('app', ['ui.router']);

angular.module("app").config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise("/");
        // $locationProvider.html5Mode(true);
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "home.template.html?v=1.0.0",
                params: {},
                resolve: {}
            })
            .state("about", {
                url: "/sobre",
                templateUrl: "about.template.html?v=1.0.0",
                params: {},
                resolve: {}
            })
    });