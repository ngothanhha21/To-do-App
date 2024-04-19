import React, {useState} from 'react'

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
              <p onClick={() => handleFilterClick('all')} value="all"
                  className={activeFilter === 'all' ? 'active' : ''}
              >All</p>
              <p onClick={() => handleFilterClick('uncompleted')} value="uncompleted"
                className={activeFilter === 'uncompleted' ? 'active' : ''}
              >Active</p>
              <p onClick={() => handleFilterClick('completed')} value="completed"
                className={activeFilter === 'completed' ? 'active' : ''}
              >Complete</p>
          </div>

          <p onClick={handleClearComplete} className="clear-complete">Clear complete</p>

      </div>
    )
}

export default Footer
