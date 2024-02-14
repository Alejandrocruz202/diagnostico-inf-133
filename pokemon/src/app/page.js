import Image from "next/image";
import styles from "./page.module.css";
import Title from "./components/title";
export default function Home() {
  return (
    <main className={styles.main}>
      <Title/>
    </main>
  );
}
