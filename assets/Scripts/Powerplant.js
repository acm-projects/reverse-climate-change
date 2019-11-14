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

        enerOutputRate: 50,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.sys.localStorage.getItem()
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
    },

    setEnerOutputRate: function setEnerOutput(enerOutputRate) {
        this.enerOutputRate = enerOutputRate;
    }
});
