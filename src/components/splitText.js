import React from 'react'
import Link from 'gatsby-link'
import Hamock from '../components/hamock.jpg'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 16,
  ratios: [1333 / 1000],
  length: 8,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

class SplitText extends React.Component {
  render() {
    const Text = this.props.text.data.allWordpressPage.edges[0].node.content

    return (
      <div
        className="col-12 dropcap"
        style={{
          paddingLeft: '8.541667%',
          paddingRight: '8.541667%',

          columnCount: '2',
          columnGap: '2.222222%',
        }}
        dangerouslySetInnerHTML={{ __html: Text }}
      />
    )
  }
}

export default SplitText
