// terminé

"use client";

import styles from "./AuthModal.module.scss";

import Button from "@/components/ui/button/Button";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { validatePassword } from "@/lib/auth/validatePassword";
import { createClient } from "@/lib/supabase/browser";

function PasswordReset() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const supabase = createClient();
  const router = useRouter();

  async function handleSubmit() {
    setError("");

    const validationError = validatePassword(newPassword, confirmPassword);

    if (validationError) {
      setError(validationError);
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setError(error.message);
      return;
    }

    router.replace("/auth/password-updated");
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
          <h2>Modifier mon mot de passe</h2>
        </div>

        <div className={styles.form}>
          <p className={`text-body ${styles.centered}`}>
            Saisissez un nouveau mot de passe pour votre compte
          </p>
          <div className={`text-body ${styles.inputContainer}`}>
            <label htmlFor="newPassword">Nouveau mot de passe</label>
            <input
              id="newPassword"
              type="password"
              className={styles.input}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className={`text-body ${styles.inputContainer}`}>
            <label htmlFor="confirmPassword">Confirmer mot de passe</label>
            <input
              id="confirmPassword"
              type="password"
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className={styles.btnContainer}>
            <div
              className={`text-caption ${styles.centered} ${styles.errorContainer}`}
            >
              {error}
            </div>

            <Button onClick={handleSubmit}>Mettre à jour</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PasswordReset;
