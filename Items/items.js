const items = {
    weapon: {
        sword: {
            name: 'Long Sword',
            durability: 100,
            enhancementLevel: 9,
            damage: 65,
            range: 3
        },
        dagger: {
            name: 'stiletto',
            durability: 40,
            enhancementLevel: 0,
            damage: 20,
            range: 1
        },
        bow: {
            name: 'Peasant Bow',
            durability: 45,
            enhancementLevel: 'TET',
            damage: 30,
            range: 6
        }
    },
    armor: {
        leatherShield: {
            name: 'Leather Shield',
            durability: 100,
            enhancementLevel:'PRI',
        },
        gauntletOfPower:{
            name: 'Gauntlets Of Power',
            durability:100,
            enhancementLevel:'PEN'

        }
    }
};
module.exports = {
    weapons:items.weapon,
    armors:items.armor
}
