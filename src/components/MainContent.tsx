import { component$, useStore, $ } from '@builder.io/qwik';




export const MainContent = component$(() => {

  const state = useStore({
    diplomaturaVisible: false,
    tecnicaturaVisible: false,
    licenciaturaVisible: false,
    maestriaVisible: false,
    ingenieriaVisible: false,
    especializacionVisible: false
  });

  const toggleVisibility = $((key: keyof typeof state) => {
    state[key] = !state[key]; 
  });

  return (
    <main>
      {/* Sección Carreras */}
      <section id="carreras" style={{ padding: '3rem 2rem', textAlign: 'center', backgroundColor: 'white', color: '#201E43' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Carreras Ofrecidas</h2>
        <div style={containerStyle}>
          {/* Cuadrado Diplomatura */}
          <div style={squareStyle} onClick$={() => toggleVisibility('diplomaturaVisible')}>
            <h3>Diplomatura</h3>
            {state.diplomaturaVisible && (
              <p>Desarrollo de habilidades específicas en áreas tecnológicas.</p>
            )}
          </div>

          {/* Cuadrado Tecnicatura */}
          <div style={squareStyle} onClick$={() => toggleVisibility('tecnicaturaVisible')}>
            <h3>Tecnicatura</h3>
            {state.tecnicaturaVisible && (
              <p>Formación técnica profesional en áreas clave de la ingeniería y tecnología.</p>
            )}
          </div>

          {/* Cuadrado Licenciatura */}
          <div style={squareStyle} onClick$={() => toggleVisibility('licenciaturaVisible')}>
            <h3>Licenciatura</h3>
            {state.licenciaturaVisible && (
              <p>Programas de licenciatura orientados al desarrollo de competencias científicas y tecnológicas.</p>
            )}
          </div>

          {/* Cuadrado Maestría */}
          <div style={squareStyle} onClick$={() => toggleVisibility('maestriaVisible')}>
            <h3>Maestrías</h3>
            {state.maestriaVisible && (
              <p>Programas avanzados de posgrado para la especialización en diversas áreas de la ingeniería.</p>
            )}
          </div>

          {/* Cuadrado Ingeniería */}
          <div style={squareStyle} onClick$={() => toggleVisibility('ingenieriaVisible')}>
            <h3>Ingenierías</h3>
            {state.ingenieriaVisible && (
              <p>Estudios de ingeniería con orientación en electrónica, sistemas y más.</p>
            )}
          </div>
    

          {/* Cuadrado Especialización */}
          <div style={squareStyle} onClick$={() => toggleVisibility('especializacionVisible')}>
            <h3>Especializaciones</h3>
            {state.especializacionVisible && (
              <p>Programas para adquirir experiencia avanzada en campos específicos de la ingeniería.</p>
            )}
          </div>
        </div>


      </section>

      {/* Sección Institucional */}
      <section
  id="institucional"
  style={{
    padding: '3rem 2rem',
    textAlign: 'center',
    backgroundColor: '#201E43',
    color: 'white',
  }}
>
  <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>¿Por Qué Elegir la UTN?</h2>

  <p>La UTN se destaca por su enfoque en la educación práctica y la innovación.</p>
  <p>
    Misión: Ofrecer educación superior de calidad, formando profesionales comprometidos con el desarrollo
    tecnológico y social.
  </p>
  <p>
    Visión: Ser una universidad líder en formación tecnológica, fomentando la investigación y el desarrollo
    sostenible.
  </p>

</section>

      {/* Sección Información */}
      <section
  id="info"
  style={{
    padding: '3rem 2rem',
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#201E43',
  }}
>
  <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contacto</h2>
  <p>Si tienes alguna pregunta o deseas más información, no dudes en contactarnos:</p>
  <p>Email: <a href="mailto:info@utn.edu.ar" style={{ color: '#201E43' }}>info@utn.edu.ar</a></p>
  <p>También puedes seguirnos en nuestras redes sociales:</p>
  <div>
    <a href="https://facebook.com/UTNFRRO" style={{ color: '#201E43', margin: '0 1rem' }}>Facebook</a>
    <a href="https://twitter.com" style={{ color: '#201E43', margin: '0 1rem' }}>Twitter</a>
    <a href="https://instagram.com" style={{ color: '#201E43', margin: '0 1rem' }}>Instagram</a>
  </div>
</section>
    </main>
  );
});


const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '2rem', 
  maxWidth: '1200px', 
  margin: '0 auto' 
};


const squareStyle = {
  width: '300px', 
  height: '300px', 
  backgroundColor: '#201E43',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '8px',
  padding: '1rem',
  textAlign: 'center',
};
