import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { singInUser } from "../../../../api/singInUser";
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
];
export const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const sessionUser = singInUser(formData);
    console.log("usuario logado:", sessionUser);
  };

  return (
    <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border-t-4 border-orange-500">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Entrar no Sistema
        </h2>
        <form onSubmit={onSubmit}>
          {inputsForm.map(({ label, type, placeholder }) => (
            <div className="mb-4">
              <label className="block text-gray-600 font-medium">{label}</label>
              <input
                name={type}
                type={type}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none text-neutral"
                placeholder={placeholder}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({
                    ...formData,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </div>
          ))}
          <input
            value="Entrar"
            type="submit"
            // onClick={() => navigate(`/`)}
            className="cursor-pointer w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
          />
          <div className="mt-4 text-center">
            <a href="#" className="text-orange-500 hover:underline text-sm">
              Esqueceu sua senha?
            </a>
          </div>

          <div className="mt-2 text-center">
            <span className="text-gray-600 text-sm">Não tem uma conta?</span>
            <span
              onClick={() => navigate(`/criar-conta`)}
              className="text-orange-500 hover:underline text-sm ml-1 cursor-pointer"
            >
              Cadastre-se
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
