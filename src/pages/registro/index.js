import React, { useState } from "react";
import cors from "cors"
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

    const year = parseFloat(user.birthdate.slice(0, 4));
    const month = parseFloat(user.birthdate.slice(5, 7));
    const day = parseFloat(user.birthdate.slice(8, 10));

    const date = new Date(year, month, day);
    user.birthdate = date;

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
    if (user.birthdate){
      dataHandler();
    }

    console.log("> running")
    console.log(user)

    api.post("/users", user, cors())
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
                onChange={(e) => user.email = e.target.value}
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
                onChange={(e) => user.birthdate = e.target.value}
                required
              ></input>
            </div>
          </li>
          <li>
            <div>
              <b>Senha</b>
              <input
                type="password"
                onChange={(e) => user.password = e.target.value}
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
