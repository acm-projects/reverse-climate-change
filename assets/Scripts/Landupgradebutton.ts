
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab) prefab: cc.Prefab = null;
    @property(cc.Button) button: cc.Button = null;
    
    onCreateAssets() {
        let newNode = cc.instantiate(this.prefab);

        newNode.setPosition(cc.find('Canvas/land9').x,cc.find('Canvas/land9').y);

       cc.find('Canvas').addChild(newNode);
        
  }

    start () {
        this.button.node.on('click', (event) => {
            console.log('CLICK');
            this.onCreateAssets();
            cc.find('Canvas/land9').active = false;
           this.node.removeAllChildren
           cc.log("cc.find('NewScript')");
    });

    }

   
}
