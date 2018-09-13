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
        paintCities(newValue, colorClasses.successfulPaint);
        if ( newValue && newValue.length === 0 ) {
            removeAllPaintedCities();
        }
    }, true);

    ctrl.events.hoverEnterCity = function (cityId) {
        if (ctrl.revealEnabled) {
            paintCity(cityId, colorClasses.hoverPaint);
            showTooltip(cityId);
        }
    };

    ctrl.events.hoverLeaveCity = function (cityId) {
        if (ctrl.revealEnabled) {
            removePaintCity(cityId, colorClasses.hoverPaint);
            removeTooltip(cityId);
        }
    };

    ctrl.events.clickCity = function (cityId) {
        if (ctrl.revealEnabled) {
            const city = CitiesHelper.getCityById(cityId);
            ga('send', 'event', 'Game', 'click-city', city.title);
            window.open(city.link,'_blank');
        }
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
    
    function removeAllPaintedCities() {
        let cities = CitiesHelper.getCities();
        cities.forEach(function (city) {
            let $el = angular.element('#' + city.id);
            $el.removeClass(colorClasses.successfulPaint)
        });
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
