import styles from "./AuthModal.module.scss";

import Button from "@/components/ui/button/Button";

function SignUp() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>Créer un compte</h2>
          </div>

          <div className={styles.form}>
            <input type="email" />
            <input type="password" />
            <input type="password" />
            <Button>Créer un compte</Button>
          </div>

          <div className={styles.info}>
            <p className="text-lead">Déjà un compte ?</p>
            <Button>Se connecter</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
