import { Edge } from "vis-network";

export default class Connection implements Edge {
	id: number;
	from: number;
	to: number;
	width: number;

	constructor(id: number, from: number, to: number, width: number) {
		this.id = id;
		this.from = from;
		this.to = to;
		this.width = width;
	}
}