import FoodCard, { FoodCardProps } from "@/components/molecules/card/FoodCard";
import styles from "@/styles/Restaurant.layout.module.sass";

export interface RestaurantsProps {
  restaurantList: FoodCardProps[];
}
export default function RestaurantsLayout({
  restaurantList,
}: RestaurantsProps) {
  return (
    <div className={styles.restaurantContainer}>
      {restaurantList.map((restaurant: FoodCardProps, index: number) => {
        return <FoodCard key={index} {...restaurant} />;
      })}
    </div>
  );
}
