import { IconButton } from "@material-tailwind/react";
import { ItemProps } from "@/models/ItemPagination";

type PaginationProps = {
  cards: number[];
  cardsPerPage: number;
  active: number;
  getItemProps: (index: number) => ItemProps;
};
export const Pagination = ({
  cards,
  cardsPerPage,
  active,
  getItemProps,
}: PaginationProps) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from(
        { length: Math.ceil(cards.length / cardsPerPage) },
        (_, i) => (
          <IconButton
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            className="text-neutral"
            key={i + 1}
            {...getItemProps(i + 1)}
            color={active === i + 1 ? "blue" : "gray"}
            variant="text"
          >
            {i + 1}
          </IconButton>
        )
      )}
    </div>
  );
};
