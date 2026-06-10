import styles from "./Legals.module.scss";

import Logo from "@/assets/img/logo.svg";

function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <Logo className={styles.heroLogo} />
      <h1 className="text-center">Politique de confidentialité</h1>
      <div className={styles.contentContainer}>
        <div className={styles.subContainer}>
          <h2>1. Collecte des données</h2>
          <div className={styles.subContainer}>
            <p className="text-primary text-body">
              L’application ne collecte aucune donnée personnelle.
            </p>
            <p className="text-primary text-body">
              L’application permet la création d’un compte utilisateur via une
              adresse e-mail. Les données suivantes peuvent être stockées :{" "}
              <br />- adresse e-mail ; <br />- données créées par l’utilisateur
              dans l’application. <br />
            </p>

            <p className="text-primary text-body">
              Ces données sont hébergées sur l’infrastructure Supabase afin de
              permettre l’authentification et la sauvegarde des informations
              associées au compte utilisateur.
            </p>
          </div>
        </div>

        <div className={styles.subContainer}>
          <h2>2. Utilisation des données</h2>
          <p className="text-primary text-body">
            Les données sont utilisées uniquement pour : <br />- authentifier
            l’utilisateur ; <br />- permettre l’accès à son compte ; <br />-
            sauvegarder et restituer les informations créées dans l’application.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>3. Durée de conservation</h2>
          <p className="text-primary text-body">
            Les données sont conservées tant que le compte utilisateur reste
            actif. L’utilisateur peut demander la suppression de son compte et
            de ses données en contactant l’éditeur.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>4. Cookies et traceurs</h2>
          <p className="text-primary text-body">
            L’application utilise uniquement des cookies et mécanismes
            techniques nécessaires à son fonctionnement.
          </p>
          <p className="text-primary text-body">
            Ces cookies peuvent notamment permettre : <br />- de mémoriser
            certaines préférences utilisateur ; <br />- de maintenir la session
            de connexion ; <br />- d'assurer la sécurité des opérations
            d'authentification.
          </p>
          <p className="text-primary text-body">
            L’application utilise également Cloudflare Turnstile afin de
            protéger les formulaires contre les abus automatisés.
          </p>
          <p className="text-primary text-body">
            Aucun cookie publicitaire, de profilage ou de suivi marketing n’est
            utilisé.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>5. Sécurité</h2>
          <p className="text-primary text-body">
            Les données sont stockées et transmises via des services tiers
            utilisés pour le fonctionnement de l’application, notamment Supabase
            pour l’authentification et l’hébergement des données.
          </p>

          <p className="text-primary text-body">
            Des mesures de sécurité raisonnables sont mises en œuvre afin de
            protéger les données contre les accès non autorisés, la perte ou
            l’altération.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>6. Évolution de l’application</h2>
          <p className="text-primary text-body">
            L’application est en constante évolution. Son fonctionnement, ses
            fonctionnalités ainsi que les services utilisés pourront être amenés
            à évoluer au fil du temps.
          </p>

          <p className="text-primary text-body">
            En cas de modification significative du traitement des données
            personnelles, la présente politique de confidentialité sera mise à
            jour.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>7. Contact</h2>
          <p className="text-primary text-body">
            Pour toute question relative à cette politique de confidentialité,
            vous pouvez contacter : <strong>pyxhd@outlook.fr</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
