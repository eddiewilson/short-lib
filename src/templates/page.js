import React, { Component } from 'react'

import Layout from '../components/layout'

class PostTemplate extends Component {
  render() {
    // const post = this.props.data.wordpressPost

    return <Layout />
  }
}

// PostTemplate.propTypes = {
//   data: PropTypes.object.isRequired,
//   edges: PropTypes.array,
// }

export default PostTemplate

// export const pageQuery = graphql`
//   query($id: String!) {
//     wordpressPost(id: { eq: $id }) {
//       title
//       content
//       ...PostIcons
//       acf {
//         page_builder_post {
//           __typename
//           ... on WordPressAcf_post_photo {
//             photo {
//               localFile {
//                 childImageSharp {
//                   fluid(maxWidth: 680) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//           }
//           ... on WordPressAcf_image_gallery {
//             pictures {
//               picture {
//                 localFile {
//                   childImageSharp {
//                     fluid(maxWidth: 680) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         title
//         subtitle
//       }
//     }
//   }
// `
