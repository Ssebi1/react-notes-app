import React from 'react';
import '../App.css';

//Importing components
import Note from './Note';

const NotesArea = ({ notesList, setNotes }) => {
  return (
    <div className="notesArea">
      {notesList.map((note) => (
        <Note setNotes={setNotes} notesList={notesList} noteId={note.id} />
      ))}
    </div>
  );
};

export default NotesArea;
