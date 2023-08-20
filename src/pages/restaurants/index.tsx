import { FoodCardProps } from "@/components/molecules/card/FoodCard";
import Categories from "@/components/molecules/categories/Categories";
import RestaurantsLayout from "@/components/organisms/restaurants/RestaurantsLayout";
import RestaurantsTemplate from "@/components/templates/RestaurantsTemplate";
import { YelpCategoriesType, yelpCategoriesData } from "@/types/categories";
import { useEffect, useState } from "react";

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<FoodCardProps[]>([]);
  const [categories, setCategories] = useState<YelpCategoriesType[]>([
    ...yelpCategoriesData,
  ]);
  const [currentCategory, setCurrentCategory] = useState<string>("");

  useEffect(() => {
    fetchRestaurants(currentCategory);
  }, [currentCategory]);

  const fetchRestaurants = async (category: string) => {
    fetch(
      "/api/v3/businesses/search?location=San Jose, CA95127&term=restaurants&limit=15&offset=2&categories=" +
        currentCategory,
      {
        headers: {
          Authorization:
            "Bearer XXMhg9NmTyyi8DLdTp7JKkapptmRUFyK-3HXH-m6XKOpWeMX8dPAH2JDmXkb3iOtGSngmHUkFG3dJWDfsFYtFFQVEBw1MOxGb7VbemP7Szv9cZ1XotFy2nnYPzThZHYx",
        },
      }
    )
      .then((response) => response.json())
      .then((responseOject) => {
        const finalResult: FoodCardProps[] = responseOject.businesses.map(
          (business: any) => {
            return {
              name: business.name,
              imageUrl: business.image_url,
              url: business.url,
              rating: business.rating,
              price: business.price,
            };
          }
        );
        setRestaurants(finalResult);
      });
  };

  const onSelectCategory = (alias: string) => {
    console.log("alias", alias);
    setCurrentCategory(alias);
  };

  return (
    <>
      <RestaurantsTemplate
        pageTitle="Restaurants"
        categories={
          <Categories
            categoryList={categories}
            onSelectCategory={onSelectCategory}
          />
        }
        cards={<RestaurantsLayout restaurantList={restaurants} />}
      />
    </>
  );
}
