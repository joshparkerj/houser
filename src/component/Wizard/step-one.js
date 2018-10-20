import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ABstepOne } from '../../ducks/reducer';

class StepOne extends Component{

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

  componentDidMount(){
    this.setState({
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zipcode: this.props.zipcode
    })
  }

  handleNextStep = () => {
    this.props.ABstepOne(
      this.state.name,
      this.state.address,
      this.state.city,
      this.state.state,
      this.state.zipcode
    );
    this.props.history.push('/wizard/step-two');
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    console.log(this.props);
    return (
      <div className="step-one">
        <label>Property Name</label><br />
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />
        <label>Address</label><br />
        <input
          className="address-field"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
        />
        <br />
        <div>
          <label>City</label><br />
          <input
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>State</label><br />
          <input
            name="state"
            value={this.state.state}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Zip</label><br />
          <input
            name="zipcode"
            value={this.state.zipcode}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div className="lower-btns">
          <button className="nav-btn" onClick={this.handleNextStep}>
            Next Step
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
    zipcode: state.zipcode
  }
}

const mapDispatchToProps = {
  ABstepOne
}

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
