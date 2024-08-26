import { FILTERS_BUTTONS } from '../consts'
import type { TODO_FILTERS } from '../consts'

interface Props {
  filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
  onFilterChange: (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => void
}

export default function Filters ({ filterSelected, onFilterChange }: Props): JSX.Element {
  return (
     <ul className="flex items-center justify-between gap-2 my-4 filters">
    {
      // Objetc entries nos permite transformar el objeto a un array
      Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'bg-gray-600 text-white rounded-md ' : ''

        return (
          <li key={key}>
            <a href={href}
            className={`inline-block p-1  font-semibold transition-all duration-100 rounded-md hover:bg-gray-600 hover:text-white ${className}`}
              onClick={(event) => {
                event.preventDefault()
                onFilterChange(key as typeof TODO_FILTERS[keyof typeof TODO_FILTERS])
              }}
              >
                {literal}
            </a>
          </li>
        )
      })
    }
  </ul>
  )
}
