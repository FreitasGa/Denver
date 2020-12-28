import React from "react";
import { BrowserRouter, Switch, Router, Route, Redirect } from "react-router-dom";

import MainPage from "./pages/pagina-inicial";
import Register from "./pages/registro";
import Login from "./pages/login";
import Perfil from "./pages/perfil";
import Aulas from "./pages/aulas";
import Video from "./pages/video";
import LandingPage from "./pages/landing-page";
import Questionario from "./pages/questionario";

const userToken = localStorage.getItem("userToken");

function PrivateRoute({ component: Component, ...rest }){
  return(
    <Route {...rest} render={(props) => {
      return userToken ? <Component {...props}/> : <Redirect to="/login"/>
    }} />
  )
}

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={MainPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/perfil" component={Perfil} />
        <PrivateRoute path="/aulas" component={Aulas} />
        <PrivateRoute path="/video" component={Video} />
        <Route path="/landing" component={LandingPage} />
        <PrivateRoute path="/questionario" component={Questionario} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
