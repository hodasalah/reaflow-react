export interface NodeObject {
  id: string;
  text: string;
  data?: {
    parent?: string,
    subParent?: string
    nodes?: { id: string }[]
  },
}
export interface EdgeObject {
  id: string
  from: string
  to: string
  data: {
    parentId: string
    subParentId?: string
    subParentId2?: string
  },

}