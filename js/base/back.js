let screenHeight = window.innerHeight
let screenWidth  = window.innerWidth
let atlas = new Image()		
atlas.src = 'images/btn_play.png'

export default class bg{
	constructor(ctx){
		this.ctx = ctx
		this.draw()
	}
	draw(starting){
        this.ctx.fillStyle = "#CEECEA";
		this.ctx.fillRect(0, 0, screenWidth, screenHeight);
		if (!starting) {
			this.ready()
		}else{
			this.triangle()
		}
	}
	ready(){
		let that = this;
		atlas.onload = function () {
		    that.ctx.drawImage(atlas, screenWidth/2-100, screenHeight/2,200,45)
		}
	    // this.ctx.fillStyle = "#82C1DD"
	    // this.ctx.font = "40px Microsoft YaHei"
	    // this.ctx.fillText("PLAY", screenWidth/2-48, screenHeight/2-20)
	}
	triangle(){	
		this.ctx.fillStyle = "#CF8786"
	    this.ctx.beginPath();
		this.ctx.moveTo(screenWidth/2,screenHeight/2);
		this.ctx.lineTo(screenWidth/2+25,screenHeight/2+100);
		this.ctx.lineTo(screenWidth/2-25,screenHeight/2+100);
		this.ctx.fill();
	}
}