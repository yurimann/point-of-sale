import React, { Component } from 'react';
import Square from './Square';
import Category from './Category';
import Subtotal from './Subtotal';
import evaluate from './logic/Evaluate';

class Keypad extends Component {

  constructor(props) {
    super(props);
    this.changeNumber = this.changeNumber.bind(this);
    this.state = {
      number: "",
      // prev: null
    };

  }

  changeNumber(n) {
    console.log(n);
    switch (n){
      case 'Enter': {
        evaluate(this.state.number);
        this.setState({number: ""});
        break;
      }
      case 'Checkout': {
        var x = evaluate(this.state.number);
        this.setState({number: x});
        break;
      }
      case 'Del': {
        let del = this.state.number.slice(0, -1);
        this.setState({number: del});
        break;
      }
      default: {
        this.setState({number: (this.state.number + n)});
      }
    }
  }

  render() {
    return(
      <div>
        <Subtotal number={this.state.number}/>
        <Category number={this.state.number}/>
        <div className="Row">
          <Square number="1" onClick={this.changeNumber} type="input-button"/>
          <Square number="2" onClick={this.changeNumber} type="input-button"/>
          <Square number="3" onClick={this.changeNumber} type="input-button"/>
        </div>
        <div className="Row">
          <Square number="4" onClick={this.changeNumber} type="input-button"/>
          <Square number="5" onClick={this.changeNumber} type="input-button"/>
          <Square number="6" onClick={this.changeNumber} type="input-button"/>
        </div>
        <div className="Row">
          <Square number="7" onClick={this.changeNumber} type="input-button"/>
          <Square number="8" onClick={this.changeNumber} type="input-button"/>
          <Square number="9" onClick={this.changeNumber} type="input-button"/>
        </div>
        <div className="Row">
          <Square number="." onClick={this.changeNumber} type="input-button"/>
          <Square number="0" onClick={this.changeNumber} type="input-button"/>
          <Square number="Del" onClick={this.changeNumber} type="input-button"/>
        </div>
        <div className="Row">
          <Square number="Enter" onClick={this.changeNumber} type="action-button"/>
          <Square number="Checkout" onClick={this.changeNumber} type="action-button"/>
        </div>
      </div>


    );
  }
}

export default Keypad;
