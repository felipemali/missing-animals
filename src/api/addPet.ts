import { supabase } from "@/supabase/supabaseClient";
import { Pets } from "@/types/Pets";

export const addPet = async (pett: Pets) => {
  console.log("pet:", pett);

  const { data, error } = await supabase.from("pet").insert([pett]);

  if (error) {
    console.log("Erro ao adicionar pet", error);
    return null;
  }
  return data;
};
