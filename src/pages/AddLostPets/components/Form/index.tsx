// import { breeds, UF } from "@/helpers";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@pages/AddLostPets/components/Form/schemaYup";
import { addPet } from "@/api/addPet";
import { propertiesTextForm } from "./propertiesForm";
import { MessageErrorForm } from "../../../../components/MessageErrorForm";
// import { Pets } from "@/types/Pets";

export const FormAddPet = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  console.log("errors Form addLostPet", errors);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    console.log(data);

    try {
      await schema.validate(data);
      const result = await addPet(data);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">
          Tipo de Pet
        </label>
        <select
          {...register("petType")}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral"
        >
          <option value="">Selecione</option>
          <option value="cachorro">Cachorro</option>
          <option value="gato">Gato</option>
          <option value="outro">Outro</option>
        </select>
        <MessageErrorForm
          error={errors.petType?.message && String(errors.petType?.message)}
        />
      </div>
      {propertiesTextForm.map((propertie, index) => (
        <div className="mb-4" key={index}>
          <label className="block text-gray-600 font-medium mb-1">
            {propertie.label}
          </label>
          <input
            {...register(propertie.register)}
            type={propertie.type}
            accept={propertie.accept}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral"
            placeholder={propertie.placeholder}
          />
          <MessageErrorForm
            error={
              errors[propertie.register]?.message &&
              String(errors[propertie.register]?.message)
            }
          />
        </div>
      ))}
      {/* Botão de Adicionar Pet Perdido */}
      <div className="flex justify-center col-span-2 mt-4">
        <button className="cursor-pointer w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition">
          Adicionar Pet Perdido
        </button>
      </div>
    </form>
  );
};
