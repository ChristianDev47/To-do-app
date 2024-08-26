import { useState } from 'react'
import type { TodoTitle } from '../types/types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export default function CreateTodo ({ saveTodo }: Props): JSX.Element {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && inputValue !== '') {
      saveTodo({ title: inputValue })
      setInputValue('')
    }
  }

  return (
    <input
      className='w-full px-[1rem] py-2 my-2 text-xl border-none rounded-sm lg:w-card focus:outline-none '
      value={inputValue}
      onChange={(e) => { setInputValue(e.target.value) }}
      onKeyDown={handleKeyDown}
      placeholder='¿Qué quieres hacer?'
      autoFocus
    />
  )
}
