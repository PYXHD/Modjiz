import styles from "./AuthModal.module.scss";

import Button from "@/components/ui/button/Button";

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
          <p className="text-lead">Votre mot de passe a bien été modifié.</p>
          <Button>Se connecter</Button>
        </div>
      </div>
    </main>
  );
}

export default PasswordUpdated;
