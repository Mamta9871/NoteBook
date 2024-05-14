import React, { useState, useContext, createContext } from 'react';

const NoteContext = createContext();

const useNoteContext = () => useContext(NoteContext)

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  
  const addNote = (title, description) => {
    setNotes([...notes, { title, description }]);
  };
  
  const deleteNote = (index) => {
    const newNotes = notes.filter((_,i) => i !==index)
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider 
      value={{ 
        notes, 
        addNote, 
        deleteNote 
      }}
      >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider
export {useNoteContext}
