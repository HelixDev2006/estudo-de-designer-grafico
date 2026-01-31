import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Pular para o conteúdo principal
      </a>

      <nav className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-primary-600 hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 rounded"
          >
            📐 Design
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <Link
                to="/cursos"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                to="/acessibilidade"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Acessibilidade
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu de navegação"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4 border-t dark:border-gray-700">
            <li>
              <Link
                to="/cursos"
                className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                to="/acessibilidade"
                className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Acessibilidade
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
