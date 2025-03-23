import { supabase } from "@/supabase/supabaseClient";

export const singInUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Erro ao fazer login:", error.message);
    return null;
  }

  if (!data.user?.email_confirmed_at) {
    console.log("Usuário não confirmou o e-mail");
    // Aqui, você pode redirecionar para a página de confirmação de e-mail
    return null;
  }

  return data.user;
};
