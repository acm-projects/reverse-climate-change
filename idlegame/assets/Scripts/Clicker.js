/// Learn cc.Class:
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

        housy : cc.button,
        // reference of money label
        moneyDisplay:
        {
            default: null,
            type: cc.Label
        }
       
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // Game.js
    onLoad: function () {
        // ...
        // initialize money
        this.money = 0;
    },

    // update (dt) {},

    gainMoney: function () {
        this.money += 1;
        // update the words of the moneyDisplay Label
        this.moneyDisplay.string = '$' + this.money;
    },
});

//cc.sys.localStorage.setItem('gainMoney', JSON.stringify(gainMoney));
//var userData = JSON.parse(cc.sys.localStorage.getItem('gainMoney'));

var HelloWorldLayer = cc.Label.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
                                      
        cc.sys.localStorage.setItem( JSON.stringify( "gainMoney" ), JSON.stringify( this.money ) );
        
        var value = JSON.parse( cc.sys.localStorage.getItem( JSON.stringify( "gainMoney" ) ) );
                                      
        cc.log( value );
                                      
        return true;
    },
});

var HelloWorldScene = cc.moneyDisplay.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

Editor.Ipc.sendToPanel('try one', 'scene:stash-and-save');