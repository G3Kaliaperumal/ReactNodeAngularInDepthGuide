import React from 'react';

import RentalCard from '../components/rental/RentalCard';
import { connect } from 'react-redux';
import { fetchRentals, createRental } from '../actions/rentals';

class RentalHome extends React.Component {

  state = {
    rentals: []
  }

  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  createRental = () => {
    const uid = Math.random().toString(32).slice(2);
    const newRental = {
      _id: uid,
      title: "Nice view on ocean",
      city: "San Francisco",
      category: "condo",
      image: "http://via.placeholder.com/350x250",
      numOfRooms: 4,
      shared: true,
      description: "Very nice apartment in center of the city.",
      dailyPrice: 43
    }
    this.props.dispatch(createRental(newRental));
  }

  renderRentals = (rentals) =>
    rentals.map(rental =>
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental} />
      </div>
    );

  render() {
    const { rentals } = this.props;

    return (
      <div className="card-list">
        <h1 className="page-title">Your Home All Around the World</h1>
        <div className="row">
          {this.renderRentals(rentals)}
        </div>
        <button
          onClick={this.createRental}
          className="btn btn-success">Create Rental</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(RentalHome);
