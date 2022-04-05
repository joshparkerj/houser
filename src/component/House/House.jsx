import React from 'react';
import PropTypes from 'prop-types';

import './House.css';

const House = function House({ data, del }) {
  return (
    <div className="house">
      <img src={data.imgurl} alt={data.name} />
      <p>
        Name:
        {data.name}
      </p>
      <p>
        Address:
        {data.address}
      </p>
      <p>
        City:
        {data.city}
      </p>
      <p>
        State:
        {data.state}
      </p>
      <p>
        Zip Code:
        {data.zipcode}
      </p>
      <p>
        Mortgage:
        {data.mortgage}
      </p>
      <p>
        Rent:
        {data.rent}
      </p>
      <button type="button" onClick={() => del(data.id)}>
        X
        <span className="deletetext">delete this house record</span>
      </button>
    </div>
  );
};

House.propTypes = {
  data: PropTypes.shape({
    imgurl: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipcode: PropTypes.string,
    mortgage: PropTypes.string,
    rent: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  del: PropTypes.func.isRequired,
};

export default House;
