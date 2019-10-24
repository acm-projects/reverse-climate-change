cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        var ClickEventHandler = new cc.Component.EventHandler();
        ClickEventHandler.target = this.node;
        ClickEventHandler.component = "NewScript";
        ClickEventHandler.hander = "callback";
        ClickEventHandler.customEventData = "foobar";
        
        var button = node.getComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);
    },

    callback: function(event,customEventData){
        var node = event.target;
        var button = node.getComponent(cc.Button);
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
