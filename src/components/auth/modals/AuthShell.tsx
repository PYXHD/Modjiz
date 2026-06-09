import styles from "./AuthModal.module.scss";

import BackToLanding from "./BackToLanding";

type AuthShellProps = {
  children: React.ReactNode;
};

function AuthShell({ children }: AuthShellProps) {
  return (
    <main className={styles.authShell}>
      <BackToLanding />

      {children}
    </main>
  );
}

export default AuthShell;
