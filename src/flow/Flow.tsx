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
	const [expand, setExpand] = useState(true);

	const onNodeClicked = (nodeId) => {
		let selectedNode = treeNodes.filter(
			(n) => n.id === nodeId && n.data?.nodes
		);
		let selectedEdges = treeEdges.filter(
			(e) =>
				e.data?.parentId === nodeId ||
				e.data?.subParentId === nodeId ||
				e.data?.subParentId2 === nodeId
		);
		if (selectedNode.length) {
			let getNodes = selectedNode[0].data?.nodes
				.map((n) => treeNodes.filter((node) => node.id === n.id))
				.reduce((p, n) => [...p, ...n]);
			if (expand) {
				let nItems = [...nodes].filter(function (el) {
					return getNodes.indexOf(el) < 0;
				});
				let eItems = [...edges].filter(function (el) {
					return selectedEdges.indexOf(el) < 0;
				});
				setNodes(nItems);
				setEdges(eItems);
				setExpand(false);
			}
			if (!expand) {
				nodes.filter((el) => {
					if (!getNodes.includes(el)) {
						return setNodes([...nodes, ...getNodes]);
					} else {
						return setNodes([...nodes]);
					}
				});
				edges.filter((el) => {
					// to be sure that we add elem one time
					if (!selectedEdges.includes(el)) {
						return setEdges([...edges, ...selectedEdges]);
					} else {
						return setEdges([...edges]);
					}
				});
				setExpand(true); // to not repeat elements
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
				onLayoutChange={(layout) => console.log("Layout", layout)}
			/>
		</div>
	);
}
