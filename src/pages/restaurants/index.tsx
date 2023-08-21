import { FoodCardProps } from "@/components/molecules/card/FoodCard";
import Categories from "@/components/molecules/categories/Categories";
import RestaurantsLayout from "@/components/organisms/restaurants/RestaurantsLayout";
import RestaurantsTemplate from "@/components/templates/RestaurantsTemplate";
import { YelpCategoriesType, yelpCategoriesData } from "@/types/categories";
import Util from "@/utils";
import { useEffect, useRef, useState } from "react";

export default function RestaurantsPage() {
  const observerTarget = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [restaurants, setRestaurants] = useState<FoodCardProps[]>([]);
  const [categories, setCategories] = useState<YelpCategoriesType[]>([
    ...yelpCategoriesData,
  ]);
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [offset, setoffSet] = useState<number>(0);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    if (currentCategory.length > 0) {
      fetchRestaurants();
    }
  }, [currentCategory]);

  useEffect(() => {
    if (offset > 1) {
      fetchRestaurants();
    }
  }, [offset]);

  useEffect(() => {
    if (restaurants.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          setoffSet((val) => val + 15);
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [restaurants]);

  const fetchRestaurants = async () => {
    setIsLoading(true);
    fetch(
      `/api/restaurants?` +
        new URLSearchParams({
          offset: offset + "",
          categories: currentCategory + "",
        })
    )
      .then((response) => response.json())
      .then((responseOject) => {
        const finalResult: FoodCardProps[] = Util.mapToFoodCardProps(
          responseOject.businesses
        );
        setRestaurants((currentState) => {
          return [...currentState, ...finalResult];
        });
      })
      .catch((err) => {
        console.error(err); // TODO
      });
  };

  const onSelectCategory = (alias: string) => {
    setoffSet(0);
    setRestaurants([]);
    setCurrentCategory(alias);
  };

  return (
    <>
      <RestaurantsTemplate
        isLoading={isLoading}
        pageTitle="Restaurants"
        categories={
          <Categories
            categoryList={categories}
            onSelectCategory={onSelectCategory}
          />
        }
        cards={
          <RestaurantsLayout
            restaurantList={restaurants}
            showSkeletonList={isLoading}
          />
        }
      />
      <div ref={observerTarget}></div>
    </>
  );
}
