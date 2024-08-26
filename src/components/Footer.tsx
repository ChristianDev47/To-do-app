import type { TODO_FILTERS } from '../consts'
import Filters from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
  onClearCompleted: () => void
  handleFilterChange: (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => void
}

export default function Footer ({ activeCount = 0, completedCount = 0, filterSelected, onClearCompleted, handleFilterChange }: Props): JSX.Element {
  return (
    <footer className="flex flex-col flex-wrap items-center justify-between px-[1rem] my-2 text-sm lg:flex-row md:flex-row sm:flex-row">
      <span className="font-semibold ">
        {activeCount} tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {
        completedCount > 0 && (
          <button
            className="p-1 bg-[#4b5563] font-semibold text-white rounded-md"
            onClick={onClearCompleted}>
            Borrar Completadas
          </button>
        )
      }
    </footer>
  )
}
