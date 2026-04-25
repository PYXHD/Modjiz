"use client";

import Link from "next/link";

import Button from "@/components/ui/button/Button";
import ThemeSwitch from "@/components/settingsPage/themeSwitch/ThemeSwitch";

import styles from "./Settings.module.scss";

function Settings() {
  const goToLanding = () => {
    localStorage.removeItem("app-mode");
    localStorage.removeItem("moodtrack-data"); // 👈 important

    document.cookie = "has-onboarded=; path=/; max-age=0";
    document.cookie = "app-mode=; path=/; max-age=0";

    window.location.href = "/";
  };

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
            <div className="text-primary text-body ">1.2.7</div>
          </div>
          <div className={styles.subContainer}>
            <div className="text-primary text-body ">Auteur</div>
            <div className="text-primary text-body ">Marc CHARVOT</div>
          </div>
          <div className={styles.legal}>
            <Link
              href="/app/settings/legal-notices"
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
          <h2>Découverte</h2>

          <div className={styles.legal}>
            <Button onClick={goToLanding}>Revoir la présentation</Button>
          </div>
        </div>

        <div className={styles.h2Container}>
          <h2>Support</h2>

          <div className={styles.btnContainer}>
            <p className="text-primary text-body">Une question ?</p>
            <a href="mailto:pyxhd@outlook.fr">
              <Button>Me contacter</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
