const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

update(dt){
    this.node.setPositionX(this.node.position.x+2*dt);
    

}
}
