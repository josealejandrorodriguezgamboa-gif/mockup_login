
import { useState } from 'react';
import './App.css';

function App() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [escala, setEscala] = useState(1);
  const [rolSeleccionado, setRolSeleccionado] = useState('');
  
const [correo, setCorreo] = useState('');
const [contrasena, setContrasena] = useState('');
const [codigo, setCodigo] = useState('');
const [mensaje, setMensaje] = useState('');

  return (
    <main
      className={`app ${modoOscuro ? 'dark' : 'light'}`}
      style={{ '--escala-letra': escala }}
    >
      <header className="topbar">
        <a className="brand" href="#" aria-label="TIVITLATAM inicio">
          <span className="brand-icon">T</span>
          <span>TIVIT<span className="brand-highlight">LATAM</span></span>
        </a>

        <div className="header-controls">
          <div className="accessibility">
            <button
              onClick={() => setEscala(Math.max(0.8, +(escala - 0.1).toFixed(1)))}
              aria-label="Reducir texto"
              title="Reducir texto"
            >
              A−
            </button>
            <button onClick={() => setEscala(1)} title="Texto normal">
              A
            </button>
            <button
              onClick={() => setEscala(Math.min(1.3, +(escala + 0.1).toFixed(1)))}
              aria-label="Aumentar texto"
              title="Aumentar texto"
            >
              A+
            </button>
          </div>

          <button
            className={`theme-toggle ${modoOscuro ? 'is-dark' : ''}`}
            onClick={() => setModoOscuro(!modoOscuro)}
            aria-label="Cambiar tema"
            title="Cambiar tema"
          >
            <span>☾</span>
            <span className="toggle-track">
              <span className="toggle-knob" />
            </span>
            <span>☀</span>
          </button>
        </div>
      </header>

      <section className="landing">
        <div className="decor decor-top" />
        <div className="decor decor-bottom" />


        <div className="landing-content">
          <section className="hero">
            <div className="eyebrow">
              <span>TU PRÓXIMA OPORTUNIDAD COMIENZA AQUÍ</span>
            </div>

            <span className="hero-divider" />

            <h1>
              El talento <span className="black-text">abre puertas.</span>
              <br />
              <span>Tu futuro comienza hoy.</span>
            </h1>

            <p className="hero-description">
              Cada entrevista es una nueva oportunidad para demostrar
              <br className="desktop-break" />
              todo lo que eres capaz de lograr.
            </p>
          </section>

          <section className="role-cards" aria-label="Seleccionar perfil">
            <button
              className={`role-card ${
                rolSeleccionado === 'Especialista' ? 'selected' : ''
              }`}
              onClick={() => setRolSeleccionado('Especialista')}
            >
              <span className="role-icon" aria-hidden="true">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <circle cx="32" cy="17" r="10" />
                  <circle cx="14" cy="23" r="8" />
                  <circle cx="50" cy="23" r="8" />
                  <path d="M14 56V44c0-10 8-17 18-17s18 7 18 17v12H14Z" />
                  <path d="M2 49V39c0-7 5-12 12-12 3 0 5 1 7 3-5 4-8 10-8 17v2H2Z" />
                  <path d="M62 49V39c0-7-5-12-12-12-3 0-5 1-7 3 5 4 8 10 8 17v2h11Z" />
                </svg>
              </span>

              <span className="role-title">Especialista</span>

              <span className="role-description">
                Encuentra el talento que llevará
                <br className="desktop-break" />
                tu equipo al siguiente nivel.
              </span>

              <span className="role-action">
                Continuar <span className="arrow">→</span>
              </span>
            </button>

            <button
              className={`role-card ${
                rolSeleccionado === 'Aspirante' ? 'selected' : ''
              }`}
              onClick={() => setRolSeleccionado('Aspirante')}
            >
              <span className="role-icon" aria-hidden="true">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <circle cx="32" cy="17" r="11" />
                  <path d="M10 55V47c0-12 9-20 22-20s22 8 22 20v8H10Z" />
                </svg>
              </span>

              <span className="role-title">Aspirante</span>

              <span className="role-description">
                Demuestra tus habilidades
                <br className="desktop-break" />
                y acércate a nuevas
                <br className="desktop-break" />
                oportunidades.
              </span>

              <span className="role-action">
                Continuar <span className="arrow">→</span>
              </span>
            </button>
          </section>

          
{rolSeleccionado && (
  <section className="access-panel">
    <button
      className="back-button"
      onClick={() => {
        setRolSeleccionado('');
        setMensaje('');
      }}
    >
      ← Volver al inicio
    </button>

    {rolSeleccionado === 'Especialista' ? (
      <>
        <div className="access-icon">♙</div>
        <h2>Bienvenido, Especialista</h2>
        <p className="access-description">
          Ingresa tus datos para continuar.
        </p>

        <form
          className="access-form"
          onSubmit={(e) => {
            e.preventDefault();
            setMensaje(
              'El inicio de sesión todavía necesita conectarse al sistema.'
            );
          
          }}
        >
          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            type="email"
            placeholder="nombre@empresa.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label htmlFor="contrasena">Contraseña</label>
          <input
            id="contrasena"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />

          <button type="submit" className="access-submit">
            Iniciar sesión →
          </button>
        </form>
      </>
    ) : (
      <>
        <div className="access-icon">✦</div>
        <h2>Acceso para Aspirantes</h2>
        <p className="access-description">
          Ingresa el código que recibiste para tu entrevista.
        </p>

        <form
          className="access-form"
          onSubmit={(e) => {
            e.preventDefault();
            setMensaje(
              'El código se ingresó correctamente en el formulario. Falta conectarlo al sistema para validarlo.'
            );
          }}
        >
          <label htmlFor="codigo">Código de invitación</label>
          <input
            id="codigo"
            type="text"
            placeholder="Ej. TF-123456"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
          />

          <button type="submit" className="access-submit">
            Continuar →
          </button>
        </form>
      </>
    )}

    {mensaje && (
      <p className="access-message" role="status">
        {mensaje}
      </p>
    )}
  </section>
)}


          <section className="motivation-bar">
            <div className="motivation-item">
              <span className="motivation-icon">◎</span>
              <span className="motivation-number">01</span>
              <p>
                Tu potencial
                <br />
                merece una oportunidad.
              </p>
            </div>

            <div className="motivation-item">
              <span className="motivation-icon">▥</span>
              <span className="motivation-number">02</span>
              <p>
                Confía en lo que sabes
                <br />
                y en lo que puedes aprender.
              </p>
            </div>

            <div className="motivation-item">
              <span className="motivation-icon">★</span>
              <span className="motivation-number">03</span>
              <p>
                Cada paso te acerca
                <br />
                a tu próxima meta.
              </p>
            </div>
          </section>

          <footer className="footer">
            <span className="footer-line" />
            <p className="footer-brand">
              TIVIT<span>LATAM</span>
            </p>
            <span className="footer-line" />
            <p className="footer-caption">
              Conectando talento con oportunidades.
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default App;
