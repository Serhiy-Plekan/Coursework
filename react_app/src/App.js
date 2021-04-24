import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [serverData, setServerData] = useState({});
  const [correlation, setCorrelation] = useState(0);

  useEffect(() => {
    console.log(serverData);
    console.log(correlation);
  }, [serverData, correlation])

  const handleSelectMethod = e => {
    axios.post(`http://127.0.0.1:8000/api/${e.target.value}-trend/`, file)
    .then(response => response.data)
    .then(data => {setServerData(data); setCorrelation(data.correlation)})
  }
  
  return (
    <div className="App">
      <input type="file" onChange={e => setFile(e.target.files[0])}/>
      {file && (
        <>
          <button onClick={e => handleSelectMethod(e) } value='linear'>Linear</button>
          <button onClick={e => handleSelectMethod(e) } value='logarithmic'>Logarithmic</button>
          <button onClick={e => handleSelectMethod(e) } value='hyperbolic'>Hyperbolic</button>
          <button onClick={e => handleSelectMethod(e) } value='smoothing'>Smoothing</button>
          <p>{correlation}</p>
        </>
      )}
    </div>
  );
}

export default App;
