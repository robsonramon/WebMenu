import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Entrar from './Componentes/Formulário/Inicial'
import Formulario from './Componentes/Formulário/Dados';
import Agradeciemnto from './Componentes/Formulário/agradecimento';
import Cardapio from './Componentes/Cardapio/Cardapio';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {Entrar} />
            <Route path = '/Cadastro' component = {Formulario} />
            <Route path = '/Agradecimento' component = {Agradeciemnto} />
            <Route path = '/Cardapio' component = {Cardapio} />

        </Switch>
    </BrowserRouter>
)

export default Routes; 