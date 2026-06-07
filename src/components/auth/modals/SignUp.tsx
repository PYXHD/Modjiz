// terminé

"use client";

import styles from "./AuthModal.module.scss";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button/Button";
import Link from "next/link";

import { signup } from "@/lib/auth/signup";
import { validateSignup } from "@/lib/auth/validateSignup";

function SignUp() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");

  const [showTurnstile, setShowTurnstile] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    const validationError = validateSignup(email, password, passwordConfirmed);

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
          <img src="/icons/auth_id.svg" alt="icon id" className={styles.icon} />
          <h2>Créer un compte</h2>
        </div>

        <div className={styles.form}>
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
          <div className={`text-body ${styles.inputContainer}`}>
            <label htmlFor="password">Mot de passe</label>
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
            <Button onClick={handleSubmit}>Créer un compte</Button>
          </div>

          {showTurnstile && (
            <div className={styles.overlay}>
              <div className={styles.modal}>
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={async (captchaToken) => {
                    const { error } = await signup(
                      email,
                      password,
                      captchaToken,
                    );

                    if (error) {
                      if (error.message === "User already registered") {
                        const shouldLogin = confirm(
                          "Cette adresse e-mail est déjà associée à un compte.\n\nVoulez-vous vous connecter ?.",
                        );
                        if (shouldLogin) {
                          router.push("/auth/login");
                        }

                        setShowTurnstile(false);
                        return;
                      }
                    }
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div className={styles.info}>
          <p className={`text-lead ${styles.centered}`}>Déjà un compte ?</p>
          <div className={styles.btnContainer}>
            <Link href="/auth/login" className={`text-lead ${styles.authBtn}`}>
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
