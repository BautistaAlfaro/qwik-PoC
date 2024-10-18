// src/components/Footer.tsx
import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <p>&copy; 2024 Universidad Tecnológica Nacional. Todos los derechos reservados.</p>
    </footer>
  );
});
