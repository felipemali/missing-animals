// import { AreaAddLostPet } from "../../AddLostPets/AreaAddLostPet";
import { classSVG } from "@/helpers/classSVG";
import { AreaCards } from "@pages/Home/components/AreaCards";
import { AreaInfo } from "@pages/Home/components/AreaInfo";
import { MyPosts } from "@pages/Home/components/MyPosts";
import pata from "@/assets/pata.png";

export const ContentHome = () => {
  // bg-gradient-to-b from-gray-[#a1571799] bg-orange-500
  return (
    <main className="min-h-screen rounded-t-[25px] p-6  pt-40 pl-5 pb-20 bg-white">
      {classSVG.map((c: string, index: number) => (
        <img key={index} className={c} src={pata} alt="pata" />
      ))}
      <AreaInfo />
      {/* <AreaAddLostPet /> */}
      <AreaCards />
      <MyPosts />
    </main>
  );
};
