let screenHeight = window.innerHeight
let screenWidth  = window.innerWidth

export default class circle{
	constructor(ctx){
		this.circleCenter =-10
		this.borderL = -160
		this.borderR = 160;	
		this.draw(ctx,0)
	}

	draw(ctx,posi){		
		if (this.circleCenter+posi>this.borderR||this.circleCenter+posi<this.borderL) {
			return;
		}
		this.circleCenter =this.circleCenter+posi;			
		ctx.fillStyle = "#82C1DD";
		ctx.fillRect(this.circleCenter, -30, 20, 20);
		//ctx.arc(this.circleCenter, screenHeight/2-12, 12, 0,2*Math.PI,true);
		return this.circleCenter;
	}
}