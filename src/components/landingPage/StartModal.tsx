"use client";

import { useEffect, useState } from "react";
import Button from "../ui/button/Button";
import StartDemoButton from "./StartDemoButton";
import RealAppButton from "./RealAppButton";

import styles from "./StartModal.module.scss";

function StartModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Découvrir Modjiz</Button>

      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              x Fermer
            </button>

            <h2>Comment souhaitez-vous commencer ?</h2>

            <div className={styles.btnContainer}>
              <StartDemoButton />
              <RealAppButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StartModal;
