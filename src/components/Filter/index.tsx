export const Filter = () => {
  return (
    <div className="bg-gray-50 shadow-lg rounded-2xl p-6 w-full max-w-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Filtrar Pets</h2>

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
          <option value="vira-lata">Vira-lata</option>
          <option value="poodle">Poodle</option>
          <option value="siamês">Siamês</option>
          <option value="persa">Persa</option>
        </select>
      </div>

      {/* Cidade */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">Cidade</label>
        <input
          type="text"
          placeholder="Digite a cidade"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral"
        />
      </div>

      {/* Botão de Filtrar */}
      <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition">
        Filtrar
      </button>
    </div>
  );
};
