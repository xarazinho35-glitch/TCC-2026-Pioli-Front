const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// Helper para obter os headers com o token JWT armazenado
const getAuthHeaders = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
  };
};

// 1. Autenticação (Login)
export async function loginAdmin(email, senha) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  });

  if (!response.ok) {
    throw new Error('Usuário ou senha incorretos!');
  }

  return await response.json(); // Retorna { token, usuario }
}

// 2. Buscar Procedimentos (Catálogo público)
export async function getProcedimentos() {
  const response = await fetch(`${API_BASE_URL}/procedimentos`);
  
  if (!response.ok) {
    throw new Error('Erro ao carregar os procedimentos.');
  }

  return await response.json(); // Retorna array de procedimentos
}

// 3. Criar Agendamento
export async function createAgendamento(dadosAgendamento) {
  const response = await fetch(`${API_BASE_URL}/agendamentos`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(dadosAgendamento)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Erro ao realizar o agendamento.');
  }

  return await response.json(); // Retorna { agendamento, whatsappUrl }
}