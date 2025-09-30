import { Link } from 'react-router-dom';
import { Book, Mail, Shield, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold text-primary">
              <Book className="w-6 h-6" />
              <span>MetaKids</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Fomentando el hábito de la lectura en niños a través del metaverso y la tecnología educativa.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-muted-foreground hover:text-primary transition-colors">
                  ¿Cómo funciona?
                </Link>
              </li>
              <li>
                <Link to="/biblioteca" className="text-muted-foreground hover:text-primary transition-colors">
                  Biblioteca
                </Link>
              </li>
              <li>
                <Link to="/retos" className="text-muted-foreground hover:text-primary transition-colors">
                  Retos de Lectura
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/club-metaverso" className="text-muted-foreground hover:text-primary transition-colors">
                  Club Metaverso
                </Link>
              </li>
              <li>
                <Link to="/para-padres" className="text-muted-foreground hover:text-primary transition-colors">
                  Para Padres
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Información</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-secondary" />
                <span>contacto@metakids.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-4 h-4 text-secondary" />
                <span>Privacidad garantizada</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Heart className="w-4 h-4 text-accent" />
                <span>Hecho con amor para niños</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MetaKids - Club Lectores. Todos los derechos reservados.</p>
          <p className="mt-2">
            <Link to="/faq" className="hover:text-primary transition-colors">Política de Privacidad</Link>
            {' • '}
            <Link to="/faq" className="hover:text-primary transition-colors">Términos de Uso</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
