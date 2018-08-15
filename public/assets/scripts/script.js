angular.module('app', []);

angular.module('app').controller('GameController', function ($scope) {

    let ctrl = this;

    ctrl.input = null;
    ctrl.gameState = 'welcome';
    ctrl.events = {};
    ctrl.paintedCities = [];
    ctrl.remainingTime = '05:00';

    // ctrl.events.startWelcomeLoop = function () {
    //     let citiesList = ctrl.cities.map(function (city) {
    //         return city.id
    //     });
    //     let paintedCityId = null;
    //     setInterval(function () {
    //         if (paintedCityId) {
    //             // removePaintCity(paintedCityId);
    //         }
    //         paintedCityId = citiesList[Math.floor(Math.random()*citiesList.length)];
    //         paintCity(paintedCityId);
    //     }, 1000)
    // };

    ctrl.events.startGame = function (value)  {
        ctrl.gameState = 'playing';
        let fiveMinutes = 60 * 5;
        startTimer(fiveMinutes);
    };

    ctrl.events.inputChanged = function (value)  {
        let match = findCityMatch(ctrl.input);
        if (match) {
            if (ctrl.paintedCities.indexOf(match.title) < 0) {
                ctrl.input = null;
                paintCity(match.id);
                ctrl.paintedCities.push(match.title)
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
            ctrl.gamePoints = ctrl.paintedCities.length;
        });

    }

    function findCityMatch(input) {
        let match = ctrl.cities.find(x => removerAcentos(x.title).toLowerCase() === removerAcentos(input).toLowerCase());
        if (match) {
            return match;
        } else {
            return false;
        }
    }

    function paintCity(id) {
        let $el = angular.element('#' + id);
        $el.addClass('painted')
    }

    function removePaintCity(id) {
        let $el = angular.element('#' + id);
        $el.removeClass('painted')
    }

    function removerAcentos( newStringComAcento ) {
        var string = newStringComAcento;
        var mapaAcentosHex 	= {
            a : /[\xE0-\xE6]/g,
            e : /[\xE8-\xEB]/g,
            i : /[\xEC-\xEF]/g,
            o : /[\xF2-\xF6]/g,
            u : /[\xF9-\xFC]/g,
            c : /\xE7/g,
            n : /\xF1/g
        };

        for ( var letra in mapaAcentosHex ) {
            var expressaoRegular = mapaAcentosHex[letra];
            string = string.replace( expressaoRegular, letra );
        }

        return string;
    }

    ctrl.cities = [
        {
            title:"Afonso Cláudio",
            id:"mun_3200102"
        },{
            title:"Água Doce do Norte",
            id:"mun_3200169"
        },{
            title:"Águia Branca",
            id:"mun_3200136"
        },{
            title:"Alegre",
            id:"mun_3200201"
        },{
            title:"Alfredo Chaves",
            id:"mun_3200300"
        },{
            title:"Alto Rio Novo",
            id:"mun_3200359"
        },{
            title:"Anchieta",
            id:"mun_3200409"
        },{
            title:"Apiacá",
            id:"mun_3200508"
        },{
            title:"Aracruz",
            id:"mun_3200607"
        },{
            title:"Atilio Vivacqua",
            id:"mun_3200706"
        },{
            title:"Baixo Guandu",
            id:"mun_3200805"
        },{
            title:"Barra de São Francisco",
            id:"mun_3200904"
        },{
            title:"Boa Esperança",
            id:"mun_3201001"
        },{
            title:"Bom Jesus do Norte",
            id:"mun_3201100"
        },{
            title:"Brejetuba",
            id:"mun_3201159"
        },{
            title:"Cachoeiro de Itapemirim",
            id:"mun_3201209"
        },{
            title:"Cariacica",
            id:"mun_3201308"
        },{
            title:"Castelo",
            id:"mun_3201407"
        },{
            title:"Colatina",
            id:"mun_3201506"
        },{
            title:"Conceição da Barra",
            id:"mun_3201605"
        },{
            title:"Conceição do Castelo",
            id:"mun_3201704"
        },{
            title:"Divino de São Lourenço",
            id:"mun_3201803"
        },{
            title:"Domingos Martins",
            id:"mun_3201902"
        },{
            title:"Dores do Rio Preto",
            id:"mun_3202009"
        },{
            title:"Ecoporanga",
            id:"mun_3202108"
        },{
            title:"Fundão",
            id:"mun_3202207"
        },{
            title:"Guaçuí",
            id:"mun_3202306"
        },{
            title:"Ibatiba",
            id:"mun_3202454"
        },{
            title:"Ibiraçu",
            id:"mun_3202504"
        },{
            title:"Ibitirama",
            id:"mun_3202553"
        },{
            title:"Iconha",
            id:"mun_3202603"
        },{
            title:"Irupi",
            id:"mun_3202652"
        },{
            title:"Itaguaçu",
            id:"mun_3202702"
        },{
            title:"Itapemirim",
            id:"mun_3202801"
        },{
            title:"Itarana",
            id:"mun_3202900"
        },{
            title:"Iúna",
            id:"mun_3203007"
        },{
            title:"Jaguaré",
            id:"mun_3203056"
        },{
            title:"Jerônimo Monteiro",
            id:"mun_3203106"
        },{
            title:"João Neiva",
            id:"mun_3203130"
        },{
            title:"Laranja da Terra",
            id:"mun_3203163"
        },{
            title:"Linhares",
            id:"mun_3203205"
        },{
            title:"Mantenópolis",
            id:"mun_3203304"
        },{
            title:"Marataízes",
            id:"mun_3203320"
        },{
            title:"Marechal Floriano",
            id:"mun_3203346"
        },{
            title:"Marilândia",
            id:"mun_3203353"
        },{
            title:"Mimoso do sul",
            id:"mun_3203403"
        },{
            title:"Montanha",
            id:"mun_3203502"
        },{
            title:"Mucurici",
            id:"mun_3203601"
        },{
            title:"Muniz Freire",
            id:"mun_3203700"
        },{
            title:"Muqui",
            id:"mun_3203809"
        },{
            title:"Nova Venécia",
            id:"mun_3203908"
        },{
            title:"Pancas",
            id:"mun_3204005"
        },{
            title:"Pedro Canário",
            id:"mun_3204054"
        },{
            title:"Pinheiros",
            id:"mun_3204104"
        },{
            title:"Piúma",
            id:"mun_3204203"
        },{
            title:"Ponto Belo",
            id:"mun_3204252"
        },{
            title:"Presidente Kennedy",
            id:"mun_3204302"
        },{
            title:"Rio Bananal",
            id:"mun_3204351"
        },{
            title:"Rio Novo do Sul",
            id:"mun_3204401"
        },{
            title:"Santa Leopoldina",
            id:"mun_3204500"
        },{
            title:"Santa Maria de Jetibá",
            id:"mun_3204559"
        },{
            title:"Santa Teresa",
            id:"mun_3204609"
        },{
            title:"São Domingos do Norte",
            id:"mun_3204658"
        },{
            title:"São Gabriel da Palha",
            id:"mun_3204708"
        },{
            title:"São José do Calçado",
            id:"mun_3204807"
        },{
            title:"São Mateus",
            id:"mun_3204906"
        },{
            title:"São Roque do Canaã",
            id:"mun_3204955"
        },{
            title:"Serra",
            id:"mun_3205002"
        },{
            title:"Sooretama",
            id:"mun_3205010"
        },{
            title:"Vargem Alta",
            id:"mun_3205036"
        },{
            title:"Venda Nova do Imigrante",
            id:"mun_3205069"
        },{
            title:"Viana",
            id:"mun_3205101"
        },{
            title:"Vila Pavão",
            id:"mun_3205150"
        },{
            title:"Vila Valério",
            id:"mun_3205176"
        },{
            title:"Governador Lindenberg",
            id:"mun_3202256"
        },{
            title:"Guarapari",
            id:"mun_3202405"
        },{
            title:"Vila Velha",
            id:"mun_3205200"
        },{
            title:"Vitória",
            id:"mun_3205309"
        }
    ];

});
