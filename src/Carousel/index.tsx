import { Card } from "../components/Card";
import image_test from "../assets/image_test.png";

export const Carousel = () => {
  return (
    <>
      <div className="carousel w-full">
        {[0, 1, 2, 3, 4].map((_, index) => (
          <div id={`item-${index}`} className="carousel-item w-full">
            <Card key={index} image={image_test} />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};
