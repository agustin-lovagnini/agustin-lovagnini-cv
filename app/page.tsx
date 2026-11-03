import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section aria-labelledby="presentacion-personal">
        <div>
          <span>Disponible para nuevas oportunidades</span>
          <span>Full Stack Developer <span>+3 años de código</span></span>
          <h1 id="presentacion-personal">Agustin Lovagnini<span>.</span></h1>
          <p><span>Transformando ideas en</span> realidades digitales</p>
          <p>Soy desarrollador web Full Stack, con especial interés en el Frontend y la experiencia de usuario. Me apasiona crear interfaces modernas, intuitivas y responsivas, combinando diseño y funcionalidad. Trabajo con tecnologías como React, JavaScript, Node.js y Express, desarrollando proyectos que integran soluciones tanto del lado del cliente como del servidor.</p>
          <div>
            <Link href="/proyectos" className="btn-primary">Ver Proyectos</Link>
            <Link href="/contacto" className="btn-primary">Contactar</Link>
            <a
              href="https://www.linkedin.com/in/agustinlovagnini"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link hover:drop-shadow-[0_0_1px_#fff] transition-[filter] duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <img
            src="/images/img-perfil-agustin.webp"
            alt="Agustín Lovagnini"
            className="h-64 w-64 rounded-full object-cover"
          />
        </div>
      </section>



      <section aria-labelledby="tecnologias-y-habilidades">
        <div>
          <span>Stack Principal</span>
          <h2 id="tecnologias-y-habilidades">Tecnologías y Habilidades</h2>
        </div>
        <div>
          <p>Ecosistema moderno concentrado en la solidez tipeada, la velocidad de ejecucion y componenetes reutlilizables</p>
        </div>
        <div>

        </div>

      </section>
    </main>
  );
}
