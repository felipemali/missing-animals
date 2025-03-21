import { supabase } from "@/supabaseClient";
import { Pets } from "@/types/Pets";
export const addPet = async (pet: Pets) => {
  const { data, error } = await supabase.from("pets").insert([pet]);

  if (error) {
    console.log("Erro ao adicionar pet", error);
    return null;
  }
  return data;
};
