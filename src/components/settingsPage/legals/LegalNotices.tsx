import styles from "./Legals.module.scss";

function LegalNotices() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleCentered}>Mentions Légales</h1>
      <div className={styles.contentContainer}>
        <div className={styles.subContainer}>
          <h2>Éditeur de l'application</h2>
          <div className={styles.textBody}>CHARVOT Marc - pyxhd@oultook.fr</div>
        </div>

        <div className={styles.subContainer}>
          <h2>Hébergement</h2>
          <div>
            <div className={styles.textBody}>
              L'application est hébergée par :
            </div>
            <div className={styles.textBody}>GitHub Inc.</div>
            <div className={styles.textBody}>
              88 Colin P Kelly Jr St, San Francisco, CA 94107, USA
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
          <h2>Responsabilité</h2>
          <p className={styles.textBody}>
            Les informations fournies dans l’application sont à titre indicatif.
            L’éditeur ne saurait garantir leur exactitude ou leur exhaustivité.
          </p>
        </div>

        <div className={styles.subContainer}>
          <h2>Avertissement important</h2>
          <p className={styles.textBody}>
            Cette application est un outil de suivi du bien-être personnel. Elle
            ne constitue en aucun cas un dispositif médical, ni un outil de
            diagnostic ou de traitement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LegalNotices;
