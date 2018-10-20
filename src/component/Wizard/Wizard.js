import React, {Component} from 'react';
import './Wizard.css';
import axios from 'axios';
const api_address = "http://localhost:8080"


export default class Wizard extends Component{

  constructor(){
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }
  }

  handleCancel = () => {
    this.props.history.push('/');
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  postHouse = () => {
    axios.post(`${api_address}/house`, {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode
    })
      .then(res => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div className="wizard">
        <h3>WIZARD</h3>
        <label>name</label>
        <input name="name" onChange={this.handleChange} />
        <br />
        <label>address</label>
        <input name="address" onChange={this.handleChange} />
        <br />
        <label>city</label>
        <input name="city" onChange={this.handleChange} />
        <br />
        <label>state</label>
        <input name="state" onChange={this.handleChange} />
        <br />
        <label>zipcode</label>
        <input name="zipcode" onChange={this.handleChange} />
        <br />
        <button onClick={this.handleCancel}>
          Cancel
        </button>
        <button onClick={this.postHouse}>
          Complete
        </button>
      </div>
    )
  }
}