import React from 'react'

function DeleteButton({deleteHandler}) {
    return (
        <button onClick={deleteHandler} className="delete-btn">
          <span>X</span>
        </button>
      );
}

export default DeleteButton
