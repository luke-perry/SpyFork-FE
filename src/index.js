import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

import App from './App'
import "./mainStyle.less"

const mountNode = document.getElementById('app')

ReactDOM.render(<App />, mountNode)
