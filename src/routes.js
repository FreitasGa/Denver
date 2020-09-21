import React from 'react';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';

import MainPage from './pages/pagina-inicial';
import Register from './pages/registro';
import Login from './pages/login';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;