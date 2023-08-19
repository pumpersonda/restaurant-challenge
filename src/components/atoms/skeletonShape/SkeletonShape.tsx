import styles from "@/styles/SkeletonShape.module.sass";

export enum Shape {
  Circle,
  Box,
}

export interface SkeletonShapeProps {
  shape: Shape;
}

export function SkeletonShape({ shape }: SkeletonShapeProps) {
  return (
    <div
      className={
        shape === Shape.Circle ? styles.SkeletonCircle : styles.SkeletonCircle
      }
    ></div>
  );
}
