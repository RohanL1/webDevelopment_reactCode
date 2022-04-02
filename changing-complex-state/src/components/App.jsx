import React, { useState } from "react";


function App() {

  const [name , setName] = useState({fName:"", lName:""});

  function handleChange(event){
    const {name : inputName, value: inputValue} = event.target;
    (inputName === "fName") ? setName({fName:inputValue, lName:name.lName}) : setName({fName:name.fName, lName:inputValue}) ;
  }


  return (
    <div className="container">
      <h1>Hello {name.fName} {name.lName}</h1>
      <form>
        <input onChange={handleChange} value={name.fName} name="fName" placeholder="First Name" />
        <input onChange={handleChange} value={name.lName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );


//   const [fName , setFName] = useState("");
//   const [lName , setLName] = useState("");

//   function HashChangeF(event){
//     console.log(event.target.value);
//     setFName(event.target.value);
//   }

//   function HashChangeL(event){
//     console.log(event.target.value);
//       setLName(event.target.value);
//  }

  // return (
  //   <div className="container">
  //     <h1>Hello {fName} {lName}</h1>
  //     <form>
  //       <input onChange={HashChangeF} name="fName" placeholder="First Name" />
  //       <input onChange={HashChangeL} name="lName" placeholder="Last Name" />
  //       <button>Submit</button>
  //     </form>
  //   </div>
  // );

}

export default App;
