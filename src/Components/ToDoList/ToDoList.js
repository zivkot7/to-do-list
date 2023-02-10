import React, { Component } from "react";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import Button from "../Button/Button";
import Input from "../Input/Input";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredInput: "",
      listItems: [],
      isEditable: "",
      editInput: "",
    };
  }
  addNewTodoItem = () => {
    const id = Date.now();
    const createdAt = new Date().toUTCString().split(" G")[0];
    this.setState((prevState) => ({
      listItems: [
        ...prevState.listItems,
        { id, text: prevState.enteredInput, createdAt, isDone: false },
      ],
      enteredInput: "",
    }));
  };
  onEditExit = () => {
    this.setState({
      isEditable: "",
    });
  };
  onEditInputChange = (e) => {
    this.setState({ editInput: e.target.value });
  };
  onEditSave = (e, id) => {
    this.setState({
      listItems: [
        ...this.state.listItems?.filter((item) => {
          if (item.id === id) {
            return (item.text = this.state.editInput);
          }
          return item;
        }),
      ],
      isEditable: "",
    });
  };
  deleteTodoListItem = (id) => {
    this.setState((prevState) => ({
      listItems: prevState.listItems.filter((item) => item.id !== id),
    }));
  };
  onEditingItem = (e, id) => {
    this.setState({ isEditable: id });
  };
  onInputChange = (el) => {
    this.setState({ enteredInput: el.target.value });
  };
  markAllAsDone = () => {
    this.setState(() => ({
      listItems: this.state.listItems.map((item) => {
        return { ...item, isDone: true };
      }),
    }));
  };
  deleteAllItems = () => {
    this.setState({
      listItems: [],
    });
  };
  deleteAllDoneItems = () => {
    this.setState(() => ({
      listItems: this.state.listItems.filter((item) => !item.isDone),
    }));
  };
  checkedCheckBox = (id) => {
    this.setState((prevState) => ({
      listItems: prevState.listItems.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      }),
    }));
  };
  showFinished = () => {
    this.setState({
      showIsDone: true,
      showNotDone: false,
    });
  };
  showNotFinished = () => {
    this.setState({
      showNotDone: true,
      showIsDone: false,
    });
  };
  showAll = () => {
    this.setState({ showIsDone: false, showNotDone: false });
  };
  render() {
    return (
      <div>
        <h1>TodoInput</h1>
        <div className="new-todo-box">
          <div className="book"></div>
          <Input
            placeholder="New Todo"
            size={71}
            type="text"
            value={this.state.enteredInput}
            onChange={this.onInputChange}
          />
          <br />
          <Button
            type="submit"
            className="add-new-task"
            text="Add new task"
            onClick={this.addNewTodoItem}
          />
        </div>
        <h1>TodoList</h1>
        <Button
          text="All"
          type="submit"
          className="btnAll"
          onClick={this.showAll}
        />
        <Button
          text="Done"
          type="submit"
          className="btnDone"
          onClick={this.showFinished}
        />
        <Button
          text="Todo"
          type="submit"
          className="btnTodo"
          onClick={this.showNotFinished}
        />
        <div>
          {this.state.listItems
            .filter((item) => {
              if (this.state.showIsDone && item.isDone) {
                return true;
              }
              if (this.state.showNotDone && !item.isDone) {
                return true;
              }
              if (!this.state.showIsDone && !this.state.showNotDone) {
                return true;
              }
              return false;
            })
            .map((item, index) => (
              <ToDoListItem
                className={item.isDone ? "finished" : "list-item"}
                item={item}
                key={index}
                editValue={this.state.editInput}
                textEdit={item.text}
                editable={this.state.isEditable}
                value={this.state.enteredInput}
                size={50}
                onEditChange={this.onEditInputChange}
                onDelete={() => this.deleteTodoListItem(item.id)}
                onChange={() => this.checkedCheckBox(item.id)}
                onEdit={(e) => this.onEditingItem(e, item.id)}
                onExit={(e) => this.onEditExit(e, item.id)}
                onSave={(e) => this.onEditSave(e, item.id)}
              />
            ))}
        </div>

        <Button
          type="submit"
          className="delete-done-tasks"
          text="Delete done tasks"
          onClick={this.deleteAllDoneItems}
        />
        <Button
          type="submit"
          className="delete-all-tasks"
          text="Delete all tasks"
          onClick={this.deleteAllItems}
        />
      </div>
    );
  }
}

export default ToDoList;
