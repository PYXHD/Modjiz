// terminé
"use client";

import styles from "./AuthModal.module.scss";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button/Button";
import Link from "next/link";

import { createClient } from "@/lib/supabase/browser";
import { validateEmail } from "@/lib/auth/validateEmail";

function EmailNotConfirmed() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [showTurnstile, setShowTurnstile] = useState(false);

  const router = useRouter();

  async function handleResend() {
    setError("");

    const validationError = validateEmail(email);

    if (validationError) {
      setError(validationError);
      return;
    }

    setShowTurnstile(true);
  }

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.title}>
          <img
            src="/icons/auth_cross.svg"
            alt="icon cross"
            className={styles.icon}
          />
          <h2>Vérification requise</h2>
        </div>

        <div className={styles.info}>
          <p className={`text-body ${styles.centered}`}>
            Votre adresse e-mail n'a pas encore été confirmée.
          </p>
          <p className={`text-body ${styles.centered}`}>
            Votre adresse e-mail doit être confirmée avant de pouvoir accéder à
            Modjiz.
          </p>
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

            <div
              className={`text-caption ${styles.centered} ${styles.errorContainer}`}
            >
              {error}
            </div>
            <Button onClick={handleResend}>Renvoyer l'email</Button>
            <Link href="/auth/login" className={`text-body ${styles.link}`}>
              Retour à la connexion
            </Link>
          </div>
        </div>
        {showTurnstile && (
          <div className={styles.overlay}>
            <div className={styles.modal}>
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={async (captchaToken) => {
                  const supabase = createClient();

                  const { error } = await supabase.auth.resend({
                    type: "signup",
                    email,
                    options: {
                      captchaToken,
                    },
                  });

                  if (error) {
                    setError("Une erreur est survenue.");
                    console.log(error);
                    setShowTurnstile(false);
                    return;
                  }

                  setShowTurnstile(false);
                  router.replace("/auth/verify-email");
                }}
              />
            </div>
          </div>
        )}

        <div className={styles.info}>
          <p className={`text-small ${styles.centered}`}>
            Vous rencontrez des difficultés avec votre compte ?
          </p>
          <Link
            href="mailto:pyxhd@outlook.fr?subject=Problème de création de compte&body=Décrivez votre problème :"
            className={`text-body ${styles.link}`}
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </main>
  );
}

export default EmailNotConfirmed;
