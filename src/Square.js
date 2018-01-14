import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(this.props.number);
  }

  render() {
    const number = this.props.number;

    return (
        <button className="Keys" onClick={this.handleClick}>
          {number}
        </button>
    );
  }
}

export default Square;
