
cc.Class({
    extends: cc.Component,

    properties: {

    },


    start () {

    },

    update (dt) {
        cc.find('Canvas/money').getComponent(cc.Label).string = "$" + Math.round(cc.sys.localStorage.getItem("money"));
    },
});
