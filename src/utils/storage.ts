import type { TodoType } from '../types/types'

export const saveTaskToStorage = ({ tasks }: { tasks: TodoType[] }): void => {
  // save game
  window.localStorage.setItem('task', JSON.stringify(tasks))
}

export const resetTaskStorage = (): void => {
  window.localStorage.removeItem('task')
}
