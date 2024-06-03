import { useState } from 'react'

import './App.css'
let i = 0;
let timeout;

function App() {
  const [ui, setUi] = useState("");
 
//console.log("Value of i in App: ",i);

  function handleChange(e){

    //console.log("Value of i in handleChange: ", i);
   
    if (i == 0) {
       i = i + 1;
       //console.log("Inside if block");
       setUi(e.target.value);
       timeout = setTimeout(() => { 
         console.log("Fetched Request for input :", e.target.value);
         i = 0;
        // console.log("Value of i again set to 0");
       }, 1000);
     } else {
      //console.log("Inside else block");
      setUi(e.target.value);
      clearTimeout(timeout);
      //console.log("Timeout Cleared")
     timeout = setTimeout(() => {
       console.log("Fetched Request for input :",e.target.value);
       i = 0;}, 1000);
    }


  }

  return (
    <>
    <h2>Debounced Search</h2>
      <input type="text" onChange={handleChange} value={ui}></input>
      <h3> {ui}</h3>
    </>
  )
}

export default App
