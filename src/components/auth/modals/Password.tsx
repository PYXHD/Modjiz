import styles from "./AuthModal.module.scss";

import Link from "next/link";

function Password() {
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

        <div className={styles.info}>
          <p className={`text-body ${styles.centered}`}>
            Vous avez oublié votre mot de passe ?
          </p>

          <Link href="/" className={`text-lead ${styles.authBtn}`}>
            Demander un nouveau mot de passe
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Password;
