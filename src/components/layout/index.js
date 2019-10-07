import React from 'react'

import Helmet from 'react-helmet'
import { StaticQuery } from 'gatsby'
import { graphql } from 'gatsby'

import Header from '../header'
import Footer from '../footer'
import gridlex from './grid/gridlex.scss'
import styles from './styles/style.scss'

import './fonts/bebas/stylesheet.css'
import './index.css'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
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
        allWordpressWpBooks {
          edges {
            node {
              genre
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          style={[gridlex, styles]}
        />
        <Header siteTitle={data} />
        <div>{children}</div>
        <Footer />
      </>
    )}
  />
)

// export const NavQuery = graphql``
