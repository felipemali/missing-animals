import { Menu } from "@components/Menu";
import { ContentHome } from "@pages/Home/ContentHome";
import { useAuth } from "@/hooks/useAuth";
// import { useNavigate } from "react-router-dom";

export const Home = () => {
  // const navigate = useNavigate();

  const { user } = useAuth();
  if (!user) {
    return <h1>Faça LOGIN</h1>;
  }

  console.log("User Home:", user);

  return (
    <div className="m-auto w-screen">
      <Menu />
      <ContentHome />
    </div>
  );
};
