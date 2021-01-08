import React, { useState } from 'react';

import Results from './components/Results';
import Form from './components/Form';
import './App.css';


function App() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPass: "",
  })
  return (
    <div className="App">
      <Form input={state} setInputs={setState}/>
      <Results data={state}/>
    </div>
  );
}

export default App;
