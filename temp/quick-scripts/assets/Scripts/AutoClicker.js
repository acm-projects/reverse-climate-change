(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/AutoClicker.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '019bfv88aJGtbq4xmZBeQva', 'AutoClicker', __filename);
// Scripts/AutoClicker.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        moneyRate: 0.5

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.sys.localStorage.getItem();
        //Check if money key exist
        // If not set at 0
    },


    //start: function start() {},
    // Game.js 
    //onLoad: function onLoad() {},

    //gainMoney: function gainMoney() {
    //    this.money = cc.sys.localStorage.getItem("money");
    //    this.money += this.moneyRate;
    //    cc.sys.localStorage.setItem("money", this.money);
    //},

    update: function update(dt) {
        var money = cc.sys.localStorage.getItem("money");
        console.log(money);
        money = parseFloat(money);
        if (isNaN(money)) {
            cc.sys.localStorage.setItem("money", 0);
        } else {
            money += this.moneyRate;
            cc.sys.localStorage.setItem("money", money);
        }
    },

    setMoneyRate: function setMoneyRate(moneyRate) {
        this.moneyRate = moneyRate;
    }

});

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
        //# sourceMappingURL=AutoClicker.js.map
        