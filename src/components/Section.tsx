// src/components/Section.tsx
import { component$ } from '@builder.io/qwik';

interface SectionProps {
  id: string;
  title: string;
  content: string;
  backgroundColor?: string;
}

export const Section = component$<SectionProps>(({ id, title, content, backgroundColor }) => {
  return (
    <section id={id} style={{ padding: '2rem', backgroundColor: backgroundColor || '#fff', marginBottom: '1rem' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
});
