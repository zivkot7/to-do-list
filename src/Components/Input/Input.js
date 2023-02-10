import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      value,
      size,
      checked,
      placeholder,
      type,
      onChange,
      className,
      onClick,
    } = this.props;
    return (
      <input
        className={className}
        checked={checked}
        size={size}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onClick={onClick}
      ></input>
    );
  }
}
export default Input;
