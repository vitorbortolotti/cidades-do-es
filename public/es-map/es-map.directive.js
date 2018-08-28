angular
    .module('app')
    .directive('esMap', esMap);

function esMap() {
    return {
        restrict: 'E',
        controller: 'esMapController',
        controllerAs: 'ctrl',
        bindToController: true,
        templateUrl: 'es-map/es-map.template.html',
        transclude: true,
        scope: {
            revealEnabled: '=',
            paintedCities: '='
        },
    };
}