"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <Link href="/" aria-label="Accueil">
        <Image
          src={pathname === "/" ? "/icons/home-p.svg" : "/icons/home.svg"}
          alt="Icône d'accueil"
          width={32}
          height={32}
        />
      </Link>

      <Link href="/animals" aria-label="Liste des animaux">
        <Image
          src={
          pathname.startsWith("/animals") ? "/icons/dog-p.svg" : "/icons/dog.svg"}          alt="Icône animaux"
          width={32}
          height={32}
        />
      </Link>
    </nav>
  );
}
