import { Color } from "vis-network";

export default class Character {
	id: number;
	name: string;
	weight: number;
	pictureId: string;
	color: Color;

	constructor(id: number, name: string, weight: number, pictureId: string, color: Color) {
		this.id = id;
		this.name = name;
		this.weight = weight;
		this.pictureId = pictureId;
		this.color = color;
	}

}