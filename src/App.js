import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Header subtitle = "here lies something new" />
      <Todo />
    </div>
  );
}

export default App;
