import dog from "@/assets/dog.png";
import cat from "@/assets/cat.png";
import pata from "@/assets/pata.png";
import { classSVG } from "@/helpers/classSVG";
import { Form } from "@pages/Login/components/Form";

export const ContentLogin = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 ">
      {/* 🐶 Imagem de Fundo */}
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
      {/* 🐶 FIM Imagem de Fundo */}

      {/* 🐾 Pegadas no Fundo */}
      {classSVG.map((c: string, index: number) => (
        <img key={index} className={c} src={pata} alt="pata" />
      ))}

      {/* 🔒 Formulário de Login */}
      <Form />
    </div>
  );
};
