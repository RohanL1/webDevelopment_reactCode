import React from "react";
import Login from "./Login";

let isLoggedIn=true;

function App() {
  return (
    <div className="container">
      { isLoggedIn ? <Login />  : <h1>Hello</h1>}
    </div>
  );
}

export default App;
