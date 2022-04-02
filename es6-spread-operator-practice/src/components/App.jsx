import React, { useState } from "react";
import ToDoItem from "./ToDoItem";


function App() {

  // const [toDoList, updateToDoList] = useState([
  //   {
  //     id:0,
  //     text : "A Item "
  //   }
  // ]);

  const [toDoList, updateToDoList] = useState(["A Item "]);

  const [currInput, updatecurrInput ] = useState("");
  


  function handleChange(e){
    const inputValue = e.target.value;
    updatecurrInput(inputValue);
  }

  // function addItem(){
  //   updateToDoList(prev => [ ...prev, {id : prev.length, text: currInput }])
  //   updatecurrInput("");
  // }

  // function deleteItem(id){
  //   updateToDoList(prev => {
  //     const temp = [ ...prev];
  //     temp.splice(id, 1);
  //     return temp;
  //   });
  // }
  
  function deleteItem(id){
    updateToDoList( prev => prev.filter( 
      (item, index) => index !== id)
    );
  }

  function addItem(){
    updateToDoList(prev => [ ...prev, currInput]);
    updatecurrInput("");
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={currInput} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {/* {toDoList.map( item => (<li key={item.id}>{item.text}</li>) ) } */}
        {toDoList.map( (item, index) => (<ToDoItem key={index} id={index} text={item} onChecked={deleteItem} />) ) }
        </ul>
      </div>
    </div>
  );
}

export default App;
