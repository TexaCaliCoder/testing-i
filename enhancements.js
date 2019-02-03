const displayLevel = {
    16: "PRI",
    17: "DUO",
    18: "TRI",
    19: "TET",
    20: "PEN"
};
const levelToNumber = {
    "PRI": 16,
    "DUO": 17,
    "TRI": 18,
    "TET": 19,
    "PEN": 20
}
module.exports = {

    success: (item) => {
        const newItem = Object.assign({}, item);
        let level = newItem.enhancementLevel;
        const type = newItem.type;
        let actualLevels = Object.keys(levelToNumber);
        // console.log(actualLevels);
        if (actualLevels.includes(level) && level !== "PEN") {
            let newLevel = levelToNumber[level];
            newLevel++;
            level = displayLevel[newLevel];
            newItem.name = `[${level}]${newItem.itemName}`;
            console.log(newItem.name)
            return newItem.name;
        } else if (actualLevels.includes(level) && level === "PEN") {
            newItem.name = `[${level}]${newItem.itemName}`;
            console.log(newItem.name)
            return newItem.name;
        } else if ((level < 5 && type === 'A') || (level < 7 && type === 'W')) {
            level++;
            newItem.name = `[+${level}]${newItem.itemName}`;
            return newItem.name;
        } else if (level === 15) {
            level++;
            newLevel = displayLevel[level];
            level = newLevel;
            newItem.name = `[${level}]${newItem.itemName}`
            return newItem.name

        }

    },

    fail: (item) => {

    },

    repair: (item) => {
        const newItem = Object.assign({}, item)
        newItem.durability = 100
        return newItem
    }
};