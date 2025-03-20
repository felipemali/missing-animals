import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AnimatedText = () => {
  const text =
    "Você pode encontrar o seu Pet ou promover o reencontro de outro amiguinho com a sua família.!";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <div className="flex justify-between px-4">
      <motion.h3
        className="text-3xl font-semibold font-medium text-neutral max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
      </motion.h3>
    </div>
  );
};
