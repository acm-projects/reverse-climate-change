(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/City.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3cc71QdCdJFSoFnPcQVX2c3', 'City', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=City.js.map
        