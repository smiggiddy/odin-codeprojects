import Button from "./button";
import { Link } from "react-router-dom";
import styles from "./main.module.css";

export default function Main() {
  return (
    <main>
      <Default />
    </main>
  );
}

function Default() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>
        Our products help you skill up faster
      </h1>
      <p>
        Trying to pivot into tech? There&apos;s a lot to figure out. We can help
        you navigate the path with our products. Fast results and guaranteed
        growth.
      </p>
      <Link to="/store">
        <Button text={"Start shopping now!"} styles={"action"} />
      </Link>
    </div>
  );
}
