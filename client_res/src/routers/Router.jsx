import {
  createBrowserRouter,
} from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <></>,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
]);