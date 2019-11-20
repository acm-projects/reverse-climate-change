
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab) prefab: cc.Prefab = null;
    @property(cc.Button) button: cc.Button = null;

    onCreateAssets() {
        let newNode = cc.instantiate(this.prefab);

        newNode.setPosition(-98.799 - 50, -43.613 + 50);

       cc.find('Canvas').addChild(newNode);

  }

    start () {
        this.button.node.on('click', (event) => {
            console.log('CLICK');
            this.onCreateAssets();
            
           this.node.removeAllChildren
           cc.log("cc.find('NewScript')");
    });

    }


}
