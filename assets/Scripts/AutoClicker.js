

cc.Class({
    extends: cc.Component,

    properties: {
        badMoneyRate: 0,
        goodMoneyRate: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.sys.localStorage.setItem("money", 0);
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
        console.log (money);
        money = parseFloat(money);
        if (isNaN(money))
        {
            cc.sys.localStorage.setItem("money", 0);
        }
        else 
        {
            money += this.goodMoneyRate;
            cc.sys.localStorage.setItem("money", money);
        }

    },

});


