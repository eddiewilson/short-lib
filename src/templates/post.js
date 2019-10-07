import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SingleProduct from '../components/singleProduct'

class PostTemplate extends Component {
  render() {
    // const post = this.props.data.wordpressPost

    return (
      <Layout>
        <section
          className="grid"
          style={{
            paddingLeft: '8.541667%',
            paddingRight: '8.541667%',
          }}
        >
          <SingleProduct product={this.props} addBook={this.props.addBook} />
        </section>
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpBooks(id: { eq: $id }) {
      title
      wordpress_id
      content
      featured_media {
        id
        source_url
      }
      Era
      genre
      acf {
        price
      }
    }
  }
`
