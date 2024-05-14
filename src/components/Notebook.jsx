import React, { useState } from 'react';
import { useNoteContext } from '../components/NoteContext';
import './Notebook.css';
import Modal from './Modal';

const Notebook = () => {
  const { notes, addNote, deleteNote } = useNoteContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const DataList = notes ? notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.description.toLowerCase().includes(search.toLowerCase())
  ) : [];

  return (
    <div className='container'>
      <div className="notebook">
        <h1>Notebook</h1>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <h2>Total Notes: {notes ? notes.length : 0}</h2>
        <h2>Showing: {DataList.length}</h2>
        <button className="add-note-btn" onClick={() => setIsModalOpen(true)}>Add new Note</button>
        {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} addNote={addNote} />}
        <div className="note-list">
          {DataList.map((note, index) => (
            <div key={index} className="note">
              <h3>Title:- {note.title}</h3>
              <h3>Description:- {note.description}</h3>
              <button onClick={() => deleteNote(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notebook;
