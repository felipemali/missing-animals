declare module "path-browserify";
declare module "@components/*";
declare module "@pagecomponents/*";
declare module "@pages/*";
declare module "@helpers/*";
declare module "@/*";

declare module "@/models/ItemPagination" {
  export interface ItemProps {
    variant: "filled" | "text";
    color: string;
    onClick: () => void;
  }
}
declare module "@/types/Pets" {
  export interface Pets {
    created_at: Date;
    name: string;
    description: string;
    city: string;
  }
}
declare module "@helpers/*" {
  const breeds: string[];
  const UF: string[];
  const classSVG: string[];
  export = { breeds, UF, classSVG };
}
