import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './styleForm.css'

class Entrar extends Component {
    constructor () {
        super()
        this.state = {
            email: '',
            senha: ''
        }
    }
    render () {
        return (
            <div>
                <h2>Login</h2>
                <br />

                <h4>E-mail: <input type = 'text' email = {this.state.email} onChange = {(e) => {
                    console.log(e)
                    this.setState ({email: e.target.email})}} /> 
                
                <tab/>Senha: <input type = 'text' senha = {this.state.senha} onChange = {(e) => {
                    this.setState ({senha: e.target.senha})}} /> 
                
                <button><a href = ''>Entrar</a></button>
                </h4>
                    <br />
                    
                <button>
                    <Link to = "/Cadastro"> Não possui conta? <br/>Cadastre-se</Link>
                </button> 
                <br/><br />

                <h2>Promoções da Semana</h2><br />

                <iframe src="http://www.printfood.com.br/arquivos/empresas/332017140045logo-portal%20do%20sul.png" height = '350' width = '350' name="iframe_a"></iframe>
                    <br />  <br />
                    <button><a href="http://www.mapadasfranquias.com.br/Arquivo/noticias/koni20180808.jpg" target="iframe_a" >SEG</a></button>
                    <button><a href="http://circuitochic.com.br/uploads/images5/colunacircuitochic18-10-16_anuncio_(1).png" target="iframe_a" >TER</a></button>
                    <button><a href="https://lh3.googleusercontent.com/bqQAsozFGVSM_3S80y3j0DblIwhyVeL99MgMR-eWOWvEGyFQwJTcvNoY6c5yI38LY0xFrK3kLeEcHSg=s350-e7" target="iframe_a" >QUA</a></button>
                    <button><a href="https://showcommerce-files.net.br/thumb.php?imagem=promocoes/2018121712313622228369_1745967595413946_8395104928229605962_n.jpg&w=350&h=350" target="iframe_a" >QUIN</a></button>

            </div>
        )
    }
    

}

export default Entrar;