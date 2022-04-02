import React, {useState} from "react";

function CreateArea(props) {

  const defaultNote = {
    title : "",
    content : ""
  };

  const [noteinfo, updateNote ] = useState(defaultNote);

  function handleChange (e){
    const {name: inputName, value  : inputValue} = e.target;
    updateNote(prev => ({...prev, [inputName]: inputValue}) );

  }
  
  function handleAdd(e){
    e.preventDefault(); // #### to stop refreshing of the screen when add is clicked ####
    props.onAdd(noteinfo); 
    updateNote(defaultNote);
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={noteinfo.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." value={noteinfo.content} rows="3" />
        <button onClick={handleAdd}> Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
