let screenHeight = window.innerHeight
let screenWidth  = window.innerWidth
export default class timer{
	constructor(ctx,rotateBox){
		this.ctx = ctx
		this.rotateBox = rotateBox		
		this.score = 0
		this.render()		
	}

	update(){
		this.ctx.fillStyle = "#82C1DD"
		this.ctx.font = "48px Microsoft YaHei"
		this.score = this.score+16	
		this.render();
	}

	render(){		
  		this.ctx.fillText(Math.floor(this.score/1000), screenWidth/2-24, 100)
  		//this.mainCtx.drawImage(this.canva,0,0)
	}

	over(rotates){
		this.rotateBox.rotate(-rotates)
		this.ctx.fillStyle = "#CEECEA"
		this.ctx.fillRect(0,0,canvas.width,canvas.height)
		this.ctx.fillStyle = "#82C1DD"		
		this.ctx.fillText(Math.floor(this.score/1000), screenWidth/2-24, canvas.height/2);
		this.ctx.font = "16px Microsoft YaHei"
		this.ctx.fillStyle = "#82C1DD"		
		this.ctx.fillText("点击重新开始", screenWidth/2-50, canvas.height/2+50);
	}
}