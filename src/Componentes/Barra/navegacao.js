import React from 'react'
import './navegacao.css'

const Barra = () => (
    <div>
        <ul>
        <li><a class="active" href="/">Home</a></li>
        <li><a href="/Cardapio" >Cardápio</a></li>
        <li><a href="#contact">Contato</a></li>
        <li><a href="#about">Unidades</a></li>
        <li><a href="#about">Sobre</a></li>
        </ul>
    </div>
);

export default Barra;