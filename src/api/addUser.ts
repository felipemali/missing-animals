import { supabase } from "@/supabase/supabaseClient";
import { User } from "@/types/User";

export const signUpUser = async ({ city, email, name, password, uf }: User) => {
  console.log("dados usuario:", name, email, password);

  const { user, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        city,
        email,
        name,
        password,
        uf,
      },
    },
  });

  if (error) {
    console.error("Erro ao criar conta:", error);
    return null;
  }

  console.log("dados do usuario:", user);

  // const { data: session, error: loginError } =
  //   await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });

  // if (loginError) {
  //   console.error("Erro ao fazer login após o cadastro:", loginError.message);
  //   return null;
  // }

  // console.log("Usuário autenticado:", session?.user);
};
