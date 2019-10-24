"use strict";
cc._RF.push(module, '1b40e+/IOJOLplT8H2fWhAg', 'Clicker');
// Scripts/Clicker.js

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
    onLoad: function onLoad() {
        // initialize money
        this.money = 0;
        this.moneyRate = 5;
    },

    update: function update(dt) {},


    getMoney: function getMoney() {
        return this.money;
    },

    gainMoney: function gainMoney() {
        this.money += 1;
        // update the words of the moneyDisplay Label
        //this.moneyDisplay.string = "$" + this.money; 
        //while (this.money < 10)
        //{
        //  this.moneyDisplay.string = "$" + this.money;
        //this.money++;  
        //}
    },

    autoClicker: function autoClicker() {
        setInterval(gainMoney, 1000);
    },

    setMoneyRate: function setMoneyRate(moneyRate) {
        this.moneyRate = moneyRate;
    }

});

cc._RF.pop();