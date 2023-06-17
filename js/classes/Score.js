class Score {
	constructor() {
		this.best = parseInt(localStorage.getItem("best")) || 0;
		this.value = 0;
	}

	draw() {
        ctx.fillStyle = "#FFF";
        ctx.strokeStyle = "#523d05";

		if (state.current == state.game) {
			ctx.lineWidth = 1;
			ctx.font = "30px Fantasy";
			ctx.fillText(this.value, canvas.width / 2, 50);
			ctx.strokeText(this.value, canvas.width / 2, 50);

		} else if (state.current == state.over) {
			ctx.font = "24px Fantasy";

			ctx.fillText(this.value, 225, 186);
			ctx.strokeText(this.value, 225, 186);
			
			ctx.fillText(this.best, 225, 228);
			ctx.strokeText(this.best, 225, 228);
		}
	}

	reset() {
		this.value = 0;
	}
}

export default Score;