import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home: React.FC = () => {
  return (
    <main id="main-content" role="main" className="flex-grow">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-heading">
            Domina o Design Gráfico Moderno
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-primary-100 max-w-2xl">
            Aprenda cores, tipografia, layout e composição com nossa plataforma educativa
            intuitiva e totalmente acessível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/cursos">
              <Button size="lg" className="w-full sm:w-auto">
                Explorar Cursos
              </Button>
            </Link>
            <Link to="/acessibilidade">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Acessibilidade
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading">
          Por que escolher nosso site?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="elevated">
            <h3 className="text-2xl font-bold mb-4 text-primary-600">📚 Cursos Completos</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Currículo estruturado desde o básico até o avançado, com videosaulas, exercícios
              e recursos práticos.
            </p>
          </Card>
          <Card variant="elevated">
            <h3 className="text-2xl font-bold mb-4 text-primary-600">♿ Acessível</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              WCAG 2.1 AA compliant. Navegação por teclado, leitores de tela, modo escuro,
              aumento de fonte e muito mais.
            </p>
          </Card>
          <Card variant="elevated">
            <h3 className="text-2xl font-bold mb-4 text-primary-600">🎨 Ferramentas Práticas</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Gerador de paletas, guias de tipografia, analisadores de contraste e muito
              mais para praticar.
            </p>
          </Card>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading">
            Cursos Populares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Cards */}
            {[1, 2, 3].map((i) => (
              <Card key={i} variant="outlined" className="hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-40 rounded mb-4 flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Curso {i}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Descrição do curso com informações relevantes sobre o conteúdo.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">⭐ 4.8 (120)</span>
                  <span className="text-sm font-semibold text-primary-600">2h 30min</span>
                </div>
                <Button variant="tertiary" className="w-full">
                  Ver Curso
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Pronto para começar sua jornada em design?
          </h2>
          <p className="text-lg mb-8 text-primary-100">
            Junte-se a milhares de estudantes aprendendo design gráfico de forma acessível e intuitiva.
          </p>
          <Link to="/cursos">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Explorar Todos os Cursos
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
