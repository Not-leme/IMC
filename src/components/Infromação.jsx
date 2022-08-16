import React from 'react'
import './Informação.css'

export default props =>
    <div className='descricao'>
        <div>
            <b>Baixo peso:</b> <br/>menor que 18,5
        </div>
        <div>
            <b>Peso normal: </b><br/>entre 18,5 - 24
        </div>
        <div>
            <b>Excesso de peso:</b> <br/>entre 25 - 29
        </div>
        <div>
            <b>Obesidade:</b> <br/>entre 30 - 35
        </div>
        <div>
            <b>Super obesidade:</b> <br/>maior que 35
        </div>
    </div>