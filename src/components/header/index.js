import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PerfilModal from "../headerPerfil";
import SuggestionsModal from "../seachbarSuggestions";
import SideBar from "../sideBar"
import user from "../../userData";
import "./styles.css";
import onClickOutside from 'react-onclickoutside';

import logo from "../../assets/Logo.png";
import perfil from "../../assets/Perfil.png";
import perfilPreview from "../../assets/perfilPreview.png";
import api from "../../services/api";
import cors from "cors"
import { useEffect } from "react";

function Header() {
  const [IsPerfilVisible, setIsPerfilVisible] = useState(false);
  const [ClickPic, setClickPic] = useState(true);
  const [SuggestionsOn, setSuggestionsOn] = useState(false);
  const [SearchField, setSearchField] = useState("");
  const [SideBarOn, setSideBarOn] = useState(false);

  const userName = localStorage.getItem("username");
  
  useEffect(() => { 
    console.log(IsPerfilVisible) }
  , [IsPerfilVisible]);

  const clickOutside = () =>{
    if(!ClickPic){
      setIsPerfilVisible(false);
    }
  };

  const Perfil = onClickOutside(PerfilModal, clickOutside);

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
            onClick={() => {
              setIsPerfilVisible(!IsPerfilVisible); 
              setClickPic(true);
            }}
          >
            <img src={user.Image} className="perfil-image" alt="logo"></img>
          </div>
          {IsPerfilVisible ? (
            <Perfil
              username={userName}
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
