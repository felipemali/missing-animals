import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
{
  /* <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">Nome</label>
        <input
          {...register("name")}
          type="text"
          placeholder="Digite o nome do Pet"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral"
        />
        <p className="text-red-400">
          *{errors.name?.message && String(errors.name.message)}
        </p>
      </div> */
}

{
  /* Tipo de Pet */
}
{
  /* <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">
          Tipo de Pet
        </label>
        <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral">
          <option value="">Selecione</option>
          <option value="cachorro">Cachorro</option>
          <option value="gato">Gato</option>
          <option value="outro">Outro</option>
        </select>
      </div> */
}

{
  /* Raça */
}
{
  /* <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">Raça</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral">
          <option value="">Selecione</option>
          {breeds.map((breed: string, i: number) => (
            <option key={i} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div> */
}

{
  /* UF*/
}
{
  /* <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">UF</label>
        <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral">
          <option value="">Selecione</option>
          {UF.map((u: string, i: number) => (
            <option key={i} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div> */
}

{
  /* Cidade */
}
{
  /* <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">Cidade</label>
        <input
          {...register("city")}
          type="text"
          placeholder="Digite a cidade"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral"
        />
        <p className="text-red-400">
          *{errors.city?.message && String(errors.city.message)}
        </p>
      </div> */
}

{
  /* Rua */
}
{
  /* <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">Rua</label>
        <input
          {...register("street")}
          type="text"
          placeholder="Digite a rua onde o pet foi visto"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral"
        />
        <p className="text-red-400">
          *{errors.street?.message && String(errors.street.message)}
        </p>
      </div> */
}

{
  /* Número de Celular */
}
{
  /* <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">
          Número de Celular
        </label>
        <input
          type="tel"
          placeholder="Digite seu número de celular"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral"
        />
      </div> */
}

{
  /* Características do Pet */
}
{
  /* <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">
          Características do Pet
        </label>
        <textarea
          {...register("description")}
          placeholder="Descreva as características do pet (ex: cor, tamanho, comportamento)"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral"
        />
        <p className="text-red-400">
          * {errors.description?.message && String(errors.description.message)}
        </p>
      </div> */
}
