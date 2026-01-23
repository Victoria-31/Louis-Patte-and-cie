"use client";

import { useState } from "react";
import styles from './Register.module.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios, { type AxiosError } from "axios";


export default function Register({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, { email, password, userRole });
      toast.success("Inscription réussie !");
      onClose();
    } 
    catch (err: unknown) {
      const error = err as AxiosError<{ message: string }>;
      const errorMessage = error.response?.data?.message || "Erreur lors de l'inscription";
      setError(errorMessage);
      toast.error(errorMessage);
    }
}

  return (
    <form onSubmit={handleRegister} className={styles.registerForm}>
      <h2>Inscription</h2>
      <label htmlFor="userRole"> Role </label>
      <input
        type="text"
        placeholder="Role"
        value={userRole}
        onChange={(e) => setUserRole(e.target.value)}
        required
      />
      <label htmlFor="email"> Email</label>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password"> Mot de passe</label>

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className={styles.buttonSignup}>Créer mon compte</button>
        <p className="errorMessage">{error}</p>
      <button type="button" className={styles.buttonBackSignin} onClick={onClose}>
        Retour à la connexion
      </button>
    </form>
  );
}