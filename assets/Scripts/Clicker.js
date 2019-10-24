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
        this.moneyRate = 5; 

    },

    update (dt) {

    },

    getMoney: function()
    {
        return this.money;
    },

    gainMoney: function () 
    {
        this.money +=1; 
        // update the words of the moneyDisplay Label
        //this.moneyDisplay.string = "$" + this.money; 
       //while (this.money < 10)
       //{
         //  this.moneyDisplay.string = "$" + this.money;
           //this.money++;  
       //}
        
    },

    autoClicker: function()
    {
        setInterval(gainMoney, 1000);
    },

    setMoneyRate: function(moneyRate){
        this.moneyRate = moneyRate; 
    }

});
