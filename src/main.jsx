import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Background} from "./styles/Background"

ReactDOM.render(
  <React.StrictMode>
    <App />
   <Background />

  </React.StrictMode>,
  document.getElementById('root')
)
