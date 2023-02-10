import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className, onClick, text, type } = this.props;
    return (
      <button className={className} type={type} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
