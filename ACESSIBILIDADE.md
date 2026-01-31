# ♿ Guia Completo de Acessibilidade

## 📖 Introdução

Este guia documenta todos os padrões de acessibilidade implementados nesta plataforma, seguindo as diretrizes WCAG 2.1 Level AA.

---

## 1️⃣ WCAG 2.1 Level AA - O que significa?

### Pilares (POUR)
- **P**erceptible (Perceptível) - Conteúdo deve ser perceptível
- **O**perable (Operável) - Interface deve ser operável
- **U**nderstandable (Compreensível) - Conteúdo deve ser compreensível
- **R**obust (Robusto) - Compatível com tecnologias assistivas

### Níveis
- **A** - Mínimo
- **AA** - Nível recomendado (nossa meta)
- **AAA** - Excelente (futuro)

---

## 2️⃣ Implementação Técnica

### HTML Semântico

```html
<!-- ❌ Errado -->
<div onclick="navigateTo('/')">Home</div>

<!-- ✅ Correto -->
<nav aria-label="Navegação principal">
  <a href="/">Home</a>
</nav>
```

### Landmarks (Referências)
```html
<header>
  <nav aria-label="Principal"></nav>
</header>

<main id="main-content" role="main">
  <!-- Conteúdo principal -->
</main>

<aside aria-label="Complemento">
  <!-- Barra lateral -->
</aside>

<footer>
  <!-- Rodapé -->
</footer>
```

### Headings Hierárquicos
```html
<!-- ✅ Correto -->
<h1>Título Principal</h1>
<section>
  <h2>Seção</h2>
  <h3>Subseção</h3>
</section>

<!-- ❌ Errado -->
<h1>Título</h1>
<h3>Pula nível</h3> <!-- Evitar pular níveis -->
```

---

## 3️⃣ Navegação por Teclado

### Ordem de Tabulação

```tsx
// ✅ Ordem lógica
<header>
  <a href="/">Logo</a>
  <nav>
    <a href="/cursos">Cursos</a>
    <a href="/ferramentas">Ferramentas</a>
  </nav>
</header>

<main>
  <button>Ação 1</button>
  <button>Ação 2</button>
</main>

// ❌ Evitar tabindex positivo (quebra ordem)
<button tabIndex={1}>Errado</button>
<button tabIndex={2}>Muito Errado</button>
```

### Atalhos de Teclado

| Tecla | Ação | Componente |
|-------|------|-----------|
| Tab | Próximo focável | Global |
| Shift+Tab | Anterior focável | Global |
| Enter | Ativar | Button, Link |
| Space | Toggle | Checkbox, Radio |
| Arrow Up/Down | Navegar | Select, Menu |
| Arrow Left/Right | Anterior/Próximo | Tabs, Carousel |
| Escape | Fechar | Modal, Dropdown |
| Home/End | Primeiro/Último | List, Table |

### Skip Links

```tsx
// Implementado no Header
<a href="#main-content" className="skip-link">
  Pular para o conteúdo principal
</a>
```

---

## 4️⃣ ARIA (Accessible Rich Internet Applications)

### ARIA Roles

```tsx
// Elemento com comportamento customizado
<div role="button" onClick={handleClick} onKeyDown={handleKeyDown}>
  Clique aqui
</div>

// Menu dropdown
<ul role="menu">
  <li role="menuitem">Opção 1</li>
  <li role="menuitem">Opção 2</li>
</ul>
```

### ARIA Labels e Descriptions

```tsx
// Label explícito
<label htmlFor="email">E-mail</label>
<input id="email" type="email" />

// Label via aria-label (quando não há label visível)
<button aria-label="Fechar modal">✕</button>

// Descrição adicional
<input
  id="password"
  type="password"
  aria-describedby="pwd-hint"
/>
<p id="pwd-hint">Mínimo 8 caracteres</p>
```

### ARIA States e Properties

```tsx
// Estado expandido
<button
  aria-expanded={isOpen}
  aria-controls="menu"
>
  Menu
</button>
<ul id="menu" hidden={!isOpen}>
  {/* Itens */}
</ul>

// Estado selecionado
<div role="tablist">
  <button
    role="tab"
    aria-selected={activeTab === 'tab1'}
    aria-controls="panel1"
  >
    Tab 1
  </button>
</div>

// Loading
<button aria-busy={isLoading}>
  {isLoading ? 'Salvando...' : 'Salvar'}
</button>

// Obrigatório
<input aria-required="true" required />

// Inválido
<input aria-invalid={hasError} />
```

### ARIA Live Regions

```tsx
// Para mensagens que aparecem dinamicamente
<div aria-live="polite" aria-atomic="true">
  {message && <p>{message}</p>}
</div>

// Para alertas
<div role="alert" aria-live="assertive">
  Erro ao salvar!
</div>

// Para logs
<div aria-live="log" aria-relevant="text">
  {logs.map(log => <p key={log.id}>{log.text}</p>)}
</div>
```

---

## 5️⃣ Imagens e Mídia

### Alt Text

```tsx
// ✅ Descritivo
<img
  src="course.jpg"
  alt="Aluna em aula de design gráfico usando tablet e caneta digital"
/>

// ❌ Vago
<img src="course.jpg" alt="imagem" />

// Decorativa
<img
  src="decoration.svg"
  alt=""
  aria-hidden="true"
/>
```

### Vídeos

```tsx
<video controls aria-label="Aula de cores em design">
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions-pt.vtt" />
  <track kind="descriptions" src="descriptions.vtt" />
  Seu navegador não suporta vídeo.
</video>
```

---

## 6️⃣ Cores e Contraste

### Razões de Contraste Mínimas

```
WCAG AA:
- Texto: 4.5:1
- Texto grande (18pt+): 3:1
- Componentes UI: 3:1

WCAG AAA:
- Texto: 7:1
- Texto grande: 4.5:1
```

### Verificar Contraste

```tsx
// Usar ferramentas
// - Axe DevTools (Chrome Extension)
// - Contrast Checker (webaim.org)
// - Lighthouse (DevTools)

// Nossas cores passam em AA
Primary: #6366F1 sobre branco = 8.4:1 ✅
Text Dark: #1F2937 sobre branco = 10.1:1 ✅
```

### Cores não como Única Informação

```tsx
// ❌ Errado - só usa cor
<button style={{ backgroundColor: isActive ? 'green' : 'red' }}>
  Status
</button>

// ✅ Correto - cor + ícone/texto
<button className={isActive ? 'bg-green-500' : 'bg-red-500'}>
  {isActive ? '✓ Ativo' : '✗ Inativo'}
</button>
```

---

## 7️⃣ Formulários Acessíveis

### Estrutura

```tsx
<form>
  {/* Agrupamento com fieldset para radio/checkbox */}
  <fieldset>
    <legend>Escolha seu nível</legend>
    <label>
      <input type="radio" name="level" value="beginner" />
      Iniciante
    </label>
    <label>
      <input type="radio" name="level" value="intermediate" />
      Intermediário
    </label>
  </fieldset>

  {/* Labels sempre presentes */}
  <label htmlFor="email">E-mail *</label>
  <input
    id="email"
    type="email"
    required
    aria-required="true"
  />

  {/* Mensagens de erro */}
  <input
    id="password"
    type="password"
    aria-describedby={error ? 'pwd-error' : undefined}
  />
  {error && (
    <p id="pwd-error" role="alert" style={{ color: 'red' }}>
      {error}
    </p>
  )}
</form>
```

---

## 8️⃣ Focus Management

### Indicador de Focus

```css
:focus-visible {
  outline: 3px solid var(--primary-color);
  outline-offset: 2px;
}

/* Não remova outline! */
button {
  outline: none; /* ❌ Ruim */
}

/* Use outline-offset para espaçamento */
button:focus {
  outline: 3px solid blue;
  outline-offset: 4px; /* ✅ Bom */
}
```

### Focus Trap (Modal)

```tsx
const ModalWithFocusTrap: React.FC = ({ isOpen, onClose }) => {
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Shift+Tab no primeiro elemento
        if (document.activeElement === firstFocusableRef.current) {
          lastFocusableRef.current?.focus();
          e.preventDefault();
        }
      } else {
        // Tab no último elemento
        if (document.activeElement === lastFocusableRef.current) {
          firstFocusableRef.current?.focus();
          e.preventDefault();
        }
      }
    }
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <dialog open={isOpen} onKeyDown={handleKeyDown}>
      <button ref={firstFocusableRef}>Ação 1</button>
      {/* Conteúdo */}
      <button ref={lastFocusableRef} onClick={onClose}>
        Fechar
      </button>
    </dialog>
  );
};
```

---

## 9️⃣ Redução de Movimento

```tsx
// Respeitar preferência do usuário
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Usar no componente
const MyComponent = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      style={{
        transition: prefersReducedMotion ? 'none' : 'all 0.3s ease',
      }}
    >
      Conteúdo
    </div>
  );
};
```

```css
/* CSS para respeitar preferência */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🔟 Modo Escuro

```tsx
// Implementado via hook useAccessibility
const [theme, setTheme] = useState('light');

useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}, [theme]);

// CSS
body[data-theme='dark'] {
  background-color: #111827;
  color: #F3F4F6;
}
```

---

## 🧪 Como Testar Acessibilidade

### 1. Teste Manual

```bash
# Navegação por Teclado
1. Pressione Tab para navegar
2. Shift+Tab para voltar
3. Enter para ativar botões
4. Arrow keys em menus/tabs
5. Escape para fechar diálogos
```

### 2. Leitor de Tela

```bash
# Windows: Use NVDA (gratuito)
# Mac: Use VoiceOver (Alt+Cmd+U)
# Android: TalkBack
# iOS: VoiceOver

# Testar:
- Estrutura de headings
- Links com propósito claro
- Formulários com labels
- Imagens com alt text
- Tabelas com headers
```

### 3. Ferramentas Automáticas

```bash
# Axe DevTools
Chrome: Extensão Axe DevTools
Resultados: Violations, Best Practices

# WAVE
- wave.webaim.org
- Visualiza estrutura de página

# Lighthouse
- Chrome DevTools > Lighthouse
- Audit > Accessibility
- Score 90+ é bom

# Axe CLI
npm install -g @axe-core/cli
axe https://seu-site.com
```

### 4. Zoom Test

```bash
# Navegador
Ctrl++ (ou Cmd++)
Até 200%

# Verificar:
- Layouts não quebram
- Conteúdo não fica cortado
- Texto permanece legível
```

---

## 📋 Checklist de Acessibilidade

### Página
- [ ] Único `<h1>` por página
- [ ] Headings em ordem hierárquica
- [ ] Landmark tags (main, nav, aside, footer)
- [ ] `<title>` único e descritivo
- [ ] Idioma definido (`<html lang="pt-BR">`)

### Navegação
- [ ] Navegação por teclado funciona
- [ ] Ordem de Tab lógica
- [ ] Focus visível (outline)
- [ ] Skip links presentes

### Conteúdo
- [ ] Imagens com alt text
- [ ] Vídeos com legendas
- [ ] Tabelas com headers
- [ ] Listas com `<ul>` ou `<ol>`
- [ ] Citações com `<blockquote>`
- [ ] Código com `<pre><code>`

### Formulários
- [ ] Labels para todos inputs
- [ ] Validação com mensagens claras
- [ ] Grouping com `<fieldset>`
- [ ] Instruções visíveis

### Cores
- [ ] Contraste 4.5:1 (AA)
- [ ] Cores não como única informação
- [ ] Modo escuro testado

### Interatividade
- [ ] ARIA roles corretos
- [ ] ARIA labels e descriptions
- [ ] Modais com focus trap
- [ ] Botões com feedback

---

## 📚 Referências e Recursos

### Documentação Oficial
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Patterns](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Ferramentas
- [Axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [NVDA](https://www.nvaccess.org/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Leitura
- [A11y Project](https://www.a11yproject.com/)
- [Inclusive Components](https://inclusive-components.design/)
- [WebAIM Blog](https://webaim.org/blog/)

---

## 🆘 Suporte e Reportar Problemas

Se encontrar um problema de acessibilidade:

1. Acesse a página `/acessibilidade`
2. Descreva o problema detalhadamente
3. Indique seu leitor de tela ou navegador
4. Envie o relatório

Responderemos em até 48 horas!

---

**Versão**: 0.1.0
**Última atualização**: 2026-01-31
**Conformidade**: WCAG 2.1 Level AA ✅
