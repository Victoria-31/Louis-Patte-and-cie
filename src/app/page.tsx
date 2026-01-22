import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
      <h1>
      <Image 
        src="/logoHealthyPet.svg" 
        alt="logo de healthypet" 
        width={30} 
        height={25}
        className={styles.logo}
        sizes="(max-width: 1024px) 60px"
      />
        healthypet
      </h1>
      <h2>Nous vous aidons à garder votre <strong>compagnon</strong> en bonne santé !</h2>
    </section>
    <Link href="/">ME CONNECTER</Link>
    </main>
  );
}
