'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { loginAdmin } from '@/lib/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(false);

    try {
      // Requisição real para o endpoint de autenticação
      const data = await loginAdmin(email, password);

      // Salva o token JWT e os dados do usuário no localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('usuario', JSON.stringify(data.usuario));

      // Redireciona para o painel administrativo ou dashboard
      router.push('/dashboard');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div style={{ background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0, fontFamily: 'Poppins, sans-serif' }}>
      <div style={{ background: '#ffffff', padding: '40px 30px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)', width: '100%', maxWidth: '400px', border: '1px solid #e2e8f0' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '1.8rem', color: 'var(--primary-color, #0284c7)', marginBottom: '5px' }}>
            <i className="fa-solid fa-tooth"></i> Odonto<span>Plus</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Acesso Restrito ao Painel</p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#334155', fontSize: '0.9rem' }}>E-mail</label>
            <div style={{ position: 'relative' }}>
              <i className="fa-solid fa-user" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
              <input 
                type="email" 
                placeholder="Digite seu e-mail" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 42px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.95rem', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#334155', fontSize: '0.9rem' }}>Senha</label>
            <div style={{ position: 'relative' }}>
              <i className="fa-solid fa-lock" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
              <input 
                type="password" 
                placeholder="Digite sua senha" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 42px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.95rem', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <button type="submit" style={{ width: '100%', padding: '12px', background: 'var(--primary-color, #0284c7)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}>
            <i className="fa-solid fa-right-to-bracket"></i> Entrar
          </button>

          {error && (
            <p style={{ color: '#ef4444', fontSize: '0.85rem', textAlign: 'center', marginTop: '15px' }}>
              <i className="fa-solid fa-circle-exclamation"></i> E-mail ou senha incorretos!
            </p>
          )}
        </form>

        <Link href="/" style={{ display: 'block', textAlign: 'center', marginTop: '25px', color: '#64748b', textDecoration: 'none', fontSize: '0.85rem' }}>
          <i className="fa-solid fa-arrow-left"></i> Voltar para o site
        </Link>
      </div>
    </div>
  );
}