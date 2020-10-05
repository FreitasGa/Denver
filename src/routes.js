import React from 'react';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';

import MainPage from './pages/pagina-inicial';
import Register from './pages/registro';
import Login from './pages/login';
import Perfil from './pages/perfil';
import Aulas from './pages/aulas';
import Video from './pages/video';
import LandingPage from './pages/landing-page';
import Questionario from './pages/questionario'


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                <Route path='/perfil' component={Perfil}/>
                <Route path='/aulas' component={Aulas} />
                <Route path='/video' component={Video}/>
                <Route path='/landing' component={LandingPage}/>
                <Route path='/questionario' component={Questionario}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;