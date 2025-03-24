import { useEffect, useState } from "react";
import { supabase } from "@/supabase/supabaseClient";
import { Pets } from "@/types/Pets";

export const useFecthPets = () => {
  const [pets, setPets] = useState<Pets[]>([]);

  useEffect(() => {
    console.log("useEffect foi chamado");
    const fetchPets = async () => {
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

      try {
        const { data, error } = await supabase.from("pet").select("*");
        console.log("Dados recebidos do Supabase:", data);
        console.log("Erro recebido:", error);

        if (error) {
          console.error("Erro ao buscar pets:", error.message);
        } else {
          setPets(data);
        }
      } catch (err) {
        console.error("Erro inesperado ao buscar pets:", err);
      }
    };
    fetchPets();
  }, []);

  return pets;
};
