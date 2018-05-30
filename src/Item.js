import React, { Component } from 'react';
import evaluate from './logic/Evaluate'

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
      var ticket = {};
      console.log(this);
      // this.props.onClick(this.props.number);
      ticket[this.props.type] = this.props.number;
      evaluate(ticket);

  }
  render() {

    return (
        <button
        className={this.props.type}
        onClick={this.handleClick}>
          {this.props.type}
        </button>
    );
  }
}

export default Item;
