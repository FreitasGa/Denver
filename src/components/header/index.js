import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import PerfilModal from '../perfilModal'
import SuggestionsModal from '../suggestionsModal';
import './styles.css';

import logo from '../../assets/Logo.png';
import perfil from '../../assets/Perfil.png';


function Header() {

    const [IsPerfilVisible, setIsPerfilVisible] = useState(false);
    const [SuggestionsOn, setSuggestionsOn] = useState(false);
    
    return(
        <div className='Header'>
            <header className='navbar'>
                <Link to='/' className='logo'><img src={logo} alt='logo'></img></Link>
                <div className='second'>
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/aulas'>Aulas</Link></li>
                        <li><Link to='/perfil'>Perfil</Link></li>
                    </ul>
                    <input className='searchbox' onClick={() => setSuggestionsOn(!SuggestionsOn)} type='text' placeholder='Pesquise Aulas'></input>
                    <button className='perfil-image' onClick={() => setIsPerfilVisible(!IsPerfilVisible)} ><img src={perfil} alt='logo'></img></button>
                    {IsPerfilVisible ? <PerfilModal onClose={() => setIsPerfilVisible(false)} /> : null}
                    {SuggestionsOn ? <SuggestionsModal onClose={() => setSuggestionsOn(false)} /> : null}
                </div>
                
            </header>
        </div>
    )
}

export default Header;