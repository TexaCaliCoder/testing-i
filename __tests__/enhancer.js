const enhance = require('../enhancements');
const items = require('../Items/items')
console.log(items.weapons.bow.enhancementLevel)



    describe('success',()=>{
        it('increases item enhancement by 1', ()=>{
         expect(enhance.success(items.weapons.dagger).enhacementLevel)
            .toHaveProperty('enhancementLevel', 1  )   
        })
        it('enhances a name value to the next name value',()=>{
            expect(enhance.success(items.weapons.bow).enhacementLevel)
            .toHaveProperty('enhancementLevel', 'PEN');
        })

    })
    describe('repair',()=>{
        it('repairs items to 100 durability',()=>{
            const actual= enhance.repair(items.weapons.bow);
            expect(actual.durability).toBe(100);
        })
    })
