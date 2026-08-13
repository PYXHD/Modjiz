"use client";

import styles from "./Settings.module.scss";

import { CONTACT_MAIL } from "@/lib/config/app";

import Link from "next/link";

import { resetToLanding } from "@/domain/session/resetToLanding";

import Button from "@/components/ui/button/Button";
import ThemeSwitch from "@/components/settingsPage/themeSwitch/ThemeSwitch";

import { useAuth } from "@/lib/context/AuthProvider";
import { APP_VERSION } from "@/lib/init/version";

function Settings() {
  const contactHref = `mailto:${CONTACT_MAIL}`;

  const { user } = useAuth();

  const hasAccount = Boolean(user?.email);

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
          <h2>Compte</h2>

          {hasAccount ? (
            <>
              <div className={styles.subContainer}>
                <div className="text-primary text-body ">E-mail</div>
                <div className="text-primary text-body ">{user?.email}</div>
              </div>
              <div className={styles.legal}>
                <Link
                  href="/auth/password-reset"
                  className={`${styles.link} text-primary text-body-medium`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Modifier mon mot de passe
                </Link>
              </div>
            </>
          ) : (
            <p className="text-center text-primary">
              Vous utilisez actuellement la version démo.
              <br />
              Pour créer un compte et enregistrer durablement vos données,
              déconnectez-vous puis choisissez « Créer un compte ».
            </p>
          )}

          <div className={styles.legal}>
            <Button onClick={resetToLanding}>Se déconnecter</Button>
          </div>
        </div>

        <div className={styles.h2Container}>
          <h2>Infos</h2>
          <div className={styles.subContainer}>
            <div className="text-primary text-body ">Version</div>
            <div className="text-primary text-body ">{APP_VERSION}</div>
          </div>
          <div className={styles.subContainer}>
            <div className="text-primary text-body ">Auteur</div>
            <div className="text-primary text-body ">Marc CHARVOT</div>
          </div>
          <div className={styles.legal}>
            <Link
              href="/legal/mentions-legales"
              className={`${styles.link} text-primary text-body-medium`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mentions légales
            </Link>
          </div>
          <div className={styles.legal}>
            <Link
              href="/legal/politique-confidentialite"
              className={`${styles.link} text-primary text-body-medium`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>

        <div className={styles.h2Container}>
          <h2>Support</h2>

          <div className={styles.btnContainer}>
            <p className="text-primary text-body">Une question ?</p>
            <a href={contactHref}>
              <Button>Me contacter</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
