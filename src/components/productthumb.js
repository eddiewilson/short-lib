import React from 'react'
import Link from 'gatsby-link'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 16,
  ratios: [1333 / 1000],
  length: 8,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

class ProductThumb extends React.Component {
  render() {
    const Product = this.props.product // .responsiveResolution.src
    const Taxonomy = this.props.taxonomy
    return (
      <article className="col-2">
        <Link
          style={{
            color: 'inherit',
            textDecoration: 'none',
            display: 'flex',
            height: '100%',
          }}
          to={Product.slug}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'space-between',
              position: 'relative',
            }}
          >
            <img
              style={{
                marginBottom: scale[2],
              }}
              src={Product.node.featured_media.source_url}
            />
            <h4
              style={{
                fontFamily: 'Alegreya, serif',
                fontSize: scale[1],
                textAlign: 'center',
              }}
            >
              {Product.node.title}
            </h4>
            <h5
              style={{
                textTransform: 'uppercase',
                color: '#CFCFCF',
                fontFamily: 'bebasregular, sans-serif',
                fontSize: scale[0],
                fontStyle: 'normal',
                textAlign: 'center',
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                marginBottom: 0,
              }}
            >
              {Taxonomy}
            </h5>
          </div>
        </Link>
      </article>
    )
  }
}
//Product.node.genre
export default ProductThumb
