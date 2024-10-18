import { component$, useStore, $ } from '@builder.io/qwik';
import { getItems, deleteItem } from '../data';
import type { Item } from '../data';

export const ItemList = component$(() => {
  const state = useStore({ items: getItems() });

  const handleDelete = $((id: number) => {
    deleteItem(id);
    state.items = getItems(); // Actualiza la lista
  });

  return (
    <div>
      <h2>Lista de Items</h2>
      <ul>
        {state.items.map((item: Item) => (
          <li key={item.id}>
            {item.name}
            <button onClick$={() => handleDelete(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
});