cc.Class({
    extends: cc.Component,

    properties: {
  
    },

    // use this for initialization
    onLoad() {
    this.node.opacity = 255;
    
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
        this.anchorX = 0;
        this.anchorY = 0;
        this.opacity = 255;
        if(this.x%43.6!=0){     
             this.x = this.x-(this.x%43.6);        
            console.log(this.x);
        }
        if(this.y%20.42!=0){
             this.y = this.y-(this.y%20.42);
            console.log(this.y);
            console.log("fuck");
        }
            
    },this.node);
    
    },

});
