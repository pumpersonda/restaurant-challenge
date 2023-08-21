import React, { ReactElement } from "react";
import styles from "./Restaurants.template.module.sass";
import Loading from "../atoms/loading/Loading";
export interface RestaurantsTemplateProps {
  pageTitle: string;
  categories: ReactElement;
  cards: ReactElement;
  isLoading: boolean;
}
export default function RestaurantsTemplate({
  pageTitle,
  categories,
  cards,
  isLoading,
}: RestaurantsTemplateProps) {
  return (
    <div data-testid="restaurants-template">
      <header>
        <h1>{pageTitle}</h1>
      </header>
      <main className={styles.main}>
        {categories}
        {cards}
      </main>
      {isLoading && <Loading />}
    </div>
  );
}
