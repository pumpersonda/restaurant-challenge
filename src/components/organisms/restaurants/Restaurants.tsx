import FoodCard, { FoodCardProps } from "@/components/molecules/card/FoodCard";
import SkeletonCard from "@/components/molecules/skeletonCard/SkeletonCard";
import styles from "@/styles/Restaurant.layout.module.sass";

export interface RestaurantsProps {
  restaurantList: FoodCardProps[];
  showSkeletonList?: boolean;
}
export default function Restaurants({
  restaurantList,
  showSkeletonList = false,
}: RestaurantsProps) {
  return (
    <div className={styles.restaurantContainer}>
      {showSkeletonList && restaurantList.length === 0
        ? [...Array(10)].map((e: number, i: number) => <SkeletonCard key={i} />)
        : restaurantList.map((restaurant: FoodCardProps, index: number) => {
            return <FoodCard key={index} {...restaurant} />;
          })}
    </div>
  );
}
