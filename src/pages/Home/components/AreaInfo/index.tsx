import { Map } from "@components/Map";
import { AnimatedText } from "@/hooks/AnimatedText";

export const AreaInfo = () => {
  const coordenadas = {
    lat: -23.5505,
    lng: -46.6333,
  };

  const pets = [
    {
      nome: "Bolt",
      rua: "Av. Paulista",
      latitude: -23.561414,
      longitude: -46.655881,
    },
    {
      nome: "Luna",
      rua: "Rua Augusta",
      latitude: -23.55301,
      longitude: -46.649499,
    },
  ];
  return (
    <div>
      <div className="flex justify-between px-4">
        <AnimatedText />
        <div>
          <Map
            latitude={coordenadas.lat}
            longitude={coordenadas.lng}
            pets={pets}
          />
        </div>
      </div>
    </div>
  );
};
