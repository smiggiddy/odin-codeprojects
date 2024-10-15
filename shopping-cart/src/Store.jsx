import { useEffect, useState } from "react";
import ProductCollection from "./components/productCollection";
import { useOutletContext } from "react-router-dom";

export default function Store() {
  const [cart, setCart, items, setItems] = useOutletContext();
  const [loading, setLoading] = useState(true);

  useFakeStoreAPIData(items, setItems, loading, setLoading);

  return (
    <div>
      <h1>Smig.Tech Coaching Store</h1>
      <ProductCollection
        loading={loading}
        items={items}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}

function useFakeStoreAPIData(items, setItems, loading, setLoading) {
  useEffect(() => {
    if (items !== null) {
      setLoading(false);
      return;
    }

    fetch("https://fakestoreapi.com/products?limit=5", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("unable to fetch items");
        }
        return response.json();
      })
      .then((response) => {
        const arr = [];
        response.forEach((item) => {
          arr.push({
            title: item.title,
            price: item.price,
            image: item.image,
            id: crypto.randomUUID(),
          });
        });
        setItems(arr);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [items, setItems, loading, setLoading]);
}
