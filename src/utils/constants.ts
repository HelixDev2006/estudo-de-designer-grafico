// Navigation Links
export const NAV_LINKS = [
  { label: 'Cursos', href: '/cursos' },
  { label: 'Ferramentas', href: '/ferramentas' },
  { label: 'Glossário', href: '/glossario' },
  { label: 'Acessibilidade', href: '/acessibilidade' },
] as const;

// Course Categories
export const COURSE_CATEGORIES = {
  cores: 'Cores e Paletas',
  tipografia: 'Tipografia',
  layout: 'Layout e Composição',
  composicao: 'Composição Visual',
  ilustracao: 'Ilustração',
  fotografia: 'Fotografia',
  web: 'Design Web',
} as const;

// Course Levels
export const COURSE_LEVELS = {
  iniciante: 'Iniciante',
  intermediario: 'Intermediário',
  avancado: 'Avançado',
} as const;

// Colors for design
export const DESIGN_COLORS = {
  primary: '#6366F1',
  secondary: '#F59E0B',
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
} as const;

// Common Font Pairs
export const FONT_PAIRS = [
  {
    name: 'Clássico Elegante',
    heading: 'Playfair Display',
    body: 'Lato',
  },
  {
    name: 'Moderno Limpo',
    heading: 'Poppins',
    body: 'Inter',
  },
  {
    name: 'Amigável Casual',
    heading: 'Raleway',
    body: 'Open Sans',
  },
  {
    name: 'Minimalista Bold',
    heading: 'Montserrat',
    body: 'Roboto',
  },
] as const;

// Loading Messages
export const LOADING_MESSAGES = [
  'Carregando recursos visuais...',
  'Preparando conceitos de design...',
  'Sincronizando progresso...',
  'Organizando ferramentas...',
] as const;

// Accessibility Features
export const ACCESSIBILITY_FEATURES = {
  fontSize: ['normal', 'large', 'x-large', 'xx-large'],
  letterSpacing: ['normal', 'increased', 'very-increased'],
  lineHeight: ['normal', 'increased', 'very-increased'],
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  network: 'Erro de conexão. Por favor, verifique sua internet.',
  notFound: 'Conteúdo não encontrado.',
  unauthorized: 'Acesso não autorizado.',
  server: 'Erro no servidor. Tente novamente mais tarde.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  courseClaimed: 'Curso iniciado com sucesso!',
  progressSaved: 'Progresso salvo!',
  certificateEarned: 'Parabéns! Você conquistou um certificado!',
} as const;
