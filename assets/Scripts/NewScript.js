// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
<<<<<<< HEAD:assets/Scripts/Powerplant.js

        enerOutputRate: 0,

=======
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
>>>>>>> de333cdfa26e2c9c36ca34c659e6a506c61e4d7b:assets/Scripts/NewScript.js
    },

    // LIFE-CYCLE CALLBACKS:

<<<<<<< HEAD:assets/Scripts/Powerplant.js
    onLoad () {
        cc.sys.localStorage.setItem("energyoutput", 0);
    },

    // start () {},

    update (dt) {

        var enerOutput = cc.sys.localStorage.getItem("energyoutput")
        enerOutput = parseFloat(enerOutput);
        if (isNaN(enerOutput))
        {
            cc.sys.localStorage.setItem("energyoutput", 0);
        }
        else 
        {
            enerOutput += this.enerOutputRate;
            cc.sys.localStorage.setItem("energyoutput", enerOutput);
        }
=======
    // onLoad () {},

    start () {

>>>>>>> de333cdfa26e2c9c36ca34c659e6a506c61e4d7b:assets/Scripts/NewScript.js
    },

    setEnerOutputRate: function setEnerOutput(enerOutputRate) {
        this.enerOutputRate = enerOutputRate;
    }
});
