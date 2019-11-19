
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab) prefab: cc.Prefab = null;
    @property(cc.Button) button: cc.Button = null;
    
    onCreateAssets() {
        let newNode = cc.instantiate(this.prefab);

        newNode.setPosition(cc.find('Canvas/land1').x,cc.find('Canvas/land1').y+2);

       cc.find('Canvas').addChild(newNode);
        
  }

    start () {
        this.button.node.on('click', (event) => {
            console.log('CLICK');
            this.onCreateAssets();
            cc.find('Canvas/land1').active = false;
           this.node.removeAllChildren
    });

    }

   
}
