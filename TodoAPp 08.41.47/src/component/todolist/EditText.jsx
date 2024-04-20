import React from "react";

function EditText({editText, setEditText, handleEditSave, handleKeyPress }) {
  return (
    <input
      type="text"
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
      onBlur={handleEditSave}
      onKeyPress={handleKeyPress}
      autoFocus
    />
  );
}

export default EditText;
