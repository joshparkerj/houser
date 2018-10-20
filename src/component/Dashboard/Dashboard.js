import React, {Component} from 'react';
import './Dashboard.css';
import House from '../House/House';

export default class Dashboard extends Component{

  handleClick = () => {
    this.props.history.push('/wizard');
  }

  render() {
    return (
      <div className="dashboard">
        <button onClick={this.handleClick}>
          Add New Property
        </button>
        <House />
      </div>
    )
  }
}