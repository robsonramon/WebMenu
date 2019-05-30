import React from 'react'
import {Link} from 'react-router-dom'

const Cardapio = () => (
    <div>
    <iframe src="http://estudiolia.com.br/site/wp-content/uploads/2013/05/03.jpg" height = '700' width = '700'></iframe>
    <br />
    <button><Link to = "/"> Voltar</Link></button>
    </div>
)

export default Cardapio;