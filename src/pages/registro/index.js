import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import api from "../../services/api";

function Register() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    age: "",
    mail: "",
    birth: "",
    pass: "",
  });

  function birthHandler() {
    const current = new Date();

    const year = parseFloat(user.birth.slice(0, 4));
    const month = parseFloat(user.birth.slice(5, 7));
    const day = parseFloat(user.birth.slice(8, 10));
    const currentYear = current.getFullYear();
    const currentMonth = current.getMonth() + 1;
    const currentDay = current.getDate();

    let age = currentYear - year;
    if (currentMonth < month || currentDay < day) {
      age--;
    }
  }

  function register() {
    console.log("> running")
    if (user.birth){
      birthHandler();
    }
    
    api.post("/users", user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <div className="Register">
      <div className="registerForms">
        <b className="headerRegister">CADASTRO</b>
        <ul>
          <li>
            <div>
              <b>Nome</b>
              <input
                type="text"
                onChange={(e) => setUser({ name: e.target.value })}
                required
                placeholder="|"
              ></input>
            </div>
          </li>
          <li>
            <div>
              <b>Sobrenome</b>
              <input
                type="text"
                onChange={(e) => setUser({ surname: e.target.value })}
                required
                placeholder="|"
              ></input>
            </div>
          </li>
          <li>
            <div>
              <b>E-mail</b>
              <input
                type="email"
                onChange={(e) => setUser({ mail: e.target.value })}
                required
                placeholder="|"
              ></input>
            </div>
          </li>
          <li>
            <div>
              <b>Data de nascimento</b>
              <input
                type="date"
                onChange={(e) => setUser({ birth: e.target.value })}
                required
              ></input>
            </div>
          </li>
          <li>
            <div>
              <b>Senha</b>
              <input
                type="password"
                onChange={(e) => setUser({ pass: e.target.value })}
                required
                placeholder="|"
              ></input>
            </div>
          </li>
        </ul>
        <input
          className="registerForms_submit"
          type="submit"
          value="FINALIZAR"
          onClick={register}
        ></input>
        <Link to="/login" className="toLogin">
          Já possui uma conta? Entre!
        </Link>
      </div>
    </div>
  );
}

export default Register;
