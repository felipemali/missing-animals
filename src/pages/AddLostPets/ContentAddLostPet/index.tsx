import { AnimationCat } from "@components/AnimationCat";
import { AnimationDog } from "@components/AnimationDog";
import { FormAddPet } from "../components/Form";

export const ContentAddLostPet = () => {
  return (
    <div className="flex justify-between items-center gap-4 w-full max-w-[1580px] mx-auto">
      <div>
        <AnimationDog />
      </div>
      <div className="bg-gray-50 shadow-lg rounded-2xl p-6 w-full max-w-md m-auto">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Adicionar Pet Desaprecido
        </h2>

        {/* Form */}
        <div>
          <FormAddPet />
        </div>
      </div>
      <div>
        <AnimationCat />
      </div>
    </div>
  );
};
