import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ProductThumb from '../components/productthumb'

// const taxonomy = this.props.data.allWordpressWpGenre.edges
const CataloguePage = data => (
  <Layout>
    <section
      className="grid"
      style={{
        paddingLeft: '8.541667%',
        paddingRight: '8.541667%',
      }}
    >
      {data.data.allWordpressWpBooks.edges.map((product, index) => {
        return (
          <ProductThumb
            key={index}
            product={product}
            taxonomy={data.data.allWordpressWpGenre.edges.node}
          />
        )
      })}
    </section>
  </Layout>
)

export default CataloguePage

export const Heroquery = graphql`
  query CatalogueQuery {
    allImageSharp {
      edges {
        node {
          resize(width: 150, height: 150, grayscale: true) {
            src
          }
          resolutions(width: 2880) {
            src
          }
        }
      }
    }
    allWordpressPage {
      edges {
        node {
          content
        }
      }
    }
    allWordpressWpBooks {
      edges {
        node {
          title
          wordpress_id
          content
          featured_media {
            id
            source_url
          }
          slug
          genre
        }
      }
    }
    allWordpressWpGenre {
      edges {
        node {
          name
          wordpress_id
        }
      }
    }
  }
`
