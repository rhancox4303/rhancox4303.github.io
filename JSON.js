/**
    Name:       Riley Hancox
    Student ID: 000397119
    Project:    Hamilton Places of Worship -Release
    Course:     COMP 10133
    Instructor: Kevin Browne

    File:       JSON.js
    File Date:  March-1-â€Ž18
    CSunix:     https://csunix.mohawkcollege.ca/~000397119/private/10133/release/JSON.js
    
I, Riley Hancox, 000397119 certify that this material is my original work. No other
person's work has been used without due acknowledgement.
**/

/**
 * The array pow contains the places of worship JSON data
 * 
 * @type Array
 */
var pow = [
  {
    "ID": 2,
    "NAME": "St. Margaret Mary Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "20 IDLEWOOD AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.82827348,
    "LATITUDE": 43.2240213,
    "WEBSITE": "https://www.stmargaretmaryparish.ca/"
  },
  {

    "ID": 3,
    "NAME": "Faith Gospel Church",
    "DENOMINATION": "Associated Gospel Churches",
    "ADDRESS": "518 COCHRANE RD",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80540239,
    "LATITUDE": 43.22532812,
    "WEBSITE": "http://faithgospelchurch.ca/"
  },
  {
    "ID": 4,
    "NAME": "Rymal Road Community Church",
    "DENOMINATION": "Free Methodist",
    "ADDRESS": "1967 RYMAL RD",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.80474038,
    "LATITUDE": 43.218482,
    "WEBSITE": "http://rymalroad.org/"
  },
  {
    "ID": 7,
    "NAME": "New Apostolic Church",
    "DENOMINATION": "Apostolic",
    "ADDRESS": "922 UPPER SHERMAN AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.8537787,
    "LATITUDE": 43.2186771,
    "WEBSITE": "http://www.naccanada.org/"
  },
  {
    "ID": 8,
    "NAME": "Church Of God In Hamilton",
    "DENOMINATION": "Pentecostal",
    "ADDRESS": "186 ANNABELLE ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.89518654,
    "LATITUDE": 43.2141521,
    "WEBSITE": "http://www.churchofgodhamilton.ca/"
  },
  {
    "ID": 9,
    "NAME": "Mountain Church Of The Nazarene",
    "DENOMINATION": "Church of the Nazarene",
    "ADDRESS": "910 UPPER SHERMAN AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.853324,
    "LATITUDE": 43.2192324,
    "WEBSITE": "None"
  },
  {
    "ID": 10,
    "NAME": "Templo Nueva Vida",
    "DENOMINATION": "Pentecostal Assemblies of Canada",
    "ADDRESS": "279 GROSVENOR AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.81812207,
    "LATITUDE": 43.25024891,
    "WEBSITE": "http://www.templonuevavida.ca/"
  },
  {
    "ID": 11,
    "NAME": "New Vision United Church",
    "DENOMINATION": "United",
    "ADDRESS": "24 MAIN ST W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87052725,
    "LATITUDE": 43.25588877,
    "WEBSITE": "http://newvisionunited.org/"
  },
  {
    "ID": 13,
    "NAME": "Jesus First Assembly (Peoples Church)",
    "DENOMINATION": "Pentecostal Assemblies of Canada",
    "ADDRESS": "510 MOHAWK RD W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.90596864,
    "LATITUDE": 43.23269163,
    "WEBSITE": "None"
  },
  {
    "ID": 14,
    "NAME": "Hamilton Korean Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "200 SANFORD AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.84320025,
    "LATITUDE": 43.25812793,
    "WEBSITE": "None"
  },
  {

    "ID": 15,
    "NAME": "Parkview Church",
    "DENOMINATION": "Non-denominational",
    "ADDRESS": "1136 WEST 5TH ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.89591251,
    "LATITUDE": 43.20851372,
    "WEBSITE": "http://www.parkviewchurchhamilton.ca/"
  },
  {

    "ID": 16,
    "NAME": "Ridgecrest Southern Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "582 BARTON ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.8410474,
    "LATITUDE": 43.2574658,
    "WEBSITE": "http://www.ridgecrestbaptistchurch.net/"
  },
  {

    "ID": 17,
    "NAME": "Canadian Martyrs Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "38 EMERSON",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.9202806,
    "LATITUDE": 43.2569814,
    "WEBSITE": "None"
  },
  {

    "ID": 18,
    "NAME": "Jehovah's Witnesses (Stone Church)",
    "DENOMINATION": "Jehovah's Witnesses",
    "ADDRESS": "277 STONE CHURCH RD W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.902172,
    "LATITUDE": 43.213944,
    "WEBSITE": "None"
  },
  {
    "ID": 19,
    "NAME": "John Calvin Hungarian Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "121 BIRCH AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.84080494,
    "LATITUDE": 43.25668042,
    "WEBSITE": "None"
  },
  {
    "ID": 20,
    "NAME": "St. Ann's Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "120 SHERMAN AV N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.836014,
    "LATITUDE": 43.255942,
    "WEBSITE": "http://stannhamilton.church/"
  },
  {

    "ID": 21,
    "NAME": "St. Stanislaus Roman Catholic Polish Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "8 ST ANN ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.834980,
    "LATITUDE": 43.255753,
    "WEBSITE": "http://www.stankostka.ca/"
  },
  {

    "ID": 22,
    "NAME": "Church Of The Holy Spirit",
    "DENOMINATION": "Ukranian Catholic",
    "ADDRESS": "15 ST. OLGA",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.83394371,
    "LATITUDE": 43.25549219,
    "WEBSITE": "https://holyspirit.hsucc.ca/"
  },
  {
    "ID": 23,
    "NAME": "West Highland Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "1605 GARTH ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.90985062,
    "LATITUDE": 43.21058301,
    "WEBSITE": "http://www.westhighland.org/"
  },
  {
    "ID": 24,
    "NAME": "Eternal Spring United Church",
    "DENOMINATION": "United",
    "ADDRESS": "99 NORTH OVAL",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.90703,
    "LATITUDE": 43.262085,
    "WEBSITE": "None"
  },
  {
    "ID": 25,
    "NAME": "Rehoboth United Reformed Church",
    "DENOMINATION": "Reformed",
    "ADDRESS": "77 GLANCASTER RD",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.926742,
    "LATITUDE": 43.208741,
    "WEBSITE": "http://rehobothurc.ca/"
  },
  {
    "ID": 26,
    "NAME": "Living Hope Christian Assembly",
    "DENOMINATION": "Non-denominational",
    "ADDRESS": "1045 GARTH ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.902582,
    "LATITUDE": 43.227488,
    "WEBSITE": "http://www.findhope.tv/"
  },
  {
    "ID": 27,
    "NAME": "Church Of God Of Prophecy",
    "DENOMINATION": "Other",
    "ADDRESS": "64 WENTWORTH ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.84750493,
    "LATITUDE": 43.25455524,
    "WEBSITE": "http://www.cogop.ca/local-churches/hamilton-cogop"
  },
  {
//Valid
    "ID": 28,
    "NAME": "Binkley United Church",
    "DENOMINATION": "United",
    "ADDRESS": "1570 MAIN ST W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.92752185,
    "LATITUDE": 43.25779463,
    "WEBSITE": "http://binkleyunitedchurch.org/"
  },
    //Valid
  {
    "ID": 30,
    "NAME": "St. Stephen's Hungarian Roman Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "130 BARTON ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86024429,
    "LATITUDE": 43.26243251,
    "WEBSITE": "http://ststephenhamilton.church/"
  },
  {
    //Valid
    "ID": 32,
    "NAME": "Cumberland Christian Assembly",
    "DENOMINATION": "Pentecostal Assemblies of Canada",
    "ADDRESS": "240 CUMBERLAND AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.841558,
    "LATITUDE": 43.243374,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 33,
    "NAME": "Little Bethal Community Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "320 PALING AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.79782932,
    "LATITUDE": 43.24644902,
    "WEBSITE": "http://www.littlebethel.ca/"
  },
  {
    //Valid
    "ID": 34,
    "NAME": "Redeemer Lutheran Church",
    "DENOMINATION": "Lutheran",
    "ADDRESS": "15 WEXFORD AVE S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.81277429,
    "LATITUDE": 43.24051486,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 35,
    "NAME": "St. Mark's Syrian Orthodox Church",
    "DENOMINATION": "Orthodox",
    "ADDRESS": "1202 DUNSMURE RD",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.78927663,
    "LATITUDE": 43.23719034,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 36,
    "NAME": "The Apostolic Holiness Church",
    "DENOMINATION": "Apostolic",
    "ADDRESS": "185 OTTAWA ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.81791081,
    "LATITUDE": 43.24781521,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 37,
    "NAME": "Faith Church Of Jesus Christ",
    "DENOMINATION": "Church of Jesus Christ",
    "ADDRESS": "1855 MAIN ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.78976732,
    "LATITUDE": 43.23603214,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 38,
    "NAME": "Annunciation Of Our Lord",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "280 LIMERIDGE RD W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.89793357,
    "LATITUDE": 43.22369974,
    "WEBSITE": "http://www.annunciationparish.info/"
  },
  {
    //Valid
    "ID": 39,
    "NAME": "Compass Point Bible Church",
    "DENOMINATION": "Associated Gospel Churches",
    "ADDRESS": "80 ELLIS AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80978275,
    "LATITUDE": 43.24911575,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 40,
    "NAME": "Incarnation Of Our Blessed Lord",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "400 POTTRUFF RD N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.770947,
    "LATITUDE": 43.238836,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 41,
    "NAME": "Church Of Jesus Christ Of Latter-Day Saints",
    "DENOMINATION": "Jesus Christ of Latter-Day Saints",
    "ADDRESS": "345 HWY 8",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.72752132,
    "LATITUDE": 43.22009292,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 42,
    "NAME": "Church Of God 7th Day",
    "DENOMINATION": "Other",
    "ADDRESS": "140 HUNTER ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86494193,
    "LATITUDE": 43.25195683,
    "WEBSITE": "https://cog7.org/"
  },
  {
    //Valid
    "ID": 43,
    "NAME": "Church Of Jesus Christ Of Latter-Day Saints",
    "DENOMINATION": "Jesus Christ of Latter-Day Saints",
    "ADDRESS": "701 STONE CHURCH RD E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85850061,
    "LATITUDE": 43.20391397,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 44,
    "NAME": "Wesley Urban Ministries Inc.",
    "DENOMINATION": "Other",
    "ADDRESS": "195 FERGUSON AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.859146,
    "LATITUDE": 43.260772,
    "WEBSITE": "http://wesley.ca/"
  },
  {
    //Valid
    "ID": 45,
    "NAME": "Emmanuel United Church",
    "DENOMINATION": "United",
    "ADDRESS": "871 UPPER OTTAWA ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.83331939,
    "LATITUDE": 43.21420876,
    "WEBSITE": "https://www.emmanueluc.com/"
  },
  {
    //Valid
    "ID": 46,
    "NAME": "Southgate Presbyterian",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "120 CLARENDON",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.876591,
    "LATITUDE": 43.23184246,
    "WEBSITE": "http://www.thesouthgatechurch.ca/"
  },
  {
    //Valid
    "ID": 47,
    "NAME": "Eastgate Christian Fellowship",
    "DENOMINATION": "Other",
    "ADDRESS": "105 NASH RD S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.77511633,
    "LATITUDE": 43.2258647,
    "WEBSITE": "http://www.hcfchurch.ca/"
  },
  {
    //Valid
    "ID": 48,
    "NAME": "Trinity Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "720 NINTH AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.83894853,
    "LATITUDE": 43.22283448,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 49,
    "NAME": "Ryerson United Church",
    "DENOMINATION": "United",
    "ADDRESS": "842 MAIN ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.83630817,
    "LATITUDE": 43.24635937,
    "WEBSITE": "http://ryersonunitedhamilton.com/"
  },
  {
    //Valid
    "ID": 50,
    "NAME": "Panagia Greek Orthodox Church Of The Dormition Of The Theotokos",
    "DENOMINATION": "Orthodox",
    "ADDRESS": "233 EAST 15TH ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86209254,
    "LATITUDE": 43.23610997,
    "WEBSITE": "http://www.panagiahamilton.ca/"
  },
  {
    //Valid
    "ID": 51,
    "NAME": "Mountsberg Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "241 CAMPBELLVILLE RD",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.044319,
    "LATITUDE": 43.434790,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 52,
    "NAME": "St. Mary's Anglican Church",
    "DENOMINATION": "Anglican",
    "ADDRESS": "1831 KING ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80960563,
    "LATITUDE": 43.23225686,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 53,
    "NAME": "Church of the Resurrection",
    "DENOMINATION": "Anglican",
    "ADDRESS": "435 MOHAWK RD W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.90091496,
    "LATITUDE": 43.23073102,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 54,
    "NAME": "Heritage Green Seventh-Day Adventist Church",
    "DENOMINATION": "Seventh Day Adventist",
    "ADDRESS": "349 ISAAC BROCK DR",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.78978025,
    "LATITUDE": 43.19306507,
    "WEBSITE": "http://www.heritagegreenadventist.org/"
  },
  {
    //Valid
    "ID": 55,
    "NAME": "Holy Cross Croatian Parish Hall",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "1883 KING ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80808317,
    "LATITUDE": 43.23210918,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 57,
    "NAME": "Hess St Baptist Mission",
    "DENOMINATION": "Baptist",
    "ADDRESS": "179 HESS ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.875000,
    "LATITUDE": 43.264541,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 58,
    "NAME": "St. Shmooni Church",
    "DENOMINATION": "Other",
    "ADDRESS": "100 CLINTON ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.831406,
    "LATITUDE": 43.256961,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 59,
    "NAME": "Faith Lutheran Church",
    "DENOMINATION": "Lutheran",
    "ADDRESS": "1907 KING ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80705079,
    "LATITUDE": 43.23191392,
    "WEBSITE": "http://faithlutheranhamilton.ca/"
  },
  {
    //Valid
    "ID": 60,
    "NAME": "Pioneer Memorial United Church",
    "DENOMINATION": "United",
    "ADDRESS": "1974 KING ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80488544,
    "LATITUDE": 43.23072638,
    "WEBSITE": "http://www.pioneermemorialunited.com/"
  },
  {
    //Valid
    "ID": 62,
    "NAME": "Serbian Orthodox Saborni Temple",
    "DENOMINATION": "Orthodox",
    "ADDRESS": "149 NASH RD S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.7753823,
    "LATITUDE": 43.22378595,
    "WEBSITE": "http://snsn.ca/"
  },
  {
    //Valid
    "ID": 63,
    "NAME": "Westdale United Church",
    "DENOMINATION": "United",
    "ADDRESS": "99 NORTH OVAL",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.90690914,
    "LATITUDE": 43.26209522,
    "WEBSITE": "http://www.westdaleunited.ca/"
  },
  {
    //Valid
    "ID": 65,
    "NAME": "Church Of Christ",
    "DENOMINATION": "Non-denominational",
    "ADDRESS": "321 EAST 27TH ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85015907,
    "LATITUDE": 43.23037244,
    "WEBSITE": "http://hamiltonchurchofchrist.ca/"
  },
  {
    //Valid
    "ID": 66,
    "NAME": "Our Lady Of Assumption Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "63 REGIONAL RD 20",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.77035527,
    "LATITUDE": 43.17245409,
    "WEBSITE": "https://ourladyoftheassumptionparish.org/"
  },
  {
    //Valid
    "ID": 67,
    "NAME": "The Salvation Army - Hamilton Temple Corps",
    "DENOMINATION": "Salvation Army",
    "ADDRESS": "28 REBECCA ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86730725,
    "LATITUDE": 43.25796166,
    "WEBSITE": "https://www.salvationarmy.ca/"
  },
  {
    //Valid
    "ID": 68,
    "NAME": "Barton Stone United Church",
    "DENOMINATION": "United",
    "ADDRESS": "21 STONE CHURCH RD W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.890493,
    "LATITUDE": 43.211089,
    "WEBSITE": "http://www.bartonstoneunitedchurch.ca/"
  },
  {
    //Valid
    "ID": 69,
    "NAME": "First Hamilton Christian Reformed Church",
    "DENOMINATION": "Christian Reformed",
    "ADDRESS": "181 CHARLTON AVE W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88094436,
    "LATITUDE": 43.25159683,
    "WEBSITE": "http://www.firsthamilton.ca/"
  },
  {
    //Valid
    "ID": 71,
    "NAME": "Mission Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "96 NORTH OVAL",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.9075977,
    "LATITUDE": 43.2621538,
    "WEBSITE": "http://www.missionbaptisthamilton.ca/"
  },
  {
    //Valid
    "ID": 72,
    "NAME": "St. Paul's Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "70 JAMES ST S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87047614,
    "LATITUDE": 43.2548413,
    "WEBSITE": "http://stpaulshamilton.ca/"
  },
  {
    //Valid
    "ID": 75,
    "NAME": "Paroisse Notre-Dame Du Perpetuel Secours",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "132 BLAKE ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.84085347,
    "LATITUDE": 43.24370369,
    "WEBSITE": "http://www.paroissenotredame.com/"
  },
  {
    //Valid
    "ID": 76,
    "NAME": "St. Vladimir Ukrainian Orthodox Church",
    "DENOMINATION": "Ukrainian Orthodox",
    "ADDRESS": "855 BARTON ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.82764663,
    "LATITUDE": 43.25463266,
    "WEBSITE": "http://www.stvladshamilton.com/"
  },
  {
    //Valid
    "ID": 77,
    "NAME": "Lifepoint United Pentecostal Church",
    "DENOMINATION": "Pentecostal",
    "ADDRESS": "887 KING ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.83974339,
    "LATITUDE": 43.25175271,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 78,
    "NAME": "Hamilton Christian Fellowship",
    "DENOMINATION": "Non-denominational",
    "ADDRESS": "137 STRATHCONA AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88377897,
    "LATITUDE": 43.26573847,
    "WEBSITE": "http://www.hcfchurch.ca/"
  },
  {
    //Valid
    "ID": 79,
    "NAME": "Pilgrim Lutheran Church",
    "DENOMINATION": "Lutheran",
    "ADDRESS": "1054 UPPER SHERMAN AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85552991,
    "LATITUDE": 43.21463596,
    "WEBSITE": "http://www.pilgrimlutheranchurch.ca/"
  },
  {
    //Valid
    "ID": 80,
    "NAME": "New Westminster Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "1025 KING ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.83266077,
    "LATITUDE": 43.25051311,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 81,
    "NAME": "Saint Peter By The Park",
    "DENOMINATION": "Apostolic",
    "ADDRESS": "55 VICTORIA AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85644975,
    "LATITUDE": 43.25490435,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 82,
    "NAME": "Bethel Baptist Church Of Ancaster",
    "DENOMINATION": "Baptist",
    "ADDRESS": "237 MANITOU WAY",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.990662,
    "LATITUDE": 43.210875,
    "WEBSITE": "None"
  },
  {
    //Valids
    "ID": 83,
    "NAME": "Delta United Church",
    "DENOMINATION": "United",
    "ADDRESS": "47 OTTAWA ST S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.81978012,
    "LATITUDE": 43.24108964,
    "WEBSITE": "http://www.deltaunitedchurch.ca/"
  },
  {
    //Valid
    "ID": 84,
    "NAME": "Macnab Street Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "116 MACNAB ST S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87244047,
    "LATITUDE": 43.25364101,
    "WEBSITE": "http://macnabpresbyterian.ca/"
  },
  {
    //Valid
    "ID": 85,
    "NAME": "St. Mary's Roman Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "146 PARK ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.869270,
    "LATITUDE": 43.263054,
    "WEBSITE": "http://www.stmaryshamilton.org.au/"
  },
  {
    //Valid
    "ID": 87,
    "NAME": "St. Gregory The Great Church (Slovenian)",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "125 CENTENNIAL PKY N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.762338,
    "LATITUDE": 43.232887,
    "WEBSITE": "http://www.carantha.com/st__gregory_the_great_slovenian_church.htm"
  },
  {
    //Valid
    "ID": 88,
    "NAME": "Hamilton Mennonite Church",
    "DENOMINATION": "Mennonite Brethren",
    "ADDRESS": "143 LOWER HORNING RD",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.93370097,
    "LATITUDE": 43.24975637,
    "WEBSITE": "http://www.hmc.on.ca/"
  },
  {
    //Valid
    "ID": 89,
    "NAME": "St. Cyril And Methodius Slovak Roman Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "204 PARK ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86908387,
    "LATITUDE": 43.26367701,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 90,
    "NAME": "Transfiguration Lutheran Church",
    "DENOMINATION": "Lutheran",
    "ADDRESS": "232 FENNELL AVE E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.8691473,
    "LATITUDE": 43.23517601,
    "WEBSITE": "http://transfigurationlutheran.ca/"
  },
  {
    //Valid
    "ID": 91,
    "NAME": "St. John The Evangelist Anglican Church",
    "DENOMINATION": "Anglican",
    "ADDRESS": "320 CHARLTON AVE W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88678526,
    "LATITUDE": 43.25356451,
    "WEBSITE": "http://www.rockonlocke.ca/"
  },
  {
    //Valid
    "ID": 93,
    "NAME": "Noah's Ark Children's Centre",
    "DENOMINATION": "Non-denominational",
    "ADDRESS": "118 LIMERIDGE RD E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88014738,
    "LATITUDE": 43.21828638,
    "WEBSITE": "http://noahskids.ca/mountain-view-christian-church/"
  },
  {
    //Valid
    "ID": 94,
    "NAME": "West Avenue Christadelphian Church",
    "DENOMINATION": "Christadelphian",
    "ADDRESS": "20 WEST AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85749411,
    "LATITUDE": 43.25383532,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 95,
    "NAME": "Quakers The Religious Society Of Friends",
    "DENOMINATION": "Religious Society of Friends",
    "ADDRESS": "7 BUTTY PL",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.93362761,
    "LATITUDE": 43.25097343,
    "WEBSITE": "http://hamiltonquakers.ca/"
  },
  {
    //Valid
    "ID": 96,
    "NAME": "Kingdom Hall of Jehovah’s Witnesses",
    "DENOMINATION": "Jehovah's Witnesses",
    "ADDRESS": "57 DELAWARE AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.84744977,
    "LATITUDE": 43.24772759,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 97,
    "NAME": "Elliott Heights Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "1300 FENNELL AVE E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.81871216,
    "LATITUDE": 43.22278433,
    "WEBSITE": "http://www.elliottheights.ca/"
  },
  {
    //Valid
    "ID": 98,
    "NAME": "St. Eugene's Parish",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "232 QUEENSTON RD",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.793391,
    "LATITUDE": 43.234305,
    "WEBSITE": "http://steugenesparish.ca/"
  },
  {
    //Valid
    "ID": 99,
    "NAME": "Slovak Byzantine Catholic Church",
    "DENOMINATION": "Slovak",
    "ADDRESS": "1406 BARTON ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80272681,
    "LATITUDE": 43.2481828,
    "WEBSITE": "http://church.assumptionslovakhall.ca/"
  },
  {
    //Valid
    "ID": 100,
    "NAME": "Westmount Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "207 WEST 19TH ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.89913434,
    "LATITUDE": 43.23348572,
    "WEBSITE": "http://www.westmountbaptist.org/"
  },
  {
    //Valid
    "ID": 101,
    "NAME": "Community Beth Eden Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "541 JAMES ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86307917,
    "LATITUDE": 43.2712298,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 102,
    "NAME": "St. John The Baptist Roman Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "128 EDGEMONT ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.81993572,
    "LATITUDE": 43.23826326,
    "WEBSITE": "http://www.stjohnthebaptisthamilton.com/"
  },
  {
    //Valids
    "ID": 103,
    "NAME": "Christ Evangelical Lutheran Lativian Church",
    "DENOMINATION": "Lutheran",
    "ADDRESS": "18 VICTORIA AVE S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85729455,
    "LATITUDE": 43.25276727,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 104,
    "NAME": "Laidlaw United Church",
    "DENOMINATION": "United",
    "ADDRESS": "155 OTTAWA ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.81817695,
    "LATITUDE": 43.24728949,
    "WEBSITE": "https://www.laidlawchurch.ca/"
  },
  {
    //Valid
    "ID": 105,
    "NAME": "St. Patrick's Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "420 KING ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85647233,
    "LATITUDE": 43.25267766,
    "WEBSITE": "http://www.stpatrickshamilton.ca/"
  },
  {
    //Valid
    "ID": 106,
    "NAME": "All Souls Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "21 BARTON ST W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86655347,
    "LATITUDE": 43.26410717,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 107,
    "NAME": "Church Of Christ (Stoney Creek)",
    "DENOMINATION": "Non-denominational",
    "ADDRESS": "105 KING ST E",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.75108738,
    "LATITUDE": 43.21738438,
    "WEBSITE": "http://patchworkinthecreek.com/"
  },
  {
    //Valid
    "ID": 108,
    "NAME": "Sikh Society Hamilton",
    "DENOMINATION": "Sikh",
    "ADDRESS": "86 COVINGTON ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.75523045,
    "LATITUDE": 43.23909585,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 109,
    "NAME": "St. Demetrios Greek Orthodox Church",
    "DENOMINATION": "Greek Orthodox",
    "ADDRESS": "22 HEAD ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88574314,
    "LATITUDE": 43.26314541,
    "WEBSITE": "http://www.stdemetrios.ca/"
  },
  {
    //Valid
    "ID": 110,
    "NAME": "Skyway Chapel",
    "DENOMINATION": "Anglican",
    "ADDRESS": "482 HWY 8",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.71675323,
    "LATITUDE": 43.21608561,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 111,
    "NAME": "St. Naum Of Ohrid Macedonian Orthodox Church",
    "DENOMINATION": "Orthodox",
    "ADDRESS": "235 KENSINGTON AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.82112723,
    "LATITUDE": 43.25087333,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 112,
    "NAME": "St. Peter And Paul Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "50 BRUCEDALE AVE E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87483096,
    "LATITUDE": 43.23844841,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 113,
    "NAME": "Olivet United Church",
    "DENOMINATION": "United",
    "ADDRESS": "40 EMPRESS AV",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87474567,
    "LATITUDE": 43.23987705,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 114,
    "NAME": "Jehovah's Witnesses (Christian Science Society)",
    "DENOMINATION": "Jehovah's Witnesses",
    "ADDRESS": "245 MILL ST",
    "COMMUNITY": "DUNDAS",
    "LONGITUDE": -79.96631076,
    "LATITUDE": 43.26627572,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 115,
    "NAME": "St. Peter Yu Roman Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "6 HEATH ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.77955795,
    "LATITUDE": 43.2382029,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 116,
    "NAME": "St. Cuthbert's Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "2 BOND ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.90136867,
    "LATITUDE": 43.26339143,
    "WEBSITE": "https://www.saintcs.com/"
  },
  {
    //Valid
    "ID": 117,
    "NAME": "St. Francis Xavier Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "304 HWY 8",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.73116875,
    "LATITUDE": 43.21950654,
    "WEBSITE": "https://www.saintfxstoneycreek.com/"
  },
  {
    //Valid
    "ID": 118,
    "NAME": "Christ Church Unity",
    "DENOMINATION": "Unity",
    "ADDRESS": "21 ROSEDENE AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87434779,
    "LATITUDE": 43.24453206,
    "WEBSITE": "http://www.unityhamilton.com/"
  },
  {
    //Valid
    "ID": 119,
    "NAME": "Holy Trinity Anglican Church",
    "DENOMINATION": "Anglican",
    "ADDRESS": "120 FENNELL AVE E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87365808,
    "LATITUDE": 43.23610134,
    "WEBSITE": "https://niagaraanglican.ca/parish/holy-trinity-hamilton"
  },
  {
    //Valid
    "ID": 120,
    "NAME": "Central Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "165 CHARLTON AV W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87947783,
    "LATITUDE": 43.25124526,
    "WEBSITE": "https://www.cpchamilton.ca/"
  },
  {
    //Valid
    "ID": 121,
    "NAME": "St. Mina's Coptic Orthodox Church",
    "DENOMINATION": "Orthodox",
    "ADDRESS": "480 MELVIN AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.77621488,
    "LATITUDE": 43.24004698,
    "WEBSITE": "http://www.stminahamilton.ca/"
  },
  {
    //Valid
    "ID": 122,
    "NAME": "Hamilton East Seventh-Day Adventist Church",
    "DENOMINATION": "Seventh Day Adventist",
    "ADDRESS": "203 BELL AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80321371,
    "LATITUDE": 43.23242365,
    "WEBSITE": "http://hamiltoneaston.adventistchurch.org/"
  },
  {
    //Valid
    "ID": 123,
    "NAME": "Generation Now Ministries",
    "DENOMINATION": "Non-denominational",
    "ADDRESS": "177 SHERMAN AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.83625065,
    "LATITUDE": 43.25726801,
    "WEBSITE": "None"
  },
  {
    "ID": 124,
    "NAME": "St. Catherine of Siena Roman Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "1694 UPPER JAMES ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.89555347,
    "LATITUDE": 43.19992017,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 125,
    "NAME": "Westside Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "261 WHITNEY AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.92963514,
    "LATITUDE": 43.25245571,
    "WEBSITE": "https://www.wbchamilton.com/"
  },
  {
    //Valid
    "ID": 126,
    "NAME": "Trinity United Church",
    "DENOMINATION": "United",
    "ADDRESS": "10 TRINITY CHURCH RD",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.82018765,
    "LATITUDE": 43.18266773,
    "WEBSITE": "https://www.trinityunitedgrimsby.ca/"
  },
  {
    //Valid
    "ID": 127,
    "NAME": "Case United Church",
    "DENOMINATION": "United",
    "ADDRESS": "6180 WHITE CHURCH RD",
    "COMMUNITY": "GLANBROOK",
    "LONGITUDE": -79.8712355,
    "LATITUDE": 43.13381729,
    "WEBSITE": "http://caseunitedchurch.ca/"
  },
  {
    //Valid
    "ID": 128,
    "NAME": "Grace Lutheran Church",
    "DENOMINATION": "Lutheran",
    "ADDRESS": "1107 MAIN ST W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.91003407,
    "LATITUDE": 43.25788567,
    "WEBSITE": "http://glc.ca/"
  },
  {
    //Valid
    "ID": 129,
    "NAME": "New Testament Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "21 JAMESTON AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88557584,
    "LATITUDE": 43.22278816,
    "WEBSITE": "http://www.ntbch.ca/"
  },
  {
    //Valid
    "ID": 130,
    "NAME": "Hamilton Buddhist Temple",
    "DENOMINATION": "Buddhism",
    "ADDRESS": "671 TATE AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.77778456,
    "LATITUDE": 43.25294345,
    "WEBSITE": "https://hamiltonbuddhisttemple.wordpress.com/"
  },
  {
    //Valid
    "ID": 131,
    "NAME": "Tapleytown United Church",
    "DENOMINATION": "United",
    "ADDRESS": "413 MUD ST E",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.73084261,
    "LATITUDE": 43.18129267,
    "WEBSITE": "http://fskt.ca/"
  },
  {
    //Valid
    "ID": 132,
    "NAME": "Emerald Full Gospel Temple",
    "DENOMINATION": "Full Gospel",
    "ADDRESS": "73 EMERALD ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85361866,
    "LATITUDE": 43.25505169,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 133,
    "NAME": "Stanley Avenue Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "115 STANLEY AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88792795,
    "LATITUDE": 43.25150917,
    "WEBSITE": "http://stanleyavenue.ca/"
  },
  {
    //Valid
    "ID": 135,
    "NAME": "St. Alban The Martyr Anglican Church",
    "DENOMINATION": "Anglican",
    "ADDRESS": "200 COPE ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80281446,
    "LATITUDE": 43.24467634,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 136,
    "NAME": "East Hamilton Spiritual Church",
    "DENOMINATION": "Spiritualists",
    "ADDRESS": "83 OTTAWA ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.8190901,
    "LATITUDE": 43.24501906,
    "WEBSITE": "http://www.easthamiltonspiritualchurch.net/"
  },
  {
    //Valid
    "ID": 137,
    "NAME": "St. David's Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "474 WENTWORTH ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.842765,
    "LATITUDE": 43.265472,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 138,
    "NAME": "Jehovah's Witnesses (Tapelytown Congregation)",
    "DENOMINATION": "Jehovah's Witnesses",
    "ADDRESS": "218 MUD ST",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.74932507,
    "LATITUDE": 43.18507684,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 139,
    "NAME": "Winona Gospel Church",
    "DENOMINATION": "Other",
    "ADDRESS": "218 GLOVER RD",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.68124449,
    "LATITUDE": 43.21208917,
    "WEBSITE": "http://www.winonagospelchurch.org/"
  },
  {
    //Valid
    "ID": 140,
    "NAME": "Ukrainian Catholic Church of the Resurrection",
    "DENOMINATION": "Ukranian Catholic",
    "ADDRESS": "18 MALL RD",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86131248,
    "LATITUDE": 43.2229111,
    "WEBSITE": "http://www.angmtnparishes.on.ca/"
  },
  {
    //Valid
    "ID": 141,
    "NAME": "Paramount Drive Alliance Church",
    "DENOMINATION": "Alliance",
    "ADDRESS": "1035 PARAMOUNT DR",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.79644681,
    "LATITUDE": 43.19732259,
    "WEBSITE": "http://pdacfamily.com/"
  },
  {
    //Valid
    "ID": 143,
    "NAME": "First Church Of The Nazarene",
    "DENOMINATION": "Church of the Nazarene",
    "ADDRESS": "92 OTTAWA ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.81832326,
    "LATITUDE": 43.2452268,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 144,
    "NAME": "St. Catherine of Siena Roman Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "416 MOHAWK RD E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85890409,
    "LATITUDE": 43.22259572,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 145,
    "NAME": "Binbrook Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "3084 BINBROOK RD",
    "COMMUNITY": "GLANBROOK",
    "LONGITUDE": -79.806828,
    "LATITUDE": 43.121637,
    "WEBSITE": "http://www.binbrookbaptist.org/"
  },
  {
    //Valid
    "ID": 147,
    "NAME": "Japanese United Church (Hamilton)",
    "DENOMINATION": "United",
    "ADDRESS": "715 UPPER GAGE AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.83947404,
    "LATITUDE": 43.22607355,
    "WEBSITE": "http://hjuc.ca/"
  },
  {
    //Valid
    "ID": 148,
    "NAME": "Regina Mundi Roman Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "631 MOHAWK RD W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.91244112,
    "LATITUDE": 43.23272327,
    "WEBSITE": "http://reginamundi.ca/"
  },
  {
    //Valid
    "ID": 149,
    "NAME": "Grace Anglican Church (Hamilton)",
    "DENOMINATION": "Anglican",
    "ADDRESS": "1401 KING ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.82180311,
    "LATITUDE": 43.24103423,
    "WEBSITE": "None"
  },
  {
    //Value
    "ID": 150,
    "NAME": "West Fifth Bible Chapel",
    "DENOMINATION": "Other",
    "ADDRESS": "440 WEST 5TH ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88648368,
    "LATITUDE": 43.23080956,
    "WEBSITE": "http://westfifthbiblechapel.com/"
  },
  {
    //Value
    "ID": 151,
    "NAME": "West Avenue Christian Church",
    "DENOMINATION": "Pentecostal",
    "ADDRESS": "168 WEST AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85554869,
    "LATITUDE": 43.25826593,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 152,
    "NAME": "St. Paul's United Church (Hamilton)",
    "DENOMINATION": "United",
    "ADDRESS": "42 TRAGINA AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80360374,
    "LATITUDE": 43.24055555,
    "WEBSITE": "https://stpaulsdundas.com/"
  },
  {
    //Valid
    "ID": 153,
    "NAME": "Holy Trinity Ethiopian Orthodox Church",
    "DENOMINATION": "Orthodox",
    "ADDRESS": "420 ABERDEEN AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.89217152,
    "LATITUDE": 43.25113794,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 154,
    "NAME": "St. John And St. Andrew",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "19 TISDALE ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85312889,
    "LATITUDE": 43.25325019,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 155,
    "NAME": "St. Giles United Church",
    "DENOMINATION": "United",
    "ADDRESS": "85 HOLTON AVE S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.84224465,
    "LATITUDE": 43.24893567,
    "WEBSITE": "None"
  },
  {
    //Value
    "ID": 156,
    "NAME": "Immanuel Christian Reformed Church",
    "DENOMINATION": "Christian Reformed",
    "ADDRESS": "61 MOHAWK RD W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88572085,
    "LATITUDE": 43.22904857,
    "WEBSITE": "http://www.immanuelministries.ca/"
  },
  {
    //Valid
    "ID": 157,
    "NAME": "Buchanan Park Free Methodist Church",
    "DENOMINATION": "Free Methodist",
    "ADDRESS": "204 DELMAR DR",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88762854,
    "LATITUDE": 43.23577468,
    "WEBSITE": "http://www.buchananparkchurch.org/"
  },
  {
    //Valid
    "ID": 158,
    "NAME": "Hamilton Mountain Seventh-Day Adventist Church",
    "DENOMINATION": "Seventh Day Adventist",
    "ADDRESS": "284 CONCESSION ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86350063,
    "LATITUDE": 43.24349358,
    "WEBSITE": "http://hamiltonmountain.org/"
  },
  {
    //Valid
    "ID": 159,
    "NAME": "St. James The Apostle Anglican Church",
    "DENOMINATION": "Anglican",
    "ADDRESS": "437 OTTAWA ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.81629874,
    "LATITUDE": 43.25205114,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 160,
    "NAME": "Trinity Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "922 MAIN ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.83243727,
    "LATITUDE": 43.2453757,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 161,
    "NAME": "St. Margaret's Anglican Church",
    "DENOMINATION": "Anglican",
    "ADDRESS": "134 EMERSON ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.92168181,
    "LATITUDE": 43.25385369,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 164,
    "NAME": "Jehovah's Witnesses (Delta And East Hamilton Congregation)",
    "DENOMINATION": "Jehovah's Witnesses",
    "ADDRESS": "1441 BARTON ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80092934,
    "LATITUDE": 43.24824555,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 165,
    "NAME": "Stoney Creek Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "79 COLLEGIATE AVE",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.74604312,
    "LATITUDE": 43.22008136,
    "WEBSITE": "http://www.stoneycreekbaptist.com/"
  },
  {
    //Valid
    "ID": 166,
    "NAME": "Reorganized Church Of Jesus Christ Of Latter Day Saints",
    "DENOMINATION": "Reorganized Church of Jesus Christ of Latter Day Saints",
    "ADDRESS": "817 UPPER SHERMAN AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85109162,
    "LATITUDE": 43.22201989,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 167,
    "NAME": "Apostolic Holiness Church Of Jesus Christ",
    "DENOMINATION": "Apostolic",
    "ADDRESS": "42 ROYAL AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.92091762,
    "LATITUDE": 43.25335658,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 168,
    "NAME": "Cheyne Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "7 KING ST W",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.75893472,
    "LATITUDE": 43.21677535,
    "WEBSITE": "http://cheynechurch.com/"
  },
  {
    //Valid
    "ID": 169,
    "NAME": "Chalmers Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "200 MOUNTAIN PARK AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85093027,
    "LATITUDE": 43.24223578,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 171,
    "NAME": "Burkholder United Church",
    "DENOMINATION": "United",
    "ADDRESS": "465 MOHAWK RD E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85641488,
    "LATITUDE": 43.22313064,
    "WEBSITE": "http://www.burkholderunited.ca/"
  },
  {
    //Valid
    "ID": 172,
    "NAME": "The Salvation Army - Hamilton Loation Corps",
    "DENOMINATION": "Salvation Army",
    "ADDRESS": "573 CONCESSION ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85069678,
    "LATITUDE": 43.24091011,
    "WEBSITE": "https://www.salvationarmy.ca/"
  },
  {
    //Valid
    "ID": 173,
    "NAME": "Binbrook United Church",
    "DENOMINATION": "United",
    "ADDRESS": "2623 BINBROOK RD",
    "COMMUNITY": "GLANBROOK",
    "LONGITUDE": -79.802445,
    "LATITUDE": 43.120008,
    "WEBSITE": "http://binbrookblackheath.org/"
  },
  {
    //Valid
    "ID": 175,
    "NAME": "St. Paul's Anglican Church  (Mount Hope)",
    "DENOMINATION": "Anglican",
    "ADDRESS": "2869 HWY 6",
    "COMMUNITY": "GLANBROOK",
    "LONGITUDE": -79.90897077,
    "LATITUDE": 43.16586181,
    "WEBSITE": "https://niagaraanglican.ca/parish/st-pauls-glanford-mount-hope"
  },
  {
    //Valid
    "ID": 176,
    "NAME": "Heritage Green Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "956 PARAMOUNT DR",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.79946559,
    "LATITUDE": 43.19270206,
    "WEBSITE": "http://www.hgbc.ca/"
  },
  {
    //Valid
    "ID": 177,
    "NAME": "St. Mary Armenian Church",
    "DENOMINATION": "Orthodox",
    "ADDRESS": "8 MAYHURST AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.79832014,
    "LATITUDE": 43.22945684,
    "WEBSITE": "http://hamiltonstmary.com/"
  },
  {
    //Valid
    "ID": 178,
    "NAME": "Living Water Ministries",
    "DENOMINATION": "Non-denominational",
    "ADDRESS": "1475 BARTON ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80001951,
    "LATITUDE": 43.24798874,
    "WEBSITE": "http://www.hamilton-living-water-ministry.org/"
  },
  {
    //Valid
    "ID": 179,
    "NAME": "Stoney Creek Alliance Church",
    "DENOMINATION": "Alliance",
    "ADDRESS": "591 HWY 8",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.707704,
    "LATITUDE": 43.215273,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 180,
    "NAME": "Hamilton Chinese Alliance Church",
    "DENOMINATION": "Alliance",
    "ADDRESS": "50 BREADALBANE ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88822293,
    "LATITUDE": 43.26379447,
    "WEBSITE": "http://hamiltoncac.org/"
  },
  {
    //Valid
    "ID": 181,
    "NAME": "Korean United Church",
    "DENOMINATION": "United",
    "ADDRESS": "69 PEARL ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88164458,
    "LATITUDE": 43.26245138,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 182,
    "NAME": "International Missionary Society of the Seventh-Day Adventist Church Reform Movement",
    "DENOMINATION": "Seventh Day Adventist Reformed",
    "ADDRESS": "673 York Rd",
    "COMMUNITY": "DUNDAS",
    "LONGITUDE": -79.908164,
    "LATITUDE": 43.297797,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 183,
    "NAME": "Christs Church Cathedral",
    "DENOMINATION": "Anglican",
    "ADDRESS": "252 JAMES ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86560075,
    "LATITUDE": 43.2628833,
    "WEBSITE": "https://cathedralhamilton.ca/"
  },
  {
    //Valid
    "ID": 185,
    "NAME": "St. Nicholas Ukrainian Catholic Parish",
    "DENOMINATION": "Ukranian Catholic",
    "ADDRESS": "260 MELVIN AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.78572251,
    "LATITUDE": 43.24193311,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 186,
    "NAME": "Holy Resurrection Romanian Orthodox Church",
    "DENOMINATION": "Romanian Orthodox",
    "ADDRESS": "20 MURRAY ST W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.8663978,
    "LATITUDE": 43.26568596,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 188,
    "NAME": "Knox Presbyterian Church (Binbrook)",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "2553 BINBROOK RD",
    "COMMUNITY": "GLANBROOK",
    "LONGITUDE": -79.80006502,
    "LATITUDE": 43.11936838,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 189,
    "NAME": "Sacred Heart Roman Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "24 POPLAR AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.84817568,
    "LATITUDE": 43.24115795,
    "WEBSITE": "http://www.sacredhearthamilton.ca/"
  },
  {
    //Valid
    "ID": 190,
    "NAME": "St. Charles Garnier Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "129 HUGHSON ST S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86960774,
    "LATITUDE": 43.25153795,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 191,
    "NAME": "Heritage Green Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "360 ISAAC BROCK DR",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.78804944,
    "LATITUDE": 43.19390951,
    "WEBSITE": "http://macnabpresbyterian.ca/2014/05/12/heritage-green-presbyterian-church-new-website/"
  },
  {
    //Valid
    "ID": 192,
    "NAME": "Jehovah's Witnesses (Glover)",
    "DENOMINATION": "Jehovah's Witnesses",
    "ADDRESS": "217 GLOVER RD",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.68247306,
    "LATITUDE": 43.21181707,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 193,
    "NAME": "Jehovah's Witnesses (Eastmount Park Congregation)",
    "DENOMINATION": "Jehovah's Witnesses",
    "ADDRESS": "648 LIMERIDGE RD E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85692985,
    "LATITUDE": 43.21226487,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 194,
    "NAME": "Church Of The Redeemer",
    "DENOMINATION": "Anglican",
    "ADDRESS": "25 LAKE AVE S",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.75834111,
    "LATITUDE": 43.21527351,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 195,
    "NAME": "Stoney Creek United Church",
    "DENOMINATION": "United",
    "ADDRESS": "1 KING ST W",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.75866633,
    "LATITUDE": 43.21685978,
    "WEBSITE": "https://stoneycreekunited.org/"
  },
  {
    //Valid
    "ID": 196,
    "NAME": "Stoney Creek Community Church",
    "DENOMINATION": "Community Church",
    "ADDRESS": "725 HWY 8",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.69659728,
    "LATITUDE": 43.2128816,
    "WEBSITE": "http://stoney.church/"
  },
  {
    //Valid
    "ID": 197,
    "NAME": "Hamilton Grace Mandarin Alliance Church",
    "DENOMINATION": "Alliance",
    "ADDRESS": "31 SUMMIT AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85189253,
    "LATITUDE": 43.24152462,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 198,
    "NAME": "Bethel Gospel Tabernacle",
    "DENOMINATION": "Pentecostal Assemblies of Canada",
    "ADDRESS": "1355 UPPER WELLINGTON",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87686273,
    "LATITUDE": 43.21099401,
    "WEBSITE": "http://www.bgthamilton.com/"
  },
  {
    //Valid
    "ID": 200,
    "NAME": "Chedoke Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "865 MOHAWK RD W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.9249732,
    "LATITUDE": 43.23315676,
    "WEBSITE": "http://www.chedokechurch.ca/"
  },
  {
    //Valid
    "ID": 201,
    "NAME": "St. Augustine Of Canterbury",
    "DENOMINATION": "Anglican",
    "ADDRESS": "626 UPPER WENTWORTH",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85878567,
    "LATITUDE": 43.23189735,
    "WEBSITE": "http://www.staugustinesparish.ca/"
  },
  {
    //Valid
    "ID": 202,
    "NAME": "St. John's (Evangelical) Lutheran Church",
    "DENOMINATION": "Lutheran",
    "ADDRESS": "104 HUGHSON ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86622431,
    "LATITUDE": 43.25918257,
    "WEBSITE": "http://www.stjohnshamilton.ca/"
  },
  {
    //Valid
    "ID": 203,
    "NAME": "St. Joseph's Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "260 HERKIMER ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88639242,
    "LATITUDE": 43.25265222,
    "WEBSITE": "https://www.stjosephhamilton.church/"
  },
  {
    //Valid
    "ID": 204,
    "NAME": "Erskine Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "19 PEARL ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88201258,
    "LATITUDE": 43.26118419,
    "WEBSITE": "http://erskine.ca/wp/"
  },
  {
    //Valid
    "ID": 205,
    "NAME": "St. Stephen On The Mount Anglican Church",
    "DENOMINATION": "Anglican",
    "ADDRESS": "625 CONCESSION ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.84847501,
    "LATITUDE": 43.24036505,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 206,
    "NAME": "All Nations Full Gospel Church",
    "DENOMINATION": "Full Gospel",
    "ADDRESS": "1209 MAIN ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.8182337,
    "LATITUDE": 43.24243661,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 207,
    "NAME": "Canadian Reformed Church",
    "DENOMINATION": "Christian Reformed",
    "ADDRESS": "353 STONE CHURCH RD E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87312133,
    "LATITUDE": 43.20750667,
    "WEBSITE": "http://www.canrc.org/"
  },
  {
    //Valid
    "ID": 208,
    "NAME": "Crossfire Assembly",
    "DENOMINATION": "Pentecostal Assemblies of Canada",
    "ADDRESS": "430 YORK BLVD",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88088674,
    "LATITUDE": 43.26545131,
    "WEBSITE": "http://www.crossfireassembly.com/"
  },
  {
    //Valid
    "ID": 209,
    "NAME": "Stewart Memorial Church",
    "DENOMINATION": "Methodist Episcopal",
    "ADDRESS": "112 JOHN ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86476201,
    "LATITUDE": 43.25920681,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 210,
    "NAME": "Wentworth Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "120 WENTWORTH ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.84687347,
    "LATITUDE": 43.2559137,
    "WEBSITE": "https://wentworthbaptist.ca/"
  },
  {
    //Valid
    "ID": 211,
    "NAME": "First- Pilgrim United Church",
    "DENOMINATION": "United",
    "ADDRESS": "200 MAIN ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86173829,
    "LATITUDE": 43.25303976,
    "WEBSITE": "http://www.firstpilgrimuc.ca/"
  },
  {
    //Valid
    "ID": 212,
    "NAME": "Hughson Street Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "383 HUGHSON ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86300539,
    "LATITUDE": 43.26812358,
    "WEBSITE": "https://www.hughson.ca/"
  },
  {
    //Valid
    "ID": 213,
    "NAME": "St. Anthony's Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "165 PROSPECT ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.8292796,
    "LATITUDE": 43.254535,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 214,
    "NAME": "Mount Hamilton Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "440 UPPER WENTWORTH",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85605646,
    "LATITUDE": 43.23802492,
    "WEBSITE": "http://www.mhbc.ca/"
  },
  {
    //Valid
    "ID": 215,
    "NAME": "St. Michael's Anglican Church",
    "DENOMINATION": "Anglican",
    "ADDRESS": "1188 FENNELL AVE E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.82601731,
    "LATITUDE": 43.22430333,
    "WEBSITE": "http://www.stmichaelshamiltonmountain.com/"
  },
  {
    //Valid
    "ID": 216,
    "NAME": "St. Columba Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "1540 MAIN ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80380893,
    "LATITUDE": 43.23859172,
    "WEBSITE": "http://stcolumbabelleville.ca/"
  },
  {
    //Valid
    "ID": 217,
    "NAME": "Really Living Seventh-day Adventist Church",
    "DENOMINATION": "Seventh Day Adventist",
    "ADDRESS": "1763 UPPER JAMES ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.89424255,
    "LATITUDE": 43.1973404,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 218,
    "NAME": "The Salvation Army - Mountain Citadel",
    "DENOMINATION": "Salvation Army",
    "ADDRESS": "835 STONE CHURCH RD E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85237524,
    "LATITUDE": 43.20236046,
    "WEBSITE": "https://www.salvationarmy.ca/"
  },
  {
    //Valid
    "ID": 219,
    "NAME": "Melrose United Church",
    "DENOMINATION": "United",
    "ADDRESS": "86 HOMEWOOD AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88691523,
    "LATITUDE": 43.25093347,
    "WEBSITE": "http://www.melroseunited.ca/"
  },
  {
    //Valid
    "ID": 220,
    "NAME": "Mount Hamilton Christian Reformed Church",
    "DENOMINATION": "Christian Reformed",
    "ADDRESS": "1415 UPPER WELLINGTON",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87823714,
    "LATITUDE": 43.2100198,
    "WEBSITE": "http://www.mthamiltoncrc.org/"
  },
  {
    //Valid
    "ID": 221,
    "NAME": "St. Luke's Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "200 MOUNT ALBION RD",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.79434844,
    "LATITUDE": 43.21823222,
    "WEBSITE": "http://www.stlukerchamilton.org/"
  },
  {
    //Valid
    "ID": 222,
    "NAME": "Church Of The Ascension",
    "DENOMINATION": "Anglican",
    "ADDRESS": "64 FOREST AV",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86943742,
    "LATITUDE": 43.24953085,
    "WEBSITE": "http://ascensionchurch.ca/"
  },
  {
    //Valid
    "ID": 223,
    "NAME": "Faith Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "92 PARKDALE AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.79080106,
    "LATITUDE": 43.23851294,
    "WEBSITE": "http://www.victoryinternational.church/"
  },
  {
    //Valid
    "ID": 225,
    "NAME": "Welcome Inn Community Centre And Church",
    "DENOMINATION": "Mennonite Brethren",
    "ADDRESS": "40 WOOD ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86067265,
    "LATITUDE": 43.27105107,
    "WEBSITE": "http://welcomeinn.ca/"
  },
  {
    //Valid
    "ID": 226,
    "NAME": "Westdale Reformed Church",
    "DENOMINATION": "Reformed",
    "ADDRESS": "201 PARADISE RD N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.89601619,
    "LATITUDE": 43.26992461,
    "WEBSITE": "http://www.firsthamilton.ca/"
  },
  {
    //Value
    "ID": 227,
    "NAME": "Mount Hope United Church",
    "DENOMINATION": "United",
    "ADDRESS": "3076 HOMESTEAD DR",
    "COMMUNITY": "GLANBROOK",
    "LONGITUDE": -79.91352194,
    "LATITUDE": 43.15942188,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 228,
    "NAME": "Garside Bible Church",
    "DENOMINATION": "Associated Gospel Churches",
    "ADDRESS": "47 GARSIDE AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80768904,
    "LATITUDE": 43.2415228,
    "WEBSITE": "http://www.garsidebiblechurch.com/"
  },
  {
    //Valid
    "ID": 229,
    "NAME": "Hill Park Bible Church",
    "DENOMINATION": "Associated Gospel Churches",
    "ADDRESS": "668 UPPER WENTWORTH",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.8601132,
    "LATITUDE": 43.22885884,
    "WEBSITE": "https://hillparkbc.wordpress.com/"
  },
  {
    //Valid
    "ID": 230,
    "NAME": "St. Lawrences Roman Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "475 MARY ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85840582,
    "LATITUDE": 43.26899142,
    "WEBSITE": "http://stlawrencehamilton.ca/"
  },
  {
    //Valid
    "ID": 232,
    "NAME": "Holy Trinity Polish Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "880 BARTON ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.82676403,
    "LATITUDE": 43.25379348,
    "WEBSITE": "http://hamilton2017.pnkk.ca/"
  },
  {
    //Valid
    "ID": 233,
    "NAME": "Bethany Gospel Chapel",
    "DENOMINATION": "Other",
    "ADDRESS": "155 GAGE AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.82689681,
    "LATITUDE": 43.25298641,
    "WEBSITE": "http://www.bethanychapel.ca/"
  },
  {
    //Valid
    "ID": 234,
    "NAME": "Church Of God (German)",
    "DENOMINATION": "Pentecostal",
    "ADDRESS": "265 BOWMAN ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.91961889,
    "LATITUDE": 43.24993564,
    "WEBSITE": "http://www.thechurchofgod.cc/"
  },
  {
    //Valid
    "ID": 235,
    "NAME": "St. Andrews United Church",
    "DENOMINATION": "United",
    "ADDRESS": "479 UPPER PARADISE RD",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.91173473,
    "LATITUDE": 43.23177503,
    "WEBSITE": "http://www.standrewsunitedhamilton.ca/"
  },
  {
    //Valid
    "ID": 236,
    "NAME": "Blessed Sacrament Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "305 EAST 37TH ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.84135758,
    "LATITUDE": 43.22795036,
    "WEBSITE": "http://www.blessedsacramenthamilton.com/"
  },
  {
    //Valid
    "ID": 237,
    "NAME": "St. Paul's Anglican Church",
    "DENOMINATION": "Anglican",
    "ADDRESS": "1140 KING ST W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.9102491,
    "LATITUDE": 43.26058862,
    "WEBSITE": "https://stpaulswestdale.wordpress.com/"
  },
  {
    //Valid
    "ID": 238,
    "NAME": "First Unitarian Church Of Hamilton",
    "DENOMINATION": "Universalist",
    "ADDRESS": "170 DUNDURN ST S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.89063494,
    "LATITUDE": 43.25753998,
    "WEBSITE": "https://uuhamilton.ca/"
  },
  {
    //Valid
    "ID": 239,
    "NAME": "Philpott Memorial Church",
    "DENOMINATION": "Associated Gospel Churches",
    "ADDRESS": "84 YORK BLVD",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87148928,
    "LATITUDE": 43.25982761,
    "WEBSITE": "https://www.acommunityofgrace.org/"
  },
  {
    //Valid
    "ID": 240,
    "NAME": "Adas Israel Synagogue",
    "DENOMINATION": "Jewish (Orthodox)",
    "ADDRESS": "125 CLINE AVE S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.91056221,
    "LATITUDE": 43.25663177,
    "WEBSITE": "http://www.adasisrael.ca/"
  },
  {
    //Valid
    "ID": 241,
    "NAME": "Alberton Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "528 ALBERTON RD",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -80.07206251,
    "LATITUDE": 43.18716557,
    "WEBSITE": "http://www.albertonchurch.ca"
  },
  {
    //Valid
    "ID": 242,
    "NAME": "Apostolic Christian Church",
    "DENOMINATION": "Apostolic",
    "ADDRESS": "91 CARRINGTON CRT",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.99051837,
    "LATITUDE": 43.21436897,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 243,
    "NAME": "Ancaster Canadian Reformed Church",
    "DENOMINATION": "Reformed",
    "ADDRESS": "575 SHAVER RD",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -80.01108491,
    "LATITUDE": 43.19563179,
    "WEBSITE": "https://ancasterchurch.on.ca/"
  },
  {
    //Valid
    "ID": 244,
    "NAME": "Ancaster Christian Reformed Church",
    "DENOMINATION": "Christian Reformed",
    "ADDRESS": "70 GARNER RD E",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.97875846,
    "LATITUDE": 43.20146614,
    "WEBSITE": "http://www.ancastercrc.org/"
  },
  {
    //Valid
    "ID": 246,
    "NAME": "Anglican Church Of Canada",
    "DENOMINATION": "Anglican",
    "ADDRESS": "252 JAMES ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86571884,
    "LATITUDE": 43.26315212,
    "WEBSITE": "https://www.anglican.ca/"
  },
  {
    //Valid
    "ID": 247,
    "NAME": "Baha'i Fireside",
    "DENOMINATION": "Baha'I",
    "ADDRESS": "132 HILLCREST AVE",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.98851504,
    "LATITUDE": 43.26873588,
    "WEBSITE": "www.bahaihamilton.org/"
  },
  {
    //Valid
    "ID": 248,
    "NAME": "Beth Jacob Synagogue",
    "DENOMINATION": "Jewish (Conservative)",
    "ADDRESS": "375 ABERDEEN AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.89013288,
    "LATITUDE": 43.24991573,
    "WEBSITE": "https://www.bethjacobsynagogue.ca/"
  },
  {
    //Valid
    "ID": 249,
    "NAME": "Calvin Christian Reformed Church",
    "DENOMINATION": "Christian Reformed",
    "ADDRESS": "420 HWY 5 W",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.966091,
    "LATITUDE": 43.297692,
    "WEBSITE": "https://dundascalvin.ca/"
  },
  {
    //Valid
    "ID": 250,
    "NAME": "Canterbury Hills Conference Centre",
    "DENOMINATION": "Anglican",
    "ADDRESS": "509 LIONS CLUB RD",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.97812222,
    "LATITUDE": 43.24077112,
    "WEBSITE": "http://www.canterburyhills.ca/"
  },
  {
    //Valid
    "ID": 251,
    "NAME": "Carlisle United Church",
    "DENOMINATION": "United",
    "ADDRESS": "1432 CENTRE RD",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.976848,
    "LATITUDE": 43.391865,
    "WEBSITE": "http://carlisleuc.ca/"
  },
  {
    //Valid
    "ID": 252,
    "NAME": "Cathedral Of Christ The King",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "714 KING ST W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.89127853,
    "LATITUDE": 43.26353577,
    "WEBSITE": "http://ctkbasilica.ca/"
  },
  {
    //Valid
    "ID": 253,
    "NAME": "Christ Church (Dundas)",
    "DENOMINATION": "Anglican",
    "ADDRESS": "95 HWY 8",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.989774,
    "LATITUDE": 43.275906,
    "WEBSITE": "https://niagaraanglican.ca/parish/christ-church-flamborough"
  },
  {
    //Valid
    "ID": 254,
    "NAME": "Christ Church Anglican",
    "DENOMINATION": "Anglican",
    "ADDRESS": "1307 WOODBURN RD",
    "COMMUNITY": "GLANBROOK",
    "LONGITUDE": -79.74247839,
    "LATITUDE": 43.13717243,
    "WEBSITE": "https://cathedralhamilton.ca/"
  },
  {
    //Valid
    "ID": 255,
    "NAME": "Christadelphian Ecclesia Church (Hamilton)",
    "DENOMINATION": "Christadelphian",
    "ADDRESS": "80 EWEN RD",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.9313458,
    "LATITUDE": 43.25378418,
    "WEBSITE": "http://www.christadelphia.org/ecclesialist.php?ON"
  },
  {
    //Valid
    "ID": 258,
    "NAME": "Dundas Baptist Church (Governors)",
    "DENOMINATION": "Baptist",
    "ADDRESS": "201 GOVERNORS RD",
    "COMMUNITY": "DUNDAS",
    "LONGITUDE": -79.96253092,
    "LATITUDE": 43.26188766,
    "WEBSITE": "http://www.dundasbaptistchurch.com/"
  },
  {
    //Valid
    "ID": 260,
    "NAME": "Eckankar The Ancient Science Of Travel",
    "DENOMINATION": "Spiritualists",
    "ADDRESS": "178 KING ST W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87446823,
    "LATITUDE": 43.25838099,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 261,
    "NAME": "Fellowship Christian Reformed Church",
    "DENOMINATION": "Christian Reformed",
    "ADDRESS": "107 BRAITHWAITE AVE",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.98822258,
    "LATITUDE": 43.20318403,
    "WEBSITE": "http://www.meadowlandsfellowship.com/"
  },
  {
    //Valid
    "ID": 262,
    "NAME": "Freelton Fellowship Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "12 LOUISA ST",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.03735758,
    "LATITUDE": 43.39840481,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 263,
    "NAME": "Freelton United Church",
    "DENOMINATION": "United",
    "ADDRESS": "155 FREELTON RD",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.04035208,
    "LATITUDE": 43.40101224,
    "WEBSITE": "https://freeltonandstrabaneunitedchurch.org/"
  },
  {
    //Valid
    "ID": 264,
    "NAME": "Grace Anglican Church (Waterdown)",
    "DENOMINATION": "Anglican",
    "ADDRESS": "1401 KING ST E",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.8970098,
    "LATITUDE": 43.33767437,
    "WEBSITE": "http://www.graceanglicanwaterdown.org/"
  },
  {
    //Valid
    "ID": 265,
    "NAME": "Grindstone Valley Bible Church",
    "DENOMINATION": "Other",
    "ADDRESS": "215 PARKSIDE DR",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.91050553,
    "LATITUDE": 43.33529422,
    "WEBSITE": "http://www.grindstonechurch.com/"
  },
  {
    //Valid
    "ID": 266,
    "NAME": "Heritage Fellowship Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "557 GARNER RD W",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -80.00833953,
    "LATITUDE": 43.1979545,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 267,
    "NAME": "Holy Family Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "1393 CANNON ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.80809317,
    "LATITUDE": 43.24556767,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 268,
    "NAME": "Holy Veil Of Holy Mother Russian Orthodox Church",
    "DENOMINATION": "Orthodox",
    "ADDRESS": "75 SANFORD AVE S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.84718113,
    "LATITUDE": 43.24917431,
    "WEBSITE": "http://pokrovchurch.ca/home/"
  },
  {
    //Valid
    "ID": 269,
    "NAME": "Jerseyville Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "3203 JERSEYVILLE RD W",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -80.13316795,
    "LATITUDE": 43.19599529,
    "WEBSITE": "https://jerseyvillebaptist.weebly.com/"
  },
  {
    //Valid
    "ID": 270,
    "NAME": "United Church (Jerseyville)",
    "DENOMINATION": "United",
    "ADDRESS": "15 FIELD RD",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -80.10393879,
    "LATITUDE": 43.2010447,
    "WEBSITE": "http://jerseyvilleunitedchurch.com/"
  },
  {
    //Valid
    "ID": 271,
    "NAME": "Knox Presbyterian Church (Dundas)",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "23 MELVILLE ST",
    "COMMUNITY": "DUNDAS",
    "LONGITUDE": -79.954904,
    "LATITUDE": 43.26858739,
    "WEBSITE": "http://knoxdundas.com/"
  },
  {
    //Valid
    "ID": 272,
    "NAME": "Knox Presbyterian Church (Waterdown)",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "80 MILL ST N",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.89385798,
    "LATITUDE": 43.33623086,
    "WEBSITE": "http://www.knoxwaterdown.ca/"
  },
  {
    //Valid
    "ID": 273,
    "NAME": "Linden Park Community Church",
    "DENOMINATION": "Community Church",
    "ADDRESS": "484 EAST 16TH ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86541765,
    "LATITUDE": 43.22753384,
    "WEBSITE": "http://lindenparkchurch.ca/"
  },
  {
    //Valid
    "ID": 275,
    "NAME": "Macneill Memorial Baptist Church (Ancaster)",
    "DENOMINATION": "Baptist",
    "ADDRESS": "1114 OLD MOHAWK RD",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.93909057,
    "LATITUDE": 43.23185698,
    "WEBSITE": "http://www.macneillbaptist.ca/"
  },
  {
    //Valid
    "ID": 276,
    "NAME": "Marshall Memorial United Church",
    "DENOMINATION": "United",
    "ADDRESS": "184 FIDDLERS GREEN RD",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.98688888,
    "LATITUDE": 43.21358804,
    "WEBSITE": "http://www.mmuc.org/"
  },
  {
    //Valid
    "ID": 278,
    "NAME": "Millgrove United Church",
    "DENOMINATION": "United",
    "ADDRESS": "374 5TH CON RD W",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.95945888,
    "LATITUDE": 43.33562396,
    "WEBSITE": "http://millgroveunitedchurch.com/"
  },
  {
    //Valid
    "ID": 279,
    "NAME": "Providence Canadian Reformed Church",
    "DENOMINATION": "Reformed",
    "ADDRESS": "682 SOUTHCOTE RD",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.95783667,
    "LATITUDE": 43.20418291,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 280,
    "NAME": "Life Community Church",
    "DENOMINATION": "Non-denominational",
    "ADDRESS": "165 KING ST W",
    "COMMUNITY": "DUNDAS",
    "LONGITUDE": -79.96072939,
    "LATITUDE": 43.26724639,
    "WEBSITE": "http://www.lifecommunitychurch.ca/"
  },
  {
    //Valid
    "ID": 281,
    "NAME": "New Hope Christian Centre",
    "DENOMINATION": "Non-denominational",
    "ADDRESS": "176 HWY 8",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.0078855,
    "LATITUDE": 43.27319035,
    "WEBSITE": "http://www.newhopechristiancentre.ca/"
  },
  {
    //Valid
    "ID": 282,
    "NAME": "Our Lady Of Mount Carmel Roman Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "55 FREELTON RD",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.036379,
    "LATITUDE": 43.399141,
    "WEBSITE": "None"
  },  
  {
    //Valid
    "ID": 284,
    "NAME": "Rock Chapel United Church",
    "DENOMINATION": "United",
    "ADDRESS": "451 ROCK CHAPEL RD",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.93511405,
    "LATITUDE": 43.30088738,
    "WEBSITE": "http://rockchapel.webs.com/"
  },
  {
    //Valid
    "ID": 285,
    "NAME": "Ryerson United Church (Ancaster)",
    "DENOMINATION": "United",
    "ADDRESS": "265 WILSON ST E",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.97798157,
    "LATITUDE": 43.22464326,
    "WEBSITE": "http://ryersonancaster.ca/"
  },
  {
    //Valid
    "ID": 286,
    "NAME": "The Salvation Army - Winter Berry Heights Church",
    "DENOMINATION": "Salvation Army",
    "ADDRESS": "300 WINTERBERRY DR",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.80566661,
    "LATITUDE": 43.19317472,
    "WEBSITE": "https://www.salvationarmy.ca/"
  },
  {
    //Valid
    "ID": 288,
    "NAME": "St. Andrews Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "31 SULPHUR SPRINGS",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.97820338,
    "LATITUDE": 43.2266137,
    "WEBSITE": "http://standrews.ws/"
  },
  {
    //Valid
    "ID": 289,
    "NAME": "St. Ann's Church (Ancaster)",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "40 FIDDLERS GREEN RD",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.98792959,
    "LATITUDE": 43.21803689,
    "WEBSITE": "http://www.stannsparish.ca/"
  },
  {
    //Valid
    "ID": 290,
    "NAME": "St. James Anglican Church (Dundas)",
    "DENOMINATION": "Anglican",
    "ADDRESS": "110 VICTORIA ST",
    "COMMUNITY": "DUNDAS",
    "LONGITUDE": -79.96129365,
    "LATITUDE": 43.26956042,
    "WEBSITE": "https://stjamesdundas.ca/"
  },
  {
    //Valid
    "ID": 291,
    "NAME": "St. James United Church (Waterdown)",
    "DENOMINATION": "United",
    "ADDRESS": "306 PARKSIDE DR",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.90051396,
    "LATITUDE": 43.33915126,
    "WEBSITE": "http://www.stjameswaterdown.ca/"
  },
  {
    //Valid
    "ID": 292,
    "NAME": "St. John United Church",
    "DENOMINATION": "United",
    "ADDRESS": "910 QUEENSDALE AVE E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.83862714,
    "LATITUDE": 43.23229218,
    "WEBSITE": "http://www.stjohnuc.ca/"
  },
  {
    //Valid
    "ID": 293,
    "NAME": "St. John's Anglican Church",
    "DENOMINATION": "Anglican",
    "ADDRESS": "260 WILSON ST E",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.97747244,
    "LATITUDE": 43.22414465,
    "WEBSITE": "http://www.ancasteranglican.org/"
  },
  {
    //Valid
    "ID": 294,
    "NAME": "St. Luke's Anglican Church",
    "DENOMINATION": "Anglican",
    "ADDRESS": "454 JOHN ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.8600439,
    "LATITUDE": 43.26987359,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 295,
    "NAME": "St. Mark's United Church (Dundas)",
    "DENOMINATION": "United",
    "ADDRESS": "1 LYNNDALE DR",
    "COMMUNITY": "DUNDAS",
    "LONGITUDE": -79.96903983,
    "LATITUDE": 43.25949054,
    "WEBSITE": "http://www.stmarksunitedchurch.ca/"
  },
  {
    //Valid
    "ID": 296,
    "NAME": "St. Michael's Hungarian Greek Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "525 WEST 5TH ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.88668944,
    "LATITUDE": 43.22828801,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 297,
    "NAME": "St. Paul's Presbyterian Church (Ancaster)",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "526 CARLUKE RD W",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.98936522,
    "LATITUDE": 43.14407959,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 298,
    "NAME": "St. Paul's United Church (Dundas)",
    "DENOMINATION": "United",
    "ADDRESS": "29 PARK ST W",
    "COMMUNITY": "DUNDAS",
    "LONGITUDE": -79.95387404,
    "LATITUDE": 43.26748764,
    "WEBSITE": "https://stpaulsdundas.com/"
  },
  {
    //Valid
    "ID": 299,
    "NAME": "Carisma Pentecostal Church",
    "DENOMINATION": "Pentecostal",
    "ADDRESS": "16 WEST AVE S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85896268,
    "LATITUDE": 43.25236548,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 300,
    "NAME": "St. Thomas Roman Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "46 FLAMBORO ST",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.89283426,
    "LATITUDE": 43.33166336,
    "WEBSITE": "http://www.stthomaswaterdown.com/"
  },
  {
    //Valid
    "ID": 301,
    "NAME": "Canadian Reformed Theological Seminary",
    "DENOMINATION": "Reformed",
    "ADDRESS": "110 WEST 27TH ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.9072856,
    "LATITUDE": 43.23901534,
    "WEBSITE": "http://www.canadianreformedseminary.ca/"
  },
  {
    //Valid
    "ID": 302,
    "NAME": "United Church Of Canada (Carlisle)",
    "DENOMINATION": "United",
    "ADDRESS": "1552 HWY 6",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.01167384,
    "LATITUDE": 43.38205065,
    "WEBSITE": "http://carlisleuc.ca/"
  },
  {
    //Valid
    "ID": 303,
    "NAME": "United Hebrew Memorial Chapel",
    "DENOMINATION": "United",
    "ADDRESS": "28 EWEN RD",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.93191951,
    "LATITUDE": 43.25583161,
    "WEBSITE": "http://uhmc.ca/"
  },
  {
    //Valid
    "ID": 306,
    "NAME": "Waterdown Christian And Missionary Alliance",
    "DENOMINATION": "Alliance",
    "ADDRESS": "21 MILL ST N",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.89253815,
    "LATITUDE": 43.33455457,
    "WEBSITE": "https://www.cmacan.org/"
  },
  {
    //Valid
    "ID": 307,
    "NAME": "West Flamborough Presbyterian Church",
    "DENOMINATION": "Presbyterian",
    "ADDRESS": "295 HWY 8",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.03192464,
    "LATITUDE": 43.26804266,
    "WEBSITE": "http://www.wfpconline.com/"
  },
  {
    //Valid
    "ID": 308,
    "NAME": "Westover Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "1149 WESTOVER RD",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.0870996,
    "LATITUDE": 43.33720337,
    "WEBSITE": "None"
  },
  { 
    //Valid
    "ID": 309,
    "NAME": "Zion United Church",
    "DENOMINATION": "United",
    "ADDRESS": "69 PEARL ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.8813334,
    "LATITUDE": 43.2623416,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 310,
    "NAME": "Flamborough Baptist Church",
    "DENOMINATION": "Baptist",
    "ADDRESS": "41 5TH CON RD E",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.94168888,
    "LATITUDE": 43.3346778,
    "WEBSITE": "http://flamboroughbaptist.church/"
  },
  {
    //Valid
    "ID": 311,
    "NAME": "Crossfire Assembly",
    "DENOMINATION": "Pentecostal Assemblies of Canada",
    "ADDRESS": "462 KING ST W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.882608,
    "LATITUDE": 43.260869,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 314,
    "NAME": "Free Reformed Church of Hamilton",
    "DENOMINATION": "Reformed",
    "ADDRESS": "1114 OLD MOHAWK RD",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.93956245,
    "LATITUDE": 43.23168055,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 315,
    "NAME": "St. Augustine's Parish",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "58 SYDENHAM ST",
    "COMMUNITY": "DUNDAS",
    "LONGITUDE": -79.956640,
    "LATITUDE": 43.268808,
    "WEBSITE": "http://www.staugustinesparish.ca/"
  },
  {
    //Valid
    "ID": 318,
    "NAME": "Wat Khmer Kampuchea Krom Buddhist Temple And Meditation Centre",
    "DENOMINATION": "Buddhism",
    "ADDRESS": "516 BARTON ST",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.71002549,
    "LATITUDE": 43.22445489,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 319,
    "NAME": "Stone Ridge Bible Chapel",
    "DENOMINATION": "Non-denominational",
    "ADDRESS": "1457 UPPER SHERMAN AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86019487,
    "LATITUDE": 43.20133012,
    "WEBSITE": "http://www.stoneridgeonline.ca/"
  },
  {
    //Valid
    "ID": 320,
    "NAME": "Temple Anshe Sholom (Reform)",
    "DENOMINATION": "Jewish",
    "ADDRESS": "215 CLINE AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.90349347,
    "LATITUDE": 43.26406712,
    "WEBSITE": "http://www.anshesholom.ca/"
  },
  {
    //Valid
    "ID": 321,
    "NAME": "Bosnian Islamic Center",
    "DENOMINATION": "Muslim",
    "ADDRESS": "202 BARTON ST",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.73630525,
    "LATITUDE": 43.23146026,
    "WEBSITE": "http://bichamilton.com/"
  },
  {
    //Valid
    "ID": 322,
    "NAME": "Hamilton Mosque (Sunni Muslims)",
    "DENOMINATION": "Muslim",
    "ADDRESS": "1545 STONE CHURCH RD E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.82067132,
    "LATITUDE": 43.19546692,
    "WEBSITE": "https://hamiltonmosque.com/"
  },
  {
    //Valid
    "ID": 323,
    "NAME": "Umar Mosque (Sunni Muslims)",
    "DENOMINATION": "Muslim",
    "ADDRESS": "734 RENNIE ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.773953,
    "LATITUDE": 43.246743,
    "WEBSITE": "https://hamiltonmosque.com/"
  },
  {
    //Valid
    "ID": 324,
    "NAME": "Hamilton Islamic Centre",
    "DENOMINATION": "Muslim",
    "ADDRESS": "1308 UPPER GAGE AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.84982132,
    "LATITUDE": 43.20408623,
    "WEBSITE": "http://www.wilayatcentre.ca"
  },
  {
    //Valid
    "ID": 325,
    "NAME": "Razvi Islamic Centre (Shiatt Muslims)",
    "DENOMINATION": "Muslim",
    "ADDRESS": "95 MEAD AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.78188173,
    "LATITUDE": 43.25325523,
    "WEBSITE": "https://www.jaffari.org/ric/"
  },
  {
    //Valid
    "ID": 326,
    "NAME": "Association Of Progressive Dawoodi Brothers Of Ontario (Bori Muslims)",
    "DENOMINATION": "Muslim",
    "ADDRESS": "60 HARLOWE RD",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.82081316,
    "LATITUDE": 43.19085624,
    "WEBSITE": "http://www.apdbo.org/"
  },
  {
    //Valid
    "ID": 330,
    "NAME": "Church Of Pentecost",
    "DENOMINATION": "Pentecostal",
    "ADDRESS": "1047 BARTON ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.81765377,
    "LATITUDE": 43.25214132,
    "WEBSITE": "http://www.copwca.org/"
  },
  {
    //Valid
    "ID": 331,
    "NAME": "Apostolic Ark Ministries",
    "DENOMINATION": "Pentecostal Assemblies of Canada",
    "ADDRESS": "251 KING WILLIAM ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.8594533,
    "LATITUDE": 43.25521226,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 333,
    "NAME": "Diocese Of Hamilton",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "700 KING ST W",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.8904092,
    "LATITUDE": 43.26366278,
    "WEBSITE": "https://hamiltondiocese.com/"
  },
  {
    //Valid
    "ID": 335,
    "NAME": "Temple Of The Guiding Star",
    "DENOMINATION": "Spiritualists",
    "ADDRESS": "21 ROSEDENE AVE",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87407077,
    "LATITUDE": 43.24445484,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 336,
    "NAME": "The Assembly Of The Church Of The Universe",
    "DENOMINATION": "Universal",
    "ADDRESS": "544 BARTON ST E",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.84247979,
    "LATITUDE": 43.2579542,
    "WEBSITE": "http://www.iamm.com/"
  },
  {
    //Valid
    "ID": 337,
    "NAME": "United Church (Lynden)",
    "DENOMINATION": "United",
    "ADDRESS": "3989 GOVERNORS RD",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.14488166,
    "LATITUDE": 43.22895516,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 338,
    "NAME": "Bowman United Church",
    "DENOMINATION": "United",
    "ADDRESS": "880 GARNER ROAD EAST",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.94252767,
    "LATITUDE": 43.20803942,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 358,
    "NAME": "Meadowlands Fellowship Christian Reformed Church",
    "DENOMINATION": "Christian Reformed",
    "ADDRESS": "211 STONEHENGE DR",
    "COMMUNITY": "ANCASTER",
    "LONGITUDE": -79.9506487,
    "LATITUDE": 43.21603075,
    "WEBSITE": "http://www.meadowlandsfellowship.com/"
  },
  {
    //Valid
    "ID": 359,
    "NAME": "Flamborough Christian Fellowship Centre",
    "DENOMINATION": "Christian Reformed",
    "ADDRESS": "329 CONCESSION 6 E",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.93208574,
    "LATITUDE": 43.36364011,
    "WEBSITE": "http://flamcf.ca/"
  },
  {
    //Valid
    "ID": 360,
    "NAME": "St. Thomas The Apostle Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "715 CENTRE RD",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.91570164,
    "LATITUDE": 43.34461522,
    "WEBSITE": "http://www.stthomaswaterdown.com/"
  },
  {
    //Valid
    "ID": 362,
    "NAME": "Bethel Christian Reformed Church",
    "DENOMINATION": "Christian Reformed",
    "ADDRESS": "606 DUNDAS ST E",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -79.86795558,
    "LATITUDE": 43.35193608,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 363,
    "NAME": "Strabane United Church",
    "DENOMINATION": "United",
    "ADDRESS": "1565 BROCK RD",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.03363554,
    "LATITUDE": 43.37927101,
    "WEBSITE": "https://freeltonandstrabaneunitedchurch.org/"
  },
  {
    //Valid
    "ID": 364,
    "NAME": "Gurdwara Sikh Sangat",
    "DENOMINATION": "Sikh",
    "ADDRESS": "200 OLD GUELPH RD",
    "COMMUNITY": "DUNDAS",
    "LONGITUDE": -79.90765813,
    "LATITUDE": 43.29582237,
    "WEBSITE": "https://www.hamiltongurdwara.com/"
  },
  {
    //Valid
    "ID": 365,
    "NAME": "Zion United Reformed Church Of Sheffield",
    "DENOMINATION": "United Reformed",
    "ADDRESS": "1238 OLD HWY 8",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.20368009,
    "LATITUDE": 43.32471012,
    "WEBSITE": "https://zurch.ca/"
  },
  {
    //Valid
    "ID": 366,
    "NAME": "Troy United Church",
    "DENOMINATION": "United",
    "ADDRESS": "2299 TROY RD",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.18482579,
    "LATITUDE": 43.26061982,
    "WEBSITE": "http://troyunitedchurch.org/"
  },
  {
    //Valids
    "ID": 367,
    "NAME": "Rockton United Church",
    "DENOMINATION": "United",
    "ADDRESS": "792 OLD HWY 8",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.12609365,
    "LATITUDE": 43.30109249,
    "WEBSITE": "http://rocktonunitedchurch.com/"
  },
  {
    //Valid
    "ID": 368,
    "NAME": "St. Alban The Martyr Anglican Church",
    "DENOMINATION": "Anglican",
    "ADDRESS": "758 OLD HWY 8",
    "COMMUNITY": "FLAMBOROUGH",
    "LONGITUDE": -80.12289504,
    "LATITUDE": 43.29981349,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 393,
    "NAME": "Adas Israel Congregation Of Hamilton",
    "DENOMINATION": "ADAS ISRAEL",
    "ADDRESS": "125 CLINE AVE S",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.910528,
    "LATITUDE": 43.256704,
    "WEBSITE": "http://www.adasisrael.ca/"
  },
  {
    //Valid
    "ID": 394,
    "NAME": "Our Lady of Mercy Catholic Church",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "58 DUNDURN ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.886846,
    "LATITUDE": 43.263992,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 395,
    "NAME": "The House Of Peace Church",
    "DENOMINATION": "Church of Jesus Christ",
    "ADDRESS": "7 PETER ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.87643503,
    "LATITUDE": 43.26150573,
    "WEBSITE": "None"
  },
  {
    //Valid
    "ID": 397,
    "NAME": "Restoration House Hamilton",
    "DENOMINATION": "Redeemed Christian Church of God",
    "ADDRESS": "54 VINE ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86987282,
    "LATITUDE": 43.26051407,
    "WEBSITE": "https://restorationhouse.ca/"
  },
  {
    //Valid
    "ID": 398,
    "NAME": "Saint Mary's Church",
    "DENOMINATION": "Roman Catholic Church",
    "ADDRESS": "23 SHEAFFE ST",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86923451,
    "LATITUDE": 43.2631481,
    "WEBSITE": "http://www.stmaryshamilton.org.au/"
  },
  {
    //Valid
    "ID": 399,
    "NAME": "Hamilton Downtown Sunni Mosque",
    "DENOMINATION": "Muslim",
    "ADDRESS": "221 York Blvd",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.875592,
    "LATITUDE": 43.261128,
    "WEBSITE": "http://downtownmosque.com/"
  },
  {
    //Valid
    "ID": 409,
    "NAME": "Streetlight Christian Church",
    "DENOMINATION": "Reformed",
    "ADDRESS": "82 FERGUSON AVE N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.86022123,
    "LATITUDE": 43.25668936,
    "WEBSITE": "http://streetlightministries.ca/"
  },
  {
    //Valid
    "ID": 410,
    "NAME": "Amorc",
    "DENOMINATION": "Other",
    "ADDRESS": "64 WELLINGTON ST N",
    "COMMUNITY": "HAMILTON",
    "LONGITUDE": -79.85823657,
    "LATITUDE": 43.25534782,
    "WEBSITE": "http://www.amorc.org/"
  },
  {
    //Valid
    "ID": 449,
    "NAME": "Immaculate Heart Of Mary Parish",
    "DENOMINATION": "Roman Catholic",
    "ADDRESS": "934 HIGHWAY NO. 8",
    "COMMUNITY": "STONEY CREEK",
    "LONGITUDE": -79.68061664,
    "LATITUDE": 43.20843574,
    "WEBSITE": "https://ihmchurch.ca/"
  }
]

