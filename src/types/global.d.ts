declare module "path-browserify";
declare module "@components/*";
declare module "@pagecomponents/*";
declare module "@pages/*";
declare module "@helpers/*";
declare module "@/*";
declare module "@context/*";
declare module "@/supabase/*";

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
    image: string | undefined;
    name: string;
    petType: string;
    street: string;
    phone: string;
    description: string;
  }
}
declare module "@/types/User" {
  export type User = {
    created_at?: Date;
    email: string;
    uf: string;
    city: string;
    password: string;
    confirmPassword: string;
    name: string;
  };
}

declare module "@helpers/*" {
  const breeds: string[];
  const UF: string[];
  const classSVG: string[];
  export = { breeds, UF, classSVG };
}
