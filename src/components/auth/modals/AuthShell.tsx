import styles from "./AuthModal.module.scss";

import Logo from "@/assets/img/logo.svg";

type AuthShellProps = {
  children: React.ReactNode;
};

function AuthShell({ children }: AuthShellProps) {
  return (
    <main className={styles.authShell}>
      <Logo className={styles.heroLogo} />

      {children}
    </main>
  );
}

export default AuthShell;
