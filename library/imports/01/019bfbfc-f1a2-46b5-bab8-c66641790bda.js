"use strict";
cc._RF.push(module, '019bfv88aJGtbq4xmZBeQva', 'AutoClicker');
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