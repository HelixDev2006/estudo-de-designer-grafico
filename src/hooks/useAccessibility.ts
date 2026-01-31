import { useEffect, useState } from 'react';
import { AccessibilitySettings } from '../types';

const defaultSettings: AccessibilitySettings = {
  fontSize: 'normal',
  highContrast: false,
  reducedMotion: false,
  dyslexiaFont: false,
  increasedLetterSpacing: false,
  increasedLineHeight: false,
  theme: 'light',
};

export const useAccessibility = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carregar configurações salvas
  useEffect(() => {
    const saved = localStorage.getItem('accessibility');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (error) {
        console.error('Erro ao carregar configurações de acessibilidade:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Aplicar configurações ao documento
  useEffect(() => {
    if (!isLoaded) return;

    const html = document.documentElement;

    // Aplicar tema
    html.setAttribute('data-theme', settings.theme);

    // Aplicar tamanho de fonte
    html.setAttribute('data-text-size', settings.fontSize);

    // Aplicar alto contraste
    if (settings.highContrast) {
      html.classList.add('high-contrast');
    } else {
      html.classList.remove('high-contrast');
    }

    // Aplicar fonte para dislexia
    if (settings.dyslexiaFont) {
      html.classList.add('dyslexia-font');
    } else {
      html.classList.remove('dyslexia-font');
    }

    // Aplicar espaçamento aumentado
    if (settings.increasedLetterSpacing) {
      html.setAttribute('data-letter-spacing', 'increased');
    } else {
      html.removeAttribute('data-letter-spacing');
    }

    // Aplicar altura de linha aumentada
    if (settings.increasedLineHeight) {
      html.setAttribute('data-line-height', 'increased');
    } else {
      html.removeAttribute('data-line-height');
    }

    // Salvar configurações
    localStorage.setItem('accessibility', JSON.stringify(settings));
  }, [settings, isLoaded]);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('accessibility');
  };

  return {
    settings,
    updateSettings,
    resetSettings,
    isLoaded,
  };
};
