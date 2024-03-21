import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/uni-data" element={<News />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
