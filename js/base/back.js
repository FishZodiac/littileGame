let screenHeight = window.innerHeight
let screenWidth  = window.innerWidth
export default class bg{
	constructor(ctx){
		this.ctx = ctx
		this.draw()
	}
	draw(){
        this.ctx.fillStyle = "#CEECEA";
		this.ctx.fillRect(-screenWidth, -screenHeight, screenWidth*2, screenHeight*2);
		//this.triangle()
	}
	triangle(){		
	    this.ctx.fillStyle = "#59A0A1"
	    this.ctx.arc(0,0,4, 0,2*Math.PI,true)	
	}
}