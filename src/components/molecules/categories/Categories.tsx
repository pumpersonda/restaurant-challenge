import CategoryField from "@/components/atoms/category/CategoryField";
import styles from "./Categories.module.sass";
import { YelpCategoriesType } from "@/types/categories";
import React from "react";
import { useEffect } from "react";
export interface CategoriesProps {
  categoryList: YelpCategoriesType[];
  onSelectCategory: (alias: string) => void;
}

export default function Categories({
  categoryList,
  onSelectCategory,
}: CategoriesProps) {
  const item = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = document.getElementById("categories-layout") as HTMLInputElement;
    const onScroll = (e: { preventDefault: () => void; deltaY: number }) => {
      e.preventDefault();

      if (item && item.current) {
        if (e.deltaY > 0) {
          item.current.scrollLeft += 100;
        } else {
          item.current.scrollLeft -= 100;
        }
      }
    };
    el.addEventListener("wheel", onScroll);

    return () => {
      el.removeEventListener("wheel", onScroll);
    };
  }, []);

  return (
    <div
      data-testid="categories-layout"
      id="categories-layout"
      className={styles.categoryContainer}
      ref={item}
    >
      {categoryList.map((category: YelpCategoriesType, index: number) => {
        return (
          <CategoryField
            key={index}
            id={category.alias}
            title={category.title}
            onSelectCategory={onSelectCategory}
          />
        );
      })}
    </div>
  );
}
