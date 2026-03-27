import styles from "./Settings.module.scss";

import Link from "next/link";

import Button from "@/components/ui/button/Button";
import ThemeSwitch from "@/components/settingsPage/themeSwitch/ThemeSwitch";

function Settings() {
  return (
    <div className={styles.preferences}>
      <h1 className="text-center">Préférences</h1>
      <div className={styles.container}>
        <div className={styles.h2Container}>
          <h2>Apparence</h2>
          <div className={styles.subContainer}>
            <div className="text-primary text-body ">Thème</div>
            <ThemeSwitch />
          </div>
        </div>

        <div className={styles.h2Container}>
          <h2>Infos</h2>
          <div className={styles.subContainer}>
            <div className="text-primary text-body ">Version</div>
            <div className="text-primary text-body ">0.7.0</div>
          </div>
          <div className={styles.subContainer}>
            <div className="text-primary text-body ">Auteur</div>
            <div className="text-primary text-body ">Marc CHARVOT</div>
          </div>
          <div className={styles.legal}>
            <Link
              href="/app/settings/legal-notices
            "
              className={`${styles.link} text-primary text-body-medium`}
            >
              Mentions légales
            </Link>
          </div>
          <div className={styles.legal}>
            <Link
              href="/app/settings/privacy-policy
            "
              className={`${styles.link} text-primary text-body-medium`}
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>

        <div className={styles.h2Container}>
          <h2>Support</h2>
          <div className={styles.btnContainer}>
            <p className="text-primary text-body">
              Une question ou un avis à partager ?
            </p>
            <a href="mailto:pyxhd@outlook.fr">
              <Button>Donner un avis</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
