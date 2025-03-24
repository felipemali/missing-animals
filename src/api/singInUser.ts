import { supabase } from "@/supabase/supabaseClient";

type CredentialUser = {
  email: string;
  password: string;
};
export const singInUser = async ({ email, password }: CredentialUser) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  
  console.log("chegou aq");

  if (error) {
    console.error("Erro ao fazer login:", error.message);
    return null;
  }

  if (!data.user?.email_confirmed_at) {
    console.log("Usuário não confirmou o e-mail");
    // Aqui, você pode redirecionar para a página de confirmação de e-mail
    return null;
  }
  console.log("Access Token:", data.session?.access_token);
  return data.user;
};
