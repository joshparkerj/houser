import React from 'react';
import './House.css';

export default function House(props){
  return (
    <div className="house">
      <img src={props.data.imgurl} alt={props.data.name} />
      <p>Name: {props.data.name}</p>
      <p>Address: {props.data.address}</p>
      <p>City: {props.data.city}</p>
      <p>State: {props.data.state}</p>
      <p>Zip Code: {props.data.zipcode}</p>
      <p>Mortgage: {props.data.mortgage}</p>
      <p>Rent: {props.data.rent}</p>
      <button onClick = {() => props.del(props.data.id)}>
        X
        <span className="deletetext">delete this house record</span>
      </button>
    </div>
  )
}