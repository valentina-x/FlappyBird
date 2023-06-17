class Pipes {
	constructor() {
		this.position = [];

		this.top = {
			sX: 553,
			sY: 0
		};

		this.bottom = {
			sX: 502,
			sY: 0
		};
		
		this.w = 53;
		this.h = 400;
		this.gap = 85;
		this.maxYPos = -150;
		this.dx = 2;
	}

	draw() {
		for (let i = 0; i < this.position.length; i++) {
			let p = this.position[i];

			let topYPos = p.y;
			let bottomYPos = p.y + this.h + this.gap;

			// верхняя труба
			ctx.drawImage(sprite, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);

			// нижняя труба
			ctx.drawImage(sprite, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);
		}
	}

	update(bird, score) {
		if (state.current !== state.game) return;

		if (frames % 100 == 0) {
			this.position.push({
				x: canvas.width,
				y: this.maxYPos * (Math.random() + 1)
			});
		}
		for (let i = 0; i < this.position.length; i++) {
			let p = this.position[i];

			let bottomPipeYPos = p.y + this.h + this.gap;

			// столкновение с трубами
			// верх
			if (bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > p.y && bird.y - bird.radius < p.y + this.h) {
				state.current = state.over;
				HIT.play();
			}
			// низ
			if (bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > bottomPipeYPos && bird.y - bird.radius < bottomPipeYPos + this.h) {
				state.current = state.over;
				HIT.play();
			}

			// смещение трубы влево
			p.x -= this.dx;

			// обработка score 
			const offset = 20;
			if (bird.x + bird.radius == p.x + offset) {
				score.value += 1;
				SCORE_S.play();
				score.best = Math.max(score.value, score.best);
				localStorage.setItem("best", score.best);
			}

			// если трубы выходят за пределы холста, удаляем их из массива
			if (p.x + this.w <= 0) {
				this.position.shift();
			}
		}
	}

	reset() {
		this.position = [];
	}
}

export default Pipes;