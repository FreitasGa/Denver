import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import logo from '../../assets/Logo.png';
import perfil from '../../assets/Perfil.png';

function Header() {
    return(
        <div className='Header'>
            <header className='navbar'>
                <Link to='/' className='logo'><img src={logo} alt='logo'></img></Link>
                <div className='second'>
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/'>Aulas</Link></li>
                        <li><Link to='/'>Perfil</Link></li>
                    </ul>
                    <input className='searchbox' type='text' placeholder='Pesquise Aulas'></input>
                    <button className='perfil-image'><img src={perfil} alt='logo'></img></button>
                </div>
                
            </header>
        </div>
    )
}

export default Header;