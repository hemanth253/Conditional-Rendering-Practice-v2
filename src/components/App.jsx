import React, { useState } from "react";
import Form from "./Form";

// var userIsRegistered = false;

function App() {
  const [userIsRegistered, setUserIsRegistered] = useState(false);

  function fun1() {
    setUserIsRegistered(true);
  }
  function fun2() {
    setUserIsRegistered(false);
  }

  return (
    <div className="container">
      <button onMouseOver={fun1} onMouseOut={fun2}>
        myWish
      </button>
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
