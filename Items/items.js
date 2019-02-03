const items = {
    weapon: {
        sword: {
            itemName: 'Long Sword',
            name:'',
            durability: 100,
            enhancementLevel: 15,
            damage: 65,
            range: 3,
            type: 'W'
        },
        dagger: {
            itemName: 'Stiletto',
            name:'',
            durability: 40,
            enhancementLevel: 0,
            damage: 20,
            range: 1,
            type: 'W'
        },
        bow: {
            itemName: 'Peasant Bow',
            name: '',
            durability: 45,
            enhancementLevel: 'TET',
            damage: 30,
            range: 6,
            type: 'W'
        }
    },
    armor: {
        leatherShield: {
            itemName: 'Leather Shield',
            name:'',
            durability: 100,
            enhancementLevel:'PRI',
            type: 'A'
        },
        gauntletOfPower:{
            itemName: 'Gauntlets Of Power',
            name:'',
            durability:100,
            enhancementLevel:'PEN',
            type: 'A'

        }
    }
};
module.exports = {
    weapons:items.weapon,
    armors:items.armor
}
