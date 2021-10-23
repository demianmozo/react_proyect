import './Contact.css'


function Contact() {
    return (
        <div class="contact-container">
            <div class="window">
                <div class="overlay"></div>
                <div class="content">
                    <div class="welcome">¿Necesitas sacarte alguna duda?</div>
                    <div class="subtitle">¡No te preocupes! Acá estamos para ayudarte, dejá tu información debajo y nos contactaremos en poco tiempo.</div>
                    <div class="input-fields">
                        <input type="text" placeholder="Nombre y Apellido" class="input-line full-width input" ></input>
                        <input type="email" placeholder="Email" class="input-line full-width input"></input>
                        <input type="text" placeholder="Teléfono" class="input-line full-width input"></input>
                    </div>
                    <div>
                        <input type="submit" name="submit" value="Enviar" class="ghost-round full-width input"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;