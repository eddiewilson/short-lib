/* eslint-disable */
import React, { Component } from 'react'
import { Link } from 'gatsby'

import Navigation from './navigation'
import Basket from './basket'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 16,
  ratios: [1333 / 1000],
  length: 8,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

const Header = data => (
  <header
    className="grid"
    style={{
      paddingTop: scale[5],
      paddingBottom: scale[5],
      paddingLeft: '8.541667%',
      paddingRight: '8.541667%',
    }}
  >
    <div className="col-4">
      <h1 style={{ margin: 0, fontSize: scale[4] }}>
        <Link
          to="/"
          style={{
            color: '#111111',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontFamily: 'bebas_neuebold, sans-serif',
          }}
        >
          ShortLibrary
        </Link>
      </h1>
    </div>
    <div className="col-3" data-push-left="off-4">
      <Navigation items={data} />
    </div>
    <Basket />
  </header>
)

export default Header
