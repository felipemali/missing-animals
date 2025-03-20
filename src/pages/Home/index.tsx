import { Menu } from "@components/Menu";
import { ContentHome } from "@pages/Home/ContentHome";

export const Home = () => {
  return (
    <div className="m-auto w-screen">
      <Menu />
      <ContentHome />
    </div>
  );
};
