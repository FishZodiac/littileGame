export default class rotate{
	constructor(ctx){
		this.rotates = 0;
		this.speeds = 0;
		this.ctx = ctx;				
	}
	speed(g){
		this.speeds = this.speeds + g*9.8*0.001; //应取0.016
		this.rotate()
	}
	rotate(){
		this.rotateC = 2*Math.PI*this.speeds*0.016;
		this.rotates += this.rotateC

		this.ctx.rotate(this.rotateC)
	}
}