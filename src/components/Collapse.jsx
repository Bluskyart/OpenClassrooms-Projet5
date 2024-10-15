import {React, useState} from 'react';
import '../styles/collapse.scss';
import chevronDown from '../assets/chevron-down.svg';

function Collapse({title, content}) {
    const [contentVisible, setContentVisible] = useState(false)

    const affContent = () => { 
        setContentVisible(!contentVisible);
    };

    // Ajoute une classe pour la rotation basée sur l'état
    const chevronRotation = contentVisible ? "rotate" : "";

    return (
        <div className='collapse'>
            <div className='collapse__header' onClick={affContent}>
                <span>{title}</span>
                <div className="chevronValue">
                    <img className={chevronRotation} src={chevronDown} alt="chevron"/>
                </div>
            </div>
            <div className={contentVisible ? "visible collapse" : "hidden collapse"}>
                <ul>{content}</ul>
            </div>
        </div>
    )
}

export default Collapse;
