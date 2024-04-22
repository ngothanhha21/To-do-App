import React, {useState} from 'react'
import FilterButton from '../common/FilterButton'
import ClearCompleteButton from '../common/ClearCompleteButton'


function Footer({status, setStatus, todos, setTodos}) {

  const [activeFilter, setActiveFilter] = useState('all')

  const handleClearComplete = () => {
      setTodos(todos.filter(item => !item.completed))
  }

  const number = () => {
      switch (status) {
        case 'completed':
          return todos.filter(item => item.completed === true).length
        case 'uncompleted':
          return todos.filter(item => item.completed === false).length
        default:
          return todos.length
      }
  }

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setStatus(filter);
  };
    
    return (
      <div className="select">
          <p>{number()} items left </p>

          <div name="todos" className="filter-todo">
            <FilterButton
              filter="all"
              activeFilter={activeFilter}
              handleFilterClick={handleFilterClick}
            />
            <FilterButton
              filter="uncompleted"
              activeFilter={activeFilter}
              handleFilterClick={handleFilterClick}
            />
            <FilterButton
              filter="completed"
              activeFilter={activeFilter}
              handleFilterClick={handleFilterClick}
            />
          </div>

          <ClearCompleteButton handleClearComplete={handleClearComplete} />


      </div>
    )
}

export default Footer
