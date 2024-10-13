import Product from "./products";
import PropTypes from "prop-types";

export default function ProductCollection({ loading, items }) {
  return (
    <div>
      {!loading
        ? items.map((item, index) => {
            return <Product item={item} key={index} />;
          })
        : null}
    </div>
  );
}

ProductCollection.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.array,
};
