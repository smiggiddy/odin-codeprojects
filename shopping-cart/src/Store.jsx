import { useEffect, useState } from "react";
import ProductCollection from "./components/productCollection";
import { useOutletContext } from "react-router-dom";

export default function Store() {
  const [cart, setCart, items, setItems] = useOutletContext();
  const [loading, setLoading] = useState(true);
  const url = 'https://fakestoreapi.com/products?limit=5'

  console.table(items)
  useEffect(() => {
    if (items === null) {

    fetch(url, { mode: "cors" })
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
    } else {
      setLoading(false);
    }
  }, []);

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

// function useFakeStoreAPI() {
//   const [items, setItems] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products?limit=5", { mode: "cors" })
//       .then((response) => {
//         if (response.status >= 400) {
//           throw new Error("unable to fetch items");
//         }
//         return response.json();
//       })
//       .then((response) => {
//         const arr = [];
//         response.forEach((item) => {
//           arr.push({
//             title: item.title,
//             price: item.price,
//             image: item.image,
//             id: crypto.randomUUID(),
//           });
//         });
//         setItems(arr);
//       })
//       .catch((error) => console.log(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return { items, loading };
// }
