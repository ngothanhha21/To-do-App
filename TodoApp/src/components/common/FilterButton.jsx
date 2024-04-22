import React from 'react';

function FilterButton({ filter, activeFilter, handleFilterClick }) {
  return (
    <p
      onClick={() => handleFilterClick(filter)}
      className={activeFilter === filter ? 'active' : ''}
    >
      {filter}
    </p>
  );
}

export default FilterButton;