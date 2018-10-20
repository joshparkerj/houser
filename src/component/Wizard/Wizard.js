import React, {Component} from 'react';
import './Wizard.css';

export default class Wizard extends Component{

  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="wizard">
        wizard
        <button onClick={this.handleClick}>
          Cancel
        </button>
      </div>
    )
  }
}