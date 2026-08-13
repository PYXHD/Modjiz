import styles from "./Legals.module.scss";
import Link from "next/link";

import { CONTACT_MAIL } from "@/lib/config/app";

import Logo from "@/assets/img/logo.svg";

function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <Logo className={styles.heroLogo} />
      <h1 className="text-center">Politique de confidentialité - Modjiz</h1>

      <div className={styles.contentContainer}>
        <div className={styles.subContainer}>
          <h2>0. Préambule</h2>
          <div className={styles.subContainer}>
            <p className="text-primary text-policies">
              Editeur : CHARVOT Marc
              <br /> Contact : <strong>{CONTACT_MAIL}</strong>
            </p>

            <p className="text-primary text-policies">
              Dernière mise à jour : 13/08/2026
            </p>
          </div>
        </div>

        <div className={styles.subContainer}>
          <h2>1. Collecte des données</h2>
          <div className={styles.subContainer}>
            <p className="text-primary text-policies">
              L’application permet la création d’un compte utilisateur via une
              adresse e-mail. Les données suivantes peuvent être stockées :{" "}
              <br />- adresse e-mail ; <br />- entrées d’humeur et autres
              données saisies par l’utilisateur dans l’application. <br />
            </p>

            <p className="text-primary text-policies">
              Ces données sont hébergées sur l’infrastructure Supabase afin de
              permettre l’authentification et la sauvegarde des informations
              associées au compte utilisateur.
            </p>
          </div>
        </div>

        <div className={styles.subContainer}>
          <h2>2. Utilisation des données</h2>
          <p className="text-primary text-policies">
            Les données sont utilisées uniquement pour : <br />- authentifier
            l’utilisateur ; <br />- permettre l’accès à son compte ; <br />-
            sauvegarder et restituer les informations créées dans l’application.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>3. Durée de conservation</h2>
          <p className="text-primary text-policies">
            Les données sont conservées tant que le compte utilisateur reste
            actif.
          </p>
          <p className="text-primary text-policies">
            L’utilisateur peut supprimer son compte et les données qui lui sont
            associées directement depuis l’application.
          </p>
          <p className="text-primary text-policies">
            Une procédure de suppression est également disponible en ligne à
            l’adresse suivante :
          </p>
          <Link
            href="/legal/suppression-compte"
            className={styles.deleteButton}
          >
            → Supprimer mon compte
          </Link>
        </div>

        <div className={styles.subContainer}>
          <h2>4. Cookies et traceurs</h2>
          <p className="text-primary text-policies">
            L’application utilise des cookies et mécanismes techniques
            nécessaires à son fonctionnement, notamment pour maintenir la
            session de connexion, mémoriser certaines préférences et assurer la
            sécurité des opérations d’authentification.
          </p>
          <p className="text-primary text-policies">
            Aucun cookie publicitaire, de profilage ou de suivi marketing n’est
            utilisé.
          </p>
          <p className="text-primary text-policies">
            L’application utilise Cloudflare Turnstile afin de protéger
            certaines fonctionnalités, notamment l’authentification, contre les
            abus automatisés. Dans le cadre de ce service, Cloudflare peut
            traiter certaines informations techniques relatives à la connexion
            et à l’environnement de l’utilisateur afin de détecter les
            comportements automatisés. Ces informations sont traitées par
            Cloudflare conformément à sa politique de confidentialité.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>5. Sécurité</h2>
          <p className="text-primary text-policies">
            Les données sont stockées et transmises via des services tiers
            utilisés pour le fonctionnement de l’application, notamment Supabase
            pour l’authentification et l’hébergement des données.
          </p>

          <p className="text-primary text-policies">
            Des mesures de sécurité raisonnables sont mises en œuvre afin de
            protéger les données contre les accès non autorisés, la perte ou
            l’altération.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>6. Évolution de l’application</h2>
          <p className="text-primary text-policies">
            L’application est en constante évolution. Son fonctionnement, ses
            fonctionnalités ainsi que les services utilisés pourront être amenés
            à évoluer au fil du temps.
          </p>

          <p className="text-primary text-policies">
            En cas de modification significative du traitement des données
            personnelles, la présente politique de confidentialité sera mise à
            jour.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>7. Contact</h2>
          <p className="text-primary text-policies">
            Pour toute question relative à cette politique de confidentialité,
            vous pouvez contacter : <strong>{CONTACT_MAIL}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
