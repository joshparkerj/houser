import React, {Component} from 'react';
import './Dashboard.css';
import House from '../House/House';
import axios from 'axios';
const api_address = "http://localhost:8080"

export default class Dashboard extends Component{

  constructor() {
    super();
    this.state = {
      houses: []
    }
  }

  componentDidMount(){
    this.getHouses();
  }

  handleClick = () => {
    this.props.history.push('/wizard/step-one');
  }

  getHouses = () => {
    axios.get(`${api_address}/houses`)
      .then(res => {
        this.setState({houses: res.data});
      })
      .catch(err => {
        console.error(err);
      })
  }

  deleteHouse = id => {
    axios.delete(`${api_address}/house/${id}`)
      .then(res => {
        this.getHouses()
      })
      .catch(err => {
        console.error(err);
      })
  }

  houseMapper = (e,i) => {
    return (
      <div className="house-wrapper" key={i}>
        <House data={e} del={this.deleteHouse} />
      </div>
    )
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-heading">
          <h1>Dashboard</h1>
          <button onClick={this.handleClick}>
            Add New Property
          </button>
        </div>
        <h2>Home Listings</h2>
        {this.state.houses.map(this.houseMapper)}
      </div>
    )
  }
}