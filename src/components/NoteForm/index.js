import React, { useState } from 'react';
import './style.css';

function NoteForm({ saveNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    saveNote({
      title,
      content,
    });

    setTitle("");
    setContent("");
  }

  const disabled = !title || !content;

  return (
    <form onSubmit={handleSave} className="note-form">
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} name="title" />
      <textarea placeholder="Content" onChange={(e) => setContent(e.target.value)} name="content" />
      <button type="submit" disabled={disabled}>Save</button>
    </form>
  );
}

export default NoteForm;