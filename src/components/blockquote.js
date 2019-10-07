import React from 'react'

class Blockquote extends React.Component {
  render() {
    const Blockquote =
      '<p>Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.</p>' // this.props.blockquote.data.allWordpressPage.edges[0].node.content

    const Cite = 'Subtitle Secondary - Edward Wilson' //this.props.cite.data.allWordpressPage.edges[0].node.content

    return (
      <div>
        <blockquote dangerouslySetInnerHTML={{ __html: Blockquote }} />
        <cite>
          <p dangerouslySetInnerHTML={{ __html: Cite }} />
        </cite>
      </div>
    )
  }
}

export default Blockquote
