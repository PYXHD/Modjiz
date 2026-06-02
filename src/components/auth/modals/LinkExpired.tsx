import styles from "./AuthModal.module.scss";

import Button from "@/components/ui/button/Button";
import Link from "next/link";

function LinkExpired() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.title}>
          <img
            src="/icons/auth_cross.svg"
            alt="icon cross"
            className={styles.icon}
          />
          <h2>Lien expiré</h2>
        </div>

        <div className={styles.info}>
          <p className="text-lead">
            Le lien que vous avez utilisé n'est plus valide.
          </p>
          <p className="text-lead">
            Veuillez demander un nouveau lien pour continuer.
          </p>

          <Button>Nouveau lien</Button>
        </div>

        <div className={styles.info}>
          <p className="text-lead">
            Vous rencontrez des difficultés dans la création de votre compte ?
          </p>
          <Link href="/">Nous contacter</Link>
        </div>
      </div>
    </main>
  );
}

export default LinkExpired;
