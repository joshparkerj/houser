import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { ABstepThree } from '../../ducks/reducer';
import { ABcancel } from '../../ducks/reducer';

const api_address = "http://localhost:8080";

class StepThree extends Component{

  constructor(){
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      imgurl: '',
      mortgage: 0,
      rent: 0
    }
  }

  componentDidMount(){
    this.setState({
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zipcode: this.props.zipcode,
      imgurl: this.props.imgurl,
      mortgage: this.props.mortgage,
      rent: this.props.rent
    })
  }

  handlePreviousStep = () => {
    this.props.ABstepThree(
      this.state.name,
      this.state.address,
      this.state.city,
      this.state.state,
      this.state.zipcode,
      this.state.imgurl,
      this.state.mortgage,
      this.state.rent
    );
    this.props.history.push('/wizard/step-two');
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
      zipcode: this.state.zipcode,
      imgurl: this.state.imgurl,
      mortgage: this.state.mortgage,
      rent: this.state.rent
    })
      .then(res => {
        this.props.ABcancel();
        this.props.history.push('/');
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div className="step-three">
        <h4>Recommended Rent: ${1.25 * this.state.mortgage}</h4>
        <label>Monthly Mortgage Amount</label>
        <input
          name="mortgage"
          value={this.state.mortgage}
          onChange={this.handleChange}
        />
        <br />
        <label>Desired Monthly Rent</label>
        <input
          name="rent"
          value={this.state.rent}
          onChange={this.handleChange}
        />
        <br />
        <div className="lower-btns">
          <button className="nav-btn" onClick={this.handlePreviousStep}>
            Previous Step
          </button>
          <button onClick={this.postHouse}>
            Complete
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode,
    imgurl: state.imgurl,
    mortgage: state.mortgage,
    rent: state.rent
  }
}

const mapDispatchToProps = {
  ABstepThree,
  ABcancel
}

export default connect(mapStateToProps, mapDispatchToProps)(StepThree);
