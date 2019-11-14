
const {ccclass, property} = cc._decorator;

@ccclass export default class Canvas extends cc.Component {

    @property(cc.Button) button: cc.Button = null;

  

    start () {   
        this.button.node.on('click', (event) => {
             console.log('CLICK');

       cc.director.loadScene('try one');
        
    });
    }
    update() { 

    }

  
}