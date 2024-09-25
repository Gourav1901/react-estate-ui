import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import './map.scss';
import "leaflet/dist/leaflet.css";
import Pin from '../pin/pin.jsx';

function Map({ items }) {
  return (
    <MapContainer center={[22.7196, 75.8577]} zoom={12} scrollWheelZoom={false} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map(item => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
