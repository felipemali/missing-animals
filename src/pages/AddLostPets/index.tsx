import { Menu } from "@components/Menu";
import { classSVG } from "@/helpers";
import { ContentAddLostPet } from "@pages/AddLostPets/ContentAddLostPet";
import pata from "../../assets/pata.png";

export const AddLostPet = () => {
  return (
    <div className="m-auto w-screen">
      <Menu />
      <main className="min-h-screen rounded-t-[25px] p-6  pt-40 pl-5 pb-20 bg-gradient-to-t from-[#eee] to-white">
        {classSVG.map((c: string, index: number) => (
          <img key={index} className={c} src={pata} alt="pata" />
        ))}
        <ContentAddLostPet />
      </main>
    </div>
  );
};
