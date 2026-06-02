import styles from "./AuthModal.module.scss";

import Link from "next/link";

function EmailConfirmed() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img
          src="/icons/auth_check.svg"
          alt="icon check"
          className={styles.icon}
        />
        <h2>E-mail confirmé</h2>
      </div>

      <div className={styles.info}>
        <p className={`text-body ${styles.centered}`}>
          L'email a bien été confirmé.
        </p>
        <p className={`text-body ${styles.centered}`}>
          Vous pouvez désormais profiter de l'application en toute liberté.
        </p>
        <p className={`text-body ${styles.centered}`}>
          Pensez à accepter les cookies pour une expérience optimale.
        </p>

        <Link href="/" className={`text-lead ${styles.authBtn}`}>
          Démarrer Modjiz
        </Link>
      </div>
    </div>
  );
}

export default EmailConfirmed;
