import React from 'react'
import Link from 'gatsby-link'

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
    const listItems = posts.map(post => (
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
        {post}
      </li>
    ))
    return (
      <nav>
        <ul className="grid-spaceBetween">{listItems}</ul>
      </nav>
    )
  }
}

export default Navigation
