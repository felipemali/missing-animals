import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

interface Pet {
  nome: string;
  rua: string;
  latitude: number;
  longitude: number;
}

interface MapProps {
  latitude: number;
  longitude: number;
  pets: Pet[];
}

export const Map = ({ latitude, longitude, pets }: MapProps) => {
  const position: LatLngTuple = [latitude, longitude];
  console.log("Entrou no componente Mapa");

  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={false}
      className="border-4 border-solid"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pets.map((pet, index) => (
        <Marker key={index} position={[pet.latitude, pet.longitude]}>
          <Popup>
            <strong>{pet.nome}</strong> <br />
            Desaparecido em: {pet.rua}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
