import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Home/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import ErrorPage from "../Pages/ErrorPage";
import Service from "../Pages/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/service/:id",
        element: <Service></Service>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);
export default router;
