import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import OurStoryPage from './pages/OurStoryPage';
import PackagesPage from './pages/PackagesPage';
import ComingSoonPage from './pages/ComingSoonPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'our-story':
        return <OurStoryPage />;
      case 'packages':
        return <PackagesPage />;
      case 'blog':
        return <ComingSoonPage title="Blog" />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
