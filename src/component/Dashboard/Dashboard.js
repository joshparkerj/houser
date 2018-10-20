import React, {Component} from 'react';
import './Dashboard.css';
import House from '../House/House';

export default class Dashboard extends Component{
  render() {
    return (
      <div className="dashboard">
        dashboard
        <House />
      </div>
    )
  }
}