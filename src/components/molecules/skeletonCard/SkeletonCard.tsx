import styles from "../card/FoodCard.module.sass";

export default function SkeletonCard() {
  return (
    <div
      data-testid="skeleton-card-container"
      className={styles.foodCardContainer}
    >
      <div className={styles.foodCardContent}>
        <div className={`${styles.foodCardImg} ${styles.skeleton}`}></div>
        <div className={styles.foodCardTextContent}>
          <div
            className={`${styles.foodCardTextTitle} ${styles.skeleton} ${styles.skeletonText}`}
          ></div>
          <div
            className={`${styles.foodCardRating} ${styles.skeleton} ${styles.skeletonText}`}
          ></div>
          <div
            className={`${styles.foodCardButtonContent} ${styles.skeletonText}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
