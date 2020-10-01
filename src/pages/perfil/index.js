import React, { useState } from 'react';
import Header from '../../components/header';
import ClassCard from '../../components/classCard';
import ProgressRing from '../../components/progressRing';
import EmailModal from '../../components/emailModal';

import data from '../../videoData';
import user from '../../userData';
import './styles.css';

import perfilPreview2x from '../../assets/perfilPreview-2x.png'
import emailEditor from '../../assets/emailEditor.png'
import plusIcon from '../../assets/plusIcon.png'
import minusIcon from '../../assets/minusIcon.png'
import naIcon from '../../assets/naIcon.png'


function Perfil(){

    const [imageHandlerOn, setImageHandlerOn] = useState(false)

    const ClassCards = data.filter(card => (
        card.isSeen
    ))

    const filteredClassCards = ClassCards.map(video => <ClassCard
        key={video.id} 
        title={video.title} 
        percentage={video.percentage} 
        qualified={video.isQualified ? 'QUALIFICADO' : 'NÃO QUALIFICADO'} 
        quest1={video.Quest1} 
        quest2={video.Quest2} 
        quest3={video.Quest3} 
        quest4={video.Quest4} 
        quest5={video.Quest5}
        isSeen={video.isSeen} 
    />)

    return(
        <div className='Perfil'>
            <Header/>
            <div className='PerfilBody'>
                <b className='PerfilTitle'>Perfil</b>
                <div className='PerfilOverlay'>
                    <div className='PartA'>
                        <button onClick={() => setImageHandlerOn(true)}><img alt='perfil' src={user.Image} className='PerfilImage'></img></button>
                        {imageHandlerOn ? <EmailModal id='overlay' onClose={() => setImageHandlerOn(false)} /> : null}
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
                           {filteredClassCards}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Perfil;