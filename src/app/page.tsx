"use client";

import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Logo from "@/assets/img/logo.svg";
import LogoShort from "@/assets/img/logo_short.svg";

// const KEY = "hasSeenLanding";

function LandingPage() {
  // const router = useRouter();
  // const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   const hasSeen = localStorage.getItem(KEY) === "true";

  //   if (hasSeen) {
  //     router.replace("/app");
  //     return;
  //   }

  //   localStorage.setItem(KEY, "true");
  //   setChecked(true);
  // }, [router]);

  // if (!checked) return null;

  return (
    <main className={styles.container}>
      <section className={styles.heroSection}>
        <Logo className={styles.heroLogo} />

        <div className={styles.textContainer}>
          <p className={styles.textBody}>
            Les Modjiz sont de petites créatures venues d’un autre univers,
            curieuses de découvrir les émotions humaines. Chaque jour, elles
            t’aident à observer ton humeur avec douceur et sans pression.
          </p>
          <p className={styles.textBody}>
            Les Modjiz sont de petites créatures venues d’un autre univers,
            curieuses de découvrir les émotions humaines. Chaque jour, elles
            t’aident à observer ton humeur avec douceur et sans pression.
          </p>
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.button}>Version de démonstration</button>
          <p className={styles.textSmall}>
            Vous commencerez l&apos;expérience avec un ensemble de données
            pré-enregistrées afin de découvrir l&apos;application
          </p>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.title}>Ce que propose Modjiz</h2>

        <ul className={styles.featuresList}>
          <li className={styles.textList}>
            Note ton humeur chaque jour, en quelques secondes
          </li>

          <li className={styles.textList}>
            Découvre des créatures expressives qui reflètent tes émotions
          </li>

          <li className={styles.textList}>
            Retrouve ton parcours émotionnel en un coup d&apos;oeil
          </li>

          <li className={styles.textList}>
            Débloque des trophées pour rester motivé, sans pression
          </li>
        </ul>
      </section>

      {/* Why */}
      <section className={styles.whySection}>
        <h2 className={styles.title}>Pourquoi Modjiz</h2>

        <p className={styles.textBody}>
          Modjiz est conçu comme un compagnon du quotidien, pensé pour t’aider à
          suivre ton humeur simplement, sans pression ni compétition.
        </p>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>À propos du projet</h2>

          <p className={styles.textBody}>
            Modjiz est un projet personnel conçu pour explorer la conception
            d’interface, l’expérience utilisateur et le développement d’une
            application moderne.
          </p>
        </div>

        <div className={styles.techContainer}>
          <h2 className={styles.title}>Technologies utilisées</h2>

          <ul className={styles.techList}>
            <li className={styles.textList}>React</li>
            <li className={styles.textList}>Sass</li>
            <li className={styles.textList}>TypeScript</li>
            <li className={styles.textList}>State management</li>
          </ul>
        </div>
      </section>

      <section className={styles.endingSection}>
        <p className={styles.tagline}>
          Prends soin de ton humeur, à ton rythme.
        </p>

        <LogoShort className={styles.endingLogo} />
      </section>
    </main>
  );
}

export default LandingPage;
