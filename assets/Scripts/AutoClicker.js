

cc.Class({
    extends: cc.Component,

    properties: {
        moneyRate: 0,
    
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.sys.localStorage.setItem("money", 0);
        //Check if money key exists
        // If not set at 0
    },


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
            money += this.moneyRate;
            cc.sys.localStorage.setItem("money", money);
        }

    },

    setMoneyRate: function setMoneyRate(moneyRate) {
        this.moneyRate = moneyRate;
    }

});

