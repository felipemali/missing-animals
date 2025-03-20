import { Button } from "@components/Button";
import { ButtonFiltro } from "@components/ButtonFiltro";
import { Carousell } from "@components/Carousel";
import { AnimationDog } from "@components/AnimationDog";

export const AreaCards = () => {
  return (
    <>
      <div className="px-4 mb-10 container max-w-xl flex justify-evenly gap-5">
        <Button text="Adicionar Pet" />
        <ButtonFiltro />
      </div>
      <div className="w-xl m-auto">
        <h3 className="text-neutral text-3xl pb-5 font-semibold font-medium ">
          Animais Desaparecidos na sua cidade
        </h3>
      </div>

      <div className="flex justify-normal px-4 ">
        {/* Animação das orelhas balançando */}
        <AnimationDog />
        <Carousell />
      </div>
    </>
  );
};
