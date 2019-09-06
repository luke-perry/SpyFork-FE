import React from "react"
import ReactDOM from "react-dom"
import 'normalize.css'

import "./styles.less"

class App extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

var mountNode = document.getElementById("app")
ReactDOM.render(<App name="Jane" />, mountNode)
