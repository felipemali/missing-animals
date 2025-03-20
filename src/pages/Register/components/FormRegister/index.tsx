import { useNavigate } from "react-router-dom";
const inputsForm = [
  {
    label: "Email",
    type: "email",
    placeholder: "Digite seu email",
  },
  {
    label: "Senha",
    type: "password",
    placeholder: "Digite sua senha",
  },
  {
    label: "Confirmar Senha",
    type: "password",
    placeholder: "Confirme sua senha",
  },
];
export const FormRegister = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border-t-4 border-orange-500">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Criar Conta
        </h2>
        <form>
          {inputsForm.map(({ label, type, placeholder }, index) => (
            <div className="mb-4" key={index}>
              <label className="block text-gray-600 font-medium">{label}</label>
              <input
                type={type}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none  bg-transparent placeholder-gray-400 text-neutral"
                placeholder={placeholder}
              />
            </div>
          ))}
          <button
            onClick={() => navigate(`/`)}
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition cursor-pointer"
          >
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
};
