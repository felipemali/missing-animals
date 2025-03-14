import { Card } from "../../../components/Card";
import image_test from "../../../assets/catt.png";
import image_cat from "../../../assets/cat.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const MyPosts = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="px-4 mt-20">
      <h3 className="text-neutral text-3xl pb-5 font-semibold font-medium">
        Minhas Postagens
      </h3>
      <div className="flex justify-normal">
        <div className="flex gap-25">
          {[0, 1, 2, 3].map((_, index) => (
            <Card key={index} image={image_test} />
          ))}
        </div>
        <motion.div
          className="pr-10"
          animate={isAnimating ? { y: [-10, -30, 0] } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-112" src={image_cat} alt="" />
        </motion.div>

        {/* Cards */}
        <div></div>
      </div>
    </div>
  );
};
