import { useRoutes } from "react-router-dom";

import routes from "./routes";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/context/AuthProvider";

export const App = () => {
  const elements = useRoutes(routes);

  return (
    <AuthProvider>
      {elements}
      <Footer />
    </AuthProvider>
  );
};
