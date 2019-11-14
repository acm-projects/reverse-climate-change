
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab) prefab: cc.Prefab = null;
    @property(cc.Button) button: cc.Button = null;
    
    onCreateAssets() {
        let newNode = cc.instantiate(this.prefab);

        newNode.setPosition(cc.find('Grass').x,cc.find('Grass').y);

       cc.find('NewScript').addChild(newNode);
        
  }

    start () {
        this.button.node.on('click', (event) => {
            console.log('CLICK');
            this.onCreateAssets();
            cc.find('Grass').active = false;
           this.node.removeAllChildren
    });

    }

   
}
