import MapComponent from '../components/MapComponent';

const MapPage = () => {
  return (
    <div>
      <h1>Mapa de Sucursales</h1>
      <p>Encuentra la sucursal más cercana a ti en el mapa.</p>
      <MapComponent /> {/* Usando el componente MapComponent */}
    </div>
  );
};

export default MapPage;
