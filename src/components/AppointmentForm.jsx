'use client';

import { useState, useEffect } from 'react';
import { getProcedimentos, createAgendamento } from '@/lib/api';

export default function AppointmentForm() {
  const [procedimentos, setProcedimentos] = useState([]);
  const [formData, setFormData] = useState({
    procedimentoId: '',
    data: '',
    horario: '',
    observacoes: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Carrega os procedimentos do backend ao montar o componente
  useEffect(() => {
    getProcedimentos()
      .then((data) => setProcedimentos(data))
      .catch((err) => console.error('Erro ao buscar procedimentos:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      // Envia os dados para a API conforme a documentação
      const resultado = await createAgendamento({
        procedimentoId: Number(formData.procedimentoId),
        data: formData.data,
        horario: formData.horario,
        observacoes: formData.observacoes || 'Agendamento pelo site'
      });

      // Se a API retornar a whatsappUrl, redireciona o usuário
      if (resultado.whatsappUrl) {
        window.open(resultado.whatsappUrl, '_blank');
      }

      // Reseta o formulário
      setFormData({ procedimentoId: '', data: '', horario: '', observacoes: '' });
    } catch (err) {
      setErrorMsg(err.message || 'Ocorreu um erro ao agendar. Verifique se você está logado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="agendamento" style={{ padding: '60px 8%', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '10px' }}>Agende sua Consulta</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '30px' }}>Preencha os dados abaixo e entraremos em contato.</p>

      {errorMsg && (
        <div style={{ background: '#fee2e2', color: '#ef4444', padding: '12px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
          <i className="fa-solid fa-circle-exclamation"></i> {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="procedimentoId" style={{ fontWeight: 500, display: 'block', marginBottom: '5px' }}>Serviço Desejado</label>
          <select 
            id="procedimentoId" 
            required 
            value={formData.procedimentoId}
            onChange={(e) => setFormData({ ...formData, procedimentoId: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px' }}
          >
            <option value="">Selecione um serviço...</option>
            {procedimentos.map((proc) => (
              <option key={proc.id} value={proc.id}>
                {proc.nome} - R$ {proc.preco?.toFixed(2)} ({proc.duracao} min)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date" style={{ fontWeight: 500, display: 'block', marginBottom: '5px' }}>Data Preferencial</label>
          <input 
            type="date" 
            id="date" 
            required 
            value={formData.data}
            onChange={(e) => setFormData({ ...formData, data: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px' }}
          />
        </div>

        <div>
          <label htmlFor="horario" style={{ fontWeight: 500, display: 'block', marginBottom: '5px' }}>Horário</label>
          <input 
            type="time" 
            id="horario" 
            required 
            value={formData.horario}
            onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px' }}
          />
        </div>

        <div>
          <label htmlFor="observacoes" style={{ fontWeight: 500, display: 'block', marginBottom: '5px' }}>Observações (Opcional)</label>
          <input 
            type="text" 
            id="observacoes" 
            placeholder="Alguma observação importante?" 
            value={formData.observacoes}
            onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px' }}
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="btn" 
          style={{ padding: '14px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', border: 'none', background: 'var(--primary-color)', color: 'white', borderRadius: '8px', marginTop: '10px' }}
        >
          <i className="fa-solid fa-calendar-check"></i> {loading ? 'Processando...' : 'Confirmar Agendamento'}
        </button>
      </form>
    </section>
  );
}