import { component$, useStore, $ } from '@builder.io/qwik';
import { createItem } from '../data';

export const ItemForm = component$(() => {
  const state = useStore({ name: '' });

  const handleSubmit = $((event: Event) => {
    event.preventDefault();
    if (state.name.trim() !== '') {
      createItem(state.name);
      state.name = ''; // Limpia el formulario
    }
  });

  return (
    <form onSubmit$={handleSubmit}>
      <input
        type="text"
        value={state.name}
        onInput$={(event) => (state.name = (event.target as HTMLInputElement).value)}
        placeholder="Nombre del item"
        required
      />
      <button type="submit">Agregar Item</button>
    </form>
  );
});