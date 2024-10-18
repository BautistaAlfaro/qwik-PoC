// src/routes/index.tsx
import { component$, useStore } from '@builder.io/qwik';
import { Header } from '../components/Header';
import { MainContent } from '../components/MainContent';
import { Footer } from '../components/Footer';
import { InscripcionComponent } from '~/components/InscripcionComponent.js';


export default component$(() => {
  const state = useStore({
    activeSection: 'inicio', // Sección activa por defecto
  });

  return (
    <div style={{ backgroundColor: '#1E1B38', color: 'white', fontFamily: 'Verdana, sans-serif', margin: 0, padding: 0 }}>
      <Header />
      <MainContent />
      <InscripcionComponent />
      <Footer />

    </div>
  );
});




