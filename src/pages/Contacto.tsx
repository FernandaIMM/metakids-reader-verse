import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';
import { toast } from '@/hooks/use-toast';

const Contacto = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentEmail: '',
    message: '',
    acceptPolicy: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.childName || !formData.childAge || !formData.parentEmail || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.acceptPolicy) {
      toast({
        title: "Error",
        description: "Debes aceptar la política de privacidad para continuar.",
        variant: "destructive"
      });
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.parentEmail)) {
      toast({
        title: "Error",
        description: "Por favor ingresa un correo electrónico válido.",
        variant: "destructive"
      });
      return;
    }

    // Simulación de envío
    toast({
      title: "¡Mensaje enviado! 🎉",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    // Limpiar formulario
    setFormData({
      childName: '',
      childAge: '',
      parentEmail: '',
      message: '',
      acceptPolicy: false
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
                <span className="text-primary">Contáctanos</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                ¿Tienes preguntas, sugerencias o necesitas ayuda? Estamos aquí para ti. Envíanos un mensaje y te responderemos pronto.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Información de contacto */}
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Información de contacto
                </h2>
                <p className="text-muted-foreground mb-8">
                  También puedes comunicarte con nosotros a través de estos canales:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Correo electrónico</h3>
                      <p className="text-muted-foreground">contacto@metakids.com</p>
                      <p className="text-sm text-muted-foreground mt-1">Respuesta en 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">+57 (1) 234-5678</p>
                      <p className="text-sm text-muted-foreground mt-1">Lun - Vie: 9am - 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                      <p className="text-muted-foreground">Bogotá, Colombia</p>
                      <p className="text-sm text-muted-foreground mt-1">Servicio en toda Latinoamérica</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-card rounded-xl p-6 shadow-lg border border-border">
                  <h3 className="font-bold text-foreground mb-3">Horario de atención</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes:</span>
                      <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados:</span>
                      <span className="font-semibold text-foreground">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingos:</span>
                      <span className="font-semibold text-foreground">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario */}
              <div data-aos="fade-left">
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Envíanos un mensaje
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="childName" className="block text-sm font-medium text-foreground mb-2">
                        Nombre del niño/a *
                      </label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Ej: María"
                      />
                    </div>

                    <div>
                      <label htmlFor="childAge" className="block text-sm font-medium text-foreground mb-2">
                        Edad *
                      </label>
                      <input
                        type="number"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        required
                        min="4"
                        max="10"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Ej: 7"
                      />
                    </div>

                    <div>
                      <label htmlFor="parentEmail" className="block text-sm font-medium text-foreground mb-2">
                        Correo del acudiente *
                      </label>
                      <input
                        type="email"
                        id="parentEmail"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="acceptPolicy"
                        name="acceptPolicy"
                        checked={formData.acceptPolicy}
                        onChange={handleChange}
                        required
                        className="mt-1 w-4 h-4 rounded border-input text-primary focus:ring-2 focus:ring-primary"
                      />
                      <label htmlFor="acceptPolicy" className="text-sm text-muted-foreground">
                        Acepto la política de privacidad y el tratamiento de datos personales de acuerdo a la normativa vigente (COPPA, GDPR-K). *
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Enviar mensaje
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
