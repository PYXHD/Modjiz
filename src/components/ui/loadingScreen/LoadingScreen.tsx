import styles from "./LoadingScreen.module.scss";

type LoadingScreenProps = {
  message: string;
  children?: React.ReactNode;
};

function LoadingScreen({ message, children }: LoadingScreenProps) {
  return (
    <div className={styles.container}>
      <p className="text-body">{message}</p>
      {children}
    </div>
  );
}

export default LoadingScreen;
