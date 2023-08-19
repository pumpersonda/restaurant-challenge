import CategoryField, {
  CategoryFieldProps,
} from "@/components/atoms/category/CategoryField";
import styles from "@/styles/Categories.module.sass";

export interface CategoriesProps {
  categoryList: string[];
}

export default function Categories({ categoryList }: CategoriesProps) {
  return (
    <div className={styles.categoryContainer}>
      {categoryList.map((category: string, index: number) => {
        return <CategoryField key={index} text={category} />;
      })}
    </div>
  );
}
