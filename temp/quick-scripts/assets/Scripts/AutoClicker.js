(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/AutoClicker.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '019bfv88aJGtbq4xmZBeQva', 'AutoClicker', __filename);
// Scripts/AutoClicker.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        housy: cc.button,

        // reference for money label
        moneyDisplay: {
            default: null,
            type: cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},


    // Game.js 
    // Game.js 
    onLoad: function onLoad() {
        // initialize money
        this.money = 1;
    },

    // update (dt) {},

    gainMoney: function (_gainMoney) {
        function gainMoney() {
            return _gainMoney.apply(this, arguments);
        }

        gainMoney.toString = function () {
            return _gainMoney.toString();
        };

        return gainMoney;
    }(function () {
        this.money += 1;
        // update the words of the moneyDisplay Label
        while (this.money >= 1) {
            this.money++;
            this.moneyDisplay.string = "$" + this.money;
        }

        setInterval(gainMoney, 1000);
    })

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
        