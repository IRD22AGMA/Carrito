import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Definimos el tipo para las sucursales (branches)
type Branch = {
  id: number;
  name: string;
  position: [number, number]; // Latitud y Longitud
};

// Lista de sucursales
const branches: Branch[] = [
  { id: 1, name: "Sucursal Plaza Las Américas", position: [21.1619, -86.8515] }, // Cancún
  { id: 2, name: "Sucursal 1", position: [19.4326, -99.1332] } // Ciudad de México
];

const MapComponent = () => {
  return (
    <MapContainer center={[20.6597, -103.3496]} zoom={6} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {branches.map(branch => (
        <Marker key={branch.id} position={branch.position}>
          <Popup>{branch.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
