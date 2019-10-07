/* eslint-disable */

import React, { Component } from 'react'
// import { Link } from 'gatsby'
import BasketItem from './basketItem'

import styles from './styles/basketview.scss'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 16,
  ratios: [1333 / 1000],
  length: 8,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

class BasketView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { basket }
  }
  render() {
    return (
      <div
        className="grid-center basket-view"
        style={{
          height: '100vh',
          paddingTop: scale[5],
          paddingBottom: scale[5],
          paddingLeft: '8.541667%',
          paddingRight: '8.541667%',
        }}
      >
        <div
          className="table"
          style={{
            width: '100%',
          }}
        >
          <header className="grid">
            <div className="col-3" data-push-left="off-1">
              Cover
            </div>
            <div className="col-6">Title</div>
            <div className="col-2">Price</div>
          </header>
          <main>
            <ul>
              {basket.map(product => (
                <BasketItem
                  title={product.title}
                  price={product.price}
                  key={product.id}
                  image={product.cover}
                />
              ))}
            </ul>
          </main>
        </div>
      </div>
    )
  }
}

const basket = [
  {
    cover: 'https://picsum.photos/200/300',
    title: 'Some Title',
    price: '1',
  },
  {
    cover: 'https://picsum.photos/200/300',
    title: 'Some Dif Title',
    price: '1',
  },
  {
    cover: 'https://picsum.photos/200/300',
    title: 'Some Anothre Title',
    price: '1',
  },
  {
    cover: 'https://picsum.photos/200/300',
    title: 'Something Title',
    price: '1',
  },
]

export default BasketView
