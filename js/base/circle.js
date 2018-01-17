let screenHeight = window.innerHeight
let screenWidth  = window.innerWidth
let atlas = new Image()		
atlas.src = 'images/Monster.png'

export default class circle{
	constructor(ctx){
		this.circleCenter =-10
		/*速度*/
		this.speed = 0
		/*边界*/
		this.borderL = -162
		this.borderR = 142;

		this.start(ctx)
	}

	start(ctx){
		/*获取随机偏移量*/	
		let rPosi = 30-Math.random()*60
		this.draw(ctx,rPosi,0)
	}

	velocity(r){
		let r0 = (r>0)?1:-1
		let r1 = Math.abs(r) //去绝对值计算sin
		let a = 9.8*Math.sin(r1)	

		this.speed = this.speed + r0*a*0.032 //物理加速理论*0.016，实际取*0.03
	}

	draw(ctx,posi,rotates){
		let that = this;
		that.velocity(rotates)

		//拖拽反作用力视为无限大，速度清0
		if (posi != 0) {
			that.speed = 0		
		}
		
		let _posi = that.circleCenter+posi+that.speed*0.016
		if (_posi>that.borderR||_posi<that.borderL) {
			return;
		}
		this.circleCenter = _posi;
		
		ctx.drawImage(atlas, this.circleCenter, -30,25,20)

		// ctx.fillStyle = "#82C1DD";
		// ctx.fillRect(this.circleCenter, -30, 20, 20);
		//ctx.arc(this.circleCenter, screenHeight/2-12, 12, 0,2*Math.PI,true);		
	}
}