import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import cors from "cors";
import api from "../../services/api";
import "./styles.css";

import logoAzul from "../../assets/LogoAzul.png";

function Login() {
  const [state, setState] = useState(false)

  const user = {
    email: "",
    password: "",
  };

  function logar() {
    let token;
    let sessionsMail;

    api.post("/sessions", user, cors()).then((res) => {
      token = res.data.token;
      localStorage.setItem("userToken", token);
  
      api.get("/auth", {headers: {authorization: `bearer ${token}`}}).then((res) => {
        console.log(res.data);
        if(res.data === "Authenticated."){
          setState(true);
        }
      });
    });
  }

  return (
    <div className="Login">
      <div className="loginForms">
        <img alt="logo" src={logoAzul}></img>
        <ul>
          <li>
            <div>
              <input
                type="email"
                onChange={(e) => (user.email = e.target.value)}
                placeholder="E-MAIL"
                required
              ></input>
            </div>
          </li>
          <li>
            <div>
              <input
                type="password"
                onChange={(e) => (user.password = e.target.value)}
                placeholder="SENHA"
                required
              ></input>
            </div>
          </li>
        </ul>
        <input
          className="loginForms_submit"
          type="submit"
          value="FINALIZAR"
          onClick={logar}
        ></input>
        <Link to="/register" className="toRegister">
          Não tem uma conta? Cadastre-se!
        </Link>
        <Link className="toRegister">Esqueceu sua senha?</Link>
        {state ? <Redirect to="/" email={user.email} /> : <Redirect to="/login"/>}
      </div>
    </div>
  );
}

export default Login;
