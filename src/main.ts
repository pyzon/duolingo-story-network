import { Data, DataSet, Edge, Network } from "../node_modules/vis-network/standalone/umd/vis-network"
import StoryNetwork from "./StoryNetwork";
require("!style-loader!css-loader!./style.css");

console.log("Hello, world")

const nodes = new DataSet([
	{
		id: 1,
		shape: "image",
		size: 20,
		label: "Hello",
		image: {
			unselected: "img/unselected.svg",
			selected: "img/selected.svg",
		},
	},
	{
		id: 2,
		shape: "image",
		size: 20,
		label: "World",
		image: {
			unselected: "img/unselected.svg",
			selected: "img/selected.svg",
		},
	},
])

const edges: Edge[] = [
	{ from: 1, to: 2 }
]

const container = document.getElementById("network")

const data: Data = {
	nodes: nodes,
	edges: edges,
}

const options = {
	layout: {
		randomSeed: 5,
	},
	nodes: {
		brokenImage: "img/broken.svg"
	}
}

const network = new Network(container!, data, options)

const storyNetwork = new StoryNetwork();
storyNetwork.getCharacters();
