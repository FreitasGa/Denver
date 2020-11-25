import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import api from "../../services/api";

function Register() {
  const user = {
    name: '',
    age: '',
    email: '',
    password: '',
    birthdate: '',
  }

  const userName = {
    name: "",
    surname: "",
  }

  function dataHandler() {
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
    user.age = age;
    user.name = userName.name + " " + userName.surname;
  }

  function register() {
    if (user.birth){
      dataHandler();
    }

    console.log("> running")

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
                onChange={(e) => userName.name = e.target.value}
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
                onChange={(e) => userName.surname = e.target.value}
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
                onChange={(e) => user.mail = e.target.value}
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
                onChange={(e) => user.birth = e.target.value}
                required
              ></input>
            </div>
          </li>
          <li>
            <div>
              <b>Senha</b>
              <input
                type="password"
                onChange={(e) => user.pass = e.target.value}
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
