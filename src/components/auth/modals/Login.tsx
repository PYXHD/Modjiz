// terminé

"use client";

import styles from "./AuthModal.module.scss";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button/Button";
import Link from "next/link";

import { login } from "@/lib/auth/login";
import { validateLogin } from "@/lib/auth/validateLogin";
import { initializeRealMode } from "@/domain/session/initializeRealMode";

function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showTurnstile, setShowTurnstile] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    const validationError = validateLogin(email, password);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setShowTurnstile(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src="/icons/auth_id.svg" alt="icon id" className={styles.icon} />
        <h2>Connexion</h2>
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
        <div className={styles.btnContainer}>
          <div
            className={`text-caption ${styles.centered} ${styles.errorContainer}`}
          >
            {error}
          </div>
          <Button onClick={handleSubmit}>Se connecter</Button>
          <Link className={`text-body ${styles.link}`} href="/auth/password">
            Mot de passe oublié ?
          </Link>
        </div>

        {showTurnstile && (
          <div className={styles.overlay}>
            <div className={styles.modal}>
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={async (captchaToken) => {
                  const { data, error } = await login(
                    email,
                    password,
                    captchaToken,
                  );

                  if (error) {
                    setError("Adresse e-mail ou mot de passe incorrect.");

                    setShowTurnstile(false);

                    return;
                  }

                  setShowTurnstile(false);

                  initializeRealMode();
                  router.push("/app");
                }}
              />
            </div>
          </div>
        )}
      </div>

      <div className={styles.info}>
        <p className={`text-lead ${styles.centered}`}>Pas encore de compte ?</p>
        <div className={styles.btnContainer}>
          <Link href="/auth/signup" className={`text-lead ${styles.authBtn}`}>
            Créer un compte
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
