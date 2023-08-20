import styles from "@/styles/Loading.module.sass";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.dotFlashing} />
    </div>
  );
}
