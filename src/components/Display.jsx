import React, { Component } from 'react'
import './Display.css'
import Tela from './Tela'
import Entrada from './Input'

const initialState = {
    displayValue: '0',
    values: [0,0],
    current: 0
}

export default class Display extends Component{

    state = {...initialState}

    setConta(e, a){
        if(a == 1){
            console.log(e)
            this.state.current = 0
            const i = this.state.current
            const values = {...this.state.values}
            values[i] = e
            this.setState({ values })
            const num1 = values[i]
            this.num1 = num1/100
        }else if(a == 2){
            this.state.current = 1
            const i = this.state.current
            const values = {...this.state.values}
            values[i] = e
            this.setState({ values })
            const num2 = values[i]
            this.num2 = num2
        }
        this.setResult(this.num1, this.num2)
    }

    setResult(a, b){
        const c = (b/(a*a))
        this.setState({displayValue: c.toFixed(2)})
        
    }

    render(){
        return(
        <div className='display'>
            <Tela value={this.state.displayValue}></Tela>
            <div className='Numeros'>
                <Entrada placeholder='Altura [cm]...' onChange={e => this.setConta(e.target.value, 1)}></Entrada>
                <Entrada placeholder='Peso [kg]...' onChange={e => this.setConta(e.target.value, 2)}></Entrada>
            </div>
        </div>
        )
    }
}

