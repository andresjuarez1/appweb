import logoFacebook from '../assets/img/facebook.png';
import logoTwitter from '../assets/img/gorjeo.png';
import logoYoutube from '../assets/img/youtube.png';
import '../assets/style/footer.css'

function Footer() {
    return (
        <footer>
            
            <div className='footerImg'>
                <img class="redes" src={logoFacebook}  alt="Logo Facebook" />
                <img class="redes" src={logoTwitter} alt="Logo Twitter" />
                <img class="redes" src={logoYoutube } alt="Logo Youtube" />
            </div>
        </footer>
      );
}

export default Footer;