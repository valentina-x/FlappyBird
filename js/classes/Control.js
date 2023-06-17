class Control {
	start(event, bird, pipes, score) {
		switch (state.current) {
			case state.getReady:
				state.current = state.game;
				SWOOSHING.play();
				break;
			case state.game:
				if (bird.y - bird.radius <= 0) return;
				bird.flap();
				FLAP.play();
				break;
			case state.over:
				let rect = canvas.getBoundingClientRect();
				let clickX = event.clientX - rect.left;
				let clickY = event.clientY - rect.top;

				if (clickX >= startBtn.x && clickX <= startBtn.x + startBtn.w && clickY >= startBtn.y && clickY <= startBtn.y + startBtn.h) {
					pipes.reset();
					bird.speedReset();
					score.reset();
					state.current = state.getReady;
				}
				break;
		}
	}
}

export default Control;
