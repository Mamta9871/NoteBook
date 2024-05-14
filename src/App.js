import React from 'react'
import Notebook from './components/Notebook';
import NoteProvider from './components/NoteContext'


const App = () => {
  return (
    <NoteProvider>
      <Notebook />
    </NoteProvider>
  );
};

export default App;

