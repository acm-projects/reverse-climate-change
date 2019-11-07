const {ccclass, property} = cc._decorator;

@ccclass export default class Canvas extends cc.Component {

    @property(cc.Node) prefab: cc.Node= null;
    @property(cc.Node) prefab1: cc.Node = null;
    @property(cc.Node) prefab2: cc.Node = null;

    @property(cc.Button) button: cc.Button = null;
  



    start () {
        
        this.button.node.on('click', (event) => {
            console.log('CLICKy');
           this.prefab.destroy();
           this.prefab1.destroy();
           this.prefab2.destroy();
           
        });
    }

    update() { }

  
}