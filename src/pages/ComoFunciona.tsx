import { useEffect } from 'react';
import { BookOpen, Headphones, Trophy, Shield, Eye, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';

const ComoFunciona = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const steps = [
    {
      icon: BookOpen,
      title: '1. Elige tu cuento',
      description: 'Explora nuestra biblioteca digital con cuentos clasificados por edad, tema y duración. Cada historia está diseñada para captar la atención de los niños.',
      color: 'text-primary'
    },
    {
      icon: Headphones,
      title: '2. Lee o escucha',
      description: 'Los niños pueden leer por su cuenta o activar la narración de audio con voces profesionales. Perfecto para lectores principiantes o momentos de relajación.',
      color: 'text-secondary'
    },
    {
      icon: Trophy,
      title: '3. Gana medallas y rachas',
      description: 'Cada día de lectura suma a tu racha. Completa retos semanales y desbloquea medallas especiales. ¡La constancia se premia!',
      color: 'text-accent'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Seguridad y privacidad',
      description: 'Plataforma 100% segura. Sin publicidad. Moderación activa en el club del metaverso. Cumplimos con todas las normas de protección de datos infantiles.'
    },
    {
      icon: Eye,
      title: 'Accesibilidad',
      description: 'Controles de tamaño de fuente (A+/A-). Fuente especial para dislexia. Subtítulos en narración. Alto contraste. Navegación con teclado.'
    },
    {
      icon: Users,
      title: 'Club en el Metaverso',
      description: 'Sesiones semanales moderadas donde los niños discuten libros, comparten opiniones y hacen amigos en un entorno virtual seguro.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                ¿Cómo funciona <span className="text-primary">MetaKids</span>?
              </h1>
              <p className="text-lg text-muted-foreground">
                Tres pasos simples para crear el hábito de lectura en tus hijos mientras se divierten y aprenden.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 ${step.color}`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-aos="fade-up">
                El viaje de lectura
              </h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>
                
                <div className="space-y-12">
                  {[
                    { title: 'Registro', desc: 'Crea una cuenta gratuita y personaliza el perfil de tu hijo.' },
                    { title: 'Exploración', desc: 'Navega por la biblioteca y selecciona el primer cuento.' },
                    { title: 'Primera lectura', desc: 'Lee o escucha la historia. ¡Obtén tu primera medalla!' },
                    { title: 'Racha diaria', desc: 'Continúa leyendo cada día para mantener tu racha activa.' },
                    { title: 'Únete al club', desc: 'Participa en sesiones del metaverso y comparte tus historias favoritas.' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      data-aos="fade-left"
                      data-aos-delay={index * 100}
                      className="flex items-start gap-6"
                    >
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1 bg-card rounded-lg p-6 shadow-md border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-aos="fade-up">
              Características especiales
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a cientos de familias que ya están fomentando el amor por la lectura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Comienza gratis hoy
              </a>
              <a
                href="/biblioteca"
                className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-semibold rounded-lg shadow-lg border border-border hover:bg-muted transition-all"
              >
                Explora la biblioteca
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComoFunciona;
