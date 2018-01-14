import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Subtotal.css';

class Subtotal extends Component {

  render() {
    return(<div className="Sub">
      {this.props.number}
    </div>
    );
  }
}

Subtotal.propTypes = {
  number: PropTypes.string.isRequired
};


export default Subtotal;
