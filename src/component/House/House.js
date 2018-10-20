import React from 'react';
import './House.css';

export default function House(props){
  return (
    <div className="house">
      <h3>house</h3>
      <p>Name: {props.data.name}</p>
      <p>Address: {props.data.address}</p>
      <p>City: {props.data.city}</p>
      <p>State: {props.data.state}</p>
      <p>Zip Code: {props.data.zipcode}</p>
      <button onClick = {() => props.del(props.data.id)}>Delete</button>
    </div>
  )
}