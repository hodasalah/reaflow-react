import { useState } from "react";
import { NodeObject, EdgeObject } from "./model";
import { treeEdges, treeNodes } from "./data";
import {
	Canvas,
	Node,
	Port,
	Label,
	NodeProps,
	MarkerArrow,
	Edge,
} from "reaflow";

export default function Flow() {
	const [nodes, setNodes] = useState<NodeObject[]>(treeNodes);
	const [edges, setEdges] = useState<EdgeObject[]>(treeEdges);
	const [collapse, setCollapse] = useState(true);

	const onNodeClicked = (nodeId) => {
		if (nodeId === "1") {
			if (collapse) {
				setEdges([]);
				setNodes([treeNodes[0]]);
				setCollapse(false);
			} else {
				setEdges(treeEdges);
				setNodes(treeNodes);
				setCollapse(true);
			}
		}
		// get selected node
		let selectedNode = treeNodes.filter(
			(n) => n.id === nodeId && n.data?.nodes
		);
		//get selected edges
		let selectedEdges = treeEdges.filter((e) => {
			return e.data?.parents?.includes(nodeId);
		});
		//check if selectedNode array no empty
		if (selectedNode.length) {
			// get nodes by ids
			let getNodes = selectedNode[0].data?.nodes
				.map((n) => treeNodes.filter((node) => node.id === n.id))
				.reduce((p, n) => [...p, ...n]);

			if (collapse) {
				//return all [nodes || edges] without children nodes for selected item
				let nItems = [...nodes].filter(function (el) {
					return getNodes.indexOf(el) < 0;
				});

				let eItems = [...edges].filter(function (el) {
					return selectedEdges.indexOf(el) < 0;
				});
				setNodes(nItems);
				setEdges(eItems);
				console.log(collapse);
				setCollapse(false);
			}
			if (!collapse) {
				nodes.filter((el) => {
					if (!getNodes.includes(el)) {
						setNodes([...nodes, ...getNodes]);
						setCollapse(true);
					} else {
						setNodes([...nodes]);
						setCollapse(true);
					}
				});
				edges.filter((el) => {
					// to be sure that we add elem one time
					if (!selectedEdges.includes(el)) {
						setEdges([...edges, ...selectedEdges]);
						setCollapse(true);
					} else {
						setEdges([...edges]);
						setCollapse(true);
					}
				});
				setCollapse(true); // to not repeat elements
			}
		}
	};

	return (
		<div
			style={{
				height: "100vh",
				width: 450,
				position: "relative",
				margin: "auto",
			}}
		>
			<Canvas
				className="canvas"
				pannable={false}
				nodes={nodes}
				edges={edges}
				node={(node: NodeProps) => (
					<Node
						{...node}
						onClick={() => onNodeClicked(node.id)}
						style={{
							stroke: "#1a192b",
							fill: "#1a192b",
							strokeWidth: 1,
						}}
						label={<Label style={{ fill: "black" }} />}
						port={
							<Port
								style={{
									fill: "blue",
									stroke: "white",
								}}
								rx={10}
								ry={10}
							/>
						}
					/>
				)}
				arrow={<MarkerArrow style={{ fill: "#212121" }} />}
				edge={<Edge className="edge" />}
			/>
		</div>
	);
}
