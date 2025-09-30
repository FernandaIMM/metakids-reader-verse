import { useEffect, useState } from 'react';
import { BookOpen, Clock, Tag, Volume2, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Biblioteca = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [selectedBook, setSelectedBook] = useState<any>(null);

  const books = [
    {
      id: 1,
      title: 'El león y el ratón',
      category: 'Fábulas',
      duration: '5 min',
      age: '4-6 años',
      description: 'Una clásica fábula sobre la bondad y cómo las buenas acciones siempre son recompensadas.',
      audioUrl: '/assets/audio/leon-raton.mp3',
      image: '📚'
    },
    {
      id: 2,
      title: 'La princesa valiente',
      category: 'Aventuras',
      duration: '8 min',
      age: '6-8 años',
      description: 'Una princesa que no espera ser rescatada, sino que ella misma salva el reino.',
      audioUrl: '/assets/audio/princesa-valiente.mp3',
      image: '👸'
    },
    {
      id: 3,
      title: 'El robot curioso',
      category: 'Ciencia Ficción',
      duration: '7 min',
      age: '7-9 años',
      description: 'Un robot aprende sobre emociones y amistad en un mundo futurista.',
      audioUrl: '/assets/audio/robot-curioso.mp3',
      image: '🤖'
    },
    {
      id: 4,
      title: 'El árbol mágico',
      category: 'Fantasía',
      duration: '6 min',
      age: '5-7 años',
      description: 'Un árbol que concede deseos enseña a los niños sobre la gratitud y el cuidado de la naturaleza.',
      audioUrl: '/assets/audio/arbol-magico.mp3',
      image: '🌳'
    },
    {
      id: 5,
      title: 'Los tres astronautas',
      category: 'Aventuras',
      duration: '9 min',
      age: '8-10 años',
      description: 'Tres amigos exploran el espacio y aprenden sobre la diversidad y el trabajo en equipo.',
      audioUrl: '/assets/audio/tres-astronautas.mp3',
      image: '🚀'
    },
    {
      id: 6,
      title: 'La ballena cantante',
      category: 'Naturaleza',
      duration: '6 min',
      age: '4-6 años',
      description: 'Una ballena que canta hermosas melodías para salvar el océano.',
      audioUrl: '/assets/audio/ballena-cantante.mp3',
      image: '🐋'
    },
    {
      id: 7,
      title: 'El dragón vegano',
      category: 'Humor',
      duration: '7 min',
      age: '6-8 años',
      description: 'Un dragón que prefiere comer verduras y enseña sobre alimentación saludable.',
      audioUrl: '/assets/audio/dragon-vegano.mp3',
      image: '🐉'
    },
    {
      id: 8,
      title: 'La niña inventor',
      category: 'Inspiración',
      duration: '8 min',
      age: '7-10 años',
      description: 'Una niña que crea inventos increíbles para ayudar a su comunidad.',
      audioUrl: '/assets/audio/nina-inventor.mp3',
      image: '💡'
    },
    {
      id: 9,
      title: 'El gato detective',
      category: 'Misterio',
      duration: '10 min',
      age: '8-10 años',
      description: 'Un gato que resuelve misterios en su vecindario con ingenio y astucia.',
      audioUrl: '/assets/audio/gato-detective.mp3',
      image: '🔍'
    },
    {
      id: 10,
      title: 'La estrella perdida',
      category: 'Fantasía',
      duration: '6 min',
      age: '4-6 años',
      description: 'Una estrellita que se pierde del cielo y encuentra el camino de vuelta con ayuda de nuevos amigos.',
      audioUrl: '/assets/audio/estrella-perdida.mp3',
      image: '⭐'
    },
    {
      id: 11,
      title: 'El superhéroe tímido',
      category: 'Aventuras',
      duration: '9 min',
      age: '7-9 años',
      description: 'Un superhéroe que aprende que la valentía viene en muchas formas.',
      audioUrl: '/assets/audio/superheroe-timido.mp3',
      image: '🦸'
    },
    {
      id: 12,
      title: 'La mariposa azul',
      category: 'Naturaleza',
      duration: '5 min',
      age: '4-6 años',
      description: 'Una mariposa única enseña sobre la belleza de ser diferente.',
      audioUrl: '/assets/audio/mariposa-azul.mp3',
      image: '🦋'
    }
  ];

  const categories = ['Todos', 'Fábulas', 'Aventuras', 'Fantasía', 'Ciencia Ficción', 'Naturaleza', 'Humor', 'Inspiración', 'Misterio'];
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredBooks = selectedCategory === 'Todos' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Biblioteca <span className="text-primary">MetaKids</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Descubre cuentos mágicos, aventuras increíbles y lecciones valiosas. Lee o escucha las historias narradas profesionalmente.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-card text-foreground border border-border hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Books Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book, index) => (
                <div
                  key={book.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedBook(book)}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center text-7xl">
                    {book.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        <Tag className="w-3 h-3" />
                        {book.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{book.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{book.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {book.duration}
                      </span>
                      <span>{book.age}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      <Dialog open={!!selectedBook} onOpenChange={() => setSelectedBook(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              <span className="text-4xl">{selectedBook?.image}</span>
              {selectedBook?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedBook && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                  <Tag className="w-4 h-4" />
                  {selectedBook.category}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full">
                  <Clock className="w-4 h-4" />
                  {selectedBook.duration}
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent-foreground text-sm font-semibold rounded-full">
                  {selectedBook.age}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">{selectedBook.description}</p>
              
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Volume2 className="w-5 h-5 text-secondary" />
                  Narración de audio
                </div>
                <audio controls className="w-full" src={selectedBook.audioUrl}>
                  Tu navegador no soporta el elemento de audio.
                </audio>
                <p className="text-xs text-muted-foreground">
                  * Archivos de audio son placeholders. Reemplazar con audios reales en /assets/audio/
                </p>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  <BookOpen className="w-5 h-5 inline mr-2" />
                  Leer ahora
                </button>
                <button 
                  className="px-6 py-3 bg-card text-foreground border border-border font-semibold rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setSelectedBook(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Biblioteca;
