import React from 'react'
import checkBox from "../../img/correct.png";
import square from "../../img/checkbox (1).png";

function Checkbox({ isCompleted, isEditing, completeHandler }) {
  return (
    <button
      onClick={completeHandler}
      className={`complete-btn ${isEditing ? "hidden" : ""}`}
    >
      {isCompleted ? (
        <img src={checkBox} alt="Complete" className="checkbox" />
      ) : (
        <img src={square} alt="Complete" className="emptyCheckbox" />
      )}
    </button>
  )
}

export default Checkbox
