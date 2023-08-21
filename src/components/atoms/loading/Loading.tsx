import styles from "./Loading.module.sass";

export default function Loading() {
  return (
    <div data-testid="loading-container" className={styles.loadingContainer}>
      <div className={styles.dotFlashing} />
    </div>
  );
}
