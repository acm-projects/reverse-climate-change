
cc.Class({
    extends: cc.Component,

    properties: {
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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
<<<<<<< HEAD
        
        var money = cc.sys.localStorage.getItem("money");
        
        this.node.getComponent(cc.Label).string = "$" + Math.round(money);
=======
        cc.find('Canvas/money').getComponent(cc.Label).string = "$" + cc.sys.localStorage.getItem("money");
>>>>>>> de333cdfa26e2c9c36ca34c659e6a506c61e4d7b
    },
});
