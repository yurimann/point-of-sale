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

    return (
        <button
        className={this.props.type}
        onClick={this.handleClick}>
          {this.props.number}
        </button>
    );
  }
}

export default Square;
