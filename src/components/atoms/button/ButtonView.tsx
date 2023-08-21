import styles from "./Button.module.sass";
export interface ButtonProps {
  url: string;
}

export default function ButtonView({ url }: ButtonProps) {
  return (
    <a className={styles.btnView} href={url} target="_blank">
      VIEW
    </a>
  );
}
