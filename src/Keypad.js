import React, { Component } from 'react';
import Square from './Square';
import Subtotal from './Subtotal'

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
    switch (n){
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
        <div className="Row">
          <Square number="1" onClick={this.changeNumber}/>
          <Square number="2" onClick={this.changeNumber}/>
          <Square number="3" onClick={this.changeNumber}/>
        </div>
        <div className="Row">
          <Square number="4" onClick={this.changeNumber}/>
          <Square number="5" onClick={this.changeNumber}/>
          <Square number="6" onClick={this.changeNumber}/>
        </div>
        <div className="Row">
          <Square number="7" onClick={this.changeNumber}/>
          <Square number="8" onClick={this.changeNumber}/>
          <Square number="9" onClick={this.changeNumber}/>
        </div>
        <div className="Row">
          <Square number="." onClick={this.changeNumber}/>
          <Square number="0" onClick={this.changeNumber}/>
          <Square number="Del" onClick={this.changeNumber}/>
        </div>
      </div>


    );
  }
}

export default Keypad;
