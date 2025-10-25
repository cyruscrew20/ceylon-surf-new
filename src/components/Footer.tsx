import { Facebook, Instagram } from 'lucide-react';
import navLogo from '../assets/nav-logo.svg';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <img src={navLogo} alt="Ceylon Surf Diary" className="h-16 mb-4" />
          </div>

          <div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-600 hover:text-black transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('our-story')}
                  className="text-gray-600 hover:text-black transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="text-gray-600 hover:text-black transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="text-gray-600 hover:text-black transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="text-gray-600 hover:text-black transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p
              className="text-gray-600 mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              +94 76 76 36 567
            </p>
            <p
              className="text-gray-600 mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              ceylonsurfdiary@gmail.com
            </p>
            <p
              className="text-gray-600 mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Upukai Surf Shop
            </p>
            <p
              className="text-gray-600"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Weligama, Sri Lanka
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 pt-8 border-t border-gray-100">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
