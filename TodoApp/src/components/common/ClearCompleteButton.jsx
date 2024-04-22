import React from 'react';

function ClearCompleteButton({ handleClearComplete }) {
  return (
    <p onClick={handleClearComplete} className="clear-complete">
      Clear complete
    </p>
  );
}

export default ClearCompleteButton;