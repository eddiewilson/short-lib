import React from 'react'
// import { Link } from 'gatsby'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 16,
  ratios: [1333 / 1000],
  length: 8,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

class HeroImage extends React.Component {
  render() {
    const Image = this.props.imageFile.data.allImageSharp.edges[2].node
      .resolutions.src

    return (
      <div
        style={{
          backgroundImage: `url(${Image})`,
          // backgroundImage: `url(${Hamock})`,
          backgroundSize: 'cover',
          width: '100%',
          height: '89vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <h1
            style={{
              fontFamily: 'bebas_neuebold, sans-serif',
              fontSize: scale[5],
              textTransform: 'uppercase',
              color: 'white',
              textShadow: '0px, 0px, 0px, 4px rgba(0, 0, 0, 0.25)',
              marginBottom: scale[5],
            }}
          >
            Great literature, just shorter
          </h1>
          <button
            style={{
              paddingLeft: scale[1],
              paddingRight: scale[1],
              paddingTop: scale[0],
              paddingBottom: scale[0],
              textTransform: 'uppercase',
              letterSpacing: '1px',
              backgroundColor: '#FFB628',
              outline: 'none',
              border: 'none',
              fontFamily: 'bebas_neuebold, sans-serif',
              fontSize: scale[1],
              color: 'white',
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
    )
  }
}

export default HeroImage
