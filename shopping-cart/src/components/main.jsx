import styles from "./main.module.css";

export default function Main(props) {
  return (
    <main>
      <div>
        <h1 className={styles.mainHeading}>We help you skill up faster</h1>
        <p>
          Trying to pivot into tech? There&apos;s a lot to figure out. We can
          help you navigate the path. Fast results and guaranteed growth.
        </p>
        <button>BOOK INTRO CALL</button>
      </div>
    </main>
  );
}
