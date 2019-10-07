import React from 'react'
import { Link } from 'gatsby'

import BasketSvg from '../components/basket.svg'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 2.852,
  ratios: [1333 / 1000],
  length: 20,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

class Basket extends React.Component {
  constructor(props) {
    super(props)
    this.state = ['1', '2', '3']
  }
  addBook() {
    console.log('Adding a book')
  }

  render() {
    // const numbers = props.numbers

    const listItems = this.state.map(basketitem => (
      <li
        className=""
        style={{
          listStyle: 'none',
          fontFamily: 'Alegreya',
          fontSize: scale[0],
          fontWeight: '500',
          display: 'none',
        }}
        key={basketitem.toString()}
      >
        {basketitem}
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
            marginBottom: '0px',
            color: 'white',
            fontFamily: 'bebas_neuebold, sans-serif',
            fontSize: scale[6],
          }}
        >
          {this.state.length}
        </span>
      </div>
    )
    return (
      <Link
        style={{
          color: 'inherit',
          textDecoration: 'none',
          display: 'flex',
          height: '100%',
        }}
        to={'/checkout'}
      >
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
      </Link>
    )
  }
}

export default Basket
