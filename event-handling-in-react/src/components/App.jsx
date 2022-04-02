import React, { useState } from "react";

function App() {

  const [isMouseOver , setIsMouseOver] = useState(false);
  const [heading, setHeading ] = useState("Hello");
  
  const mouseOver = ()=> {
    setIsMouseOver(true);
  }

  const mouseOut = ()=> {
    setIsMouseOver(false);
  }
  
  
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={mouseOver} onMouseOut={mouseOut} style={{backgroundColor:  isMouseOver ? "black" : "white"}} >Submit</button>
    </div>
  );
}

export default App;
