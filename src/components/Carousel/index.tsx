import { useState } from "react";
import { Card } from "@components/Card";
import image_test from "@/assets/image_test.png";
import { ButtonNext } from "@components/Carousel/ButtonNext";
import { ButtonPrevious } from "@components/Carousel/ButtonPrevious";
import { Pagination } from "@components/Carousel/Pagination";
import { ItemProps } from "@/models/ItemPagination";
import { useFecthPets } from "@/api";
import { Pets } from "../../types/Pets";

export const Carousell = () => {
  console.log("caiu no carrousel");

  const [active, setActive] = useState(1);
  const cards = Array.from({ length: 20 }, (_, i) => i + 1);

  const cardsPerPage = 5;

  const pets = useFecthPets();
  console.log("pets no carrosel:", pets);

  console.log("estado active:", active);
  const getItemProps = (index: number): ItemProps => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });
  const next = () => {
    if (active < Math.ceil(cards.length / cardsPerPage)) {
      setActive((prev) => prev + 1);
    }
  };
  const prev = () => {
    if (active > 1) {
      setActive((prev) => prev - 1);
    }
  };

  return (
    <div>
      {/* Cards */}
      <div className="flex space-x-4 overflow-hidden p-5">
        {pets?.map((data: Pets, index: number) => (
          <Card
            textButton="Entrar em Contato"
            index={index}
            key={index}
            image={image_test}
            data={data}
          />
        ))}
        {/* {visibleCards.map((cardIndex) => (
          <Card
            textButton="Entrar em Contato"
            index={cardIndex}
            key={cardIndex}
            image={image_test}
          />
        ))} */}
      </div>

      {/* Paginação */}
      <div className="flex items-center gap-4 mt-4 justify-center">
        <ButtonPrevious active={active} prev={prev} />
        <Pagination
          active={active}
          cards={cards}
          cardsPerPage={cardsPerPage}
          getItemProps={getItemProps}
        />
        <ButtonNext
          next={next}
          active={active}
          cards={cards}
          cardsPerPage={cardsPerPage}
        />
      </div>
    </div>
  );
};
