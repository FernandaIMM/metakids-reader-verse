import { Link, useLocation } from 'react-router-dom';
import { Book, Menu, X, Type, Accessibility } from 'lucide-react';
import { useState } from 'react';
import { useAccessibility } from '@/hooks/useAccessibility';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { increaseFontSize, decreaseFontSize, toggleDyslexiaFont, dyslexiaFont } = useAccessibility();

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/como-funciona', label: '¿Cómo funciona?' },
    { path: '/biblioteca', label: 'Biblioteca' },
    { path: '/retos', label: 'Retos' },
    { path: '/club-metaverso', label: 'Club Metaverso' },
    { path: '/para-padres', label: 'Para Padres' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contacto', label: 'Contacto' }
  ];

  return (
    <nav className="bg-card shadow-lg sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            <Book className="w-8 h-8" />
            <span>MetaKids</span>
          </Link>

          {/* Accessibility Controls - Desktop */}
          <div className="hidden lg:flex items-center gap-2 mr-4">
            <button
              onClick={decreaseFontSize}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Disminuir tamaño de fuente"
              title="A-"
            >
              <Type className="w-4 h-4" />
            </button>
            <button
              onClick={increaseFontSize}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Aumentar tamaño de fuente"
              title="A+"
            >
              <Type className="w-6 h-6" />
            </button>
            <button
              onClick={toggleDyslexiaFont}
              className={`p-2 rounded-lg transition-colors ${dyslexiaFont ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
              aria-label="Fuente amigable para dislexia"
              title="Fuente para dislexia"
            >
              <Accessibility className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all font-medium ${
                  location.pathname === link.path
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all font-medium ${
                    location.pathname === link.path
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Accessibility Controls */}
              <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-border">
                <button
                  onClick={decreaseFontSize}
                  className="p-3 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Disminuir tamaño de fuente"
                >
                  <Type className="w-4 h-4" />
                  <span className="text-xs">A-</span>
                </button>
                <button
                  onClick={increaseFontSize}
                  className="p-3 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Aumentar tamaño de fuente"
                >
                  <Type className="w-6 h-6" />
                  <span className="text-xs">A+</span>
                </button>
                <button
                  onClick={toggleDyslexiaFont}
                  className={`p-3 rounded-lg transition-colors ${dyslexiaFont ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                  aria-label="Fuente amigable para dislexia"
                >
                  <Accessibility className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
