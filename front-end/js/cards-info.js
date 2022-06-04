function getCardInfo(cardId) {
    let info = {};
    for(let p in cardsInfo.properties) {
        info[p] = cardsInfo.cards[cardId - 1][p];
        if (info[p].length == 3) {
            info[p] = info[p][client.game.year - 1];
        }
    }
    return info;
}

function cardProperty(prop) {
    return cardsInfo.properties[prop];
}

const cardsInfo = {
    properties : {
        id: "Numero de la carte",
        name: "Nom de la carte",
        fire: "Energie Feu Requise",
        water: "Energie Eau Requise",
        land: "Energie Terre Requise",
        air: "Energie Air Requise",
        crystals: "Nombre de Crystaux Recquis"
    },
    cards: [
        {
            id: "1",
            name : "Amulette d'air",
            fire: 0,
            water: 0,
            land: 0,
            air: 2,
            crystals: 0
        },
        {
            id: "2",
            name : "Amulette de feu ",
            fire: 2,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0
        },
        {
            id: "3",
            name : "Amulette de terre ",
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 0
        },
        {
            id: "4",
            name : "Amulette d'eau ",
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 0
        },
        {
            id: "5",
            name : "Balance d’Ishtar ",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0
        },
        {
            id: "6",
            name : "Bâton du printemps ",
            fire: 0,
            water: 0,
            land: 3,
            air: 0,
            crystals: 0
        },
        {
            id: "7",
            name : "Bottes temporelles" ,
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0
        },
        {
            id: "8",
            name : "Bourse d’Io" ,
            fire: 1,
            water: 0,
            land: 1,
            air: 0,
            crystals: 0
        }, {
            id: "9",
            name :  "Calice divin" ,
            fire: 1,
            water: 1,
            land: 1,
            air: 1,
            crystals: 0
        }, {
            id: "10",
            name : "Syllas le fidèle",
            fire: 3,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0
        }, {
            id: "11",
            name : "Figrim l’Avaricieux" ,
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: [3,6,9]
        }, {
            id: "12",
            name : "Naria la prophétesse" ,
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 3
        }, {
            id: "13",
            name :  "Coffret merveilleux" ,
            fire: 1,
            water: 1,
            land: 0,
            air: 0,
            crystals: 0
        }, {
            id: "14",
            name :  "Corne du mendiant" ,
            fire: 0,
            water: 0,
            land: 1,
            air: 1,
            crystals: 0
        }, {
            id: "15",
            name : "Dé de la malice" ,
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0
        }, {
            id: "16",
            name :  "Kairn le destructeur" ,
            fire: 3,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0
        }, {
            id: "17",
            name : "Amsug Longcoup" ,
            fire: 1,
            water: 1,
            land: 0,
            air: 0,
            crystals: 0
        }, {
            id: "18",
            name : "Grimoire ensorcelé",
            fire: 0,
            water: 1,
            land: 1,
            air: 0,
            crystals: 0
        }, {
            id: "19",
            name : "Heaume de Ragfield",
            fire: 3,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0
        }, {
            id: "20",
            name : "Main de la fortune" ,
            fire: 1,
            water: 0,
            land: 1,
            air: 1,
            crystals: 3
        }, {
            id: "21",
            name :"Lewis Grisemine" ,
            fire: 1,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0
        }, {
            id: "22",
            name :  "Cube runique d’Eolis" ,
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 20
        }, {
            id: "23",
            name :  "Potion de puissance" ,
            fire: 2,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0
        }, {
            id: "24",
            name : "Potion de rêves" ,
            fire: 0,
            water: 0,
            land: 0,
            air: 2,
            crystals: 0
        }, {
            id: "25",
            name : "Potion de savoir" ,
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 0
        }, {
            id: "26",
            name : "Potion de vie" ,
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 0
        }, {
            id: "27",
            name : "Sablier du temps" ,
            fire: 1,
            water: 1,
            land: 1,
            air: 1,
            crystals: 0
        }, {
            id: "28",
            name :  "Sceptre de grandeur" ,
            fire: 1,
            water: 1,
            land: 1,
            air: 1,
            crystals: 0
        }, {
            id: "29",
            name :  "Statue bénie d’Olaf" ,
            fire: 0,
            water: 3,
            land: 0,
            air: 0,
            crystals: 0
        }, {
            id: "30",
            name :  "Vase oublié d’Yjang" ,
            fire: 1,
            water: 1,
            land: 1,
            air: 0,
            crystals: 0
        }, {
            id: "31",
            name :  "Amulette élémentaire" ,
            fire: 1,
            water: 1,
            land: 1,
            air: 1,
            crystals: 0
        }, {
            id: "32",
            name : "Arbre de lumière" ,
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 0
        }, {
            id: "33",
            name :  "Arcano sangsue" ,
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: [2,5,8]
        }, {
            id: "34",
            name :  "Orbe de cristal" ,
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0
        }, {
            id: "35",
            name :  "Chaudron glouton" ,
            fire: 1,
            water: 0,
            land: 1,
            air: 0,
            crystals: 0
        }, {
            id: "36",
            name :  "Couronne vampirique" ,
            fire: 0,
            water: 1,
            land: 0,
            air: 1,
            crystals: 0
        }, {
            id: "37",
            name :  "Crâne de dragon" ,
            fire: 1,
            water: 1,
            land: 1,
            air: 0,
            crystals: 0
        }, {
            id: "38",
            name :  "Démon d’Argos" ,
            fire: 1,
            water: 1,
            land: 1,
            air: 1,
            crystals: 0
        }, {
            id: "39",
            name :  "Titus Beauregard" ,
            fire: [1,2,3 ],
            water: 0,
            land: 0,
            air: 0,
            crystals: 0
        },
        {
            id: "40",
            name :  "Elémentaire d’air" ,
            fire: 0,
            water: 0,
            land: 0,
            air: 3,
            crystals: 0
        },{
            id: "41",
            name : "Fées chapardeuses" ,
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: [0,3,6]
        },{
            id: "42",
            name : "Traité maudit d’Arus" ,
            fire: 0,
            water: 1,
            land: 0,
            air: 0,
            crystals: 0
        },{
            id: "43",
            name :  "Idole du familier" ,
            fire: 1,
            water: 1,
            land: 1,
            air: 1,
            crystals: 0
        },{
            id: "44",
            name : "Kriss nécrotique" ,
            fire: 0,
            water: 1,
            land: 0,
            air: 2,
            crystals: 0
        },{
            id: "45",
            name : "Lanterne de Xidit" ,
            fire: 3,
            water: 0,
            land: 3,
            air: 0,
            crystals: 0
        },{
            id: "46",
            name :  "Coffre scellé d’Urm" ,
            fire: 0,
            water: 2,
            land: 1,
            air: 0,
            crystals: 0
        },{
            id: "47",
            name :  "Miroir des saisons" ,
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 3
        },{
            id: "48",
            name :  "Pendentif de Ragnor" ,
            fire: 1,
            water: 1,
            land: 0,
            air: 1,
            crystals: 0
        },{
            id: "49",
            name :  "Sid Ombrenuit" ,
            fire: 0,
            water: 0,
            land: [1,2,3],
            air: 0,
            crystals: 0
        },{
            id: "50",
            name : "Âme damnée d’Onys" ,
            fire: 0,
            water: 1,
            land: 0,
            air: 0,
            crystals: 0
        }

    ]

}