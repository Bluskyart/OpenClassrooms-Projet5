import Kasa_logo_white from '../assets/Kasa_logo_white.svg';
import '../styles/footer.scss';

function Footer() {
    return (
        <footer id='footer'>
            <img src={Kasa_logo_white} alt='Logo Kasa'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer