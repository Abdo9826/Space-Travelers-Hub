import React from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { rocket } = props;
  const { rocketName, description, image } = rocket;
  return (
    <li className="w-100 my-2 d-flex rocket">
      <img src={image} alt={rocketName} width={250} height="100%" />
      <div className="ms-3">
        <h4 className="mx-0 my-1">{rocketName}</h4>
        <p className="a">{description}</p>
        <button type="button" className="btn btn-primary">Reserve Rocket</button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
};

export default Rocket;
