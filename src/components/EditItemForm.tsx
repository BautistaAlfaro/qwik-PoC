import { component$, useStore, $ } from '@builder.io/qwik';
import { getItem } from '../data';

interface EditItemFormProps {
  id: number;
  onClose: () => void;
}

export const EditItemForm = component$(({ id, onClose }: EditItemFormProps) => {
  const onClose$ = $(onClose);
  const item = getItem(id);
  const state = useStore({ name: item ? item.name : '' });

  const handleSubmit = $((event: Event) => {
    event.preventDefault();
    if (state.name.trim() !== '') {
      onClose$(); // Cierra el formulario
    }
  });

  return (
    <form onSubmit$={handleSubmit}>
      <input
        type="text"
        value={state.name}
        onInput$={(event) => (state.name = (event.target as HTMLInputElement).value)}
        required
      />
      <button type="submit">Actualizar Item</button>
      <button type="button" onClick$={onClose$}>Cancelar</button>
    </form>
  );
});