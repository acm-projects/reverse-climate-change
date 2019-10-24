const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label;

    @property({
        default: 'hello'
    })
    text: string = 'hello';

    onLoad() {
        // init logic
        cc.log("help")
    }
    CreateLand(){
        cc.log("help me")
        cc.log(this.node)
        const newLand = cc.instantiate(this.node)
        
        newLand.setPosition(200,200)
        cc.log("help me")
    }
}
