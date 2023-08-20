import React, { useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
// import About from "./components/About";
import Alert from "./components/Alert";

export default function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been enabled.", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#000000";
      showAlert(" Dark Mode has been enabled.", "success");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <About mode={mode} /> */}
      <Text
        showAlert={showAlert}
        heading="Enter the text to analyze"
        mode={mode}
      />
    </>
  );
}
