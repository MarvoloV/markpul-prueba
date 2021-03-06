import React from 'react';
import Proptypes from 'prop-types';
import './ProductItem.scss';

const MarketItem = ({ title, image, place }) => (
  <div className="card">
    <img src={image} alt="" />
    <div className="card-body">
      <h1>{title}</h1>
      <p>
        {'Direccion: '}
        {place}
      </p>
    </div>
  </div>
);
export default MarketItem;
MarketItem.propTypes = {
  title: Proptypes.string.isRequired,
  place: Proptypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  image: Proptypes.string.isRequired,
};
