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
        const savedMoney = cc.sys.localStorage.getItem("money");
        if (savedMoney == undefined) {
            cc.sys.localStorage.setItem("money", 0);  
        } 

        //initialize carbon footprint
        const savedFootprint = cc.sys.localStorage.getItem("footprint");
        if (savedFootprint == undefined) {
            cc.sys.localStorage.setItem("footprint", 0);
        }

        //initialize required energy
        const savedRequired = cc.sys.localStorage.getItem("requiredEnergy");
        if (savedRequired == undefined) {
            cc.sys.localStorage.setItem("requiredEnergy", 0);
        }

        //initialize energy generated
        const savedGenerated = cc.sys.localStorage.getItem("generatedEnergy");
        if (savedGenerated == undefined) {
            cc.sys.localStorage.setItem("generatedEnergy", 0);
        } 

        //initialize 2d array of tiles
        const savedTiles = cc.sys.localStorage.getItem("tiles");
        if (savedTiles == undefined) {
            var tiles = [["grass", "grass", "grass"], ["grass", "grass", "grass"], ["grass", "grass", "grass"]];
            cc.sys.localStorage.setItem("tiles", tiles);
        }
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
