import { supabase } from "./supabaseClient";

const createBucket = async () => {
  try {
    const { data, error } = await supabase.storage.createBucket("images", {
      public: true,
    });

    if (error) {
      console.error("Erro ao criar o bucket:", error.message);
    } else {
      console.log("Bucket criado com sucesso:", data);
    }
  } catch (error) {
    console.error("Erro ao criar o bucket:", error.message);
  }
};
createBucket();
