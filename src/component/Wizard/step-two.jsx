import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ABstepTwo } from '../../ducks/reducer';

const StepTwo = function StepTwo({ imgurl, ABstepTwo: stepTwo }) {
  const [userInput, setUserInput] = useState(imgurl);

  const navigate = useNavigate();

  const handleNextStep = () => {
    stepTwo(imgurl);
    navigate('/wizard/step-three');
  };

  const handlePreviousStep = () => {
    stepTwo(imgurl);
    navigate('/wizard/step-one');
  };

  return (
    <div className="step-two">
      <label htmlFor="imgurl">
        Image URL
        <input
          name="imgurl"
          id="imgurl"
          value={userInput}
          onChange={({ target: { value } }) => setUserInput(value)}
        />
      </label>
      <br />
      <div className="lower-btns">
        <button type="button" className="nav-btn" onClick={handlePreviousStep}>
          Previous Step
        </button>
        <button type="button" className="nav-btn" onClick={handleNextStep}>
          Next Step
        </button>
      </div>
    </div>
  );
};

StepTwo.propTypes = {
  imgurl: PropTypes.string.isRequired,
  ABstepTwo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  imgurl: state.imgurl,
});

const mapDispatchToProps = {
  ABstepTwo,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
