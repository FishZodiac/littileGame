export default class rotate{
	constructor(ctx){
		this.rotates = 0;
		this.speeds = 0;
		this.ctx = ctx;				
	}
	speed(c){
		this.speeds = this.speeds + 9.8*Math.cos(Math.abs(this.rotates))*0.001*(c/2); //除以16倍，
		this.rotate()
	}
	rotate(){
		this.rotateC = 2*Math.PI*this.speeds*0.016;
		this.rotates += this.rotateC

		this.ctx.rotate(this.rotateC)
	}
}