
import ImgUtn2RemovebgPreview from '~/images/UTN2-removebg-preview.png?jsx';
import { component$ } from '@builder.io/qwik';

export const Header = component$(() => {
  return (
    <header style={{ backgroundColor: '#201E43', color: 'white', padding: '1rem 0' }}>
      <div style={navContainerStyle}>
        <ImgUtn2RemovebgPreview alt="Logo UTN" style={logoStyle} />
        <nav style={navStyle}>
          <a href="#inicio" style={navLinkStyle}>Inicio</a>
          <a href="#carreras" style={navLinkStyle}>Carreras</a>
          <a href="#institucional" style={navLinkStyle}>Institucional</a>
          <a href="#info" style={navLinkStyle}>Información</a>
        </nav>
      </div>
    </header>
  );
});

const navContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-start', // Alinea todo a la izquierda
  alignItems: 'center',
  padding: '0 2rem', // Espaciado horizontal
  marginLeft: '50px', // Ajusta este valor para moverlo a la derecha
};
// Estilo de la barra de navegación
const navStyle = {
  display: 'flex',
  gap: '1rem', // Reduce el espacio entre los enlaces
};

// Estilo de los links de navegación
const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.2rem',
  transition: 'color 0.3s ease', // Transición suave para el hover
};

// Estilo para el logo
const logoStyle = {
  height: '50px',      // Mantiene la altura
  width: 'auto',       // Mantiene la proporción de la imagen
  margin: '10px 20px 10px 0', // Espaciado: arriba, derecha, abajo, izquierda (aumenté el margen derecho)
  display: 'flex',      // Asegura que el logo se alinee correctamente
  alignItems: 'center', // Alinea verticalmente el logo dentro del header
};