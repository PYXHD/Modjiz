import styles from "./AuthModal.module.scss";

import Button from "@/components/ui/button/Button";
import Link from "next/link";

function Login() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.title}>
          <img src="/icons/auth_id.svg" alt="icon id" className={styles.icon} />
          <h2>Connexion</h2>
        </div>

        <div className={styles.form}>
          <input type="email" />
          <input type="password" />
          <div className={styles.btnContainer}>
            <Button>Se connecter</Button>
            <Link className={styles.link} href="/">
              Mot de passe oublié ?
            </Link>
          </div>
        </div>

        <div className={styles.info}>
          <p className="text-lead">Pas encore de compte ?</p>
          <div className={styles.btnContainer}>
            <Button>Créer un compte</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
