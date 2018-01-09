import Rotate from './rotate'
let screenHeight = window.innerHeight
let screenWidth  = window.innerWidth

export default class gravity{
	constructor(ctx){
		this.ctx = ctx
		this.quality = 1
		this.rotate = new Rotate(ctx)
	}

	calculate(cen){
		cen = (cen+10);
		if (cen>0) {
			cen=cen/160
		}else{
			cen=cen/160
		}
		this.rotate.speed(cen)
	}
}