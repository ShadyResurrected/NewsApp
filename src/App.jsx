import reactLogo from "./assets/react.svg";
import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Here exact keyword is used so as to differentiate every path
// Key is used so as to remount the component with new information and then show it else it would show the information on reloading the page

export default class App extends Component {
  pageSize = 5; // Number of news item displayed on one page
  apiKey = import.meta.env.VITE_apiKey

  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <LoadingBar height={4} color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress}
                  key="general" apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress}
                  key="business" apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress}
                  key="entertainment" apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress}
                  key="health" apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress}
                  key="science" apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress}
                  key="sports" apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress}
                  key="technology" apiKey={this.apiKey}
                  pageSize={this.pageSize}
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
}
