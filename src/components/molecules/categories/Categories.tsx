import CategoryField, {
  CategoryFieldProps,
} from "@/components/atoms/category/CategoryField";
import styles from "@/styles/Categories.module.sass";
import { YelpCategoriesType } from "@/types/categories";
import { MouseEventHandler } from "react";

export interface CategoriesProps {
  categoryList: YelpCategoriesType[];
  onSelectCategory: (alias: string) => void;
}

export default function Categories({
  categoryList,
  onSelectCategory,
}: CategoriesProps) {
  return (
    <div className={styles.categoryContainer}>
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
