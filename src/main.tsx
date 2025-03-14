import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home/index.tsx";
import { Footer } from "./Footer/index.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <Home />
    <Footer />
  </>
);
