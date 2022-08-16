import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Display from './components/Display'
import Info from '../src/components/Infromação'

ReactDOM.render(
    <div>
        <h1>Calculadora IMC</h1>
        <div className='info'>
        <Display />
        <Info/>
        </div>
    </div>,
    document.getElementById('root')
)

