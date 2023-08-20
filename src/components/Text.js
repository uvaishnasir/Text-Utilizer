import React, { useState } from "react";

export default function Text(props) {
  const [text, updateText] = useState("");
  const upperClick = () => {
    updateText(text.toUpperCase());
    props.showAlert(" Converted to UpperCase", "success");
  };
  const lowerClick = () => {
    updateText(text.toLowerCase());
    props.showAlert(" Converted to LowerCase", "success");
  };

  const removeWhite = () => {
    updateText(text.replaceAll(/\s+/g, ""));
    props.showAlert(" Removed All Whitespaces", "success");
  };
  const clearText = () => {
    updateText("");
    props.showAlert(" Text Cleared", "success");
  };

  const handleChange = (e) => {
    updateText(e.target.value);
  };
  const handleCopy = () => {
    const copyText = document.getElementById("myBox");
    copyText.select();
    // copyText.setSelectionRange(0, 99999);
    document.getSelection().removeAllRanges();

    navigator.clipboard.writeText(copyText.value);
    props.showAlert(" Copied to clipboard", "success");
  };

  return (
    <>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={upperClick}>
          Convert To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={lowerClick}>
          Convert To LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={removeWhite}>
          Remove WhiteSpace
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        className="container my-3"
      >
        <h3>Summary of your Text</h3>
        <p>
          Words = {text.split(" ").filter((e)=>{return e.length!==0}).length} and Letters ={" "}
          {text.length}
        </p>
        <h3>Time to read this Text</h3>
        <p>{0.004 * (text === "" ? 0 : text.split(" ").filter((e)=>{return e.length!==0}).length)} minutes</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
