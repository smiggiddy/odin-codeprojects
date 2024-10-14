import App from "./App";
import Cart from "./Cart";
import Main from "./components/main";
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
        path: "bag",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
