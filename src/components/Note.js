import React from 'react';

const Note = ({ setNotes, notesList, noteId }) => {
  const deleteNoteHandler = () => {
    setNotes(notesList.filter((note) => note.id !== noteId));
  };

  return (
    <div className="note">
      <input className="noteTitle" placeholder={noteId}></input>
      <textarea className="noteText" placeholder="Note Text"></textarea>
      <ul className="noteActions">
        <li className="deletenote" onClick={deleteNoteHandler}>
          <i className="far fa-trash-alt"></i>
        </li>
        <li className="markNote">
          <i className="far fa-star"></i>
        </li>
        {/* <i className="fas fa-star"></i> */}
      </ul>
    </div>
  );
};

export default Note;
