"use strict";
cc._RF.push(module, '3cc71QdCdJFSoFnPcQVX2c3', 'City');
// Scripts/City.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // The carbon footprint of the city
        carbonFootprint: 0,

        // The max citizens the city can have
        maxMoneyRate: 0,

        moneyRate: 1,

        // The city's cost to build:
        costToBuild: 0,

        // The max citizens each city can hold
        highDenseCity: 100,

        medDenseCity: 50,

        smallDenseCity: 25

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    update: function update(dt) {
        // Make an instance of AutoClicker with the current Money Rate
    }
}

// Make a getter for moneyRate and maxMoneyRate
);

cc._RF.pop();