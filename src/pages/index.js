import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import HeroImage from '../components/heroimage'
import SplitText from '../components/splitText'
import Blockquote from '../components/blockquote'
import ProductThumb from '../components/productthumb'

// const taxonomy = this.props.data.allWordpressWpGenre.edges
const IndexPage = data => (
  <Layout>
    <section style={{ width: '100vw', minHeight: '100vh' }}>
      <HeroImage imageFile={data} />
    </section>
    <section className="grid">
      <SplitText
        text={data}
        style={{
          paddingLeft: '8.541667%',
          paddingRight: '8.541667%',
        }}
      />
    </section>

    <section className="grid">
      <div className="col-5" data-push-left="off-4">
        <Blockquote
          blockquote={data}
          cite={data}
          style={{
            paddingLeft: '8.541667%',
            paddingRight: '8.541667%',
          }}
        />
      </div>
    </section>
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

export default IndexPage

export const Heroquery = graphql`
  query ImageQuery {
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
