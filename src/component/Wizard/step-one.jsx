import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ABstepOne } from '../../ducks/reducer';

const StepOne = function StepOne({
  name, address, city, state, zipcode, ABstepOne: stepOne,
}) {
  const [userInput, setUserInput] = useState({
    name, address, city, state, zipcode,
  });

  const navigate = useNavigate();

  const handleNextStep = () => {
    stepOne(userInput);

    navigate('/wizard/step-two');
  };

  const handleChange = ({ target: { name: targetName, value } }) => {
    setUserInput({ ...userInput, [targetName]: value });
  };

  return (
    <div className="step-one">
      <label htmlFor="name">
        Property Name
        <br />
        <input
          name="name"
          id="name"
          value={userInput.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="address">
        Address
        <br />
        <input
          className="address-field"
          name="address"
          id="address"
          value={userInput.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <div>
        <label htmlFor="city">
          City
          <br />
          <input
            name="city"
            id="city"
            value={userInput.city}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="state">
          State
          <br />
          <input
            name="state"
            id="state"
            value={userInput.state}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="zipcode">
          Zip
          <br />
          <input
            name="zipcode"
            id="zipcode"
            value={userInput.zipcode}
            onChange={handleChange}
          />
        </label>
      </div>
      <br />
      <div className="lower-btns">
        <button type="button" className="nav-btn" onClick={handleNextStep}>
          Next Step
        </button>
      </div>
    </div>
  );
};

StepOne.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  ABstepOne: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.name,
  address: state.address,
  city: state.city,
  state: state.state,
  zipcode: state.zipcode,
});

const mapDispatchToProps = {
  ABstepOne,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
