import { useContext, useState } from 'react';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import { AlertContext } from './components/AlertProvider';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const { createAlert } = useContext(AlertContext);

  const handleSaveNote = (note) => {
    // Update notes state
    setNotes(prevNotes => [...prevNotes, note]);

    // Show latest added note in alert
    const lastNote = notes[notes.length - 1];
    createAlert(`Created note "${lastNote?.title}"`);
  }

  const handleDeleteNote = (note) => {
    setNotes(prevNotes => prevNotes.filter(item => item !== note));
  }

  return (
    <div className="app">
      <h1>Notes.</h1>
      <NoteForm saveNote={handleSaveNote} />
      {!!notes.length && <hr />}
      <div>
        {notes.map(note => (
          <Note
            title={note.title}
            content={note.content}
            onDelete={() => handleDeleteNote(note)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
