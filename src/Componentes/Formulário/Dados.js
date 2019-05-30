import React, {Component} from 'react' 
import {Link} from 'react-router-dom'

class Formulario extends Component {
    constructor () {
        super () 
        this.state = {
            nome: '',
            email: '',
            cpf: '',
            senha: '',
            confirmarsenha: '',
            checked: true,
            checked1: false,
            checked2: false,
            checked3: false
        }
    }
    render () {
        return (
            <div>
                <form>
                    <h4> 
                    Pessoa Física <input type = 'checkbox' checked = {this.state.checked} 
                    onChange = {(e) => this.setState ({checked: e.target.checked})} />

                    Pessoa Juridica <input type = 'checkbox'  checked1 = {this.state.checked1} 
                    onChange = {(e) => this.setState ({checked1: e.target.checked1})}/>
                    </h4>
                    <br />

                    <h4> 
                    Masculino <input type = 'checkbox' checked2 = {this.state.checked2} 
                    onChange = {(e) => this.setState ({checked2: e.target.checked2})} />

                    Feminino <input type = 'checkbox'  checked3 = {this.state.checked3} 
                    onChange = {(e) => this.setState ({checked3: e.target.checked3})}/>
                    </h4>
                    <br />

                    <h4>Nome: <input type = 'text' nome = {this.state.nome} onChange = {(e) => {
                        this.setState ({nome: e.target.nome})}} /> </h4>
                    <br />

                    <h4>E-mail: <input type = 'text' email = {this.state.email} onChange = {(e) => {
                        this.setState ({email: e.target.email})}} /> </h4>
                        <br />

                    <h4>CPF: <input type = 'text' cpf = {this.state.cpf} onChange = {(e) => {
                        this.setState ({cpf: e.target.cpf})}} /> </h4>
                        <br />

                    <h4>Senha: <input type = 'text' senha = {this.state.senha} onChange = {(e) => {
                        this.setState ({senha: e.target.senha})}} /> </h4>
                        <br />

                    <h4>Confirmar Senha: <input type = 'text' confirmarsenha = {this.state.confirmarsenha} onChange = {(e) => {
                        this.setState ({confirmarsenha: e.target.confirmarsenha})}} /> </h4>
                        <br />

                    <button><Link to = "/"> Voltar</Link></button>
                    <button><Link to = "/Agradecimento"> Criar Conta</Link></button>
                    <br /><br /><br /><br /><br /><br /><br />
                    

                </form>   
            </div>
        )
    }
}

export default Formulario;