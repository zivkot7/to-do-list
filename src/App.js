import "./App.css";
import React, { Component } from "react";
import ToDoList from "./Components/ToDoList/ToDoList";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <ToDoList />
      </div>
    );
  }
}

export default App;
