import React from 'react'
import Link from 'gatsby-link'

import BasketSvg from '../components/basket.svg'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 2.852,
  ratios: [1333 / 1000],
  length: 20,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

class Basket extends React.Component {
  render() {
    // const numbers = props.numbers
    const basketItems = ['Book A', 'Book B', 'Book C'] // this.props.data.markdownRemark
    const listItems = basketItems.map(baskteitem => (
      <li
        className=""
        style={{
          listStyle: 'none',
          fontFamily: 'Alegreya',
          fontSize: scale[0],
          fontWeight: '500',
          display: 'none',
        }}
        key={baskteitem.toString()}
      >
        {baskteitem}
      </li>
    ))
    const basketCount = (
      <div
        className=""
        style={{
          width: scale[8],
          height: scale[8],
          backgroundColor: 'orange',
          borderRadius: '1000px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0',
          alignSelf: 'flex-start',
        }}
      >
        <span
          style={{
            marginBottom: scale[0],
            color: 'white',
            fontFamily: 'bebasregular, sans-serif',
            fontSize: scale[6],
          }}
        >
          {basketItems.length}
        </span>
      </div>
    )
    return (
      <div
        className="basketGroup col"
        style={{
          marginTop: -scale[6],
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <img
            style={{
              marginBottom: 0,
              marginTop: scale[7],
            }}
            src={BasketSvg}
            alt="basket icon"
          />
          {basketCount}
        </div>
        <ul className="grid-spaceBetween">{listItems}</ul>
      </div>
    )
  }
}

export default Basket
