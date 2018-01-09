let screenHeight = window.innerHeight
let screenWidth  = window.innerWidth

export default class wood{
	constructor(ctx){
		this.ctx = ctx		
		this.woodL = 5;
		this.draw(ctx);
	}

	draw(ctx){
		for(let i=0;i<this.woodL;i++){
			if (i%2==0) {
				ctx.fillStyle = "#CF8786";
			}else{
				ctx.fillStyle = "#FDCD98";
			}
			ctx.fillRect(-150, -10+(20/this.woodL)*i, 300, 20/this.woodL);
		}		
	}
	
}