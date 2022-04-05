import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import House from '../House/House';

import './Dashboard.css';

const apiAddress = 'http://localhost:8080';

const Dashboard = function Dashboard() {
  const [houses, setHouses] = useState([]);
  const navigate = useNavigate();

  const getHouses = () => {
    axios.get(`${apiAddress}/houses`)
      .then(({ data }) => {
        setHouses(data);
      });
  };

  useEffect(() => {
    getHouses();
  }, []);

  const deleteHouse = (id) => {
    axios.delete(`${apiAddress}/house/${id}`)
      .then(() => {
        getHouses();
      });
  };

  const houseMapper = (e, i) => (
    <div className="house-wrapper" key={i}>
      <House data={e} del={deleteHouse} />
    </div>
  );

  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <h1>Dashboard</h1>
        <button type="button" onClick={() => navigate('/wizard/step-one')}>
          Add New Property
        </button>
      </div>
      <h2>Home Listings</h2>
      {houses.map(houseMapper)}
    </div>
  );
};

export default Dashboard;
