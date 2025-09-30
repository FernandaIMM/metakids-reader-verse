import { useEffect } from 'react';
import { Flame, Target, Trophy, Star, Award, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';
import { useReadingStreak } from '@/hooks/useReadingStreak';
import { toast } from '@/hooks/use-toast';

const Retos = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const { streak, weekProgress, totalDaysRead, booksCompleted, markDayAsRead, incrementBooksCompleted } = useReadingStreak();

  const medals = [
    {
      id: 'first-day',
      title: 'Primer Día',
      description: 'Completa tu primera lectura',
      icon: Star,
      unlocked: totalDaysRead >= 1,
      requirement: 1
    },
    {
      id: 'week-warrior',
      title: 'Guerrero Semanal',
      description: 'Lee 7 días seguidos',
      icon: Flame,
      unlocked: streak >= 7,
      requirement: 7
    },
    {
      id: 'book-lover',
      title: 'Amante de Libros',
      description: 'Completa 10 cuentos',
      icon: Trophy,
      unlocked: booksCompleted >= 10,
      requirement: 10
    },
    {
      id: 'month-master',
      title: 'Maestro del Mes',
      description: 'Lee 30 días seguidos',
      icon: Award,
      unlocked: streak >= 30,
      requirement: 30
    }
  ];

  const handleReadToday = () => {
    markDayAsRead();
    toast({
      title: "¡Excelente! 🎉",
      description: `Has leído hoy. Racha actual: ${streak + 1} días`,
    });
  };

  const handleCompleteBook = () => {
    incrementBooksCompleted();
    toast({
      title: "¡Cuento completado! 📚",
      description: `Total de cuentos: ${booksCompleted + 1}`,
    });
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
                Retos de <span className="text-primary">Lectura</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Construye tu racha diaria, completa retos semanales y desbloquea medallas especiales. ¡La constancia es la clave del éxito!
              </p>
            </div>
          </div>
        </section>

        {/* Racha actual */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Racha */}
                <div data-aos="fade-up" className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-8 text-center shadow-xl border border-primary/20">
                  <Flame className="w-16 h-16 text-primary mx-auto mb-4" />
                  <div className="text-5xl font-bold text-primary mb-2">{streak}</div>
                  <div className="text-sm text-muted-foreground">Días seguidos</div>
                </div>

                {/* Progreso semanal */}
                <div data-aos="fade-up" data-aos-delay="100" className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl p-8 text-center shadow-xl border border-secondary/20">
                  <Target className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <div className="text-5xl font-bold text-secondary mb-2">{weekProgress}/7</div>
                  <div className="text-sm text-muted-foreground">Esta semana</div>
                </div>

                {/* Cuentos completados */}
                <div data-aos="fade-up" data-aos-delay="200" className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-8 text-center shadow-xl border border-accent/20">
                  <Trophy className="w-16 h-16 text-accent-foreground mx-auto mb-4" />
                  <div className="text-5xl font-bold text-accent-foreground mb-2">{booksCompleted}</div>
                  <div className="text-sm text-muted-foreground">Cuentos completados</div>
                </div>
              </div>

              {/* Barra de progreso semanal */}
              <div data-aos="fade-up" className="bg-card rounded-xl p-8 shadow-lg border border-border mb-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-secondary" />
                  Progreso esta semana
                </h3>
                <div className="flex gap-2 mb-4">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-12 rounded-lg flex items-center justify-center font-bold transition-all ${
                        i < weekProgress
                          ? 'bg-gradient-to-br from-secondary to-primary text-white scale-105'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {i < weekProgress ? <CheckCircle2 className="w-6 h-6" /> : i + 1}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  {weekProgress === 7 
                    ? '¡Felicitaciones! Completaste la semana 🎉' 
                    : `Te faltan ${7 - weekProgress} días para completar la semana`}
                </p>
              </div>

              {/* Botones de acción */}
              <div data-aos="fade-up" className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleReadToday}
                  className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
                >
                  ✓ Marcar lectura de hoy
                </button>
                <button
                  onClick={handleCompleteBook}
                  className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg shadow-lg hover:bg-secondary/90 transition-all hover:scale-105"
                >
                  📚 Completé un cuento
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Medallas */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-aos="fade-up">
                Tus Medallas
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {medals.map((medal, index) => {
                  const Icon = medal.icon;
                  return (
                    <div
                      key={medal.id}
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                      className={`bg-card rounded-xl p-6 shadow-lg border-2 text-center transition-all ${
                        medal.unlocked
                          ? 'border-accent scale-105 hover:scale-110'
                          : 'border-border opacity-60 grayscale'
                      }`}
                    >
                      <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
                        medal.unlocked
                          ? 'bg-gradient-to-br from-accent/30 to-primary/30'
                          : 'bg-muted'
                      }`}>
                        <Icon className={`w-10 h-10 ${medal.unlocked ? 'text-accent-foreground' : 'text-muted-foreground'}`} />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{medal.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{medal.description}</p>
                      {medal.unlocked ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-accent-foreground text-xs font-semibold rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          Desbloqueada
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          Requisito: {medal.requirement}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Listo para tu próxima aventura?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explora la biblioteca y elige un nuevo cuento para mantener tu racha activa.
            </p>
            <a
              href="/biblioteca"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Ir a la Biblioteca
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Retos;
