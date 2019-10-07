import React from 'react'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 16,
  ratios: [1333 / 1000],
  length: 8,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

class Footer extends React.Component {
  render() {
    return (
      <footer
        className="grid-center"
        style={{
          width: '100vw',
          paddingTop: scale[5],
          paddingBottom: scale[5],
          paddingLeft: '8.541667%',
          paddingRight: '8.541667%',
        }}
      >
        <p>– SL –</p>
      </footer>
    )
  }
}

export default Footer
