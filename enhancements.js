const items = require('./Items/items')
module.exports={

    success: (item)=>{

    },

    fail: (item)=>{

    },

    repair: (item)=>{
        
        const newItem = Object.assign({}, item)
        newItem.durability=100
        return newItem
    }
};
