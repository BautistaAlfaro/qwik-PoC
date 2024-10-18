import { component$, useStore, $ } from '@builder.io/qwik';


export const InscripcionComponent = component$(() => {
  interface Inscripcion {
    nombre: string;
    carrera: string;
  }

  const store = useStore<{
    inscripciones: Inscripcion[];
    nombre: string;
    carrera: string;
    carreras: string[];
    editingIndex: number;
    error: string;
    successMessage: string; 
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
    successMessage: '', 
  });


  const crearOActualizarInscripcion = $(() => {
 
    if (!store.nombre || !store.carrera) {
      store.error = 'Por favor, completa todos los campos.';
      store.successMessage = ''; 
      return;
    }
  
    const nuevaInscripcion: Inscripcion = {
      nombre: store.nombre,
      carrera: store.carrera,
    };
  
    if (store.editingIndex === -1) {
      
      store.inscripciones = [...store.inscripciones, nuevaInscripcion];
      store.successMessage = 'Inscripción realizada con éxito.';
    } else {
      
      const nuevasInscripciones = [...store.inscripciones];
      nuevasInscripciones[store.editingIndex] = nuevaInscripcion;
      store.inscripciones = nuevasInscripciones;
      store.editingIndex = -1; 
      store.successMessage = 'Inscripción actualizada con éxito.';
    }
  

    store.nombre = '';
    store.carrera = '';
    store.error = '';
  });
  const editarInscripcion = $((index: number) => {
    const inscripcion = store.inscripciones[index];
    store.nombre = inscripcion.nombre;
    store.carrera = inscripcion.carrera;
    store.editingIndex = index;  
    store.successMessage = '';   
  });

  
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
      <span>{inscripcion.nombre} - {inscripcion.carrera}</span> {}
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
