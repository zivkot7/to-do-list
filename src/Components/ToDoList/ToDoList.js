import React, { useState } from "react";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import Button from "../Button/Button";
import Input from "../Input/Input";

const ToDoList = () => {
  const [enteredInput, setEnteredInput] = useState("");
  const [listItems, setListItems] = useState([]);
  const [isEditable, setIsEditable] = useState("");
  const [editInput, setEditInput] = useState("");
  const [showIsDone, setShowIsDone] = useState(false);
  const [showNotDone, setShowNotDone] = useState(false);

  const addNewTodoItem = () => {
    const id = Date.now();
    const createdAt = new Date().toUTCString().split(" G")[0];
    setListItems(
      [...listItems, { id, text: enteredInput, createdAt, isDone: false }],
      setEnteredInput("")
    );
  };
  const onEditExit = () => {
    setIsEditable("");
  };
  const onEditInputChange = (e) => {
    setEditInput(e.target.value);
  };
  const onEditSave = (e, id) => {
    setListItems(
      [
        ...listItems?.filter((item) => {
          if (item.id === id) {
            return (item.text = editInput);
          }
          return item;
        }),
      ],
      setIsEditable("")
    );
  };
  const deleteTodoListItem = (id) => {
    setListItems(listItems.filter((item) => item.id !== id));
  };
  const onEditingItem = (e, id) => {
    setIsEditable(id);
  };
  const onInputChange = (el) => {
    setEnteredInput(el.target.value);
  };
  const markAllAsDone = () => {
    setListItems(
      listItems.map((item) => {
        return { ...item, isDone: true };
      })
    );
  };
  const deleteAllItems = () => {
    setListItems([]);
  };
  const deleteAllDoneItems = () => {
    setListItems(listItems.filter((item) => !item.isDone));
  };
  const checkedCheckBox = (id) => {
    setListItems(
      listItems.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };
  const showFinished = () => {
    setShowIsDone(true);
    setShowNotDone(false);
  };
  const showNotFinished = () => {
    setShowNotDone(true);
    setShowIsDone(false);
  };
  const showAll = () => {
    setShowIsDone(false);
    setShowNotDone(false);
  };

  return (
    <div>
      <h1>Todo list</h1>
      <div className="new-todo-box">
        <div className="book"></div>
        <Input
          placeholder="New Todo"
          size={71}
          type="text"
          value={enteredInput}
          onChange={onInputChange}
        />
        <br />
        <Button
          type="button"
          className="add-new-task"
          text="Add new task"
          onClick={addNewTodoItem}
        />
      </div>
      <h1>My todo list</h1>
      <Button text="All" type="button" className="btnAll" onClick={showAll} />
      <Button
        text="Done"
        type="button"
        className="btnDone"
        onClick={showFinished}
      />
      <Button
        type="button"
        text="Mark all as done"
        className="btnAll"
        onClick={markAllAsDone}
      />
      <Button
        text="Todo"
        type="button"
        className="btnTodo"
        onClick={showNotFinished}
      />
      <div>
        {listItems
          .filter((item) => {
            if (showIsDone && item.isDone) {
              return true;
            }
            if (showNotDone && !item.isDone) {
              return true;
            }
            if (!showIsDone && !showNotDone) {
              return true;
            }
            return false;
          })
          .map((item, index) => (
            <ToDoListItem
              className={item.isDone ? "finished" : "list-item"}
              item={item}
              key={index}
              editValue={editInput}
              textEdit={item.text}
              editable={isEditable}
              value={enteredInput}
              size={50}
              onEditChange={onEditInputChange}
              onDelete={() => deleteTodoListItem(item.id)}
              onChange={() => checkedCheckBox(item.id)}
              onEdit={(e) => onEditingItem(e, item.id)}
              onExit={(e) => onEditExit(e, item.id)}
              onSave={(e) => onEditSave(e, item.id)}
            />
          ))}
      </div>

      <Button
        type="button"
        className="delete-done-tasks"
        text="Delete done tasks"
        onClick={deleteAllDoneItems}
      />
      <Button
        type="button"
        className="delete-all-tasks"
        text="Delete all tasks"
        onClick={deleteAllItems}
      />
    </div>
  );
};

export default ToDoList;
