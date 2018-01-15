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

	over(){
		this.rotateBox.rotate(Math.PI/2)
		this.rotateBox.fillStyle = "#CEECEA"
		this.rotateBox.fillRect(-screenWidth/2,-screenHeight/2,canvas.width,canvas.height)
		this.ctx.fillStyle = "#82C1DD"		
		this.ctx.fillText(Math.floor(this.score/1000), screenWidth/2-24, 100);
	}
}