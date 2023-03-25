import {
  createBrowserRouter,
} from "react-router-dom";
import Products from "../pages/Products"
import Cart from "../pages/Cart";
import Layout from "../components/Layout";
const router = createBrowserRouter(
  [{
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }]
);
export default router;
