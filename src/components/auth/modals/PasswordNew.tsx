// terminé

"use client";

import styles from "./AuthModal.module.scss";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button/Button";

import { updatePassword } from "@/lib/auth/updatePassword";
import { validatePassword } from "@/lib/auth/validatePassword";

function PasswordNew() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");

  const [error, setError] = useState("");

  async function handleSubmit() {
    const validationError = validatePassword(password, passwordConfirmed);

    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");

    const { error } = await updatePassword(password);

    if (error) {
      setError("Une erreur est survenue.");
      return;
    }

    router.push("/auth/password-updated");
  }

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.title}>
          <img
            src="/icons/auth_lock.svg"
            alt="icon lock"
            className={styles.icon}
          />
          <h2>Définir nouveau mot de passe</h2>
        </div>

        <div className={styles.form}>
          <p className={`text-body ${styles.centered}`}>
            Choisissez un nouveau mot de passe pour votre compte.
          </p>

          <div className={`text-body ${styles.inputContainer}`}>
            <label htmlFor="password">Nouveau mot de passe</label>
            <input
              required
              id="password"
              type="password"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={`text-body ${styles.inputContainer}`}>
            <label htmlFor="passwordConfirm">Confirmer mot de passe</label>
            <input
              required
              id="passwordConfirm"
              type="password"
              className={styles.input}
              onChange={(e) => setPasswordConfirmed(e.target.value)}
            />
          </div>

          <div className={styles.btnContainer}>
            <div
              className={`text-caption ${styles.centered} ${styles.errorContainer}`}
            >
              {error}
            </div>
            <Button onClick={handleSubmit}>
              Mettre à jour le mot de passe
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PasswordNew;
