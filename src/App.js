import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Header subtitle = "Let's get started" />
      <Todo />
    </div>
  );
}

export default App;
