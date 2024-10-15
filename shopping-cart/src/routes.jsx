import App from "./App";
import Cart from "./Cart";
import Main from "./components/main";
import ProductDetails from "./components/productDetails";
import Store from "./Store";
import ErrorPage from "./errorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
        index: true,
      },
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "store/:id",
        element: <ProductDetails />,
      },
      {
        path: "bag",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
