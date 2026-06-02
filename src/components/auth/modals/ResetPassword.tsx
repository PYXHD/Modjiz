import styles from "./AuthModal.module.scss";

import Button from "@/components/ui/button/Button";

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
          <p>Saisissez un nouveau mot de passe pour votre compte</p>
          <input type="password" />
          <input type="password" />
          <div className={styles.btnContainer}>
            <Button>Mettre à jour</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ResetPassword;
