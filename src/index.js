import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Componentes/Header/Cabeca'
import Barra from './Componentes/Barra/navegacao'
import Routes from './rotas'
import './styleGeral.css'

class App extends Component {
    render () {
        return (
            <div className = "App">
                <Header /> <br />
                <Barra />
                <Routes />
                <br/><br />

            </div> 
        )
    }
}
    







ReactDOM.render(<App />, document.getElementById('root'));