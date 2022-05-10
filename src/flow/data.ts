import { NodeObject, EdgeObject } from "./model";

export const treeNodes: NodeObject[] = [
  {
    id: "1",
    text: "1",
    data: {
      nodes: [
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" },
        { id: "6" },
        { id: "7" },
        { id: "8" },
        { id: "9" },
        { id: "10" },
        { id: "11" }, { id: "12" }, { id: "13" }

      ],
    },
  },
  {
    id: "2",
    text: "2",
    data: {
      parents: ["1"],
      nodes: [
        { id: "6" },
        { id: "7" },
        { id: "8" },
        { id: "9" },
        { id: "10" },
      ],
    },
  },
  {
    id: "3",
    text: "1-98",
    data: {
      parents: ["1"]
    },
  },
  {
    id: "4",
    text: "1-96",
    data: {
      parents: ["1"]
    },
  },
  {
    id: "5",
    text: "1-8",
    data: {
      parents: ["1"],

      nodes: [{ id: "11" }, { id: "12" }, { id: "13" }],
    },
  },
  //child Nodes
  {
    id: "6",
    text: "1-22",
    data: {
      parents: ["1", "2"],

      nodes: [{ id: "10" }],
    },
  },

  {
    id: "7",
    text: "1-37",
    data: {
      parents: ["1", "2"]

    },
  },
  {
    id: "8",
    text: "1-18",
    data: {
      parents: ["1", "2"]

    },
  },
  {
    id: "9",
    text: "1-20",
    data: {
      parents: ["1", "2"]

    },
  },
  {
    id: "10",
    text: "1-90",
    data: {
      parents: ["1", "2", "6"],

    },
  },
  //next Child Nodes
  {
    id: "11",
    text: "1-19",
    data: {
      parents: ["1", "5"],

      nodes: [{ id: "12" }, { id: "13" }],
    },
  },
  {
    id: "12",
    text: "1-38",
    data: {
      parents: ["1", "5", "11"],

      nodes: [{ id: "13" }],
    },
  },
  {
    id: "13",
    text: "1-77",
    data: {
      parents: ["1", "5", "6"]

    },
  },
];

export const treeEdges: EdgeObject[] = [
  {
    id: "1",
    from: "1",
    to: "2",
    data: {
      parents: ["1"]
    },
  },
  {
    id: "2",
    from: "1",
    to: "3",
    data: {
      parents: ["1"]
    },
  },
  {
    id: "3",
    from: "1",
    to: "4",
    data: {
      parents: ["1"]
    },
  },
  {
    id: "1-5",
    from: "1",
    to: "5",
    data: {
      parents: ["1"]
    },
  },
  {
    id: "4",
    from: "2",
    to: "6",
    data: {
      parents: ["1", "2"]

    },
  },

  {
    id: "5",
    from: "2",
    to: "7",
    data: {
      parents: ["1", "2"]

    },
  },
  {
    id: "6",
    from: "2",
    to: "8",
    data: {
      parents: ["1", "2"]

    },
  },
  {
    id: "7",
    from: "2",
    to: "9",
    data: {
      parents: ["1", "2"]

    },
  },
  {
    id: "8",
    from: "6",
    to: "10",
    data: {
      parents: ["1", "2", "6"]

    },
  },
  //2sec child nodes edges
  {
    id: "9",
    from: "5",
    to: "11",
    data: {
      parents: ["1", "5"]

    },
  },
  {
    id: "10",
    from: "11",
    to: "12",
    data: {
      parents: ["1", "5", "11"]

    },
  },
  {
    id: "11",
    from: "12",
    to: "13",
    data: {
      parents: ["1", "5", "11", "12"]

    },
  },
];