cc.Class({
    extends: cc.Component,

    properties: {
  
    },

    // use this for initialization
    onLoad() {
    this.node.opacity = 160;
    
    this.node.on('touchstart',function(){
        this.opactiy = 255;
    },this.node);
    
    
    this.node.on('touchmove', function(event){
        this.opacity = 255;
        var delta = event.touch.getDelta();
        this.x += delta.x;
        this.y += delta.y;
        
    },this.node);
    
    
    this.node.on('touchend', function(){
        this.opacity = 160;
    },this.node);
    
    },

});
