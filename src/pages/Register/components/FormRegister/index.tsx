import { useNavigate } from "react-router-dom";
import { ButtonForm } from "../../../../components/ButtomForm";
import { useState } from "react";
import { User } from "@/types/User";
import { signUpUser } from "@/api/addUser";
const inputsForm = [
  {
    label: "Email",
    type: "email",
    placeholder: "Digite seu Email...",
    property: "email",
  },
  {
    label: "Nome",
    type: "text",
    placeholder: "Digite seu Nome...",
    property: "name",
  },
  {
    label: "UF",
    type: "text",
    placeholder: "UF do seu Estado...",
    property: "uf",
  },
  {
    label: "Cidade",
    type: "text",
    placeholder: "Nome da Cidade...",
    property: "city",
  },
  {
    label: "Senha",
    type: "password",
    placeholder: "Digite sua Senha...",
    property: "password",
  },
  {
    label: "Confirmar Senha",
    type: "password",
    placeholder: "Confirme sua Senha...",
    property: "",
  },
];
export const FormRegister = () => {
  const [formData, setFormData] = useState<User>({
    city: "",
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    uf: "",
  });
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // const { name, email, password, uf, city } = formData;
    console.log("dados formData:", formData);

    if (formData.email !== "") {
      const newUser = await signUpUser(formData);
      if (newUser) {
        console.log("Conta criada com sucesso!");
        console.log("novo usuario:", newUser);
      } else {
        console.log("Erro ao criar conta.");
      }
    }

    navigate("/");
  };

  return (
    <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border-t-4 border-orange-500">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Criar Conta
        </h2>
        <form className="grid grid-cols-2 gap-4" onSubmit={onSubmit}>
          {inputsForm.map(({ label, type, placeholder, property }, index) => (
            <div className="mb-4" key={index}>
              <label className="block text-gray-600 font-medium">{label}</label>
              <input
                type={type}
                name={property}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none  bg-transparent placeholder-gray-400 text-neutral"
                placeholder={placeholder}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  property !== ""
                    ? setFormData({
                        ...formData,
                        [event.target.name]: event.target.value,
                      })
                    : () => {}
                }
              />
            </div>
          ))}
          <ButtonForm text="Criar Conta" />
        </form>
      </div>
    </div>
  );
};
