let screenHeight = window.innerHeight
let screenWidth  = window.innerWidth
export default class timer{
	constructor(ctx){
		this.ctx = ctx
		this.score = 0
		this.render()
		this.ctx.font = "48px Microsoft YaHei";
	}

	update(){
		this.score = this.score+16
		this.render();
	}

	render(){		
  		this.ctx.fillText(Math.floor(this.score/1000), -20, -200);
	}

	over(){
		this.ctx.rotate(-Math.PI/2)
		this.ctx.fillStyle = "#CEECEA"
		this.ctx.fillRect(-screenWidth/2,-screenHeight/2,canvas.width,canvas.height)
		this.ctx.fillStyle = "#82C1DD"		
		this.ctx.fillText(Math.floor(this.score/1000), -20, 0);
	}
}