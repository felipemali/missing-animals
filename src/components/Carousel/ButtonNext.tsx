import { Button } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type ButtonNextProps = {
  next: () => void;
  active: number;
  cards: number[];
  cardsPerPage: number;
};
export const ButtonNext = ({
  next,
  active,
  cards,
  cardsPerPage,
}: ButtonNextProps) => {
  return (
    <Button
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      variant="text"
      className="flex items-center gap-2 text-neutral"
      onClick={next}
      disabled={active === Math.ceil(cards.length / cardsPerPage)}
    >
      Próxima
      <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-neutral" />
    </Button>
  );
};
