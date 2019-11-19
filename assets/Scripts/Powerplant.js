

cc.Class({
    extends: cc.Component,

    properties: {

        enerOutputRate: 0,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.sys.localStorage.setItem("enerOutput", 0);
    },

    // start () {},

    update (dt) {

        var enerOutput = cc.sys.localStorage.getItem("enerOutput"); 

        enerOutput = parseFloat(enerOutput);
        if (isNaN(enerOutput))
        {
            cc.sys.localStorage.setItem("enerOutput", 0);
        }
        else 
        {
            enerOutput += this.enerOutputRate;
            cc.sys.localStorage.setItem("enerOutput", enerOutput);
        }
    },
});
