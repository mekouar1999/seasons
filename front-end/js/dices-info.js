function getDiceInfo(color, id, side) {
    let t = dicesInfo[color];
    let index = 6 * (id - 1) + (side - 1);
    let info = t[index];
    info.color = color;
    info.num = id;
    info.side = side;
    return info;
}

function property(prop) {
    return dicesInfo.properties[prop];
}

const dicesInfo = {
    properties : {
        id: "dé-face",
        fire: "Energie feu gagnée",
        water: "Energie eau gagnée",
        land: "Energie terre gagnée",
        air: "Energie air gagnée",
        crystals: "Nombres de cristaux gagnés",
        invocation: "Points invocation gagnés",
        marker: "Si dé non choisi marqueur avance de",
        card: "Piocher carte",
        crystallize: "Peut cristalliser energie"
    },
    blue: [
        {
            id: "1-1",
            fire: 1,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "1-2",
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 2,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "1-3",
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 3,
            marker: 1,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "1-4",
            fire: 0,
            water: 0,
            land: 0,
            air: 2,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "1-5",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 2,
            invocation: 0,
            card: true,
            crystallize: false
        },
        {
            id: "1-6",
            fire: 0,
            water: 1,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 1,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "2-1",
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "2-2",
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 1,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "2-3",
            fire: 2,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "2-4",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 0,
            card: true,
            crystallize: false
        },
        {
            id: "2-5",
            fire: 0,
            water: 1,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "2-6",
            fire: 0,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "3-1",
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "3-2",
            fire: 0,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 2,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "3-3",
            fire: 0,
            water: 1,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 3,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "3-4",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 0,
            card: true,
            crystallize: false
        },
        {
            id: "3-5",
            fire: 1,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 2,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "3-6",
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 3,
            marker: 3,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "4-1",
            fire: 0,
            water: 1,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 1,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "4-2",
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 2,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "4-3",
            fire: 0,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "4-4",
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "4-5",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: "6",
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "4-6",
            fire: 1,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "5-1",
            fire: 0,
            water: 0,
            land: 0,
            air: 2,
            crystals: 0,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "5-2",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: "6",
            marker: 3,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "5-3",
            fire: 1,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "5-4",
            fire: 0,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "5-5",
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "5-6",
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: false
        }
    ]
    ,
    yellow: [
        {
            id: "1-1",
            fire: 0,
            land: 0,
            crystals: 0,
            water: 0,
            marker: 2,
            air: 0,
            invocation: 0,
            card: true,
            crystallize: false
        },
        {
            id: "1-2",
            fire: 0,
            land: 2,
            crystals: 0,
            water: 0,
            marker: 3,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "1-3",
            fire: 2,
            land: 0,
            crystals: 3,
            water: 0,
            marker: 1,
            air: 0,
            invocation: false
        },
        {
            id: "1-4",
            fire: 2,
            land: 0,
            crystals: 0,
            water: 0,
            marker: 2,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "1-5",
            fire: 0,
            land: 0,
            crystals: 0,
            water: 1,
            marker: 3,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "1-6",
            fire: 1,
            land: 1,
            crystals: 0,
            water: 0,
            marker: 1,
            air: 0,
            invocation: true
        },
        {
            id: "2-1",
            fire: 1,
            land: 1,
            crystals: 0,
            water: 0,
            marker: 2,
            air: 0,
            invocation: true
        },
        {
            id: "2-2",
            fire: 0,
            land: 0,
            crystals: 0,
            water: 0,
            marker: 3,
            air: 0,
            invocation: 0,
            card: true,
            crystallize: false
        },
        {
            id: "2-3",
            fire: 0,
            land: 0,
            crystals: 0,
            water: 2,
            marker: 1,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "2-4",
            fire: 2,
            land: 0,
            crystals: 1,
            water: "",
            marker: 2,
            air: 0,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "2-5",
            fire: 2,
            land: 0,
            crystals: 0,
            water: 0,
            marker: 3,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "2-6",
            fire: 0,
            land: 1,
            crystals: 0,
            water: 0,
            marker: 3,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "3-1",
            fire: 0,
            land: 1,
            crystals: 0,
            water: 0,
            marker: 2,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "3-2",
            fire: 1,
            land: 1,
            crystals: 0,
            water: 0,
            marker: 3,
            air: 0,
            invocation: true
        },
        {
            id: "3-3",
            fire: 0,
            land: 0,
            crystals: 0,
            water: 0,
            marker: 1,
            air: 0,
            invocation: 0,
            card: true,
            crystallize: false
        },
        {
            id: "3-4",
            fire: 0,
            land: 0,
            crystals: 0,
            water: 1,
            marker: 2,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "3-5",
            fire: 2,
            land: 0,
            crystals: 3,
            water: 0,
            marker: 3,
            air: 0,
            invocation: false
        },
        {
            id: "3-6",
            fire: 2,
            land: 0,
            crystals: 0,
            water: 0,
            marker: 1,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "4-1",
            fire: 2,
            land: 0,
            crystals: 2,
            water: 0,
            marker: 2,
            air: 0,
            invocation: false
        },
        {
            id: "4-2",
            fire: 0,
            land: 1,
            crystals: 0,
            water: 0,
            marker: 3,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "4-3",
            fire: 2,
            land: 0,
            crystals: 0,
            water: 0,
            marker: 1,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "4-4",
            fire: 0,
            land: 0,
            crystals: "6",
            water: 0,
            marker: 2,
            air: 0,
            invocation: false
        },
        {
            id: "4-5",
            fire: 0,
            land: 0,
            crystals: 0,
            water: 1,
            marker: 3,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "4-6",
            fire: 1,
            land: 1,
            crystals: 0,
            water: 0,
            marker: 1,
            air: 0,
            invocation: true
        },
        {
            id: "5-1",
            fire: 2,
            land: 0,
            crystals: 0,
            water: 0,
            marker: 3,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "5-2",
            fire: 0,
            land: 1,
            crystals: 0,
            water: 0,
            marker: 1,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "5-3",
            fire: 0,
            land: 2,
            crystals: 0,
            water: 0,
            marker: 1,
            air: 0,
            invocation: true
        },
        {
            id: "5-4",
            fire: 0,
            land: 0,
            crystals: "6",
            water: 0,
            marker: 3,
            air: 0,
            invocation: false
        },
        {
            id: "5-5",
            fire: 0,
            land: 0,
            crystals: 0,
            water: 1,
            marker: 1,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "5-6",
            fire: 2,
            land: 0,
            crystals: 1,
            water: 0,
            marker: 3,
            air: 0,
            invocation: 1,
            card: false,
            crystallize: false
        }
    ],
    red: [
        {
            id: "1-1",
            fire: 1,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 1,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "1-2",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 2,
            invocation: 0,
            card: true,
            crystallize: false
        },
        {
            id: "1-3",
            fire: 2,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "1-4",
            fire: 0,
            water: 0,
            land: 0,
            air: 2,
            crystals: 3,
            marker: 1,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "1-5",
            fire: 0,
            water: 0,
            land: 0,
            air: 2,
            crystals: 0,
            marker: 2,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "1-6",
            fire: 0,
            water: 0,
            land: 1,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "2-1",
            fire: 1,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "2-2",
            fire: 1,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "2-3",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 0,
            card: true,
            crystallize: false
        },
        {
            id: "2-4",
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "2-5",
            fire: 0,
            water: 0,
            land: 0,
            air: 1,
            crystals: 1,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "2-6",
            fire: 0,
            water: 0,
            land: 0,
            air: 2,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "3-1",
            fire: 0,
            water: 0,
            land: 0,
            air: 2,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "3-2",
            fire: 1,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 2,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "3-3",
            fire: 1,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 3,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "3-4",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 0,
            card: true,
            crystallize: false
        },
        {
            id: "3-5",
            fire: 0,
            water: 0,
            land: 1,
            air: 0,
            crystals: 0,
            marker: 2,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "3-6",
            fire: 0,
            water: 0,
            land: 0,
            air: 2,
            crystals: 3,
            marker: 3,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "4-1",
            fire: 1,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 1,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "4-2",
            fire: 0,
            water: 0,
            land: 0,
            air: 2,
            crystals: 2,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "4-3",
            fire: 1,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "4-4",
            fire: 0,
            water: 0,
            land: 0,
            air: 2,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "4-5",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: "6",
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "4-6",
            fire: 0,
            water: 0,
            land: 1,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "5-1",
            fire: 2,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "5-2",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: "6",
            marker: 3,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "5-3",
            fire: 0,
            water: 0,
            land: 1,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "5-4",
            fire: 0,
            water: 0,
            land: 0,
            air: 2,
            crystals: 1,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "5-5",
            fire: 0,
            water: 0,
            land: 0,
            air: 2,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "5-6",
            fire: 1,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: true
        }
    ],
    green: [
        {
            id: "1-1",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 2,
            invocation: 0,
            card: true,
            crystallize: false
        },
        {
            id: "1-2",
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "1-3",
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 3,
            marker: 1,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "1-4",
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 0,
            marker: 2,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "1-5",
            fire: 0,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "1-6",
            fire: 0,
            water: 1,
            land: 1,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "2-1",
            fire: 0,
            water: 1,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "2-2",
            fire: 0,
            water: 1,
            land: 1,
            air: 0,
            crystals: 0,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "2-3",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 0,
            card: true,
            crystallize: false
        },
        {
            id: "2-4",
            fire: 0,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "2-5",
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 1,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "2-6",
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "3-1",
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "3-2",
            fire: 0,
            water: 1,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 2,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "3-3",
            fire: 0,
            water: 1,
            land: 1,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "3-4",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 0,
            card: true,
            crystallize: false
        },
        {
            id: "3-5",
            fire: 0,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 2,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "3-6",
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 3,
            marker: 3,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "4-1",
            fire: 0,
            water: 1,
            land: 1,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "4-2",
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 2,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "4-3",
            fire: 0,
            water: 1,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "4-4",
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "4-5",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: "6",
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "4-6",
            fire: 0,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "5-1",
            fire: 0,
            water: 1,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: true
        },
        {
            id: "5-2",
            fire: 0,
            water: 2,
            land: 0,
            air: 0,
            crystals: 0,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: true
        },
        {
            id: "5-3",
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            crystals: "6",
            marker: 3,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "5-4",
            fire: 0,
            water: 0,
            land: 0,
            air: 1,
            crystals: 0,
            marker: 1,
            invocation: 1,
            card: false,
            crystallize: false
        },
        {
            id: "5-5",
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 1,
            marker: 2,
            invocation: 0,
            card: false,
            crystallize: false
        },
        {
            id: "5-6",
            fire: 0,
            water: 0,
            land: 2,
            air: 0,
            crystals: 0,
            marker: 3,
            invocation: 1,
            card: false,
            crystallize: false
        }
    ]
}