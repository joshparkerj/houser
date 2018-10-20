import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ABstepTwo } from '../../ducks/reducer';

class StepTwo extends Component{

  constructor(){
    super();
    this.state = {
      imgurl: ''
    }
  }

  componentDidMount(){
    this.setState({
      imgurl: this.props.imgurl
    })
  }

  handleNextStep = () => {
    this.props.ABstepTwo(this.state.imgurl);
    this.props.history.push('/wizard/step-three');
  }

  handlePreviousStep = () => {
    this.props.ABstepTwo(this.state.imgurl);
    this.props.history.push('/wizard/step-one');
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="step-two">
        <label>Image URL</label>
        <input
          name="imgurl"
          value={this.state.imgurl}
          onChange={this.handleChange}
        />
        <br />
        <div className="lower-btns">
          <button className="nav-btn" onClick={this.handlePreviousStep}>
            Previous Step
          </button>
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
    imgurl: state.imgurl
  }
}

const mapDispatchToProps = {
  ABstepTwo
}

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
