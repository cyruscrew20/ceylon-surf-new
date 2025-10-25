import { Facebook, Instagram } from 'lucide-react';
import navLogo from '../assets/nav-logo.svg';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { label: 'HOME', page: 'home' },
    { label: 'OUR STORY', page: 'our-story' },
    { label: 'PORTFOLIO', page: 'portfolio' },
    { label: 'PACKAGES', page: 'packages' },
    { label: 'BLOG', page: 'blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center"
        >
          <img src={navLogo} alt="Ceylon Surf Diary" className="h-12" />
        </button>

        <div className="flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => onNavigate(item.page)}
                  className={`text-sm tracking-wide transition-colors ${
                    currentPage === item.page
                      ? 'text-black font-medium'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
