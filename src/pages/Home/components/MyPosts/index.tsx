import { Card } from "@components/Card";
import image_test from "@/assets/catt.png";
import { AnimationCat } from "@components/AnimationCat";

export const MyPosts = () => {
  return (
    <div className="px-4 mt-20">
      <h3 className="text-neutral text-3xl pb-5 font-semibold font-medium">
        Minhas Postagens
      </h3>
      <div className="flex justify-normal">
        <div className="flex space-x-4 ">
          {[0, 1, 2, 3, 4].map((_, index) => (
            <Card
              textButton="Excluir Postagem"
              index={index}
              key={index}
              image={image_test}
            />
          ))}
        </div>
        <AnimationCat />
      </div>
    </div>
  );
};
