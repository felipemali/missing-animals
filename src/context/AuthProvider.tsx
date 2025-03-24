import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { addUserTable } from "../api/addUserTable";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [teste, setTeste] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setUser(session?.user || null);
      } catch (error) {
        console.error("Erro ao obter sessão:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user || null);

        if (_event === "SIGNED_IN") {
          const userData = session?.user;

          if (userData) {
            const { data, error } = await supabase
              .from("users")
              .select("*")
              .eq("id", userData.id)
              .single();

            if (error && error.code === "PGRST116") {
              // Se não encontrar o usuário, insira os dados
              addUserTable(userData);
            } else {
              console.log("Usuário já existe na tabela:", data);
            }
          }
        } else if (_event === "SIGNED_OUT") {
          console.log("Token expirado, usuário deslogado.");
          supabase.auth.signOut();
          navigate("/login");
        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, teste, setUser, setTeste }}>
      {children}
    </AuthContext.Provider>
  );
};
