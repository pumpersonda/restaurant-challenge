import Image from "next/image";
export interface RatingIconProps {
  isFullStar: boolean;
}
export function RatingIcon({ isFullStar }: RatingIconProps) {
  const fullStar = "/star.png";
  const halfStar = "/rating.png";
  return (
    <>
      <Image
        src={isFullStar ? fullStar : halfStar}
        width={15}
        height={15}
        alt="star icon"
      />
    </>
  );
}
