import React from 'react'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 16,
  ratios: [1333 / 1000],
  length: 8,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

class Blockquote extends React.Component {
  render() {
    const Blockquote =
      '<p>Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.</p>' // this.props.blockquote.data.allWordpressPage.edges[0].node.content

    const Cite = 'Subtitle Secondary - Edward Wilson' //this.props.cite.data.allWordpressPage.edges[0].node.content

    return (
      <div>
        <blockquote
          style={{
            fontWeight: '700',
            fontSize: scale[2],
            fontFamily: 'Alegreya',
            paddingTop: scale[4],
          }}
          dangerouslySetInnerHTML={{ __html: Blockquote }}
        />
        <cite>
          <p
            style={{
              color: '#CFCFCF',
              fontFamily: 'bebasregular, sans-serif',
              fontSize: scale[0],
              fontStyle: 'normal',
              marginLeft: scale[5],
              paddingBottom: scale[4],
            }}
            dangerouslySetInnerHTML={{ __html: Cite }}
          />
        </cite>
      </div>
    )
  }
}

export default Blockquote
