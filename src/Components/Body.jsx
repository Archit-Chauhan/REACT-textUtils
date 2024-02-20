import React from 'react'
import { useState } from 'react'

export default function Body() {
  // function lowerCase(){
  //     let newText = data.toUpperCase();
  //     setData(newText)
  // }
  const lowerCase = () => {
    setData(data.toLowerCase());
    document.title = "TEXT-LOWER";
  }
  function upperCase() {
    setData(data.toUpperCase());
    document.title = "TEXT-UPPER";

  }
  function clearText() {
    setData("")
    document.title = "TEXT-CLEAR";

  }
  function copyText() {
    navigator.clipboard.writeText(data);
    document.title ="TEXT-COPIED";

  }

  const [data, setData] = useState("")
  return (
    <>
      <div className='container'>
        <div class="d-flex justify-content-center">
          <textarea name="textarea" id="textarea" cols="60" rows="10" className="rounded-lg" value={data} onChange={(data) => setData(data.target.value)}></textarea>
        </div>
        <div class="d-flex justify-content-center">
          <button className="m-3 btn btn-primary" onClick={upperCase}>UPPERCASE</button>
          <button className="m-3 btn btn-primary" onClick={lowerCase}>LOWERCASE</button>
          <button className="m-3 btn btn-primary" onClick={clearText}>CLEAR TEXT</button>
          <button className="m-3 btn btn-primary" onClick={copyText}>COPY TEXT</button>
        </div>
        <div className="container">
          <h3>Preview</h3>
          <div className="text-primary font-weight-bolder">{data}</div>
        </div>

      </div>
    </>
  )
}
