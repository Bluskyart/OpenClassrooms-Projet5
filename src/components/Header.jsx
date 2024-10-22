import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import Kasa_logo_red_big from '../assets/Kasa_logo_red_big.svg';
import '../styles/header.scss';

function Header() {
    const location = useLocation();
    if (location.pathname === "/") {
        return (
            <header className='header'>
                <img className='logo_header' src={Kasa_logo_red_big} alt='Logo Kasa'/>
                <nav className='nav'>
                    <Link to="/"><u>Accueil</u></Link>
                    <Link to="/about">A Propos</Link>
                </nav>
            </header>
        )
    }
    else if (location.pathname === "/about") {
        return (
                <header className='header'>
                    <img className='logo_header' src={Kasa_logo_red_big} alt='Logo Kasa'/>
                    <nav className='nav'>
                        <Link to="/">Accueil</Link>
                        <Link to="/about"><u>A Propos</u></Link>
                    </nav>
                </header>
            )
    }
    else {
        return (
            <header className='header'>
                <img className='logo_header' src={Kasa_logo_red_big} alt='Logo Kasa'/>
                <nav className='nav'>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A Propos</Link>
                </nav>
            </header>
        )

    };
}

export default Header