import { Data, DataSet, Edge, Network } from "vis-network"

console.log("Hello, world")

const nodes = new DataSet([
	{
		id: 1,
		shape: "image",
		size: 20,
		label: "Hello",
		image: {
			unselected: "static/img/unselected.svg",
			selected: "static/img/selected.svg",
		},
	},
	{
		id: 2,
		shape: "image",
		size: 20,
		label: "World",
		image: {
			unselected: "static/img/unselected.svg",
			selected: "static/img/selected.svg",
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
		brokenImage: "broken.svg"
	}
}

const network = new Network(container!, data, options)
