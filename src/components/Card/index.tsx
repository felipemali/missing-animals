type CardProps = {
  image: string;
};
export const Card = ({ image }: CardProps) => {
  return (
    <div className="max-w-xs bg-gradient-to-b from-gray-[#b9794199] bg-orange-400  shadow-2xl shadow-gray-800 rounded-2xl overflow-hidden p-4 transform hover:scale-105 transition-transform duration-300">
      <div className=" rounded-lg overflow-hidden">
        <img className="w-full h-55 " src={image} alt="Pet Perdido" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Nome do Pet
        </h2>
        <p className="text-white">
          Descrição breve sobre o pet perdido. Inclua características únicas.
        </p>
        <p className="text-white mt-2 font-medium">📍 Cidade: Nome da Cidade</p>
        <div className="mt-4">
          <button className="w-full bg-white text-neutral py-2 px-4 rounded-full hover:bg-orange-600 transition">
            Entrar em Contato
          </button>
        </div>
      </div>
    </div>
  );
};
