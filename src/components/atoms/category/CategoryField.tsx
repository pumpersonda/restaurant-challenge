import { CategoryContext } from "@/components/CategoryContext";
import styles from "@/styles/CategoryField.module.sass";
import { MouseEventHandler, useContext } from "react";

export interface CategoryFieldProps {
  id: string;
  title: string;
  onSelectCategory: (alias: string) => void;
}
export default function CategoryField({
  id,
  title,
  onSelectCategory,
}: CategoryFieldProps) {
  const onSelect = () => {
    onSelectCategory(id);
  };
  const currentCategory = useContext(CategoryContext);
  const selected = currentCategory === id ? styles.selected : "";
  return (
    <a
      id={id}
      href="#"
      className={`${styles.labelFoodFilter} ${selected}`}
      onClick={onSelect}
    >
      {title}
    </a>
  );
}
