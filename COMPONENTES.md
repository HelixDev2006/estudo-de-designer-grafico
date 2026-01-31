# 📚 Documentação de Componentes

## UI Components

### Button

Componente de botão versátil com múltiplas variantes e tamanhos.

```tsx
import Button from '@/components/ui/Button';

<Button variant="primary" size="md">
  Clique aqui
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'tertiary' | 'ghost' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `isLoading`: boolean (default: false)
- `disabled`: boolean (default: false)

---

### Card

Componente de card para agrupar conteúdo relacionado.

```tsx
import Card from '@/components/ui/Card';

<Card variant="elevated">
  <h3>Título do Card</h3>
  <p>Conteúdo do card</p>
</Card>
```

**Props:**
- `variant`: 'elevated' | 'outlined' (default: 'elevated')
- `children`: ReactNode (obrigatório)

---

### Input

Campo de entrada de dados com validação integrada.

```tsx
import Input from '@/components/ui/Input';

<Input
  label="E-mail"
  type="email"
  placeholder="seu-email@example.com"
  error="E-mail inválido"
  helperText="Digite um e-mail válido"
/>
```

**Props:**
- `label`: string (opcional)
- `error`: string (opcional)
- `helperText`: string (opcional)
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `type`: string (default: 'text')
- `required`: boolean (default: false)

---

## Common Components

### Header

Cabeçalho da aplicação com navegação responsiva.

```tsx
import Header from '@/components/common/Header';

<Header title="Design Gráfico" />
```

**Funcionalidades:**
- ✅ Navegação responsiva com mobile menu
- ✅ Skip link para acessibilidade
- ✅ Links acessíveis com focus-visible
- ✅ Menu hamburger em mobile

---

### Footer

Rodapé com links e informações.

```tsx
import Footer from '@/components/common/Footer';

<Footer />
```

**Conteúdo:**
- Links para seções principais
- Links para redes sociais
- Informações de copyright
- Links legais (privacidade, termos)

---

## Acessibilidade

### Skip Link
Automaticamente incluído no Header. Pressione **Tab** na página inicial para acessar.

### Navegação por Teclado
Todos os componentes suportam navegação completa por teclado:
- **Tab**: Próximo elemento interativo
- **Shift+Tab**: Elemento anterior
- **Enter/Space**: Ativar botão
- **Escape**: Fechar modal

### Leitores de Tela
Todos os componentes possuem:
- `aria-labels` descritivos
- `aria-describedby` para erros
- `aria-expanded` para elementos expansíveis
- `aria-busy` para estados de carregamento

---

## Padrões de Uso

### Formulário Acessível

```tsx
<form>
  <Input
    id="email"
    label="E-mail"
    type="email"
    required
    error={emailError}
    aria-required="true"
  />
  <Input
    id="password"
    label="Senha"
    type="password"
    required
    aria-required="true"
  />
  <Button type="submit">
    Entrar
  </Button>
</form>
```

### Card Grid Responsivo

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {courses.map(course => (
    <Card key={course.id} variant="elevated">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <Button className="mt-4">Ver Curso</Button>
    </Card>
  ))}
</div>
```

### Carregamento com Indicador

```tsx
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async () => {
  setIsLoading(true);
  try {
    // operação
  } finally {
    setIsLoading(false);
  }
};

<Button isLoading={isLoading} onClick={handleSubmit}>
  {isLoading ? 'Enviando...' : 'Enviar'}
</Button>
```

---

## Próximos Componentes (Fase 2)

- [ ] Modal/Dialog
- [ ] Tabs
- [ ] Accordion
- [ ] Tooltip
- [ ] Breadcrumb
- [ ] Select
- [ ] Checkbox
- [ ] Radio
- [ ] Search
- [ ] Loading Spinner
- [ ] Alert
- [ ] Toast
- [ ] Pagination
- [ ] Slider
- [ ] Toggle

---

## Testes

Para testar acessibilidade dos componentes:

1. **Navegação por Teclado**: Use Tab/Shift+Tab
2. **Leitor de Tela**: Use NVDA ou VoiceOver
3. **Zoom**: Pressione Ctrl++ até 200%
4. **Modo Escuro**: F12 > (...) > Rendering > emulate CSS media feature prefers-color-scheme

---

**Versão**: 0.1.0
