import React from 'react'
import ReactDom from 'react-dom'

const Main = React.createClass({
  render: function() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
})

ReactDom.render(<Main/>, document.getElementById('app'))
