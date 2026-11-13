export default function WhatsappFloat() {
    return (
      <>
        {/* Botão Flutuante do WhatsApp */}
        <a href="https://wa.me/5534992480848" className="whatsapp-float" target="_blank" rel="noopener noreferrer" title="Fale conosco no WhatsApp">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
  
        {/* Toast de Notificação (Opcional caso queira disparar programaticamente) */}
        <div id="toast" className="toast">
          <i className="fa-solid fa-circle-check"></i>
          <span id="toast-message">Agendamento solicitado com sucesso! Entraremos em contato.</span>
        </div>
      </>
    );
  }