"use client";

import styles from "./page.module.scss";
import btnStyle from "@/components/ui/button/Button.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Logo from "@/assets/img/logo.svg";
import LogoShort from "@/assets/img/logo_short.svg";
import Button from "@/components/ui/button/Button";

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
            curieuses de découvrir les émotions humaines.
          </p>
          <p className={styles.textBody}>
            Chaque jour, elles t’aident à observer ton humeur avec douceur et
            sans pression.
          </p>
        </div>

        <div className={styles.btnContainer}>
          <Link href="/app">
            <Button>Version démo</Button>
          </Link>
          <p className={styles.textSmall}>
            Vous commencerez l&apos;expérience avec un ensemble de données
            pré-enregistrées afin de découvrir l&apos;application
          </p>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.title}>Ce que propose Modjiz</h2>

        <ul className={styles.featuresList}>
          <li className={`${styles.iconItem} ${styles.textList}`}>
            <img
              className={`${styles.icon} ${styles.iconMd}`}
              src="/icon_star.svg"
              alt=""
              aria-hidden
            />
            <span>Note ton humeur chaque jour, en quelques secondes</span>
          </li>

          <li className={`${styles.iconItem} ${styles.textList}`}>
            <img
              className={`${styles.icon} ${styles.iconMd}`}
              src="/icon_monster.svg"
              alt=""
              aria-hidden
            />
            <span>
              Découvre des créatures expressives qui reflètent tes émotions
            </span>
          </li>

          <li className={`${styles.iconItem} ${styles.textList}`}>
            <img
              className={`${styles.icon} ${styles.iconMd}`}
              src="/icon_stats.svg"
              alt=""
              aria-hidden
            />
            <span>Retrouve ton parcours émotionnel en un coup d&apos;oeil</span>
          </li>

          <li className={`${styles.iconItem} ${styles.textList}`}>
            <img
              className={`${styles.icon} ${styles.iconMd}`}
              src="/icon_trophy.svg"
              alt=""
              aria-hidden
            />
            <span>Débloque des trophées pour rester motivé, sans pression</span>
          </li>
        </ul>
      </section>

      <section className={styles.whySection}>
        <div className={styles.whySeparator} />
        <div className={styles.whyContainer}>
          <h2 className={styles.title}>Pourquoi Modjiz</h2>

          <p className={styles.textBody}>
            Modjiz est conçu comme un compagnon du quotidien, pensé pour t’aider
            à suivre ton humeur simplement, sans pression ni compétition.
          </p>
        </div>
        <div className={styles.whySeparator} />
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
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
              <li className={`${styles.iconItem} ${styles.textList}`}>
                <img
                  className={`${styles.icon} ${styles.iconLg}`}
                  src="/logo_next.svg"
                  alt=""
                  aria-hidden
                />
                <span>Next.js</span>
              </li>

              <li className={`${styles.iconItem} ${styles.textList}`}>
                <img
                  className={`${styles.icon} ${styles.iconLg}`}
                  src="/logo_react.svg"
                  alt=""
                  aria-hidden
                />
                <span>React</span>
              </li>

              <li className={`${styles.iconItem} ${styles.textList}`}>
                <img
                  className={`${styles.icon} ${styles.iconLg}`}
                  src="/logo_ts.svg"
                  alt=""
                  aria-hidden
                />
                <span>TypeScript</span>
              </li>

              <li className={`${styles.iconItem} ${styles.textList}`}>
                <img
                  className={`${styles.icon} ${styles.iconLg}`}
                  src="/logo_sass.svg"
                  alt=""
                  aria-hidden
                />
                <span>Sass</span>
              </li>
            </ul>
          </div>
        </div>
        <a
          className={btnStyle.button}
          href="https://github.com/PYXHD/Modjiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository Github
        </a>
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
