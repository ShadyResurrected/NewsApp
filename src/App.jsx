import reactLogo from "./assets/react.svg";
import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Here exact keyword is used so as to differentiate every path
// Key is used so as to remount the component with new information and then show it else it would show the information on reloading the page

const App = () => {
  const pageSize = 5; // Number of news item displayed on one page
  const apiKey = import.meta.env.VITE_apiKey

  const [progress, setProgress] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <LoadingBar height={4} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News setProgress={setProgress}
                key="general" apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News setProgress={setProgress}
                key="business" apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News setProgress={setProgress}
                key="entertainment" apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News setProgress={setProgress}
                key="health" apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News setProgress={setProgress}
                key="science" apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News setProgress={setProgress}
                key="sports" apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News setProgress={setProgress}
                key="technology" apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;