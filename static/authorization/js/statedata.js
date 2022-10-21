function getElectionData() {
    // return [{
    //     "id": "NG.BO",
    //     "value": 2315956,
    //     "state": "Borno",
    //     "PDP": "7.80",
    //     "APC": "90.94"
    // },
    // {
    //     "id": "NG.AB",
    //     "value": 2006061,
    //     "state": "Aba",
    //     "lgas": 17,
    //     "wards": 184,
    //     "PDP": "67.96",
    //     "APC": "26.31"
    // },
    // {
    //     "id": "NG.AK",
    //     "value": 2119727,
    //     "state": "Akwa Ibom",
    //     "PDP": "68.39",
    //     "APC": "30.31"
    // },
    // {
    //     "id": "NG.IM",
    //     "value": 2272293,
    //     "state": "Imo",
    //     "PDP": "65.47",
    //     "APC": "27.64"
    // },
    // {
    //     "id": "NG.RI",
    //     "value": 3094311,
    //     "state": "Rivers",
    //     "PDP": "73.81",
    //     "APC": "23.47"
    // },
    // {
    //     "id": "NG.BY",
    //     "value": 923182,
    //     "state": "Bayelsa",
    //     "PDP": "61.51",
    //     "APC": "36.93"
    // },
    // {
    //     "id": "NG.BE",
    //     "value": 2480131,
    //     "state": "Benue",
    //     "PDP": "48.95",
    //     "APC": "47.70"
    // },
    // {
    //     "id": "NG.CR",
    //     "value": 1527289,
    //     "state": "Cross River",
    //     "PDP": "70.10",
    //     "APC": "27.80"
    // },
    // {
    //     "id": "NG.TA",
    //     "value": 1777105,
    //     "state": "Taraba",
    //     "PDP": "52.57",
    //     "APC": "45.58"
    // },
    // {
    //     "id": "NG.KW",
    //     "value": 1406457,
    //     "state": "Kwara",
    //     "PDP": "30.06",
    //     "APC": "67.22"
    // },
    // {
    //     "id": "NG.LA",
    //     "value": 6569997,
    //     "state": "Lagos",
    //     "PDP": "41.12",
    //     "APC": "53.31"
    // },
    // {
    //     "id": "NG.NI",
    //     "value": 2399035,
    //     "state": "Niger",
    //     "PDP": "25.59",
    //     "APC": "71.88"
    // },
    // {
    //     "id": "NG.OG",
    //     "value": 2375003,
    //     "state": "Ogun",
    //     "PDP": "34.50",
    //     "APC": "49.94"
    // },
    // {
    //     "id": "NG.ON",
    //     "value": 1873010,
    //     "state": "Ondo",
    //     "PDP": "49.62",
    //     "APC": "43.48"
    // },
    // {
    //     "id": "NG.EK",
    //     "value": 969675,
    //     "state": "Ekiti",
    //     "PDP": "40.41",
    //     "APC": "57.52"
    // },
    // {
    //     "id": "NG.OS",
    //     "value": 1680498,
    //     "state": "Osun",
    //     "PDP": "47.21",
    //     "APC": "48.64"
    // },
    // {
    //     "id": "NG.OY",
    //     "value": 2653306,
    //     "state": "Oyo",
    //     "PDP": "43.83",
    //     "APC": "43.66"
    // },
    // {
    //     "id": "NG.AN",
    //     "value": 2447896,
    //     "state": "Anambra",
    //     "PDP": "86.63",
    //     "APC": "5.50"
    // },
    // {
    //     "id": "NG.BA",
    //     "value": 2462843,
    //     "state": "Bauchi",
    //     "PDP": "20.43",
    //     "APC": "77.95"
    // },
    // {
    //     "id": "NG.GO",
    //     "value": 1394393,
    //     "state": "Gombe",
    //     "PDP": "24.99",
    //     "APC": "72.71"
    // },
    // {
    //     "id": "NG.DE",
    //     "value": 2845274,
    //     "state": "Delta",
    //     "PDP": "71.59",
    //     "APC": "26.67"
    // },
    // {
    //     "id": "NG.ED",
    //     "value": 2210534,
    //     "state": "Edo",
    //     "PDP": "49.17",
    //     "APC": "47.77"
    // },
    // {
    //     "id": "NG.EN",
    //     "value": 1944016,
    //     "state": "Enugu",
    //     "PDP": "84.45",
    //     "APC": "12.93"
    // },
    // {
    //     "id": "NG.EB",
    //     "value": 1396730,
    //     "state": "Ebonyi",
    //     "PDP": "72.00",
    //     "APC": "25.26"
    // },
    // {
    //     "id": "NG.KD",
    //     "value": 4073944,
    //     "state": "Kaduna",
    //     "PDP": "39.05",
    //     "APC": "59.72"
    // },
    // {
    //     "id": "NG.KO",
    //     "value": 1646350,
    //     "state": "Kogi",
    //     "PDP": "41.88",
    //     "APC": "54.87"
    // },
    // {
    //     "id": "NG.PL",
    //     "value": 2480455,
    //     "state": "Plateu",
    //     "PDP": "53.02",
    //     "APC": "45.28"
    // },
    // {
    //     "id": "NG.NA",
    //     "value": 1707786,
    //     "state": "Nasarawa",
    //     "PDP": "48.87",
    //     "APC": "49.92"
    // },
    // {
    //     "id": "NG.JI",
    //     "value": 2110874,
    //     "state": "Jigawa",
    //     "PDP": "26.21",
    //     "APC": "71.84"
    // },
    // {
    //     "id": "NG.KN",
    //     "value": 5227125,
    //     "state": "Kano",
    //     "PDP": "20.71",
    //     "APC": "77.45"
    // },
    // {
    //     "id": "NG.KT",
    //     "value": 3230230,
    //     "state": "Katsina",
    //     "PDP": "19.8",
    //     "APC": "79.21"
    // },
    // {
    //     "id": "NG.SO",
    //     "value": 1903166,
    //     "state": "Sokoto",
    //     "PDP": "41.47",
    //     "APC": "56.24"
    // },
    // {
    //     "id": "NG.ZA",
    //     "value": 1717128,
    //     "state": "Zamfara",
    //     "PDP": "21.68",
    //     "APC": "75.84"
    // },
    // {
    //     "id": "NG.YO",
    //     "value": 1365913,
    //     "state": "Yobe",
    //     "PDP": "9.08",
    //     "APC": "89.01"
    // },
    // {
    //     "id": "NG.KE",
    //     "value": 1807231,
    //     "state": "Kebbi",
    //     "PDP": "20.39",
    //     "APC": "76.86"
    // },
    // {
    //     "id": "NG.AD",
    //     "value": 1973083,
    //     "state": "Adamawa",
    //     "PDP": "67.96",
    //     "APC": "26.31"
    // },
    // {
    //     "id": "NG.FC",
    //     "value": 1344856,
    //     "state": "FCT",
    //     "PDP": "61.33",
    //     "APC": "35.91"
    // }
    // ]
    return [{
        "id": "NG.BO",
        "value": 5,
        "state": "Borno",
        "PDP": "7.80",
        "APC": "83.94",
        "LP": "7.00",
        "RV": "2,915,956",
        "CP": "2,000,228"
    },
    {
        "id": "NG.AB",
        "value": 6,
        "state": "Aba",
        "lgas": 17,
        "wards": 184,
        "PDP": "6.31",
        "APC": "20.00",
        "LP": "60.00",
        "RV": "1,932,892",
        "CP": "1,729,943"
    },
    {
        "id": "NG.AK",
        "value": 4,
        "state": "Akwa Ibom",
        "PDP": "16..00",
        "APC": "14.31",
        "LP": "67.39",
        "RV": "2,119,727",
        "CP": "1,933,362"
    },
    {
        "id": "NG.IM",
        "value": 3,
        "state": "Imo",
        "PDP": "8.47",
        "APC": "10.64",
        "LP": "80.00",
        "RV": "2,272,293",
        "CP": "1,702,178"
    },
    {
        "id": "NG.RI",
        "value": 6,
        "state": "Rivers",
        "PDP": "33.81",
        "APC": "23.47",
        "LP": "29.21",
        "RV": "3,215,273",
        "CP": "2,833,101"
    },
    {
        "id": "NG.BY",
        "value": 1,
        "state": "Bayelsa",
        "PDP": "51.51",
        "APC": "30.93",
        "LP": "33.00",
        "RV": "923,182",
        "CP": "769,509"
    },
    {
        "id": "NG.BE",
        "value": 0,
        "state": "Benue",
        "PDP": "48.95",
        "APC": "41.70",
        "LP": "30.00",
        "RV": "2,480,131",
        "CP": "2,244,376"
    },
    {
        "id": "NG.CR",
        "value": 5,
        "state": "Cross River",
        "PDP": "30.10",
        "APC": "27.80",
        "LP": "45.00",
        "RV": "1,527,289",
        "CP": "1,387,314"
    },
    {
        "id": "NG.TA",
        "value": 6,
        "state": "Taraba",
        "PDP": "52.57",
        "APC": "45.58",
        "LP": "7.00",
        "RV": "1,777,105",
        "CP": "1,727,094"
    },
    {
        "id": "NG.KW",
        "value": 4,
        "state": "Kwara",
        "PDP": "30.06",
        "APC": "67.22",
        "LP": "15.00",
        "RV": "1,406,457",
        "CP": "1,149,969"
    },
    {
        "id": "NG.LA",
        "value": 6,
        "state": "Lagos",
        "PDP": "40.12",
        "APC": "51.31",
        "LP": "28.98",
        "RV": "6,570,291",
        "CP": "5,531,389"
    },
    {
        "id": "NG.NI",
        "value": 1,
        "state": "Niger",
        "PDP": "25.59",
        "APC": "71.88",
        "LP": "9.00",
        "RV": "2,390,035",
        "CP": "2,173,204"
    },
    {
        "id": "NG.OG",
        "value": 5,
        "state": "Ogun",
        "PDP": "34.50",
        "APC": "49.94",
        "LP": "33.00",
        "RV": "2,375,003",
        "CP": "1,694,867"
    },
    {
        "id": "NG.ON",
        "value": 4,
        "state": "Ondo",
        "PDP": "49.62",
        "APC": "43.48",
        "LP": "29",
        "RV": "1,822,346",
        "CP": "1,478,460"
    },
    {
        "id": "NG.EK",
        "value": 11,
        "state": "Ekiti",
        "PDP": "40.41",
        "APC": "57.52",
        "LP": "19",
        "RV": "909,967",
        "CP": "666,591"
    },
    {
        "id": "NG.OS",
        "value": 8,
        "state": "Osun",
        "PDP": "47.21",
        "APC": "48.64",
        "LP": "20.00",
        "RV": "1,680,498",
        "CP": "1,266,587"
    },
    {
        "id": "NG.OY",
        "value": 12,
        "state": "Oyo",
        "PDP": "43.83",
        "APC": "43.66",
        "LP": "51.00",
        "RV": "2,934,107",
        "CP": "2,176,352"
    },
    {
        "id": "NG.AN",
        "value": 15,
        "state": "Anambra",
        "PDP": "46.63",
        "APC": "5.50",
        "LP": "50.00",
        "RV": "2,447,996",
        "CP": "2,071,714"
    },
    {
        "id": "NG.BA",
        "value": 9,
        "state": "Bauchi",
        "PDP": "20.43",
        "APC": "77.95",
        "LP": "17.35",
        "RV": "2,462,843",
        "CP": "2,335,717"
    },
    {
        "id": "NG.GO",
        "value": 10,
        "state": "Gombe",
        "PDP": "24.99",
        "APC": "72.71",
        "LP": "17.35",
        "RV": "1,394,393",
        "CP": "1,335,223"
    },
    {
        "id": "NG.DE",
        "value": 16,
        "state": "Delta",
        "PDP": "71.59",
        "APC": "26.67",
        "LP": "17.35",
        "RV": "2,845,274",
        "CP": "2,470,924"
    },
    {
        "id": "NG.ED",
        "value": 4,
        "state": "Edo",
        "PDP": "49.17",
        "APC": "47.77",
        "LP": "27.00",
        "RV": "2,210,534",
        "CP": "1,726,738"
    },
    {
        "id": "NG.EN",
        "value": 6,
        "state": "Enugu",
        "PDP": "4.45",
        "APC": "12.93",
        "LP": "84.21",
        "RV": "1,944,016",
        "CP": "1,787,537"
    },
    {
        "id": "NG.EB",
        "value": 4,
        "state": "Ebonyi",
        "PDP": "31.25",
        "APC": "25.26",
        "LP": "35.98",
        "RV": "1,459,933",
        "CP": "1,299,048"
    },
    {
        "id": "NG.KD",
        "value": 8,
        "state": "Kaduna",
        "PDP": "39.05",
        "APC": "59.72",
        "LP": "17.35",
        "RV": "3,932,492",
        "CP": "3,648,831"
    },
    {
        "id": "NG.KO",
        "value": 5,
        "state": "Kogi",
        "PDP": "41.88",
        "APC": "54.87",
        "LP": "17.35",
        "RV": "1,646,350",
        "CP": "1,435,751"
    },
    {
        "id": "NG.PL",
        "value": 1,
        "state": "Plateu",
        "PDP": "53.02",
        "APC": "45.28",
        "LP": "17.35",
        "RV": "2,480,455",
        "CP": "2,095,409"
    },
    {
        "id": "NG.NA",
        "value": 3,
        "state": "Nasarawa",
        "PDP": "48.87",
        "APC": "49.92",
        "LP": "17.35",
        "RV": "1,617,786",
        "CP": "1,442,184"
    },
    {
        "id": "NG.JI",
        "value": 3,
        "state": "Jigawa",
        "PDP": "26.21",
        "APC": "71.84",
        "LP": "17.35",
        "RV": "2,111,106",
        "CP": "1,625,721"
    },
    {
        "id": "NG.KN",
        "value": 3,
        "state": "Kano",
        "PDP": "20.71",
        "APC": "77.45",
        "LP": "27.35",
        "RV": "5,457,747",
        "CP": "4,696,747"
    },
    {
        "id": "NG.KT",
        "value": 3,
        "state": "Katsina",
        "PDP": "19.8",
        "APC": "79.21",
        "LP": "20.35",
        "RV": "3,230,230",
        "CP": "3,187,988"
    },
    {
        "id": "NG.SO",
        "value": 3,
        "state": "Sokoto",
        "PDP": "41.47",
        "APC": "56.24",
        "LP": "17.35",
        "RV": "1,903,166",
        "CP": "1,726,887"
    },
    {
        "id": "NG.ZA",
        "value": 4,
        "state": "Zamfara",
        "PDP": "21.68",
        "APC": "75.84",
        "LP": "17.35",
        "RV": "1,717,128",
        "CP": "1,626,839"
    },
    {
        "id": "NG.YO",
        "value": 4,
        "state": "Yobe",
        "PDP": "9.08",
        "APC": "89.01",
        "LP": "17.35",
        "RV": "1,365,913",
        "CP": "1,261,914"
    },
    {
        "id": "NG.KE",
        "value": 7,
        "state": "Kebbi",
        "PDP": "20.39",
        "APC": "76.86",
        "LP": "17.35",
        "RV": "1,806,231",
        "CP": "1,718,180"
    },
    {
        "id": "NG.AD",
        "value": 8,
        "state": "Adamawa",
        "PDP": "67.96",
        "APC": "26.31",
        "LP": "17.35",
        "RV": "1,973,083",
        "CP": "1,788,706"
    },
    {
        "id": "NG.FC",
        "value": 9,
        "state": "FCT",
        "PDP": "11.33",
        "APC": "35.91",
        "LP": "67.35",
        "RV": "1,344,856",
        "CP": "1,026,920"
    }
    ]
}



function getElectionDataByState() {
    return {
        "US.AL": null,
        "US.AK": null,
        "NG.AB": [
            {
                "incits": "56001",
                "fips": "001",
                "name": "Umuahia North",
                "Tinubu": "46.1",
                "Obi": "50.3",
                "value": 11,
                "LGACode": "1005",
                "id": "NG.AB.1016"
            },
            {
                "incits": "56003",
                "fips": "003",
                "name": "Ukwa West",
                "Tinubu": "75.7",
                "Obi": "19.1",
                "value": 4,
                "LGACode": "1012",
                "id": "NG.AB.1014"
            },
            {
                "incits": "56005",
                "fips": "005",
                "name": "Umuahia South",
                "Tinubu": "79.4",
                "Obi": "18.2",
                "value": 5,
                "LGACode": "1003",
                "id": "NG.AB.1017"
            },
            {
                "incits": "56007",
                "fips": "007",
                "name": "Ukwa East",
                "Tinubu": "62.7",
                "Obi": "33.8",
                "value": 6,
                "LGACode": "1011",
                "id": "NG.AB.1013"
            },
            {
                "incits": "56009",
                "fips": "009",
                "name": "Aba North",
                "Tinubu": "75.7",
                "Obi": "21.2",
                "value": 11,
                "LGACode": "1008",
                "id": "NG.AB.1001"
            },
            {
                "incits": "56011",
                "fips": "011",
                "name": "Bende",
                "Tinubu": "80.1",
                "Obi": "16.5",
                "value": 6,
                "LGACode": "1002",
                "id": "NG.AB.1004"
            },
            {
                "incits": "56013",
                "fips": "013",
                "name": "Ohafia",
                "Tinubu": "62.6",
                "Obi": "33.9",
                "value": 33,
                "LGACode": "1007",
                "id": "NG.AB.1010"
            },
            {
                "incits": "56015",
                "fips": "015",
                "name": "Obi Nwga",
                "Tinubu": "66.1",
                "Obi": "30.7",
                "value": 6,
                "LGACode": "1015",
                "id": "NG.AB.1009"
            },
            {
                "incits": "56017",
                "fips": "017",
                "name": "Umu-Nneochi",
                "Tinubu": "71.5",
                "Obi": "24.1",
                "value": 4,
                "LGACode": "1009",
                "id": "NG.AB.1015"
            },
            {
                "incits": "56019",
                "fips": "019",
                "name": "Isiala-Ngwa South",
                "Tinubu": "76.2",
                "Obi": "20.7",
                "value": 10,
                "LGACode": "1010",
                "id": "NG.AB.1007"
            },
            {
                "incits": "56021",
                "fips": "021",
                "name": "Aba South",
                "Tinubu": "58.7",
                "Obi": "38.4",
                "value": 7,
                "LGACode": "1004",
                "id": "NG.AB.1002"
            },
            {
                "incits": "56023",
                "fips": "023",
                "name": "Isuikwuato",
                "Tinubu": "75.2",
                "Obi": "21.2",
                "value": 8,
                "LGACode": "1001",
                "id": "NG.AB.1008"
            },
            {
                "incits": "56025",
                "fips": "025",
                "name": "Isiala-Ngwa North",
                "Tinubu": "65.4",
                "Obi": "31.3",
                "value": 1,
                "LGACode": "1013",
                "id": "NG.AB.1006"
            },
            {
                "incits": "56027",
                "fips": "027",
                "name": "Osisioma Ngwa",
                "Tinubu": "77.9",
                "Obi": "18.7",
                "value": 9,
                "LGACode": "1017",
                "id": "NG.AB.1011"
            },
            {
                "incits": "56029",
                "fips": "029",
                "name": "Arochukwu",
                "Tinubu": "72.0",
                "Obi": "24.9",
                "value": 6,
                "LGACode": "1014",
                "LGACode": "1016",
                "id": "NG.AB.1003"
            },
            {
                "incits": "56031",
                "fips": "031",
                "name": "Ugwunagbo",
                "Tinubu": "65.3",
                "Obi": "30.6",
                "value": 1,
                "LGACode": "1006",
                "id": "NG.AB.1012"
            },
            {
                "incits": "56033",
                "name": "Ikwuano",
                "Tinubu": "67.7",
                "Obi": "29.6",
                "value": 9,
                "LGACode": "1011",
                "id": "NG.AB.1005"
            },
        ]
    }
}

function getCandidateData() {
    return [{
        "id": "NG.BO",
        "value": 4,
        "state": "Borno",
        "PDP": "7.80",
        "APC": "83.94",
        "LP": "7.00",
        "RV": "2915956",
        "CP": "2000228"
    },
    {
        "id": "NG.AB",
        "value": 3,
        "state": "Aba",
        "lgas": 17,
        "wards": 184,
        "PDP": "6.31",
        "APC": "20.00",
        "LP": "60.00",
        "RV": "1932892",
        "CP": "1729943"
    },
    {
        "id": "NG.AK",
        "value": 6,
        "state": "Akwa Ibom",
        "PDP": "16..00",
        "APC": "14.31",
        "LP": "67.39",
        "RV": "2119727",
        "CP": "1933362"
    },
    {
        "id": "NG.IM",
        "value": 7,
        "state": "Imo",
        "PDP": "8.47",
        "APC": "10.64",
        "LP": "80.00",
        "RV": "2272293",
        "CP": "1702178"
    },
    {
        "id": "NG.RI",
        "value": 4,
        "state": "Rivers",
        "PDP": "33.81",
        "APC": "23.47",
        "LP": "29.21",
        "RV": "3215273",
        "CP": "2833101"
    },
    {
        "id": "NG.BY",
        "value": 6,
        "state": "Bayelsa",
        "PDP": "51.51",
        "APC": "30.93",
        "LP": "33.00",
        "RV": "923182",
        "CP": "769509"
    },
    {
        "id": "NG.BE",
        "value": 3,
        "state": "Benue",
        "PDP": "48.95",
        "APC": "41.70",
        "LP": "30.00",
        "RV": "2480131",
        "CP": "2244376"
    },
    {
        "id": "NG.CR",
        "value": 7,
        "state": "Cross River",
        "PDP": "30.10",
        "APC": "27.80",
        "LP": "45.00",
        "RV": "1527289",
        "CP": "1387314"
    },
    {
        "id": "NG.TA",
        "value": 3,
        "state": "Taraba",
        "PDP": "52.57",
        "APC": "45.58",
        "LP": "7.00",
        "RV": "1777105",
        "CP": "1727094"
    },
    {
        "id": "NG.KW",
        "value": 8,
        "state": "Kwara",
        "PDP": "30.06",
        "APC": "67.22",
        "LP": "15.00",
        "RV": "1406457",
        "CP": "1149969"
    },
    {
        "id": "NG.LA",
        "value": 3,
        "state": "Lagos",
        "PDP": "40.12",
        "APC": "51.31",
        "LP": "28.98",
        "RV": "6570291",
        "CP": "5531389"
    },
    {
        "id": "NG.NI",
        "value": 12,
        "state": "Niger",
        "PDP": "25.59",
        "APC": "71.88",
        "LP": "9.00",
        "RV": "2390035",
        "CP": "2173204"
    },
    {
        "id": "NG.OG",
        "value": 3,
        "state": "Ogun",
        "PDP": "34.50",
        "APC": "49.94",
        "LP": "33.00",
        "RV": "2375003",
        "CP": "1694867"
    },
    {
        "id": "NG.ON",
        "value": 11,
        "state": "Ondo",
        "PDP": "49.62",
        "APC": "43.48",
        "LP": "29",
        "RV": "1822346",
        "CP": "1478460"
    },
    {
        "id": "NG.EK",
        "value": 9,
        "state": "Ekiti",
        "PDP": "40.41",
        "APC": "57.52",
        "LP": "19",
        "RV": "909967",
        "CP": "666591"
    },
    {
        "id": "NG.OS",
        "value": 15,
        "state": "Osun",
        "PDP": "47.21",
        "APC": "48.64",
        "LP": "20.00",
        "RV": "1680498",
        "CP": "1266587"
    },
    {
        "id": "NG.OY",
        "value": 21,
        "state": "Oyo",
        "PDP": "43.83",
        "APC": "43.66",
        "LP": "51.00",
        "RV": "2934107",
        "CP": "2176352"
    },
    {
        "id": "NG.AN",
        "value": 9,
        "state": "Anambra",
        "PDP": "46.63",
        "APC": "5.50",
        "LP": "50.00",
        "RV": "2447996",
        "CP": "2071714"
    },
    {
        "id": "NG.BA",
        "value": 8,
        "state": "Bauchi",
        "PDP": "20.43",
        "APC": "77.95",
        "LP": "17.35",
        "RV": "2462843",
        "CP": "2335717"
    },
    {
        "id": "NG.GO",
        "value": 18,
        "state": "Gombe",
        "PDP": "24.99",
        "APC": "72.71",
        "LP": "17.35",
        "RV": "1394393",
        "CP": "1335223"
    },
    {
        "id": "NG.DE",
        "value": 12,
        "state": "Delta",
        "PDP": "71.59",
        "APC": "26.67",
        "LP": "17.35",
        "RV": "2845274",
        "CP": "2470924"
    },
    {
        "id": "NG.ED",
        "value": 13,
        "state": "Edo",
        "PDP": "49.17",
        "APC": "47.77",
        "LP": "27.00",
        "RV": "2210534",
        "CP": "1726738"
    },
    {
        "id": "NG.EN",
        "value": 12,
        "state": "Enugu",
        "PDP": "4.45",
        "APC": "12.93",
        "LP": "84.21",
        "RV": "1944016",
        "CP": "1787537"
    },
    {
        "id": "NG.EB",
        "value": 13,
        "state": "Ebonyi",
        "PDP": "31.25",
        "APC": "25.26",
        "LP": "35.98",
        "RV": "1459933",
        "CP": "1299048"
    },
    {
        "id": "NG.KD",
        "value": 14,
        "state": "Kaduna",
        "PDP": "39.05",
        "APC": "59.72",
        "LP": "17.35",
        "RV": "3932492",
        "CP": "3648831"
    },
    {
        "id": "NG.KO",
        "value": 12,
        "state": "Kogi",
        "PDP": "41.88",
        "APC": "54.87",
        "LP": "17.35",
        "RV": "1646350",
        "CP": "1435751"
    },
    {
        "id": "NG.PL",
        "value": 8,
        "state": "Plateu",
        "PDP": "53.02",
        "APC": "45.28",
        "LP": "17.35",
        "RV": "2480455",
        "CP": "2095409"
    },
    {
        "id": "NG.NA",
        "value": 9,
        "state": "Nasarawa",
        "PDP": "48.87",
        "APC": "49.92",
        "LP": "17.35",
        "RV": "1617786",
        "CP": "1442184"
    },
    {
        "id": "NG.JI",
        "value": 6,
        "state": "Jigawa",
        "PDP": "26.21",
        "APC": "71.84",
        "LP": "17.35",
        "RV": "2111106",
        "CP": "1625721"
    },
    {
        "id": "NG.KN",
        "value": 3,
        "state": "Kano",
        "PDP": "20.71",
        "APC": "77.45",
        "LP": "27.35",
        "RV": "5457747",
        "CP": "4696747"
    },
    {
        "id": "NG.KT",
        "value": 12,
        "state": "Katsina",
        "PDP": "19.8",
        "APC": "79.21",
        "LP": "20.35",
        "RV": "3230230",
        "CP": "3187988"
    },
    {
        "id": "NG.SO",
        "value": 7,
        "state": "Sokoto",
        "PDP": "41.47",
        "APC": "56.24",
        "LP": "17.35",
        "RV": "1903166",
        "CP": "1726887"
    },
    {
        "id": "NG.ZA",
        "value": 17,
        "state": "Zamfara",
        "PDP": "21.68",
        "APC": "75.84",
        "LP": "17.35",
        "RV": "1717128",
        "CP": "1626839"
    },
    {
        "id": "NG.YO",
        "value": 5,
        "state": "Yobe",
        "PDP": "9.08",
        "APC": "89.01",
        "LP": "17.35",
        "RV": "1365913",
        "CP": "1261914"
    },
    {
        "id": "NG.KE",
        "value": 6,
        "state": "Kebbi",
        "PDP": "20.39",
        "APC": "76.86",
        "LP": "17.35",
        "RV": "1806231",
        "CP": "1718180"
    },
    {
        "id": "NG.AD",
        "value": 6,
        "state": "Adamawa",
        "PDP": "67.96",
        "APC": "26.31",
        "LP": "17.35",
        "RV": "1973083",
        "CP": "1788706"
    },
    {
        "id": "NG.FC",
        "value": 12,
        "state": "FCT",
        "PDP": "11.33",
        "APC": "35.91",
        "LP": "67.35",
        "RV": "1344856",
        "CP": "1026920"
    }
    ]
}
