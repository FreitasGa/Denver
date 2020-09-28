import React, { useState } from 'react';
import Header from '../../components/header';
import ClassCard from '../../components/classCard';
import ProgressRing from '../../components/progressRing';
import data from '../../videoData';
import user from '../../userData';
import './styles.css';

import perfilPreview2x from '../../assets/perfilPreview-2x.png'
import emailEditor from '../../assets/emailEditor.png'
import plusIcon from '../../assets/plusIcon.png'
import minusIcon from '../../assets/minusIcon.png'
import naIcon from '../../assets/naIcon.png'


function Perfil(){

    return(
        <div className='Perfil'>
            <Header/>
            <div className='PerfilBody'>
                <b className='PerfilTitle'>Perfil</b>
                <div className='PerfilOverlay'>
                    <div className='PartA'>
                        <button><img alt='perfil' src={perfilPreview2x} className='PerfilImage'></img></button>
                        <b className='UserName'>{user.name}</b>
                        <div>
                            <b className='UserEmail'>{user.mail}</b> <button><img alt='email-editor' src={emailEditor} className='emailEditor'></img></button>
                        </div>
                        <div className='Line'></div>
                        <b className='ProgressTitle'>PROGRESSO</b>
                        <ProgressRing  size={200} progress={70} strokeWidth={18} circleOneStroke='#B5B5B5' circleTwoStroke='#00A2D8' />
                        <b className='ProgressDescription'>Aulas Concluídas</b>
                    </div>
                    <div className='Line2'></div>
                    <div className='PartB'>
                        <b className='HistoricTitle'>HISTÓRICO DE AULAS</b>
                        <ul>
                            <ClassCard title='Aula 1' percentage='60' qualified='NÃO QUALIFICADO' />
                            {data.map(video => <ClassCard 
                                                key={video.id} 
                                                title={video.title} 
                                                percentage={video.percentage} 
                                                qualified={video.isQualified ? 'QUALIFICADO' : 'NÃO QUALIFICADO'} 
                                                quest1={video.Quest1} 
                                                quest2={video.Quest2} 
                                                quest3={video.Quest3} 
                                                quest4={video.Quest4} 
                                                quest5={video.Quest5}
                                                isSeen={video.isSeen} />)}
                            
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Perfil;