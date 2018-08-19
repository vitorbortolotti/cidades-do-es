angular
    .module('app')
    .controller('esMapController', esMapController);

    esMapController.$inject = ['$scope', 'CitiesHelper'];

function esMapController($scope, CitiesHelper) {

    let ctrl = this;

    const colorClasses = {
        successfulPaint: 'successful-painted',
        hoverPaint: 'hover-painted',
    };

    ctrl.events = {};

    $scope.$watch('ctrl.paintedCities', function (newValue, oldValue) {
        paintCities(newValue, colorClasses.successfulPaint)
    }, true);

    ctrl.events.hoverEnterCity = function (cityId) {
        console.log(cityId);
        paintCity(cityId, colorClasses.hoverPaint);
        showTooltip(cityId);
    };

    ctrl.events.hoverLeaveCity = function (cityId) {
        removePaintCity(cityId, colorClasses.hoverPaint);
        removeTooltip(cityId);
        console.log(cityId);
    };

    ctrl.events.clickCity = function (cityId) {
        const url = CitiesHelper.getCityById(cityId).link;
        window.open(url,'_blank');
    };

    function paintCities(cities, variant) {
        cities.forEach(function (city) {
            paintCity(city.id, variant)
        })
    }

    function paintCity(id, variant) {
        let $el = angular.element('#' + id);
        $el.addClass(variant)
    }

    function removePaintCity(id, variant) {
        let $el = angular.element('#' + id);
        $el.removeClass(variant)
    }

    function showTooltip(id) {
        let $el = angular.element('#' + id);
        let $tooltip = angular.element('#the-tooltip');
        $tooltip.hide();
        $tooltip.html(CitiesHelper.getCityById(id).title);
        const offsetTop = $el.offset().top - 35;
        const offsetLeft = $el.offset().left - $tooltip.width()/2 + 30;
        $tooltip.css('top', offsetTop + 'px');
        $tooltip.css('left', offsetLeft + 'px');
        $tooltip.show();
    }

    function removeTooltip(id) {
        let $tooltip = angular.element('#the-tooltip');
        $tooltip.hide();
    }


}
