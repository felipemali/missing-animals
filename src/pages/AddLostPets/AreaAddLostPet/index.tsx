import { AnimationCat } from "@components/AnimationCat";
import { AnimationDog } from "@components/AnimationDog";
import { breeds, UF } from "@/helpers";

export const AreaAddLostPet = () => {
  return (
    <div className="flex justify-between items-center gap-4 w-full max-w-[1580px] mx-auto">
      <div>
        <AnimationDog />
      </div>
      <div className="bg-gray-50 shadow-lg rounded-2xl p-6 w-full max-w-md m-auto">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Adicionar Pet Desaprecido
        </h2>

        {/* Foto do Pet */}
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Foto do Pet
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral"
            />
          </div>

          {/* Tipo de Pet */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Tipo de Pet
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral">
              <option value="">Selecione</option>
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          {/* Raça */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">Raça</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral">
              <option value="">Selecione</option>
              {breeds.map((breed: string, i: number) => (
                <option key={i} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>

          {/* UF*/}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">UF</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral">
              <option value="">Selecione</option>
              {UF.map((u: string, i: number) => (
                <option key={i} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>

          {/* Cidade */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Cidade
            </label>
            <input
              type="text"
              placeholder="Digite a cidade"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral"
            />
          </div>

          {/* Rua */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">Rua</label>
            <input
              type="text"
              placeholder="Digite a rua onde o pet foi visto"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral"
            />
          </div>

          {/* Número de Celular */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Número de Celular
            </label>
            <input
              type="tel"
              placeholder="Digite seu número de celular"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral"
            />
          </div>

          {/* Características do Pet */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Características do Pet
            </label>
            <textarea
              placeholder="Descreva as características do pet (ex: cor, tamanho, comportamento)"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral"
            />
          </div>

          {/* Botão de Adicionar Pet Perdido */}
          <div className="flex justify-center col-span-2 mt-4">
            <button className="cursor-pointer w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition">
              Adicionar Pet Perdido
            </button>
          </div>
        </div>
      </div>
      <div>
        <AnimationCat />
      </div>
    </div>
  );
};
