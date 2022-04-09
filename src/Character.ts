import { ImagePadding, Node } from "vis-network";
import * as Color from "color";
import * as colorString from "color-string"

export default class Character implements Node {
	id: number;
	label: string;
	size: number;
	image: string;
	color?: string = undefined; // one color for now
	shape: string = "circularImage";
	borderWidth: number = 5;
	imagePadding: ImagePadding = {};

	constructor(id: number, label: string, weight: number, pictureId: string, color: string) {
		this.id = id;
		this.label = label;
		this.size = 20 + weight * 1.0;
		this.image = `faces/${pictureId}.svg`;
		if (color) {
			const ccolor = Color.rgb(colorString.get.rgb(color));
			this.color = ccolor.desaturate(0.1 * ccolor.saturationl() / 100).lighten(0.35 * (ccolor.saturationv() * (100 - ccolor.luminosity()) / 10000)).hex();
		}

		const basePadding = 0.5;

		this.imagePadding = {
			top: this.size * basePadding,
			bottom: this.size * basePadding,
			right: this.size * basePadding * 6 / 8,
			left: this.size * basePadding * 6 / 8,
		};
	}
}