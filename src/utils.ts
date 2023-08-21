import { FoodCardProps } from "./components/molecules/card/FoodCard";
const Util: any = {};

Util.mapToFoodCardProps = function (businesses: any[]): FoodCardProps[] {
  return businesses.map((business: any) => {
    return {
      id: business.id,
      name: business.name,
      imageUrl: business.image_url,
      url: business.url,
      rating: business.rating,
      price: business.price,
    };
  });
};

export default Util;
