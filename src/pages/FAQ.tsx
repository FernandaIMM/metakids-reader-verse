import { useEffect } from 'react';
import { HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const faqs = [
    {
      question: '¿Qué dispositivos son compatibles con MetaKids?',
      answer: 'MetaKids funciona en cualquier dispositivo con navegador web moderno: computadoras (Windows, Mac, Linux), tablets (iPad, Android) y smartphones. Para el club del metaverso recomendamos usar una tablet o computadora para mejor experiencia.'
    },
    {
      question: '¿Cuánto tiempo deben leer los niños cada día?',
      answer: 'Recomendamos 10-15 minutos diarios para niños de 4-6 años, y 15-30 minutos para niños de 7-10 años. Lo más importante es la constancia, no la duración. El sistema de rachas ayuda a crear este hábito naturalmente.'
    },
    {
      question: '¿MetaKids tiene algún costo?',
      answer: 'Ofrecemos un plan gratuito con acceso a 20 cuentos y 1 sesión mensual del club. El plan premium ($9.99/mes) incluye acceso ilimitado a toda la biblioteca (150+ cuentos), sesiones ilimitadas del metaverso y reportes avanzados para padres.'
    },
    {
      question: '¿Cómo protegen los datos de mi hijo?',
      answer: 'Cumplimos con COPPA, GDPR-K y todas las regulaciones de protección infantil. No vendemos datos, no hay publicidad, y toda la información está encriptada. Los padres tienen control total sobre la privacidad y pueden eliminar la cuenta en cualquier momento.'
    },
    {
      question: '¿Qué pasa en las sesiones del metaverso?',
      answer: 'Son reuniones virtuales moderadas (45 minutos) donde grupos pequeños (máx. 10 niños) discuten un cuento previamente asignado. Un moderador profesional guía la conversación, hace preguntas y fomenta la participación respetuosa. Todo es por voz (no hay chat escrito).'
    },
    {
      question: '¿Mi hijo necesita saber leer para usar MetaKids?',
      answer: 'No necesariamente. Todos nuestros cuentos tienen narración de audio profesional, perfecto para pre-lectores o lectores principiantes. Pueden escuchar mientras siguen el texto, lo que ayuda a desarrollar habilidades de lectura.'
    },
    {
      question: '¿Para qué edades es apropiado MetaKids?',
      answer: 'Nuestra plataforma está diseñada para niños de 4 a 10 años. Los cuentos están categorizados por edad (4-6, 6-8, 8-10) y nivel de lectura. El club del metaverso tiene grupos separados por edad para asegurar interacciones apropiadas.'
    },
    {
      question: '¿Puedo cancelar mi suscripción en cualquier momento?',
      answer: 'Sí, puedes cancelar tu plan premium en cualquier momento desde la configuración de tu cuenta. No hay penalización ni período mínimo. Si cancelas, mantienes acceso hasta el final del período pagado y luego pasas al plan gratuito automáticamente.'
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
              <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Preguntas <span className="text-primary">Frecuentes</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Encuentra respuestas a las dudas más comunes sobre MetaKids. Si no encuentras lo que buscas, contáctanos.
              </p>
            </div>
          </div>
        </section>

        {/* Accordion de preguntas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto" data-aos="fade-up">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border shadow-md overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-muted/50 transition-colors">
                      <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Sección de contacto adicional */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                ¿Aún tienes dudas?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nuestro equipo está listo para ayudarte. Envíanos un mensaje y te responderemos en menos de 24 horas.
              </p>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Contactar soporte
              </a>
            </div>
          </div>
        </section>

        {/* Recursos adicionales */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-aos="fade-up">
                Recursos Adicionales
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="/como-funciona"
                  data-aos="fade-up"
                  className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all hover:scale-105 text-center group"
                >
                  <div className="text-4xl mb-4">📖</div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    ¿Cómo funciona?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Aprende paso a paso cómo usar la plataforma
                  </p>
                </a>

                <a
                  href="/para-padres"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all hover:scale-105 text-center group"
                >
                  <div className="text-4xl mb-4">👨‍👩‍👧</div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Guía para padres
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Beneficios, seguridad y progreso
                  </p>
                </a>

                <a
                  href="/biblioteca"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all hover:scale-105 text-center group"
                >
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Ver biblioteca
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Explora todos los cuentos disponibles
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
