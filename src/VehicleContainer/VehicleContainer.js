import React, { Component } from 'react';
import './VehicleContainer.css';

class VehicleContainer extends Component {

  render() {
    return (
        <div className="vehicle-container">
            <img className="vehicle-thumbnail" src={this.props.vehicle.modelImages[0].imageUrl} alt="Vehicle thumbnail" />
            <div className="vehicle-header">{this.props.vehicle.label}</div>
            <div className="vehicle-msrp">{'Starting from $' + this.props.vehicle.startMsrp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        </div>
    );
  }
}

export default VehicleContainer;
