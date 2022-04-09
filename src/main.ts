import { Data, DataSet, Edge, Node, Network } from "../node_modules/vis-network/standalone/umd/vis-network"
import StoryNetwork from "./StoryNetwork";
require("!style-loader!css-loader!./style.css");

const container = document.getElementById("network");

const storyNetwork = new StoryNetwork();
let characterPromise = storyNetwork.getCharacters();

const options = {
	layout: {
		randomSeed: 5,
	},
	nodes: {
		brokenImage: "img/broken.svg"
	}
};

(async () => {
	await Promise.all([characterPromise]);

	const network = new Network(container!, storyNetwork, options)
})();

// const edges: Edge[] = [
// 	{ from: 1, to: 2 },
// ]

