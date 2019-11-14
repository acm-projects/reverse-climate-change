const {ccclass, property} = cc._decorator;

@ccclass export default class Canvas extends cc.Component {

    @property(cc.Prefab) prefab: cc.Prefab = null;
   
    


  onCreateAssets() {
        let newNode = cc.instantiate(this.prefab);

        newNode.setPosition(400,100);

       cc.find('NewScript').addChild(newNode);
        
  }
    start () {
        
        this.node.on('touchend', (event) => {
            console.log('CLICK');
            this.onCreateAssets();
            cc.log("meep")
         
           
        });
    }

    update() { }

  
}
