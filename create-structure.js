const fs = require('fs');
const path = require('path');

// Lista de diretórios e arquivos a serem criados
const items = [
  // Diretórios
  { type: 'dir', path: 'src/app/login' },
  { type: 'dir', path: 'src/components' },
  { type: 'dir', path: 'src/lib' },
  { type: 'dir', path: 'public' },

  // Arquivos com conteúdo inicial opcional
  { type: 'file', path: 'src/app/globals.css', content: '/* Estilos globais */\n' },
  { type: 'file', path: 'src/app/layout.js', content: '// Layout principal (Head, fontes, tema)\n' },
  { type: 'file', path: 'src/app/page.js', content: '// Página Inicial (Landing Page)\n' },
  { type: 'file', path: 'src/app/login/page.js', content: '// Página de Login Administrativo\n' },
  { type: 'file', path: 'src/components/Navbar.jsx', content: '// Cabeçalho e navegação\n' },
  { type: 'file', path: 'src/components/Hero.jsx', content: '// Banner principal\n' },
  { type: 'file', path: 'src/components/Services.jsx', content: '// Seção de serviços\n' },
  { type: 'file', path: 'src/components/AppointmentForm.jsx', content: '// Formulário de agendamento\n' },
  { type: 'file', path: 'src/components/Faq.jsx', content: '// Perguntas frequentes\n' },
  { type: 'file', path: 'src/components/Footer.jsx', content: '// Rodapé\n' },
  { type: 'file', path: 'src/components/WhatsappFloat.jsx', content: '// Botão flutuante do WhatsApp\n' },
  { type: 'file', path: 'src/lib/api.js', content: '// Funções de requisição HTTP (Fetch)\n' },
];

items.forEach((item) => {
  const fullPath = path.join(process.cwd(), item.path);

  if (item.type === 'dir') {
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`📁 Diretório criado: ${item.path}`);
    } else {
      console.log(`ℹ️ Diretório já existe: ${item.path}`);
    }
  } else if (item.type === 'file') {
    // Garante que o diretório pai existe antes de criar o arquivo
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (!fs.existsSync(fullPath)) {
      fs.writeFileSync(fullPath, item.content || '');
      console.log(`📄 Arquivo criado: ${item.path}`);
    } else {
      console.log(`ℹ️ Arquivo já existe: ${item.path}`);
    }
  }
});

console.log('\n✨ Estrutura gerada com sucesso!');
console.log('💡 Dica: Lembre-se de colocar a imagem "imagemsorriso.png" dentro da pasta "public/".');