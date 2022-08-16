import React from 'react'
import './Input.css'

export default props =>
    <div className='entradas'>
        <input type='number' placeholder={props.placeholder} onChange={props.onChange}></input>
    </div>