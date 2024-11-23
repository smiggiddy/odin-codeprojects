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
    <>
      <div className={styles.container}>
        <h1 className={styles.mainHeading}>
          Our products help <span className={styles["heading-color"]}>you</span>{" "}
        </h1>
        <p className={styles["sub-heading"]}>
          Keep engineers happy using working technology. Fast results and
          guaranteed value from day one.
        </p>
        <Link to="/store">
          <Button text={"Start shopping now!"} />
        </Link>
        <div>
          <img src="/hero.jpg" alt="" className={styles["hero-img"]} />
        </div>
      </div>
    </>
  );
}
