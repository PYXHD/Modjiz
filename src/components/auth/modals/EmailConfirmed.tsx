import styles from "./AuthModal.module.scss";

import Button from "@/components/ui/button/Button";

function EmailConfirmed() {
  return (
    <main>
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
          <p className="text-lead">L'email a bien été confirmé.</p>
          <p className="text-lead">
            Vous pouvez désormais profiter de l'application en toute liberté.
          </p>
          <p className="text-lead">
            Pensez à accepter les cookies pour une expérience optimale.
          </p>

          <Button>Démarrer Modjiz</Button>
        </div>
      </div>
    </main>
  );
}

export default EmailConfirmed;
