import '../assets/style/header.css'
import logo from '../assets/img/logo.png';

function Header() {
  return (
    <header>
      <div class="header">
        <div class="logo">
          <img class="logo" src={logo} alt="Logo" />
        </div>

        <ul>
          <li><a href="https://www.youtube.com/">CONOCENOS</a></li>
          <li><a href="https://www.youtube.com/">ACERCA DE</a></li>
          <li><a href="https://www.youtube.com/">TIENDAS</a></li>
          <li><a href="https://www.youtube.com/">CONTACTANOS</a></li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
