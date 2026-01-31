import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-400">Design Gráfico</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Plataforma educativa completa para aprender design gráfico com foco em
              acessibilidade e experiência intuitiva.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Links do rodapé">
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/cursos"
                  className="text-gray-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 rounded"
                >
                  Cursos
                </Link>
              </li>
              <li>
                <Link
                  to="/acessibilidade"
                  className="text-gray-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 rounded"
                >
                  Acessibilidade
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Recursos">
            <h3 className="text-lg font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contato@designgrafico.com"
                  className="text-gray-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 rounded"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          {/* Social */}
          <nav aria-label="Redes sociais">
            <h3 className="text-lg font-bold mb-4">Siga-nos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 rounded"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 rounded"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 rounded"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Design Gráfico. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
