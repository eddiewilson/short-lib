import React from 'react'
import { Link } from 'gatsby'

import styles from './styles/navigation.scss'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 16,
  ratios: [1333 / 1000],
  length: 8,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

class Navigation extends React.Component {
  render() {
    // const numbers = props.numbers
    const posts = ['Catalogue', 'Authors', 'Genres'] // this.props.data.markdownRemark

    const genreItems = this.props.items.siteTitle.allWordpressWpGenre.edges

    const listItems = posts.map(post => {
      if (post === 'Genres') {
        return (
          <li
            className="col has-children"
            style={{
              listStyle: 'none',
              fontFamily: 'Alegreya',
              fontSize: scale[0],
              fontWeight: '500',
            }}
            key={post.toString()}
          >
            <Link
              to={post.toLowerCase()}
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              {post}
              <ul className="sub-menu">
                {genreItems.map(genreItem => (
                  <li style={styles}>
                    <Link
                      to={'genre/' + genreItem.node.name.toLowerCase()}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      {genreItem.node.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Link>
          </li>
        )
      }
      return (
        <li
          className="col"
          style={{
            listStyle: 'none',
            fontFamily: 'Alegreya',
            fontSize: scale[0],
            fontWeight: '500',
          }}
          key={post.toString()}
        >
          <Link
            to={post.toLowerCase()}
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            {post}
          </Link>
        </li>
      )
    })
    return (
      <nav className="grid nav">
        <ul className="grid-spaceBetween grid-noBottom">{listItems}</ul>
      </nav>
    )
  }
}

export default Navigation
