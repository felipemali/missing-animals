import { useRoutes } from "react-router-dom";

import routes from "./routes";
import { Footer } from "./components/Footer";

export const App = () => {
  const elements = useRoutes(routes);

  return (
    <>
      {elements}
      <Footer />
    </>
  );
};
