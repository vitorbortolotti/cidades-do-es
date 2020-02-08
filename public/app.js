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

/**
 * Hackey function to skip to the end of the game. Can be called from the console.
 */
function timeIsUp() {
    angular.element(document.querySelector('div[ng-app="app"]')).scope().ctrl.events.timeIsUp()
}