import React from 'react';
import './style.css';

function Note({ title, content, onDelete }) {
  return (
    <div className="note">
      <h4>{title}</h4>
      <pre>{content}</pre>
      <button onClick={onDelete}>
        delete
      </button>
    </div>
  );
}

export default Note;