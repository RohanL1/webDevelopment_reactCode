import React, { useState } from "react";

function App() {

  const [name , setName] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);

  function handleChange(event){
    setSubmitted(false);
    setName(event.target.value);
  }

  function handleClick(){
    setSubmitted(true);
  }

  return (
    <div className="container">
      <h1>Hello {isSubmitted && name}</h1>
      <input onChange={handleChange} type="text" value={name} placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
