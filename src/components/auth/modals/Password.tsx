// terminé

"use client";

import styles from "./AuthModal.module.scss";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { validateEmail } from "@/lib/auth/validateEmail";
import { resetPassword } from "@/lib/auth/resetPassword";

import Button from "@/components/ui/button/Button";

function Password() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [showTurnstile, setShowTurnstile] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    const validationError = validateEmail(email);

    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setShowTurnstile(true);
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
          <h2>Mot de passe oublié ?</h2>
        </div>

        <div className={styles.form}>
          <p className={`text-body ${styles.centered}`}>
            Vous avez oublié votre mot de passe ?
          </p>

          <div className={`text-body ${styles.inputContainer}`}>
            <label htmlFor="email">E-mail</label>
            <input
              required
              id="email"
              type="email"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.btnContainer}>
            <div
              className={`text-caption ${styles.centered} ${styles.errorContainer}`}
            >
              {error}
            </div>
            <Button onClick={handleSubmit}>
              Demander un nouveau mot de passe
            </Button>

            <Link className={`text-body ${styles.link}`} href="/auth/login">
              Retour à la connexion
            </Link>
          </div>

          {showTurnstile && (
            <div className={styles.overlay}>
              <div className={styles.modal}>
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={async (captchaToken) => {
                    const { error } = await resetPassword(email, captchaToken);

                    if (error) {
                      console.error(error);
                      setError("Une erreur est survenue.");

                      setShowTurnstile(false);
                      return;
                    }

                    setShowTurnstile(false);
                    router.push("/auth/password-sent");
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Password;
