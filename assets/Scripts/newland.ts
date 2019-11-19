const {ccclass, property} = cc._decorator;

@ccclass export default class Canvas extends cc.Component {

    @property(cc.Prefab) prefab: cc.Prefab = null;
    @property(cc.Button) button: cc.Button = null;


  onCreateAssets() {
  	  cc.sys.localStorage.removeItem('side')
  		if(cc.sys.localStorage.getItem('side') === null)
  		{
  			// Instantiate new side nodes for new length of 4
       		let newNode = cc.instantiate(this.prefab);
        	let newNode2 = cc.instantiate(this.prefab);
        	let newNode3 = cc.instantiate(this.prefab);
        	let newNode4 = cc.instantiate(this.prefab);
        	let newNode5 = cc.instantiate(this.prefab);
        	let newNode6 = cc.instantiate(this.prefab);
        	let newNode7 = cc.instantiate(this.prefab);

        	// Set the positions for each new side node
        	newNode.setPosition(-98.799 - 50, -43.613 + 50);
        	newNode2.setPosition(-57.622 - 50, -63.647 + 50);
       		newNode3.setPosition(-15.951 - 50, -84.629 + 50);
        	newNode4.setPosition(116.1675 + 41.8445 - 50, -47.889 + 50);
        	newNode5.setPosition(115.1675 - 50,-66.584 + 50)
        	newNode6.setPosition(70.749 - 50, -85.898 + 50)
      		newNode7.setPosition(26.007 - 50, -105.148 + 50);

      		
        	this.node.addChild(newNode);
        	this.node.addChild(newNode2);
        	this.node.addChild(newNode3);
        	this.node.addChild(newNode4);
        	this.node.addChild(newNode5);
        	this.node.addChild(newNode6);
        	this.node.addChild(newNode7);
         // cc.sys.localStorage.setItem('side', 4);

         // var savedTiles = cc.sys.localStorage.getItem("tiles");
          
        }
        else if(cc.sys.localStorage.getItem('side') == 4)
        {
        	// Instantiate new side nodes for new length of 5
        	let newNode8 = cc.instantiate(this.prefab);
        	let newNode9 = cc.instantiate(this.prefab);
        	let newNode10 = cc.instantiate(this.prefab);
        	let newNode11 = cc.instantiate(this.prefab);
        	let newNode12 = cc.instantiate(this.prefab);
        	let newNode13 = cc.instantiate(this.prefab);
        	let newNode14 = cc.instantiate(this.prefab);
        	let newNode15 = cc.instantiate(this.prefab);
        	let newNode16 = cc.instantiate(this.prefab);

        	// Set the positions for each new side node
       		newNode8.setPosition(-143.447 - 50, -62.989 + 50);
        	newNode9.setPosition(-101.607 - 50, -83.38 + 50);
       		newNode10.setPosition(-59.662 - 50, -103.738 + 50);
        	newNode11.setPosition(-17.359 - 50, -124.309 + 50);
        	newNode12.setPosition(200.171 - 50, -68.361 + 50)
        	newNode13.setPosition(155.704 - 50, -87.789 + 50)
      		newNode14.setPosition(112.829 - 50, -106.654 + 50);
      		newNode15.setPosition(68.204 - 50, -125.481 + 50)
      		newNode16.setPosition(24.867 - 50, -144.64 + 50);

      		
        	this.node.addChild(newNode8);
        	this.node.addChild(newNode9);
        	this.node.addChild(newNode10);
        	this.node.addChild(newNode11);
        	this.node.addChild(newNode12);
        	this.node.addChild(newNode13);
        	this.node.addChild(newNode14);
        	this.node.addChild(newNode15);
        	this.node.addChild(newNode16);
        	cc.sys.localStorage.setItem('side', 5);
        }
        else if(cc.sys.localStorage.getItem('side') == 5)
        {
        	// Instantiate new side nodes for new length of 6
        	let newNode17 = cc.instantiate(this.prefab);
        	let newNode18 = cc.instantiate(this.prefab);
        	let newNode19 = cc.instantiate(this.prefab);
        	let newNode20 = cc.instantiate(this.prefab);
        	let newNode21 = cc.instantiate(this.prefab);
        	let newNode22 = cc.instantiate(this.prefab);
        	let newNode23 = cc.instantiate(this.prefab);
        	let newNode24 = cc.instantiate(this.prefab);
        	let newNode25 = cc.instantiate(this.prefab);
        	let newNode26 = cc.instantiate(this.prefab);
        	let newNode27 = cc.instantiate(this.prefab);

        	// Set the positions for each new side node
        	newNode17.setPosition(-188.1 - 50, -82.453 + 50);
        	newNode18.setPosition(-145.983 - 50, -102.988 + 50);
       		newNode19.setPosition(-104.276 - 50, -123.397 + 50);
        	newNode20.setPosition(-62.492 - 50, -143.797 + 50);
        	newNode21.setPosition(-20.295 - 50 ,-164.355 + 50)
        	newNode22.setPosition(242.304 - 50, -88.87 + 50)
      		newNode23.setPosition(198.444 - 50, -107.844 + 50);
      		newNode24.setPosition(153.925 - 50, -127.405 + 50)
      		newNode25.setPosition(111.075 - 50, -145.986 + 50);
      		newNode26.setPosition(66.635 - 50, -165.473 + 50)
      		newNode27.setPosition(21.666 - 50, -184.7  + 50);

      		
        	this.node.addChild(newNode17);
        	this.node.addChild(newNode18);
        	this.node.addChild(newNode19);
        	this.node.addChild(newNode20);
        	this.node.addChild(newNode21);
        	this.node.addChild(newNode22);
        	this.node.addChild(newNode23);
        	this.node.addChild(newNode24);
        	this.node.addChild(newNode25);
        	this.node.addChild(newNode26);
        	this.node.addChild(newNode27);
        	cc.sys.localStorage.setItem('side', 6);
        }
        else if(cc.sys.localStorage.getItem('side') == 6)
        {
        	// Instantiate new side nodes for new length of 7
        	let newNode28 = cc.instantiate(this.prefab);
        	let newNode29 = cc.instantiate(this.prefab);
        	let newNode30 = cc.instantiate(this.prefab);
        	let newNode31 = cc.instantiate(this.prefab);
        	let newNode32 = cc.instantiate(this.prefab);
        	let newNode33 = cc.instantiate(this.prefab);
        	let newNode34 = cc.instantiate(this.prefab);
        	let newNode35 = cc.instantiate(this.prefab);
        	let newNode36 = cc.instantiate(this.prefab);
        	let newNode37 = cc.instantiate(this.prefab);
        	let newNode38 = cc.instantiate(this.prefab);
        	let newNode39 = cc.instantiate(this.prefab);
        	let newNode40 = cc.instantiate(this.prefab);

        //  Set the positions for each new side node
        	newNode28.setPosition(-232.824 - 50, -101.297 + 50);
        	newNode29.setPosition(-190.913 - 50, -121.921 + 50);
       		newNode30.setPosition(-148.958 - 50, -142.663 + 50);
        	newNode31.setPosition(-107.062 - 50, -163.085 + 50);
        	newNode32.setPosition(-65.107 - 50, -183.355 + 50)
        	newNode33.setPosition(-23.211 - 50, -203.668 + 50)
      		newNode34.setPosition(284.497 - 50, -109.359 + 50);
      		newNode35.setPosition(239.814 - 50, -128.775 + 50)
      		newNode36.setPosition(195.221 - 50, -148.152 + 50);
      		newNode37.setPosition(150.883 - 50, -167.278 + 50)
      		newNode38.setPosition(106.427 - 50, -186.296 + 50);
      		newNode39.setPosition(61.864 - 50, -205.596 + 50)
      		newNode40.setPosition(18.891 - 50, -224.468 + 50);

      		
        	this.node.addChild(newNode28);
        	this.node.addChild(newNode29);
        	this.node.addChild(newNode30);
        	this.node.addChild(newNode31);
        	this.node.addChild(newNode32);
        	this.node.addChild(newNode33);
        	this.node.addChild(newNode34);
        	this.node.addChild(newNode35);
        	this.node.addChild(newNode36);
        	this.node.addChild(newNode37);
        	this.node.addChild(newNode38);
        	this.node.addChild(newNode39);
        	this.node.addChild(newNode40);
        	cc.sys.localStorage.setItem('side', 7);
        }	
       	else if(cc.sys.localStorage.getItem('side') == 7)
        {
        	// Instantiate new side nodes for new length of 8
        	let newNode41 = cc.instantiate(this.prefab);
        	let newNode42 = cc.instantiate(this.prefab);
        	let newNode43 = cc.instantiate(this.prefab);
        	let newNode44 = cc.instantiate(this.prefab);
        	let newNode45 = cc.instantiate(this.prefab);
        	let newNode46 = cc.instantiate(this.prefab);
        	let newNode47 = cc.instantiate(this.prefab);
        	let newNode48 = cc.instantiate(this.prefab);
        	let newNode49 = cc.instantiate(this.prefab);
        	let newNode50 = cc.instantiate(this.prefab);
        	let newNode51 = cc.instantiate(this.prefab);
        	let newNode52 = cc.instantiate(this.prefab);
        	let newNode53 = cc.instantiate(this.prefab);
        	let newNode54 = cc.instantiate(this.prefab);
        	let newNode55 = cc.instantiate(this.prefab);

        	// Set the positions for each new side node
        	newNode41.setPosition(-277.554 - 50, -120.741 + 50);
        	newNode42.setPosition(-235.507 - 50, -141.352 + 50);
       		newNode43.setPosition(-193.489 - 50, -161.793 + 50);
        	newNode44.setPosition(-151.382 - 50, -182.192 + 50);
        	newNode45.setPosition(-109.348 - 50, -202.636 + 50)
        	newNode46.setPosition(-67.273 - 50, -223.211 + 50)
      		newNode47.setPosition(-25.425 - 50, -243.581 + 50);
      		newNode48.setPosition(326.585 - 50, -129.359 + 50)
      		newNode49.setPosition(281.919 - 50, -149.196 + 50);
      		newNode50.setPosition(237.06 - 50, -168.713 + 50)
      		newNode51.setPosition(192.472 - 50, -187.624 + 50);
      		newNode52.setPosition(147.69 - 50, -207.103 + 50)
      		newNode53.setPosition(102.949 - 50, -226.629 + 50);
      		newNode54.setPosition(60.944 - 50, -244.87 + 50)
      		newNode55.setPosition(16.865 - 50, -263.96 + 50);

      		
        	this.node.addChild(newNode41);
        	this.node.addChild(newNode42);
        	this.node.addChild(newNode43);
        	this.node.addChild(newNode44);
        	this.node.addChild(newNode45);
        	this.node.addChild(newNode46);
        	this.node.addChild(newNode47);
        	this.node.addChild(newNode48);
        	this.node.addChild(newNode49);
        	this.node.addChild(newNode50);
        	this.node.addChild(newNode51);
        	this.node.addChild(newNode52);
        	this.node.addChild(newNode53);
        	this.node.addChild(newNode54);
        	this.node.addChild(newNode55);
        	cc.sys.localStorage.setItem('side', 8);
        }

    }

    start () {
        
        this.button.node.on('click', (event) => {
            console.log('CLICK');
            this.onCreateAssets();
           
        });
    }

    update() { }

  
}