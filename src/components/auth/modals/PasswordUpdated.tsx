// terminé

import styles from "./AuthModal.module.scss";

import Link from "next/link";

function PasswordUpdated() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.title}>
          <img
            src="/icons/auth_check.svg"
            alt="icon check"
            className={styles.icon}
          />
          <h2>Mot de passe mis à jour</h2>
        </div>

        <div className={styles.info}>
          <p className={`text-body ${styles.centered}`}>
            Votre mot de passe a bien été modifié.
          </p>
          <Link className={`text-lead ${styles.authBtn}`} href="/auth/login">
            Se connecter
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PasswordUpdated;
