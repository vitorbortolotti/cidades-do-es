angular
    .module('app')
    .controller('GameController', GameController);

    GameController.$inject = ['$scope', 'UtilHelper', 'CitiesHelper', '$timeout'];

function GameController($scope, UtilHelper, CitiesHelper, $timeout) {

    let ctrl = this;

    ctrl.input = null;
    ctrl.gameState = 'welcome';
    ctrl.events = {};
    ctrl.remainingTime = '05:00';
    ctrl.gameRecord = {
        cities: [],
        log: []
    };

    ctrl.events.startGame = function (value)  {
        ctrl.gameState = 'playing';
        ga('send', 'event', 'Game', 'play', 'start-game');
        let fiveMinutes = 60 * 5;
        startTimer(5);
    };

    ctrl.events.inputChanged = function (value)  {
        let match = CitiesHelper.findCityMatch(ctrl.input);
        if (match) {
            if (ctrl.gameRecord.cities.indexOf(match.title) < 0) {
                ctrl.input = null;
                ctrl.gameRecord.cities.push(match);
                ga('send', 'event', 'Game', 'match-city', match.title);
                $timeout(function () {
                    $scope.$apply();
                });
            }
        }
    };

    ctrl.events.shareResult = function () {
        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.shares',
            action_properties: JSON.stringify({
                object : {
                    'og:url': 'https://cidadesdo.es/', // your url to share
                    'og:title': 'Eu consegui lembrar ' + ctrl.gamePoints + ' cidades!',
                    'og:description': 'Você conhece os 78 municípios do Espírito Santo? O estado pode ser o menor da região sudeste, mas é rico em história e belezas. Que tal tentar acertar os nomes de cada uma das cidades?',
                    'og:image': 'https://cidadesdo.es/assets/share-squared.png'
                }
            })
        }, function(response){
            console.log(response);
        });
    };

    ctrl.events.restartGame = function () {
        ctrl.input = null;
        ctrl.gameState = 'welcome';
        ctrl.remainingTime = '05:00';
        ctrl.gameRecord = {
            cities: [],
            log: []
        };
        $timeout(function () {
            $scope.$apply();
        });
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
            ga('send', 'event', 'Game', 'play', 'finish-game', ctrl.gamePoints);
        });
        const cityIds = ctrl.gameRecord.cities.map((city) => city.id);
    }

}