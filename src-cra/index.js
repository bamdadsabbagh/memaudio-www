import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import './styles/main.scss'

const Root = () => <App/>
const rootElement = document.getElementById ('root')

ReactDOM.render (<Root/>, rootElement)
