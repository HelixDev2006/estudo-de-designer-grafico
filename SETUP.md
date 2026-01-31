# 🚀 Setup e Desenvolvimento

## Pré-requisitos

- **Node.js**: 18.0.0 ou superior
- **npm**: 9.0.0 ou superior
- **Git**: Qualquer versão recente
- **Editor**: VS Code recomendado

### Verificar versões

```bash
node --version    # v18.0.0+
npm --version     # 9.0.0+
git --version     # git version 2.x.x
```

---

## 🛠️ Setup Inicial

### 1. Clone do Repositório

```bash
git clone https://github.com/seu-usuario/estudo-de-designer-grafico.git
cd estudo-de-designer-grafico
```

### 2. Instalar Dependências

```bash
npm install
```

Isso vai instalar:
- React 18+ com React DOM
- TypeScript
- Tailwind CSS
- React Router
- Zustand
- Framer Motion
- E outras dependências

### 3. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

Saída esperada:
```
  ROLLDOWN-VITE v7.2.5  ready in 258 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 4. Abrir no Navegador

Visite: **http://localhost:5173**

---

## 📁 Estrutura do Projeto

```
estudo-de-designer-grafico/
├── src/
│   ├── components/          # Componentes React
│   │   ├── common/         # Header, Footer, etc.
│   │   ├── ui/             # Button, Card, Input, etc.
│   │   ├── educational/    # Componentes educativos
│   │   └── layout/         # Layouts
│   ├── pages/              # Páginas principais
│   ├── hooks/              # React hooks
│   ├── store/              # Estado global
│   ├── utils/              # Funções utilitárias
│   ├── types/              # Tipos TypeScript
│   ├── styles/             # CSS
│   ├── assets/             # Imagens, ícones
│   ├── data/               # Dados estáticos
│   ├── App.tsx             # Componente raiz
│   └── main.tsx            # Entrada da app
├── public/                 # Arquivos estáticos
├── node_modules/           # Dependências
├── .gitignore             # Git ignore
├── index.html             # HTML principal
├── package.json           # Dependências
├── tsconfig.json          # Configuração TypeScript
├── tailwind.config.js     # Configuração Tailwind
├── postcss.config.js      # Configuração PostCSS
├── vite.config.ts         # Configuração Vite
├── README.md              # Documentação principal
├── PLANO_PROJETO.md       # Plano detalhado
├── COMPONENTES.md         # Documentação de componentes
├── ACESSIBILIDADE.md      # Guia de acessibilidade
└── FASE_2.md              # Próximas tarefas
```

---

## 🔨 Scripts NPM

### Desenvolvimento
```bash
npm run dev          # Iniciar servidor com HMR
npm run dev -- --host  # Expor para rede local
```

### Build
```bash
npm run build        # Build otimizado para produção
npm run preview      # Preview do build
```

### Linting
```bash
npm run lint         # Verificar código (ESLint)
```

### Testes (Futuro)
```bash
npm run test         # Rodar testes
npm run test:a11y    # Testes de acessibilidade
npm run test:coverage # Cobertura
```

---

## 🔧 Configurações Importantes

### TypeScript (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Tailwind CSS (tailwind.config.js)

Inclui:
- Design System com cores personalizadas
- Tipografia customizada (Inter, Poppins)
- Sombras e radiuses
- Animações

### Vite (vite.config.ts)

Configurado com:
- React plugin
- Rolldown para builds rápidos
- Alias paths (@/)
- Source maps

---

## 🎨 Convenções de Código

### Nomes de Arquivo

```
✅ Correto
src/components/ui/Button.tsx       # PascalCase para componentes
src/components/ui/button.tsx       # minúsculas para hooks/utils
src/utils/formatDate.ts            # camelCase para funções
src/types/index.ts                 # minúsculas para arquivos

❌ Errado
src/components/button.tsx          # Componentes usam PascalCase
src/components/HEADER.tsx          # Evitar UPPERCASE
```

### Estrutura de Componentes

```tsx
import React from 'react';
import classNames from 'classnames';

// 1. Interface de Props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

// 2. Componente com forwardRef
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    // 3. Estilos
    const baseStyles = '...';
    const variantStyles = { /* ... */ };

    // 4. JSX
    return (
      <button
        ref={ref}
        className={classNames(baseStyles, variantStyles[variant], className)}
        aria-busy={isLoading}
        {...props}
      >
        {children}
      </button>
    );
  }
);

// 5. Display name
Button.displayName = 'Button';

// 6. Export
export default Button;
```

### Imports

```tsx
// ✅ Ordem: 1) React, 2) Third-party, 3) Local, 4) Styles
import React from 'react';
import classNames from 'classnames';

import Button from '@/components/ui/Button';
import { useAccessibility } from '@/hooks';
import { PRIMARY_COLOR } from '@/utils/constants';

import './Button.css';
```

---

## 🧪 Testando Acessibilidade

### Manual (Rápido)

```bash
1. Navegação por Teclado
   - Pressione Tab para navegar
   - Shift+Tab para voltar
   - Verifique se todos os elementos interativos são acessíveis

2. Modo Escuro
   - Pressione F12
   - DevTools > (...) > Rendering
   - Emule prefers-color-scheme: dark
   - Verifique se tema escuro funciona

3. Zoom
   - Ctrl++ (ou Cmd++)
   - Até 200%
   - Verifique se layout se adapta

4. Leitor de Tela (NVDA - Windows)
   - Download: https://www.nvaccess.org/
   - Ativar: Insert + Space
   - Desativar: Insert + Q
```

### Automático (CI/CD)

```bash
# Axe
npm install --save-dev @axe-core/cli
axe http://localhost:5173

# Lighthouse
npm install --save-dev @lhci/cli
lhci autorun

# Pa11y
npm install --save-dev pa11y
pa11y http://localhost:5173
```

---

## 🐛 Debug e Troubleshooting

### Servidor não inicia

```bash
# Porta em uso
# Solução 1: Mude a porta
npm run dev -- --port 3000

# Solução 2: Mate o processo
lsof -i :5173
kill -9 <PID>

# Solução 3: Reinicie o PC
```

### Tailwind não funciona

```bash
# Verifique imports no globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# Verifique content em tailwind.config.js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]

# Limpe cache
rm -rf node_modules/.vite
npm run dev
```

### TypeScript com erros

```bash
# Verifique tsconfig.json está correto
# Reinicie servidor
# Ctrl+C e npm run dev

# Se persistir:
rm -rf node_modules
npm install
npm run dev
```

### Componentes não renderizam

```tsx
// ✅ Correto
export default Button;

// ❌ Errado
export Button;

// ✅ Nomeado + default
export { Button };
export default Button;
```

---

## 📦 Dependências Principais

```json
{
  "react": "^18.3.0",
  "react-dom": "^18.3.0",
  "react-router-dom": "^6.20.0",
  "zustand": "^4.4.7",
  "framer-motion": "^10.16.4",
  "@headlessui/react": "^1.7.15",
  "classnames": "^2.3.2",
  "tailwindcss": "^3.4.0"
}
```

### Adicionar Mais Dependências

```bash
# Adicionar
npm install nome-pacote

# Remover
npm uninstall nome-pacote

# Atualizar
npm update nome-pacote

# Ver dependências
npm list
```

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# 1. Instale Vercel CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Siga as instruções
```

### Netlify

```bash
# 1. Instale Netlify CLI
npm install -g netlify-cli

# 2. Build
npm run build

# 3. Deploy
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
# 1. Configure vite.config.ts
export default {
  base: '/estudo-de-designer-grafico/',
}

# 2. Build
npm run build

# 3. Push dist/ para gh-pages branch
```

---

## 📊 Ambiente local

### Variáveis de Ambiente

Crie `.env.local`:

```
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Design Gráfico
VITE_ENVIRONMENT=development
```

Acesse no código:

```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🔒 Segurança

### ESLint

```bash
npm run lint
```

Verifica:
- Regras de React
- Regras de acessibilidade
- Código style

### TypeScript

```bash
tsc --noEmit
```

Verifica tipos sem compilar.

---

## 💾 Git Workflow

```bash
# 1. Crie uma branch
git checkout -b feature/nova-feature

# 2. Faça mudanças
# ... editar arquivos ...

# 3. Commit
git add .
git commit -m "feat: adicionar nova funcionalidade"

# 4. Push
git push origin feature/nova-feature

# 5. Abra Pull Request no GitHub
```

### Mensagens de Commit

```
feat:     Nova funcionalidade
fix:      Bug fix
docs:     Documentação
style:    Formatação, sem mudança de código
refactor: Refatorar código
perf:     Performance
test:     Testes
chore:    Build, dependências
```

---

## 🆘 Suporte

Encontrou problema?

1. **Verifique documentação**: `ACESSIBILIDADE.md`, `COMPONENTES.md`
2. **Procure na rede**: Stack Overflow, GitHub Issues
3. **Abra uma issue**: GitHub Issues
4. **Contacte**: Email ou Discord

---

**Versão**: 0.1.0
**Última atualização**: 2026-01-31
**Status**: ✅ Pronto para desenvolvimento
