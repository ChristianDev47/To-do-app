import { useState } from 'react'
import Todo from './components/Todos'
import type { TodoType, TodoId, TodoTitle } from './types/types'
import { TODO_FILTERS } from './consts'
import Footer from './components/Footer'
import Header from './components/Header'
import './index.css'
import { resetTaskStorage, saveTaskToStorage } from './utils/storage'

function App (): JSX.Element {
  const [todos, setTodos] = useState(() => {
    const taskFromStorage = window.localStorage.getItem('task')
    if (taskFromStorage !== null) return JSON.parse(taskFromStorage)
    return []
  })
  const [filterSelected, setFilterSelected] = useState<typeof TODO_FILTERS[keyof typeof TODO_FILTERS]>(TODO_FILTERS.ALL)

  const handeRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo: TodoType) => (todo.id !== id))
    setTodos(newTodos)
    if (newTodos.length > 0) {
      saveTaskToStorage({ tasks: newTodos })
    } else {
      resetTaskStorage()
    }
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo: TodoType) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
    saveTaskToStorage({ tasks: newTodos })
  }

  const handleFilterChange = (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter((todo: TodoType) => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter((todo: TodoType) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }

    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }

    return true
  })

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo: TodoType) => !todo.completed)
    setTodos(newTodos)
    saveTaskToStorage({ tasks: newTodos })
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    saveTaskToStorage({ tasks: newTodos })
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center overflow-x-hidden">
      <div className=" min-w-[600px] p-[1rem] border-2 border-[#959595b1] rounded-md m-5">
        <Header onAddTodo={handleAddTodo}/>
        <Todo
          todos = {filteredTodos}
          onRemoveTodo={handeRemove}
          onToggleCompleted={handleCompleted}
        />
        <hr />
        <Footer
          activeCount={activeCount}
          filterSelected={filterSelected}
          handleFilterChange={handleFilterChange}
          completedCount={completedCount}
          onClearCompleted={handleRemoveAllCompleted}
        />
      </div>
    </div>
  )
}

export default App
