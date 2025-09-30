import { useEffect, useState } from 'react';
import { Video, Users, Calendar, Shield, Mic, Headphones, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import AOS from 'aos';

interface ClubSession {
  title: string;
  datetime: string;
  durationMin: number;
}

const ClubMetaverso = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [canJoin, setCanJoin] = useState(false);

  // JSON embebido de sesiones
  const clubSchedule: { timezone: string; sessions: ClubSession[] } = {
    timezone: "America/Bogota",
    sessions: [
      { title: "Club principiantes", datetime: "2025-10-04T10:00:00-05:00", durationMin: 45 },
      { title: "Club intermedio", datetime: "2025-10-05T10:00:00-05:00", durationMin: 45 },
      { title: "Club nocturno", datetime: "2025-10-08T18:30:00-05:00", durationMin: 45 }
    ]
  };

  // Encontrar la próxima sesión
  const now = new Date().getTime();
  const upcomingSessions = clubSchedule.sessions
    .map(session => ({
      ...session,
      date: new Date(session.datetime)
    }))
    .filter(session => session.date.getTime() > now)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const nextSession = upcomingSessions[0];

  // Comprobar si puede unirse (10 minutos antes)
  useEffect(() => {
    if (!nextSession) return;

    const checkCanJoin = () => {
      const timeUntilSession = nextSession.date.getTime() - new Date().getTime();
      const tenMinutes = 10 * 60 * 1000;
      setCanJoin(timeUntilSession <= tenMinutes && timeUntilSession > 0);
    };

    checkCanJoin();
    const interval = setInterval(checkCanJoin, 60000); // Revisar cada minuto

    return () => clearInterval(interval);
  }, [nextSession]);

  const rules = [
    { icon: Users, text: 'Respeta a todos los participantes' },
    { icon: Mic, text: 'Levanta la mano para hablar' },
    { icon: Shield, text: 'No compartas información personal' },
    { icon: Headphones, text: 'Usa audífonos para mejor audio' }
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
                Club de Lectura en el <span className="text-primary">Metaverso</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Únete a sesiones virtuales moderadas donde los niños comparten sus historias favoritas, hacen amigos y desarrollan amor por la lectura.
              </p>
            </div>
          </div>
        </section>

        {/* Próxima sesión y countdown */}
        {nextSession && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto space-y-8">
                <div data-aos="fade-up">
                  <CountdownTimer targetDate={nextSession.datetime} />
                </div>

                <div data-aos="fade-up" data-aos-delay="100" className="bg-card rounded-xl p-8 shadow-lg border border-border text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{nextSession.title}</h3>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-secondary" />
                      {nextSession.date.toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-secondary" />
                      {nextSession.date.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <span className="flex items-center gap-2">
                      <Video className="w-5 h-5 text-secondary" />
                      {nextSession.durationMin} minutos
                    </span>
                  </div>

                  <button
                    disabled={!canJoin}
                    className={`px-8 py-4 font-semibold rounded-lg shadow-lg transition-all ${
                      canJoin
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 cursor-pointer'
                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                    }`}
                  >
                    {canJoin ? '🚀 Entrar al Club Ahora' : '🔒 Disponible 10 min antes'}
                  </button>
                  
                  {!canJoin && (
                    <p className="text-sm text-muted-foreground mt-4">
                      El acceso se habilitará 10 minutos antes de la sesión
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Próximas sesiones */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-aos="fade-up">
                Agenda de Sesiones
              </h2>
              
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <div
                    key={index}
                    data-aos="fade-left"
                    data-aos-delay={index * 100}
                    className="bg-card rounded-xl p-6 shadow-lg border border-border flex flex-col sm:flex-row items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{session.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {session.date.toLocaleDateString('es-CO', { month: 'short', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {session.date.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Video className="w-4 h-4" />
                          {session.durationMin} min
                        </span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-secondary/10 text-secondary font-semibold rounded-lg hover:bg-secondary/20 transition-colors">
                      Recordarme
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reglas de convivencia */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-aos="fade-up">
                Reglas de Convivencia
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rules.map((rule, index) => {
                  const Icon = rule.icon;
                  return (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                      className="bg-card rounded-xl p-6 shadow-lg border border-border flex items-center gap-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-foreground font-medium">{rule.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Requisitos técnicos */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-8" data-aos="fade-up">
                Requisitos Técnicos
              </h2>
              
              <div data-aos="fade-up" className="bg-card rounded-xl p-8 shadow-lg border border-border">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-muted-foreground">Conexión a internet estable (mínimo 5 Mbps)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-muted-foreground">Navegador actualizado (Chrome, Firefox, Edge o Safari)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-muted-foreground">Audífonos o parlantes funcionales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-muted-foreground">Micrófono (opcional pero recomendado)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-muted-foreground">Cámara web (opcional)</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-foreground">
                    <strong>Nota:</strong> Un adulto debe estar presente durante la primera sesión para configurar el acceso y revisar las funciones de seguridad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Primera vez en el club?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lee sobre cómo funciona el club y qué esperar en tu primera sesión.
            </p>
            <a
              href="/como-funciona"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Aprende más
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ClubMetaverso;
