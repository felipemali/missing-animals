import { RouteObject } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddLostPet } from "./pages/AddLostPets";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/criar-conta",
    element: <Register />,
  },
  {
    path: "/adicionar-pet",
    element: <AddLostPet />,
  },
];

export default routes;
