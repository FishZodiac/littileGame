let screenHeight = window.innerHeight
let screenWidth  = window.innerWidth
let atlas = new Image()		
atlas.src = 'images/Monster.png'

export default class circle{
	constructor(ctx){
		this.circleCenter =-10
		this.borderL = -162
		this.borderR = 142;

		/*获取随机偏移量*/	
		let rPosi = 30-Math.random()*60
		this.draw(ctx,rPosi)
	}

	draw(ctx,posi){
		let that = this;	
		if (this.circleCenter+posi>this.borderR||this.circleCenter+posi<this.borderL) {
			return;
		}
		this.circleCenter =this.circleCenter+posi;
		
		ctx.drawImage(atlas, this.circleCenter, -30,25,20)

		// ctx.fillStyle = "#82C1DD";
		// ctx.fillRect(this.circleCenter, -30, 20, 20);
		//ctx.arc(this.circleCenter, screenHeight/2-12, 12, 0,2*Math.PI,true);
		return this.circleCenter;
	}
}