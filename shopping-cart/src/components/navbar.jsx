import styles from "./navbar.module.css";

export default function Navbar(props) {
  return (
    <nav className={styles.nav}>
      <h1>Smig.Tech</h1>
      <Nav />
      <button>I&apos;m Ready</button>
    </nav>
  );
}

function Nav() {
  return (
    <ul className={styles.nav}>
      <li>home</li>
      <li>shop</li>
    </ul>
  );
}
