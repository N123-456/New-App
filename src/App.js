import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Routes,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert(" Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled", "success");
    }
  };
  return(
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          toggleMode={toggleMode}
          mode={mode}
        />
        <Alert alert={alert} />
        <div className="container my 3">
      
        <Routes>
        <Route path="/" element={<TextForm
                  heading=" Try TextUtils-word counter,character counter,remove extra spaces"
                  mode={mode}
                  showAlert={showAlert}
                />} />
<Route path="/about" element={<About/>} />
</Routes>             
  </div>
 
  </Router>  
      
  </>
  );
}

export default App;
