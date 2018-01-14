import React, {Component} from 'react';
import Item from './Item'

class Category extends Component {
  constructor(props){
    super(props);
    this.submitValue = this.submitValue.bind(this)
  }

  submitValue(n) {
    this.setState({number: ""});

  }

  render() {
    return(
      <Item type="Cupcake" onClick={this.submitValue} number={this.props.number}/>
    );
  }
}

export default Category;
