import React, { Component } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

class ToDoListItem extends Component {
  render() {
    const {
      item,
      value,
      onChange,
      onEdit,
      className,
      onDelete,
      edit,
      size,
      onExit,
      onSave,
      onEditChange,
      textEdit,
    } = this.props;
    return (
      <div>
        {this.props.item.id === this.props.editable ? (
          <div className="edit-box">
            <Input
              className="edit"
              type={edit}
              size={size}
              placeholder={textEdit}
              onChange={onEditChange}
            />
            <Button type="submit" text="Save" onClick={onSave} />
            <Button type="submit" text="Cancel" onClick={onExit} />
          </div>
        ) : (
          <p className={className}>
            {item.text}
            <span className="list-item-options">
              <Input
                type="checkbox"
                value={value}
                checked={item.isDone}
                onChange={onChange}
              />
              <Button className="pen" onClick={onEdit} />
              <Button className="basket" onClick={onDelete} />
            </span>
          </p>
        )}
      </div>
    );
  }
}

export default ToDoListItem;
