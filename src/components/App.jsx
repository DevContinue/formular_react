import React from "react";
import Login from "./Login";
import Register from "./Register";
import Form from "./Form";

let userIsRegistered = true;

function App() {
  return <div className="container">{
 //     userIsRegistered ? <Login /> : <Register />  
 <Form isRegistered={userIsRegistered}/>
  }</div>  
}

export default App;
