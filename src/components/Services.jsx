export default function Services() {
    return (
      <section id="servicos" style={{ padding: '60px 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '10px', color: 'var(--primary-color)' }}>Nossos Serviços</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '30px' }}>Tratamentos completos para a sua saúde bucal</p>
  
        <div className="services-container">
          <div className="card">
            <i className="fa-solid fa-tooth"></i>
            <h3 style={{ marginBottom: '10px' }}>Limpeza e Prevenção</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Remoção de tártaro, placa bacteriana e profilaxia para manter seu sorriso saudável.</p>
          </div>
  
          <div className="card">
            <i className="fa-solid fa-teeth-open"></i>
            <h3 style={{ marginBottom: '10px' }}>Ortodontia</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Aparelhos estéticos e convencionais para alinhamento e correção dentária.</p>
          </div>
  
          <div className="card">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <h3 style={{ marginBottom: '10px' }}>Clareamento Dental</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Técnicas avançadas para devolver o brilho e a brancura natural dos seus dentes.</p>
          </div>
  
          <div className="card">
            <i className="fa-solid fa-teeth"></i>
            <h3 style={{ marginBottom: '10px' }}>Implantes</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Reabilitação oral segura e permanente para restaurar sua mastigação e autoestima.</p>
          </div>
  
          <div className="card">
            <i className="fa-solid fa-gem"></i>
            <h3 style={{ marginBottom: '10px' }}>Restauração Estética</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Recuperação da estrutura dental com materiais estéticos de alta durabilidade e acabamento natural.</p>
          </div>
  
          <div className="card">
            <i className="fa-solid fa-clipboard-check"></i>
            <h3 style={{ marginBottom: '10px' }}>Avaliação Geral</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Exame minucioso da saúde bucal para planejamento e diagnóstico completo do seu tratamento.</p>
          </div>
        </div>
      </section>
    );
  }