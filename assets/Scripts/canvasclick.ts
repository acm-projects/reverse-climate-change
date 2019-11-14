const {ccclass, property} = cc._decorator;

@ccclass export default class Canvas extends cc.Component {

    @property(cc.Prefab) prefab: cc.Prefab = null;
    @property(cc.Node) Node: cc.Button = null;

  onCreateAssets() {
        let newNode = cc.instantiate(this.prefab);

        newNode.setPosition(0,0);

    this.node.addChild(newNode);
    }
 
    start () {
            this.node.on('touchend', (event) => {
                  
                    this.onCreateAssets();
                      console.log("clickity clack")
            });
      
       
    }

    update() { }

  
}