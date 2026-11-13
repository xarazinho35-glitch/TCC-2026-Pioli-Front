export default function Footer() {
    return (
      <footer className="footer-completo">
        <div className="footer-container">
          <div>
            <h3 className="logo"><i className="fa-solid fa-tooth"></i> Odonto<span>Plus</span></h3>
            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>Cuidando da sua saúde bucal com tecnologia e carinho.</p>
          </div>
  
          <div>
            <h4>Horário de Atendimento</h4>
            <p>Segunda a Sexta: 08h às 19h</p>
            <p>Sábado: 08h às 12h</p>
          </div>
  
          <div>
            <h4>Onde Estamos</h4>
            <p><i className="fa-solid fa-location-dot"></i> Av. Principal, 1000 - Centro</p>
            <div className="social-links" style={{ marginTop: '10px' }}>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 OdontoPlus. Todos os direitos reservados. Projeto Acadêmico TCC.</p>
        </div>
      </footer>
    );
  }