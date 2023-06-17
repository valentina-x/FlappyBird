class Bird {
	constructor() {
		this.animation = [
			{
				sX: 276,
				sY: 112
			},
			{
				sX: 276,
				sY: 139
			},
			{
				sX: 276,
				sY: 164
			},
			{
				sX: 276,
				sY: 139
			}
		];
		this.x = 50;
		this.y = 150;
		this.w = 34;
		this.h = 26;
		this.radius = 12;
		this.frame = 0;
		this.gravity = 0.25;
		this.jump = 4.3;
		this.speed = 0;
		this.rotation = 0;
	}

	draw() {
		let bird = this.animation[this.frame];

		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.rotation);
		ctx.drawImage(
			sprite,
			bird.sX,
			bird.sY,
			this.w,
			this.h,
			-this.w / 2,
			-this.h / 2,
			this.w,
			this.h
		);

		ctx.restore();
	}

	flap() {
		this.speed = -this.jump;
	}

	update(fg) {
		this.period = state.current == state.getReady ? 10 : 5;
		this.frame += frames % this.period == 0 ? 1 : 0;
		this.frame = this.frame % this.animation.length;

		if (state.current == state.getReady) {
			this.y = 150;
			this.rotation = 0 * DEGREE;
		} else {
			this.speed += this.gravity;
			this.y += this.speed;

			if (this.y + this.h / 2 >= canvas.height - fg.h) {
				this.y = canvas.height - fg.h - this.h / 2;
				if (state.current == state.game) {
					state.current = state.over;
					DIE.play();
				}
			}

			// если скорость больше прыжка, значит птица падает
			if (this.speed >= this.jump) {
				this.rotation = 90 * DEGREE;
				this.frame = 1;
			} else {
				this.rotation = -25 * DEGREE;
			}
		}
	}

	speedReset() {
		this.speed = 0;
	}
}

export default Bird;