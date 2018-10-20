import React, {Component} from 'react';
import './Wizard.css';
import {Route} from 'react-router-dom';
import StepOne from './step-one';
import StepTwo from './step-two';
import StepThree from './step-three';
import {connect} from 'react-redux';
import { ABcancel } from '../../ducks/reducer';

class Wizard extends Component{

  handleCancel = () => {
    this.props.ABcancel();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="wizard">
        <h3>Add New Listing</h3>
        <button className="cancel-button" onClick={this.handleCancel}>
          Cancel
        </button>
        <Route path='/wizard/step-one' component={StepOne} />
        <Route path='/wizard/step-two' component={StepTwo} />
        <Route path='/wizard/step-three' component={StepThree} />
      </div>
    )
  }
}

const mapDispatchToProps = {
  ABcancel
}

export default connect(null, mapDispatchToProps)(Wizard);
