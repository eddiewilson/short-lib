import React from 'react'
import { Link } from 'gatsby'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 16,
  ratios: [1333 / 1000],
  length: 8,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

class SingleProduct extends React.Component {
  // bookTitle: this.props.product.data.wordpressWpBooks.title,
  // bookPrice: this.props.product.data.wordpressWpBooks.acf.price

  idRef = React.createRef()

  addToBasket = event => {
    event.preventDefault()

    const basket = {
      id: this.idRef.current.value,
    }
    console.log(basket)
  }
  render() {
    const Product = this.props.product.data.wordpressWpBooks

    return (
      <article className="grid">
        <div className="col-5">
          <img src={Product.featured_media.source_url} alt="book cover" />
        </div>
        <div className="col-6" data-push-left="off-1">
          <h1
            style={{
              textTransform: 'uppercase',
              color: '#111',
              fontSize: scale[5],
              lineHeight: '1.33',
              fontFamily: 'bebas_neuebold, sans-serif',
              marginBottom: scale[2],
            }}
          >
            {Product.title}
          </h1>
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: Product.content }}
          />
          <div className="grid-middle">
            <div className="col-6">
              <form className="addToBasket" onSubmit={this.addToBasket}>
                <input
                  name="id"
                  type="text"
                  ref={this.idRef}
                  value={Product.wordpress_id}
                  hidden
                />
                <button className="button" type="submit">
                  {'Buy £' + Product.acf.price}
                </button>
              </form>
            </div>
            <div className="col-6 align-items-center">
              <a
                style={{
                  fontFamily: 'Alegreya serif',
                  color: 'inherit',
                  textDecoration: 'none',
                  fontWeight: '500',
                }}
                href="/"
              >
                + More Details
              </a>
            </div>
          </div>
        </div>
        <Link to="/catalogue">All Products</Link>
      </article>
    )
  }
}

export default SingleProduct

//     <blockquote
//       style={{
//         fontWeight: '700',
//         fontSize: scale[2],
//         fontFamily: 'Alegreya',
//         paddingTop: scale[4],
//       }}
//       dangerouslySetInnerHTML={{ __html: Blockquote }}
//     />
//     <cite>
//       <p
//         style={{
//           color: '#CFCFCF',
//           fontFamily: 'bebas_neuebold, sans-serif',
//           fontSize: scale[0],
//           fontStyle: 'normal',
//           marginLeft: scale[5],
//           paddingBottom: scale[4],
//         }}
//         dangerouslySetInnerHTML={{ __html: Cite }}
//       />
//     </cite>
