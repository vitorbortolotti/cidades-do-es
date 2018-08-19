angular
    .module('app')
    .factory('CitiesHelper', CitiesHelper);

    CitiesHelper.$inject = ['UtilHelper'];

function CitiesHelper(UtilHelper) {

    return {
        getCities: getCities,
        getCityById: getCityById,
        findCityMatch: findCityMatch,
    };

    function getCityById(id) {
        let match = getCities().find(city => city.id === id);
        if (match) {
            return match;
        } else {
            return false;
        }
    }

    function findCityMatch(input) {
        let match = getCities().find(city => UtilHelper.removeAccents(city.title.toLowerCase()) === UtilHelper.removeAccents(input.toLowerCase()));
        if (match) {
            return match;
        } else {
            return false;
        }
    }

    function getCities() {

        return [
            {
                title:"Afonso Cláudio",
                id:"mun_3200102",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Água Doce do Norte",
                id:"mun_3200169",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Águia Branca",
                id:"mun_3200136",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Alegre",
                id:"mun_3200201",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Alfredo Chaves",
                id:"mun_3200300",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Alto Rio Novo",
                id:"mun_3200359",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Anchieta",
                id:"mun_3200409",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Apiacá",
                id:"mun_3200508",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Aracruz",
                id:"mun_3200607",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Atilio Vivacqua",
                id:"mun_3200706",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Baixo Guandu",
                id:"mun_3200805",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Barra de São Francisco",
                id:"mun_3200904",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Boa Esperança",
                id:"mun_3201001",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Bom Jesus do Norte",
                id:"mun_3201100",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Brejetuba",
                id:"mun_3201159",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Cachoeiro de Itapemirim",
                id:"mun_3201209",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Cariacica",
                id:"mun_3201308",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Castelo",
                id:"mun_3201407",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Colatina",
                id:"mun_3201506",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Conceição da Barra",
                id:"mun_3201605",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Conceição do Castelo",
                id:"mun_3201704",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Divino de São Lourenço",
                id:"mun_3201803",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Domingos Martins",
                id:"mun_3201902",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Dores do Rio Preto",
                id:"mun_3202009",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Ecoporanga",
                id:"mun_3202108",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Fundão",
                id:"mun_3202207",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Guaçuí",
                id:"mun_3202306",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Ibatiba",
                id:"mun_3202454",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Ibiraçu",
                id:"mun_3202504",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Ibitirama",
                id:"mun_3202553",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Iconha",
                id:"mun_3202603",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Irupi",
                id:"mun_3202652",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Itaguaçu",
                id:"mun_3202702",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Itapemirim",
                id:"mun_3202801",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Itarana",
                id:"mun_3202900",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Iúna",
                id:"mun_3203007",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Jaguaré",
                id:"mun_3203056",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Jerônimo Monteiro",
                id:"mun_3203106",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"João Neiva",
                id:"mun_3203130",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Laranja da Terra",
                id:"mun_3203163",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Linhares",
                id:"mun_3203205",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Mantenópolis",
                id:"mun_3203304",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Marataízes",
                id:"mun_3203320",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Marechal Floriano",
                id:"mun_3203346",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Marilândia",
                id:"mun_3203353",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Mimoso do sul",
                id:"mun_3203403",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Montanha",
                id:"mun_3203502",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Mucurici",
                id:"mun_3203601",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Muniz Freire",
                id:"mun_3203700",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Muqui",
                id:"mun_3203809",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Nova Venécia",
                id:"mun_3203908",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Pancas",
                id:"mun_3204005",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Pedro Canário",
                id:"mun_3204054",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Pinheiros",
                id:"mun_3204104",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Piúma",
                id:"mun_3204203",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Ponto Belo",
                id:"mun_3204252",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Presidente Kennedy",
                id:"mun_3204302",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Rio Bananal",
                id:"mun_3204351",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Rio Novo do Sul",
                id:"mun_3204401",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Santa Leopoldina",
                id:"mun_3204500",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Santa Maria de Jetibá",
                id:"mun_3204559",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Santa Teresa",
                id:"mun_3204609",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"São Domingos do Norte",
                id:"mun_3204658",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"São Gabriel da Palha",
                id:"mun_3204708",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"São José do Calçado",
                id:"mun_3204807",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"São Mateus",
                id:"mun_3204906",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"São Roque do Canaã",
                id:"mun_3204955",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Serra",
                id:"mun_3205002",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Sooretama",
                id:"mun_3205010",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Vargem Alta",
                id:"mun_3205036",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Venda Nova do Imigrante",
                id:"mun_3205069",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Viana",
                id:"mun_3205101",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Vila Pavão",
                id:"mun_3205150",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Vila Valério",
                id:"mun_3205176",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Governador Lindenberg",
                id:"mun_3202256",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Guarapari",
                id:"mun_3202405",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Vila Velha",
                id:"mun_3205200",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            },{
                title:"Vitória",
                id:"mun_3205309",
                link: "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Esp%C3%ADrito_Santo"
            }
        ];

    }
}