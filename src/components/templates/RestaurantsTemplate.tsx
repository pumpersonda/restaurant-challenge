import React, { ReactElement, useState } from "react";
import styles from "@/styles/Restaurants.template.module.sass";
import SkeletonCard from "../molecules/skeletonCard/SkeletonCard";
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
    <div>
      <header>
        <h1>{pageTitle}</h1>
      </header>
      <nav className={styles.nav}>{categories}</nav>
      <main>{cards}</main>
      {isLoading && <Loading />}
    </div>
  );
}
