export interface NodeObject {
  id: string;
  text: string;
  data?: {
    parents?: string[]
    nodes?: { id: string }[]
  },
}
export interface EdgeObject {
  id: string
  from: string
  to: string
  data: {
    parents: string[]
  },

}