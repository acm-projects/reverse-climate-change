const {ccclass, property} = cc._decorator;

@ccclass export default class Canvas extends cc.Component {

    @property(cc.Prefab) prefab: cc.Prefab = null;
    @property(cc.Button) button: cc.Button = null;
    


  onCreateAssets() {
        let newNode = cc.instantiate(this.prefab);

        newNode.setPosition(100,200);

       cc.find('NewScript').addChild(newNode);
        
  }
    start () {
        
        this.button.node.on('click', (event) => {
            console.log("hello sir");
            this.onCreateAssets();
           
           
        });
    }

    update() { }

  
}