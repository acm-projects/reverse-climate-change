const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

  update(dt){
      
      this.node.setPositionX(this.node.position.x-=100*dt);
      if(this.node.position.x< -(this.node.parent.width/2) - this.node.width/2)
          this.node.setPositionX(this.node.parent.width/2 + this.node.width/2);
  }
  
        
    }
}
