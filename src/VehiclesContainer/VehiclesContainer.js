import React, { Component } from 'react';
import './VehiclesContainer.css';
import getVehicles from '../services/vehiclesService'
import VehicleContainer from '../VehicleContainer/VehicleContainer';

class VehiclesContainer extends Component {

  render() {
    var vehicles = getVehicles.modelNameDTOs;

    return (vehicles && 
        <div className="vehicles-container">
          {vehicles.map(function mapVehicle(vehicle, index) {
            return <VehicleContainer vehicle={vehicle} key={index} />
          })}
        </div>
    );
  }
}

export default VehiclesContainer;
