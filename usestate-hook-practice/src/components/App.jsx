import React, { useState , useEffect} from "react";

function App() {
  let [ currTime, setState ] = useState(new Date().toLocaleTimeString([], { hour12: false }));

  function getCurrTime(){
    setState(new Date().toLocaleTimeString([], { hour12: false }));
  }  

  useEffect( () => setInterval(getCurrTime, 1000) , []);

  return (
    <div className="container">
      <h1>{currTime}</h1>
      <button onClick={getCurrTime}>Get Time</button>
    </div>
  );
}


export default App;
