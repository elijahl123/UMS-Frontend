import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /**
   * The `Time` scalar type represents a Time value as
   * specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Time: any;
  /**
   * Leverages the internal Python implmeentation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: any;
};

/** An enumeration. */
export enum AccountTimezone {
  /** Africa/Abidjan */
  AfricaAbidjan = 'AFRICA_ABIDJAN',
  /** Africa/Accra */
  AfricaAccra = 'AFRICA_ACCRA',
  /** Africa/Addis Ababa */
  AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
  /** Africa/Algiers */
  AfricaAlgiers = 'AFRICA_ALGIERS',
  /** Africa/Asmara */
  AfricaAsmara = 'AFRICA_ASMARA',
  /** Africa/Asmera */
  AfricaAsmera = 'AFRICA_ASMERA',
  /** Africa/Bamako */
  AfricaBamako = 'AFRICA_BAMAKO',
  /** Africa/Bangui */
  AfricaBangui = 'AFRICA_BANGUI',
  /** Africa/Banjul */
  AfricaBanjul = 'AFRICA_BANJUL',
  /** Africa/Bissau */
  AfricaBissau = 'AFRICA_BISSAU',
  /** Africa/Blantyre */
  AfricaBlantyre = 'AFRICA_BLANTYRE',
  /** Africa/Brazzaville */
  AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
  /** Africa/Bujumbura */
  AfricaBujumbura = 'AFRICA_BUJUMBURA',
  /** Africa/Cairo */
  AfricaCairo = 'AFRICA_CAIRO',
  /** Africa/Casablanca */
  AfricaCasablanca = 'AFRICA_CASABLANCA',
  /** Africa/Ceuta */
  AfricaCeuta = 'AFRICA_CEUTA',
  /** Africa/Conakry */
  AfricaConakry = 'AFRICA_CONAKRY',
  /** Africa/Dakar */
  AfricaDakar = 'AFRICA_DAKAR',
  /** Africa/Dar es Salaam */
  AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
  /** Africa/Djibouti */
  AfricaDjibouti = 'AFRICA_DJIBOUTI',
  /** Africa/Douala */
  AfricaDouala = 'AFRICA_DOUALA',
  /** Africa/El Aaiun */
  AfricaElAaiun = 'AFRICA_EL_AAIUN',
  /** Africa/Freetown */
  AfricaFreetown = 'AFRICA_FREETOWN',
  /** Africa/Gaborone */
  AfricaGaborone = 'AFRICA_GABORONE',
  /** Africa/Harare */
  AfricaHarare = 'AFRICA_HARARE',
  /** Africa/Johannesburg */
  AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
  /** Africa/Juba */
  AfricaJuba = 'AFRICA_JUBA',
  /** Africa/Kampala */
  AfricaKampala = 'AFRICA_KAMPALA',
  /** Africa/Khartoum */
  AfricaKhartoum = 'AFRICA_KHARTOUM',
  /** Africa/Kigali */
  AfricaKigali = 'AFRICA_KIGALI',
  /** Africa/Kinshasa */
  AfricaKinshasa = 'AFRICA_KINSHASA',
  /** Africa/Lagos */
  AfricaLagos = 'AFRICA_LAGOS',
  /** Africa/Libreville */
  AfricaLibreville = 'AFRICA_LIBREVILLE',
  /** Africa/Lome */
  AfricaLome = 'AFRICA_LOME',
  /** Africa/Luanda */
  AfricaLuanda = 'AFRICA_LUANDA',
  /** Africa/Lubumbashi */
  AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
  /** Africa/Lusaka */
  AfricaLusaka = 'AFRICA_LUSAKA',
  /** Africa/Malabo */
  AfricaMalabo = 'AFRICA_MALABO',
  /** Africa/Maputo */
  AfricaMaputo = 'AFRICA_MAPUTO',
  /** Africa/Maseru */
  AfricaMaseru = 'AFRICA_MASERU',
  /** Africa/Mbabane */
  AfricaMbabane = 'AFRICA_MBABANE',
  /** Africa/Mogadishu */
  AfricaMogadishu = 'AFRICA_MOGADISHU',
  /** Africa/Monrovia */
  AfricaMonrovia = 'AFRICA_MONROVIA',
  /** Africa/Nairobi */
  AfricaNairobi = 'AFRICA_NAIROBI',
  /** Africa/Ndjamena */
  AfricaNdjamena = 'AFRICA_NDJAMENA',
  /** Africa/Niamey */
  AfricaNiamey = 'AFRICA_NIAMEY',
  /** Africa/Nouakchott */
  AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
  /** Africa/Ouagadougou */
  AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
  /** Africa/Porto-Novo */
  AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
  /** Africa/Sao Tome */
  AfricaSaoTome = 'AFRICA_SAO_TOME',
  /** Africa/Timbuktu */
  AfricaTimbuktu = 'AFRICA_TIMBUKTU',
  /** Africa/Tripoli */
  AfricaTripoli = 'AFRICA_TRIPOLI',
  /** Africa/Tunis */
  AfricaTunis = 'AFRICA_TUNIS',
  /** Africa/Windhoek */
  AfricaWindhoek = 'AFRICA_WINDHOEK',
  /** America/Adak */
  AmericaAdak = 'AMERICA_ADAK',
  /** America/Anchorage */
  AmericaAnchorage = 'AMERICA_ANCHORAGE',
  /** America/Anguilla */
  AmericaAnguilla = 'AMERICA_ANGUILLA',
  /** America/Antigua */
  AmericaAntigua = 'AMERICA_ANTIGUA',
  /** America/Araguaina */
  AmericaAraguaina = 'AMERICA_ARAGUAINA',
  /** America/Argentina/Buenos Aires */
  AmericaArgentinaBuenosAires = 'AMERICA_ARGENTINA_BUENOS_AIRES',
  /** America/Argentina/Catamarca */
  AmericaArgentinaCatamarca = 'AMERICA_ARGENTINA_CATAMARCA',
  /** America/Argentina/ComodRivadavia */
  AmericaArgentinaComodrivadavia = 'AMERICA_ARGENTINA_COMODRIVADAVIA',
  /** America/Argentina/Cordoba */
  AmericaArgentinaCordoba = 'AMERICA_ARGENTINA_CORDOBA',
  /** America/Argentina/Jujuy */
  AmericaArgentinaJujuy = 'AMERICA_ARGENTINA_JUJUY',
  /** America/Argentina/La Rioja */
  AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
  /** America/Argentina/Mendoza */
  AmericaArgentinaMendoza = 'AMERICA_ARGENTINA_MENDOZA',
  /** America/Argentina/Rio Gallegos */
  AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
  /** America/Argentina/Salta */
  AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
  /** America/Argentina/San Juan */
  AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
  /** America/Argentina/San Luis */
  AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
  /** America/Argentina/Tucuman */
  AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
  /** America/Argentina/Ushuaia */
  AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
  /** America/Aruba */
  AmericaAruba = 'AMERICA_ARUBA',
  /** America/Asuncion */
  AmericaAsuncion = 'AMERICA_ASUNCION',
  /** America/Atikokan */
  AmericaAtikokan = 'AMERICA_ATIKOKAN',
  /** America/Atka */
  AmericaAtka = 'AMERICA_ATKA',
  /** America/Bahia */
  AmericaBahia = 'AMERICA_BAHIA',
  /** America/Bahia Banderas */
  AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
  /** America/Barbados */
  AmericaBarbados = 'AMERICA_BARBADOS',
  /** America/Belem */
  AmericaBelem = 'AMERICA_BELEM',
  /** America/Belize */
  AmericaBelize = 'AMERICA_BELIZE',
  /** America/Blanc-Sablon */
  AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
  /** America/Boa Vista */
  AmericaBoaVista = 'AMERICA_BOA_VISTA',
  /** America/Bogota */
  AmericaBogota = 'AMERICA_BOGOTA',
  /** America/Boise */
  AmericaBoise = 'AMERICA_BOISE',
  /** America/Buenos Aires */
  AmericaBuenosAires = 'AMERICA_BUENOS_AIRES',
  /** America/Cambridge Bay */
  AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
  /** America/Campo Grande */
  AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
  /** America/Cancun */
  AmericaCancun = 'AMERICA_CANCUN',
  /** America/Caracas */
  AmericaCaracas = 'AMERICA_CARACAS',
  /** America/Catamarca */
  AmericaCatamarca = 'AMERICA_CATAMARCA',
  /** America/Cayenne */
  AmericaCayenne = 'AMERICA_CAYENNE',
  /** America/Cayman */
  AmericaCayman = 'AMERICA_CAYMAN',
  /** America/Chicago */
  AmericaChicago = 'AMERICA_CHICAGO',
  /** America/Chihuahua */
  AmericaChihuahua = 'AMERICA_CHIHUAHUA',
  /** America/Coral Harbour */
  AmericaCoralHarbour = 'AMERICA_CORAL_HARBOUR',
  /** America/Cordoba */
  AmericaCordoba = 'AMERICA_CORDOBA',
  /** America/Costa Rica */
  AmericaCostaRica = 'AMERICA_COSTA_RICA',
  /** America/Creston */
  AmericaCreston = 'AMERICA_CRESTON',
  /** America/Cuiaba */
  AmericaCuiaba = 'AMERICA_CUIABA',
  /** America/Curacao */
  AmericaCuracao = 'AMERICA_CURACAO',
  /** America/Danmarkshavn */
  AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
  /** America/Dawson */
  AmericaDawson = 'AMERICA_DAWSON',
  /** America/Dawson Creek */
  AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
  /** America/Denver */
  AmericaDenver = 'AMERICA_DENVER',
  /** America/Detroit */
  AmericaDetroit = 'AMERICA_DETROIT',
  /** America/Dominica */
  AmericaDominica = 'AMERICA_DOMINICA',
  /** America/Edmonton */
  AmericaEdmonton = 'AMERICA_EDMONTON',
  /** America/Eirunepe */
  AmericaEirunepe = 'AMERICA_EIRUNEPE',
  /** America/El Salvador */
  AmericaElSalvador = 'AMERICA_EL_SALVADOR',
  /** America/Ensenada */
  AmericaEnsenada = 'AMERICA_ENSENADA',
  /** America/Fortaleza */
  AmericaFortaleza = 'AMERICA_FORTALEZA',
  /** America/Fort Nelson */
  AmericaFortNelson = 'AMERICA_FORT_NELSON',
  /** America/Fort Wayne */
  AmericaFortWayne = 'AMERICA_FORT_WAYNE',
  /** America/Glace Bay */
  AmericaGlaceBay = 'AMERICA_GLACE_BAY',
  /** America/Godthab */
  AmericaGodthab = 'AMERICA_GODTHAB',
  /** America/Goose Bay */
  AmericaGooseBay = 'AMERICA_GOOSE_BAY',
  /** America/Grand Turk */
  AmericaGrandTurk = 'AMERICA_GRAND_TURK',
  /** America/Grenada */
  AmericaGrenada = 'AMERICA_GRENADA',
  /** America/Guadeloupe */
  AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
  /** America/Guatemala */
  AmericaGuatemala = 'AMERICA_GUATEMALA',
  /** America/Guayaquil */
  AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
  /** America/Guyana */
  AmericaGuyana = 'AMERICA_GUYANA',
  /** America/Halifax */
  AmericaHalifax = 'AMERICA_HALIFAX',
  /** America/Havana */
  AmericaHavana = 'AMERICA_HAVANA',
  /** America/Hermosillo */
  AmericaHermosillo = 'AMERICA_HERMOSILLO',
  /** America/Indianapolis */
  AmericaIndianapolis = 'AMERICA_INDIANAPOLIS',
  /** America/Indiana/Indianapolis */
  AmericaIndianaIndianapolis = 'AMERICA_INDIANA_INDIANAPOLIS',
  /** America/Indiana/Knox */
  AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
  /** America/Indiana/Marengo */
  AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
  /** America/Indiana/Petersburg */
  AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
  /** America/Indiana/Tell City */
  AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
  /** America/Indiana/Vevay */
  AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
  /** America/Indiana/Vincennes */
  AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
  /** America/Indiana/Winamac */
  AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
  /** America/Inuvik */
  AmericaInuvik = 'AMERICA_INUVIK',
  /** America/Iqaluit */
  AmericaIqaluit = 'AMERICA_IQALUIT',
  /** America/Jamaica */
  AmericaJamaica = 'AMERICA_JAMAICA',
  /** America/Jujuy */
  AmericaJujuy = 'AMERICA_JUJUY',
  /** America/Juneau */
  AmericaJuneau = 'AMERICA_JUNEAU',
  /** America/Kentucky/Louisville */
  AmericaKentuckyLouisville = 'AMERICA_KENTUCKY_LOUISVILLE',
  /** America/Kentucky/Monticello */
  AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
  /** America/Knox IN */
  AmericaKnoxIn = 'AMERICA_KNOX_IN',
  /** America/Kralendijk */
  AmericaKralendijk = 'AMERICA_KRALENDIJK',
  /** America/La Paz */
  AmericaLaPaz = 'AMERICA_LA_PAZ',
  /** America/Lima */
  AmericaLima = 'AMERICA_LIMA',
  /** America/Los Angeles */
  AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
  /** America/Louisville */
  AmericaLouisville = 'AMERICA_LOUISVILLE',
  /** America/Lower Princes */
  AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
  /** America/Maceio */
  AmericaMaceio = 'AMERICA_MACEIO',
  /** America/Managua */
  AmericaManagua = 'AMERICA_MANAGUA',
  /** America/Manaus */
  AmericaManaus = 'AMERICA_MANAUS',
  /** America/Marigot */
  AmericaMarigot = 'AMERICA_MARIGOT',
  /** America/Martinique */
  AmericaMartinique = 'AMERICA_MARTINIQUE',
  /** America/Matamoros */
  AmericaMatamoros = 'AMERICA_MATAMOROS',
  /** America/Mazatlan */
  AmericaMazatlan = 'AMERICA_MAZATLAN',
  /** America/Mendoza */
  AmericaMendoza = 'AMERICA_MENDOZA',
  /** America/Menominee */
  AmericaMenominee = 'AMERICA_MENOMINEE',
  /** America/Merida */
  AmericaMerida = 'AMERICA_MERIDA',
  /** America/Metlakatla */
  AmericaMetlakatla = 'AMERICA_METLAKATLA',
  /** America/Mexico City */
  AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
  /** America/Miquelon */
  AmericaMiquelon = 'AMERICA_MIQUELON',
  /** America/Moncton */
  AmericaMoncton = 'AMERICA_MONCTON',
  /** America/Monterrey */
  AmericaMonterrey = 'AMERICA_MONTERREY',
  /** America/Montevideo */
  AmericaMontevideo = 'AMERICA_MONTEVIDEO',
  /** America/Montreal */
  AmericaMontreal = 'AMERICA_MONTREAL',
  /** America/Montserrat */
  AmericaMontserrat = 'AMERICA_MONTSERRAT',
  /** America/Nassau */
  AmericaNassau = 'AMERICA_NASSAU',
  /** America/New York */
  AmericaNewYork = 'AMERICA_NEW_YORK',
  /** America/Nipigon */
  AmericaNipigon = 'AMERICA_NIPIGON',
  /** America/Nome */
  AmericaNome = 'AMERICA_NOME',
  /** America/Noronha */
  AmericaNoronha = 'AMERICA_NORONHA',
  /** America/North Dakota/Beulah */
  AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
  /** America/North Dakota/Center */
  AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
  /** America/North Dakota/New Salem */
  AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
  /** America/Nuuk */
  AmericaNuuk = 'AMERICA_NUUK',
  /** America/Ojinaga */
  AmericaOjinaga = 'AMERICA_OJINAGA',
  /** America/Panama */
  AmericaPanama = 'AMERICA_PANAMA',
  /** America/Pangnirtung */
  AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
  /** America/Paramaribo */
  AmericaParamaribo = 'AMERICA_PARAMARIBO',
  /** America/Phoenix */
  AmericaPhoenix = 'AMERICA_PHOENIX',
  /** America/Porto Acre */
  AmericaPortoAcre = 'AMERICA_PORTO_ACRE',
  /** America/Porto Velho */
  AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
  /** America/Port-au-Prince */
  AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
  /** America/Port of Spain */
  AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
  /** America/Puerto Rico */
  AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
  /** America/Punta Arenas */
  AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
  /** America/Rainy River */
  AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
  /** America/Rankin Inlet */
  AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
  /** America/Recife */
  AmericaRecife = 'AMERICA_RECIFE',
  /** America/Regina */
  AmericaRegina = 'AMERICA_REGINA',
  /** America/Resolute */
  AmericaResolute = 'AMERICA_RESOLUTE',
  /** America/Rio Branco */
  AmericaRioBranco = 'AMERICA_RIO_BRANCO',
  /** America/Rosario */
  AmericaRosario = 'AMERICA_ROSARIO',
  /** America/Santarem */
  AmericaSantarem = 'AMERICA_SANTAREM',
  /** America/Santa Isabel */
  AmericaSantaIsabel = 'AMERICA_SANTA_ISABEL',
  /** America/Santiago */
  AmericaSantiago = 'AMERICA_SANTIAGO',
  /** America/Santo Domingo */
  AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
  /** America/Sao Paulo */
  AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
  /** America/Scoresbysund */
  AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
  /** America/Shiprock */
  AmericaShiprock = 'AMERICA_SHIPROCK',
  /** America/Sitka */
  AmericaSitka = 'AMERICA_SITKA',
  /** America/St Barthelemy */
  AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
  /** America/St Johns */
  AmericaStJohns = 'AMERICA_ST_JOHNS',
  /** America/St Kitts */
  AmericaStKitts = 'AMERICA_ST_KITTS',
  /** America/St Lucia */
  AmericaStLucia = 'AMERICA_ST_LUCIA',
  /** America/St Thomas */
  AmericaStThomas = 'AMERICA_ST_THOMAS',
  /** America/St Vincent */
  AmericaStVincent = 'AMERICA_ST_VINCENT',
  /** America/Swift Current */
  AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
  /** America/Tegucigalpa */
  AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
  /** America/Thule */
  AmericaThule = 'AMERICA_THULE',
  /** America/Thunder Bay */
  AmericaThunderBay = 'AMERICA_THUNDER_BAY',
  /** America/Tijuana */
  AmericaTijuana = 'AMERICA_TIJUANA',
  /** America/Toronto */
  AmericaToronto = 'AMERICA_TORONTO',
  /** America/Tortola */
  AmericaTortola = 'AMERICA_TORTOLA',
  /** America/Vancouver */
  AmericaVancouver = 'AMERICA_VANCOUVER',
  /** America/Virgin */
  AmericaVirgin = 'AMERICA_VIRGIN',
  /** America/Whitehorse */
  AmericaWhitehorse = 'AMERICA_WHITEHORSE',
  /** America/Winnipeg */
  AmericaWinnipeg = 'AMERICA_WINNIPEG',
  /** America/Yakutat */
  AmericaYakutat = 'AMERICA_YAKUTAT',
  /** America/Yellowknife */
  AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
  /** Antarctica/Casey */
  AntarcticaCasey = 'ANTARCTICA_CASEY',
  /** Antarctica/Davis */
  AntarcticaDavis = 'ANTARCTICA_DAVIS',
  /** Antarctica/DumontDUrville */
  AntarcticaDumontdurville = 'ANTARCTICA_DUMONTDURVILLE',
  /** Antarctica/Macquarie */
  AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
  /** Antarctica/Mawson */
  AntarcticaMawson = 'ANTARCTICA_MAWSON',
  /** Antarctica/McMurdo */
  AntarcticaMcmurdo = 'ANTARCTICA_MCMURDO',
  /** Antarctica/Palmer */
  AntarcticaPalmer = 'ANTARCTICA_PALMER',
  /** Antarctica/Rothera */
  AntarcticaRothera = 'ANTARCTICA_ROTHERA',
  /** Antarctica/South Pole */
  AntarcticaSouthPole = 'ANTARCTICA_SOUTH_POLE',
  /** Antarctica/Syowa */
  AntarcticaSyowa = 'ANTARCTICA_SYOWA',
  /** Antarctica/Troll */
  AntarcticaTroll = 'ANTARCTICA_TROLL',
  /** Antarctica/Vostok */
  AntarcticaVostok = 'ANTARCTICA_VOSTOK',
  /** Arctic/Longyearbyen */
  ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
  /** Asia/Aden */
  AsiaAden = 'ASIA_ADEN',
  /** Asia/Almaty */
  AsiaAlmaty = 'ASIA_ALMATY',
  /** Asia/Amman */
  AsiaAmman = 'ASIA_AMMAN',
  /** Asia/Anadyr */
  AsiaAnadyr = 'ASIA_ANADYR',
  /** Asia/Aqtau */
  AsiaAqtau = 'ASIA_AQTAU',
  /** Asia/Aqtobe */
  AsiaAqtobe = 'ASIA_AQTOBE',
  /** Asia/Ashgabat */
  AsiaAshgabat = 'ASIA_ASHGABAT',
  /** Asia/Ashkhabad */
  AsiaAshkhabad = 'ASIA_ASHKHABAD',
  /** Asia/Atyrau */
  AsiaAtyrau = 'ASIA_ATYRAU',
  /** Asia/Baghdad */
  AsiaBaghdad = 'ASIA_BAGHDAD',
  /** Asia/Bahrain */
  AsiaBahrain = 'ASIA_BAHRAIN',
  /** Asia/Baku */
  AsiaBaku = 'ASIA_BAKU',
  /** Asia/Bangkok */
  AsiaBangkok = 'ASIA_BANGKOK',
  /** Asia/Barnaul */
  AsiaBarnaul = 'ASIA_BARNAUL',
  /** Asia/Beirut */
  AsiaBeirut = 'ASIA_BEIRUT',
  /** Asia/Bishkek */
  AsiaBishkek = 'ASIA_BISHKEK',
  /** Asia/Brunei */
  AsiaBrunei = 'ASIA_BRUNEI',
  /** Asia/Calcutta */
  AsiaCalcutta = 'ASIA_CALCUTTA',
  /** Asia/Chita */
  AsiaChita = 'ASIA_CHITA',
  /** Asia/Choibalsan */
  AsiaChoibalsan = 'ASIA_CHOIBALSAN',
  /** Asia/Chongqing */
  AsiaChongqing = 'ASIA_CHONGQING',
  /** Asia/Chungking */
  AsiaChungking = 'ASIA_CHUNGKING',
  /** Asia/Colombo */
  AsiaColombo = 'ASIA_COLOMBO',
  /** Asia/Dacca */
  AsiaDacca = 'ASIA_DACCA',
  /** Asia/Damascus */
  AsiaDamascus = 'ASIA_DAMASCUS',
  /** Asia/Dhaka */
  AsiaDhaka = 'ASIA_DHAKA',
  /** Asia/Dili */
  AsiaDili = 'ASIA_DILI',
  /** Asia/Dubai */
  AsiaDubai = 'ASIA_DUBAI',
  /** Asia/Dushanbe */
  AsiaDushanbe = 'ASIA_DUSHANBE',
  /** Asia/Famagusta */
  AsiaFamagusta = 'ASIA_FAMAGUSTA',
  /** Asia/Gaza */
  AsiaGaza = 'ASIA_GAZA',
  /** Asia/Harbin */
  AsiaHarbin = 'ASIA_HARBIN',
  /** Asia/Hebron */
  AsiaHebron = 'ASIA_HEBRON',
  /** Asia/Hong Kong */
  AsiaHongKong = 'ASIA_HONG_KONG',
  /** Asia/Hovd */
  AsiaHovd = 'ASIA_HOVD',
  /** Asia/Ho Chi Minh */
  AsiaHoChiMinh = 'ASIA_HO_CHI_MINH',
  /** Asia/Irkutsk */
  AsiaIrkutsk = 'ASIA_IRKUTSK',
  /** Asia/Istanbul */
  AsiaIstanbul = 'ASIA_ISTANBUL',
  /** Asia/Jakarta */
  AsiaJakarta = 'ASIA_JAKARTA',
  /** Asia/Jayapura */
  AsiaJayapura = 'ASIA_JAYAPURA',
  /** Asia/Jerusalem */
  AsiaJerusalem = 'ASIA_JERUSALEM',
  /** Asia/Kabul */
  AsiaKabul = 'ASIA_KABUL',
  /** Asia/Kamchatka */
  AsiaKamchatka = 'ASIA_KAMCHATKA',
  /** Asia/Karachi */
  AsiaKarachi = 'ASIA_KARACHI',
  /** Asia/Kashgar */
  AsiaKashgar = 'ASIA_KASHGAR',
  /** Asia/Kathmandu */
  AsiaKathmandu = 'ASIA_KATHMANDU',
  /** Asia/Katmandu */
  AsiaKatmandu = 'ASIA_KATMANDU',
  /** Asia/Khandyga */
  AsiaKhandyga = 'ASIA_KHANDYGA',
  /** Asia/Kolkata */
  AsiaKolkata = 'ASIA_KOLKATA',
  /** Asia/Krasnoyarsk */
  AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
  /** Asia/Kuala Lumpur */
  AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
  /** Asia/Kuching */
  AsiaKuching = 'ASIA_KUCHING',
  /** Asia/Kuwait */
  AsiaKuwait = 'ASIA_KUWAIT',
  /** Asia/Macao */
  AsiaMacao = 'ASIA_MACAO',
  /** Asia/Macau */
  AsiaMacau = 'ASIA_MACAU',
  /** Asia/Magadan */
  AsiaMagadan = 'ASIA_MAGADAN',
  /** Asia/Makassar */
  AsiaMakassar = 'ASIA_MAKASSAR',
  /** Asia/Manila */
  AsiaManila = 'ASIA_MANILA',
  /** Asia/Muscat */
  AsiaMuscat = 'ASIA_MUSCAT',
  /** Asia/Nicosia */
  AsiaNicosia = 'ASIA_NICOSIA',
  /** Asia/Novokuznetsk */
  AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
  /** Asia/Novosibirsk */
  AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
  /** Asia/Omsk */
  AsiaOmsk = 'ASIA_OMSK',
  /** Asia/Oral */
  AsiaOral = 'ASIA_ORAL',
  /** Asia/Phnom Penh */
  AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
  /** Asia/Pontianak */
  AsiaPontianak = 'ASIA_PONTIANAK',
  /** Asia/Pyongyang */
  AsiaPyongyang = 'ASIA_PYONGYANG',
  /** Asia/Qatar */
  AsiaQatar = 'ASIA_QATAR',
  /** Asia/Qostanay */
  AsiaQostanay = 'ASIA_QOSTANAY',
  /** Asia/Qyzylorda */
  AsiaQyzylorda = 'ASIA_QYZYLORDA',
  /** Asia/Rangoon */
  AsiaRangoon = 'ASIA_RANGOON',
  /** Asia/Riyadh */
  AsiaRiyadh = 'ASIA_RIYADH',
  /** Asia/Saigon */
  AsiaSaigon = 'ASIA_SAIGON',
  /** Asia/Sakhalin */
  AsiaSakhalin = 'ASIA_SAKHALIN',
  /** Asia/Samarkand */
  AsiaSamarkand = 'ASIA_SAMARKAND',
  /** Asia/Seoul */
  AsiaSeoul = 'ASIA_SEOUL',
  /** Asia/Shanghai */
  AsiaShanghai = 'ASIA_SHANGHAI',
  /** Asia/Singapore */
  AsiaSingapore = 'ASIA_SINGAPORE',
  /** Asia/Srednekolymsk */
  AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
  /** Asia/Taipei */
  AsiaTaipei = 'ASIA_TAIPEI',
  /** Asia/Tashkent */
  AsiaTashkent = 'ASIA_TASHKENT',
  /** Asia/Tbilisi */
  AsiaTbilisi = 'ASIA_TBILISI',
  /** Asia/Tehran */
  AsiaTehran = 'ASIA_TEHRAN',
  /** Asia/Tel Aviv */
  AsiaTelAviv = 'ASIA_TEL_AVIV',
  /** Asia/Thimbu */
  AsiaThimbu = 'ASIA_THIMBU',
  /** Asia/Thimphu */
  AsiaThimphu = 'ASIA_THIMPHU',
  /** Asia/Tokyo */
  AsiaTokyo = 'ASIA_TOKYO',
  /** Asia/Tomsk */
  AsiaTomsk = 'ASIA_TOMSK',
  /** Asia/Ujung Pandang */
  AsiaUjungPandang = 'ASIA_UJUNG_PANDANG',
  /** Asia/Ulaanbaatar */
  AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
  /** Asia/Ulan Bator */
  AsiaUlanBator = 'ASIA_ULAN_BATOR',
  /** Asia/Urumqi */
  AsiaUrumqi = 'ASIA_URUMQI',
  /** Asia/Ust-Nera */
  AsiaUstNera = 'ASIA_UST_NERA',
  /** Asia/Vientiane */
  AsiaVientiane = 'ASIA_VIENTIANE',
  /** Asia/Vladivostok */
  AsiaVladivostok = 'ASIA_VLADIVOSTOK',
  /** Asia/Yakutsk */
  AsiaYakutsk = 'ASIA_YAKUTSK',
  /** Asia/Yangon */
  AsiaYangon = 'ASIA_YANGON',
  /** Asia/Yekaterinburg */
  AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
  /** Asia/Yerevan */
  AsiaYerevan = 'ASIA_YEREVAN',
  /** Atlantic/Azores */
  AtlanticAzores = 'ATLANTIC_AZORES',
  /** Atlantic/Bermuda */
  AtlanticBermuda = 'ATLANTIC_BERMUDA',
  /** Atlantic/Canary */
  AtlanticCanary = 'ATLANTIC_CANARY',
  /** Atlantic/Cape Verde */
  AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
  /** Atlantic/Faeroe */
  AtlanticFaeroe = 'ATLANTIC_FAEROE',
  /** Atlantic/Faroe */
  AtlanticFaroe = 'ATLANTIC_FAROE',
  /** Atlantic/Jan Mayen */
  AtlanticJanMayen = 'ATLANTIC_JAN_MAYEN',
  /** Atlantic/Madeira */
  AtlanticMadeira = 'ATLANTIC_MADEIRA',
  /** Atlantic/Reykjavik */
  AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
  /** Atlantic/South Georgia */
  AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
  /** Atlantic/Stanley */
  AtlanticStanley = 'ATLANTIC_STANLEY',
  /** Atlantic/St Helena */
  AtlanticStHelena = 'ATLANTIC_ST_HELENA',
  /** Australia/ACT */
  AustraliaAct = 'AUSTRALIA_ACT',
  /** Australia/Adelaide */
  AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
  /** Australia/Brisbane */
  AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
  /** Australia/Broken Hill */
  AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
  /** Australia/Canberra */
  AustraliaCanberra = 'AUSTRALIA_CANBERRA',
  /** Australia/Currie */
  AustraliaCurrie = 'AUSTRALIA_CURRIE',
  /** Australia/Darwin */
  AustraliaDarwin = 'AUSTRALIA_DARWIN',
  /** Australia/Eucla */
  AustraliaEucla = 'AUSTRALIA_EUCLA',
  /** Australia/Hobart */
  AustraliaHobart = 'AUSTRALIA_HOBART',
  /** Australia/LHI */
  AustraliaLhi = 'AUSTRALIA_LHI',
  /** Australia/Lindeman */
  AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
  /** Australia/Lord Howe */
  AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
  /** Australia/Melbourne */
  AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
  /** Australia/North */
  AustraliaNorth = 'AUSTRALIA_NORTH',
  /** Australia/NSW */
  AustraliaNsw = 'AUSTRALIA_NSW',
  /** Australia/Perth */
  AustraliaPerth = 'AUSTRALIA_PERTH',
  /** Australia/Queensland */
  AustraliaQueensland = 'AUSTRALIA_QUEENSLAND',
  /** Australia/South */
  AustraliaSouth = 'AUSTRALIA_SOUTH',
  /** Australia/Sydney */
  AustraliaSydney = 'AUSTRALIA_SYDNEY',
  /** Australia/Tasmania */
  AustraliaTasmania = 'AUSTRALIA_TASMANIA',
  /** Australia/Victoria */
  AustraliaVictoria = 'AUSTRALIA_VICTORIA',
  /** Australia/West */
  AustraliaWest = 'AUSTRALIA_WEST',
  /** Australia/Yancowinna */
  AustraliaYancowinna = 'AUSTRALIA_YANCOWINNA',
  /** Brazil/Acre */
  BrazilAcre = 'BRAZIL_ACRE',
  /** Brazil/DeNoronha */
  BrazilDenoronha = 'BRAZIL_DENORONHA',
  /** Brazil/East */
  BrazilEast = 'BRAZIL_EAST',
  /** Brazil/West */
  BrazilWest = 'BRAZIL_WEST',
  /** Canada/Atlantic */
  CanadaAtlantic = 'CANADA_ATLANTIC',
  /** Canada/Central */
  CanadaCentral = 'CANADA_CENTRAL',
  /** Canada/Eastern */
  CanadaEastern = 'CANADA_EASTERN',
  /** Canada/Mountain */
  CanadaMountain = 'CANADA_MOUNTAIN',
  /** Canada/Newfoundland */
  CanadaNewfoundland = 'CANADA_NEWFOUNDLAND',
  /** Canada/Pacific */
  CanadaPacific = 'CANADA_PACIFIC',
  /** Canada/Saskatchewan */
  CanadaSaskatchewan = 'CANADA_SASKATCHEWAN',
  /** Canada/Yukon */
  CanadaYukon = 'CANADA_YUKON',
  /** CET */
  Cet = 'CET',
  /** Chile/Continental */
  ChileContinental = 'CHILE_CONTINENTAL',
  /** Chile/EasterIsland */
  ChileEasterisland = 'CHILE_EASTERISLAND',
  /** CST6CDT */
  Cst6Cdt = 'CST6CDT',
  /** Cuba */
  Cuba = 'CUBA',
  /** EET */
  Eet = 'EET',
  /** Egypt */
  Egypt = 'EGYPT',
  /** Eire */
  Eire = 'EIRE',
  /** EST */
  Est = 'EST',
  /** EST5EDT */
  Est5Edt = 'EST5EDT',
  /** Etc/GMT */
  EtcGmt = 'ETC_GMT',
  /** Etc/GMT0 */
  EtcGmt0 = 'ETC_GMT0',
  /** Etc/GMT+0 */
  EtcGmt_0 = 'ETC_GMT_0',
  /** Etc/GMT-0 */
  EtcGmt_0_404 = 'ETC_GMT_0_404',
  /** Etc/GMT+1 */
  EtcGmt_1 = 'ETC_GMT_1',
  /** Etc/GMT-1 */
  EtcGmt_1_405 = 'ETC_GMT_1_405',
  /** Etc/GMT+2 */
  EtcGmt_2 = 'ETC_GMT_2',
  /** Etc/GMT-2 */
  EtcGmt_2_411 = 'ETC_GMT_2_411',
  /** Etc/GMT+3 */
  EtcGmt_3 = 'ETC_GMT_3',
  /** Etc/GMT-3 */
  EtcGmt_3_412 = 'ETC_GMT_3_412',
  /** Etc/GMT+4 */
  EtcGmt_4 = 'ETC_GMT_4',
  /** Etc/GMT-4 */
  EtcGmt_4_413 = 'ETC_GMT_4_413',
  /** Etc/GMT+5 */
  EtcGmt_5 = 'ETC_GMT_5',
  /** Etc/GMT-5 */
  EtcGmt_5_414 = 'ETC_GMT_5_414',
  /** Etc/GMT+6 */
  EtcGmt_6 = 'ETC_GMT_6',
  /** Etc/GMT-6 */
  EtcGmt_6_415 = 'ETC_GMT_6_415',
  /** Etc/GMT+7 */
  EtcGmt_7 = 'ETC_GMT_7',
  /** Etc/GMT-7 */
  EtcGmt_7_416 = 'ETC_GMT_7_416',
  /** Etc/GMT+8 */
  EtcGmt_8 = 'ETC_GMT_8',
  /** Etc/GMT-8 */
  EtcGmt_8_417 = 'ETC_GMT_8_417',
  /** Etc/GMT+9 */
  EtcGmt_9 = 'ETC_GMT_9',
  /** Etc/GMT-9 */
  EtcGmt_9_418 = 'ETC_GMT_9_418',
  /** Etc/GMT+10 */
  EtcGmt_10 = 'ETC_GMT_10',
  /** Etc/GMT-10 */
  EtcGmt_10_406 = 'ETC_GMT_10_406',
  /** Etc/GMT+11 */
  EtcGmt_11 = 'ETC_GMT_11',
  /** Etc/GMT-11 */
  EtcGmt_11_407 = 'ETC_GMT_11_407',
  /** Etc/GMT+12 */
  EtcGmt_12 = 'ETC_GMT_12',
  /** Etc/GMT-12 */
  EtcGmt_12_408 = 'ETC_GMT_12_408',
  /** Etc/GMT-13 */
  EtcGmt_13 = 'ETC_GMT_13',
  /** Etc/GMT-14 */
  EtcGmt_14 = 'ETC_GMT_14',
  /** Etc/Greenwich */
  EtcGreenwich = 'ETC_GREENWICH',
  /** Etc/UCT */
  EtcUct = 'ETC_UCT',
  /** Etc/Universal */
  EtcUniversal = 'ETC_UNIVERSAL',
  /** Etc/UTC */
  EtcUtc = 'ETC_UTC',
  /** Etc/Zulu */
  EtcZulu = 'ETC_ZULU',
  /** Europe/Amsterdam */
  EuropeAmsterdam = 'EUROPE_AMSTERDAM',
  /** Europe/Andorra */
  EuropeAndorra = 'EUROPE_ANDORRA',
  /** Europe/Astrakhan */
  EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
  /** Europe/Athens */
  EuropeAthens = 'EUROPE_ATHENS',
  /** Europe/Belfast */
  EuropeBelfast = 'EUROPE_BELFAST',
  /** Europe/Belgrade */
  EuropeBelgrade = 'EUROPE_BELGRADE',
  /** Europe/Berlin */
  EuropeBerlin = 'EUROPE_BERLIN',
  /** Europe/Bratislava */
  EuropeBratislava = 'EUROPE_BRATISLAVA',
  /** Europe/Brussels */
  EuropeBrussels = 'EUROPE_BRUSSELS',
  /** Europe/Bucharest */
  EuropeBucharest = 'EUROPE_BUCHAREST',
  /** Europe/Budapest */
  EuropeBudapest = 'EUROPE_BUDAPEST',
  /** Europe/Busingen */
  EuropeBusingen = 'EUROPE_BUSINGEN',
  /** Europe/Chisinau */
  EuropeChisinau = 'EUROPE_CHISINAU',
  /** Europe/Copenhagen */
  EuropeCopenhagen = 'EUROPE_COPENHAGEN',
  /** Europe/Dublin */
  EuropeDublin = 'EUROPE_DUBLIN',
  /** Europe/Gibraltar */
  EuropeGibraltar = 'EUROPE_GIBRALTAR',
  /** Europe/Guernsey */
  EuropeGuernsey = 'EUROPE_GUERNSEY',
  /** Europe/Helsinki */
  EuropeHelsinki = 'EUROPE_HELSINKI',
  /** Europe/Isle of Man */
  EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
  /** Europe/Istanbul */
  EuropeIstanbul = 'EUROPE_ISTANBUL',
  /** Europe/Jersey */
  EuropeJersey = 'EUROPE_JERSEY',
  /** Europe/Kaliningrad */
  EuropeKaliningrad = 'EUROPE_KALININGRAD',
  /** Europe/Kiev */
  EuropeKiev = 'EUROPE_KIEV',
  /** Europe/Kirov */
  EuropeKirov = 'EUROPE_KIROV',
  /** Europe/Lisbon */
  EuropeLisbon = 'EUROPE_LISBON',
  /** Europe/Ljubljana */
  EuropeLjubljana = 'EUROPE_LJUBLJANA',
  /** Europe/London */
  EuropeLondon = 'EUROPE_LONDON',
  /** Europe/Luxembourg */
  EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
  /** Europe/Madrid */
  EuropeMadrid = 'EUROPE_MADRID',
  /** Europe/Malta */
  EuropeMalta = 'EUROPE_MALTA',
  /** Europe/Mariehamn */
  EuropeMariehamn = 'EUROPE_MARIEHAMN',
  /** Europe/Minsk */
  EuropeMinsk = 'EUROPE_MINSK',
  /** Europe/Monaco */
  EuropeMonaco = 'EUROPE_MONACO',
  /** Europe/Moscow */
  EuropeMoscow = 'EUROPE_MOSCOW',
  /** Europe/Nicosia */
  EuropeNicosia = 'EUROPE_NICOSIA',
  /** Europe/Oslo */
  EuropeOslo = 'EUROPE_OSLO',
  /** Europe/Paris */
  EuropeParis = 'EUROPE_PARIS',
  /** Europe/Podgorica */
  EuropePodgorica = 'EUROPE_PODGORICA',
  /** Europe/Prague */
  EuropePrague = 'EUROPE_PRAGUE',
  /** Europe/Riga */
  EuropeRiga = 'EUROPE_RIGA',
  /** Europe/Rome */
  EuropeRome = 'EUROPE_ROME',
  /** Europe/Samara */
  EuropeSamara = 'EUROPE_SAMARA',
  /** Europe/San Marino */
  EuropeSanMarino = 'EUROPE_SAN_MARINO',
  /** Europe/Sarajevo */
  EuropeSarajevo = 'EUROPE_SARAJEVO',
  /** Europe/Saratov */
  EuropeSaratov = 'EUROPE_SARATOV',
  /** Europe/Simferopol */
  EuropeSimferopol = 'EUROPE_SIMFEROPOL',
  /** Europe/Skopje */
  EuropeSkopje = 'EUROPE_SKOPJE',
  /** Europe/Sofia */
  EuropeSofia = 'EUROPE_SOFIA',
  /** Europe/Stockholm */
  EuropeStockholm = 'EUROPE_STOCKHOLM',
  /** Europe/Tallinn */
  EuropeTallinn = 'EUROPE_TALLINN',
  /** Europe/Tirane */
  EuropeTirane = 'EUROPE_TIRANE',
  /** Europe/Tiraspol */
  EuropeTiraspol = 'EUROPE_TIRASPOL',
  /** Europe/Ulyanovsk */
  EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
  /** Europe/Uzhgorod */
  EuropeUzhgorod = 'EUROPE_UZHGOROD',
  /** Europe/Vaduz */
  EuropeVaduz = 'EUROPE_VADUZ',
  /** Europe/Vatican */
  EuropeVatican = 'EUROPE_VATICAN',
  /** Europe/Vienna */
  EuropeVienna = 'EUROPE_VIENNA',
  /** Europe/Vilnius */
  EuropeVilnius = 'EUROPE_VILNIUS',
  /** Europe/Volgograd */
  EuropeVolgograd = 'EUROPE_VOLGOGRAD',
  /** Europe/Warsaw */
  EuropeWarsaw = 'EUROPE_WARSAW',
  /** Europe/Zagreb */
  EuropeZagreb = 'EUROPE_ZAGREB',
  /** Europe/Zaporozhye */
  EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
  /** Europe/Zurich */
  EuropeZurich = 'EUROPE_ZURICH',
  /** GB */
  Gb = 'GB',
  /** GB-Eire */
  GbEire = 'GB_EIRE',
  /** GMT */
  Gmt = 'GMT',
  /** GMT0 */
  Gmt0 = 'GMT0',
  /** GMT+0 */
  Gmt_0 = 'GMT_0',
  /** GMT-0 */
  Gmt_0_492 = 'GMT_0_492',
  /** Greenwich */
  Greenwich = 'GREENWICH',
  /** Hongkong */
  Hongkong = 'HONGKONG',
  /** HST */
  Hst = 'HST',
  /** Iceland */
  Iceland = 'ICELAND',
  /** Indian/Antananarivo */
  IndianAntananarivo = 'INDIAN_ANTANANARIVO',
  /** Indian/Chagos */
  IndianChagos = 'INDIAN_CHAGOS',
  /** Indian/Christmas */
  IndianChristmas = 'INDIAN_CHRISTMAS',
  /** Indian/Cocos */
  IndianCocos = 'INDIAN_COCOS',
  /** Indian/Comoro */
  IndianComoro = 'INDIAN_COMORO',
  /** Indian/Kerguelen */
  IndianKerguelen = 'INDIAN_KERGUELEN',
  /** Indian/Mahe */
  IndianMahe = 'INDIAN_MAHE',
  /** Indian/Maldives */
  IndianMaldives = 'INDIAN_MALDIVES',
  /** Indian/Mauritius */
  IndianMauritius = 'INDIAN_MAURITIUS',
  /** Indian/Mayotte */
  IndianMayotte = 'INDIAN_MAYOTTE',
  /** Indian/Reunion */
  IndianReunion = 'INDIAN_REUNION',
  /** Iran */
  Iran = 'IRAN',
  /** Israel */
  Israel = 'ISRAEL',
  /** Jamaica */
  Jamaica = 'JAMAICA',
  /** Japan */
  Japan = 'JAPAN',
  /** Kwajalein */
  Kwajalein = 'KWAJALEIN',
  /** Libya */
  Libya = 'LIBYA',
  /** MET */
  Met = 'MET',
  /** Mexico/BajaNorte */
  MexicoBajanorte = 'MEXICO_BAJANORTE',
  /** Mexico/BajaSur */
  MexicoBajasur = 'MEXICO_BAJASUR',
  /** Mexico/General */
  MexicoGeneral = 'MEXICO_GENERAL',
  /** MST */
  Mst = 'MST',
  /** MST7MDT */
  Mst7Mdt = 'MST7MDT',
  /** Navajo */
  Navajo = 'NAVAJO',
  /** NZ */
  Nz = 'NZ',
  /** NZ-CHAT */
  NzChat = 'NZ_CHAT',
  /** Pacific/Apia */
  PacificApia = 'PACIFIC_APIA',
  /** Pacific/Auckland */
  PacificAuckland = 'PACIFIC_AUCKLAND',
  /** Pacific/Bougainville */
  PacificBougainville = 'PACIFIC_BOUGAINVILLE',
  /** Pacific/Chatham */
  PacificChatham = 'PACIFIC_CHATHAM',
  /** Pacific/Chuuk */
  PacificChuuk = 'PACIFIC_CHUUK',
  /** Pacific/Easter */
  PacificEaster = 'PACIFIC_EASTER',
  /** Pacific/Efate */
  PacificEfate = 'PACIFIC_EFATE',
  /** Pacific/Enderbury */
  PacificEnderbury = 'PACIFIC_ENDERBURY',
  /** Pacific/Fakaofo */
  PacificFakaofo = 'PACIFIC_FAKAOFO',
  /** Pacific/Fiji */
  PacificFiji = 'PACIFIC_FIJI',
  /** Pacific/Funafuti */
  PacificFunafuti = 'PACIFIC_FUNAFUTI',
  /** Pacific/Galapagos */
  PacificGalapagos = 'PACIFIC_GALAPAGOS',
  /** Pacific/Gambier */
  PacificGambier = 'PACIFIC_GAMBIER',
  /** Pacific/Guadalcanal */
  PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
  /** Pacific/Guam */
  PacificGuam = 'PACIFIC_GUAM',
  /** Pacific/Honolulu */
  PacificHonolulu = 'PACIFIC_HONOLULU',
  /** Pacific/Johnston */
  PacificJohnston = 'PACIFIC_JOHNSTON',
  /** Pacific/Kiritimati */
  PacificKiritimati = 'PACIFIC_KIRITIMATI',
  /** Pacific/Kosrae */
  PacificKosrae = 'PACIFIC_KOSRAE',
  /** Pacific/Kwajalein */
  PacificKwajalein = 'PACIFIC_KWAJALEIN',
  /** Pacific/Majuro */
  PacificMajuro = 'PACIFIC_MAJURO',
  /** Pacific/Marquesas */
  PacificMarquesas = 'PACIFIC_MARQUESAS',
  /** Pacific/Midway */
  PacificMidway = 'PACIFIC_MIDWAY',
  /** Pacific/Nauru */
  PacificNauru = 'PACIFIC_NAURU',
  /** Pacific/Niue */
  PacificNiue = 'PACIFIC_NIUE',
  /** Pacific/Norfolk */
  PacificNorfolk = 'PACIFIC_NORFOLK',
  /** Pacific/Noumea */
  PacificNoumea = 'PACIFIC_NOUMEA',
  /** Pacific/Pago Pago */
  PacificPagoPago = 'PACIFIC_PAGO_PAGO',
  /** Pacific/Palau */
  PacificPalau = 'PACIFIC_PALAU',
  /** Pacific/Pitcairn */
  PacificPitcairn = 'PACIFIC_PITCAIRN',
  /** Pacific/Pohnpei */
  PacificPohnpei = 'PACIFIC_POHNPEI',
  /** Pacific/Ponape */
  PacificPonape = 'PACIFIC_PONAPE',
  /** Pacific/Port Moresby */
  PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
  /** Pacific/Rarotonga */
  PacificRarotonga = 'PACIFIC_RAROTONGA',
  /** Pacific/Saipan */
  PacificSaipan = 'PACIFIC_SAIPAN',
  /** Pacific/Samoa */
  PacificSamoa = 'PACIFIC_SAMOA',
  /** Pacific/Tahiti */
  PacificTahiti = 'PACIFIC_TAHITI',
  /** Pacific/Tarawa */
  PacificTarawa = 'PACIFIC_TARAWA',
  /** Pacific/Tongatapu */
  PacificTongatapu = 'PACIFIC_TONGATAPU',
  /** Pacific/Truk */
  PacificTruk = 'PACIFIC_TRUK',
  /** Pacific/Wake */
  PacificWake = 'PACIFIC_WAKE',
  /** Pacific/Wallis */
  PacificWallis = 'PACIFIC_WALLIS',
  /** Pacific/Yap */
  PacificYap = 'PACIFIC_YAP',
  /** Poland */
  Poland = 'POLAND',
  /** Portugal */
  Portugal = 'PORTUGAL',
  /** PRC */
  Prc = 'PRC',
  /** PST8PDT */
  Pst8Pdt = 'PST8PDT',
  /** ROC */
  Roc = 'ROC',
  /** ROK */
  Rok = 'ROK',
  /** Singapore */
  Singapore = 'SINGAPORE',
  /** Turkey */
  Turkey = 'TURKEY',
  /** UCT */
  Uct = 'UCT',
  /** Universal */
  Universal = 'UNIVERSAL',
  /** US/Alaska */
  UsAlaska = 'US_ALASKA',
  /** US/Aleutian */
  UsAleutian = 'US_ALEUTIAN',
  /** US/Arizona */
  UsArizona = 'US_ARIZONA',
  /** US/Central */
  UsCentral = 'US_CENTRAL',
  /** US/Eastern */
  UsEastern = 'US_EASTERN',
  /** US/East-Indiana */
  UsEastIndiana = 'US_EAST_INDIANA',
  /** US/Hawaii */
  UsHawaii = 'US_HAWAII',
  /** US/Indiana-Starke */
  UsIndianaStarke = 'US_INDIANA_STARKE',
  /** US/Michigan */
  UsMichigan = 'US_MICHIGAN',
  /** US/Mountain */
  UsMountain = 'US_MOUNTAIN',
  /** US/Pacific */
  UsPacific = 'US_PACIFIC',
  /** US/Samoa */
  UsSamoa = 'US_SAMOA',
  /** UTC */
  Utc = 'UTC',
  /** WET */
  Wet = 'WET',
  /** W-SU */
  WSu = 'W_SU',
  /** Zulu */
  Zulu = 'ZULU'
}

export type AccountType = Node & {
  __typename?: 'AccountType';
  classNotifications: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  exemptFromPayment: Scalars['Boolean'];
  firstName?: Maybe<Scalars['String']>;
  homeworkNotifications: Scalars['Boolean'];
  /** The ID of the object. */
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  isSuperuser: Scalars['Boolean'];
  lastLogin: Scalars['DateTime'];
  lastName?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  sendScheduledEmails: Scalars['Boolean'];
  showScheduleOnCalendar: Scalars['Boolean'];
  timezone?: Maybe<AccountTimezone>;
  uid?: Maybe<Scalars['UUID']>;
  username: Scalars['String'];
};

export type AccountTypeConnection = {
  __typename?: 'AccountTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccountTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AccountType` and its cursor. */
export type AccountTypeEdge = {
  __typename?: 'AccountTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<AccountType>;
};

export type AddCourseFileMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  course: Scalars['ID'];
  file: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type AddCourseFileMutationPayload = {
  __typename?: 'AddCourseFileMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  courseFile?: Maybe<CourseFileType>;
  data?: Maybe<CourseFileType>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

export type AddCourseLinkMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  course: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  link: Scalars['String'];
  title: Scalars['String'];
};

export type AddCourseLinkMutationPayload = {
  __typename?: 'AddCourseLinkMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  courseLink?: Maybe<CourseLinkType>;
  data?: Maybe<CourseLinkType>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

export type AddCourseMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Color You Want This Class to Show Up as on Calendar and Schedule */
  color: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  /** Name of Class (CHEM 161, POLS 110, etc.) */
  name: Scalars['String'];
  /** Not Required */
  teacher?: InputMaybe<Scalars['String']>;
  /** Full Name of Class (General Chemistry I, etc.) */
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type AddCourseMutationPayload = {
  __typename?: 'AddCourseMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  course?: Maybe<CourseType>;
  data?: Maybe<CourseType>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

export type AddCourseTimeMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  course: Scalars['ID'];
  endTime: Scalars['Time'];
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  /** Leave Blank if Class is Online */
  location?: InputMaybe<Scalars['String']>;
  startTime: Scalars['Time'];
  user?: InputMaybe<Scalars['ID']>;
  weekday: Scalars['String'];
  zoomPassword?: InputMaybe<Scalars['String']>;
};

export type AddCourseTimeMutationPayload = {
  __typename?: 'AddCourseTimeMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  courseTime?: Maybe<CourseTimeType>;
  data?: Maybe<CourseTimeType>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

export type AddEmailMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

export type AddEmailMutationPayload = {
  __typename?: 'AddEmailMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

export type AddEventMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  date: Scalars['Date'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** Leave Blank if Event is All Day */
  time?: InputMaybe<Scalars['Time']>;
  title: Scalars['String'];
  user: Scalars['ID'];
};

export type AddEventMutationPayload = {
  __typename?: 'AddEventMutationPayload';
  calendarEvent?: Maybe<CalendarEventType>;
  clientMutationId?: Maybe<Scalars['String']>;
  data?: Maybe<CalendarEventType>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

export type AddHomeworkAssignmentMutationInput = {
  alert: Scalars['String'];
  clientMutationId?: InputMaybe<Scalars['String']>;
  course: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  dueDate: Scalars['Date'];
  dueTime: Scalars['Time'];
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  secondAlert: Scalars['String'];
};

export type AddHomeworkAssignmentMutationPayload = {
  __typename?: 'AddHomeworkAssignmentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  data?: Maybe<HomeworkAssignmentType>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  homeworkAssignment?: Maybe<HomeworkAssignmentType>;
};

export type CalendarEventType = Node & {
  __typename?: 'CalendarEventType';
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Leave Blank if Event is All Day */
  time?: Maybe<Scalars['Time']>;
  title?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
  user?: Maybe<AccountType>;
};

export type CalendarEventTypeConnection = {
  __typename?: 'CalendarEventTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CalendarEventTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CalendarEventType` and its cursor. */
export type CalendarEventTypeEdge = {
  __typename?: 'CalendarEventTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CalendarEventType>;
};

export type ChangePasswordMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  oldpassword: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
};

export type ChangePasswordMutationPayload = {
  __typename?: 'ChangePasswordMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  oldpassword: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
};

/** An enumeration. */
export enum CourseColor {
  /** Red */
  Danger = 'DANGER',
  /** Light Blue */
  Info = 'INFO',
  /** Blue */
  Primary = 'PRIMARY',
  /** Gray */
  Secondary = 'SECONDARY',
  /** Green */
  Success = 'SUCCESS',
  /** Yellow */
  Warning = 'WARNING'
}

export type CourseFileType = Node & {
  __typename?: 'CourseFileType';
  course: CourseType;
  /** The ID of the object. */
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
};

export type CourseFileTypeConnection = {
  __typename?: 'CourseFileTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseFileTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CourseFileType` and its cursor. */
export type CourseFileTypeEdge = {
  __typename?: 'CourseFileTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CourseFileType>;
};

export type CourseLinkType = Node & {
  __typename?: 'CourseLinkType';
  course: CourseType;
  /** The ID of the object. */
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
};

export type CourseLinkTypeConnection = {
  __typename?: 'CourseLinkTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseLinkTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CourseLinkType` and its cursor. */
export type CourseLinkTypeEdge = {
  __typename?: 'CourseLinkTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CourseLinkType>;
};

export type CourseTimeType = Node & {
  __typename?: 'CourseTimeType';
  course: CourseType;
  endTime?: Maybe<Scalars['Time']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  /** Leave Blank if Class is Online */
  location?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Time']>;
  uid?: Maybe<Scalars['UUID']>;
  user?: Maybe<AccountType>;
  weekday: Scalars['String'];
  zoomPassword?: Maybe<Scalars['String']>;
};

export type CourseTimeTypeConnection = {
  __typename?: 'CourseTimeTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseTimeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CourseTimeType` and its cursor. */
export type CourseTimeTypeEdge = {
  __typename?: 'CourseTimeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CourseTimeType>;
};

export type CourseType = Node & {
  __typename?: 'CourseType';
  /** Color You Want This Class to Show Up as on Calendar and Schedule */
  color: CourseColor;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Name of Class (CHEM 161, POLS 110, etc.) */
  name?: Maybe<Scalars['String']>;
  /** Not Required */
  teacher?: Maybe<Scalars['String']>;
  /** Full Name of Class (General Chemistry I, etc.) */
  title?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
  user?: Maybe<AccountType>;
};

export type CourseTypeConnection = {
  __typename?: 'CourseTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CourseType` and its cursor. */
export type CourseTypeEdge = {
  __typename?: 'CourseTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CourseType>;
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String'];
  messages: Array<Scalars['String']>;
};

export type HomeworkAssignmentType = Node & {
  __typename?: 'HomeworkAssignmentType';
  completed: Scalars['Boolean'];
  course?: Maybe<CourseType>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['Date']>;
  dueTime: Scalars['Time'];
  /** The ID of the object. */
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
};

export type HomeworkAssignmentTypeConnection = {
  __typename?: 'HomeworkAssignmentTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<HomeworkAssignmentTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `HomeworkAssignmentType` and its cursor. */
export type HomeworkAssignmentTypeEdge = {
  __typename?: 'HomeworkAssignmentTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<HomeworkAssignmentType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCalendarEvent?: Maybe<AddEventMutationPayload>;
  addCourse?: Maybe<AddCourseMutationPayload>;
  addCourseFile?: Maybe<AddCourseFileMutationPayload>;
  addCourseLink?: Maybe<AddCourseLinkMutationPayload>;
  addCourseTime?: Maybe<AddCourseTimeMutationPayload>;
  addEmail?: Maybe<AddEmailMutationPayload>;
  addHomeworkAssignment?: Maybe<AddHomeworkAssignmentMutationPayload>;
  changePassword?: Maybe<ChangePasswordMutationPayload>;
  refreshToken?: Maybe<Refresh>;
  resetPassword?: Maybe<ResetPasswordMutationPayload>;
  resetPasswordKey?: Maybe<ResetPasswordKeyMutationPayload>;
  setPassword?: Maybe<SetPasswordMutationPayload>;
  signup?: Maybe<SignupMutationPayload>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
};


export type MutationAddCalendarEventArgs = {
  input: AddEventMutationInput;
};


export type MutationAddCourseArgs = {
  input: AddCourseMutationInput;
};


export type MutationAddCourseFileArgs = {
  input: AddCourseFileMutationInput;
};


export type MutationAddCourseLinkArgs = {
  input: AddCourseLinkMutationInput;
};


export type MutationAddCourseTimeArgs = {
  input: AddCourseTimeMutationInput;
};


export type MutationAddEmailArgs = {
  input: AddEmailMutationInput;
};


export type MutationAddHomeworkAssignmentArgs = {
  input: AddHomeworkAssignmentMutationInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordMutationInput;
};


export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordMutationInput;
};


export type MutationResetPasswordKeyArgs = {
  input: ResetPasswordKeyMutationInput;
};


export type MutationSetPasswordArgs = {
  input: SetPasswordMutationInput;
};


export type MutationSignupArgs = {
  input: SignupMutationInput;
};


export type MutationTokenAuthArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type NoteType = Node & {
  __typename?: 'NoteType';
  content?: Maybe<Scalars['String']>;
  course?: Maybe<CourseType>;
  /** The ID of the object. */
  id: Scalars['ID'];
  modified: Scalars['Date'];
  title: Scalars['String'];
  uid?: Maybe<Scalars['UUID']>;
  uploaded: Scalars['Date'];
  user?: Maybe<AccountType>;
};

export type NoteTypeConnection = {
  __typename?: 'NoteTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NoteTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `NoteType` and its cursor. */
export type NoteTypeEdge = {
  __typename?: 'NoteTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<NoteType>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  calendarEvents?: Maybe<CalendarEventTypeConnection>;
  courseFiles?: Maybe<CourseFileTypeConnection>;
  courseLinks?: Maybe<CourseLinkTypeConnection>;
  courseTimes?: Maybe<CourseTimeTypeConnection>;
  courses?: Maybe<CourseTypeConnection>;
  getSchedule?: Maybe<Array<Maybe<CourseTimeType>>>;
  homeworkAssignments?: Maybe<HomeworkAssignmentTypeConnection>;
  notes?: Maybe<NoteTypeConnection>;
  user?: Maybe<AccountType>;
  users?: Maybe<AccountTypeConnection>;
};


export type QueryCalendarEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['Time']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type QueryCourseFilesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  course_Uid?: InputMaybe<Scalars['UUID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryCourseLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  course_Uid?: InputMaybe<Scalars['UUID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryCourseTimesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  course_Uid?: InputMaybe<Scalars['UUID']>;
  endTime?: InputMaybe<Scalars['Time']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  startTime?: InputMaybe<Scalars['Time']>;
  token?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
  user?: InputMaybe<Scalars['ID']>;
  weekday?: InputMaybe<Scalars['String']>;
  zoomPassword?: InputMaybe<Scalars['String']>;
};


export type QueryCoursesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  teacher?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type QueryGetScheduleArgs = {
  date?: InputMaybe<Scalars['Date']>;
  token?: InputMaybe<Scalars['String']>;
};


export type QueryHomeworkAssignmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  course_Uid?: InputMaybe<Scalars['UUID']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['Date']>;
  dueTime?: InputMaybe<Scalars['Time']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  token?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryNotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  course_Uid?: InputMaybe<Scalars['UUID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  modified?: InputMaybe<Scalars['Date']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
  uploaded?: InputMaybe<Scalars['Date']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type QueryUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  classNotifications?: InputMaybe<Scalars['Boolean']>;
  dateJoined?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  exemptFromPayment?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Scalars['String']>;
  homeworkNotifications?: InputMaybe<Scalars['Boolean']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isStaff?: InputMaybe<Scalars['Boolean']>;
  isSuperuser?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  school?: InputMaybe<Scalars['String']>;
  sendScheduledEmails?: InputMaybe<Scalars['Boolean']>;
  showScheduleOnCalendar?: InputMaybe<Scalars['Boolean']>;
  timezone?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type ResetPasswordKeyMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  password1: Scalars['String'];
  password2: Scalars['String'];
};

export type ResetPasswordKeyMutationPayload = {
  __typename?: 'ResetPasswordKeyMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  password1: Scalars['String'];
  password2: Scalars['String'];
};

export type ResetPasswordMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

export type ResetPasswordMutationPayload = {
  __typename?: 'ResetPasswordMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

export type SetPasswordMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  password1: Scalars['String'];
  password2: Scalars['String'];
};

export type SetPasswordMutationPayload = {
  __typename?: 'SetPasswordMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  password1: Scalars['String'];
  password2: Scalars['String'];
};

export type SignupMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  username: Scalars['String'];
};

export type SignupMutationPayload = {
  __typename?: 'SignupMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type TokenAuthMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type TokenAuthMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainJSONWebToken', token: string } | null };

export type VerifyTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyTokenMutation = { __typename?: 'Mutation', verifyToken?: { __typename?: 'Verify', payload: any } | null };

export type RefreshTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken?: { __typename?: 'Refresh', token: string } | null };

export type SignupMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'Mutation', signup?: { __typename?: 'SignupMutationPayload', token?: string | null, errors?: Array<{ __typename?: 'ErrorType', field: string, messages: Array<string> } | null> | null } | null };

export type GetCalendarEventsQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type GetCalendarEventsQuery = { __typename?: 'Query', calendarEvents?: { __typename?: 'CalendarEventTypeConnection', edges: Array<{ __typename?: 'CalendarEventTypeEdge', node?: { __typename?: 'CalendarEventType', date?: any | null, title?: string | null } | null } | null> } | null, homeworkAssignments?: { __typename?: 'HomeworkAssignmentTypeConnection', edges: Array<{ __typename?: 'HomeworkAssignmentTypeEdge', node?: { __typename?: 'HomeworkAssignmentType', dueDate?: any | null, name?: string | null, course?: { __typename?: 'CourseType', name?: string | null, color: CourseColor } | null } | null } | null> } | null };

export type GetCalendarEventsInfoQueryVariables = Exact<{
  date: Scalars['Date'];
  token: Scalars['String'];
}>;


export type GetCalendarEventsInfoQuery = { __typename?: 'Query', calendarEvents?: { __typename?: 'CalendarEventTypeConnection', edges: Array<{ __typename?: 'CalendarEventTypeEdge', node?: { __typename?: 'CalendarEventType', date?: any | null, time?: any | null, title?: string | null, description?: string | null } | null } | null> } | null, homeworkAssignments?: { __typename?: 'HomeworkAssignmentTypeConnection', edges: Array<{ __typename?: 'HomeworkAssignmentTypeEdge', node?: { __typename?: 'HomeworkAssignmentType', completed: boolean, dueDate?: any | null, dueTime: any, name?: string | null, description?: string | null, link?: string | null, course?: { __typename?: 'CourseType', name?: string | null, color: CourseColor } | null } | null } | null> } | null };

export type GetScheduleQueryVariables = Exact<{
  token: Scalars['String'];
  date: Scalars['Date'];
}>;


export type GetScheduleQuery = { __typename?: 'Query', getSchedule?: Array<{ __typename?: 'CourseTimeType', startTime?: any | null, endTime?: any | null, link?: string | null, zoomPassword?: string | null, location?: string | null, course: { __typename?: 'CourseType', uid?: any | null, name?: string | null, color: CourseColor } } | null> | null, homeworkAssignments?: { __typename?: 'HomeworkAssignmentTypeConnection', edges: Array<{ __typename?: 'HomeworkAssignmentTypeEdge', node?: { __typename?: 'HomeworkAssignmentType', name?: string | null, dueDate?: any | null, dueTime: any, course?: { __typename?: 'CourseType', uid?: any | null } | null } | null } | null> } | null, courseLinks?: { __typename?: 'CourseLinkTypeConnection', edges: Array<{ __typename?: 'CourseLinkTypeEdge', node?: { __typename?: 'CourseLinkType', link?: string | null, title?: string | null, course: { __typename?: 'CourseType', uid?: any | null } } | null } | null> } | null };

export type GetScheduleInfoQueryVariables = Exact<{
  uid: Scalars['UUID'];
  token: Scalars['String'];
}>;


export type GetScheduleInfoQuery = { __typename?: 'Query', courseTimes?: { __typename?: 'CourseTimeTypeConnection', edges: Array<{ __typename?: 'CourseTimeTypeEdge', node?: { __typename?: 'CourseTimeType', uid?: any | null, startTime?: any | null, weekday: string, location?: string | null, link?: string | null, zoomPassword?: string | null, course: { __typename?: 'CourseType', name?: string | null, color: CourseColor } } | null } | null> } | null };

export type GetHomeworkAssignmentsQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type GetHomeworkAssignmentsQuery = { __typename?: 'Query', homeworkAssignments?: { __typename?: 'HomeworkAssignmentTypeConnection', edges: Array<{ __typename?: 'HomeworkAssignmentTypeEdge', node?: { __typename?: 'HomeworkAssignmentType', uid?: any | null, name?: string | null, dueDate?: any | null, dueTime: any, course?: { __typename?: 'CourseType', uid?: any | null, name?: string | null, color: CourseColor } | null } | null } | null> } | null };

export type GetHomeworkAssignmentsInfoQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type GetHomeworkAssignmentsInfoQuery = { __typename?: 'Query', homeworkAssignments?: { __typename?: 'HomeworkAssignmentTypeConnection', edges: Array<{ __typename?: 'HomeworkAssignmentTypeEdge', node?: { __typename?: 'HomeworkAssignmentType', completed: boolean, description?: string | null, dueDate?: any | null, dueTime: any, link?: string | null, name?: string | null, uid?: any | null, course?: { __typename?: 'CourseType', name?: string | null, color: CourseColor } | null } | null } | null> } | null };

export type GetCourseTimesQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type GetCourseTimesQuery = { __typename?: 'Query', courseTimes?: { __typename?: 'CourseTimeTypeConnection', edges: Array<{ __typename?: 'CourseTimeTypeEdge', node?: { __typename?: 'CourseTimeType', uid?: any | null, startTime?: any | null, endTime?: any | null, weekday: string, course: { __typename?: 'CourseType', name?: string | null, color: CourseColor } } | null } | null> } | null };

export type GetCoursesQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type GetCoursesQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseTypeConnection', edges: Array<{ __typename?: 'CourseTypeEdge', node?: { __typename?: 'CourseType', uid?: any | null, name?: string | null, color: CourseColor } | null } | null> } | null };

export type GetCourseQueryVariables = Exact<{
  uid: Scalars['UUID'];
  token: Scalars['String'];
}>;


export type GetCourseQuery = {
  __typename?: 'Query', courses?: { __typename?: 'CourseTypeConnection', edges: Array<{ __typename?: 'CourseTypeEdge', node?: { __typename?: 'CourseType', uid?: any | null, name?: string | null, title?: string | null, teacher?: string | null, color: CourseColor } | null } | null> } | null, courseTimes?: { __typename?: 'CourseTimeTypeConnection', edges: Array<{ __typename?: 'CourseTimeTypeEdge', node?: { __typename?: 'CourseTimeType', startTime?: any | null, endTime?: any | null, weekday: string } | null } | null> } | null, homeworkAssignments?: { __typename?: 'HomeworkAssignmentTypeConnection', edges: Array<{ __typename?: 'HomeworkAssignmentTypeEdge', node?: { __typename?: 'HomeworkAssignmentType', name?: string | null, dueDate?: any | null, dueTime: any } | null } | null> } | null, courseFiles?: { __typename?: 'CourseFileTypeConnection', edges: Array<{ __typename?: 'CourseFileTypeEdge', node?: { __typename?: 'CourseFileType', title?: string | null } | null } | null> } | null, courseLinks?: { __typename?: 'CourseLinkTypeConnection', edges: Array<{ __typename?: 'CourseLinkTypeEdge', node?: { __typename?: 'CourseLinkType', title?: string | null, link?: string | null } | null } | null> } | null
};

export type GetNotesQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type GetNotesQuery = { __typename?: 'Query', notes?: { __typename?: 'NoteTypeConnection', edges: Array<{ __typename?: 'NoteTypeEdge', node?: { __typename?: 'NoteType', uid?: any | null, title: string, content?: string | null, uploaded: any, modified: any, course?: { __typename?: 'CourseType', uid?: any | null } | null } | null } | null> } | null };


export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}

const result: PossibleTypesResultData = {
  'possibleTypes': {
    'Node': [
      'AccountType',
      'CalendarEventType',
      'CourseFileType',
      'CourseLinkType',
      'CourseTimeType',
      'CourseType',
      'HomeworkAssignmentType',
      'NoteType'
    ]
  }
};
export default result;

export const TokenAuthDocument = gql`
  mutation TokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class TokenAuthGQL extends Apollo.Mutation<TokenAuthMutation, TokenAuthMutationVariables> {
  document = TokenAuthDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const VerifyTokenDocument = gql`
  mutation VerifyToken($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class VerifyTokenGQL extends Apollo.Mutation<VerifyTokenMutation, VerifyTokenMutationVariables> {
  document = VerifyTokenDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const RefreshTokenDocument = gql`
  mutation RefreshToken($token: String!) {
    refreshToken(token: $token) {
      token
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenGQL extends Apollo.Mutation<RefreshTokenMutation, RefreshTokenMutationVariables> {
  document = RefreshTokenDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const SignupDocument = gql`
  mutation Signup($firstName: String!, $lastName: String!, $email: String!, $username: String!, $password1: String!, $password2: String!) {
    signup(
      input: {firstName: $firstName, lastName: $lastName, email: $email, username: $username, password1: $password1, password2: $password2}
    ) {
      token
      errors {
        field
        messages
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class SignupGQL extends Apollo.Mutation<SignupMutation, SignupMutationVariables> {
  document = SignupDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const GetCalendarEventsDocument = gql`
  query getCalendarEvents($token: String!) {
    calendarEvents(token: $token) {
      edges {
        node {
          date
          title
        }
      }
    }
    homeworkAssignments(token: $token) {
      edges {
        node {
          dueDate
          name
          course {
            name
            color
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetCalendarEventsGQL extends Apollo.Query<GetCalendarEventsQuery, GetCalendarEventsQueryVariables> {
  document = GetCalendarEventsDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const GetCalendarEventsInfoDocument = gql`
  query getCalendarEventsInfo($date: Date!, $token: String!) {
    calendarEvents(date: $date, token: $token) {
      edges {
        node {
          date
          time
          title
          description
        }
      }
    }
    homeworkAssignments(dueDate: $date, token: $token) {
      edges {
        node {
          completed
          dueDate
          dueTime
          name
          description
          link
          course {
            name
            color
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetCalendarEventsInfoGQL extends Apollo.Query<GetCalendarEventsInfoQuery, GetCalendarEventsInfoQueryVariables> {
  document = GetCalendarEventsInfoDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const GetScheduleDocument = gql`
  query getSchedule($token: String!, $date: Date!) {
    getSchedule(date: $date, token: $token) {
      course {
        uid
        name
        color
      }
      startTime
      endTime
      link
      zoomPassword
      location
    }
    homeworkAssignments(completed: false, token: $token) {
      edges {
        node {
          name
          dueDate
          dueTime
          course {
            uid
          }
        }
      }
    }
    courseLinks(token: $token) {
      edges {
        node {
          course {
            uid
          }
          link
          title
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetScheduleGQL extends Apollo.Query<GetScheduleQuery, GetScheduleQueryVariables> {
  document = GetScheduleDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const GetScheduleInfoDocument = gql`
  query getScheduleInfo($uid: UUID!, $token: String!) {
    courseTimes(uid: $uid, token: $token) {
      edges {
        node {
          uid
          course {
            name
            color
          }
          startTime
          weekday
          location
          link
          zoomPassword
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetScheduleInfoGQL extends Apollo.Query<GetScheduleInfoQuery, GetScheduleInfoQueryVariables> {
  document = GetScheduleInfoDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const GetHomeworkAssignmentsDocument = gql`
  query getHomeworkAssignments($token: String!) {
    homeworkAssignments(completed: false, token: $token) {
      edges {
        node {
          uid
          name
          dueDate
          dueTime
          course {
            uid
            name
            color
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetHomeworkAssignmentsGQL extends Apollo.Query<GetHomeworkAssignmentsQuery, GetHomeworkAssignmentsQueryVariables> {
  document = GetHomeworkAssignmentsDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const GetHomeworkAssignmentsInfoDocument = gql`
  query getHomeworkAssignmentsInfo($token: String!) {
    homeworkAssignments(token: $token) {
      edges {
        node {
          completed
          course {
            name
            color
          }
          description
          dueDate
          dueTime
          link
          name
          uid
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetHomeworkAssignmentsInfoGQL extends Apollo.Query<GetHomeworkAssignmentsInfoQuery, GetHomeworkAssignmentsInfoQueryVariables> {
  document = GetHomeworkAssignmentsInfoDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const GetCourseTimesDocument = gql`
  query getCourseTimes($token: String!) {
    courseTimes(token: $token) {
      edges {
        node {
          uid
          course {
            name
            color
          }
          startTime
          endTime
          weekday
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetCourseTimesGQL extends Apollo.Query<GetCourseTimesQuery, GetCourseTimesQueryVariables> {
  document = GetCourseTimesDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const GetCoursesDocument = gql`
  query getCourses($token: String!) {
    courses(token: $token) {
      edges {
        node {
          uid
          name
          color
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetCoursesGQL extends Apollo.Query<GetCoursesQuery, GetCoursesQueryVariables> {
  document = GetCoursesDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const GetCourseDocument = gql`
  query getCourse($uid: UUID!, $token: String!) {
    courses(uid: $uid, token: $token) {
      edges {
        node {
          uid
          name
          title
          teacher
          color
        }
      }
    }
    courseTimes(course_Uid: $uid, token: $token) {
      edges {
        node {
          startTime
          endTime
          weekday
        }
      }
    }
    homeworkAssignments(course_Uid: $uid, token: $token) {
      edges {
        node {
          name
          dueDate
          dueTime
        }
      }
    }
    courseFiles(course_Uid: $uid, token: $token) {
      edges {
        node {
          title
        }
      }
    }
    courseLinks(course_Uid: $uid, token: $token) {
      edges {
        node {
          title
          link
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetCourseGQL extends Apollo.Query<GetCourseQuery, GetCourseQueryVariables> {
  document = GetCourseDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const GetNotesDocument = gql`
  query getNotes($token: String!) {
    notes(token: $token) {
      edges {
        node {
          uid
          title
          content
          uploaded
          modified
          course {
            uid
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetNotesGQL extends Apollo.Query<GetNotesQuery, GetNotesQueryVariables> {
  document = GetNotesDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
