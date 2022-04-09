import Character from "./Character";
import Connection from "./Connection";
import { charactersUrl } from "./links";
import * as Papa from "papaparse";
import { Data, DataSet, Edge, Node, Network } from "../node_modules/vis-network/standalone/umd/vis-network"


export default class StoryNetwork implements Data {
	nodes: Character[] = [];
	// connections: Connection[];
	

	constructor() {

	}

	getCharacters() {
		const self = this
		return new Promise((resolve, reject) => {
			Papa.parse(charactersUrl, {
				download: true,
				complete: function (results, file) {
					console.log("Parsing complete:", results, file);
					for (let i = 1; i < results.data.length; i++) {
						const row = results.data[i];
						if (isStringArray(row)) {
							const character = new Character(parseInt(row[0]), row[1], parseInt(row[2]), row[3], row[4]);
							self.nodes.push(character);
						} else {
							reject("a row of csv should be a string array");
						}
					}
					resolve(true);
				}
			});
		});


		
	}

	// nodes.push();

	// async getCharacters() {
	// 	try {
	// 		const res = await fetch(charactersUrl, {
	// 			method: 'get',
	// 			headers: {
	// 				'content-type': 'text/csv;charset=UTF-8',
	// 			}
	// 		});

	// 		if (res.status === 200) {

	// 			const data = await res.text();
	// 			console.log(data);

	// 		} else {
	// 			console.log(`Error code ${res.status}`);
	// 		}
	// 	} catch (err) {
	// 		console.log(err)
	// 	}
	// }
}

function isStringArray(value: unknown): value is string[] {
	return (
		Array.isArray(value) && value.every(element => typeof element === "string")
	);
}