import Image from "next/image";

import Logo from "@/assets/img/logo.svg";
import LogoShort from "@/assets/img/logo_short.svg";

import StartDemoButton from "@/components/landingPage/StartDemoButton";
import RealAppButton from "./RealAppButton";

import styles from "./LandingContent.module.scss";

function LandingContent() {
  return (
    <main className={styles.container}>
      <section className={styles.heroSection}>
        <Logo className={styles.heroLogo} />
        <Image
          src="/img/Modjiz_show.webp"
          alt="Modjiz Show up"
          width={1000}
          height={406}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.heroImg}
          priority
        />
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
          <StartDemoButton />
          <p className={styles.textSmall}>
            Vous commencerez l&apos;expérience avec un ensemble de données
            pré-enregistrées afin de découvrir l&apos;application
          </p>
        </div>
        <div className={styles.btnContainer}>
          <RealAppButton />
          <p className={styles.textSmall}>
            Inscrivez-vous et vivez l&apos;expérience jour après jour
          </p>
        </div>
        {/* insérer lien lorsque l'app sera déployée */}
        <div className={styles.btnContainer}>
          <img
            className={`${styles.icon} ${styles.iconXl}`}
            src="/icons/icon_googlePlay.svg"
            alt="Icon PostgreSQL"
            aria-hidden
          />
          <p className={styles.textGooglePlay}>Bientôt disponible sur mobile</p>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2 className="text-inverse">Ce que propose Modjiz</h2>

        <ul className={styles.featuresList}>
          <li className={`${styles.iconItem} ${styles.textList}`}>
            <img
              className={`${styles.icon} ${styles.iconMd}`}
              src="/icons/icon_star.svg"
              alt="Icon Star"
              aria-hidden
            />
            <span>Note ton humeur chaque jour, en quelques secondes</span>
          </li>

          <li className={`${styles.iconItem} ${styles.textList}`}>
            <img
              className={`${styles.icon} ${styles.iconMd}`}
              src="/icons/icon_monster.svg"
              alt="Icon Monster"
              aria-hidden
            />
            <span>
              Découvre des créatures expressives qui reflètent tes émotions
            </span>
          </li>

          <li className={`${styles.iconItem} ${styles.textList}`}>
            <img
              className={`${styles.icon} ${styles.iconMd}`}
              src="/icons/menu_stats.svg"
              alt="Icon Stats"
              aria-hidden
            />
            <span>Retrouve ton parcours émotionnel en un coup d&apos;oeil</span>
          </li>

          <li className={`${styles.iconItem} ${styles.textList}`}>
            <img
              className={`${styles.icon} ${styles.iconMd}`}
              src="/icons/icon_trophy.svg"
              alt="Icon Trophy"
              aria-hidden
            />
            <span>Débloque des trophées pour rester motivé, sans pression</span>
          </li>
        </ul>
      </section>

      <section className={styles.whySection}>
        <div className={styles.whySeparator} />
        <div className={styles.whyContainer}>
          <h2>Pourquoi Modjiz</h2>

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
            <h2 className="text-inverse">À propos du projet</h2>

            <p className={styles.textBody}>
              Modjiz est une application de suivi de l’humeur conçue autour
              d’une expérience simple, interactive et personnalisée. Le projet
              couvre le développement web, mobile, backend et 3D.
            </p>
          </div>

          <div className={styles.techContainer}>
            <h2 className="text-inverse">Technologies utilisées</h2>

            <ul className={styles.techList}>
              <li className={`${styles.iconItem} ${styles.textList}`}>
                <img
                  className={`${styles.icon} ${styles.iconLg}`}
                  src="/icons/logo_react.svg"
                  alt="Icon React"
                  aria-hidden
                />
                <span>React</span>
              </li>

              <li className={`${styles.iconItem} ${styles.textList}`}>
                <img
                  className={`${styles.icon} ${styles.iconLg}`}
                  src="/icons/logo_next.svg"
                  alt="Icon Next"
                  aria-hidden
                />
                <span>Next.js</span>
              </li>

              <li className={`${styles.iconItem} ${styles.textList}`}>
                <img
                  className={`${styles.icon} ${styles.iconLg}`}
                  src="/icons/logo_ts.svg"
                  alt="Icon Ts"
                  aria-hidden
                />
                <span>TypeScript</span>
              </li>

              <li className={`${styles.iconItem} ${styles.textList}`}>
                <img
                  className={`${styles.icon} ${styles.iconLg}`}
                  src="/icons/logo_expo.svg"
                  alt="Icon Expo"
                  aria-hidden
                />
                <span>Expo</span>
              </li>

              <li className={`${styles.iconItem} ${styles.textList}`}>
                <img
                  className={`${styles.icon} ${styles.iconLg}`}
                  src="/icons/logo_supabase.svg"
                  alt="Icon Supabase"
                  aria-hidden
                />
                <span>Supabase</span>
              </li>

              <li className={`${styles.iconItem} ${styles.textList}`}>
                <img
                  className={`${styles.icon} ${styles.iconLg}`}
                  src="/icons/logo_postgresql.svg"
                  alt="Icon PostgreSQL"
                  aria-hidden
                />
                <span>PostgreSQL</span>
              </li>

              <li className={`${styles.iconItem} ${styles.textList}`}>
                <img
                  className={`${styles.icon} ${styles.iconLg}`}
                  src="/icons/logo_three.svg"
                  alt="Icon Three"
                  aria-hidden
                />
                <span>Three.js</span>
              </li>

              <li className={`${styles.iconItem} ${styles.textList}`}>
                <img
                  className={`${styles.icon} ${styles.iconLg}`}
                  src="/icons/logo_blender.svg"
                  alt="Icon Blender"
                  aria-hidden
                />
                <span>Blender</span>
              </li>
            </ul>
          </div>
        </div>
        <a
          href="https://github.com/PYXHD/Modjiz"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lead ${styles.githubLink}`}
        >
          Repository Github
        </a>
      </section>

      <section className={styles.endingSection}>
        <p className="text-center text-lead">
          Prends soin de ton humeur, à ton rythme.
        </p>
        <LogoShort className={styles.endingLogo} />
      </section>
    </main>
  );
}

export default LandingContent;
