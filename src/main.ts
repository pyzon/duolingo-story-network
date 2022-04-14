import { Data, DataSet, Edge, Node, Network, Options } from "../node_modules/vis-network/standalone/umd/vis-network"
import StoryNetwork from "./StoryNetwork";
require("!style-loader!css-loader!./style.css");

const container = document.getElementById("network");

const storyNetwork = new StoryNetwork();
let characterPromise = storyNetwork.getCharacters();
let connectionPromise = storyNetwork.getConnections()

const options: Options = {
	layout: {
		randomSeed: 5,
	},
	physics: {
		solver: "forceAtlas2Based",
	},
};

(async () => {
	await Promise.all([characterPromise, connectionPromise]);

	const network = new Network(container!, storyNetwork, options);
})();

