// import { breeds, UF } from "@/helpers";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@pages/AddLostPets/components/Form/schemaYup";
import { addPet } from "@/api/addPet";
import { propertiesTextForm } from "./propertiesForm";
import { MessageErrorForm } from "../../../../components/MessageErrorForm";
import { sendImage } from "../../../../api/sendImage";
import { useState } from "react";
import { ButtonForm } from "../../../../components/ButtomForm";
import { useAuth } from "@/hooks/useAuth";
// import { Pets } from "@/types/Pets";

export const FormAddPet = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const [urlImage, setUrlImage] = useState<string | null>();
  const { user } = useAuth();

  const { errors } = formState;

  console.log("errors Form addLostPet", errors);

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = await sendImage(event);
    console.log("a url:", url);
    setUrlImage(url);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    console.log("data do form create:", data);
    console.log(user.id);

    const dataFormated = {
      pet_type: data.pet_type,
      image: urlImage,
      name: data.name,
      street: data.street,
      phone: data.phone,
      description: data.description,
      user_id: user.id,
    };
    console.log("DADOS FORMATADOS:", dataFormated);

    try {
      // await schema.validate(dataFormated);
      const result = await addPet(dataFormated);
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
          {...register("pet_type")}
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
        <div
          className="mb-4"
          key={index}
          onChange={propertie.type === "file" ? uploadImage : () => {}}
        >
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
      <ButtonForm text="Adicionar Pet Perdido" />
    </form>
  );
};
