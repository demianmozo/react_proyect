import './Footer.css'


function Footer() {
    return (
        <div className='footer'>
            <nav>
                <a href="https://instagram.com/sas.homemade.bakery?igshid=1w51y8uor4gmw"><img src="../../assets/instagram.png" alt="sas.homemade_bakery"></img></a>
                <a href="https://pinterest.com"><img src="../../assets/pinterest.png" alt="sas.homemade_bakery"></img></a>
                <a href="https://www.facebook.com/sas.homemade.bakery"><img src="../../assets/facebook.png" alt="sas homemade bakery"></img></a>
                <p class="redes">Nuestras redes</p>
            </nav>
            <div>
                <form> 
                    <label for="nombreform">¡Suscríbete a nuestra newsletter!:</label>
                    <input type="text" placeholder="Mail" name="nombreform"></input>
                </form>
            </div>
            <div class="footer-d-u">
                <p>Todos los derechos reservados ®</p>
            </div>
        </div>
    );
}

export default Footer;