import React, { ReactElement } from "react";

export interface RestaurantsTemplateProps {
  pageTitle: string;
  categories: ReactElement;
  cards: ReactElement;
}
export default function RestaurantsTemplate({
  pageTitle,
  categories,
  cards,
}: RestaurantsTemplateProps) {
  return (
    <div>
      <header>
        <h1>{pageTitle}</h1>
      </header>
      <nav>{categories}</nav>
      <main>{cards}</main>
    </div>
  );
}
