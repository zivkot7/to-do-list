import React from "react";

const Button = (props) => {
  const { className, onClick, text, type } = props;
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
