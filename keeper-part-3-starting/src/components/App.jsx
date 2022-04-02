import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const defaultNote = {title: "test",
content: "test info"
};

function App() {
  const [notes, updateNotes ] = useState([defaultNote]);

  function addNote(newNote){
    updateNotes(prev => [...prev, newNote] );
  }

  function removeNote(id){
    console.log("delete pressed ");
    updateNotes(prev => {
      return prev.filter((item, index) =>{
       return index !== id;
      })
    } );

    // updateNotes( prev => prev.filter( (item, index) => (index !== id) ) );
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map( (note,index) => <Note key={index} id={index} onDelete={removeNote} {...note}/> )}
      <Footer />
    </div>
  );
}

export default App;
