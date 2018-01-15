import Wood from './base/wood'
import Circle from './base/circle'
import Gravity from './base/gravity'
import Back from './base/back'
import Timer from './base/timer'
let ctx = canvas.getContext('2d')
let screenHeight = window.innerHeight
let screenWidth  = window.innerWidth

/*旋转场景*/
let offcanvas = wx.createCanvas()
let rotateBox = offcanvas.getContext('2d')
rotateBox.translate(screenWidth/2,screenHeight/2-8)

export default class main{
	constructor(){
		this.starting = false
		this.pageX = 0
		this.Ints = {}
		this.init()
	}

	init(){
		this.Back = new Back(ctx);			
		this.touch()
	}

	start(){
		this.wood = new Wood(rotateBox)
		this.circle = new Circle(rotateBox)
		this.Gravity = new Gravity(rotateBox)
		this.timer = new Timer(ctx,rotateBox)	
		ctx.drawImage(offcanvas,0,0)			
		this.starting = true		
		window.requestAnimationFrame(this.loop.bind(this),canvas)
	}

	/*侦听滑动*/
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

	/*游戏渲染*/
	loop(){
		let that = this;
		this.Ints = setInterval(()=>{
			rotateBox.clearRect(-screenWidth/2,-screenHeight/2,canvas.width,canvas.height)			
			that.Back.draw(this.starting)
			that.circle.draw(rotateBox,that.pageX)
			that.wood.draw(rotateBox)			
			that.timer.update()
			that.Gravity.calculate(that.circle.circleCenter,this.Ints)
			ctx.drawImage(offcanvas,0,0)	
			/*判定结束*/
			if (that.Gravity.rotate.rotates >= Math.PI/2 || that.Gravity.rotate.rotates <= -Math.PI/2) {
				that.timer.over()
				that.starting = false
				clearInterval(this.Ints)				
			}
			that.pageX=0			
		},16)
	}
}