import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image_dog from "../../../assets/dog.png";
// import image_test from "../../../assets/image_test.png";
// import { Card } from "../../../components/Card";
import { Button } from "../../../components/Button";
import { ButtonFiltro } from "../../../components/ButtonFiltro";
import { Carousel } from "../../../Carousel";

export const AreaCards = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="px-4 mb-10 container max-w-xl flex justify-evenly">
        <Button text="Adicionar Pet" />
        <ButtonFiltro />
      </div>
      <div className="flex justify-stretch px-4">
        {/* Animação das orelhas balançando */}
        <motion.div
          className="pr-10"
          animate={isAnimating ? { rotate: [-5, 5, -5, 0] } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-112" src={image_dog} alt="Cachorrinho animado" />
        </motion.div>

        {/* Cards */}
        {/* <div className="flex gap-25">
          {[0, 1, 2, 3, 4].map((_, index) => (
            <Card key={index} image={image_test} />
          ))}
        </div> */}
        <Carousel />
      </div>
    </>
  );
};
