import React from 'react';
import '../App.css';

const Actions = ({ notesList, setNotes }) => {
  const addNoteHandler = () => {
    setNotes([
      ...notesList,
      {
        id: Math.random() * 1000,
        title: '',
        text: '',
      },
    ]);
  };

  const deleteAllNotesHandler = () => {
    setNotes([]);
  };

  return (
    <div className="actionsNavigation">
      <button className="addButton" onClick={addNoteHandler}>
        <i className="fas fa-plus-circle"></i> Add note
      </button>
      <button onClick={deleteAllNotesHandler} className="deleteAllButton">
        <i className="fas fa-trash-alt"></i> Delete all
      </button>
    </div>
  );
};

export default Actions;
