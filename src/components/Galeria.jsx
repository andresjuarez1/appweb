import '../assets/style/galeria.css'
import productosLiquidos from '../assets/img/liquidos.png';
import Cosas from '../assets/img/cosas.png';
import Mascotas from '../assets/img/mascotas.png';
import Carros from '../assets/img/carros.png';
import icono from '../assets/img/clic.png';

function Galeria() {
return(
    <div class="all">
        <section class="portafolio">
            <div class="galeria-contenedor">
                <h2 class="titulo">NUESTROS PRODUCTOS</h2>
                <div class="galeria-port">
                    <div class="imagen-port">
                        <img src={productosLiquidos} alt="liquidos" />
                        <div class="hover-galeria">
                        <img src={icono} alt="clic"/>
                        <p>PRODUCTOS LIQUIDOS</p>
                    </div>
                </div>
                <div class="imagen-port">
                    <img src={Cosas} alt="cosas" />
                    <div class="hover-galeria">
                    <img src={icono} alt="clic"/>
                    <p>PARA EL HOGAR</p>
                    </div>
                </div>
                    <div class="imagen-port">
                    <img src={Mascotas} alt="mascotas" />
                    <div class="hover-galeria">
                    <img src={icono} alt="clic"/>
                    <p>PARA MASCOTAS</p>
                    </div>
                </div>
                    <div class="imagen-port">
                    <img src={Carros} alt="carros" />
                    <div class="hover-galeria">
                    <img src={icono} alt="clic"/>
                    <p>PARA CARROS</p>
                    </div>  
                </div>
            </div>
            </div>
        </section>
    </div>
    );
}
export default Galeria;