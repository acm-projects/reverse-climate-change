"use strict";
cc._RF.push(module, '019bfv88aJGtbq4xmZBeQva', 'AutoClicker');
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