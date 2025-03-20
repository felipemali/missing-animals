import image_cat from "@/assets/cat.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export const AnimationCat = () => {
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
      animate={isAnimating ? { y: [-10, -30, 0] } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <img className="h-112" src={image_cat} alt="" />
    </motion.div>
  );
};
