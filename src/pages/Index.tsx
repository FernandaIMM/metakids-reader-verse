import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, Users, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import AOS from 'aos';

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate__animated animate__fadeInUp">
                Descubre el mágico mundo de la <span className="text-primary">lectura</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate__animated animate__fadeInUp animate__delay-1s">
                Crea hábitos de lectura mientras te diviertes en el metaverso. ¡Aventuras, medallas y nuevos amigos te esperan!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate__animated animate__fadeInUp animate__delay-2s">
                <Link
                  to="/biblioteca"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Comienza a leer hoy
                </Link>
                <Link
                  to="/club-metaverso"
                  className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg shadow-lg hover:bg-secondary/90 transition-all hover:scale-105"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Agenda tu primer club
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-aos="fade-up">
              ¿Cómo funciona?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: BookOpen, title: 'Lee o Escucha', desc: 'Elige entre leer o escuchar cuentos narrados profesionalmente' },
                { icon: Trophy, title: 'Gana Medallas', desc: 'Mantén tu racha diaria y desbloquea medallas especiales' },
                { icon: Users, title: 'Club Metaverso', desc: 'Únete a sesiones virtuales y comparte con otros niños' }
              ].map((step, i) => (
                <div key={i} data-aos="zoom-in" data-aos-delay={i * 100} className="bg-card rounded-xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Próxima sesión countdown */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto" data-aos="fade-up">
              <CountdownTimer targetDate="2025-10-04T10:00:00-05:00" />
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center" data-aos="fade-up">
            <Sparkles className="w-12 h-12 text-accent-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¡Únete a MetaKids hoy!
            </h2>
            <Link
              to="/biblioteca"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Explorar Biblioteca
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
