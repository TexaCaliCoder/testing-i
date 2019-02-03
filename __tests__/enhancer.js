const enhance = require('../enhancements');
const items = require('../Items/items')




    describe('success',()=>{
        it('increases item enhancement by 1', ()=>{
        const actual = enhance.success(items.weapons.dagger);
            expect(actual).toBe('[+1]Stiletto');
        }),
        it('enhances element level to the next name value',()=>{
            const actual = enhance.success(items.weapons.bow);
            expect(actual).toBe('[PEN]Peasant Bow');
        }),
        it('checks to see if PEN increases or stays put',()=>{
            const actual = enhance.success(items.armors.gauntletOfPower);
            expect(actual).toBe('[PEN]Gauntlets Of Power');
        }),
        it('verifies 15 changes to string level',()=>{
            const actual = enhance.success(items.weapons.sword);
            expect(actual).toBe('[PRI]Long Sword')
        })

    })
    describe('repair',()=>{
        it('repairs items to 100 durability',()=>{
            const actual= enhance.repair(items.weapons.bow);
            expect(actual.durability).toBe(100);
        })
    })
