import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Home/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
    ],
  },
]);
export default router;
