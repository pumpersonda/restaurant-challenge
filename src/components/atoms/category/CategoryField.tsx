import styles from "@/styles/CategoryField.module.sass";
import { MouseEventHandler } from "react";

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
  return (
    <a id={id} href="#" className={styles.labelFoodFilter} onClick={onSelect}>
      {title}
    </a>
  );
}
