export default function Faq() {
    return (
      <section id="faq" style={{ padding: '60px 8%', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '10px' }}>Dúvidas Frequentes</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '30px' }}>Clique nas perguntas para ver as respostas</p>
        
        <div className="faq-container">
          <details className="faq-item">
            <summary>
              <span><i className="fa-solid fa-chevron-right faq-icon"></i> Aceitam convênio odontológico?</span>
            </summary>
            <div className="faq-answer">
              <p>Sim! Trabalhamos com os principais convênios do mercado e também oferecemos condições facilitadas de parcelamento para tratamentos particulares.</p>
            </div>
          </details>
  
          <details className="faq-item">
            <summary>
              <span><i className="fa-solid fa-chevron-right faq-icon"></i> Como funciona a primeira avaliação?</span>
            </summary>
            <div className="faq-answer">
              <p>Na primeira consulta é realizado um diagnóstico completo da sua saúde bucal, incluindo exames preventivos se necessário, para elaborar um plano de tratamento personalizado.</p>
            </div>
          </details>
  
          <details className="faq-item">
            <summary>
              <span><i className="fa-solid fa-chevron-right faq-icon"></i> Quais são as formas de pagamento?</span>
            </summary>
            <div className="faq-answer">
              <p>Aceitamos cartões de crédito e débito, Pix, boleto bancário e parcelamento próprio dependendo do plano de tratamento escolhido.</p>
            </div>
          </details>
        </div>
      </section>
    );
  }