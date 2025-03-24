import { supabase } from "@/supabase/supabaseClient";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addUserTable = async (userData: any) => {
  const { data: insertData, error: insertError } = await supabase
    .from("users")
    .upsert([
      {
        email: userData.email,
        uf: userData.user_metadata.uf,
        city: userData.user_metadata.city,
        password: userData.user_metadata.password,
        name: userData.user_metadata.name,
      },
    ]);
  console.error("Dados de usuario inseridos");
  if (insertError) {
    console.error("Erro ao inserir dados do usuário:", insertError.message);
  } else {
    console.log(
      "Dados do usuário inseridos/atualizados na tabela:",
      insertData
    );
  }
};
