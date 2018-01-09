let ctx = canvas.getContext('2d')
let screenWidth  = window.innerWidth
let screenHeight = window.innerHeight
ctx.strokeWidth = 1
ctx.strokeStyle = 'rgba(32,160,255,0.1)'
ctx.fillStyle = 'rgba(32,160,255,0.2)'
let WIDTH = canvas.width
let HEIGHT = canvas.height
let POINT = 20
let atlas = new Image()
atlas.src = '/images/bg.jpg'

export default class Main {
	constructor(){
		this.start()
	}
	start(){				
		this.circleArr = [];
		for (var i = 0; i < POINT; i++) {
			this.circleArr.push(this.drawCricle(ctx, this.num(WIDTH), this.num(HEIGHT), this.num(15, 2), this.num(10, -10)/40, this.num(10, -10)/40));
		}
		this.draw();
		
		setInterval(()=>{
			for (var j = 0; j < POINT; j++) {
					var cir = this.circleArr[j];
					cir.x += cir.moveX;
					cir.y += cir.moveY;
					if (cir.x > WIDTH) cir.x = 0;
					else if (cir.x < 0) cir.x = WIDTH;
					if (cir.y > HEIGHT) cir.y = 0;
					else if (cir.y < 0) cir.y = HEIGHT;					
			}
			this.draw()
		},16)
	}
	//线条：开始xy坐标，结束xy坐标，线条透明度
	Line(x, y, _x, _y, o) {
			this.beginX = x,
			this.beginY = y,
			this.closeX = _x,
			this.closeY = _y,
			this.o = o;
	}
		//点：圆心xy坐标，半径，每帧移动xy的距离
	Circle(x, y, r, moveX, moveY) {
			this.x = x,
			this.y = y,
			this.r = r,
			this.moveX = moveX,
			this.moveY = moveY;
	}
		//生成max和min之间的随机数
	num(max, _min) {
			var min = arguments[1] || 0;
			return Math.floor(Math.random()*(max-min+1)+min);
	}
		// 绘制原点
	drawCricle(cxt, x, y, r, moveX, moveY) {
			var circle = new this.Circle(x, y, r, moveX, moveY)
			cxt.beginPath()
			cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
			cxt.closePath()
			cxt.fill();
			return circle;
	}
		//绘制线条
	drawLine(cxt, x, y, _x, _y, o) {
			var line = new this.Line(x, y, _x, _y, o)
			cxt.beginPath()
			cxt.strokeStyle = 'rgba(32,160,255,'+ o +')'
			cxt.moveTo(line.beginX, line.beginY)
			cxt.lineTo(line.closeX, line.closeY)
			cxt.closePath()
			cxt.stroke();

	}
	draw(){
			ctx.clearRect(0,0,canvas.width, canvas.height);
		    // ctx.drawImage(
		    //   atlas,
		    //   0,
		    //   0	      		 
		    // )
			for (var i = 0; i < POINT; i++) {
				this.drawCricle(ctx, this.circleArr[i].x, this.circleArr[i].y, this.circleArr[i].r);
			}
			for (var i = 0; i < POINT; i++) {
				for (var j = 0; j < POINT; j++) {
					if (i + j < POINT) {
						var A = Math.abs(this.circleArr[i+j].x - this.circleArr[i].x),
							B = Math.abs(this.circleArr[i+j].y - this.circleArr[i].y);
						var lineLength = Math.sqrt(A*A + B*B);
						var C = 1/lineLength*7-0.009;
						var lineOpacity = C > 0.05 ? 0.05 : C;
						if (lineOpacity > 0) {
							this.drawLine(ctx, this.circleArr[i].x, this.circleArr[i].y, this.circleArr[i+j].x, this.circleArr[i+j].y, lineOpacity);
						}
					}
				}
			}
		}
}