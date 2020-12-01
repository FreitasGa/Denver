import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PerfilModal from "../perfilModal";
import SuggestionsModal from "../suggestionsModal";
import SideBar from "../sideBar"
import user from "../../userData";
import "./styles.css";

import logo from "../../assets/Logo.png";
import perfil from "../../assets/Perfil.png";
import perfilPreview from "../../assets/perfilPreview.png";
import api from "../../services/api";
import cors from "cors"

function Header() {
  const [IsPerfilVisible, setIsPerfilVisible] = useState(false);
  const [SuggestionsOn, setSuggestionsOn] = useState(false);
  const [SearchField, setSearchField] = useState("");
  const [SideBarOn, setSideBarOn] = useState(false);

  const [username, setUsername] = useState("Usuário");

  function getUserData(){
    let token;
    const userToken = localStorage.getItem("token");

    api.post("/sessions", {email: "pass@ex.com", password: "123123"}, cors()).then((res) => {
      console.log(res);
      console.log(res.data);
      token = res.data.token;

      api.get("/auth", {headers: {authorization: `bearer ${token}`}}).then((res) => {
        console.log(res);
        console.log(res.data);
        
        api.get("/users/currentuser", {headers: {authorization: `bearer ${userToken}`}}).then((res) => {
          console.log(res);
          console.log(res.data);
          setUsername(res.data.name)
        })
      });
    })
  }

  window.addEventListener("load", getUserData())

  return (
    <div className="Header">
      <header className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="logo"></img>
        </Link>
        <div className="second">
          <div className="container" onClick={() => setSideBarOn(!SideBarOn)} id="container">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          {SideBarOn ? (<SideBar onClose={() => setSideBarOn(false)} />) : null}
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/aulas">Aulas</Link>
            </li>
            <li>
              <Link to="/perfil">Perfil</Link>
            </li>
          </ul>
          <input
            className="searchbox"
            onInput={() => setSuggestionsOn(true)}
            onChange={(e) => setSearchField(e.target.value)}
            type="text"
            placeholder="Pesquise Aulas"
          ></input>
          <div
            className="perfil-imageCropper"
            onClick={() => setIsPerfilVisible(!IsPerfilVisible)}
          >
            <img src={user.Image} className="perfil-image" alt="logo"></img>
          </div>
          {IsPerfilVisible ? (
            <PerfilModal
              username={username}
              profile={user.Image}
              onClose={() => setIsPerfilVisible(false)}
            />
          ) : null}
          {SuggestionsOn ? (
            <SuggestionsModal
              search={SearchField}
              onClose={() => setSuggestionsOn(false)}
            />
          ) : null}
        </div>
      </header>
    </div>
  );
}

export default Header;
