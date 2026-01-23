"use client";

import { useState } from "react";
import styles from './Login.module.css';
import Register from "../register/Register";
import axios, { type AxiosError } from "axios";
import { toast } from "react-toastify";

export default function Login({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); 

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, { email, password });
      const role = response.data.role;
      localStorage.setItem("role", role);
      toast.success("Connexion réussie !");
      onClose(); 

  } catch (err: unknown) {
      const error = err as AxiosError<{ message: string }>;
      const errorMessage = error.response?.data?.message || "Erreur lors de l'inscription";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  if (showRegister) {
    return <Register onClose={handleCloseRegister} />;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h2>Connexion</h2>
      <label htmlFor="email" >
        Email
      </label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password" >
        Mot de passe
      </label>
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="button" onClick={onClose} className={styles.buttonCancel}>
        Annuler
      </button>
      <button type="submit" className={styles.buttonConnect}>
        Connexion
      </button>

      {error && <p className="errorMessage">{error}</p>}

      <p className={styles.registerPrompt}>
        Pas encore de compte ?
      </p>
      <button type="button" className={styles.buttonRegister} onClick={handleRegisterClick}>
        Inscrivez-vous
      </button>
    </form>
  );
}
