import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';

const Accessibility: React.FC = () => {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    fontSize: 'normal',
    highContrast: false,
    reducedMotion: false,
    dyslexiaFont: false,
    theme: 'light',
  });

  const handleSaveSettings = () => {
    localStorage.setItem('accessibility', JSON.stringify(accessibilitySettings));
    alert('Configurações de acessibilidade salvas com sucesso!');
  };

  return (
    <main id="main-content" role="main" className="flex-grow">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 font-heading">Acessibilidade</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          Nosso site é desenvolvido com foco total em acessibilidade. Aqui você encontra informações
          sobre como usar a plataforma com seu leitor de tela, navegação por teclado e outras
          funcionalidades acessíveis.
        </p>

        {/* Keyboard Navigation */}
        <section className="mb-12">
          <Card variant="elevated">
            <h2 className="text-2xl font-bold mb-6 font-heading">⌨️ Navegação por Teclado</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="font-semibold min-w-[100px]">Tab</span>
                <span>Navegar entre elementos interativos</span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold min-w-[100px]">Shift + Tab</span>
                <span>Navegar para trás</span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold min-w-[100px]">Enter / Space</span>
                <span>Ativar botões e links</span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold min-w-[100px]">Escape</span>
                <span>Fechar modais e menus</span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold min-w-[100px]">Ctrl + F</span>
                <span>Buscar na página</span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold min-w-[100px]">Skip Link</span>
                <span>Pressione Tab na página inicial para acessar o link de navegação</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Screen Reader Support */}
        <section className="mb-12">
          <Card variant="elevated">
            <h2 className="text-2xl font-bold mb-6 font-heading">🔊 Suporte a Leitores de Tela</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Este site é totalmente compatível com os principais leitores de tela:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span>✓</span> NVDA (Windows - Gratuito)
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span> JAWS (Windows - Pago)
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span> VoiceOver (Mac/iOS - Integrado)
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span> TalkBack (Android - Integrado)
              </li>
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Todos os elementos da página possuem rótulos ARIA apropriados e estrutura semântica
              HTML5 para melhor compreensão pelos leitores de tela.
            </p>
          </Card>
        </section>

        {/* Accessibility Settings */}
        <section className="mb-12">
          <Card variant="elevated">
            <h2 className="text-2xl font-bold mb-6 font-heading">🎨 Personalizações de Acessibilidade</h2>

            <div className="space-y-6">
              {/* Font Size */}
              <div>
                <label htmlFor="font-size" className="block font-semibold mb-3">
                  Tamanho da Fonte
                </label>
                <select
                  id="font-size"
                  value={accessibilitySettings.fontSize}
                  onChange={(e) =>
                    setAccessibilitySettings({
                      ...accessibilitySettings,
                      fontSize: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2.5 rounded border-2 border-gray-200 dark:bg-gray-700 dark:border-gray-600 focus-visible:outline-2 focus-visible:outline-primary-600"
                >
                  <option value="normal">Normal</option>
                  <option value="large">Grande</option>
                  <option value="x-large">Extra Grande</option>
                  <option value="xx-large">Muito Grande</option>
                </select>
              </div>

              {/* Theme */}
              <div>
                <label htmlFor="theme" className="block font-semibold mb-3">
                  Tema
                </label>
                <select
                  id="theme"
                  value={accessibilitySettings.theme}
                  onChange={(e) =>
                    setAccessibilitySettings({
                      ...accessibilitySettings,
                      theme: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2.5 rounded border-2 border-gray-200 dark:bg-gray-700 dark:border-gray-600 focus-visible:outline-2 focus-visible:outline-primary-600"
                >
                  <option value="light">Claro</option>
                  <option value="dark">Escuro</option>
                  <option value="auto">Automático</option>
                </select>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={accessibilitySettings.highContrast}
                    onChange={(e) =>
                      setAccessibilitySettings({
                        ...accessibilitySettings,
                        highContrast: e.target.checked,
                      })
                    }
                    className="w-5 h-5 rounded focus-visible:outline-2 focus-visible:outline-primary-600"
                  />
                  <span>Alto Contraste</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={accessibilitySettings.reducedMotion}
                    onChange={(e) =>
                      setAccessibilitySettings({
                        ...accessibilitySettings,
                        reducedMotion: e.target.checked,
                      })
                    }
                    className="w-5 h-5 rounded focus-visible:outline-2 focus-visible:outline-primary-600"
                  />
                  <span>Reduzir Movimento</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={accessibilitySettings.dyslexiaFont}
                    onChange={(e) =>
                      setAccessibilitySettings({
                        ...accessibilitySettings,
                        dyslexiaFont: e.target.checked,
                      })
                    }
                    className="w-5 h-5 rounded focus-visible:outline-2 focus-visible:outline-primary-600"
                  />
                  <span>Fonte para Dislexia</span>
                </label>
              </div>

              <Button onClick={handleSaveSettings} className="w-full mt-6">
                Salvar Configurações
              </Button>
            </div>
          </Card>
        </section>

        {/* Standards Compliance */}
        <section className="mb-12">
          <Card variant="elevated">
            <h2 className="text-2xl font-bold mb-6 font-heading">✅ Conformidade com Padrões</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">WCAG 2.1 Level AA</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Nosso site segue as diretrizes de acessibilidade web internacionais.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">HTML5 Semântico</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Estrutura HTML adequada para melhor compreensão por tecnologias assistivas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">ARIA Labels</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Atributos ARIA para melhorar a experiência com leitores de tela.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Contraste de Cores</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Razão de contraste mínima de 4.5:1 para garantir legibilidade.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Contact for Issues */}
        <section>
          <Card variant="outlined">
            <h2 className="text-2xl font-bold mb-4 font-heading">Encontrou um problema?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Se você encontrar algum problema de acessibilidade, por favor nos contacte para que
              possamos corrigir rapidamente.
            </p>
            <Input
              label="Seu e-mail"
              type="email"
              placeholder="seu-email@example.com"
            />
            <Button className="mt-6 w-full">Reportar Problema</Button>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Accessibility;
