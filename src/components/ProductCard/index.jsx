import PropTypes from 'prop-types';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const title = product.title.slice(0, 20);
  const price = product.price.toLocaleString('es-MX');
  return (
    <div className="productCard__item">
      <img className="productCard__img" src={product.imageMain} alt="Product" />
      <div className="productCard__info">
        <h3 className="productCard__subtitle">{`${title}...`}</h3>
        <p className="productCard__price">
          <small>$</small>
          <span>{price}</span>
        </p>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageMain: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
