import App from "./App";
import Cart from "./Cart";
import Store from "./Store";
import ErrorPage from "./errorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":path",
        element: <Store />,
        index: true,
      },
      {
        path: "store/:path",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
