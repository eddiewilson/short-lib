/* eslint-disable */
import React, { Component } from 'react'
//import PropTypes from 'prop-types'

const BasketItem = ({ image, price, quantity, title }) => (
  <li
    className="grid"
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div className="col-1">&times;</div>
    <div className="col-3">
      <div className="basket-image">
        <img src={image} alt="book cover" />
      </div>
    </div>
    <div className="basket-title col-6">{title}</div>
    <div className="basket-price col-2">&pound;{price}</div>
  </li>
)

// Product.propTypes = {
//   price: PropTypes.number,
//   quantity: PropTypes.number,
//   title: PropTypes.string,
// }

export default BasketItem
