export default function Hero() {
    return (
      <section id="inicio" className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h2>Seu sorriso em boas mãos</h2>
            <p>Atendimento odontológico especializado com tecnologia de ponta, conforto e cuidado para toda a sua família.</p>
            <a href="#agendamento" className="btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <i className="fa-solid fa-calendar-plus"></i> Agendar Consulta
            </a>
          </div>
          <div className="hero-image">
            <img src="/imagemsorriso.png" alt="Paciente com sorriso radiante" />
          </div>
        </div>
      </section>
    );
  }