import styles from "./Legals.module.scss";

function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleCentered}>Politique de confidentialité</h1>
      <div className={styles.contentContainer}>
        <div className={styles.subContainer}>
          <h2>1. Collecte des données</h2>
          <div>
            <div className={styles.textBody}>
              L’application ne collecte aucune donnée personnelle.
            </div>
            <div className={styles.textBody}>
              Les informations éventuellement saisies par l’utilisateur (humeur,
              notes) sont stockées uniquement de manière temporaire dans le
              navigateur via le mécanisme de sessionStorage. Ces données ne sont
              pas transmises à un serveur et ne sont accessibles qu’à
              l’utilisateur.
            </div>
          </div>
        </div>

        <div className={styles.subContainer}>
          <h2>Nature du service</h2>
          <p className={styles.textBody}>
            Cette application est une version de démonstration (mock) permettant
            de tester des fonctionnalités de suivi d’humeur.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>2. Utilisation des données</h2>
          <p className={styles.textBody}>
            Les données sont utilisées uniquement pour permettre le
            fonctionnement de l’application pendant la session en cours.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>3. Durée de conservation</h2>
          <p className={styles.textBody}>
            Les données sont automatiquement supprimées à la fermeture de la
            session du navigateur.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>4. Cookies et traceurs</h2>
          <p className={styles.textBody}>
            L’application n’utilise pas de cookies ni de traceurs à des fins de
            suivi ou d’analyse.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>5. Sécurité</h2>
          <p className={styles.textBody}>
            Aucune donnée n’étant stockée sur un serveur, aucun traitement
            externe n’est effectué.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>6. Évolution de l’application</h2>
          <p className={styles.textBody}>
            Cette application étant en version de démonstration (mock), son
            fonctionnement pourra évoluer. <br /> En cas de collecte ou de
            stockage de données à l’avenir, la présente politique sera mise à
            jour.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>7. Contact</h2>
          <p className={styles.textBody}>
            Pour toute question relative à cette politique de confidentialité,
            vous pouvez contacter : <strong>pyxhd@outlook.fr</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
