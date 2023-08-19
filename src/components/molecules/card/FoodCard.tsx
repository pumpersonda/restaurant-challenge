import ButtonView from "@/components/atoms/button/ButtonView";
import styles from "@/styles/FoodCard.module.sass";
import Image from "next/image";

export interface FoodCardProps {
  imageUrl: string;
  name: string;
  rating: string;
  price: string;
  url: string;
}

export default function FoodCard({
  imageUrl,
  name,
  rating,
  price,
  url,
}: FoodCardProps) {
  return (
    <div className={styles.foodCardContainer}>
      <div className={styles.foodCardContent}>
        <div className={styles.foodCardImg}>
          <Image src={imageUrl} width={120} height={120} alt={name} />
        </div>
        <div className={styles.foodCardTextContent}>
          <div className={styles.foodCardTextTitle}>{name}</div>
          <div className={styles.foodCardRating}>
            <div>{rating}</div>
            <div>{price}</div>
          </div>
          <div className={styles.foodCardButtonContent}>
            <ButtonView url={url} />
          </div>
        </div>
      </div>
    </div>
  );
}
