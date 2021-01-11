import React, { useState } from 'react';



import Form from './components/Form';
import './App.css';


function App() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
  })
  return (
    <div className="App">
      <Form input={state} setInputs={setState}/>
   
    </div>
  );
}

export default App;
