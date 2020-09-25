import React from 'react';
import Header from '../../components/header';
import ClassCard from '../../components/classCard';
import ProgressRing from '../../components/progressRing';
import './styles.css';

import perfilPreview2x from '../../assets/perfilPreview-2x.png'
import emailEditor from '../../assets/emailEditor.png'
import plusIcon from '../../assets/plusIcon.png'
import minusIcon from '../../assets/minusIcon.png'



function Perfil(){
    return(
        <div className='Perfil'>
            <Header/>
            <div className='PerfilBody'>
                <b className='PerfilTitle'>Perfil</b>
                <div className='PerfilOverlay'>
                    <div className='PartA'>
                        <button><img src={perfilPreview2x} className='PerfilImage'></img></button>
                        <b className='UserName'>Usuário</b>
                        <div>
                            <b className='UserEmail'>usuário@email.com</b> <button><img src={emailEditor} className='emailEditor'></img></button>
                        </div>
                        <div className='Line'></div>
                        <b className='ProgressTitle'>PROGRESSO</b>
                        <ProgressRing/>
                    </div>
                    <div className='Line2'></div>
                    <div className='PartB'>
                        <b className='HistoricTitle'>HISTÓRICO DE AULAS</b>
                        <ul>
                            <ClassCard title='Aula 1' percentage='60' qualified='NÃO QUALIFICADO' />
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Perfil;