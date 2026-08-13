import styles from "./Legals.module.scss";

import { CONTACT_MAIL } from "@/lib/config/app";

import Logo from "@/assets/img/logo.svg";

function LegalNotices() {
  return (
    <div className={styles.container}>
      <Logo className={styles.heroLogo} />
      <h1 className="text-center">Mentions Légales</h1>
      <div className={styles.contentContainer}>
        <div className={styles.subContainer}>
          <h2>Éditeur de l'application</h2>
          <div className="text-primary text-policies">
            CHARVOT Marc - {CONTACT_MAIL}
          </div>
        </div>

        <div className={styles.subContainer}>
          <h2>Hébergement</h2>
          <div className={styles.subContainer}>
            <p className="text-primary text-policies">
              L’application est hébergée sur une infrastructure cloud permettant
              son exécution et le stockage sécurisé des données utilisateurs.
            </p>
            <p className="text-primary text-policies">
              Les données sont notamment hébergées via les services de Supabase.
            </p>
          </div>
        </div>

        <div className={styles.subContainer}>
          <h2>Nature du service</h2>
          <p className="text-primary text-policies">
            Modjiz est une application de suivi du bien-être personnel
            permettant à ses utilisateurs d’enregistrer et de consulter leurs
            données au fil du temps.
          </p>

          <p className="text-primary text-policies">
            Certaines fonctionnalités nécessitent la création d’un compte afin
            de permettre la sauvegarde et la synchronisation des données.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>Responsabilité</h2>
          <p className="text-primary text-policies">
            Modjiz est un projet en développement dont les fonctionnalités
            pourront évoluer au fil du temps.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>Avertissement important</h2>
          <p className="text-primary text-policies">
            Toute évolution ayant un impact sur les données personnelles ou leur
            traitement fera l’objet d’une mise à jour de la présente politique
            de confidentialité.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LegalNotices;
