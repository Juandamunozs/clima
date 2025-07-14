import './Nosotros.css';

export default function Nosotros() {
  return (
    <div className="nosotros-container">
      <h1>Sobre Nosotros</h1>
      <p className="nosotros-description">
        Somos una empresa dedicada a brindar servicios meteorológicos inteligentes,
        ayudando a personas y organizaciones a anticiparse al clima y tomar mejores decisiones.
      </p>

      <div className="contact-box">
        <p><strong>Contáctanos:</strong></p>

        <a
          href="https://wa.me/573158145977"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className="icon"
          />
          WhatsApp
        </a>

        <a
          href="mailto:clima@clima.co"
          className="contact-link"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
            className="icon"
          />
          Email
        </a>
      </div>
    </div>
  );
}

