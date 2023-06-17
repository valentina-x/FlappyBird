class Background {
	static draw(ctx, img, canvas) {
		const bg = {
			sX : 0,
			sY : 0,
			w : 275,
			h : 226,
			x : 0,
			y : canvas.height - 226,
		}
		ctx.drawImage(
			img,

			bg.sX,
			bg.sY,
			bg.w,
			bg.h,

			bg.x,
			bg.y,
			bg.w,
			bg.h
		);

		ctx.drawImage(
			img,

			bg.sX,
			bg.sY,
			bg.w,
			bg.h,

			bg.x + bg.w,
			bg.y,
			bg.w,
			bg.h
		);
	}
}

export default Background;