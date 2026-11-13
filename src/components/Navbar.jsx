'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkTheme(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    if (!darkTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header>
      <nav className="navbar">
        <h1 className="logo">
          <i className="fa-solid fa-tooth"></i> Odonto<span>Plus</span>
        </h1>
        <ul className="nav-links" style={{ alignItems: 'center' }}>
          <li><Link href="#inicio"><i className="fa-solid fa-house"></i> Início</Link></li>
          <li><Link href="#servicos"><i className="fa-solid fa-briefcase-medical"></i> Serviços</Link></li>
          <li><Link href="#agendamento"><i className="fa-solid fa-calendar-check"></i> Agendamento</Link></li>
          <li>
            <button 
              onClick={toggleTheme} 
              style={{ background: 'none', border: '1px solid var(--primary-color)', color: 'var(--primary-color)', padding: '6px 12px', borderRadius: '20px', cursor: 'pointer', fontWeight: 500 }}
            >
              <i className="fa-solid fa-moon"></i> Tema
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}