import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import image_dog from "@/assets/dog.png";

export const AnimationDog = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      className="pr-10"
      animate={isAnimating ? { rotate: [-5, 5, -5, 0] } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <img className="h-112" src={image_dog} alt="Cachorrinho animado" />
    </motion.div>
  );
};
