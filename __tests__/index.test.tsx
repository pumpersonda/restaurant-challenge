import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import RestaurantsPage from "@/pages/restaurants/index";
import "@testing-library/jest-dom";
import { yelpCategoriesData } from "@/types/categories";
import FoodCard, { FoodCardProps } from "@/components/molecules/card/FoodCard";
import RestaurantsTemplate from "@/components/templates/RestaurantsTemplate";
import RestaurantsLayout from "@/components/organisms/restaurants/RestaurantsLayout";
import Util from "@/utils";
import { restaurantsDataExample } from "./data";

describe("Restaurants", () => {
  const fetchMock = (global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ businesses: [] }),
    })
  ));

  it("should show 10 skeleton cards by default if loading", async () => {
    render(<RestaurantsPage />);
    await act(() => {
      const template = screen.getAllByTestId("restaurants-template");
      expect(template).not.toBeNull();
      const skeletonContainer = screen.getAllByTestId(
        "skeleton-card-container"
      );
      expect(skeletonContainer.length).toBe(10);
    });
  });

  it("should show loading component", async () => {
    render(<RestaurantsPage />);
    await act(() => {
      const template = screen.getByTestId("loading-container");
      expect(template).toBeVisible();
    });
  });

  it("should fetch data when renders", async () => {
    render(<RestaurantsPage />);
    await act(() => {
      expect(fetchMock).toHaveBeenCalled();
    });
  });

  it("should show all categories", async () => {
    render(<RestaurantsPage />);

    await act(() => {
      const total = [...yelpCategoriesData].length;
      const categories = screen.getByTestId("categories-layout");
      expect(categories.children.length).toBe(total);
    });
  });

  it("should show View button with all properties", () => {
    const foodCards: FoodCardProps[] = Util.mapToFoodCardProps(
      restaurantsDataExample.businesses
    );
    render(
      <RestaurantsTemplate
        cards={
          <RestaurantsLayout
            restaurantList={foodCards}
            showSkeletonList={false}
          />
        }
        categories={<></>}
        isLoading={false}
        pageTitle="Restaurant test"
      />
    );
    const cards = screen.getAllByTestId("food-card-container");

    expect(cards.length).toBe(restaurantsDataExample.businesses.length);
    const viewButton = cards[0].querySelector("a") as HTMLAnchorElement;
    expect(viewButton).toHaveTextContent("VIEW");
    expect(viewButton).toHaveAttribute("target", "_blank");
    expect(viewButton).toHaveAttribute(
      "href",
      restaurantsDataExample.businesses[0].url
    );
  });
});
