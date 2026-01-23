"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Login from "./components/login/Login";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

const closeModal = () => setIsModalOpen(false);

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
      <button
    className={styles.buttonLogin}
    onClick={() => setIsModalOpen(true)}
  >
    Me connecter
  </button>
     {isModalOpen && (
        <div 
          className={styles.modalBackground}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-modal"
        >
          <div 
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Login onClose={closeModal} />
          </div>
        </div>
      )}
    </main>
  );
}
