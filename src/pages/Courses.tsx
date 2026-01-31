import React from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Courses: React.FC = () => {
  return (
    <main id="main-content" role="main" className="flex-grow">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 font-heading">Explore Nossos Cursos</h1>

        {/* Filters */}
        <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-lg font-bold mb-6">Filtros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Input
              label="Buscar cursos"
              placeholder="Digite o nome do curso..."
              type="text"
            />
            <div>
              <label className="block font-semibold mb-2">Nível</label>
              <select className="w-full px-4 py-2.5 rounded border-2 border-gray-200 dark:bg-gray-700 dark:border-gray-600 focus-visible:outline-2 focus-visible:outline-primary-600">
                <option>Todos</option>
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-2">Categoria</label>
              <select className="w-full px-4 py-2.5 rounded border-2 border-gray-200 dark:bg-gray-700 dark:border-gray-600 focus-visible:outline-2 focus-visible:outline-primary-600">
                <option>Todas</option>
                <option>Cores</option>
                <option>Tipografia</option>
                <option>Layout</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">Filtrar</Button>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border dark:border-gray-700"
            >
              <div className="bg-gradient-to-br from-primary-400 to-secondary-400 h-48 flex items-center justify-center">
                <span className="text-6xl">📚</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Curso {i}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  Descrição completa do curso com informações sobre o que será aprendido.
                </p>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>Iniciante</span>
                  <span>2h 30min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">⭐ 4.8 (120)</span>
                  <Button variant="primary" size="sm">
                    Ver
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Courses;
