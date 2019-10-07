import React from 'react'

class SplitText extends React.Component {
  render() {
    const Text = this.props.text.data.allWordpressPage.edges[0].node.content

    return (
      <div
        className="col-12 dropcap"
        style={{
          columnCount: '2',
          columnGap: '2.222222%',
        }}
        dangerouslySetInnerHTML={{ __html: Text }}
      />
    )
  }
}

export default SplitText
