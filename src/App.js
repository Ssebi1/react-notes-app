import React, { useState } from 'react';
import './App.css';

//Imported components
import Actions from './components/Actions';
import NotesArea from './components/NotesArea';

function App() {
  //States
  const [notesList, setNotes] = useState([]);

  return (
    <div className="App">
      <Actions notesList={notesList} setNotes={setNotes} />
      <NotesArea notesList={notesList} setNotes={setNotes} />
    </div>
  );
}

export default App;
