const enhance = require('../enhancements');
const items = require('../Items/items')
console.log(items.weapons.bow);




    describe('repair',()=>{
        it('repairs items to 100 durability',()=>{
            const item={durability: 56, enhancement:0};
            const actual= enhance.repair(items.weapons.bow);
            expect(actual.durability).toBe(100);
        

        })
    })
