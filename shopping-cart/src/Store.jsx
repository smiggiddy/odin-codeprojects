import { useEffect, useState } from "react";
import ProductCollection from "./components/productCollection";

export default function Store(props) {
  const { items, loading } = useFakeStoreAPI();
  return (
    <div>
      <h1>Smig.Tech Coaching Store</h1>
      <ProductCollection loading={loading} items={items} />
    </div>
  );
}

function useFakeStoreAPI() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          return { error: "unable to fetch items" };
        }
        return response.json();
      })
      .then((response) => {
        const arr = [];
        response.forEach((item) => {
          arr.push({ title: item.title, price: item.price, image: item.image });
        });
        setItems(arr);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return { items, loading };
}
