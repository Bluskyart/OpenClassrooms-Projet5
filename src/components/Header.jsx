import { Link } from 'react-router-dom';
import Kasa_logo_red_big from '../assets/Kasa_logo_red_big.svg';
import '../styles/header.scss';

function Header() {
    return (
        <header id='header'>
            <img className='logo_header' src={Kasa_logo_red_big} alt='Logo Kasa'/>
            <nav id='nav'>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header