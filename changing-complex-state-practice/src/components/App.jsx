import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });


  // function handleChange(e){
  //   const {name : inputName, value: inputValue} = e.target;
  //   console.log(contact);

  //   if (inputName === "lName")
  //     setContact({
  //       fName: contact.fName,
  //       lName: inputValue,
  //       email: contact.email
  //     });
    
  //   else if (inputName === "fName")
  //   setContact({
  //     fName: inputValue,
  //     lName: contact.lName,
  //     email: contact.email
  //   });

  //   else if (inputName === "email")
  //   setContact({
  //     fName: contact.fName,
  //     lName: contact.lName,
  //     email: inputValue 
  //   });

  // }


  function handleChange(e){
    const {name : inputName, value: inputValue} = e.target;
    setContact(oldContact => ({ ...contact, [inputName]: inputValue}));
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="lName" value={contact.lName} onChange={handleChange} placeholder="Last Name" />
        <input name="fName" value={contact.fName} onChange={handleChange} placeholder="First Name" />
        <input name="email" value={contact.email} onChange={handleChange} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
