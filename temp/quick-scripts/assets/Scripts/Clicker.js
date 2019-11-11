(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Clicker.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1b40e+/IOJOLplT8H2fWhAg', 'Clicker', __filename);
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
        var savedMoney = cc.sys.localStorage.getItem("money");
        if (savedMoney == undefined) {
            cc.sys.localStorage.setItem("money", 0);
        }

        //initialize carbon footprint
        var savedFootprint = cc.sys.localStorage.getItem("footprint");
        if (savedFootprint == undefined) {
            cc.sys.localStorage.setItem("footprint", 0);
        }

        //initialize required energy
        var savedRequired = cc.sys.localStorage.getItem("requiredEnergy");
        if (savedRequired == undefined) {
            cc.sys.localStorage.setItem("requiredEnergy", 0);
        }

        //initialize energy generated
        var savedGenerated = cc.sys.localStorage.getItem("generatedEnergy");
        if (savedGenerated == undefined) {
            cc.sys.localStorage.setItem("generatedEnergy", 0);
        }

        //initialize 2d array of tiles
        var savedTiles = cc.sys.localStorage.getItem("tiles");
        if (savedTiles == undefined) {
            var tiles = [["grass", "grass", "grass"], ["grass", "grass", "grass"], ["grass", "grass", "grass"]];
            cc.sys.localStorage.setItem("tiles", tiles);
        }
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
        //# sourceMappingURL=Clicker.js.map
        