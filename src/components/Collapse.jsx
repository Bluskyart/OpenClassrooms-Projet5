import {React, useRef, useState} from 'react';
import '../styles/collapse.scss';
import chevronUp from '../assets/chevron-up.svg';

function Collapse({title, content}) {
    const [contentVisible, setContentVisible] = useState(false);
    const contentRef = useRef(null);

    const affContent = () => { 
        setContentVisible(!contentVisible);
    };

    const chevronRotation = contentVisible ? "rotate" : "";
    const contentHeight = contentVisible ? contentRef.current.scrollHeight : 0;

    return (
        <div className='collapse'>
            <div className='collapse__header' onClick={affContent}>
                <span>{title}</span>
                <div className="chevronValue">
                    <img className={chevronRotation} src={chevronUp} alt="chevron"/>
                </div>
            </div>
            <div ref={contentRef} className="collapse__content" style={{ maxHeight: contentHeight, transition: 'max-height 0.5s ease' }}>
                {
                    typeof content === 'string' ? (
                        <p>{content}</p>
                    ) : Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Collapse;
