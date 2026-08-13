"use client";

import { useState } from "react";
import styles from "./Legals.module.scss";
import { Turnstile } from "@marsidev/react-turnstile";
import { createClient } from "@/lib/supabase/browser";

import Logo from "@/assets/img/logo.svg";
import { validateEmail } from "@/lib/auth/validateEmail";

import Button from "../ui/button/Button";

function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showTurnstile, setShowTurnstile] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  function handleSubmit() {
    const validationError = validateEmail(email);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setShowTurnstile(true);
  }

  return (
    <div className={styles.container}>
      <Logo className={styles.heroLogo} />
      <h1 className="text-center">Suppression du compte</h1>

      {requestSent ? (
        <div className={styles.deleteContainer}>
          <p className="text-primary text-policies text-center">
            <strong>Vérifiez votre boîte e-mail</strong>
          </p>

          <p className="text-primary text-policies text-center">
            Si un compte Modjiz est associé à cette adresse, vous recevrez un
            e-mail contenant les instructions pour poursuivre la suppression de
            votre compte.
          </p>

          <p className="text-primary text-policies text-center">
            Pensez également à vérifier vos courriers indésirables.
          </p>
        </div>
      ) : (
        <div className={styles.deleteContainer}>
          <p className="text-primary text-policies text-center">
            Supprimez définitivement votre compte Modjiz et les données qui lui
            sont associées. Entrez l’adresse e-mail utilisée lors de votre
            inscription pour recevoir les instructions de suppression.
          </p>

          <div className={styles.form}>
            <div className={`text-body ${styles.inputContainer}`}>
              <label htmlFor="email">E-mail</label>

              <input
                required
                id="email"
                type="email"
                value={email}
                autoComplete="email"
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div
              className={`text-caption ${styles.centered} ${styles.errorContainer}`}
            >
              {error}
            </div>

            <Button onClick={handleSubmit}>Valider</Button>
          </div>
        </div>
      )}

      {showTurnstile && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={async (captchaToken) => {
                const supabase = createClient();

                const { error } = await supabase.functions.invoke(
                  "request-account-deletion",
                  {
                    body: {
                      email,
                      captchaToken,
                    },
                  },
                );

                if (error) {
                  console.error(error);
                  setError("Une erreur est survenue.");
                  setShowTurnstile(false);
                  return;
                }

                setShowTurnstile(false);
                setRequestSent(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteAccount;
