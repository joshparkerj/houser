import React from 'react';
import PropTypes from 'prop-types';
import { Route, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import StepOne from './step-one';
import StepTwo from './step-two';
import StepThree from './step-three';

import { ABcancel } from '../../ducks/reducer';

import './Wizard.css';

const Wizard = function Wizard({ ABcancel: cancel }) {
  const navigate = useNavigate();

  const handleCancel = () => {
    cancel();
    navigate('/');
  };

  return (
    <div className="wizard">
      <h3>Add New Listing</h3>
      <button type="button" className="cancel-button" onClick={handleCancel}>
        Cancel
      </button>
      <Route path="/wizard/step-one" component={StepOne} />
      <Route path="/wizard/step-two" component={StepTwo} />
      <Route path="/wizard/step-three" component={StepThree} />
    </div>
  );
};

Wizard.propTypes = {
  ABcancel: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  ABcancel,
};

export default connect(null, mapDispatchToProps)(Wizard);
