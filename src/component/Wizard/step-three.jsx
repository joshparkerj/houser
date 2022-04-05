import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ABstepThree, ABcancel } from '../../ducks/reducer';

const apiAddress = 'http://localhost:8080';

const StepThree = function StepThree({
  name,
  address,
  city,
  state,
  zipcode,
  imgurl,
  mortgage,
  rent,
  ABstepThree: stepThree,
  ABcancel: cancel,
}) {
  const [userInput, setUserInput] = useState({
    name, address, city, state, zipcode, imgurl, mortgage, rent,
  });

  const navigate = useNavigate();

  const handlePreviousStep = () => {
    stepThree(userInput);
    navigate('/wizard/step-two');
  };

  const handleChange = ({ target: { name: targetName, value } }) => {
    setUserInput({ ...userInput, [targetName]: value });
  };

  const postHouse = () => {
    axios.post(`${apiAddress}/house`, userInput)
      .then(() => {
        cancel();
        navigate('/');
      });
  };

  return (
    <div className="step-three">
      <h4>
        Recommended Rent: $
        {1.25 * userInput.mortgage}
      </h4>
      <label htmlFor="mortgage">
        Monthly Mortgage Amount
        <input
          name="mortgage"
          id="mortgage"
          value={userInput.mortgage}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="rent">
        Desired Monthly Rent
        <input
          name="rent"
          id="rent"
          value={userInput.rent}
          onChange={handleChange}
        />
      </label>
      <br />
      <div className="lower-btns">
        <button type="button" className="nav-btn" onClick={handlePreviousStep}>
          Previous Step
        </button>
        <button type="button" onClick={postHouse}>
          Complete
        </button>
      </div>
    </div>
  );
};

StepThree.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  imgurl: PropTypes.string.isRequired,
  mortgage: PropTypes.string.isRequired,
  rent: PropTypes.string.isRequired,
  ABstepThree: PropTypes.func.isRequired,
  ABcancel: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.name,
  address: state.address,
  city: state.city,
  state: state.state,
  zipcode: state.zipcode,
  imgurl: state.imgurl,
  mortgage: state.mortgage,
  rent: state.rent,
});

const mapDispatchToProps = {
  ABstepThree,
  ABcancel,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepThree);
