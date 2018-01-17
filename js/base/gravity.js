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
		cen=cen/160	//计算理论曲率半径
		this.rotate.speed(cen)
	}
}