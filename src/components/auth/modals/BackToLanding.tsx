"use client";

import styles from "./AuthModal.module.scss";

import { resetToLanding } from "@/domain/session/resetToLanding";

function BackToLanding() {
  return (
    <div className={styles.info}>
      <button
        type="button"
        className={`text-lead ${styles.link}`}
        onClick={resetToLanding}
      >
        ↩ Retour à l'accueil
      </button>
    </div>
  );
}

export default BackToLanding;
