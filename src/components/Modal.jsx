import React,{useState} from "react";
import ReactDOM  from "react-dom";
import './Modal.css'

const Modal = ({ closeModal, addNote }) => {
    const[notebook,setNoteBook]=useState({
      title: "",
      description: ""
    })

    const handleChange = (e) => {
      const{name,value}=e.target;
      setNoteBook({...notebook,[name]:value})
    }
  
    const handleAddNote = () => {
      addNote(notebook.title, notebook.description);
      closeModal();
    };
  
    return ReactDOM.createPortal (
      <div className="modal">
        <div className="modal-content">
          <input type="text" placeholder="Note Title" name="title" value={notebook.title} onChange={handleChange}/>
          <input type="text" placeholder="Note Description" name="description" value={notebook.description} onChange={handleChange}/>
          
          <div className="modal-buttons">
            <button onClick={handleAddNote}>Add to Book</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>,
       document.getElementById("modal-root")
    );
  };

  export default Modal
  