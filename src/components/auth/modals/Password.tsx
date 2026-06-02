import styles from "./AuthModal.module.scss";

import Button from "@/components/ui/button/Button";

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
          <p className="text-lead">Vous avez oublié votre mot de passe ?</p>

          <Button>Demander un nouveau mot de passe</Button>
        </div>
      </div>
    </main>
  );
}

export default Password;
