// reporté

import styles from "./AuthModal.module.scss";

import Button from "@/components/ui/button/Button";
import Link from "next/link";

function VerifyEmail() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.title}>
          <img
            src="/icons/auth_exclam.svg"
            alt="icon exclam"
            className={styles.icon}
          />
          <h2>E-mail envoyé</h2>
        </div>

        <div className={styles.info}>
          <p className={`text-lead ${styles.centered}`}>
            Un e-mail de confirmation vient d'être envoyé à votre adresse.
          </p>
          <p className={`text-lead ${styles.centered}`}>
            Cliquez sur le lien pour activer votre compte avant de vous
            connecter.
          </p>
        </div>

        <div className={styles.info}>
          <p className={`text-lead ${styles.centered}`}>
            Vous n'avez rien reçu ?
          </p>
          <p className={`text-lead ${styles.centered}`}>
            Vérifiez votre dossier spam ou demandez un nouvel envoi.
          </p>
          <div className={styles.btnContainer}>
            <Button>Renvoyez l'e-mail</Button>
            <Link className={`text-body ${styles.link}`} href="/auth/login">
              Retour à la connexion
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default VerifyEmail;
