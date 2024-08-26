import type { TodoTitle } from '../types/types'
import CreateTodo from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export default function Header ({ onAddTodo }: Props): JSX.Element {
  return (
    <header className='header'>
      <h1 className="py-2 mb-4 text-5xl font-extrabold text-center text-gray-600">
        To do List 📝
      </h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
