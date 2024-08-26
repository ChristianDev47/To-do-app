import type { TodoId, TodoType } from '../types/types.d'
import close from '../assets/close.svg'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export default function Todo ({ id, title, completed, onRemoveTodo, onToggleCompleted }: Props): JSX.Element {
  const completedTaskClass = completed ? 'line-through text-gray-400' : ''
  return (
    <div className="relative flex items-start justify-start w-full py-1 hover:bg-gray-100 group px-[1rem] text-center">
      <input
        className="w-6 h-6 bg-transparent cursor-pointer form-checkbox mt-[.3rem]"
        type="checkbox"
        checked={completed}
        onChange={(even) => {
          onToggleCompleted({ id, completed: even.target.checked })
        }}
      />
      <label className={`text-xl px-3 text-start text-[18px] w-[470px] overflow-hidden h-auto overflow-x-hidden ${completedTaskClass}`}>{title}</label>
      <button
        className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-xl text-center text-gray-600 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        onClick={() => {
          onRemoveTodo({ id })
        }}>
        <img src={close} alt="" width={10} height={10}/>
      </button>
    </div>
  )
}
