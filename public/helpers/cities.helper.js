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
                link: "https://pt.wikipedia.org/wiki/Afonso_Cl%C3%A1udio"
            },{
                title:"Água Doce do Norte",
                id:"mun_3200169",
                link: "https://pt.wikipedia.org/wiki/%C3%81gua_Doce_do_Norte"
            },{
                title:"Águia Branca",
                id:"mun_3200136",
                link: "https://pt.wikipedia.org/wiki/%C3%81guia_Branca"
            },{
                title:"Alegre",
                id:"mun_3200201",
                link: "https://pt.wikipedia.org/wiki/Alegre_(Esp%C3%ADrito_Santo)"
            },{
                title:"Alfredo Chaves",
                id:"mun_3200300",
                link: "https://pt.wikipedia.org/wiki/Alfredo_Chaves_(Esp%C3%ADrito_Santo)"
            },{
                title:"Alto Rio Novo",
                id:"mun_3200359",
                link: "https://pt.wikipedia.org/wiki/Alto_Rio_Novo"
            },{
                title:"Anchieta",
                id:"mun_3200409",
                link: "https://pt.wikipedia.org/wiki/Anchieta_(Esp%C3%ADrito_Santo)"
            },{
                title:"Apiacá",
                id:"mun_3200508",
                link: "https://pt.wikipedia.org/wiki/Apiac%C3%A1"
            },{
                title:"Aracruz",
                id:"mun_3200607",
                link: "https://pt.wikipedia.org/wiki/Aracruz"
            },{
                title:"Atilio Vivacqua",
                id:"mun_3200706",
                link: "https://pt.wikipedia.org/wiki/At%C3%ADlio_Viv%C3%A1cqua_(Esp%C3%ADrito_Santo)"
            },{
                title:"Baixo Guandu",
                id:"mun_3200805",
                link: "https://pt.wikipedia.org/wiki/Baixo_Guandu"
            },{
                title:"Barra de São Francisco",
                id:"mun_3200904",
                link: "https://pt.wikipedia.org/wiki/Barra_de_S%C3%A3o_Francisco"
            },{
                title:"Boa Esperança",
                id:"mun_3201001",
                link: "https://pt.wikipedia.org/wiki/Boa_Esperan%C3%A7a_(Esp%C3%ADrito_Santo)"
            },{
                title:"Bom Jesus do Norte",
                id:"mun_3201100",
                link: "https://pt.wikipedia.org/wiki/Bom_Jesus_do_Norte"
            },{
                title:"Brejetuba",
                id:"mun_3201159",
                link: "https://pt.wikipedia.org/wiki/Brejetuba"
            },{
                title:"Cachoeiro de Itapemirim",
                id:"mun_3201209",
                link: "https://pt.wikipedia.org/wiki/Cachoeiro_de_Itapemirim"
            },{
                title:"Cariacica",
                id:"mun_3201308",
                link: "https://pt.wikipedia.org/wiki/Cariacica"
            },{
                title:"Castelo",
                id:"mun_3201407",
                link: "https://pt.wikipedia.org/wiki/Castelo_(Esp%C3%ADrito_Santo)"
            },{
                title:"Colatina",
                id:"mun_3201506",
                link: "https://pt.wikipedia.org/wiki/Colatina"
            },{
                title:"Conceição da Barra",
                id:"mun_3201605",
                link: "https://pt.wikipedia.org/wiki/Concei%C3%A7%C3%A3o_da_Barra"
            },{
                title:"Conceição do Castelo",
                id:"mun_3201704",
                link: "https://pt.wikipedia.org/wiki/Concei%C3%A7%C3%A3o_do_Castelo"
            },{
                title:"Divino de São Lourenço",
                id:"mun_3201803",
                link: "https://pt.wikipedia.org/wiki/Divino_de_S%C3%A3o_Louren%C3%A7o"
            },{
                title:"Domingos Martins",
                id:"mun_3201902",
                link: "https://pt.wikipedia.org/wiki/Domingos_Martins_(Esp%C3%ADrito_Santo)"
            },{
                title:"Dores do Rio Preto",
                id:"mun_3202009",
                link: "https://pt.wikipedia.org/wiki/Dores_do_Rio_Preto"
            },{
                title:"Ecoporanga",
                id:"mun_3202108",
                link: "https://pt.wikipedia.org/wiki/Ecoporanga"
            },{
                title:"Fundão",
                id:"mun_3202207",
                link: "https://pt.wikipedia.org/wiki/Fund%C3%A3o_(Esp%C3%ADrito_Santo)"
            },{
                title:"Governador Lindenberg",
                id:"mun_3202256",
                link: "https://pt.wikipedia.org/wiki/Governador_Lindenberg"
            },{
                title:"Guaçuí",
                id:"mun_3202306",
                link: "https://pt.wikipedia.org/wiki/Gua%C3%A7u%C3%AD"
            },{
                title:"Guarapari",
                id:"mun_3202405",
                link: "https://pt.wikipedia.org/wiki/Guarapari"
            },{
                title:"Ibatiba",
                id:"mun_3202454",
                link: "https://pt.wikipedia.org/wiki/Ibatiba"
            },{
                title:"Ibiraçu",
                id:"mun_3202504",
                link: "https://pt.wikipedia.org/wiki/Ibira%C3%A7u"
            },{
                title:"Ibitirama",
                id:"mun_3202553",
                link: "https://pt.wikipedia.org/wiki/Ibitirama"
            },{
                title:"Iconha",
                id:"mun_3202603",
                link: "https://pt.wikipedia.org/wiki/Iconha"
            },{
                title:"Irupi",
                id:"mun_3202652",
                link: "https://pt.wikipedia.org/wiki/Irupi"
            },{
                title:"Itaguaçu",
                id:"mun_3202702",
                link: "https://pt.wikipedia.org/wiki/Itagua%C3%A7u"
            },{
                title:"Itapemirim",
                id:"mun_3202801",
                link: "https://pt.wikipedia.org/wiki/Itapemirim"
            },{
                title:"Itarana",
                id:"mun_3202900",
                link: "https://pt.wikipedia.org/wiki/Itarana"
            },{
                title:"Iúna",
                id:"mun_3203007",
                link: "https://pt.wikipedia.org/wiki/I%C3%BAna"
            },{
                title:"Jaguaré",
                id:"mun_3203056",
                link: "https://pt.wikipedia.org/wiki/Jaguar%C3%A9"
            },{
                title:"Jerônimo Monteiro",
                id:"mun_3203106",
                link: "https://pt.wikipedia.org/wiki/Jer%C3%B4nimo_Monteiro"
            },{
                title:"João Neiva",
                id:"mun_3203130",
                link: "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Neiva"
            },{
                title:"Laranja da Terra",
                id:"mun_3203163",
                link: "https://pt.wikipedia.org/wiki/Laranja_da_Terra"
            },{
                title:"Linhares",
                id:"mun_3203205",
                link: "https://pt.wikipedia.org/wiki/Linhares_(Esp%C3%ADrito_Santo)"
            },{
                title:"Mantenópolis",
                id:"mun_3203304",
                link: "https://pt.wikipedia.org/wiki/Manten%C3%B3polis"
            },{
                title:"Marataízes",
                id:"mun_3203320",
                link: "https://pt.wikipedia.org/wiki/Marata%C3%ADzes"
            },{
                title:"Marechal Floriano",
                id:"mun_3203346",
                link: "https://pt.wikipedia.org/wiki/Marechal_Floriano"
            },{
                title:"Marilândia",
                id:"mun_3203353",
                link: "https://pt.wikipedia.org/wiki/Maril%C3%A2ndia_(Esp%C3%ADrito_Santo)"
            },{
                title:"Mimoso do sul",
                id:"mun_3203403",
                link: "https://pt.wikipedia.org/wiki/Mimoso_do_Sul"
            },{
                title:"Montanha",
                id:"mun_3203502",
                link: "https://pt.wikipedia.org/wiki/Montanha_(Esp%C3%ADrito_Santo)"
            },{
                title:"Mucurici",
                id:"mun_3203601",
                link: "https://pt.wikipedia.org/wiki/Mucurici"
            },{
                title:"Muniz Freire",
                id:"mun_3203700",
                link: "https://pt.wikipedia.org/wiki/Muniz_Freire"
            },{
                title:"Muqui",
                id:"mun_3203809",
                link: "https://pt.wikipedia.org/wiki/Muqui"
            },{
                title:"Nova Venécia",
                id:"mun_3203908",
                link: "https://pt.wikipedia.org/wiki/Nova_Ven%C3%A9cia"
            },{
                title:"Pancas",
                id:"mun_3204005",
                link: "https://pt.wikipedia.org/wiki/Pancas"
            },{
                title:"Pedro Canário",
                id:"mun_3204054",
                link: "https://pt.wikipedia.org/wiki/Pedro_Can%C3%A1rio"
            },{
                title:"Pinheiros",
                id:"mun_3204104",
                link: "https://pt.wikipedia.org/wiki/Pinheiros_(Esp%C3%ADrito_Santo)"
            },{
                title:"Piúma",
                id:"mun_3204203",
                link: "https://pt.wikipedia.org/wiki/Pi%C3%BAma"
            },{
                title:"Ponto Belo",
                id:"mun_3204252",
                link: "https://pt.wikipedia.org/wiki/Ponto_Belo"
            },{
                title:"Presidente Kennedy",
                id:"mun_3204302",
                link: "https://pt.wikipedia.org/wiki/Presidente_Kennedy_(Esp%C3%ADrito_Santo)"
            },{
                title:"Rio Bananal",
                id:"mun_3204351",
                link: "https://pt.wikipedia.org/wiki/Rio_Bananal"
            },{
                title:"Rio Novo do Sul",
                id:"mun_3204401",
                link: "https://pt.wikipedia.org/wiki/Rio_Novo_do_Sul"
            },{
                title:"Santa Leopoldina",
                id:"mun_3204500",
                link: "https://pt.wikipedia.org/wiki/Santa_Leopoldina"
            },{
                title:"Santa Maria de Jetibá",
                id:"mun_3204559",
                link: "https://pt.wikipedia.org/wiki/Santa_Maria_de_Jetib%C3%A1"
            },{
                title:"Santa Teresa",
                id:"mun_3204609",
                link: "https://pt.wikipedia.org/wiki/Santa_Teresa_(Esp%C3%ADrito_Santo)"
            },{
                title:"São Domingos do Norte",
                id:"mun_3204658",
                link: "https://pt.wikipedia.org/wiki/S%C3%A3o_Domingos_do_Norte"
            },{
                title:"São Gabriel da Palha",
                id:"mun_3204708",
                link: "https://pt.wikipedia.org/wiki/S%C3%A3o_Gabriel_da_Palha"
            },{
                title:"São José do Calçado",
                id:"mun_3204807",
                link: "https://pt.wikipedia.org/wiki/S%C3%A3o_Jos%C3%A9_do_Cal%C3%A7ado"
            },{
                title:"São Mateus",
                id:"mun_3204906",
                link: "https://pt.wikipedia.org/wiki/S%C3%A3o_Mateus_(Esp%C3%ADrito_Santo)"
            },{
                title:"São Roque do Canaã",
                id:"mun_3204955",
                link: "https://pt.wikipedia.org/wiki/S%C3%A3o_Roque_do_Cana%C3%A3"
            },{
                title:"Serra",
                id:"mun_3205002",
                link: "https://pt.wikipedia.org/wiki/Serra_(Esp%C3%ADrito_Santo)"
            },{
                title:"Sooretama",
                id:"mun_3205010",
                link: "https://pt.wikipedia.org/wiki/Sooretama"
            },{
                title:"Vargem Alta",
                id:"mun_3205036",
                link: "https://pt.wikipedia.org/wiki/Vargem_Alta"
            },{
                title:"Venda Nova do Imigrante",
                id:"mun_3205069",
                link: "https://pt.wikipedia.org/wiki/Venda_Nova_do_Imigrante"
            },{
                title:"Viana",
                id:"mun_3205101",
                link: "https://pt.wikipedia.org/wiki/Viana_(Esp%C3%ADrito_Santo)"
            },{
                title:"Vila Pavão",
                id:"mun_3205150",
                link: "https://pt.wikipedia.org/wiki/Vila_Pav%C3%A3o"
            },{
                title:"Vila Valério",
                id:"mun_3205176",
                link: "https://pt.wikipedia.org/wiki/Vila_Val%C3%A9rio"
            },{
                title:"Vila Velha",
                id:"mun_3205200",
                link: "https://pt.wikipedia.org/wiki/Vila_Velha"
            },{
                title:"Vitória",
                id:"mun_3205309",
                link: "https://pt.wikipedia.org/wiki/Vit%C3%B3ria_(Esp%C3%ADrito_Santo)"
            }
        ];

    }
}