import styles from "./AuthModal.module.scss";

import Button from "@/components/ui/button/Button";
import Link from "next/link";

function SignUp() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.title}>
          <img src="/icons/auth_id.svg" alt="icon id" className={styles.icon} />
          <h2>Connexion</h2>
        </div>

        <div className={styles.form}>
          <div className={`text-body ${styles.inputContainer}`}>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" className={styles.input} />
          </div>
          <div className={`text-body ${styles.inputContainer}`}>
            <label htmlFor="password">Mot de passe</label>
            <input id="password" type="password" className={styles.input} />
          </div>
          <div className={`text-body ${styles.inputContainer}`}>
            <label htmlFor="password">Confirmer mot de passe</label>
            <input id="password" type="password" className={styles.input} />
          </div>
          <div className={styles.btnContainer}>
            <Button>Créer un compte</Button>
          </div>
        </div>

        <div className={styles.info}>
          <p className={`text-lead ${styles.centered}`}>Déjà un compte ?</p>
          <div className={styles.btnContainer}>
            <Link href="/auth/login" className={`text-lead ${styles.authBtn}`}>
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
