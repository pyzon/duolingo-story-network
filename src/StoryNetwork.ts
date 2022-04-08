import Character from "./Character";
import Connection from "./Connection";
import { charactersUrl } from "./links";


export default class StoryNetwork {
	// characters: Character[];
	// connections: Connection[];

	constructor() {

	}

	async getCharacters() {
		try {
			const res = await fetch(charactersUrl, {
				method: 'get',
				headers: {
					'content-type': 'text/csv;charset=UTF-8',
				}
			});

			if (res.status === 200) {

				const data = await res.text();
				console.log(data);

			} else {
				console.log(`Error code ${res.status}`);
			}
		} catch (err) {
			console.log(err)
		}
	}
}