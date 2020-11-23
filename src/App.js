import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/pagina-inicial";
import Routes from "./routes";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
