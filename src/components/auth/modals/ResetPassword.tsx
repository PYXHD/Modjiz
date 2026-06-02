import styles from "./AuthModal.module.scss";

function ResetPassword() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.title}>
          <img
            src="/icons/auth_lock.svg"
            alt="icon lock"
            className={styles.icon}
          />
          <h2>Nouveau mot de passe</h2>
        </div>

        <div className={styles.form}>
          <p className={`text-body ${styles.centered}`}>
            Saisissez un nouveau mot de passe pour votre compte
          </p>
          <div className={`text-body ${styles.inputContainer}`}>
            <label htmlFor="password">Mot de passe</label>
            <input id="password" type="password" className={styles.input} />
          </div>
          <div className={`text-body ${styles.inputContainer}`}>
            <label htmlFor="password">Nouveau mot de passe</label>
            <input id="password" type="password" className={styles.input} />
          </div>
          <div className={styles.btnContainer}>
            <button className={`text-lead ${styles.authBtn}`}>
              Mettre à jour
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ResetPassword;
