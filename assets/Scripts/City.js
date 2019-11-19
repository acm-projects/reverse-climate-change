

cc.Class({
    extends: cc.Component,

    properties: 
    {
        enerNeed: 0,
    },



    onLoad () {
        cc.sys.localStorage.setItem("enerNeed", 0);
    },

    start () {

    },

    update (dt) {

    },


});
