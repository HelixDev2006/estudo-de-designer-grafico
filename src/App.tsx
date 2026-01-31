import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

// Hooks
import { useAccessibility } from './hooks/useAccessibility';

// Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import Accessibility from './pages/Accessibility';
import NotFound from './pages/NotFound';

// Styles
import './styles/globals.css';

function App() {
  const { isLoaded } = useAccessibility();

  if (!isLoaded) {
    return <div className="flex items-center justify-center min-h-screen">Carregando...</div>;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/acessibilidade" element={<Accessibility />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
