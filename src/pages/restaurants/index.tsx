import { CategoryContext } from "@/components/CategoryContext";
import { FoodCardProps } from "@/components/molecules/card/FoodCard";
import Categories from "@/components/molecules/categories/Categories";
import Restaurants from "@/components/organisms/restaurants/Restaurants";
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

  // Fetch information when render first time
  useEffect(() => {
    fetchRestaurants();
  }, []);

  // Fetch information when user select a category
  useEffect(() => {
    if (currentCategory.length > 0) {
      fetchRestaurants();
    }
  }, [currentCategory]);

  // Fetch information when user scroll
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
          offset: offset.toString(),
          categories: currentCategory,
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
        alert(err);
      });
  };

  const onSelectCategory = (alias: string) => {
    setoffSet(0);
    setRestaurants([]);
    const newCategory = alias === currentCategory ? " " : alias;

    setCurrentCategory(newCategory);
  };

  return (
    <>
      <RestaurantsTemplate
        isLoading={isLoading}
        pageTitle="Restaurants"
        categories={
          <CategoryContext.Provider value={currentCategory}>
            <Categories
              categoryList={categories}
              onSelectCategory={onSelectCategory}
            />
          </CategoryContext.Provider>
        }
        cards={
          <Restaurants
            restaurantList={restaurants}
            showSkeletonList={isLoading}
          />
        }
      />
      <div ref={observerTarget}></div>
    </>
  );
}
