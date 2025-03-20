import { Button } from "@material-tailwind/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type ButtonPreviousProps = {
  prev: () => void;
  active: number;
};
export const ButtonPrevious = ({ prev, active }: ButtonPreviousProps) => {
  return (
    <Button
      variant="text"
      className="flex items-center gap-2 text-neutral"
      onClick={prev}
      disabled={active === 1}
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-neutral" />{" "}
      Anterior
    </Button>
  );
};
