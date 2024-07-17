export class Sprite {
	name: string;
	image: HTMLImageElement;
	loaded: boolean;
	constructor(name: string) {
		this.name = name;
		this.image = new Image();
		this.image.src = `./images/${name}/${name}/${name}.png`;

		this.loaded = false;
		this.image.onload = () => {
			this.loaded = true;
		};
	}

	drawCanvas(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
		if (!this.loaded) {
			console.log(`sprite ${this.name} is not loaded...`);
			const old = ctx.fillStyle;

			ctx.fillStyle = 'green';
			ctx.fillRect(x, y, w, h);

			ctx.fillStyle = old;
		}
		ctx.drawImage(this.image, 0, 0, 100, 100, x, y, w, h);
	}

	getElement() {
		return this.image;
	}
}
