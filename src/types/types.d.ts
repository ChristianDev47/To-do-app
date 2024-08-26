export interface TodoType {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<TodoType, 'id'>
export type TodoTitle = Pick<TodoType, 'title'>
export type TodoCompleted = Pick<TodoType, 'completed'>

export type ListOftodos = TodoType[]
