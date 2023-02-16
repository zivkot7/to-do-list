import React from "react";

const Input = (props) => {
  const {
    value,
    size,
    checked,
    placeholder,
    type,
    onChange,
    className,
    onClick,
  } = props;
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
};

export default Input;
