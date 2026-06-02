import styles from "./AuthModal.module.scss";

import Button from "@/components/ui/button/Button";

function PasswordSent() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.title}>
          <img
            src="/icons/auth_lock.svg"
            alt="icon lock"
            className={styles.icon}
          />
          <h2>Réinitialisation</h2>
        </div>

        <div className={styles.info}>
          <p className="text-lead">
            Un email de réinitialisation a été envoyé.
          </p>
          <p className="text-lead">
            Consultez votre boîte mail puis cliquez sur le lien reçu.
          </p>
        </div>

        <div className={styles.info}>
          <p className="text-lead">Vous n'avez rien reçu ?</p>

          <Button>Demander un nouveau mot de passe</Button>
        </div>
      </div>
    </main>
  );
}

export default PasswordSent;
