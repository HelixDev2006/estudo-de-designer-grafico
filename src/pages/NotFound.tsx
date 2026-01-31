import React from 'react';
import Card from '../components/ui/Card';

const NotFound: React.FC = () => {
  return (
    <main id="main-content" role="main" className="flex-grow flex items-center justify-center py-20 px-4">
      <Card className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Página não encontrada</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Desculpe, a página que você está procurando não existe.
        </p>
        <a href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
          Voltar para a página inicial
        </a>
      </Card>
    </main>
  );
};

export default NotFound;
