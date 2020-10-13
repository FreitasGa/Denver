import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import PerfilModal from '../perfilModal'
import SuggestionsModal from '../suggestionsModal';
import user from '../../userData';
import './styles.css';

import logo from '../../assets/Logo.png';
import perfil from '../../assets/Perfil.png';
import perfilPreview from '../../assets/perfilPreview.png'


function Header() {

    const [IsPerfilVisible, setIsPerfilVisible] = useState(false);
    const [SuggestionsOn, setSuggestionsOn] = useState(false);
    const [SearchField, setSearchField] = useState('');
    
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
                    <input className='searchbox' onInput={() => setSuggestionsOn(true)} onChange={(e) => setSearchField(e.target.value)} type='text' placeholder='Pesquise Aulas'></input>
                    <div className='perfil-imageCropper' onClick={() => setIsPerfilVisible(!IsPerfilVisible)} ><img src={user.Image} className='perfil-image' alt='logo'></img></div>
                    {IsPerfilVisible ? <PerfilModal username={user.name} profile={user.Image} onClose={() => setIsPerfilVisible(false)} /> : null}
                    {SuggestionsOn ? <SuggestionsModal search={SearchField} onClose={() => setSuggestionsOn(false)} /> : null}
                </div>
                
            </header>
        </div>
    )
}

export default Header;