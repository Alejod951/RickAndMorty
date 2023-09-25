import styles from './About.module.css'

function About() {
  return (
    <div className={styles.div}>
       <header>
                <h1>Sobre</h1>
            </header>
            <section>
                <h2>Esta página web es un proyecto personal de un programador principiante llamado Alejandro.</h2>
                <p>Quería crear un sitio web para aprender a programar y compartir su amor por la serie con otros fans.</p>
            </section>
            <section>
                <h2>El sitio web contiene información sobre los personajes de la serie, así como la posibilidad de añadirlos a favoritos.</h2>
            </section>
            <section>
                <h2>Alejandro está constantemente trabajando para mejorar el sitio web.</h2>
                <p>Está aprendiendo nuevas habilidades de programación y está buscando formas de mejorar la experiencia del usuario.</p>
            </section>
            <section>
                <h2>Enlace al repositorio de GitHub</h2>
                <p>El código fuente del sitio web está disponible en GitHub. El enlace al repositorio es:</p>
                <a href="https://github.com/Alejod951">https://github.com/Alejod951</a>
                <p>Alejandro invita a otros desarrolladores a contribuir al sitio web. Si tienes alguna idea o sugerencia, no dudes en contactarlo.</p>
            </section>
            <section>
                <h2>Objetivos</h2>
                <p>Los objetivos principales de este proyecto son:</p>
                <ul>
                    <li>Aprender a programar.</li>
                    <li>Crear un sitio web útil y entretenido para los fans de Rick and Morty.</li>
                    <li>Compartir el amor por la serie con otros fans.</li>
                </ul>
            </section>
            <section>
                <h2>Desarrollador</h2>
                <p>Alejandro es un programador principiante que está aprendiendo a desarrollar sitios web.</p>
                <p>Es un gran fan de Rick and Morty y está emocionado de crear un sitio web para aprender a programar y compartir su amor por la serie con otros fans.</p>
            </section>
            <section>
                <h2>Contacto</h2>
                <p>Si tienes alguna pregunta o comentario sobre el sitio web, puedes contactar a Alejandro en el siguiente correo electrónico:</p>
                <a href="mailto:alejod951@gmail.com">alejod951@gmail.com</a>
            </section>
    </div>
  )
}

export default About

