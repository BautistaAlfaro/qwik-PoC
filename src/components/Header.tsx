
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
  justifyContent: 'flex-start', 
  alignItems: 'center',
  padding: '0 2rem', 
  marginLeft: '50px',
};

const navStyle = {
  display: 'flex',
  gap: '1rem', 
};


const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.2rem',
  transition: 'color 0.3s ease', 
};


const logoStyle = {
  height: '50px',      
  width: 'auto',      
  margin: '10px 20px 10px 0', 
  display: 'flex',      
  alignItems: 'center',
};