import type { TodoId, ListOftodos, TodoType } from '../types/types'
import Todo from './Todo.tsx'
import noTodoIcon from '../assets/notodos.svg'

interface Props {
  todos: ListOftodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export default function Todos ({ todos, onRemoveTodo, onToggleCompleted }: Props): JSX.Element {
  return (
    <ul className="my-2 h-[200px] w-full overflow-y-auto relative">
      <div className={`absolute top-0 bottom-0 ${todos.length > 0 && 'hidden'} left-0 right-0 flex flex-col items-center justify-center w-full m-auto pointer-events-none select-none`}>
        <img className="ml-4 min-h-[120px]" src={noTodoIcon} alt="" width={120}/>
        <p className="text-gray-300 text-md">Agrega una tarea</p>
      </div>
      {
        todos.map(todo => (
          <li
            key={todo.id}
            className={`${todo.completed ? 'completed' : ''}`}>
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onRemoveTodo={onRemoveTodo}
              onToggleCompleted={onToggleCompleted}
            />
          </li>
        ))
      }
    </ul>
  )
}
