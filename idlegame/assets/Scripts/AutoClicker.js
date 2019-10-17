cc.Class({
    extends: cc.Component,

    properties: 
    {
     
        
        housy: cc.button, 

        // reference for money label
        moneyDisplay:
        {
            default: null,
            type: cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () 
    {

    },

    // Game.js 
    onLoad: function () 
    {
        // initialize money
        this.money = 0; 

    },

    // update (dt) {},

    gainMoney: function () 
    {
        this.money +=1; 
        // update the words of the moneyDisplay Label
        this.moneyDisplay.string = "$" + this.money; 

    },

    autoClicker: function()
    {
        if (this.money > 1)
        {
            this.money = this.money + 1; 
            this.moneyDisplay.string = "$" + this.money;
        }
        
    setInterval(autoClicker, 1000);
    }
});
