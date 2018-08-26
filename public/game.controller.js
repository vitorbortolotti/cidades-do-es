angular
    .module('app')
    .controller('GameController', GameController);

    GameController.$inject = ['$scope', 'UtilHelper', 'CitiesHelper', '$timeout', '$firebaseArray'];

function GameController($scope, UtilHelper, CitiesHelper, $timeout, $firebaseArray) {

    let ctrl = this;

    ctrl.input = null;
    ctrl.gameState = 'welcome';
    ctrl.events = {};
    ctrl.remainingTime = '05:00';
    ctrl.gameRecord = {
        cities: [],
        log: []
    };
    ctrl.models = {
        gameRuns: $firebaseArray(firebase.database().ref('/gameRuns')),
    };

    ctrl.events.startGame = function (value)  {
        ctrl.gameState = 'playing';
        let fiveMinutes = 60 * 5;
        startTimer(5);
    };

    ctrl.events.inputChanged = function (value)  {
        let match = CitiesHelper.findCityMatch(ctrl.input);
        if (match) {
            if (ctrl.gameRecord.cities.indexOf(match.title) < 0) {
                ctrl.input = null;
                ctrl.gameRecord.cities.push(match);
                $timeout(function () {
                    $scope.$apply();
                });
            }
        }
    };

    function startTimer(duration) {
        let timer = duration, minutes, seconds;
        let counter = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            $scope.$apply(function(){
                ctrl.remainingTime = minutes + ":" + seconds;
            });

            if (--timer < 0) {
                timeIsUp();
                clearInterval(counter);
            }
        }, 1000);
    }

    function timeIsUp() {
        console.log('time is up');
        $scope.$apply(function(){
            ctrl.gameState = 'result';
            ctrl.gamePoints = ctrl.gameRecord.cities.length;
        });
        const cityIds = ctrl.gameRecord.cities.map((city) => city.id);
        ctrl.models.gameRuns.$add({ cities: cityIds }).then(() => {
            console.log('Game data saved');
        });
    }

}