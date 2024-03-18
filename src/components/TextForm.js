import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("enter  text here");
  //text="new text"; //wrong way to change the state
  //setText = "new text"; //correct way to change the state
  const handleUpClick = () => {
    console.log("UpperCase Was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success")
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleLowClick = () => {
    //console.log("lowerrCase Was Clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success")
  };
  const copyText = () => {
    navigator.clipboard.writeText(text)
  }
  return (
    <>
      <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="MyBox" class="form-label">
            Example text area
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"light",color:props.mode==="dark"?"white":"grey"}}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Upper Case
        </button>
        <button disabled={text.length===0}
          className="btn btn-primary mx-2"
          onClick={() => handleLowClick()}
        >
          Convert To Lower Case
        </button>
        <button disabled={text.length===0}
          className="btn btn-primary mx-2"
          onClick={copyText}
        >
          Copy Text
        </button>
      </div>
      <div className="container my 3" style={{color:props.mode==="dark"?"white":"grey"}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text-box above to preview it here"}</p>
      </div>
    </>
  );
}




    
  