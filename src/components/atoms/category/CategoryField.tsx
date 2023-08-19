import styles from "@/styles/CategoryField.module.sass";

export interface CategoryFieldProps {
  text: string;
}
export default function CategoryField({ text }: CategoryFieldProps) {
  return (
    <a href="#" className={styles.labelFoodFilter}>
      {text}
    </a>
  );
}
