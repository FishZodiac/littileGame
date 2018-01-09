import Wood from './base/wood'
import Circle from './base/circle'
import Gravity from './base/gravity'
import Back from './base/back'
import Timer from './base/timer'
let ctx = canvas.getContext('2d')
let screenHeight = window.innerHeight
let screenWidth  = window.innerWidth
ctx.translate(screenWidth/2,screenHeight/2-8)

export default class main{
	constructor(){
		this.starting = false
		this.pageX = 0
		this.Ints = {}
		this.init()
	}
	init(){
		this.Back = new Back(ctx);	
		this.wood = new Wood(ctx)
		this.circle = new Circle(ctx)
		this.Gravity = new Gravity(ctx)		
		this.touch()
	}
	start(){		
		this.starting = true
		this.timer = new Timer(ctx)
		window.requestAnimationFrame(this.loop.bind(this),canvas)
	}

	touch(){
		let that = this;
		wx.onTouchStart((touches)=>{
			that.clientX = touches.changedTouches[0].clientX;
			if (!that.starting) {
				that.start();
			}			
		})	
		wx.onTouchMove((touches)=>{		
			that.pageX = (touches.changedTouches[0].clientX - that.clientX)/10;
		})
		wx.onTouchEnd((touches)=>{		
			that.pageX = (touches.changedTouches[0].clientX - that.clientX)/10;
		})
	}

	loop(){
		let that = this;
		this.Ints = setInterval(()=>{
			ctx.clearRect(-screenWidth/2,-screenHeight/2,canvas.width,canvas.height)			
			that.Back.draw()
			that.circle.draw(ctx,that.pageX)
			that.wood.draw(ctx)			
			that.timer.update();
			that.Gravity.calculate(that.circle.circleCenter,this.Ints)

			/*判定结束*/
			if (that.Gravity.rotate.rotates >= Math.PI/2 || that.Gravity.rotate.rotates <= -Math.PI/2) {
				that.timer.over()
				clearInterval(this.Ints)				
			}
			that.pageX=0			
		},16)
	}
}