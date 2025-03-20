import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import { Pets } from "@/types/Pets";

export const useFecthPets = () => {
  const [pets, setPets] = useState<Pets[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("pets").select("*");
      if (error) {
        console.error("Erro ao buscar pets:", error.message);
      } else {
        setPets(data);
      }
    };

    fetchProducts();
  }, []);

  return pets;
};
