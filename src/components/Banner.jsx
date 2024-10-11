import Image_source_1 from '../assets/Image_source_1.svg';
import Image_source_2 from '../assets/Image_source_2.svg';
import Banner_shadow from '../assets/Banner_shadow.svg';
import React from "react";
import { useLocation } from "react-router-dom";
import '../styles/banner.scss';

function Banner() {
    const location = useLocation();
    if (location.pathname === "/")
        return (
            <div className='banner'>
                <img id='Banner_home' src={Image_source_1} alt='banner_Home' loading="eager"/>
                <img id='Banner_shadow' src={Banner_shadow} alt='Banner_shadow'/>
                <p>Chez vous, partout et ailleurs</p>
            </div>
        )
    else if (location.pathname === "/about") {
        return (
            <div className='banner'>
                <img src={Image_source_2} alt='banner_About' loading="eager"/>
            </div>
        )
    }
}

export default Banner