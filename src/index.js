import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import './styles/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import routes from './route'

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
)