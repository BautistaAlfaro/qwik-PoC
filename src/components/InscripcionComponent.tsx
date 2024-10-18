import { component$, useStore, $ } from '@builder.io/qwik';


export const InscripcionComponent = component$(() => {
  // Definición de la interfaz para las inscripciones
  interface Inscripcion {
    nombre: string;
    carrera: string;
  }

  // Estado global del componente
  const store = useStore<{
    inscripciones: Inscripcion[];
    nombre: string;
    carrera: string;
    carreras: string[];
    editingIndex: number;
    error: string;
    successMessage: string; // Mensaje de éxito después de inscribir o actualizar
  }>({
    inscripciones: [],
    nombre: '',
    carrera: '',
    carreras: [
      'Diplomatura',
      'Maestría',
      'Tecnicatura',
      'Licenciatura',
      'Ingenierías',
      'Especializaciones',
    ],
    editingIndex: -1,
    error: '',
    successMessage: '', // Nuevo estado para mostrar mensajes de éxito
  });

  // Función para crear o actualizar una inscripción
  const crearOActualizarInscripcion = $(() => {
    // Validar que los campos no estén vacíos
    if (!store.nombre || !store.carrera) {
      store.error = 'Por favor, completa todos los campos.';
      store.successMessage = ''; // Limpiar mensaje de éxito
      return;
    }
  
    const nuevaInscripcion: Inscripcion = {
      nombre: store.nombre,
      carrera: store.carrera,
    };
  
    if (store.editingIndex === -1) {
      // Añadir una nueva inscripción
      store.inscripciones = [...store.inscripciones, nuevaInscripcion];
      store.successMessage = 'Inscripción realizada con éxito.';
    } else {
      // Editar una inscripción existente
      const nuevasInscripciones = [...store.inscripciones];
      nuevasInscripciones[store.editingIndex] = nuevaInscripcion;
      store.inscripciones = nuevasInscripciones;
      store.editingIndex = -1; // Reiniciar el índice de edición
      store.successMessage = 'Inscripción actualizada con éxito.';
    }
  
    // Limpiar campos y mensajes de error
    store.nombre = '';
    store.carrera = '';
    store.error = '';
  });
  const editarInscripcion = $((index: number) => {
    const inscripcion = store.inscripciones[index];
    store.nombre = inscripcion.nombre;
    store.carrera = inscripcion.carrera;
    store.editingIndex = index;  // Guardar el índice de edición
    store.successMessage = '';   // Limpiar mensaje de éxito al editar
  });

  // Función para eliminar una inscripción
  const eliminarInscripcion = $((index: number) => {
    store.inscripciones = store.inscripciones.filter((_, i) => i !== index);
    store.successMessage = 'Inscripción eliminada con éxito.';
  });

  return (
    <div class="inscripcion-container">

      
      <h2 class="title">Formulario de Inscripción a Carrera</h2>

      <div class="form-group">
        <label>Nombre completo:</label>
        <input
          type="text"
          placeholder="Escribe tu nombre completo"
          value={store.nombre}
          onInput$={(e) => (store.nombre = (e.target as HTMLInputElement).value)}
          class="input-field"
        />
      </div>

      <div class="form-group">
        <label>Selecciona una carrera:</label>
        <select
          value={store.carrera}
          onChange$={(e) => (store.carrera = (e.target as HTMLSelectElement).value)}
          class="select-field"
        >
          <option value="">Seleccione una carrera</option>
          {store.carreras.map((carrera) => (
            <option key={carrera} value={carrera}>
              {carrera}
            </option>
          ))}
        </select>
      </div>

      {store.error && <p class="error-message">{store.error}</p>} {/* Mensaje de error */}
      {store.successMessage && <p class="success-message">{store.successMessage}</p>} {/* Mensaje de éxito */}

      <button onClick$={crearOActualizarInscripcion} class="submit-btn">
        {store.editingIndex === -1 ? 'Inscribirse' : 'Actualizar Inscripción'}
      </button>

      {store.editingIndex !== -1 && (
        <p class="editing-notice">Estás editando una inscripción. Completa el formulario y haz clic en "Actualizar Inscripción".</p>
      )}

      <h3 class="sub-title">Lista de Inscripciones:</h3>
      {store.inscripciones.length === 0 ? (
        <p>No hay inscripciones registradas aún.</p>
      ) : (
        <ul class="inscripciones-list">
  {store.inscripciones.map((inscripcion, index) => (
    <li key={index} class="inscripcion-item">
      <span>{inscripcion.nombre} - {inscripcion.carrera}</span> {/* Aquí está el texto a modificar */}
      <div class="action-buttons">
        <button onClick$={() => editarInscripcion(index)} class="edit-btn">Editar</button>
        <button onClick$={() => eliminarInscripcion(index)} class="delete-btn">Eliminar</button>
      </div>
    </li>
  ))}
</ul>
      )}
    </div>
  );
});