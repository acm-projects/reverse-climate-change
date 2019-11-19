cc.Class({
    extends: cc.Component,

    properties: {
 
    },


    update (dt) {
        var enerOutput = cc.sys.localStorage.getItem("enerOutput"); 

        this.node.getComponent(cc.Label).string = "Energy Output:" + Math.round(enerOutput);
    },
});
