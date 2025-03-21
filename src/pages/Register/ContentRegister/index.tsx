import dog from "@/assets/dog.png";
import cat from "@/assets/cat.png";
import pata from "@/assets/pata.png";
import { classSVG } from "@/helpers/classSVG";
import { FormRegister } from "@pages/Register/components/FormRegister";
export const ContentRegister = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 ">
      <div
        className={`absolute inset-0  bg-cover bg-center opacity-30`}
        style={{
          backgroundImage: `url(${dog})`,
          backgroundSize: 450,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
      ></div>
      <div
        className={`absolute inset-0  bg-cover bg-center opacity-30`}
        style={{
          backgroundImage: `url(${cat})`,
          backgroundSize: 700,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      ></div>

      {classSVG.map((c: string, index: number) => (
        <img key={index} className={c} src={pata} alt="pata" />
      ))}

      <FormRegister />
    </div>
  );
};
