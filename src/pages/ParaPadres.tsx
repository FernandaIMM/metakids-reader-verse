import { useEffect } from 'react';
import { Brain, Heart, Users, TrendingUp, Shield, Eye, BarChart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';

const ParaPadres = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const benefits = [
    {
      icon: Brain,
      title: 'Desarrollo Cognitivo',
      description: 'La lectura regular mejora la concentración, comprensión y habilidades lingüísticas de los niños.',
      color: 'from-primary/20 to-secondary/20'
    },
    {
      icon: Heart,
      title: 'Inteligencia Emocional',
      description: 'Los cuentos ayudan a los niños a entender emociones, desarrollar empatía y procesar experiencias.',
      color: 'from-secondary/20 to-accent/20'
    },
    {
      icon: Users,
      title: 'Habilidades Sociales',
      description: 'El club del metaverso fomenta la comunicación, escucha activa y respeto por las opiniones de otros.',
      color: 'from-accent/20 to-primary/20'
    },
    {
      icon: TrendingUp,
      title: 'Hábitos Constantes',
      description: 'El sistema de rachas y medallas motiva a los niños a mantener una rutina diaria de lectura.',
      color: 'from-primary/20 to-secondary/20'
    }
  ];

  const safetyFeatures = [
    { icon: Shield, text: 'Moderación activa en todas las sesiones del metaverso' },
    { icon: Eye, text: 'Monitoreo de contenido inapropiado en tiempo real' },
    { icon: Users, text: 'Grupos reducidos (máximo 10 niños por sesión)' },
    { icon: Shield, text: 'Sin publicidad ni enlaces externos' },
    { icon: Eye, text: 'Reportes de progreso semanales para padres' },
    { icon: Users, text: 'Chat desactivado, solo comunicación por voz moderada' }
  ];

  // Datos ficticios de progreso
  const progressData = {
    daysRead: 23,
    booksCompleted: 15,
    currentStreak: 7,
    totalMinutes: 345,
    favoriteCategory: 'Aventuras',
    weeklyGoalProgress: 85
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Información <span className="text-primary">para Padres</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Descubre cómo MetaKids ayuda a desarrollar el amor por la lectura en tus hijos de manera segura, divertida y efectiva.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios Pedagógicos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-aos="fade-up">
              Beneficios Pedagógicos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Privacidad y Seguridad */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-aos="fade-up">
                Privacidad y Seguridad
              </h2>
              
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border mb-8" data-aos="fade-up">
                <p className="text-lg text-muted-foreground mb-6">
                  La seguridad de los niños es nuestra máxima prioridad. MetaKids cumple con todas las regulaciones de protección de datos infantiles (COPPA, GDPR-K).
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {safetyFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        data-aos="fade-right"
                        data-aos-delay={index * 50}
                        className="flex items-center gap-3 p-4 bg-secondary/5 rounded-lg border border-secondary/10"
                      >
                        <Icon className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20" data-aos="fade-up">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-accent-foreground" />
                  Control Parental
                </h3>
                <p className="text-muted-foreground">
                  Como padre, tienes acceso completo al historial de lectura, progreso y participación en el club. Puedes configurar límites de tiempo, aprobar sesiones del metaverso y recibir notificaciones de actividad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tablero de Progreso (ejemplo) */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-4" data-aos="fade-up">
                Tablero de Progreso
              </h2>
              <p className="text-center text-muted-foreground mb-12" data-aos="fade-up">
                Ejemplo de lo que verás en tu panel parental
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div data-aos="zoom-in" className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-6 text-center shadow-lg border border-primary/20">
                  <BarChart className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-primary mb-2">{progressData.daysRead}</div>
                  <div className="text-sm text-muted-foreground">Días de lectura</div>
                </div>

                <div data-aos="zoom-in" data-aos-delay="100" className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl p-6 text-center shadow-lg border border-secondary/20">
                  <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-secondary mb-2">{progressData.booksCompleted}</div>
                  <div className="text-sm text-muted-foreground">Cuentos completados</div>
                </div>

                <div data-aos="zoom-in" data-aos-delay="200" className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-6 text-center shadow-lg border border-accent/20">
                  <Heart className="w-12 h-12 text-accent-foreground mx-auto mb-3" />
                  <div className="text-4xl font-bold text-accent-foreground mb-2">{progressData.currentStreak}</div>
                  <div className="text-sm text-muted-foreground">Racha actual</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div data-aos="fade-right" className="bg-card rounded-xl p-6 shadow-lg border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">Tiempo de lectura</h3>
                  <div className="flex items-end justify-between mb-3">
                    <span className="text-3xl font-bold text-primary">{progressData.totalMinutes}</span>
                    <span className="text-sm text-muted-foreground">minutos este mes</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-3/4"></div>
                  </div>
                </div>

                <div data-aos="fade-left" className="bg-card rounded-xl p-6 shadow-lg border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">Categoría favorita</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-secondary">{progressData.favoriteCategory}</span>
                    <span className="text-4xl">📚</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Ha leído {Math.floor(progressData.booksCompleted * 0.4)} cuentos de esta categoría
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-aos="fade-up">
              Lo que dicen otros padres
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: 'María González',
                  role: 'Mamá de Sofía (7 años)',
                  text: 'En solo 3 semanas, mi hija pasó de rechazar la lectura a pedirme que la deje leer "un cuento más". ¡Increíble!'
                },
                {
                  name: 'Carlos Ramírez',
                  role: 'Papá de Mateo (9 años)',
                  text: 'El club del metaverso es genial. Mi hijo hace amigos y discute libros como todo un crítico literario.'
                },
                {
                  name: 'Ana López',
                  role: 'Mamá de twins (6 años)',
                  text: 'Me encanta poder ver su progreso. Los reportes semanales me ayudan a entender qué les gusta leer.'
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Regístrate gratis y empieza a construir el hábito de lectura en tus hijos hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Crear cuenta gratis
              </a>
              <a
                href="/faq"
                className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-semibold rounded-lg shadow-lg border border-border hover:bg-muted transition-all"
              >
                Ver preguntas frecuentes
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ParaPadres;
