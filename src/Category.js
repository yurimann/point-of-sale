import React, {Component} from 'react';
import Item from './Item'

class Category extends Component {
  constructor(props){
    super(props);
    this.changeNumber = this.changeNumber.bind(this);
    this.state = { number: this.props.number };
  }

  changeNumber(n){
    console.log(this);
  }

  render() {
    return(
      <Item type="Cupcake" number={this.props.number} onclick={this.changeNumber}/>
    );
  }
}

export default Category;
