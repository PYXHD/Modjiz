import styles from "./AuthModal.module.scss";

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
          <div className={`text-body ${styles.inputContainer}`}>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" className={styles.input} />
          </div>
          <div className={`text-body ${styles.inputContainer}`}>
            <label htmlFor="password">Mot de passe</label>
            <input id="password" type="password" className={styles.input} />
          </div>
          <div className={styles.btnContainer}>
            <Link href="/" className={`text-lead ${styles.authBtn}`}>
              Se connecter
            </Link>
            <Link className={`text-body ${styles.link}`} href="/auth/password">
              Mot de passe oublié ?
            </Link>
          </div>
        </div>

        <div className={styles.info}>
          <p className="text-lead">Pas encore de compte ?</p>
          <div className={styles.btnContainer}>
            <Link href="/auth/signup" className={`text-lead ${styles.authBtn}`}>
              Créer un compte
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
